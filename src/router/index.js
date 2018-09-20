import Vue from 'vue'
import Router from 'vue-router'

import PageLogin from '@/components/PageLogin'
import PageStats from '@/components/PageStats'

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
    },

    {
      path: '/stats',
      name: 'PageStats',
      component: PageStats
    }
  ]
})
