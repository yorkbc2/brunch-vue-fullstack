import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from "./App.vue";

import Routes from "./routes";
import Store from "./store";

import 'vueify/lib/insert-css';

Vue.config.produtionTip = false;


Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
	routes: Routes,
	mode: 'history'
}),

	store    = Store;

new Vue({

	router,
	store,
	el: "#app",

	render: h => h(App)
})