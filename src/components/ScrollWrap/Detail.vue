<template>
  <div class="scroll-wrap" ref='wrapper'>
    <div class="scroll-content" ref="content">

    </div>
  </div>
</template>

<script>
import { DetailModel } from '@/model/detail.js'
export default {
  name:"detailScroll",
  mounted(){
    this.getDetailData(this.$route.query.field,this.$route.query.id);
  },
  methods:{
    getDetailData(field,id){
      const detailModel = new DetailModel();
      detailModel.getDetail(field,id).then(res=>{
        console.log(res);
      })
    }
  }
}
</script>

<style>

</style>