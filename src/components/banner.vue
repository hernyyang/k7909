<template>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <slot name="slide"></slot>
        </div>
    </div>
</template>

<script>
    import '../assets/swiper/js/swiper'
    export default {
        name: "banner",
      mounted:function(){
          var mySwiper=new Swiper('.swiper-container',{
            loop:true,
            autoplay:2000,
            autoplayDisableOnInteraction:false
          })
      }
    }
</script>

<style scoped>
  @import url("../assets/swiper/css/swiper.css");
  .swiper-container{
    width:100%;
    margin-top:50px;
  }
  .swiper-container img{
    width:100%;
  }
</style>
