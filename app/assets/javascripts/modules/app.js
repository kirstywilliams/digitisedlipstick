var App = {
	settings: {
	},

	init: function() {
		//this.bindUIActions();
		this.setupFullPage();
		this.startLogo();
		this.startLogoText();
	},

	bindUIActions: function() {
		//this.settings.< element >.on("click", function(){});
	},

	setupFullPage: function(){
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
	},

	showSloganText: function(){
		$('#slogan').removeClass("slogan-sleep");
		$('#slogan').addClass("slogan-wakeup");
	},

	startLogoText: function(){
		new Vivus('logo-text', {type: 'async', duration: 150, animTimingFunction: Vivus.EASE_OUT_BOUNCE }, function(obj){
			obj.el.classList.add('finished');
			App.showSloganText();
		});
	},

	startLogo: function(){
		new Vivus('lipstick', {type: 'async', duration: 150, animTimingFunction: Vivus.EASE_OUT_BOUNCE }, function(obj){
			obj.el.classList.add('finished');
		});
	}

};