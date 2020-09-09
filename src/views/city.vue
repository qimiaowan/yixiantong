<template>
  <div class="city">
    <common-header :title="title"></common-header>
    <city-scroll-wrap></city-scroll-wrap>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
import CityScrollWrap from 'components/ScrollWrap/City.vue';

export default {
  name:"City",
  components:{
    CommonHeader,
    CityScrollWrap
  },
  data(){
    return {
      title:'城市选择'
    }
  }

}
</script>

<style lang="stylus" scoped>
  .city{

  }
</style>