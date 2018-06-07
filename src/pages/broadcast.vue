<template>
  <div>
    <MyHeader>
    <img class="left" slot="left" src="../assets/image/ic_group_chat_setting.png" alt="">
    <img class="right" slot="right" src="../assets/image/ic_group_chat_share.png" alt="">
    </MyHeader>
    <Cell></Cell>
  </div>
</template>

<script>
  import Cell from'../components/cell'
  import MyHeader from'../components/myheader'
    export default {
      components:{MyHeader,Cell}
    }
</script>

<style scoped>

</style>
