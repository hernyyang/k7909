import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from'../pages/home'
import Audio from'../pages/audio'
import Group from'../pages/group'
import Mine from'../pages/mine'
import Broadcast from'../pages/broadcast'
import Film from"../pages/audio/film"
import Tv from"../pages/audio/tv"
import Read from"../pages/audio/read"
import City from"../pages/audio/City"
import Music from"../pages/audio/music"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      component:Home
    },
    {
      path:"/audio",
      component:Audio,
      children:[{
        path:'',component:Film
      },
        {
          path:'film',component:Film
        },
        {
          path:'read',component:Read
        },
        {
          path:'tv',component:Tv
        },
        {
          path:'music',component:Music
        },
        {
          path:'city',component:City
        },
      ]
    },
    {
      path:"/group",
      component:Group
    },
    {
      path:"/mine",
      component:Mine
    },
    {
      path:"/broadcast",
      component:Broadcast
    },
  ]
})
