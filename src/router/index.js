import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import news from '@/components/new'
import sports from '@/components/sports'  
import tech from '@/components/tech'
import music from '@/components/music'
import personal from '@/components/personal'
import login from '@/components/login'
import pinglun from '@/components/pinglun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
      // redirect: {name: 'music'}
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
      // redirect: {name: 'music'}
    },
    {
    	path: '/news',
    	name: 'news',
      component: news,
      children:[
       { path:'sports',name:'sports',component:sports },
       { path:'tech',name:'tech',component:tech }
      ]
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/pinglun',
      name: 'pinglun',
      component: pinglun
    }
  ]
})
