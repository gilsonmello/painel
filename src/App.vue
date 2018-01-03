<template>
    <main class="container body" v-if="!loading">
        <div class="main_container">
            <sidebar-component></sidebar-component>
            <topnav-component></topnav-component>
            <div class="right_col" role="main">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <footer-component></footer-component>
        </div>
    </main>
    <main class="container body" v-else>
        <load-component style=" position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></load-component>
    </main>
</template>

<script>
    import SidebarComponent from './components/SidebarComponent.vue'
    import TopnavComponent from './components/TopnavComponent.vue'
    import FooterComponent from './components/FooterComponent.vue'
    import LoadComponent from './components/Load.vue'
    import {mapState} from 'vuex'
    import router from './router'
    var x = {
        aInternal: false,
        aListener: function(val) {},
        set a(val) {
            this.aInternal = val;
            this.aListener(val);
        },
        get a() {
            return this.aInternal;
        },
        registerListener: function(listener) {
            this.aListener = listener;
        }
    }
    export default {
        name: 'app',
        components: {
            SidebarComponent,
            TopnavComponent,
            FooterComponent,
            LoadComponent
        },
        computed: {
            ...mapState({
                User: state => state.Users
            })
        },
        watch: {
            loading: function(newValue, old){
                if(!newValue){

                }
            },
            $route: function(to, from){

            }
        },
        data: function(){
            return {
                context: this,
                logged: null,
                loading: true,
                styleObject: {

                }
            }
        },
        mounted: function() {
            var id = '#'+this.context.$el.getAttribute('id');
            this.loading = false
            router.beforeEach((to, from, next) => {
                $('.body').addClass('fade-leave-active')
                $('body').css({
                    'background-color': '#fff'
                });
                next()

                this.loading = true

                // $('.body').addClass('fade-enter-active');
                // $('.body').removeClass('fade-leave-active');

            })
            router.afterEach((to, from) => {
                //this.loading = false
                // $('.body').addClass('fade-leave-active');
                // $('.body').removeClass('fade-enter-active');
                //$('body').removeAttr('style');

                //$('.body').removeClass('fade-leave-active')
                $('.body').removeClass('fade-leave-active');
                $('.body').addClass('fade-enter-active');
                $('body').removeAttr('style');

                this.loading = false

            })
        },
        created: function(){

        },
        methods: {

        }
    }
</script>

<style>

    body {
        background-color: #fff;
        color: #000
    }

    a{
        color: #000
    }

    a:hover{
        color: #009a6e;
    }

    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }
    .fade-enter-active {
        transition-delay: .25s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .left_col, .nav_title{
        background-color: #000
    }

    .nav.side-menu > li.active > a{
        background: #000;
        border: 1px solid #009a6e;
        box-shadow: rgba(0, 0, 0, 0.25) 0 1px 0, inset #009a6e 0 1px 6px
    }
    .nav-sm ul.nav.child_menu{
        background: #000
    }

    ul.bar_tabs{
        min-height: 25px;
        height: auto !important;
    }

    ul.bar_tabs > li{
        margin-top: 0;
        border-top: 3px solid #F5F7FA !important;
        margin-bottom: -2px;
        margin-right: 5px;
    }

    .nav-tabs > li.active > a{
        border: initial;
    }

    ul.bar_tabs > li:hover{
        border-top: 3px solid #1ABB9C !important;
    }

    .site_title{
        font-size: 18px;
    }

    ul.bar_tabs>li.active{
        margin-top: 0;
    }

    .nav-tabs>li.active>a{

    }

    ul.bar_tabs>li{
        border: initial;
    }

    ul.bar_tabs>li.active{
        border-right: initial;
        border-top-color: #1ABB9C !important;
    }

    .nav-tabs>li{
        margin-bottom: 1px;
    }

    .nav-md ul.nav.child_menu li.active:before{
        background-color: #1ABB9C
    }

    @media (min-width: 300px) and (max-width: 420px){
        /*ul.bar_tabs>li{
            margin-bottom: 19px;
            margin-left: 1px;
        }
        ul.bar_tabs>li a{
            padding: 10px;
        }*/
    }
    @media (min-width: 200px) and (max-width: 300px){
        /*ul.bar_tabs>li{
            margin-bottom: 19px;
            margin-left: 1px;
        }
        ul.bar_tabs>li a{
            padding: 5px;
        }*/
    }

    @media (max-width: 992px){

    }
</style>
