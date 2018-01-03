<template>
  	<div class="top_nav">
        <div class="nav_menu">
            <nav>
                <div class="nav toggle">
                    <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false" v-if="$store.getters.auth">
                            <img :src="profile_img" alt="profile">
                            {{ $store.getters.auth.name }}
                            <span class=" fa fa-angle-down"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-usermenu pull-right">
                            <li>
                                <a href="#" data-toggle="modal" data-target=".bs-example-modal-lg" @click="profile()">Perfil</a>
                                <!-- <modal-component></modal-component> -->
                            </li>
                            <!-- <li>
                                <a href="javascript:;">
                                    <span class="badge bg-red pull-right">50%</span>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">Help</a>
                            </li>
                            <li><a href="#" @click.prevent="logout()"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li> -->
                        </ul>
                    </li>

                    <!-- <li role="presentation" class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-envelope-o"></i>
                            <span class="badge bg-green">6</span>
                        </a>
                        <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                            <li>
                                <a>
                                    <span class="image"><img src="../assets/images/img.jpg" alt="Profile Image"></span>
                                    <span>
                                        <span>John Smith</span>
                                        <span class="time">3 mins ago</span>
                                    </span>
                                    <span class="message">
                                      Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="image"><img src="../assets/images/img.jpg" alt="Profile Image"></span>
                                    <span>
                                    <span>John Smith</span>
                                        <span class="time">3 mins ago</span>
                                    </span>
                                    <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="image"><img src="../assets/images/img.jpg" alt="Profile Image"></span>
                                    <span>
                                        <span>John Smith</span>
                                        <span class="time">3 mins ago</span>
                                    </span>
                                    <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="image"><img src="../assets/images/img.jpg" alt="Profile Image"></span>
                                    <span>
                                      <span>John Smith</span>
                                      <span class="time">3 mins ago</span>
                                    </span>
                                    <span class="message">
                                      Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
                                </a>
                            </li>
                            <li>
                                <div class="text-center">
                                    <a>
                                      <strong>See All Alerts</strong>
                                      <i class="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </nav>
        </div>
        <modal-component @interface="submit" :method="method" :action="action"></modal-component>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import {loginUrl, getHeader, userUrl, rt} from '../config'
    import ModalComponent from './ModalComponent'
	export default{
        computed: {
            ...mapState({
                User: state => state.Users
            }),
            ...mapGetters([
                'auth'
            ])
        },
		components: {
            ModalComponent
		},
		mounted: function(){

		},
		methods: {
            submit: function(data) {
                alert('submetido')
            },
            profile: function(){

            }
            // logout: function(){
            //     //Fazendo busca do usuário logado, para setar na estrutura de dados
            //     axios.get(rt.users.logout,  {
            //         headers: {
            //             'Accept': 'application/json',
            //             'Authorization': 'Bearer ' + this.access_token
            //         }
            //     }).then(response => {
            //         if(response.status === 200){
            //             this.$store.dispatch('clearAuthUser')
            //             window.localStorage.removeItem('authUser')
            //             this.$router.push({name: 'home'})
            //             toastr.options.onHidden = function () {
            //                 window.location.href = window.apiDomain
            //                 throw new Error("Something went badly wrong!");
            //             };
            //             toastr.options.timeOut = 3000;
            //             toastr.info("Logoff efeituado com sucesso!");
            //         }
            //     })
            // }
		},
		data: function(){
			return {
                method: "POST",
                action: rt.users.edit,
                profile_img: window.apiDomain+"/bower_components/admin-lte/dist/img/user2-160x160.jpg",
                access_token: window.localStorage.getItem('access_token') == null ? JSON.parse(window.localStorage.getItem('authUser')).access_token : window.localStorage.getItem('access_token'),
			}
		}
	}
</script>
