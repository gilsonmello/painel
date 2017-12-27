<template>
    <main id="app">
        <div class="ui top attached demo menu">
            <a class="item">
                <i class="sidebar icon"></i>
                Menu
            </a>
        </div>
        <div class="ui bottom attached segment pushable">
            <div class="ui inverted labeled icon left inline vertical sidebar menu" style="">
                <a class="item">
                    <i class="home icon"></i>
                    Home
                </a>
                <a class="item">
                    <i class="block layout icon"></i>
                    Topics
                </a>
                <a class="item">
                    <i class="smile icon"></i>
                    Friends
                </a>
                <a class="item">
                    <i class="calendar icon"></i>
                    History
                </a>
            </div>
            <div class="pusher">
                <div class="ui basic segment">
                    <h3 class="ui header">Application Content</h3>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import SidebarComponent from './components/SidebarComponent.vue'
    import TopnavComponent from './components/TopnavComponent.vue'
    export default {
        name: 'app',
        components: {
            SidebarComponent,
            TopnavComponent
        },
        data: function(){
            return {
                context: this
            }
        },
        mounted: function() {
            var id = '#'+this.context.$el.getAttribute('id');
            $(id+' .ui.sidebar')
            .sidebar({
                context: $(id+' .bottom.segment')
            })
            .sidebar('attach events', id+' .menu .item');
        },
        methods: {
            
        }
    }
</script>

<style scoped>
</style>
