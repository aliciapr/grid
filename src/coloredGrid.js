(function($) {
	$.fn.coloredGrid = function() {

		createTable = function(container, rows, cols, totalHeight, totalWidth,
				fillWithColor) {

			var table = jQuery('<table/>', {
				// id : container.attr('id') + "Table", // we will not use ID's
				border : 1
			}).append('<tbody />').appendTo(container);

			table.css({
				'border-collapse' : 'collapse',
				'width' : totalWidth,
				'height' : totalHeight
			});

			var body = table.children('tbody');

			var r, c, trow, res, cellNum;
			var red, green, blue;
			cellWidth = Math.floor(totalWidth / cols);
			blue = green = red = 0;
			res = 100 / (cols * rows / 3);
			for (r = 0; r < rows; r++) {
				trow = $("<tr>");
				for (c = 0; c < cols; c++) {
					cellNum = r * cols + c;
					if (fillWithColor) {
						switch (cellNum % 3) {
						case 0:
							blue += res;
							$("<td>").css(
									'background-color',
									'rgb(' + red + '%,' + green + '%,' + blue
											+ '%)').appendTo(trow);
							// .text('('+red+','+green+','+blue+')');
							break;
						case 1:
							green += res;
							$("<td>").css(
									'background-color',
									'rgb(' + red + '%,' + green + '%,' + blue
											+ '%)').appendTo(trow);
							//.text('('+red+','+ green+','+blue+')');
							break;
						case 2:
							red += res;
							$("<td>").css(
									'background-color',
									'rgb(' + red + '%,' + green + '%,' + blue
											+ '%)').appendTo(trow);
							//.text('('+red+','+green+','+blue+')');
							break;
						}
					} else {
						$("<td>").appendTo(trow);
					}
				}
				body.append(trow);
			}

		};

		// -------------- create canvas -----------------------------------
		createCanvas = function(height, width, color, borderWidth) {

			var canvasBorder = borderWidth + 'px solid ' + color;

			var canvas = jQuery('<div/>').addClass("canvas");

			canvas.css({
				'display' : 'table-cell', // show divs as cells
				'border' : canvasBorder,
				// 'float' : 'left',
				'vertical-align' : 'middle',
				// 'border-radius' : '10%',
				'width' : width,
				'height' : height
			});

			createTable(canvas, 20, 20, height, width, false);
			return canvas;
		};

		// -------------- create palette -----------------------------------
		createPalette = function(height, width, margin, color, borderWidth) {

			var paletteBorder = borderWidth + 'px solid ' + color;

			var palette = jQuery('<div/>').addClass("palette");

			palette.css({
				'display' : 'table-cell',
				// 'float' : 'right',
				'margin-left' : margin,
				'border' : paletteBorder,
				'width' : width,
				'height' : height
			});

			createTable(palette, 6, 2, height, width, true);
			return palette;
		};

		var mainHeight = parseInt(this.height());
		var mainWidth = parseInt(this.width());

		var borderSize = 4;

		var canvasHeight = mainHeight - (2 * borderSize);
		var canvasWidth = Math.floor((mainWidth - (2 * borderSize)) * 0.9);

		// // gap of 5% of the containing div's width:
		var leftMargin = 0;
		// leftMargin = Math.floor(paletteWidth * 0.05);
		// --> this is an issue if results in 0
		// if (leftMargin === 0) {
		// leftMargin = 1;
		// mainWidth++;
		// this.css('width', mainWidth);
		// paletteWidth++;
		// }

		var paletteHeight = canvasHeight;
		var paletteWidth = Math.floor(mainWidth * 0.1) - (2 * borderSize)
				- leftMargin;

		createCanvas(canvasHeight, canvasWidth, 'salmon', borderSize).appendTo(
				this);

		fillWithColor = true;
		createPalette(paletteHeight, paletteWidth, leftMargin, 'lightsalmon',
				borderSize).appendTo(this);

		return this;
	};
})(jQuery);
