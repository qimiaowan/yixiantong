<template>
  <div class="scroll-wrap" ref='wrapper'>
    <div class="scroll-content" ref="content">
      <div v-if="!loadingShow">
        <swiper :imgArr="detailData.pics"></swiper>
        <food-detail v-if="field=='food'" :detailFoodData="detailData"></food-detail>
        <hotel-detail v-if="field=='hotel'" :detailHotelData="detailData"></hotel-detail>
        <ktv-detail v-if="field=='ktv'" :detailKtvData="detailData"></ktv-detail>
        <view-detail v-if="field=='view'" :detailViewData="detailData"></view-detail>
        <massage-detail v-if="field=='massage'" :detailMassageData="detailData"></massage-detail>
      </div>
      <loading :loadingShow="loadingShow"></loading>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

import { DetailModel } from '@/model/detail.js'
import tools from '@/untils/tools.js'
import  swiper from './Sub/Swiper'
import foodDetail from './Detail/Food'
import hotelDetail from './Detail/Hotel'
import ktvDetail from './Detail/Ktv'
import massageDetail from './Detail/Massage'
import viewDetail from './Detail/View'

import loading from 'components/ScrollWrap/Sub/Loading'

export default {
  name:"detailScroll",
  components:{
    swiper,
    foodDetail,
    hotelDetail,
    ktvDetail,
    massageDetail,
    viewDetail,
    loading
  },
  data(){
    return {
      detailData:{},
      field:undefined,
      id:undefined,
      loadingShow:true
    }
  },
  created(){
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
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
    this.getDetailData(this.field,this.id);
  },
   activated(){
    if(this.id!=this.$route.query.id||this.field!=this.$route.query.field){
      this.field = this.$route.query.field;
      this.id = this.$route.query.id;
      this.getDetailData(this.field,this.id);
      setTimeout(()=>{
        this.scroll.refresh();
        this.scroll.scrollTo(0,0);
      },200)
    }
  },
  methods:{
    getDetailData(field,id){
      this.detailData = {};
      this.loadingShow = true;
      const detailModel = new DetailModel();
      detailModel.getDetail(field,id).then(res=>{
        if(res&&res.status==1){
          const data = res.data;
          this.detailData = JSON.parse(JSON.stringify(data));
          this.detailData.pics&&(this.detailData.pics = tools.toArray(this.detailData.pics));
          this.detailData.keyword&&(this.detailData.keyword = tools.toSplitArray(this.detailData.keyword));
          this.loadingShow = false;
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