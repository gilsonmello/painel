<template>
    <main class="container body">
        <div class="main_container">
            <sidebar-component></sidebar-component>
            <topnav-component></topnav-component>
            <div class="right_col" role="main">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12 col-lg-12">
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
</template>

<script>
    import SidebarComponent from './components/SidebarComponent.vue'
    import TopnavComponent from './components/TopnavComponent.vue'
    import FooterComponent from './components/FooterComponent.vue'
    export default {
        name: 'app',
        components: {
            SidebarComponent,
            TopnavComponent,
            FooterComponent
        },
        watch: {
            $route: function(to, from){
                
            }
        },
        data: function(){
            return {
                context: this,
                logged: null
            }
        },
        mounted: function() {
            var id = '#'+this.context.$el.getAttribute('id');
            
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
</style>