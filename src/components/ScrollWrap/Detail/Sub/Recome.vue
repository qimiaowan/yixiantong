<template>
  <div class="detail-rec">
    <detail-title title="推荐商品"></detail-title>
    <span class="recom">{{recom}}</span>
  </div>
</template>

<script>
import detailTitle from './Title'
export default {
  name:"detailRecome",
  components:{
    detailTitle
  },
  props:{
    recom:String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .detail-rec{
    margin-top .1rem;
    background #fff;
    flex-column()
    border-bottom 1px solid #ddd;
    .recom{
      padding .1rem .15rem;
      font-size .14rem;
      line-height .18rem;
      text-indent 2em;
      box-sizing border-box;
    }
  }
</style>