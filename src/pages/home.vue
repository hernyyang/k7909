<template>
    <div>
      <MyHeader bol="true">
        <div slot="search" class="search">
          <input type="text" placeholder="影视 图书 唱片 小组">
          <img class="searchImg" src="../assets/image/ic_group_search_small.png" alt="">
          <img class="scanImg" src="../assets/image/ic_scan_gray.png" alt="">
        </div>
        <img class="right" slot="right" src="../assets/image/ic_chat_white.png" alt="">
      </MyHeader>
      <Banner>
          <div slot="slide" class="swiper-slide">
            <img src="../assets/image/banner/01.jpg" alt="">
          </div>
        <div slot="slide" class="swiper-slide">
          <img src="../assets/image/banner/02.jpg" alt="">
        </div>
        <div slot="slide" class="swiper-slide">
          <img src="../assets/image/banner/03.jpg" alt="">
        </div>
      </Banner>
      <Cell  txt="热点11" :isHot=true></Cell>
      <News :title="i.title" :des="i.des" :author="i.author" v-for="i in arr">
        <img slot="tu" :src="i.src" alt="">
      </News>
    </div>
</template>

<script>
  import Cell from"../components/cell"
  import Banner from"../components/banner"
  import MyHeader from"../components/myheader"
  import {getNewsList} from'../api/api'//导入
  import News from"../components/news"
    export default {
        name: "home",
      components:{
          News,MyHeader,Banner,Cell
      },
      data:function(){
        return{
          arr:[]
        }
      },
      created:function(){
        /*  var This=this;
          axios.get('../../static/newslist.json')
            .then(function(res){
             This.arr=res.data
            })*/
        getNewsList().then((data)=> {
          this.arr = data;
        })
      }
    }
</script>

<style scoped>
  .search{
    text-align: left;
  }
  .search input{
    width:82%;
    height:30px;
    line-height: 30px;
    margin-left:10px;
    text-indent: 2rem;
  }
    .search img{
      position:absolute;
      width:20px;
    }
  .search .scanImg{
    right:17%;
    top:10px;
  }
  .search .searchImg{
    left:10px;
    top:10px;
  }
</style>
