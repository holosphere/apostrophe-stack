$(function(){
	var $header = $('.site-header');
	var $body = $('body');
	var $window = $(window);

	$header.on('click', function(e){
		if($(e.target).is('a')) {
			return;
		}
		$body.toggleClass('collapse-header');
	});

	if ($window.width() < 790) {
		$body.addClass('collapse-header');
	}

	$window.on('resize', function() {
		if (!$body.hasClass('collapse-header')) {
			$body.addClass('collapse-header');
		}
	});

})