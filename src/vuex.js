import Vue from 'vue'
import Vuex from 'vuex'
import App from './Vuex.vue'
import './Vuex.css'
import VueRouter from 'vue-router'
import {StateView,GetterView } from '../Vuex/核心概念/index.js'

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		increment(state){
			state.count++;
		}
	}
})
store.commit('increment')
const routes = [

].concat(
	//核心概念
	[
		{path:"/state",component:StateView},	
		{path:"/getter",component:GetterView},	
	]
	)

const router = new VueRouter({
	// mode: 'history',
	routes // (缩写) 相当于 routes: routes
})

const app = new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')

