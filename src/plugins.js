(function($) {
	$.fn.coloredGrid = function() {

		var mainHeight = this.height();
		var mainWidth = this.width();

		this.createCanvas(mainHeight, mainWidth);
		this.createPalette(mainHeight, mainWidth);

		return this;
	};
})(jQuery);

(function($) {
	$.fn.createCanvas = function(height, width) {

		var firstDiv = jQuery('<div/>', {
			id : 'firstDiv'
		}).appendTo(this);
		var borderWidth = parseFloat(this.css("border-top-width"))
				+ parseFloat(this.css("border-bottom-width"));
		var borderHeight = parseFloat(this.css("border-left-width"))
				+ parseFloat(this.css("border-right-width"));
		var fWidth = (width * 0.9) - borderWidth; // (width * 0.9) - 8 //4px
		// per border, therefore 8
		var fHeight = height - borderHeight; // height - 8;
		firstDiv.css({
			// 'display' : 'table',
			'border' : '4px solid salmon',
			'float' : 'left',
			'border-radius' : '10%',
			'width' : fWidth,
			'height' : fHeight
		});

		var tableName = "myTable_" + this.attr('id');
		firstDiv.append('<table id="' + tableName + '"'
				+ ' border="1" "><tbody></tbody><table>');
		tableName = '#' + tableName;
		$(tableName).css({
			// ,'table-layout' : 'fixed'
			// 'height' : '100%',
			'border-collapse' : 'collapse',
			'width' : '100%'
		});

		firstDiv.createTable($(tableName), 20, 20, fHeight);

		return this;
	};
})(jQuery);
(function($) {
	$.fn.createTable = function(tbody, rows, cols, totalHeight) {
		var r, c, trow;
		var aux = totalHeight / rows;
		for (r = 0; r < rows; r++) {
			trow = $("<tr>");
			for (c = 0; c < cols; c++) {
				// $("<td>").text("Cell " + r + "," + c).data("col",
				// c).appendTo(trow);
				$("<td>").data("col", c).height(aux).appendTo(trow);// .css('height',
				// aux)
			}
			trow.appendTo(tbody);
		}
		// $("tr:odd").css('background', '#ccc');
		return this;
	};
})(jQuery);

(function($) {
	$.fn.createPalette = function(height, width) {

		var secondDiv = jQuery('<div/>', {
			id : 'secondDiv'
		}).appendTo(this);
		var secondWidth = width * 0.1;
		var leftMargin = secondWidth * 0.05; // gap of 5% of the containing
		// div's width
		var rest = secondWidth - leftMargin;
		// - parseFloat($('#firstDiv').css("border-right-width"));
		var borderWidth = parseFloat(this.css("border-top-width"))
				+ parseFloat(this.css("border-bottom-width"));
		var borderHeight = parseFloat(this.css("border-left-width"))
				+ parseFloat(this.css("border-right-width"));
		var sHeight = height - borderHeight;
		secondDiv.css({
			'float' : 'right',
			'margin-left' : leftMargin,
			// 'border-radius' : '10%',
			'border' : '4px solid lightsalmon',
			'width' : rest - borderWidth,
			'height' : sHeight
		});

		var tableName = "my2ndTable_" + this.attr('id');
		secondDiv.append('<table id="' + tableName + '"'
				+ ' border="1" "><tbody></tbody><table>');
		tableName = '#' + tableName;
		$(tableName).css({
			'border-collapse' : 'collapse',
			'width' : '100%'
		});
		secondDiv.createTable($(tableName), 6, 2, sHeight);

		return this;
	};
})(jQuery);
