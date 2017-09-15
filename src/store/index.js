import Vue from 'vue'
import Vuex from 'vuex'
import Users from '../modules/User/main'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
    Users
	}
})
