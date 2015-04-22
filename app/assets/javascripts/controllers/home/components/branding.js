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
		this.onResize();
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
		  
		  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 				Branding.showLogoMask();
			}
		});
	},

	// Logo Mask - initialise the logo mask element
	showLogoMask: function(){

		this.settings["logoMaskSVGElement"] = document.querySelector('#logo-mask');
		this.settings["maskedElement"] = document.querySelector('#mask-circle');
		this.settings["circleFeedback"] = document.querySelector('#circle-shadow');
		this.settings["svgPoint"] = this.settings.logoMaskSVGElement.createSVGPoint();

		this.repositionLogoMask();
		this.logoMaskWindowListener();
		this.logoMaskEventListener();

	},

	// Logo Mask - update the mask position
	logoMaskUpdate: function(svgCoords){
    this.settings.maskedElement.setAttribute('cx', svgCoords.x);
    this.settings.maskedElement.setAttribute('cy', svgCoords.y);
    this.settings.circleFeedback.setAttribute('cx', svgCoords.x);
    this.settings.circleFeedback.setAttribute('cy', svgCoords.y);
	},

	// Logo Mask - track mouse cursor
	logoCursorPoint: function(e, svg) {
    this.settings.svgPoint.x = e.clientX;
    this.settings.svgPoint.y = e.clientY;
    return this.settings.svgPoint.matrixTransform(svg.getScreenCTM().inverse());
	},

	// Logo Mask - hook up mask window listener
	logoMaskWindowListener: function(){
		var b = Branding;
		window.addEventListener('mousemove', function(e) {
		  b.logoMaskUpdate(b.logoCursorPoint(e, b.settings.logoMaskSVGElement));
		}, false);
	},

	// Logo Mask - hook up mask event listener
	logoMaskEventListener: function(){
		var b = Branding;
		document.addEventListener('touchmove', function(e) {
		    e.preventDefault();
		    var touch = e.targetTouches[0];
		    if (touch) {
		        b.logoMaskUpdate(b.logoCursorPoint(touch, b.settings.logoMaskSVGElement));
		    }
		}, false);
	},

	// Logo Mask - reposition the logo mask on window resize
	repositionLogoMask: function(){

		//var parentPosition = this.getAbsolutePosition($('#lipstick'));
		//var offset = parentPosition["y"];
		$('#logo-mask-wrapper').css({"position": "absolute", "display": "block", "top": 0, "left": "25%"});

	},

	// General - hook up window resize listener
	onResize: function(){

		window.onresize = function(event){
			// reposition logo mask
			Branding.repositionLogoMask();

		};

	},
	
	// General - get position of dom element
	getAbsolutePosition: function(obj){
    var coords = { x: 0, y: 0 };

    coords.x += obj.offset().left;
    coords.y += obj.offset().top;
    return coords;
	},

	// General - Current document size.
	getDisplaySize: function(){
		var size = {};
		size.width = $(document).width();
		size.height = $(document).height();
		return size;
	}

};