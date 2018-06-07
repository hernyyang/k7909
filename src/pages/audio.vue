<template>
  <div>
    <MyHeader title="书影音">
      <img class="left" slot="left" src="../assets/image/ic_group_chat_setting.png" alt="">
      <img class="right" slot="right" src="../assets/image/ic_group_chat_share.png" alt="">
    </MyHeader>
    <div class="nav">
     <span :class="{active:nowIndex=0}" @click="nowIndex=0"> <router-link to="/audio/film">电影</router-link></span>
      <span :class="{active:nowIndex=1}" @click="nowIndex=1"> <router-link to="/audio/read">读书</router-link></span>
      <span :class="{active:nowIndex=2}" @click="nowIndex=2"><router-link to="/audio/music">音乐</router-link></span>
      <span :class="{active:nowIndex=3}" @click="nowIndex=3"> <router-link to="/audio/tv">电视</router-link></span>
      <span :class="{active:nowIndex=4}" @click="nowIndex=4"><router-link to="/audio/city">城市</router-link></span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import MyHeader from'../components/myheader'
    export default {
       components:{MyHeader},
      data:function(){
         return{nowIndex:''};
      }
    }
</script>

<style scoped>
  .nav{
    margin-top:50px;
    display:flex;
  }
  .nav span{
    flex:1;
    height:40px;
    line-height: 40px;
    text-align: center;
  }
  span a{text-decoration: none;color:#999;}
</style>
