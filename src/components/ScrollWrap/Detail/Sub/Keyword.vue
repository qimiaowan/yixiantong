<template>
  <div class="detail-keyword">
    <detail-title title="关键评论词"></detail-title>
    <p class="keyword">
      <span class="item" v-for="(item,index) of keyword" :key="index">
        {{item}}
      </span>
    </p>
  </div>
</template>

<script>
import detailTitle from './Title'
export default {
  name:"detailKeyword",
  components:{
    detailTitle
  },
  props:{
    keyword:Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varlables.styl'
  .detail-keyword{
    margin-top .1rem;
     background #fff;
    flex-column()
    border-bottom 1px solid #ddd;
    .keyword{
      padding .1rem .15rem;
      font-size .14rem;
      display flex;
      flex-direction row;
      flex-wrap wrap;
      .item{
        padding .03rem .05rem;
        border 1px solid $defaultGreen;
        border-radius .05rem;
        margin-right .05rem;
        margin-bottom .05rem;
        color $defaultGreen;
      }
    }
  }
</style>