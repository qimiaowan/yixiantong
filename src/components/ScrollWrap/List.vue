<template>
  <div class="scroll-wrap" ref='wrapper'>
    <div class="scroll-content" ref="content">
      <div v-if="!loadingShow">
        <food-wrap v-if="field=='food'" :foodDatas="listData[cityId]"></food-wrap>
        <hotel-wrap v-if="field=='hotel'" :hotelDatas="listData[cityId]"></hotel-wrap>
        <ktv-wrap v-if="field=='ktv'" :ktvDatas="listData[cityId]"></ktv-wrap>
        <massage-wrap v-if="field=='massage'" :massageDatas="listData[cityId]"></massage-wrap>
        <view-wrap v-if="field=='view'" :viewDatas="listData[cityId]"></view-wrap>
      </div>
      <loading :loadingShow="loadingShow"></loading>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

import foodWrap from './FoodList/Index'
import hotelWrap from './HotelList/Index'
import ktvWrap from './KtvList/Index'
import massageWrap from './MassageList/Index'
import viewWrap from './ViewList/Index'

import loading from 'components/ScrollWrap/Sub/Loading'

import { mapState } from 'vuex'
import { ListModel } from '@/model/list.js'

import tools from '@/untils/tools.js'

export default {
  name:"listScroll",
  components:{
    foodWrap,hotelWrap,ktvWrap,massageWrap,viewWrap,loading
  },
  computed:{
    ...mapState(['cityId','field']),
  },
  watch:{
    cityId(){
      this.getListData(this.cityId,this.field);
      setTimeout(()=>{
        this.scroll.refresh();
        this.scroll.scrollTo(0,0);
      },200)
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
    this.getListData(this.cityId,this.field);
  },
  data(){
    return {
      listData:{},
      loadingShow:true
    }
  },
  methods:{
    getListData(cityId,field){

      if(!this.listData[cityId]){
        this.loadingShow = true;
        const listModel = new ListModel();
        listModel.getListDatas(cityId,field).then(res=>{
          if(res&&res.status==1){
            const data = res.res.data;
            this.listData[cityId] = JSON.parse(JSON.stringify(data));
            this.field=="food"&&(this.listData[cityId] = tools.dataArray(this.listData[cityId],'keyword'));
            this.loadingShow = false;
          }
        })
      }
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