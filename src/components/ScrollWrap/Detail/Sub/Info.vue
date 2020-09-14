<template>
  <div class="detail-info">
    <detail-title title="购票信息"></detail-title>
    <span class="info">{{info}}</span>
  </div>
</template>

<script>
import detailTitle from './Title'
export default {
  name:"detailInfo",
  components:{
    detailTitle
  },
  props:{
    info:String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .detail-info{
    margin-top .1rem;
    background #fff;
    flex-column()
    border-bottom 1px solid #ddd;
    .info{
      padding .1rem .15rem;
      font-size .14rem;
      line-height .18rem;
      text-indent 2em;
      box-sizing border-box;
    }
  }
</style>