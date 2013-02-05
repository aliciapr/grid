(function($) {
	$.fn.coloredGrid = function() {

		var mainHeight = this.height();
		var mainWidth = this.width();

		this.createGrid(mainHeight, mainWidth);
		this.createPalette(mainHeight, mainWidth);
		return this;
	};
})(jQuery);

(function($) {
	$.fn.createGrid = function(height, width) {

		var firstDiv = jQuery('<div/>', {
			id : 'firstDiv'
		}).appendTo(this);
		firstDiv.css({
			'border' : '4px solid salmon',
			'float' : 'left',
			'border-radius' : '10%',
			'width' : (width * 0.9) - 8, // 4px per border, therefore 8
			'height' : height - 8
		// same with height, to enclose the child in the parent
		});

		var tableName = "myTable_" + this.attr('id');
		firstDiv.append('<table id="' + tableName + '"'
				+ ' border="1" "><tbody></tbody><table>');
		tableName = '#' + tableName;
		$(tableName).css({
			'height' : '100%',
			'width' : '100%'
		});
		firstDiv.createTable($(tableName), 20, 20);

		return this;
	};
})(jQuery);

(function($) {
	$.fn.createPalette = function(height, width) {

		var secondDiv = jQuery('<div/>', {
			id : 'secondDiv'
		}).appendTo(this);
		var secondWidth = width * 0.1;
		var margin = secondWidth * 0.05;
		var rest = secondWidth - margin;
		secondDiv.css({
			'float' : 'right',
			'margin-left' : margin,
			'border-radius' : '10%',
			'border' : '4px solid lightsalmon',
			'width' : rest - 8,
			'height' : height - 8
		});

		// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		var tableName = "my2ndTable_" + this.attr('id');
		secondDiv.append('<table id="' + tableName + '"'
				+ ' border="1" "><tbody></tbody><table>');
		tableName = '#' + tableName;
		$(tableName).css({
			'height' : '100%',
			'width' : '100%'
		});
		secondDiv.createTable($(tableName), 6, 2);

		return this;
	};
})(jQuery);

(function($) {
	$.fn.createTable = function(tbody, rows, cols) {
		var cellText;

		for ( var r = 0; r < rows; r++) {
			var trow = $("<tr>");
			for ( var c = 0; c < cols; c++) {
				// cellText = "Cell " + r + "." + c;
				$("<td>").text(cellText).data("col", c).appendTo(trow);
			}
			trow.appendTo(tbody);
		}
		// $("tr:odd").css('background', '#ccc');
		return this;
	};
})(jQuery);