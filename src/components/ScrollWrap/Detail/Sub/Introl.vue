<template>
  <div class="detail-introl">
    <detail-title title="详细介绍"></detail-title>
    <span class="introl">{{introl}}</span>
  </div>
</template>

<script>
import detailTitle from './Title'
export default {
  name:"detailIntrol",
  components:{
    detailTitle
  },
  props:{
    introl:String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .detail-introl{
    margin-top .1rem;
    background #fff;
    flex-column()
    border-bottom 1px solid #ddd;
    .introl{
      padding .1rem .15rem;
      font-size .14rem;
      line-height .18rem;
      text-indent 2em;
      box-sizing border-box;
    }
  }
</style>