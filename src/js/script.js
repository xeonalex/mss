$(document).ready(function(){
	$('.init_block').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('init_activated');

	});

	$('.carousel-main').owlCarousel({
  	items: 1,
  	nav: true,
  	pagination: false,
  	navText: [],
    loop: true,
  	autoplay:true,
  	responsive: {
  	}
  });
	$(".carousel-wrap").css({'visibility': 'visible', 'opacity':'1' });
  // Сладер на главной странице
  $(".gallery-banners").owlCarousel({
  	items: 1,
  	nav: true,
  	navText: [],
    loop: true,
  	// autoplay:true,
    navigation: true,
    pagination: true,
  	responsive: {
  	}
  });


  // конец READY
});


