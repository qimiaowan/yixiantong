<template>
  <div class="detail-wrapper">
    <detail-title-name :name="detailViewData.name"></detail-title-name>
    <detail-stars :starNum="Number(detailViewData.star)" :starStr="detailViewData.score"></detail-stars>
    <detail-address :address="detailViewData.address"></detail-address>
    <detail-price :price="detailViewData.default_price"></detail-price>
    <detail-introl :introl="detailViewData.intro"></detail-introl>
    <detail-info :info="detailViewData.ticket_info"></detail-info>
  </div>
</template>

<script>
import detailTitleName from './Sub/Name.vue';
import detailStars from './Sub/Stars.vue';
import detailAddress from './Sub/Address.vue';
import detailPrice from './Sub/Price.vue';
import detailIntrol from './Sub/Introl.vue';
import detailInfo from './Sub/Info.vue';
export default {
  name:"viewDetail",
  props:{
    detailViewData:Object
  },
  components:{
    detailTitleName,
    detailStars,
    detailAddress,
    detailPrice,
    detailIntrol,
    detailInfo
  }
}
</script>

<style lang="stylus" scoped>

</style>