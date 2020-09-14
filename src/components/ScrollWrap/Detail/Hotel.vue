<template>
  <div class="detail-wrapper">
    <detail-title-name :name="detailHotelData.name"></detail-title-name>
    <detail-stars :starNum="Number(detailHotelData.star)" :starStr="detailHotelData.score"></detail-stars>
    <detail-address :address="detailHotelData.address"></detail-address>
    <detail-price :price="detailHotelData.default_price"></detail-price>
  </div>
</template>

<script>
import detailTitleName from './Sub/Name.vue';
import detailStars from './Sub/Stars.vue';
import detailAddress from './Sub/Address.vue';
import detailPrice from './Sub/Price.vue';
export default {
  name:"hotelDetail",
  props:{
    detailHotelData:Object
  },
  components:{
    detailTitleName,
    detailStars,
    detailAddress,
    detailPrice,
  }
}
</script>

<style lang="stylus" scoped>

</style>