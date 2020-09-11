<template>
  <div class="home-title">
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  name:"homeTitle",
  props:{
    title:{
      type:String,
      default:"标题"
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-title{
    height .5rem;
    line-height .5rem;
    background #fff;
    border-bottom 1px solid #ddd;
    margin-top .1rem;
    padding-left .2rem;
    font-weight 600;
    font-size .16rem;
    box-sizing border-box;
    .title {
      color #000;
    }
  }
</style>