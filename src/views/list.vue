<template>
  <div class="container">
    <common-header :title="getTitle"></common-header>
    <tab></tab>
    <list-scroll></list-scroll>
  </div>
</template>

<script>
import tabData from 'js/tabData.js';
import { mapState } from 'vuex';
import CommonHeader from 'components/Header/Common.vue';
import listScroll from 'components/ScrollWrap/List.vue';
import tab from 'components/Tab/Index.vue';
export default {
  name:"List",
  components:{
    CommonHeader,
    listScroll,
    tab
  },
  computed:{
    ...mapState(["field"]),
    getTitle(){
      return tabData.filter((item)=>item.field==this.field)[0].tabName+'列表';
    }
  }
}
</script>


<style lang="stylus" scoped>

</style>