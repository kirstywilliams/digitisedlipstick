//= require jquery
//= require jquery_ujs
// require bootstrap-sprockets (Not required just yet.)
// require modernizr (Not required just yet.)
//= require_directory ./plugins
//= require_directory ./properties
//= require_directory ./controllers/home/components
//= require_directory ./controllers/home
//= require_directory ./controllers

$(function(){

	// Initialise application
	AppController.init();

});