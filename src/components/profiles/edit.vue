<template>

    <modal-form-component :id="id" @interface="submit" class="modal fade" :method="method" :action="action">
        <div slot="modal-header" class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
                <span aria-hidden="true">×</span>
            </button>
            <h4 slot="header-form">
                Perfil (Editar)
            </h4>
        </div>
        <div slot="modal-body" class="modal-body">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input type="text" class="form-control" name="name" id="name" placeholder="Nome" v-model="name">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="E-mail" v-model="email">
                    </div>
                </div>
            </div>
        </div>
        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
                Fechar
            </button>
            <button type="submit" class="btn btn-success">
                Editar
            </button>
        </div>
    </modal-form-component>
</template>

<script>
	import {mapState, mapGetters} from 'vuex'
	import {rt} from '../../config'
	import ModalFormComponent from '../ModalFormComponent'
	export default {
		components: {
			'modal-form-component': ModalFormComponent
		},
		methods: {
			submit: function(data) {
                axios.put(this.action, { 
                	email: this.email,
                	name: this.name
                }, {
                	headers: {
		                'Accept': 'application/json',
		                'Authorization': 'Bearer ' + this.access_token
		            }
                }).then((response) => {
					if(response.status === 200){

                	}

                }).catch((error) => {

                })
            },
		},
		props: ['id'],
		computed: {
			...mapState({
                User: state => state.Users
            }),
            ...mapGetters([
                'auth'
            ])
		},
		mounted: function(){
			this.action = rt.users.update.replace('{id}', this.auth_id)
		},
		watch: {
			'$store.getters.auth': function(){
				this.auth_id = this.$store.getters.auth.id
                this.name = this.$store.getters.auth.name
                this.email = this.$store.getters.auth.email
			},
			auth_id: function(newValue, oldValue){
				
			}
		},
		data: function(){
			return {
				method: "PUT",
                auth_id: this.$store.getters.auth ? this.$store.getters.auth.id : '',
                name: this.$store.getters.auth ? this.$store.getters.auth.name : '',
                email: this.$store.getters.auth ? this.$store.getters.auth.email : '',
                access_token: window.localStorage.getItem('access_token') == null ? JSON.parse(window.localStorage.getItem('authUser')).access_token : window.localStorage.getItem('access_token'),
                action: null,
			}
		}
	}
</script>

<style>
	
</style>