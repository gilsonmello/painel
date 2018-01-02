<template>
	<div class="col-md-3 left_col" id="sidebar">
        <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
                <router-link class="site_title" style="padding: 0; height: auto;" :to=" {name: 'home'} ">
                    <img :src="logo_img" width="70" height="70"> <span>Máxima Saúde</span>
                </router-link>
            </div>
            <div class="clearfix"></div>
            <!-- menu profile quick info -->
            <div class="profile clearfix" style="margin-top: 10px">
                <div class="profile_pic">
                    <img :src="profile_img" alt="..." class="img-circle profile_img">
                </div>
                <div class="profile_info">
                    <span></span>
                    <h2 v-if="$store.getters.auth">{{ $store.getters.auth.name }}</h2>
                    <h2 v-else>--------------</h2>
                </div>
            </div>
            <!-- /menu profile quick info -->

            <br>

        <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <div class="menu_section">
                <h3>General</h3>
                    <ul class="nav side-menu">
                        <li class="active" id="home" controller="home">
                            <router-link :to=" {name: 'home'} ">
                                <i class="fa fa-home"></i> Dashboard
                            </router-link>
                        </li>
                        <li controller="evaluations">
                            <a>
                                <i class="fa fa-edit"></i> Relatórios <span class="fa fa-chevron-down"></span>
                            </a>
                            <ul class="nav child_menu" style="">
                                <li>
                                    <router-link action="anthropometries" :to="{ name: 'anthropometries' }">Antropometria</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        <!-- /sidebar menu -->

        <!-- /menu footer buttons -->
        <div class="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="" href="login.html" data-original-title="Logout">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
        </div>
        <!-- /menu footer buttons -->
      </div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default{
        data: function(){
            return {
                profile_img: window.apiDomain+"/bower_components/admin-lte/dist/img/user2-160x160.jpg",
                logo_img: window.apiDomain+"/logo.jpg",
                user: {
                    name: '',
                    email: ''
                }
            }
        },
        computed: {
            ...mapState({
                User: state => state.Users
            }),
            ...mapGetters([
                'auth'
            ])
        },
        mounted: function(){
            
        }
    }
</script>
