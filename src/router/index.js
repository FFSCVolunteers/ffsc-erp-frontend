import Vue from 'vue'
import Router from 'vue-router'

import PageLogin from '@/components/PageLogin'
import PageModules from '@/components/PageModules'
import PageAnnouncement from '@/components/PageAnnouncement'
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
      path: '/modules',
      name: 'PageModules',
      component: PageModules
    },

    {
      path: '/announcement',
      name: 'PageAnnouncement',
      component: PageAnnouncement
    },

    {
      path: '/stats',
      name: 'PageStats',
      component: PageStats
    }
  ]
})
