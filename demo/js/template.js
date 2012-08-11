// JavaScript Document
// Hide Menu on menu item click if in one-column mode 
$(document).delegate('.ui-page', 'pageshow', function () {
	var floating = true;
	if ($('.content-secondary').css('float') == 'none') floating = false;
	
    if (!floating) {
			$('.content-secondary').hide();
	}
});
// Toggle the menu on button click
$(document).delegate('#togglemenu', 'click', function() {
	var floating = true;
	if ($('.content-secondary').css('float') == 'none') floating = false;
	
	if (floating) {
		$('.content-secondary').toggle("slide", { direction: "left" }, "fast");
	}
	else{
		$('.content-secondary').slideToggle('fast');
	}
});
