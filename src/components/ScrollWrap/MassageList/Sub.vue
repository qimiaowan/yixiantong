<template>
  <div class="massage-item">
    <router-link class="massage-w" :to="{ path:'/detail',query:{field:'massage',id:data.id } }">
      <div class="img">
        <img :src="data.img" alt />
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{data.score}}分</span>
        </p>
        <p class="others">
          <span class="price">
            ￥<span class="price-num">{{data.default_price}}</span>元
          </span>
          <span class="item">{{data.city_name}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import stars from 'components/ScrollWrap/Sub/Stars.vue'

export default {
  name: "massageItem",
  components:{
    stars
  },
  props:{
    data:Object
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
@import '~styles/varlables.styl'
.massage-item{
  width 100%;
  padding .1rem;
  box-sizing border-box;
  .massage-w{
    flex-row();
    .img{
      width 1rem;
      height 1rem;
      overflow hidden;
      img{
        width 100%;
        min-height 1rem;
      }
    }
    .info{
      min-width 0;
      flex: 1;
      padding-left .1rem;
      .title{
          ellipsis();
          height .2rem;
          line-height .2rem;
          font-size .18rem;
          color #000;
      }
      .stars{
        flex-row();
        height .5rem;
        line-height .5rem;
        font-size .14rem;
        color $starColor;
      }
     .others{
        height .35rem;
        line-height .35rem;
        display flex;
        justify-content space-between;
        color #000;
        .price{
          font-size .14rem;
          .price-num{
            color $defaultOrange;
            font-size .2rem;
            margin-right .05rem;
          }
        }
        .item{
          font-size .14rem;
        }
      }
    }
  }

}

</style>