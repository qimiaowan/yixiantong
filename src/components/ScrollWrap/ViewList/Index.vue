<template>
  <div class="view-wrap">
      <view-item v-for="(item,idx) of viewDatas" :key="idx" :data="item"></view-item>
  </div>
</template>

<script>
import viewItem from './Sub';
export default {
  name:"viewWrap",
  props:{
    viewDatas:Array
  },
  components:{
    viewItem
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .view-wrap {
    flex-row();
    flex-wrap wrap;
    background #fff;
    border-bottom 1px solid #ddd;
  }
</style>