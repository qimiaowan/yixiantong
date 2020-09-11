<template>
  <div class="ktv-wrap">
    <ktv-item v-for="(item,index) of ktvDatas" :key="index" :data="item" ></ktv-item>
  </div>
</template>

<script>
import ktvItem from './Sub';
export default {
  name:"ktvWrap",
  components:{
    ktvItem
  },
  props:{
    ktvDatas:Array
  }
}
</script>

<style lang="stylus" scoped>
  .ktv-wrap{
    background #fff;
    border-bottom 1px solid #ddd;
  }
</style>