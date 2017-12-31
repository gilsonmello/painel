<template>
	<div>
      <a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a>
		<div class="login_wrapper" v-show="!login_load">
	        <div class="animate form login_form">
	          	<section class="login_content">
		            <form action="/login" method="POST" @submit.prevent="handleLoginFormSubmit()">
		              	<h1>Login Form</h1>
		              	<div class="alert alert-danger" v-if="errors.credentials != null">
							<label>{{ errors.credentials }}</label>
						</div>
		              	<div>
		                	<input v-model="login.email" required="required" type="email" class="form-control" id="email" placeholder="E-mail">
		              	</div>
		              	<div>
		               	 	<input v-model="login.password" required="required" minlength="6" type="password" class="form-control" id="password" placeholder="Senha">
		              	</div>
		              	<div>
		                	<button class="btn btn-default submit" type="submit">Log in</button>
		                	<a class="reset_pass" href="#">Lost your password?</a>
		              	</div>

		              	<div class="clearfix"></div>

		              	<div class="separator">
		                	<!-- <p class="change_link">New to site?
		                  		<a href="#signup" class="to_register"> Create Account </a>
		                	</p>

		                	<div class="clearfix"></div>
		                	<br>
							<div>
			                  	<h1><i class="fa fa-paw"></i> Gentelella Alela!</h1>
			                  	<p>
			                  		©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms
			                  	</p>
			                </div> -->
		              	</div>
		            </form>
	          </section>
	        </div>
      	</div>
      	<div class="login_wrapper" v-show="!login_load">
        	<div class="animate form login_form">
          		<section class="login_content">

          		</section>
      		</div>
  		</div>
	</div>
</template>

<script>
	import {loginUrl, getHeader, userUrl, rt} from '../config'
	import {mapState} from 'vuex'
	import Load from './Load'
	export default {
		name: 'login',
		computed: {
            ...mapState({
                User: state => state.Users
            })
        },
        watch: {
        	$route (to, from) {
		      	
		    }
        },
        mounted: function(){
        	var vm = this;
			//$(vm.$el).find('#birth_date').inputmask('99/99/9999');
			
        },
		methods: {
			verifyEmail: function(){
				axios.get(baseUrl+ '/users/verify_email', {}).then(response => {

				});
			},
			handleLoginFormSubmit: function(){
				const data = {
		            grant_type: 'password',
		            client_id: 2,
		            client_secret: 'IiJlm1WLh9Pk5uIj6ABJCv7gy2k2FlUugwgfb4m5',
		            username: this.login.email,
		            password: this.login.password,
		            scope: '',
		        };
		        
		        axios.interceptors.request.use(config => {
		        	this.login_load = true;
				  	return config;
				});
				axios.post(loginUrl, qs.stringify(data)).then(response => {					
					if(response.status === 200){
						const authUser = {};
              			authUser.access_token = response.data.access_token
              			authUser.refresh_token = response.data.refresh_token
						window.localStorage.setItem('authUser', JSON.stringify(authUser))

						//Fazendo busca do usuário logado, para setar na estrutura de dados
						axios.get(userUrl, {headers: getHeader()}).then(response => {
							this.login_load = false;
		                  	authUser.email = response.data.email
		                  	authUser.name = response.data.name
		                  	window.localStorage.setItem('authUser', JSON.stringify(authUser))
		                  	this.$store.dispatch('setUserObject', authUser)
		                  	//window.location.href = "/painel"
		                  	this.$router.push({name: 'home'});
		                })
					}

				}).catch((error) => {
					this.login_load = false;
					this.errors = {
						credentials: 'Usuário ou Senha inválidos'
					};
				});
				this.login_load = false;
			}
		},
		data: function(){
			return {
				login: {
					email: '',
					password: ''
				},
				name: '',
				email: '',
				password: '',
				confirm_password: '',
				birth_date: '',
				errors: [],
				login_load: false,
				gym: [],
				selected: null
			}
		},
		components: {
			Load
		}
	}
</script>