<template>
  <div class="detail-wrapper">
    <detail-title-name :name="detailFoodData.name"></detail-title-name>
    <detail-stars :starNum="Number(detailFoodData.star)" :starStr="detailFoodData.score"></detail-stars>
    <detail-address :address="detailFoodData.address"></detail-address>
    <detail-price :price="detailFoodData.default_price"></detail-price>
    <detail-recome :recom="detailFoodData.recom"></detail-recome>
    <detail-keyword :keyword="detailFoodData.keyword"></detail-keyword>
  </div>
</template>

<script>
import detailTitleName from './Sub/Name.vue';
import detailStars from './Sub/Stars.vue';
import detailAddress from './Sub/Address.vue';
import detailPrice from './Sub/Price.vue';
import detailRecome from './Sub/Recome.vue';
import detailKeyword from './Sub/Keyword.vue';
export default {
  name:"foodDetail",
  props:{
    detailFoodData:Object
  },
  components:{
    detailTitleName,
    detailStars,
    detailAddress,
    detailPrice,
    detailRecome,
    detailKeyword
  }
}
</script>

<style lang="stylus" scoped>

</style>