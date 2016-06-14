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
    event.stopPropagation();
    $(this).next().stop(true, true).slideToggle();
    $(this).toggleClass('init_activated');
    if ($(this).hasClass('init_activated')) {
      $('body').on('click',function(){
        $('.init_activated').removeClass('init_activated')
        .next().stop(true, true).slideToggle();
      });
    }
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
// Popup всплывающая форма заказать дзвонок
$('.ques-btn').add('.take-call').on('click',function(event){
  event.preventDefault();
  $('.popup__make-call-wrap').bPopup({
      closeClass:'close-popup__make-call',
  });
});
$('.promezhutuslugi__init-left').on('click',function(){
    var left=$('.promezhutuslugi__wrap').offset().left-70;
  if ($(this).hasClass('active')){
    $('.promezhutuslugi__left-block').animate({
        left: left+'px'
      },
      {
        duration: 500,
        complete:  function(){
                    $(this).css({
                      position: 'relative',
                      left: '0'});
                  }
    })
    .animate({
        width: '370px'
      },
      {
        duration: 1000,
        complete:  function(){
                    $('.menu-promezhutuslugi__list').css({visibility:'visible'}).removeAttr('style');
                    $(this).removeAttr('style');
                  }
    });
  } else {
    $('.menu-promezhutuslugi__list')
    .css({
      visibility:'hidden',
      width: "370px"
    });
    $('.promezhutuslugi__left-block')
    .animate({
            width: "30px",
            left: "-48px"
        },
        {duration: 1000,
            complete:  function(){ $(this).css({
                                                position: "absolute",
                                                left: left+'px'
                                              });}
    })
    .animate({
        left: '0',
    }, {duration: 500});
  }
  $(this).toggleClass('active'); // добавляем активный класс для слежки
});
// позиционируем стрелку относительно активного пункта меню
var activeSideMenu = $('.promezhutuslugi__left-block .menu-promezhutuslugi__item')
    .index($('.menu-promezhutuslugi__item_active')) + 1;
// $('.promezhutuslugi__right-block')

  // конец READY
});
//=============================КАРТА==============================//
function initialize() {
    //получаем наш div куда будем карту добавлять
    var mapCanvas = document.getElementById('map_canvas');
    // задаем параметры карты
    var mapOptions = {
        //Это центр куда спозиционируется наша карта при загрузке
        center: new google.maps.LatLng(59.8940615, 30.4380672),
        //увеличение под которым будет карта, от 0 до 18
        // 0 - минимальное увеличение - карта мира
        // 18 - максимально детальный масштаб
        zoom: 14,
        //Тип карты - обычная дорожная карта
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //Инициализируем карту
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Объявляем массив с нашими местами и маркерами
    var markers = [],
        myPlaces = [];
    //Добавляем места в массив
    myPlaces.push(new Place(' пр. Обуховской Обороны, д. 86, лит.К, пом. 2Н', 59.8940615, 30.4380672, 'Санкт-Петербург'));
    //Теперь добавим маркеры для каждого места
    for (var i = 0, n = myPlaces.length; i < n; i++) {
        var marker = new google.maps.Marker({
            //расположение на карте
            position: new google.maps.LatLng(myPlaces[i].latitude, myPlaces[i].longitude),
            map: map,
            //То что мы увидим при наведении мышкой на маркер
            title: myPlaces[i].name
          });
        //Добавим попап, который будет появляться при клике на маркер
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + myPlaces[i].name + '</h5><br/>' + myPlaces[i].description
        });
        //привязываем попап к маркеру на карте
        makeInfoWindowEvent(map, infowindow, marker);
        markers.push(marker);
    }
}
function makeInfoWindowEvent(map, infowindow, marker) {
    //Привязываем событие КЛИК к маркеру
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}
//Это класс для удобного манипулирования местами
function Place(name, latitude, longitude, description){
    this.name = name;  // название
    this.latitude = latitude;  // широта
    this.longitude = longitude;  // долгота
    this.description = description;  // описание места
}
//Когда документ загружен полностью - запускаем инициализацию карты.
google.maps.event.addDomListener(window, 'load', initialize);
// Убрать placeholder

 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
 // Валидация

   var $forms = $('.rf');
       $forms.on('submit', _validate);
       $forms.on('reset', _clear);
    function _validate(e) {
        e.preventDefault();
        var
            $this = $(this),
            $inputs = $this.find('.rfield'),
            valid = true;

        $inputs.each(function () {
            var
                $this = $(this),
                $group = $this.closest('.rfield-parent'),
                value = $this.val();

            if (
                (value && $this.attr('type') !== 'email') ||
                (
                    $this.attr('type') === 'email' &&
                    /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test($this.val())
                )
            ) {
                $group.addClass('form__group_valid');
            } else {
                valid = false;
                $group.addClass('form__group_no-valid');
                $this.attr('placeholder', $this.data('value'));
            }

            $this.on('input', function () {
                $group.removeClass('form__group_no-valid');
            });
        });

        if(valid){
            $this[0].submit();
        }
    }

    function _clear(){
        $(this)
            .find('.rfield-parent')
            .removeClass('form__group_valid form__group_no-valid')
            .end()
            .find('.rfield')
    }