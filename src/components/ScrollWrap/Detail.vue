<template>
  <div class="scroll-wrap" ref='wrapper'>
    <div class="scroll-content" ref="content">
      <swiper :imgArr="detailData.pics"></swiper>
      <food-detail v-if="field=='food'" :detailFoodData="detailData"></food-detail>
      <hotel-detail v-if="field=='hotel'" :detailHotelData="detailData"></hotel-detail>
      <ktv-detail v-if="field=='ktv'" :detailKtvData="detailData"></ktv-detail>
      <view-detail v-if="field=='view'" :detailViewData="detailData"></view-detail>
      <massage-detail v-if="field=='massage'" :detailMassageData="detailData"></massage-detail>
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
export default {
  name:"detailScroll",
  components:{
    swiper,
    foodDetail,
    hotelDetail,
    ktvDetail,
    massageDetail,
    viewDetail
  },
  data(){
    return {
      detailData:{},
      field:undefined,
      id:undefined
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
      this.scroll.refresh()
      console.log(this.scroll);

    },200)
    this.getDetailData(this.field,this.id);
  },
  methods:{
    getDetailData(field,id){
      const detailModel = new DetailModel();
      detailModel.getDetail(field,id).then(res=>{
        if(res&&res.status==1){
          const data = res.data;
          this.detailData = JSON.parse(JSON.stringify(data));
          this.detailData.pics&&(this.detailData.pics = tools.toArray(this.detailData.pics));
          this.detailData.keyword&&(this.detailData.keyword = tools.toSplitArray(this.detailData.keyword));
          console.log(this.detailData);

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