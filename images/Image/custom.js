$(document).ready(function() {
	$('.slideshow').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	


/*
	$(".toggle_container").hide();
	$("h2.triggers").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false;
	});

	$(".toggle_containers_open").show();
	$("h2.triggers").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false;
	});
*/


	// collapse content
	$('h2.triggers').click(function(){
		$(this).nextAll('.toggle_containers_open:first').slideToggle("slow");
	});

	$('h2.trigger').click(function(){
		$(this).nextAll('.toggle_container:first').slideToggle("slow");
	});

});