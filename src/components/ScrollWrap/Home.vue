<template>
  <div class="scroll-wrap" ref='wrapper'>
    <div class="scroll-content" ref="content">
        <div v-if="!errShow">
          <tab-wrap></tab-wrap>
          <home-title :title="homeTitleTxt.viewTxt"></home-title>
          <view-wrap :viewDatas="homeDataArr.viewDatas"></view-wrap>
          <home-title :title="homeTitleTxt.foodTxt"></home-title>
          <food-wrap :foodDatas="homeDataArr.foodDatas"></food-wrap>
          <home-title :title="homeTitleTxt.hotelTxt"></home-title>
          <hotel-wrap :hotelDatas="homeDataArr.hotelDatas"></hotel-wrap>
          <home-title :title="homeTitleTxt.massageTxt"></home-title>
          <massage-wrap :massageDatas="homeDataArr.massageDatas"></massage-wrap>
          <home-title :title="homeTitleTxt.ktvTxt"></home-title>
          <ktv-wrap :ktvDatas="homeDataArr.ktvDatas"></ktv-wrap>
        </div>
        <error :errShow="errShow"></error>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import tabWrap from './Categoryicons/index'
import homeTitle from './Sub/HomeTitle'
import viewWrap from './ViewList/Index'
import foodWrap from './FoodList/Index'
import hotelWrap from './HotelList/Index'
import massageWrap from './MassageList/Index'
import ktvWrap from './KtvList/Index'

import error from './Sub/Error'

import { mapState } from 'vuex'
import { IndexModel } from '@/model/index.js'
import tools from '@/untils/tools.js'


export default {
  name:"scrollTab",
  data(){
    return {
      currentCityId:0,
      errShow:false,
      homeTitleTxt:{
        foodTxt:"推荐美食",
        hotelTxt:"推荐酒店",
        ktvTxt:"推荐KTV",
        massageTxt:"推荐按摩",
        viewTxt:"推荐景点",
      },
      homeDataArr:{
        foodDatas:[],
        hotelDatas:[],
        ktvDatas:[],
        massageDatas:[],
        viewDatas:[]
      }

    }
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

    this.currentCityId = this.cityId;
    this.getHomesData(this.cityId);
  },
  activated(){
    if(this.cityId!=this.currentCityId){
      this.currentCityId = this.cityId;
      this.getHomesData(this.currentCityId);
      setTimeout(()=>{
      this.scroll.refresh();
      this.scroll.scrollTo(0,0);
    },200)
    }
  },
  computed:{
    ...mapState(['cityId'])
  },
  components:{
    tabWrap,
    homeTitle,
    viewWrap,
    foodWrap,
    hotelWrap,
    massageWrap,
    ktvWrap,
    error
  },
  methods:{
    getHomesData(cityId){
      const indexModel = new IndexModel();
      indexModel.getHomeData(cityId).then(res=>{
        if(res&&res.status==1){
          this.errShow = false;
          const data = res.data;
          this.homeDataArr.foodDatas = tools.dataArray(data.foodDatas,'keyword');
          this.homeDataArr.hotelDatas = data.hotelDatas;
          this.homeDataArr.ktvDatas = data.ktvDatas;
          this.homeDataArr.massageDatas = data.massageDatas;
          this.homeDataArr.viewDatas = data.viewDatas;
        }else{
          this.errShow = true;
        }
      })
    }
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