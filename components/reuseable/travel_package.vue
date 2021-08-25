<template>
    <div class="ma-15">
        <v-layout column align-center justify-center >
            <!-- <v-container class="" > -->
                <v-card class="rounded-lg white mt-n3 mx-15" flat max-width="1200">
                    <v-row align="center">
                        <v-col cols="12" sm="12" md="6" class="travelCard pa-8 rounded-xl">
                            <p class="display-1 font-weight-light">VIP TRAVEL PACKAGES FOR INVESTORS</p>
                            <p class="caption font-italic">Be inspired to invest in Dubai’s top hotels on your private investment tour.</p>
                            <v-btn large> More info</v-btn>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" class="pa-8">
                            <p class="caption">The Dubai Investment Visit is a discounted travel package for investors who want to capitalize on Dubai’s booming hotel sector.</p>
                            <p class="caption">As a guest of The First Group, the tour includes private viewings of our top-performing hotels and the exciting investment opportunities in our property portfolio.</p>
                            <p class="caption">Take advantage of this exclusive opportunity to enhance your investment portfolio through property ownership with The First Group.</p>
                        </v-col>
                    </v-row>
                </v-card>
            <!-- </v-container> -->
        </v-layout>
    </div>
</template>

<script>

export default {
    
    data(){
        return{
            
        }
    },
    mounted(){},
    methods:{
        
    },
    computed:{

    }
}
</script>

<style scoped>
    .travelCard{
        background-image: linear-gradient(to right, rgba(191,155,48,1), rgba(255,255,255,1));
    }
</style>