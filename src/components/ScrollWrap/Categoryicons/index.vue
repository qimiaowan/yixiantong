<template>
  <div class="tab-wrap">
    <tab-item
      v-for='item of tabList'
      :key='item.tabId'
      :bgColor='item.bgColor'
      :icon='item.icon'
      :field='item.field'
      :iconTxt='item.tabName'
    ></tab-item>
  </div>
</template>

<script>
import tabItem from './sub';
import tabData from 'js/tabData';

export default {
  name:'tabWrap',
  components:{
    tabItem
  },
  data(){
    return {
      tabList:tabData
    }
  },

}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .tab-wrap{
    background #fff;
    border-bottom 1px solid #ddd;
    flex-row()
    flex-wrap wrap;
  }
</style>