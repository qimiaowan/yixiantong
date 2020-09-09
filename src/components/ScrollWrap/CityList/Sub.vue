<template>
  <div class="city-item">
    <span @click="onCityClick(cityInfo)">{{cityInfo.cityName}}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name:"cityItemSub",
  props:['cityInfo'],
  methods:{
    ...mapMutations(['selectorCity']),
    onCityClick(cityInfo){
      console.log(1);

      this.selectorCity(cityInfo);
      this.$router.push('/');
    }
  }

}
</script>

<style lang="stylus" scoped>
  .city-item {
    width 100%;
    height .5rem;
    line-height .5rem;
    font-size .16rem;
    background #fff;
    border-bottom 1px solid #ddd;
    span {
      padding-left .15rem;
    }
  }
</style>