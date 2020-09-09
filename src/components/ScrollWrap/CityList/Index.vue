<template>
  <div class="city-list">
    <city-item-sub v-for="(item,index) of cityList" :cityInfo='item' :key='index'></city-item-sub>
  </div>
</template>

<script>
import cityItemSub from './Sub';
import data from 'js/data.js'
export default {
  name:"CityList",
  components:{
    cityItemSub
  },
  data(){
    return {
      cityList:data
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>