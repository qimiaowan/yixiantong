<template>
  <div class="tab-item" @click="currentFun(cityInfo)" :class="{'current':cityInfo.cityId==cityId}">
    {{cityInfo.cityName}}
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  name:"tabItem",
  computed:{
    ...mapState(["cityId"])
  },
  props:{
    cityInfo:Object
  },
  methods:{
    ...mapMutations(["selectorCity"]),
    currentFun(cityInfo){
      this.selectorCity(cityInfo)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varlables.styl';
  .tab-item{
    flex:1;
    height 100%;
    font-size .16rem;
    text-align center;
    border-bottom 2px solid $fff;
    box-sizing border-box;
    &.current{
      color $defaultGreen;
      border-bottom 2px solid $defaultGreen;
    }
  }
</style>