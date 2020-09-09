<template>
  <div class="false-input">
    <router-link to="search">
      <div class="input">
        <div class="placeHolder">
          <span class="iconfont icon-552cc14536532"></span>
          <span class="txt">{{txt}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name:"FalseInput",
  data(){
    return {
      txt:"美食 / 景点 / 景点 / 景点"
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .false-input{
    flex:1;
    padding .06rem .1rem .06rem 0;
    box-sizing border-box;
    a{
      width: 100%;
      height: 100%;
      color #999;
      background #fff;
      border-radius 5px;
      vh-center()
      .input{
        .placeHolder{
          font-size .14rem;
          .icon-552cc14536532{
            font-size .18rem;
            margin-right .05rem;
          }
          .txt{
            vertical-align: top;
          }
        }
      }
    }
  }
</style>