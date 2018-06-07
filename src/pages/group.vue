<template>
  <div>
    <MyHeader>
      <img class="left" slot="left" src="../assets/image/ic_group_chat_setting.png" alt="">
      <img class="right" slot="right" src="../assets/image/ic_group_chat_share.png" alt="">
    </MyHeader>
    <ul>
      <li v-for="item in arr">{{item.name}}</li>
  </ul>
  </div>
</template>

<script>
  import MyHeader from'../components/myheader'
  import{getContacts}from '../api/api'
    export default {
    data:function(){
      return{
        arr:[]
      }
    },
      created:function(){
        getContacts().then((data)=>{
          this.arr=data;
        })
      },
      components:{MyHeader}
    }
</script>

<style scoped>

</style>
