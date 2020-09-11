<template>
  <div class="food-wrap">
    <food-item v-for="(item,idx) of foodDatas" :key="idx" :data="item"></food-item>
  </div>
</template>

<script>
import foodItem from './Sub';
export default {
  name:"foodWrap",
  props:{
    foodDatas:Array
  },
  components:{
    foodItem
  }
}
</script>

<style lang="stylus" scoped>
  .food-wrap{
    background #fff;
    border-bottom 1px solid #ddd;
  }
</style>