<template>
  <div class="not-data-tip" v-show="tipShow">
    <span>- 没有符合要求的项 -</span>
  </div>
</template>

<script>
export default {
  name:"notDataTip",
  props:{
    tipShow:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .not-data-tip{
    vh-center();
    height 3rem
    span{
      font-size .16rem;
    }
  }
</style>