<template>
  <div class="back-ward" @click="backFun">
    <span class="iconfont icon-552cc14536532"></span>
  </div>
</template>

<script>
export default {
  name:"BackWard",
  methods:{
    backFun(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varlables.styl'
  .back-ward{
    position absolute;
    top: 0;
    left: 0;
    width $headerHeight;
    height $headerHeight;
    vh-center();
    .icon-552cc14536532{
      font-size .2rem;
    }
  }

</style>