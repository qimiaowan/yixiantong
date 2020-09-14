<template>
  <div class="tab">
    <tab-item v-for="item of cityList" :key="item.cityId" :cityInfo="item"></tab-item>
  </div>
</template>

<script>
import tabItem from './Sub.vue';
import data from 'js/data.js';

export default {
  name:"tab",
  components:{
    tabItem
  },
  data(){
    return {
      cityList:data
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tab{
    display flex;
    flex-direction row;
    flex-wrap:nowrap;
    flex-shrink: 0;
    height .44rem;
    line-height .44rem;
    background #fff;
    border-bottom 1px solid #ddd;
  }
</style>