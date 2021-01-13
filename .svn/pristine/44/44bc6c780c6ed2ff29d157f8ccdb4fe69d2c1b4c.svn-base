$(document).ready(function() {
	$('img.lazy').lazy({
		effect: "fadeIn",
          effectTime: 700,
          threshold: 200
	});

	$("img.lazy").each(function() {
		var test = $(this).height();
		$(this).css("min-height",test);
	});

	// home 최상단 배너
	var top_banner_group = new Swiper('.top_banner_group .swiper-container');

	// visual 배너
	$(".visual_group .swiper-container").each(function(i) {
		var visual_swiper = "swiper" + i;

		visual_swiper = new Swiper($(this), {
			loop: true,
			autoplay: true,
			initialSlide:0,
			slidesPerView: 'auto',
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction'
			},
		});

		$(this).find(".control").on('click', function() {
			if($(this).hasClass("on")) {
				visual_swiper.autoplay.start();
				$(this).find("em").text("일시정지");
			} else {
				visual_swiper.autoplay.stop();
				$(this).find("em").text("시작");
			}

			$(this).toggleClass("on");

			return false;
		});
	});
	
	// 상품평 이미지
	$(".review_img_wrap .swiper-container").each(function(i) {
		var visual_swiper = "swiper" + i;

		visual_swiper = new Swiper($(this), {
			loop: true,
			autoplay: false,
			initialSlide:0,
			slidesPerView: 'auto',
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction'
			},
		});

		$(this).find(".control").on('click', function() {
			if($(this).hasClass("on")) {
				visual_swiper.autoplay.start();
				$(this).find("em").text("일시정지");
			} else {
				visual_swiper.autoplay.stop();
				$(this).find("em").text("시작");
			}

			$(this).toggleClass("on");

			return false;
		});
	});

	// trend_pick
	var swiper = new Swiper('.trend_pick_group .swiper-container', {
	loop:true,
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 12,
	pagination: {
	el: '.swiper-pagination',
	type: 'fraction',
	virtual: {
		slides: (function () {
			var slides = [];
					return slides;
				}()),
			},
		}
	});

	//card_group
	var swiper = new Swiper('.card_group .swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 13,
	sliderMove:1
	});

	//item_recommend_group
	var swiper = new Swiper('.item_recommend_group .swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 12
	});

	//item_tag_group
	var swiper = new Swiper('.item_tag_group .swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 12
	});

	//shopping_group
	var swiper = new Swiper('.shopping_group .swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 12
	});

	//akon
	var swiper = new Swiper('.akon_group .swiper-container', {
	slidesPerView: 3,
	autoHeight: true,
	spaceBetween: 9
	});
	
	//category_recommend tab
	var swiper = new Swiper('.tab_group .tab_btn .swiper-container', {
		slidesPerView: 'auto'
	});

	var swiper = new Swiper('.notice_group .swiper-container', {
		loop:true,
		direction: 'vertical',
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			clickable: false,
		}
	});

	//circle_panel 한줄 swipe
	var swiper = new Swiper('.circle_panel.swiper-container', {
	slidesPerView: 'auto'
	});

	//circle_panel 그룹 swipe
	var swiper = new Swiper('.week_event_group .area > .swiper-container', {
		slidesPerView: 1,
		pagination: {
			el: '.week_event_group .area .swiper-pagination',
			clickable: true
		},
	});

	//band_item
	var swiper = new Swiper('.band_item_group .swiper-container', {
		slidesPerView: 1,
		pagination: {
			el: '.band_item_group .swiper-pagination',
			clickable: true
		},
	});

	$(".visual_group .more,.indicator .close").on('click',function() {
		$(".indicator").toggleClass("on");

		return false;
	});

	// tooltip
	$(".toggle_tooltip").on('click',function() {
		$(this).addClass("on");
	});

	// tooltip
	$(".tooltip_text a").on('click',function() {
		$(".toggle_tooltip").removeClass("on");

		return false;
	});

	// tab
	$(".tab_group .tab_btn button").on('click',function() {
		var idx = $(this).index(".tab_group .tab_btn button");

		$(this).parents(".tab_group").find("button").removeClass("on");
		$(this).addClass("on");
		$(this).parents(".tab_group").find(".tab_box:eq("+ idx +")").siblings().removeClass("on");
		$(this).parents(".tab_group").find(".tab_box:eq("+ idx +")").addClass("on");
	});

	// video start
	$(".video .video_group .ico").on('click',function() {
		var attr_text = $(this).parent(".video_group").attr("attr");

		$(this).parent().addClass("on");
		$(this).parent().find(".img_box").remove();
		document.getElementById(attr_text).play();

		return false;
	});

	// visual slide 로딩 후 적용하기 위해서 하단에 기입
	$(".visual_group").each(function() {
		$(this).find(".swiper-pagination-total").text($(this).find(".swiper-slide").length);
	})

	// 상단고정
	var topoffset = $(".top_fix").offset();

	$(window).scroll(function() {
		var scrolltop = $(this).scrollTop();
		if(scrolltop >= (topoffset.top - 134)) {
			$(".top_fix").addClass("on");
		} else {
			$(".top_fix").removeClass("on");
			$(".top_fix .tab_btn , .top_fix .link_group").removeAttr("style");
		}

		if($(".top_fix").hasClass("on")){
			$(".top_fix.on .tab_btn").css("top",scrolltop + 51 + "px");
			$(".top_fix.on .link_group").css("top",(scrolltop + 99) + "px");
		}
	});

	// category_group
	$(".category_group .more").on('click',function() {
		$(this).parent().children(".link_group").toggleClass("on");

		if($(this).parent().children(".link_group").hasClass("on")) {
			$(this).text("카테고리 닫기 -");
		} else {
			$(this).text("카테고리 더보기 +");
		}
	});

	//toast_banner
	$(window).scroll(function(){ 
		 var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

		if ($(window).scrollTop() >= "1000"){
			$(".toast_banner").fadeIn();
		}
	});

	$(".toast_banner .close").on('click',function() {
		$(this).parents(".toast_banner").hide();

		return false;
	});

	$(".visual_group").each(function() {
		slide_total = $(this).find('.swiper-slide:not(.swiper-slide-duplicate)').length;	

		$(this).find('.swiper-pagination-total').text(slide_total);
	});
});