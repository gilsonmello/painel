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

router.afterEach((to, from) => {
    
});

router.beforeEach((to, from, next) => {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'));
    if(to.meta.requiresAuth == true){
        if(authUser){
            next()
        }else{
            window.location.href="/";
        }
    }
    if(to.name == 'login' && (authUser != undefined || authUser != '' || authUser != null)){
        toastr.info('Você já está logado.');
        next({
            name: 'home'
        });
    }else{
        next();
    }
});

require('gentelella/build/js/custom.min.js');