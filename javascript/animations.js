/*===== Fixed Top Part after Scrolling*/

$(window).scroll(function() {

  if ($(this).scrollTop() > 400) {
    $(".navbar").addClass("navbar-fixed");
  } else {
    $(".navbar").removeClass("navbar-fixed");
  }

});

/*===== Navigation Scrolling Function =====*/

$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#js-return-to-top').fadeIn();
		} else {
			$('#js-return-to-top').fadeOut();
		}
	});

  $('#js-return-to-top').click(function() {      // When arrow is clicked
    $('html, body').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
    return false;
  });



/*===== Navigation Scrolling Function =====*/
/*===== Need to Upgrade =====*/

	$('#our-ceremony-btn').click(function() {
		$('html, body').animate({
				scrollTop: $('#our-ceremony').offset().top - 150
		}, 500);
		return false;
	});

	  $('#dinner-party-btn').click(function() {
		$('html, body').animate({
				scrollTop: $('#dinner-party').offset().top - 120
		}, 500);
		return false;
	});

	$('#contact-us-btn').click(function() {
		$('html, body').animate({
				scrollTop: $('#contact-us').offset().top - 100
		}, 500);
		return false;
	});

	$('#photos-btn').click(function() {
		$('html, body').animate({
				scrollTop: $('#photos').offset().top - 100
		}, 500);
		return false;
	});

});
