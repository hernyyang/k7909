<template>

    <div>
      <div class="newsTop">
        <div class="newsTopLeft">
          <h3>{{title}}</h3>
          <p>{{des}}</p>
        </div>
        <div class="newsTopRight">
          <slot name="tu"></slot>
        </div>
        <p>{{author}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "news",
      props:["title","des","author"]
    }
</script>

<style scoped>
      .newsTop{
        width:100%;
        display:flex;
        padding:12px;
        font-size: 14px;
      }
  .newsTop  .newsTopLeft{
     flex:3;
    text-align: left;
   }
      .newsTop .newsTopRight{
        flex:1;
      }
      .newsTop  .newsTopRight img{
        width:100px;
      }
</style>
