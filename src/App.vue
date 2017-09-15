<template>
    <div id="app" class="phone-viewport">
        <md-toolbar>
            <md-button class="md-icon-button" @click="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title" style="flex: 1">Default</h2>

            <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
            </md-button>
            <md-avatar class="md-small">
                <img src="./assets/avatar.png" alt="People">
            </md-avatar>

        </md-toolbar>

       

        <md-sidenav class="md-left" ref="leftSidenav">
            <md-toolbar class="md-account-header">
                <md-list>
                    <md-list-item class="md-avatar-list">
                        <md-avatar class="md-large">
                            <img src="https://placeimg.com/64/64/people/8" alt="People">
                        </md-avatar>

                        <span style="flex: 1"></span>

                        <md-avatar>
                            <img src="https://placeimg.com/40/40/people/3" alt="People">
                        </md-avatar>

                        <md-avatar>
                            <img src="https://placeimg.com/40/40/people/4" alt="People">
                        </md-avatar>
                    </md-list-item>

                    <md-list-item>
                        <div class="md-list-text-container">
                            <span>John Doe</span>
                            <span>johndoe@email.com</span>
                        </div>

                        <md-button class="md-icon-button md-list-action">
                            <md-icon>arrow_drop_down</md-icon>
                        </md-button>
                    </md-list-item>
                </md-list>
            </md-toolbar>

            <md-list>
                <md-list-item @click="$refs.sidenav.toggle()" class="md-primary">
                    <md-icon>insert_drive_file</md-icon> <span>My files</span>
                </md-list-item>

                <md-list-item @click="$refs.sidenav.toggle()">
                    <md-icon>people</md-icon> <span>Shared with me</span>
                </md-list-item>

                <md-list-item @click="$refs.sidenav.toggle()">
                    <md-icon>access_time</md-icon> <span>Recent</span>
                </md-list-item>

                <md-list-item @click="$refs.sidenav.toggle()">
                    <md-icon>start</md-icon> <span>Starred</span>
                </md-list-item>

                <md-list-item @click="$refs.sidenav.toggle()">
                    <md-icon>delete</md-icon> <span>Trash</span>
                </md-list-item>
            </md-list>
          </md-sidenav>

        <!-- page content -->
        <router-view></router-view>
    </div>
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
        mounted: function() {
        
        },
        methods: {
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            toggleRightSidenav() {
                this.$refs.rightSidenav.toggle();
            },
            closeRightSidenav() {
                this.$refs.rightSidenav.close();
            },
            open(ref) {
                console.log('Opened: ' + ref);
            },
            close(ref) {
                console.log('Closed: ' + ref);
            }
        }
    }
</script>

<style>

</style>
