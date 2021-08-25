<template>
    <div>
        <v-carousel cycle hide-delimiters>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" :to="`/properties/offplan/${getName(item.property_name)}`" style="cursor : pointer;">
                <p class="white--text heading-1 text-right" justify="center"><span class="rounded-lg black pa-4 pt-15">{{item.property_name}}</span></p>
            </v-carousel-item>
        </v-carousel>
        <div class="mt-n15">
            <v-layout column align-center justify-center >
                <v-card class="searchCard  rounded-lg white mt-n3 px-4" flat >
                    <v-btn-toggle v-model="toggle_multiple" color="yellow darken-1" group>
                        <v-btn class="rounded-lg px-3 mx-2" elevation="0" :value="1" text >Buy</v-btn>
                        <v-btn class="rounded-lg px-3 mx-2" elevation="0" :value="2" text >Rent</v-btn>
                        <v-btn class="rounded-lg px-3 mx-2" elevation="0" :value="3" text >Off Plan</v-btn>
                        <v-btn class="rounded-lg px-3 mx-2" elevation="0" :value="4" text >Short-Term</v-btn>
                        <v-btn class="rounded-lg px-3 mx-2" elevation="0" :value="5" text >Find Agents</v-btn>
                    </v-btn-toggle>
                    <v-text-field class="mt-3 rounded-lg" placeholder="Search here...." outlined dense solo flat prepend-inner-icon="mdi-magnify"></v-text-field>
                    <p class="mb-0 text-right mt-n2"><v-btn small>search</v-btn></p>
                </v-card>
            </v-layout>
        </div>
    </div>
</template>

<script>

export default {
    
    data(){
        return{
            toggle_multiple:1,
            items: [
                {src:'/offplans/property_1/banner.png',property_name:'Creek Horizon at Dubai Creek Harbour'},
                {src:'/offplans/property_2/banner.jpg',property_name:'Caya at Arabian Ranches 3 by Emaar'}
            ],
        }
    },
    mounted(){},
    methods:{
        getName(val){
            return val.replace(/\s/g,'-')
        },
    },
    computed:{

    }
}
</script>

<style scoped>
    .searchCard{
        background: rgba(0,0,0,.6);
        padding: 15px 15px 8px;
        border-radius: 5px;
    }
    /* @media only screen and (max-width: 1904px) {
        .carousal-height {
            height : '500px' ;
        }
    }

    @media only screen and (min-width: 1905px) {
        .carousal-height {
            height : '900px' ;
        }
    } */
</style>