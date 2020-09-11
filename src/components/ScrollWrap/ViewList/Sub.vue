<template>
  <div class="view-item">
    <router-link :to="{ path:'/detail',query:{field:'view',id:data.id } }">
      <div class="img">
        <img :src="data.img" alt="">
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span>{{data.score}}分</span>
        </p>
        <p class="others">
          <span class="price">
            <span class="price-num">${{data.default_price}}</span>
            <span>起</span>
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
  name:"viewItem",
  props:{
    data:Object
  },
  components:{
    stars
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varlables.styl'
  .view-item {
    width 50%;
    padding .1rem;
    box-sizing border-box;
    .img{
      width 100%;
      height 1.1rem;
      overflow hidden;
      img{
        width 100%;
        min-height 1.1rem;
      }
    }
    .info{
      .title{
        ellipsis();
        height .3rem;
        line-height .3rem;
        font-size .16rem;
        color #000;
      }
      .stars{
        flex-row();
        height .3rem;
        line-height .3rem;
        font-size .14rem;
        color #ffc300;
      }
      .others{
        height .3rem;
        line-height .3rem;
        display flex;
        justify-content space-between;
        .price{
          color #000;
          font-size .12rem;
          .price-num{
            font-size .2rem;
            color $defaultGreen;
            margin-right .05rem;
          }
        }
        .item{
          font-size .14rem;
          color #000;
        }
      }
    }
  }
</style>