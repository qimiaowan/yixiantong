<template>
  <div class="detail-wrapper">
    <detail-title-name :name="detailMassageData.name"></detail-title-name>
  </div>
</template>

<script>
import detailTitleName from './Sub/Name.vue';
export default {
  name:"massageDetail",
  props:{
    detailMassageData:Object
  },
  components:{
    detailTitleName
  }
}
</script>

<style lang="stylus" scoped>

</style>