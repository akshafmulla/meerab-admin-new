<template>
    <header>
        <v-navigation-drawer class="blue-grey lighten-5 height-app" v-model="drawer" temporary app width="310">
            <v-list class="py-0">
                <v-list-item class="primary py-0">
                    <v-list-item-content class="py-0">
                        <v-row>
                            <v-col class="pt-3 text-right">
                                <img src="/logo/logo-white.png"  alt="" style="width:40px">
                            </v-col>
                            <v-col>
                                <img src="https://2t9esv145xja440jqlys74xp-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Nathan-Nanthan-Logo.png" alt="" style="width:175px">
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list class="blue-grey lighten-5">
                <v-list-item class="justify-center">
                    <v-avatar size="90" class="" v-if="user.hasOwnProperty('image_url') && user.image_url != ''">
                        <v-img :src="user.image_url" alt="User"  ></v-img>
                    </v-avatar>
                    <v-avatar size="90" color="orange" class="white--text display-1" v-else>{{user.first_name | firstLetter}}</v-avatar>
                </v-list-item>
                <v-list-item-content class="pt-0 text-center" >
                    <v-list-item-title class="title">{{user.first_name}} {{user.last_name}}</v-list-item-title>
                    <v-list-item-title class="caption">{{user.personal.designation}}</v-list-item-title>
                </v-list-item-content>
            </v-list>
            <v-divider></v-divider>
            <v-list class="pt-2 blue-grey lighten-5">  
                <v-list-item>
                    <v-btn outlined min-width="200" color="green darken-2" to="/pro/create" dark><v-icon class="mr-1 ">mdi-plus</v-icon> <span class=""> Visa Request </span></v-btn>
                </v-list-item>
                <v-list-item >
                    <v-btn outlined color="teal darken-2" to="/incident/add" dark><v-icon class="mr-1 ">mdi-plus</v-icon> <span class=""> Support Ticket &nbsp; </span></v-btn>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list class="pt-2 grey--text">
                <v-list-item to="/dashboard" v-if="isAdminRole !== 'false' || isManagerRole !== 'false' ">
                    <v-list-item-action>
                        <v-icon>mdi-monitor-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/pro" v-if="isAdminRole !== 'false' || isManagerRole !== 'false' ">
                    <v-list-item-action>
                        <v-icon>mdi-passport</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>PRO</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!-- <v-list-item to="/users" v-if="isAdminRole !== 'false' || isManagerRole !== 'false' ">
                    <v-list-item-action>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Employees</v-list-item-title>
                    </v-list-item-content>
                </v-list-item> -->
                <v-list-item to="/user/onboarding" v-if="employeeRole !== 'false'">
                    <v-list-item-action>
                        <v-icon>mdi-monitor-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>  
                </v-list-item>
                <v-list-item to="/incident">
                    <v-list-item-action>
                        <v-icon color="grey--darken-2">mdi-handshake-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="grey--text text--darken-2">Support Requests</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/rewards">
                    <v-list-item-action>
                        <v-icon color="grey--darken-2">mdi-gift-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="grey--text text--darken-2">Rewards</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/resources">
                    <v-list-item-action>
                        <v-icon color="grey--darken-2">mdi-semantic-web</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="grey--text text--darken-2">Resources</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar :clipped-left="clipped" fixed flat app color="primary" :dark="true">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-btn @click.prevent="home" text class="white--text">
                ADQ Groups
            </v-btn> 
            <v-spacer />
            <v-tooltip bottom color="white primary--text">
                <template v-slot:activator="{ on, attrs }">
                <v-btn icon large class="mr-2" to="/pro" v-bind="attrs" v-on="on">
                    <v-icon>mdi-passport</v-icon>
                </v-btn>
                </template>
            PRO
            </v-tooltip>
            <v-tooltip bottom color="white primary--text">
                <template v-slot:activator="{ on, attrs }">
                <v-btn icon large class="mr-2" to="/incident" v-bind="attrs" v-on="on">
                    <v-icon>mdi-handshake-outline</v-icon>
                </v-btn>
                </template>
            Support
            </v-tooltip>
            <v-tooltip bottom color="white primary--text">
                <template v-slot:activator="{ on, attrs }">
                <v-btn icon large class="mr-2" @click.prevent="home" v-bind="attrs" v-on="on">
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                </template>
            Home
            </v-tooltip>
            <v-menu bottom rounded offset-y>
                <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="white" v-bind="attrs" v-on="on">
                    <v-avatar class="" color="orange" size="40"  v-if="user.hasOwnProperty('image_url') && user.image_url != ''">
                        <img :src="user.image_url" >
                    </v-avatar>
                    <v-avatar size="40" color="orange" class="white--text" v-else>{{user.first_name | firstLetter}}</v-avatar>
                </v-btn>
                </template>
                <v-list class="px-2 py-0">
                    <v-list-item @click.prevent="logout">
                        <v-list-item-title depressed color="primary" ><v-icon class="primary--text">mdi-logout</v-icon>&nbsp; &nbsp;Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>    
        </v-app-bar>
    </header>
</template>

<script>

export default {
    data () {
        return {
            // users:'',
            emailBadgeMessage: 1,
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
            {
                icon: 'mdi-apps',
                title: 'Dashboard',
                to: '/visa-outsourcing'
            },
            {
                icon: 'mdi-account-plus',
                title: 'Visa Outsourcing',
                to: '/visa-outsourcing'
            }
            ],
            miniVariant: true,
            right: true,
            rightDrawer: false,
            title: 'Meerab Properties',
            company: 'Meerab',
            user:{
                personal:{},
                bank:{},
                education:{},
                work_experience:{},
                documents:{},
                emergency:{},
                reporting:{},
                leaves:{},
                salary:{}
            },
            isAdminRole: false,
            isManagerRole: false,
            isHRMgrRole: false,
            isFinanceMgrRole: false,
            onboardingRole: false,
            employeeRole: false,
            logs:{},
            items:[
                {name:'',icon:''}
            ],
            myWork:true,
            myHR:true,
            managerCentral:true,
            tr_dev: true,
            reports:true,
        }
    },
    
    mounted() {
        this.getUserInfo(),
        this.getRole()
    },
    methods: {
        getUserInfo() {
        },
        getRole() {
            
            
        },
        logout() {
            this.$store.dispatch('logout')
            .then( () =>  this.$router.push("/"))
        },
        home(){
            this.$router.push("/dashboard")
        },
    },
    computed: {
        firstNameInitial() {
            return this.user.first_name.substr(0,1)
        },
        
    }
}
</script>
<style scoped>
.avatar {
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    text-align: center;
    display: flex;
    background: #1565c0 !important;
    color: #fff;
    width: 80px;
    height: 80px;
    font-size: 2rem;
}
#rounded-card {
  border-radius: 50%; 
  min-height: 100px;
  min-width: 120px;
  padding: 15px;
  /* border: 1px solid blue; */
}

.height-app {
    height: 100% !important;
}

.v-btn {
  min-width: 500;
}
</style>