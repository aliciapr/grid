$(document).ready(function() {

	var ContainerName = "MainContainer";
	CreateMainContainer(ContainerName);


	jQuery('<div/>', {
		id : 'FirstDiv'
	}).appendTo('#MainContainer');

	$('#FirstDiv').css({
		'border-color' : 'red',
		'border-style' : 'dotted',
		'border-width' : '0 150px 150px 0',
		'height' : '0',
		'width' : '0'
	// ,'margin-left' : '10px',
	// 'margin-top' : '10px',
	// 'margin-bottom' : '10px'
	});

	jQuery('<div/>', {
		id : 'SecondDiv'
	}).appendTo('#MainContainer');

	$('#SecondDiv').css({
		'border-color' : 'salmon',
		'border-style' : 'dotted',
		'border-width' : '0 150px 150px 0',
		'height' : '0',
		'width' : '0'
	});
	
	 $('#MainContainer').MyCss("3px solid blue");
	// $('#FirstDiv').MyCss("2px solid red");
	// $('#SecondDiv').MyCss("2px solid salmon");
	
	// DrawWithRaphael();

});