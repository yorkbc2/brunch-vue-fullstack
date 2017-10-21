import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);




let actions   = {};

let state     = {};

let mutations = {};

let getters   = {};




const store = new Vuex.Store({

	state,
	mutations,
	actions,
	getters

});



export default store;