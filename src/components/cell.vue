<template>
    <div :class="[{cellWrap:true},{hot:isHot}]">
      <span>
        <slot name="iconLeft"></slot>
      </span>
      <span class="txt">{{txt}}</span>
      <span>
        <slot name="iconRight"></slot>
      </span>
    </div>
</template>

<script>
    export default {
        name: "cell",
      props:["txt","isHot"]
    }
</script>

<style scoped>
    .cellWrap{
      width:100%;
      position:relative;
      border-bottom:1px solid lightgray;
      height:40px;
      line-height: 40px;
      text-align: left;
    }
  .cellWrap img{
    position:absolute;
    width:25px;
    top:6px;
  }
  .cellWrap img.iconLeft{
    left:10px;
  }
    .cellWrap img.iconRight{
      right:10px;
    }
  .cellWrap .txt{
    margin-left:30px;
  }
  .hot{
    border-bottom:none;
    color:orange;
  }
  .hot:before{
    content:"";
    width:5px;
    height:20px;
    background-color: orange;
    position:absolute;
    left:0;
    top:8px;
  }
</style>
