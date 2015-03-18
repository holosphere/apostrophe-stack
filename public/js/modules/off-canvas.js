$(function(){
	var $body = $('body');
	var $trigger = $('.off-canvas-trigger');
	var $close = $('.site-nav-close');

	$trigger.on('click', function() {
		$body.toggleClass('show-off-canvas');
		return false;
	});

	$close.on('click', function() {
		$body.toggleClass('show-off-canvas');
		return false;
	});
});

