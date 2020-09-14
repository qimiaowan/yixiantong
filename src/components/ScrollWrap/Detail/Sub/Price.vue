<template>
  <div class="detail-price">
    <span class="iconfont icon-552cc14536532"></span>
    <span class="price">￥{{price||0}}元起</span>
  </div>
</template>

<script>
export default {
  name:"detailPrice",
  props:{
    price:String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varlables.styl'
.detail-price{
    display flex;
    align-items center;
    height .44rem;
    padding .03rem .15rem 0;
    background #fff;
    border-bottom 1px solid #ddd;
    box-sizing border-box;
    .iconfont{
      font-size .18rem;
      color #000;
    }
    .price{
      font-size .14rem;
      margin-left .1rem;
      color:$defaultOrange;
    }
  }
</style>