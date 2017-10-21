// Import your components here

import IndexComponent from "./../components/Index.vue";



const routes = [

	{
		// Path to component, can be '/about' or something else
		path: "/",
		// Place your component here to show it on special url
		component: IndexComponent,
		// The name of route (optional)
		name: "IndexPage"
	}

];

// Exporting
export default routes;