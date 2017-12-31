require('./bootstrap')

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import {mapState} from 'vuex'
import {loginUrl, getHeader, userUrl, rt, apiDomain} from './config'

Vue.use(VueResource)

Vue.config.productionTip = false

var status = null;

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    store,
    computed: {
        ...mapState({
            User: state => state.Users
        })
    },
    render: h => h(App),
    mounted: function(){
        
    }
})

router.onReady(() => {
    var authUser = JSON.parse(window.sessionStorage.getItem('authUser'));
    if(authUser){
        
    }else{        
        //Fazendo busca do usuário logado, para setar na estrutura de dados
        axios.get(userUrl, {headers: getHeader()}).then(response => {
            status = response.status;
            var data = response.data;
            window.sessionStorage.setItem('authUser', JSON.stringify({
                email: data.email,
                name: data.name
            }));
            vm.$store.dispatch('setUserObject', {
                email: data.email,
                name: data.name
            })
        }).catch((error) => {
            
        })
    }
    
});

var sidebar = $('body .main_container');
    
var interval = setInterval(function(){
    if(sidebar.length > 0){
        require('gentelella/build/js/custom.min.js');
        clearInterval(interval);
    }
    sidebar = $('body .main_container');
}, 500);


router.beforeEach((to, from, next) => {
    const authUser = JSON.parse(window.sessionStorage.getItem('authUser'));
    if(to.meta.requiresAuth == true){
        if(authUser){
            next()
        }else{            
            toastr.info('Para acessar é necessário fazer login!');
        }
    }
});


router.afterEach((to, from) => {
    if(to.name == 'login' && from.name == "home"){
        delete require.cache[require.resolve('gentelella/build/js/custom.min.js')];
        sidebar = $('body .main_container');
        interval = setInterval(function(){
            if(sidebar.length > 0){
                require('gentelella/build/js/custom.min.js');
                clearInterval(interval);
            }
            sidebar = $('body .main_container');
        }, 500);
    }
    var height = $('#box').prop('scrollHeight');
    $('body').animate({
        scrollTop: height
    },  500);
});