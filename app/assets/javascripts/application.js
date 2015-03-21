//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require modernizr
//= require_directory ./libs
//= require_directory ./controllers/home
//= require_directory ./controllers

$(function(){

	// initialise application
	AppController.init();

});