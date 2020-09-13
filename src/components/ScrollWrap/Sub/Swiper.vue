<template>
  <div class="scroll-swiper">
    <el-carousel :interval="1000" arrow="never">
      <el-carousel-item v-for="(item,index) in imgArr" :key="index">
        <img class="swiper-img" :src="item" alt="">
      </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import { Carousel,CarouselItem } from 'element-ui';

const elCarousel = Carousel.name;
const elCarouselItem = CarouselItem.name;

export default {
  name:"swiper",
  props:{
    imgArr:Array
  },
  components:{
    elCarousel:Carousel,
    elCarouselItem:CarouselItem
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varlables.styl'

  .scroll-swiper{
    background #fff;
    height 2rem;
  }
  .scroll-swiper>>>.el-carousel__button{
      background $defaultGreen;
  }
  .scroll-swiper>>>.el-carousel__container{
      height 2rem;
  }
  .swiper-img{
    width 100%;
    height 100%
  }


</style>