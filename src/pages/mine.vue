<template>
  <div>
    <MyHeader title="我的">
      <img class="left" slot="left" src="../assets/image/ic_group_chat_setting.png" alt="">
      <img class="right" slot="right" src="../assets/image/ic_group_chat_share.png" alt="">
    </MyHeader>
    <Cell txt="提醒" style="margin-top:50px" :isHot=false>
      <img class="iconLeft" slot="iconLeft" src="../assets/image/ic_mine_notification.png" alt="">
      <img class="iconRight" slot="iconRight" src="../assets/image/ic_mine_notification.png" alt="">
    </Cell>
  </div>
</template>

<script>
  import MyHeader from'../components/myheader'
  import Cell from'../components/cell'
    export default {
       components:{
         MyHeader,Cell
       }
    }
</script>

<style scoped>

</style>
