<template>
    <div class="tabbarwrap">
        <Item title="首页" mark="home" :selected="sel" @c="getVal">
          <img slot="normalImg" src="../assets/image/ic_tab_home_normal.png" alt="">
          <img slot="activeImg" src="../assets/image/ic_tab_home_active.png" alt="">
        </Item>
         <Item title="书影音" mark="broadcast" :selected="sel" @c="getVal">
           <img slot="normalImg" src="../assets/image/ic_tab_subject_normal.png" alt="">
           <img slot="activeImg" src="../assets/image/ic_tab_subject_active.png" alt="">
         </Item>
          <Item title="广播" mark="audio" :selected="sel" @c="getVal">
            <img slot="normalImg" src="../assets/image/ic_tab_status_normal.png" alt="">
            <img slot="activeImg" src="../assets/image/ic_tab_status_active.png" alt="">
          </Item>
          <Item title="小组" mark="group" :selected="sel" @c="getVal">
            <img slot="normalImg" src="../assets/image/ic_tab_group_normal.png" alt="">
            <img slot="activeImg" src="../assets/image/ic_tab_group_active.png" alt="">
          </Item>
          <Item title="我的" mark="mine" :selected="sel" @c="getVal">
            <img slot="normalImg" src="../assets/image/ic_tab_profile_normal.png" alt="">
            <img slot="activeImg" src="../assets/image/ic_tab_profile_active.png" alt="">
          </Item>
    </div>
</template>

<script>
  import Item from"./item"
    export default {
        name: "tabbar",
      components:{Item},
      data:function(){
          return{
            sel:"home"
          }
      },
      methods:{
          getVal:function(value){
            this.sel=value
          }
      }
    }
</script>

<style scoped>
    .tabbarwrap{
      width:100%;
      height:64px;
      position:fixed;
      bottom:0;
    }
</style>
