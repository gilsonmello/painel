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
var vm = new Vue({
    el: '#app',
    router,
    store,
    data: function(){
        return {
            loading: true,
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
            window.localStorage.removeItem('authUser');
            toastr.info('Para acessar é necessário fazer login!');
        })
        const authUser = JSON.parse(window.localStorage.getItem('authUser'));
        this.$store.dispatch('setUserObject', authUser)
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


router.beforeEach((to, from, next) => {
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
    delete require.cache[require.resolve('gentelella/build/js/custom.min.js')];
    sidebar = $('#sidebar');
    interval = setInterval(function(){
        if(sidebar.length > 0){
            require('gentelella/build/js/custom.min.js');
            clearInterval(interval);

            var controller = 'home'
            if(to.fullPath != "/"){
                controller = to.fullPath.split('/')[1]
            }
            var action = to.fullPath.split('/')[2] != undefined ? to.fullPath.split('/')[2] : "" ;

            /*  Configurações para ativar e desativar opções na sidebar
                Fará um loop até encontrar a sidebar
                Caso encontre, fecha todos dropdowns da sidebar
                E procura o dropdown correto para deixá-lo ativo
            */
            interval = setInterval(function(){
                //Caso encontre
                if($('[controller="'+controller+'"]').length > 0){
                    //Paro a execução do loop
                    clearInterval(interval)
                    //Fecho todos os dropdowns pai
                    $('[controller]').removeClass('active')
                    //Fecho todos os dropdowns filhos
                    $('[action]').removeClass('active');

                    /*  Se o menu para mobile estiver aberto
                        Adiciono somente a classe active-sm
                        Para o dropdown não aparecer aberto
                    */
                    if($('body').hasClass('nav-sm')){
                        $('[controller="'+controller+'"]').addClass('active-sm');
                        $('[action="'+action+'"]').addClass('active-sm');
                        $('[action="'+action+'"]').parent().css({
                            'border-right': '5px solid #1ABB9C'
                        });
                        $('[action="'+action+'"]').parent().addClass('active-sm');
                    }else{
                        //Deixo o dropdown de acordo com a url executada aberto
                        $('[controller="'+controller+'"]').addClass('active');
                        $('[action="'+action+'"]').addClass('active');
                        $('[action="'+action+'"]').parent().addClass('active');
                        $('[action="'+action+'"]').parent().parent().fadeIn('slow');
                    }
                }
            }, 10)
        }
        sidebar = $('#sidebar');
    }, 10);
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
    // var height = $('#box').prop('scrollHeight');
    // $('body').animate({
    //     scrollTop: height
    // },  500);

});
