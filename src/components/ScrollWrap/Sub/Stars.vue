<template>
  <div class="stars">
    <template v-for="item in num" >
      <span v-if="item<=starNum">★</span>
      <span v-else>☆</span>
    </template>
  </div>
</template>

<script>
export default {
  name:"stars",
  props:{
    starNum:Number
  },
  data(){
    return {
      num:5
    }
  }
}
</script>

<style lang="stylus" scoped>
  .stars {
    span{
      font-size .16rem;
      color #ffc300;
      padding-right  .03rem;
    }
  }
</style>