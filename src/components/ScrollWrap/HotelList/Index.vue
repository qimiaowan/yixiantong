<template>
  <div class="hotel-wrap">
    <hotel-item v-for="(item,index) of hotelDatas" :key="index" :data="item"></hotel-item>
  </div>
</template>

<script>
import hotelItem from './Sub'
export default {
  name:"hotelWrap",
  props:{
    hotelDatas:Array
  },
  components:{
    hotelItem
  }
}
</script>

<style lang="stylus" scoped>
  .hotel-wrap{
    background #fff;
    border-bottom 1px solid #ddd;
  }
</style>