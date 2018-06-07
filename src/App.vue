<template>
  <div id="app">
    <!--<Fu></Fu>-->
   <!-- <ul>
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/audio">书影音</router-link></li>
      <li><router-link to="broadcast">广播</router-link></li>
      <li><router-link to="/group">小组</router-link></li>
      <li><router-link to="/mine">我的</router-link></li>
    </ul>-->
    <router-view/>
    <!--<Tabbar></Tabbar>-->
    <Fontstabbar></Fontstabbar>
  </div>
</template>

<script>
  import Tabbar from"./components/tabbar"
  import Fu from"./components/fu"
  import Fontstabbar from "./components/fontstabbar"
export default {
  name: 'App',
  components:{Fu,Tabbar,Fontstabbar},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  *{margin:0px; padding:0px;}
</style>
