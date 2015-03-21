var AppController = {

	// config properties for controllers
	config: {
	},

	// initialisation method
	// initialises controllers
	init: function(){
		AppController.config["home"] = HomeController;
	}

}