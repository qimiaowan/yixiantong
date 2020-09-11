<template>
  <div class="container">
    <home-header></home-header>
    <scroll-tab></scroll-tab>
  </div>
</template>

<script>
import homeHeader from 'components/Header/Home.vue';
import scrollTab from 'components/ScrollWrap/Home.vue';

export default {
  name:'Index',
  components:{
    homeHeader,
    scrollTab
  }
}
</script>

<style lang="stylus" scoped>

</style>