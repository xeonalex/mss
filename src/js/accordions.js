// Объявление модуля
var accordModule = (function () {
	// Прослушивает события

	function _setUpListners () {
		$(".accordeon-init").on('click', _accordionVacancy);
		$(".accordeon-close").on('click', _accordionVacancy);
	};

	function _accordionVacancy(e){
		e.preventDefault();
		var parentLi=$(this).closest('.accordeon__li');
		parentLi
			.toggleClass('accord-active')
			.children('.accordeon-content')
			.stop(true, true)
			.slideToggle();
		parentLi
			.siblings('.accord-active')
			.toggleClass("accord-active")
			.children('.accordeon-content')
			.stop(true, true)
			.slideUp();
	}

	// Возвращаем объект (публичные методы)
	return {
		init: _setUpListners
	};

})();

// Вызов модуля
accordModule.init();