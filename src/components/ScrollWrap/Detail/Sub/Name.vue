<template>
  <div class="detail-name">
    <span class="iconfont icon-552cc14536532"></span>
    <span class="name">{{name}}</span>
  </div>
</template>

<script>
export default {
  name:"detailTitleName",
  props:{
    name:{
      type:String,
      default:"名称加载中"
    }
  }
}
</script>

<style lang="stylus" scoped>
  .detail-name{
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
    .name{
      font-size .14rem;
      margin-left .1rem;
    }
  }

</style>