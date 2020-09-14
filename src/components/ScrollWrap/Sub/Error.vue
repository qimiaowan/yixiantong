<template>
  <div class="error" v-show="errShow">
    <span class="txt">网络出错了</span>
  </div>
</template>

<script>
export default {
  name:"error",
  props:{
    errShow:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .error{
    height 3rem;
    vh-center();
    .txt{
      font-size .16rem;
    }
  }
</style>