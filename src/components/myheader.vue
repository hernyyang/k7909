<template>
    <div :class="[{headerWrap:true},{green:bol}]">
        {{title}}
        <slot name="search"></slot>
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        name: "myheader",
      props:["title","bol"]
    }
</script>

<style scoped>
  .headerWrap{
    height:44px;
    line-height: 44px;
    width:100%;
    border-bottom: 1px solid #ccc;
    background-color: #f7f7f7;
    position:fixed;
    top:0;
    z-index: 99;
  }
  .headerWrap img{
    position:absolute;
    width:25px;
    top:10px;
  }
  .headerWrap .left{
    right:50px;
  }
  .headerWrap  .right{
    right:10px;
  }
  .green{
    background-color:green;
  }

</style>
