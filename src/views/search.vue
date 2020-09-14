<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @search="onSearch" @loadingShow="loadingShowFun"></search-input>
    <search-scroll :loadingShow="loadingShow" :searchData="searchData"></search-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common';
import searchInput from 'components/SearchInput/Index';
import searchScroll from 'components/ScrollWrap/Search';
import tools from '@/untils/tools.js';

export default {
  name:"Search",
  components:{
    CommonHeader,
    searchScroll,
    searchInput
  },
  data(){
    return {
      title:"商家搜索",
      searchData:{},
      loadingShow:false
    }
  },
  methods:{
    loadingShowFun(off){
      this.loadingShow = off;
    },
    onSearch(res){
      if(res&&res.status==1){
        const data = res.res.data;
        this.searchData = data;
        this.searchData.foodDatas.length>0&&tools.dataArray(this.searchData.foodDatas,"keyword");
        this.loadingShow = false;
      }else{
        this.searchData = {};
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>