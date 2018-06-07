<template>
   <ul>
     <li class="tabbar">
       <router-link to="/home">
         <i class="icon iconfont icon-home1"></i>
         <p>首页</p>
       </router-link>
       <router-link to="/audio">
         <i class="icon iconfont icon-audio"></i>
         <p>书影音</p>
       </router-link>
       <router-link to="/broadcast">
         <i class="icon iconfont icon-broadcast"></i>
         <p>广播</p>
       </router-link>
       <router-link to="/group">
         <i class="icon iconfont icon-group"></i>
         <p>小组</p>
       </router-link>
       <router-link to="/mine">
         <i class="icon iconfont icon-me"></i>
         <p>我的</p>
       </router-link>
     </li>
   </ul>
</template>

<script>
  import '../assets/jquery-3.2.1.js'
    export default {
        name: "fontstabbar",
      mounted:function(){
          $(".tabbar a").click(function(){
            $(this).siblings().css("color","#999999");
            $(this).css("color","red");
          });
          $(".tabbar a").eq(0).trigger("click");

      }
    }
</script>

<style scoped>
  @import "../assets/fonts/iconfont.css";
  .tabbar{
    width:100%;
    display:flex;
    position:fixed;
    bottom:0;
  }
  .tabbar a{
    flex:1;
    text-decoration: none;
  }
  .tabbar a .iconfont {
    font-size: 20px;
  }
  .tabbar a p{
    font-size: 10px;
  }
</style>
