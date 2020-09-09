<template>
  <router-link to="city" class="city" tag="div">
      <span class="city-name">{{cityName}}</span>
      <span class="iconfont icon-arrow-bottom_s"></span>
  </router-link>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name:"CitySelector",
  computed:{
    ...mapState(['cityName'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varlables.styl'
  .city{
    width .6rem;
    height $headerHeight;
    font-weight 600;
    font-size .16rem;
    vh-center();
    .icon-arrow-bottom_s{
      font-size .08rem;
      margin-left .03rem;
    }
  }
</style>