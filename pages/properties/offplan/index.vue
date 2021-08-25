<template>
    <v-layout column justify-center >
        <v-container class="ma-15">
            <p class="text-center display-1 font-weight-light">OFFPLAN PROJECTS</p>
            <v-row>
                <v-col cols="12" sm="12" md="4" xl="3" v-for="(data,index) in projects" :key="index">
                    <v-card class="rounded-lg" max-width = "400" :to="`/properties/offplan/${getName(data.property_name)}`" style="cursor : pointer;">
                        <v-img :src="data.banner_img" max-height="275"></v-img>
                        <p class="pt-4 px-3 font-weight-bold mb-1">{{data.property_name}}</p>
                        <v-row class="px-5">
                            <v-col cols="12" sm='12' md="6">
                                <p class="mb-1 caption"><v-icon size="18" class="mt-n1" color="pink">mdi-office-building-marker-outline</v-icon>&emsp;{{data.location}}</p>
                                <p class="mb-1 caption"><v-icon size="18" class="mt-n1" color="pink">mdi-home-city-outline</v-icon>&emsp;{{data.property_type}}</p>
                            </v-col>
                            <v-col cols="12" sm='12' md="6">
                                <p class="mb-1 caption"><v-icon size="18" class="mt-n1" color="pink">mdi-shield-home-outline</v-icon>&emsp;{{data.builder_name}}</p>
                                <p class="mb-1 caption"><v-icon size="18" class="mt-n1" color="pink">mdi-warehouse</v-icon>&emsp;<span v-for="(item, i) in data.rooms" :key="i">{{item}} <span v-if="i < data.rooms.length - 1">,&nbsp;</span> </span></p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    data(){
        return{
            projects: [
                {location:'Creek Harbour',property_type:'Building',builder_name:'Emaar',rooms:[3,4],banner_img:'/offplans/property_1/banner.png',property_name:'Creek Horizon at Dubai Creek Harbour'},
                {location:'Arabian Ranches',property_type:'Townhouse',builder_name:'Emaar',rooms:[3,4],banner_img:'/offplans/property_2/banner.jpg',property_name:'Caya at Arabian Ranches 3 by Emaar'},
                {location:'Arabian Ranches',property_type:'Townhouse',builder_name:'Emaar',rooms:[3,4],banner_img:'/offplans/property_2/banner.jpg',property_name:'Caya at Arabian Ranches 3 by Emaar'},
                {location:'Arabian Ranches',property_type:'Villa',builder_name:'Emaar',rooms:[3,4],banner_img:'/offplans/property_2/banner.jpg',property_name:'Caya at Arabian Ranches 3 by Emaar'},
                {location:'Arabian Ranches',property_type:'Townhouse',builder_name:'Emaar',rooms:[3,4],banner_img:'/offplans/property_2/banner.jpg',property_name:'Caya at Arabian Ranches 3 by Emaar'},
            ],
        }
    },
    mounted(){

    },
    methods:{
        getName(val){
            return val.replace(/\s/g,'-')
        },
    },
    computed:{
        
    }
}
</script>