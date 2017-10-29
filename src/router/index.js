import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Index from "@/components/index"
import Shouye from "@/components/crtuser/shouye"
import tLogin from "@/components/crtteacher/tLogin"

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'layout',
		component: Layout,
		redirect: "/index",
		children: [{
			path: "index",
			name: "index",
			component: Index
		}, {
			path: "shouye",
			name: "shouye",
			component: Shouye
		}, {
			path: "tLogin",
			name: "tLogin",
			component: tLogin
		
		}]

	}]
})