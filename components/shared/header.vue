<template>
    <header>
        <v-app-bar :clipped-left="clipped" fixed flat app color="grad" class="white--text" dark>
            <v-btn @click.prevent="home" text class="white--text text--darken-2">
                Meerab Properties
            </v-btn>
            <v-spacer/>
            <v-btn text small class="mr-1 white--text text--darken-2" @click.prevent="redirect('/')">Home</v-btn>
            <!-- <v-btn text small class="mr-1 white--text text--darken-2" @click.prevent="redirect('/invest-with-us')">Invest With US</v-btn> -->
            <!-- <v-btn text small class="mr-1 white--text text--darken-2" @click.prevent="redirect('/why-dubai')">Why Dubai</v-btn> -->
            <v-menu bottom rounded offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mr-1 white--text text--darken-2" text v-bind="attrs" v-on="on">Properties</v-btn>
                </template>
                <v-list class="px-2 py-0" style="background-color : #b9952a;">
                    <v-list-item @click.prevent="redirect('/properties/offplan')">
                        <v-list-item-title depressed class="white--text text--darken-2" >Offplan</v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-item @click.prevent="redirect('/properties/buy')">
                        <v-list-item-title depressed class="white--text text--darken-2" >Buy</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click.prevent="redirect('/properties/rent')">
                        <v-list-item-title depressed class="white--text text--darken-2" >Rent</v-list-item-title>
                    </v-list-item> -->
                </v-list>
            </v-menu>   
            <!-- <v-btn text small class="mr-1 white--text text--darken-2" @click.prevent="redirect('/property-management')">Property Management</v-btn> -->
            <!-- <v-btn text small class="mr-1 white--text text--darken-2" @click.prevent="redirect('/list-property')">List Your Property</v-btn> -->
            <!-- <v-btn text small class="mr-1 white--text text--darken-2" @click.prevent="redirect('/about-us')">About Us</v-btn> -->
            <!-- <v-btn text small class="mr-1 white--text text--darken-2" @click.prevent="redirect('/contact-us')">Contact Us</v-btn> -->
        </v-app-bar>
    </header>
</template>

<script>

export default {
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            miniVariant: true,
            right: true,
            rightDrawer: false,
            title: 'Meerab Properties',
            company: 'Meerab',
        }
    },
    
    mounted() {},
    methods: {
        home(){
            this.$router.push("/")
        },
        redirect(val){
            this.$router.push(val)
        }
    },
    computed: {}
}
</script>
<style scoped>
.grad {
  background-image: linear-gradient(to right, rgba(166,124,0), rgb(240, 224, 87));
  /* background-color: white; */
}
</style>