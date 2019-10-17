
$(document).ready(function onClick () {
	var Button = $('.js-more-btn');
	var Block = $('.js-more-block');
	var isActive = false;

$('.js-more-btn').click(function(e) {
  e.preventDefault();

  	if (!isActive) {
	    // Block.addClass('is-active');
	    Block.hide(500);
	    isActive = true;
	}
    else {
	    // Block.removeClass('is-active');
	    Block.show(500);
	    isActive = false;
    }

});

// init(this);
});