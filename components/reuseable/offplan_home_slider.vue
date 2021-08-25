<template>
    <div class="ma-15">
        <p class="text-center display-1 font-weight-light">OFFPLAN PROJECTS</p>
        <v-sheet class="mx-auto" elevation="0">
            <v-slide-group cycle class="pa-4" show-arrows>
                <v-slide-item v-for="(item,i) in items" :key="i" class="text-center">
                    <v-card  class="ma-4" height="300" width="400" flat :to="`/properties/offplan/${getName(item.property_name)}`" style="cursor : pointer;">
                        <v-img :src="item.src">
                            <p class="mb-0 text-h6 white--text">{{item.property_name}}</p>
                        </v-img>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>

export default {
    
    data(){
        return{
            toggle_multiple:1,
            items: [
                {src:'/offplans/property_1/banner.png',property_name:'Creek Horizon at Dubai Creek Harbour'},
                {src:'/offplans/property_2/banner.jpg',property_name:'Caya at Arabian Ranches 3 by Emaar'},
                {src:'/offplans/property_2/banner.jpg',property_name:'Caya at Arabian Ranches 3 by Emaar'},
                {src:'/offplans/property_2/banner.jpg',property_name:'Caya at Arabian Ranches 3 by Emaar'},
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
</style>