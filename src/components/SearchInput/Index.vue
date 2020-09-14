<template>
  <div class="search-input">
    <div class="input-wrap">
      <span class="iconfont icon-552cc14536532"></span>
      <input class="search" type="text" @input="inputFun" v-model="keyword" :placeHolder="placeHolder">
    </div>
  </div>
</template>

<script>
import { SearchModel } from '@/model/search.js'
import { mapState } from 'vuex'
import tools from '@/untils/tools.js'

export default {
  name:"searchInput",
  computed:{
    ...mapState(['cityId']),
  },
  data(){
    return {
      placeHolder:"美食/酒店/景点/按摩/KTV",
      keyword:"",
      currentCityId:0
    }
  },
  activated(){
    if(this.cityId!=this.currentCityId){
      this.currentCityId = this.cityId;
      this.keyword = "";
      this.inputFun();
    }
  },
  methods:{
    inputFun:tools.throttle(function(){
        const keyword = tools.trimStr(this.keyword);

        if(keyword.length<=0){
          this.$emit("search",{});
          return;
        }
        this.$emit("loadingShow",true);
        this.getSearchData(keyword,this.cityId);
    },500),
    getSearchData(keyword,cityId){
      const searchModel = new SearchModel();
      searchModel.getSearchDatas(keyword,cityId).then(res=>{
        this.$emit("search",res);
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search-input{
    padding .06rem .15rem;
    height .44rem;
    background #fff;
    border-bottom 1px solid #ddd;
    box-sizing border-box;
    .input-wrap{
      position relative;
      width 100%;
      height 100%;
      .iconfont{
        position absolute;
        top 50%;
        left .05rem;
        font-size .16rem;
        transform: translateY(-50%);
      }
      .search{
        display block;
        width 100%;
        height 100%;
        text-indent:.32rem;
        border 1px solid #ddd;
        border-radius .03rem;
        outline none;
        box-sizing border-box;
      }
    }

  }
</style>