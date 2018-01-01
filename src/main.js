require('./bootstrap')

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import {mapState} from 'vuex'
import {loginUrl, userUrl, getHeader, rt} from './config'

Vue.use(VueResource)

var callbackToastr = function(){
    
};

toastr.options.onHidden = function () {
    callbackToastr();
};

toastr.options.timeOut = 3000;

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
    el: '#app',
    router,
    store,
    data: function(){
        return {
            access_token: window.localStorage.getItem('access_token') == null ? JSON.parse(window.localStorage.getItem('authUser')).access_token : window.localStorage.getItem('access_token'),
        }
    },
    computed: {
        ...mapState({
            User: state => state.Users
        })
    },
    render: h => h(App),
    created: function(){
    },
    mounted: function(){
        //Verificando se o token ainda é válido
        axios.get(rt.users.logged, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.access_token
            }
        }).then(response => {
            window.localStorage.removeItem('access_token');
        }).catch((error) => {
            callbackToastr = function(){
                window.location.href = window.apiDomain;
                throw new Error("Something went badly wrong!");
            }
            toastr.info('Para acessar é necessário fazer login!');
        })
    }
})



router.onReady(() => {    
    const authUser = window.localStorage.getItem('authUser');
    //Se o usuário não estiver logado, retorno para a home
    if(authUser == null || authUser == ""){
        //Fazendo busca do usuário logado, para setar na estrutura de dados
        const access_token = window.localStorage.getItem('access_token') == null ? JSON.parse(window.localStorage.getItem('authUser')).access_token : window.localStorage.getItem('access_token');
        axios.get(userUrl, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }).then(response => {
            var data = response.data;
            window.localStorage.setItem('authUser', JSON.stringify({
                access_token: access_token,
                email: data.email,
                name: data.name
            }));
            vm.$store.dispatch('setUserObject', {
                email: data.email,
                name: data.name
            })
            window.localStorage.removeItem('access_token');
        }).catch((error) => {
            alert('Acesse a área do cliente clique em Painel');
            window.location.href = window.apiDomain;
            throw new Error("Something went badly wrong!");
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
}, 100);


router.beforeEach((to, from, next, abort) => {
    //Verificando se o token ainda é válido
    var authUser = window.localStorage.getItem('authUser');
    if(authUser != ""){
        authUser = JSON.parse(authUser);
    }else{
        authUser = {access_token: ""};
    }
    const access_token = window.localStorage.getItem('access_token') == null ? authUser.access_token : window.localStorage.getItem('access_token');
    axios.get(rt.users.logged, {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + access_token
        }
    }).then(response => {
        if(to.meta.requiresAuth == true){
            const authUser = JSON.parse(window.localStorage.getItem('authUser'));
            if(authUser){
                next()
            }else{            
                toastr.info('Para acessar é necessário fazer login!');
            }
        }
    }).catch((error) => {
        callbackToastr = function(){
            window.location.href = window.apiDomain;
            throw new Error("Something went badly wrong!");
        }
        toastr.info('Para acessar é necessário fazer login!');
    })
    next(false);
});


router.afterEach((to, from) => {
    /*if(to.name == 'login' && from.name == "home"){
        delete require.cache[require.resolve('gentelella/build/js/custom.min.js')];
        sidebar = $('body .main_container');
        interval = setInterval(function(){
            if(sidebar.length > 0){
                require('gentelella/build/js/custom.min.js');
                clearInterval(interval);
            }
            sidebar = $('body .main_container');
        }, 100);
    }*/
    var height = $('#box').prop('scrollHeight');
    $('body').animate({
        scrollTop: height
    },  500);
});