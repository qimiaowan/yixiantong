<template>
  <div class="scroll-wrap" ref='wrapper'>
      <div class="scroll-content" ref="content">
        <div v-show="!loadingShow">
          <div v-if="searchData.foodDatas&&searchData.foodDatas.length>0">
              <home-title title="美食结果"></home-title>
              <food-wrap :foodDatas="searchData.foodDatas"></food-wrap>
            </div>
            <div v-if="searchData.ktvDatas&&searchData.ktvDatas.length>0">
              <home-title title="KTV结果"></home-title>
              <ktv-wrap :ktvDatas="searchData.ktvDatas"></ktv-wrap>
            </div>
            <div v-if="searchData.massageDatas&&searchData.massageDatas.length>0">
               <home-title title="按摩结果"></home-title>
              <massage-wrap :massageDatas="searchData.massageDatas"></massage-wrap>
            </div>
            <div v-if="searchData.viewDatas&&searchData.viewDatas.length>0">
              <home-title title="景点结果"></home-title>
              <view-wrap :viewDatas="searchData.viewDatas"></view-wrap>
            </div>
            <div v-if="searchData.hotelDatas&&searchData.hotelDatas.length>0">
              <home-title title="酒店结果"></home-title>
              <hotel-wrap :hotelDatas="searchData.hotelDatas"></hotel-wrap>
            </div>
        </div>
        <loading :loadingShow="loadingShow"></loading>
        <not-data-tip :tipShow="tipShow"></not-data-tip>
      </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import homeTitle from './Sub/HomeTitle'
  import viewWrap from './ViewList/Index'
  import foodWrap from './FoodList/Index'
  import hotelWrap from './HotelList/Index'
  import massageWrap from './MassageList/Index'
  import ktvWrap from './KtvList/Index'

  import notDataTip from './Sub/NotDataTip'
  import loading from './Sub/Loading'

export default {
  name:"searchScroll",
  props:{
    searchData:Object,
    loadingShow:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      tipShow:true,
    }
  },
  watch:{
    loadingShow(){
      this.tipShow = false;
    },
    searchData(data){
        this.tipShow = Object.keys(data).every((item)=>{
          return data[item].length<=0
        })
      setTimeout(()=>{
        this.scroll.refresh();
        this.scroll.scrollTo(0,0);
    },200)
    }
  },
  components:{
    homeTitle,viewWrap,foodWrap,hotelWrap,massageWrap,ktvWrap,loading,notDataTip
  },
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
  methods:{

  }
}
</script>

<style lang="stylus" scoped>
.scroll-wrap{
    height 100%;
    overflow hidden
  }
  .scroll-content{
    min-height 100%;
  }
</style>