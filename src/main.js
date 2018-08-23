// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import GSignInButton from 'vue-google-signin-button'
import Checkbox from './components/utils/checkbox'
import Slideout from 'vue-slideout'

import Axios from 'axios'

Vue.config.productionTip = true

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(GSignInButton)
Vue.component('checkbox', Checkbox);
Vue.component('Slideout', Slideout);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
  	App
  },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (Store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})