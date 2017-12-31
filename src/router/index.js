import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomeComponent from '@/components/HomeComponent'
import Login from '@/components/Login'
import anthropometries from '@/components/evaluations/anthropometries'

Vue.use(Router)

export default new Router({
  	routes: [
	    {
	      	path: '/',
	      	name: 'home',
			meta: {requiresAuth: true},
	      	component: HomeComponent
	    },
	    {
	      	path: '/evaluations/anthropometries',
	      	name: 'anthropometries',
	      	props: true,
			meta: {requiresAuth: true},
	      	component: anthropometries
	    }
  	]
})
