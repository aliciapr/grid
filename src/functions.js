function CreateMainContainer(name) {

	// $(document.body).append('<div id=' + name + '></div>');

	var MainDiv = document.createElement("div");
	MainDiv.id = name;
	$(document.body).append(MainDiv); // appendChild?

}

function DrawWithRaphael(){
	var paper = Raphael(0, 0, 320, 320);
	// Creates canvas 320 × 200 at 10, 50
	var rect = paper.rect(10, 50, 40, 40).attr({
		"fill" : "red"
	// ,"stroke" : "green",
	// "stroke-width": "3"
	});

	var rect2 = paper.rect(60, 50, 50, 50).attr({
		"fill" : "salmon"
	});
}

(function($) {
	$.fn.MyCss = function(options) {

		this.css('border', options);
		return this;
	};
})(jQuery);
