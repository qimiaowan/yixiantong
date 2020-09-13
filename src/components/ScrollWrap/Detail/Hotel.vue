<template>
  <div class="detail-wrapper">
    <detail-title-name :name="detailHotelData.name"></detail-title-name>
  </div>
</template>

<script>
import detailTitleName from './Sub/Name.vue';
export default {
  name:"hotelDetail",
  props:{
    detailHotelData:Object
  },
  components:{
    detailTitleName
  }
}
</script>

<style lang="stylus" scoped>

</style>