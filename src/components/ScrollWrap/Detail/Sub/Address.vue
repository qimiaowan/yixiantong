<template>
  <div class="detail-address">
    <span class="iconfont icon-552cc14536532"></span>
    <span class="address">{{address}}</span>
  </div>
</template>

<script>
export default {
  name:"detailAddress",
  props:{
    address:{
      type:String,
      default:"加载中"
    }
  }
}
</script>

<style lang="stylus" scoped>
.detail-address{
    display flex;
    align-items center;
    min-height .44rem;
    padding .1rem .15rem;
    background #fff;
    border-bottom 1px solid #ddd;
    box-sizing border-box;
    .iconfont{
      font-size .18rem;
      color #999;
    }
    .address{
      margin-left .1rem;
      font-size .14rem;
      line-height: .18rem;
      color #000;
    }
  }
</style>