/*
* ======== BRANDING ========
* Initialises the branding animations
* on the home page of the application 
* i.e. home#index
*/
var Branding = {

	// Settings for the animations
	settings: {
	},

 	// Initialises the animations 
	init: function() {
		this.startLogo();
		this.startLogoText();
		this.startSloganText();
	},

	// Slogan text - run after company name
	// has finished running
	startSloganText: function(){
		this.settings["sloganSketch"] = new Vivus('logo-slogan', {type: 'oneByOne', start: 'manual', duration: 50, animTimingFunction: Vivus.EASE_IN }, function(obj){
			obj.el.classList.add('finished');
		});
	},

  // Company name - run on page load
  // synchronous with logo animation
	startLogoText: function(){
		this.settings["titleSketch"] = new Vivus('logo-text', {type: 'async', start: 'manual', duration: 50, animTimingFunction: Vivus.EASE_OUT }, function(obj){
			obj.el.classList.add('finished');
			Branding.settings.sloganSketch.play();
		});
	},

	// Logo - run on page load
	// synchronous with company name animation
	startLogo: function(){
		new Vivus('lipstick', {type: 'async', duration: 50, animTimingFunction: Vivus.EASE_IN }, function(obj){
			obj.el.classList.add('finished');
		  Branding.settings.titleSketch.play();
		});
	},

	// (1) Function to move one random node to beat of a song.
	// (possibly a js library)


	// Current document size.
	getDisplaySize: function(){
		var size = {};
		size.width = $(document).width();
		size.height = $(document).height();
		return size;
	}

};