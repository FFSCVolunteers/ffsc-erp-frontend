import Vue from 'vue'
import Router from 'vue-router'

import PageLogin from '@/components/PageLogin'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/', redirect: '/login'
    },
  
    {
      path: '/login',
      name: 'PageLogin',
      component: PageLogin
    }
  ]
})
