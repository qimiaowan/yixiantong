<template>
    <div class="header">
      <back-ward></back-ward>
      <h1>{{title}}</h1>
    </div>
</template>

<script>

import BackWard from './sub/BackWard';

export default {
  name:"CommonHeader",
  props:{
    title:{
      type:String,
      default:'一线生活通'
    }
  },
  components:{
    BackWard
  },
  data(){
    return {

    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varlables.styl'
  .header {
    position relative;
    width 100%;
    height $headerHeight;
    font-size .18rem;
    background-color $defaultBgColor;
    vh-center();
  }
</style>