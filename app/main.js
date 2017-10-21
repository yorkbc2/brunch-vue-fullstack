/**
	Importing the main package from npm 'Vue'
*/

import Vue from 'vue';

/**
	Vue router for routing and navigation between components
*/

import VueRouter from 'vue-router';

/**
	AJAX package for vue
*/

import VueResource from 'vue-resource';

/**
	Main Component for rendering
*/

import App from "./App.vue";

/**
	All the routes between components
*/

import Routes from "./routes";

/**
	General Store by VUEX
*/

import Store from "./store";

/**
	library for inserting css into vue
*/

import 'vueify/lib/insert-css';
// Off production tips
Vue.config.produtionTip = false;

// Using of VueRouter
Vue.use(VueRouter);
// Using of VueResource
Vue.use(VueResource);

/**
	Init the router, using mode 'history' for removing a hash from url
*/

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
}),

	store    = Store;

/**
	General model for Vue App
*/

new Vue({

	router,
	store,
	el: "#app",

	render: h => h(App)
})