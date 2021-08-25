<template>
  <div class="pt-1">
    <Slider />
    <TravelPackage />
    <InvestWithUs />
    <OffplanSlider />
    <Partners />
  </div>
</template>

<script>
import Slider from '~/components/reuseable/slider'
import TravelPackage from '~/components/reuseable/travel_package'
import InvestWithUs from '~/components/reuseable/invest_with_us'
import Partners from '~/components/reuseable/partners'
import OffplanSlider from '~/components/reuseable/offplan_home_slider'

export default {
    data(){
      return {
      } 
    },
    async asyncData({app, store}){
    },
    components: {
        Slider,
        TravelPackage,
        InvestWithUs,
        Partners,
        OffplanSlider
    }
}
</script>