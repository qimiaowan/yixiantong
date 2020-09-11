<template>
  <div class="food-item">
    <router-link class="food-w" :to="{ path:'/detail',query:{field:'food',id:data.id } }">
      <div class="img">
        <img :src="data.img" alt="">
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="price">￥{{data.default_price}}/人</span>
        </p>
        <p class="keyword">
          <span class="badge" v-for="(item,index) of data.keyword" :key="index">
            {{item}}
          </span>
        </p>
        <p class="others">
            <span class="food">{{data.field}}</span>
            <span class="item">{{data.city_name}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import stars from 'components/ScrollWrap/Sub/Stars.vue'

export default {
  name:"foodItem",
  components:{
    stars
  },
  props:{
    data:Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varlables.styl'
.food-item{
  width 100%;
  padding .1rem;
  box-sizing border-box;
  .food-w{
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
        height .3rem;
        line-height .3rem;
        font-size .14rem;
        color #ffc300;
        .price{
          color #333;
        }
      }
      .keyword{
        height .3rem;
        line-height .3rem;
        overflow hidden;
        .badge{
          padding 0 .05rem;
          margin-right  .05rem;
          background rgb(251,244,228);
          color rgb(190,158,77);
          font-size .14rem;
        }
      }
      .others{
        height .25rem;
        line-height .25rem;
        display flex;
        justify-content space-between;
        color #000;
        font-size .14rem;
      }
    }
  }

}
</style>