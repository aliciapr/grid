(function($) {
	$.fn.myCss = function(options) {
		this.css('border', options);
		return this;
	};
})(jQuery);

(function($) {
	$.fn.coloredGrid = function() {

		var mainHeight = this.height();
		var mainWidth = this.width();

		var firstDiv = jQuery('<div/>', {
			id : 'firstDiv'
		}).appendTo(this); // '#mainContainer'
		firstDiv.css({
			'width' : (mainWidth * 90) / 100.0,
			'background-color' : 'salmon',
			'float' : 'left',
			'height' : mainHeight
		// 'margin-right' : '3px'
		});
		// firstDiv.myCss("2px solid salmon");// $('#firstDiv').

		var secondDiv = jQuery('<div/>', {
			id : 'secondDiv'
		}).appendTo(this);
		secondDiv.css({
			'width' : (mainWidth * 10) / 100.0,
			'float' : 'left',
			'background-color' : 'lightsalmon',
			'height' : mainHeight
		});

		return this;
	};
})(jQuery);
