<template>
  <div class="scroll-wrap" ref='wrapper'>
    <div class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import CurrentCity from './CityList/CurrentCity'
import CityList from './CityList/Index'

export default {
  name:'CityScrollWrap',
  mounted(){
    if(!this.scroll){
      this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,
      })
    }else{
      this.scroll.refresh()
    }

    setTimeout(()=>{
      this.scroll.refresh();
      this.scroll.scrollTo(0,0);
    },200)
  },
  components:{
    CurrentCity,
    CityList
  }
}
</script>

<style lang="stylus" scoped>
  .scroll-wrap{
    overflow: hidden;
}

</style>