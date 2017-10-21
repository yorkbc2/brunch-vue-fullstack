import Vue from "vue";
import Vuex from "vuex";


// Using of VueX module
Vue.use(Vuex);




let actions   = {
	/**
		Here is the place for registering actions
		Example:
		increment(context) {
			context.commit('increment');
		}
	*/
};

let state     = {
	/**
	Use this object for adding data to global state, example:
	count: 0
	*/
};

let mutations = {
	/**
		Object for creating mutations, example:
		increment(state) {
			state.count++;
		}
	*/
};

let getters   = {
	/**
		Getters is used to get data from state by methods, example:
		getCount(state) {
			return state.count;
		}
	*/ 
};




const store = new Vuex.Store({

	state,
	mutations,
	actions,
	getters

});



export default store;