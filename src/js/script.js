$(document).ready(function(){
  (function() {
    if (window.pluso)if (typeof window.pluso.start == "function") return;
    if (window.ifpluso==undefined) { window.ifpluso = 1;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
  }})();
  $('.init_block').on('click', function(event) {
		event.preventDefault();
    $(this).next().stop(true, true).slideToggle();
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
    $('.article__gallery-wrap').owlCarousel({
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
//------------------------------------------ Lightbox---------------------------------------

lightbox.option({
  'resizeDuration': 50,
  'wrapAround': true
});

$('.feedbacks-owl').owlCarousel({
    items: 1,
    nav: true,
    navText: [],
    loop: true,
    // autoplay:true,
    navigation: true,
    // pagination: true,
    responsive: {
    }
  });

  // конец READY
});


