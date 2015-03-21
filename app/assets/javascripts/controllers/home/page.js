var Page = {
	settings: {
	},

	init: function() {
		//this.bindUIActions();
		this.setupFullPage();
		this.startLogo();
		this.startLogoText();
		this.startSloganText();
	},

	bindUIActions: function() {},

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

	startSloganText: function(){
		Page.settings["sloganSketch"] = new Vivus('logo-slogan', {type: 'oneByOne', start: 'manual', duration: 50, animTimingFunction: Vivus.EASE_IN }, function(obj){
			obj.el.classList.add('finished');
		});
	},

	startLogoText: function(){
		Page.settings["titleSketch"] = new Vivus('logo-text', {type: 'async', start: 'manual', duration: 50, animTimingFunction: Vivus.EASE_OUT }, function(obj){
			obj.el.classList.add('finished');
			Page.settings.sloganSketch.play();
		});
	},

	startLogo: function(){
		new Vivus('lipstick', {type: 'async', duration: 50, animTimingFunction: Vivus.EASE_IN }, function(obj){
			obj.el.classList.add('finished');
			Page.settings.titleSketch.play();
		});
	},

	getDisplaySize: function(){
		var size = {};
		size.width = $(document).width();
		size.height = $(document).height();
		return size;
	}

};