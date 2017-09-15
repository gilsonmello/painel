require('./bootstrap')
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import router from './router'
import store from './store'


Vue.use(VueResource)
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  	primary: 'black',
  	accent: 'red',
  	warn: 'red',
  	background: 'teal'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
