/*
* ======== FULL PAGE ========
* Initialises and configures the fullpage 
* plugin.
*/
var FullPageCustom = {

	// Initialises the fullpage plugin
	init: function(){
		$("#fullpage").fullpage({
			'verticalCentered': false,
			'css3': true,
			'scrollingSpeed': 1200,
			'keyboardScrolling': true,
			'resize': false,
			'easing': 'easeInQuart',
			'navigation': true,
			'navigationPosition': 'right',
			'navigationTooltips': ['Intro', 'Slide1', 'Slide2', 'Slide3', 'Share']
		});
	}

}