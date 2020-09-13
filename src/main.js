import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'styles/reset.styl'
import 'styles/border.styl'
import 'styles/common.styl'

import 'styles/iconfont.css'

import 'js/common.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
