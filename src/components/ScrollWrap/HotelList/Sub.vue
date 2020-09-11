<template>
  <div class="hotel-item">
    <router-link class="hotel-w" :to="{ path:'/detail',query:{field:'hotel',id:data.id } }">
      <div class="img">
        <img :src="data.img" alt="">
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
          <span>{{data.score}}分</span>
        </p>
        <p class="keyword">
          <span class="area">
            {{data.area}}
          </span>
        </p>
        <p class="others">
          <span class="price">
            ￥<span class="price-num">{{data.default_price}}</span>起
          </span>
          <span class="item">{{data.city_name}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name:"hotelItem",
  props:{
    data:Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varlables.styl'
  .hotel-item{
    width 100%;
    padding .1rem;
    box-sizing border-box;
    .hotel-w{
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
        flex 1;
        min-width 0;
        padding-left .1rem;
        .title{
          ellipsis();
          height .2rem;
          line-height .2rem;
          font-size .18rem;
          color #000;
        }
        .stars{
          height .3rem;
          line-height .3rem;
          font-size .16rem;
          color $defaultBgColor;
        }
        .keyword{
          height .3rem;
          line-height .3rem;
          .area{
            font-size .14rem;
            color #83827d;
          }
        }
        .others{
          height .2rem;
          line-height .2rem;
          display flex;
          justify-content space-between;
          color #000;
          .price{
            color $defaultGreen;
            font-size .12rem;
            .price-num{
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