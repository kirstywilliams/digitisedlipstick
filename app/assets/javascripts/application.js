//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require modernizr
//= require_directory ./plugins
//= require_directory ./properties
//= require_directory ./controllers/home/components
//= require_directory ./controllers/home
//= require_directory ./controllers

$(function(){

	// Initialise application
	AppController.init();

});