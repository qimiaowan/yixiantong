<template>
  <div class="container">
    <common-header title="详情信息"></common-header>
    <detail-scroll></detail-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
import detailScroll from 'components/ScrollWrap/Detail.vue';

export default {
  name:"Detail",
  components:{
    CommonHeader,
    detailScroll
  }
}
</script>

<style>

</style>