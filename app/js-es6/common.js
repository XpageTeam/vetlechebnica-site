if (typeof(BX) != 'undefined')
    BX.ready(() => {
    	loadScripts();
    })
else
	$(() => {
		loadScripts();
	})

var log = (str) => {
	console.log(str)
},

loadScripts = () => {

	window.sameSizes = _ => {
		let widthSumm = 0;
		$(".desktop-table__main table tbody tr:first-child td:not(:first-child)").each((i, el) => {
			let $this = $(el);

			widthSumm += $this.outerWidth();

			$(".desktop-table__head th:eq("+i+")").width($this.outerWidth());
		});

		$(".desktop-table__head > table").width(widthSumm);
	
	};

	sameSizes();

	$(".header-special__link").click(function(){
		console.log(1)
		Cookies.set("special", 1);
		location.reload();
	});

	
	$(".fancybox").fancybox({
		beforeShow (){
			$("body").addClass("fancy-active")
		},
		afterClose (){
			$("body").removeClass("fancy-active")	
		}
	});


	$(".main-slider").slick({
		slide: ".main-slider__slide",
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		cssEase: 'linear',
		speed: 400,
		autoplay: true,
		autoplaySpeed: 7000,
		responsive: [
			{
				breakpoint: 660,
				settings: {
					dots: false,
				}
			}
		]
	});

	$(".header-slider__list").slick({
		slide: ".header-slider__item",
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $(".header-slider__arrow"),
		fade: true,
		speed: 400,
		autoplay: true,
		autoplaySpeed: 7000
	});

	$('.basepage .text-page .standart-slider').each((i,el) => {
		let $slider = $(el).find('.standart-slider__list');

		$slider.slick({
			slide: ".standart-slider__item",
			slidesToShow: 1,
			slidesToScroll: 1,
			appendArrows: $(el).find(".standart-slider__arrow"),
			fade: true,
			speed: 400,
			autoplay: true,
			autoplaySpeed: 7000,
			adaptiveHeight: true
		});

	})

	

	$(".specislist__list").slick({
		slide: ".specialist__item",
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		appendArrows: $(".specialist__title"),
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$(".news__list").slick({
		slide: ".news__item",
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		appendArrows: $(".news__title"),
		responsive: [
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$(".news__list-inner").slick({
		slide: ".news__item-inner",
		slidesToShow: 4,
		slidesToScroll: 1,
		appendArrows: $(".news__title"),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 667,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$(".about-foto__list").slick({
		slide: ".about-foto__item",
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $(".aside-info"),
	});

	$(".times__slider").slick({
		slide: ".times-col",
		slidesToShow: 7,
		slidesToScroll: 1,
		appendArrows: $(".timing__filter"),
		infinite: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
				breakpoint: 820,
				settings: {
					slidesToShow: 3,
				},
				breackpoint: 660,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.testemonials__top-btn').click(function(){
		var $this = $(this);

		$this.closest('.testemonials__item').toggleClass('js__active');
	})

	$(".basepage__slider").slick({
		slide: ".basepage__slide",
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: "linear",
	});

	$(".consultation__top").click(function(){
		var $this = $(this);

		$this.next().slideToggle(300);
		$this.toggleClass('active');
	});

	$(".sub-menu--wrap").closest(".head-top__menu-item").addClass("has-sub-menu");


	$(".city-area__item").click(function () {
		var $this = $(this);
		var pos = $this.position(".city-area__item:after");
		console.log(pos.top, pos.left);
		var posMap = $("#map").position("#oval5");
		console.log(posMap)

		console.log((posMap.top - pos.top) + (posMap.left - pos.left))
	});

	$(".head .search a").click(function(){
		$(".head .search__input-cont").toggleClass("js__search-visible");
	});
	$(".inner .head .search a").click(function(){
		$(".title-block__cont .search__input-cont").toggleClass("js__search-visible");
	});

	$(".head .search__input-cont").clone().addClass("js__search").appendTo(".title-block__cont .wrapper");


	$(".bot-text__btn").click(function(){
		$(this).toggleClass("active");
		$(this).parent(".bot-text").toggleClass("active");
	});


	$('input[type="file"]').change(function(){
		var value = $(this)[0].files[0].name;

		$(this).next('.forms__input--file-support').val(value);
	});

	$('.burger').click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass("mobile-menu--open");
	});

	$(".footer-menu__cont").each((i, el) =>{
	    let $this = $(el);

	    var title = $this.find(".footer-menu__title").text(),
	   		submenu = "";

	   	$this.find(".footer-menu__link").each((i, el) =>{
	   		let $this = $(el);

	      submenu += '<li class="submenu__el">\
				<a href="'+$this.attr("href")+'" class="submenu__link">'+$this.text()+'</a>\
			</li>'
	   	});


	   	$(".mobile-menu").append('<li class="mobile-menu__el">\
	   		<span class="mobile-menu__link sub">'+title+'</span>\
	   		<ul class="submenu"><li class="submenu__el submenu__back">Назад</li>'+submenu+'</ul>\
	   	</li>')

	});

	$("body").on("click", ".mobile-menu__link.sub, .submenu__back", function(){
		let $this = $(this);

		$this.closest('.mobile-menu__el').toggleClass('submenu-open');

	});

	$(".record-online").clone().addClass("js__reg").appendTo(".mobile-menu");
	$(".shop").clone().addClass("js__shop").appendTo(".mobile-menu");
	$(".help__list").clone().addClass("js__help").appendTo(".mobile-menu");

	var mapObj = new map();

	$(".city-area__item").hover(function(){
		let $this = $(this);

		let id = $this.attr("data-id");

		mapObj.printLines(id);

	});


	
}

$(window).on("resize", sameSizes);