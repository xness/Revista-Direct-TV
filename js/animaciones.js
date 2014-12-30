$(document).on('ready', function(){
	
	/************************************* 
	  Scrollspy para todos los capitulos
	**************************************/
	$('div.slide').on('scrollSpy:enter', function() {
		$(this).find('div').addClass('animated');
		//console.log('enter:',$el.attr('id'));
	});
	
	$('div.slide').on('scrollSpy:exit', function() {
		$(this).find('div').removeClass('animated');
		//console.log('exit:', $el.attr('id'));
	});
	
	$('div.slide').scrollSpy();

});