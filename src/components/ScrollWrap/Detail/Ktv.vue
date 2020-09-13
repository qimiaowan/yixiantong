<template>
  <div class="detail-wrapper">
    <detail-title-name :name="detailKtvData.name"></detail-title-name>
  </div>
</template>

<script>
import detailTitleName from './Sub/Name.vue';
export default {
  name:"ktvDetail",
  props:{
    detailKtvData:Object
  },
  components:{
    detailTitleName
  }
}
</script>

<style lang="stylus" scoped>

</style>