<template>
    <div class="ziwrap">
      <p @click="fn()">{{txt}}</p>
        <p>{{zimsg}}</p>
    </div>
</template>

<script>
    export default {
        name: "zi",
      data:function(){
          return{
            zimsg:"我是子组件的内容"
          }
      },
      props:["txt"],
      methods:{
          fn:function(){
            //$emit传出，第一个参数是自定义事件，第二个参数是传出的内容
            this.$emit("c",this.zimsg)
          }
      }
    }
</script>

<style scoped>
    .ziwrap{
      width:150px;
      height:150px;
      background:grey;
    }
</style>
