<template>
  <div class="massage-wrap">
    <massage-item v-for="(item,index) of massageDatas" :key="index" :data="item"></massage-item>
  </div>
</template>

<script>
import massageItem from './Sub'
export default {
  name:"massageWrap",
  props:{
    massageDatas:Array
  },
  components:{
    massageItem
  }
}
</script>

<style lang="stylus" scoped>
  .massage-wrap{
    background #fff;
    border 1px solid #ddd;
  }
</style>