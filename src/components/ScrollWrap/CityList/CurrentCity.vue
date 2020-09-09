<template>
  <div class="current-city">
    <div class="city-wrap">
      <span class="current-direc">当前城市：</span>
      <router-link to="/">
        <span class="iconfont icon-552cc14536532"></span>
        <span class="city">{{this.cityName}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name:"CurrentCity",
  computed:{
    ...mapState(['cityName'])
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .current-city{
    width 100%;
    height .5rem;
    line-height .5rem;
    font-size .16rem;
    background #fff;
    border-bottom 1px solid #ddd;
    .city-wrap{
      padding-left .15rem;
      .current-direc{
        vertical-align top;
      }
      .city{
        vertical-align top;
        color:#000;
      }
    }
  }
</style>