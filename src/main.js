// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import {
	Carousel,
	CarouselItem,
	Form,
	Dialog,
	Button,
	Input
} from 'element-ui'
import qs from "qs"

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Input)

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://localhost:3000';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.interceptors.request.use(function(config) {
	if (config.method === "post") {
		config.data = qs.stringify(config.data)
	}
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function(response) {
	// Do something with response data
	return response;
}, function(error) {
	// Do something with response error
	return Promise.reject(error);
});


new Vue({
	el: '#app',
	router,
	render: h => h(App)
})