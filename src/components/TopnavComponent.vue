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
                            <img v-if="profile_img == undefined" src="" alt="profile">
                            <img v-else :src="profile_img"  alt="profile">
                                {{ $store.getters.auth.name }}
                            <span class=" fa fa-angle-down"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-usermenu pull-right">
                            <li>
                                <a href="#" data-toggle="modal" data-target="#modal-profile" @click="profile()">
                                    Perfil
                                </a>
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
                    <profile-edit-component :id="data_target"></profile-edit-component>

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
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import {loginUrl, getHeader, userUrl, rt} from '../config'
    import ModalFormComponent from './ModalFormComponent'
    import ProfileEditComponent from './profiles/edit'
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
            'profile-edit-component': ProfileEditComponent
		},
		mounted: function(){

		},
		methods: {
            submit: function(data) {
                
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
                access_token: window.localStorage.getItem('access_token') == null ? JSON.parse(window.localStorage.getItem('authUser')).access_token : window.localStorage.getItem('access_token'),
                buttons: {
                    submit: {
                        text: 'Editar'
                    },
                    dismiss: {
                        text: 'Fechar'
                    },
                },
                name: this.$store.getters.auth ? this.$store.getters.auth.name : '',
                email: this.$store.getters.auth ? this.$store.getters.auth.email : '',
                data_target: 'modal-profile',
                profile_img: window.apiDomain+"/bower_components/admin-lte/dist/img/user2-160x160.jpg"
			}
		}
	}
</script>
