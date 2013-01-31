(function($) {
	$.fn.coloredGrid = function() {

		var mainHeight = this.height();
		var mainWidth = this.width();

		var firstDiv = jQuery('<div/>', {
			id : 'firstDiv'
		}).appendTo(this);
		firstDiv.css({
			'border' : '4px solid salmon',
			'float' : 'left',
			'border-radius' : '22%',
			'width' : (mainWidth * 0.9) - 8, // 4px per border, therefore 8
			'height' : mainHeight
		});

		var secondDiv = jQuery('<div/>', {
			id : 'secondDiv'
		}).appendTo(this);
		var secondWidth = mainWidth * 0.1;
		var margin = secondWidth * 0.05;
		var rest = secondWidth - margin;
		secondDiv.css({
			'float' : 'left',
			'margin-left' : margin,
			'border-radius' : '22%',
			'border' : '4px solid salmon',// lightsalmon
			'width' : rest - 8,
			'height' : mainHeight
		});

		return this;
	};
})(jQuery);
