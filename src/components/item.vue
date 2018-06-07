<template>
  <div class="itemwrap" @click="fn()">
    <!--<img src="../assets/image/ic_tab_home_normal.png" alt="">-->
    <span v-show="isSel"><slot name="normalImg"></slot></span>
    <span v-show="!isSel"><slot name="activeImg"></slot></span>
    <p :class="{active:!isSel}">{{title}}</p>
  </div>
</template>

<script>
    export default {
        name: "item",
      props:["title","mark","selected"],
    /*  created:function(){
          console.log(this.mark)
      },*/
      methods:{
          fn:function(){
            this.$emit("c",this.mark)
            console.log(this.mark);
            this.$router.push("/"+this.mark)
          }
      },
     /* data:function(){
        return{
          isSel:false
        }
      }*/
     computed:{//通过简单业务逻辑定义的变量
       isSel:function (){
         if(this.mark==this.selected){return false;}
         return true;
       }
     }
    }
</script>

<style scoped>
    .itemwrap{
      width:20%;
      float:left;
    }
  .itemwrap img{
    width:35px;
  }
  .itemwrap p{
    font-size:12px;
  }
  .itemwrap p.active{
    color:green;
  }
</style>
