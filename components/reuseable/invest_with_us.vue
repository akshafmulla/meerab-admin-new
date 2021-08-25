<template>
    <div class="ma-15">
        <p class="text-center display-1 font-weight-light">INVEST WITH MEERAB GROUP</p>
        <v-row class="px-10">
            <v-col cols="12" sm="6" md="4" lg="2" class="text-center" v-for="(data,index) in invest_cards" :key="index">
                <v-card flat>
                    <p class="text-center"><v-icon size="30">{{data.icon}}</v-icon></p>
                    <v-divider class="mx-10 mb-2 mt-n2"></v-divider>
                    <p class="font-weight-bold">{{data.name}}</p>
                    <p class="caption">{{data.desc}}</p>
                </v-card>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col class="text-center" cols="12" sm="12" md="12" lg="12">
                <iframe class="" :width="windowSize ? '220' : '1000'" :height="windowSize ? '250' : '600'"  src="https://my.matterport.com/show/?m=nkzxFL8kyxL" frameborder="0" allowfullscreen></iframe>
            </v-col>
        </v-row> -->
    </div>
</template>

<script>

export default {
    
    data(){
        return{
            // sm:true,
            invest_cards:[
                {icon:'mdi-home-city-outline',name:'Award Winning Properties',desc:'Landmark hotels and residences in prime locations'},
                {icon:'mdi-google-earth',name:'Strategic Partners',desc:'key alloances with gloabal hospitality brands'},
                {icon:'mdi-currency-usd',name:'Returns in US Dollars',desc:' Strong and consistent cash returns pegged to US Dollars'},
                {icon:'mdi-cash-plus',name:'Investor Benefit',desc:'An incredible array of owner perks and lifestyle benefits'},
                {icon:'mdi-handshake-outline',name:'Hassle-Free Experience',desc:'A bespoke approach to customer service'},
                {icon:'mdi-helicopter',name:'Exclusive Tour for Investors',desc:'An investment visit to Dubai to explore our properties'},
            ],
        }
    },
    mounted(){},
    methods:{
        
    },
    computed:{
        windowSize(){
            return this.$vuetify.breakpoint.mobile ? true : false
        }
    }
}
</script>

<style scoped>
    .travelCard{
        background-image: linear-gradient(to right, rgba(191,155,48,1), rgba(255,255,255,1));
    }
</style>