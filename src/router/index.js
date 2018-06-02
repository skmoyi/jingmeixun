import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import lizi from '@/components/lizi'
import us from "@/components/us"
import anli from "@/components/anli"
import fuwu from "@/components/fuwu"
import lianxi from "@/components/lianxi"
import news from "@/components/news"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path:'/lizi',
    	name:'lizi',
    	component: lizi
    },
    {
    	path:'/us',
    	name:'us',
    	component: us
    },
    {
    	path:'/anli',
    	name:'anli',
    	component: anli
    },
    {
    	path:'/fuwu',
    	name:'fuwu',
    	component:fuwu
    },
    {
    	path:'/lianxi',
    	name:'lianxi',
    	component:lianxi
    },
    {
    	path:'/news',
    	name:'news',
    	component:news
    }
  ]
})
