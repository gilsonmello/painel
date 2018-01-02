<template>
    <main class="container body" v-if="!loading">
        <div class="main_container">
            <sidebar-component></sidebar-component>
            <topnav-component></topnav-component>
            <div class="right_col" role="main">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                        <transition name="fade">
                            <keep-alive>
                                <router-view></router-view>
                            </keep-alive>
                        </transition>
                    </div>
                </div>
            </div>
            <footer-component></footer-component>
        </div>
    </main> 
    <main class="container body" v-else>
        <div class="main_container">
            <load-component style="padding: 16% 0;"></load-component>
        </div>
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
                if(newValue == true){
                    $('body').css({
                        'background-color': '#fff'
                    });
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
            router.onReady(() => {  
                this.loading = false
            })
            router.beforeEach((to, from, next) => {
                this.loading = true
                next()
            })
            router.afterEach((to, from) => {
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
    
    ul.bar_tabs{
        min-height: 25px;
        height: auto !important;  
    }
    
    ul.bar_tabs>li{
        margin-top: 0
    }

    .site_title{
        font-size: 18px;
    }
    
    ul.bar_tabs>li.active{
        margin-top: -5px;
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