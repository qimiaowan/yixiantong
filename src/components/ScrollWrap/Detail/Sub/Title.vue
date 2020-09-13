<template>
  <div class="detail-title">
    <span class="iconfont icon-552cc14536532"></span>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  name:"detailTitle",
  props:{
    title:String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varlables.styl'
  .detail-title{
    display flex;
    align-items center;
    height .44rem;
    padding 0 .15rem ;
    background #fff;
    border-bottom 1px solid #ddd;
    box-sizing border-box;
    .iconfont{
    font-size .18rem;
    color $defaultGreen;
    }
    .title{
      margin-left .1rem;
      font-size .16rem;
      color $defaultGreen;
    }
  }
</style>