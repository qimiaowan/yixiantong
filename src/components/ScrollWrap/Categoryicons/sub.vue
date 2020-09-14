<template>
  <div class="icon-item" @click="onRouterTo(field)">
    <div class="icon" :style="{backgroundColor:bgColor}">
      <div class="iconfont" :class="icon"></div>
    </div>
    <p class="icon-txt">{{iconTxt}}</p>
  </div>
</template>

<script>
import { mapMutations,mapState } from 'vuex'
export default {
  name:"tabItem",
  props:{
    field:String,
    bgColor:String,
    icon:String,
    iconTxt:{
      type:String,
      default:'分类'
    }
  },
  methods:{
    ...mapMutations(['selectorField']),
    onRouterTo(field){
      console.log(field);

      this.selectorField(field);
      this.$router.push('/list');
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .icon-item{
    width 20%;
    padding .2rem 0;
    vh-center();
    flex-column();
    box-sizing border-box;
    .icon{
      width .4rem;
      height .4rem;
      border-radius 50%;
      vh-center();
      .iconfont{
        color #fff;
        font-size .26rem;
      }
    }
    .icon-txt{
      font-size .14rem;
      margin-top .1rem;
    }
  }
</style>