<template>
  <div class="detail-wrapper">
    <detail-title-name :name="detailViewData.name"></detail-title-name>
  </div>
</template>

<script>
import detailTitleName from './Sub/Name.vue';
export default {
  name:"viewDetail",
  props:{
    detailViewData:Object
  },
  components:{
    detailTitleName
  }
}
</script>

<style lang="stylus" scoped>

</style>