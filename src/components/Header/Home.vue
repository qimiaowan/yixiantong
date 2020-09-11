<template>
  <header class="header">
    <city-selector></city-selector>
    <false-input></false-input>
  </header>
</template>

<script>
import CitySelector from './sub/CitySelector';
import FalseInput from './sub/FalseInput';
export default {
  name:"homeHeader",
  components:{
    CitySelector,
    FalseInput
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varlables.styl'
  .header{
    flex-row();
    width 100%;
    height $headerHeight;
    flex-shrink:0;
    background-color $defaultBgColor;
  }
</style>