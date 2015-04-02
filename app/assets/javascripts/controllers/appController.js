/*
* ======== APPLICATION CONTROLLER ========
* Initialises all component controllers.
* 
*/
var AppController = {

	// config properties for controllers
	config: {
	},

	// initialisation method
	// initialises controllers
	init: function(){
		this.config["home"] = HomeController;
	}

}