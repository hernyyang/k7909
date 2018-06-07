<template>
    <div class="fuwrap">
      {{msg}}
      <Zi :txt="msg" @c="getVal"></Zi>
      {{shou}}
    </div>
</template>

<script>
  import Zi from"./zi"
    export default {
        name: "fu",
      components:{Zi},
      methods:{
          getVal:function(value){
            this.shou=value;
            //value就是传递过来的值
          }
      },
      data:function(){
          return{
            msg:"我是父集的内容",
            shou:""
          }
      }
    }
</script>

<style scoped>
  .fuwrap{
    width:300px;
    height:300px;
    background:pink;

  }

</style>
