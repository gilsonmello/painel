require('./bootstrap')

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

require('./assets/gentelella/build/js/custom.js');