<template>
    <main class="container body">
        <div class="main_container">
            <sidebar-component></sidebar-component>
            <topnav-component></topnav-component>
            <router-view></router-view>
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
        },
        methods: {
            
        }
    }
</script>
