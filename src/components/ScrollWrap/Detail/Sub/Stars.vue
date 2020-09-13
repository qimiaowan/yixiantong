<template>
  <div class="stars-bd">
    <span class="iconfont icon-552cc14536532"></span>
    <stars :starNum="starNum"></stars>
    <span class="star">{{starStr}}分</span>
  </div>
</template>

<script>
import stars from 'components/ScrollWrap/Sub/Stars';
export default {
  name:'detailStars',
  components:{
    stars
  },
  props:{
    starNum:Number,
    starStr:String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varlables.styl'
  .stars-bd{
    display flex;
    align-items center;
    height .44rem;
    padding .03rem .15rem 0;
    background #fff;
    border-bottom 1px solid #ddd;
    box-sizing border-box;
    .iconfont{
      font-size .18rem;
      margin .03rem .1rem 0 0;
      color #999;
    }
    .star{
      font-size .14rem;
      margin-left .05rem;
      color $defaultOrange;
    }
  }
</style>