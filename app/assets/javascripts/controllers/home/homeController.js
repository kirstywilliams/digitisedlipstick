/**
* ======== HOME CONTROLLER ========
* Initialises all components for the
* home page of the application i.e. home#index
*/
var HomeController = {

	// Config properties for controller objects
	config: {
	},

	// Initialisation method
	init: function(){},

	// Add functions to be run on page load.
	head: function(){
		// Full page
		FullPageCustom.init();
		
		// Branding animations
		Branding.init();
	},

	// All functions to be run after page load.
	foot: function(){
		// Draws force-directed graph
		//Graph.init($(window).width(), $(window).height());
	}
	
}