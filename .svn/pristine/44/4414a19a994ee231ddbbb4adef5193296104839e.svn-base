$(function(){
/* common script (s) */
	
	// progressBar
	$('.progressBar').each(function(){
		var percentage = parseInt($(this).html());
		if(percentage > 0){
			$(this).animate({'width':''+percentage+'%'}, 500);
		}else{
			$(this).css({'color':'transparent', 'background':'#f5f6f8'}, 500);
		}
	});


	// header menu drop
	$('.headerMenuOp').each(function(){
		var menuList = $('.headerDropWrap').height();
		$('.headerDropWrap').css({top : -menuList + 'px'});

		$('.dropClick').on('click', function(){
			if($(this).hasClass('open')==true){
				$(this).removeClass('open');
				$(this).addClass('close');
				$('body').append('<div class="dim"></div>');
				$('.dim').fadeIn();
				$('.headerDropWrap').show().animate({
					top : "47px"
				}, 600);
			}
			else{
				$(this).removeClass('close');
				$(this).addClass('open');
				setTimeout(function(){
					$('.dim').fadeOut();
					$('.dim').remove();
				}, 400);
				$('.headerDropWrap').show().animate({
					top : -menuList + 'px'
				}, 500);
			}
		});
	});

	

	//header APP
	$('.header.typeLink .appOpenBtn').click(function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).children('span').text('내용 보기');
			$($(this).parent().next('.appList')).slideUp(function(){
				$('.appList').animate('300', 'swing', function(){ 
					
				});
			});
		}else{
			$(this).removeClass('active');
			$(this).addClass('active');
			$(this).children('span').text('내용 닫기');
			$($(this).parent().next('.appList')).slideDown(function(){
				$('.appList').animate('200', 'swing', function(){ 
					
				});
			});
		}

	});

	// Header appList 스크롤시 hide
	$(window).scroll(function(){
		$('.appList').slideUp();
		$('.header.typeLink .appOpenBtn').removeClass('active');
		$('.header.typeLink .appOpenBtn').children('span').text('내용 보기');
    });

	// switch button
	$('.switchButton').on('click', function(){
		if($(this).children().is(':checked')){
			$(this).addClass('active');
			$(this).children().attr('checked', true);
		}
		else{
			$(this).removeClass('active');
			$(this).children().attr('checked', false);
		}
	});

	
	/* // Tab
	$('.tab').each(function(){
		var $tab = $('.tabList > li');
		var $sub = $('.tabContents');
		var i =0;
		$('.tabList > li.active');
			$sub.eq(i).show();
			$tab.click(function(){
				$(this).addClass('active').siblings().removeClass('active');
				i = $(this).index();
				$sub.hide();
				$sub.eq(i).show();
		});
	});
	*/

	// Tab (탭링크)
	/*if(location.hash == '#idTab'){
		$('.tabList').find('li').eq(0).addClass('active').siblings().removeClass('active');
		$('.contentTab').find('#idTab').addClass('in').siblings().removeClass('in');
	}else if(location.hash == '#pwTab'){
		$('.tabList').find('li').eq(1).addClass('active').siblings().removeClass('active');
		$('.contentTab').find('#pwTab').addClass('in').siblings().removeClass('in');
	}*/
	$('.tabList li a').click(function(e){
		e.preventDefault();
		if($(this).parent().hasClass('active')){return false;}
		$($(this).attr('href')).show().siblings('.tabContents').hide();
		$('.tabList li').removeClass('active');                          
		$(this).parent('li').addClass('active');
	});

	// Tab안에 다중탭
	$('.tabArea').each(function(){
		$('.tabArea .tabs li').on('click','a', function (e) {
			e.preventDefault();
			$(this).parent().siblings().find('a').removeClass('on');
			$(this).addClass('on');
			$(this).closest('div').find('.tabPanel').hide();
			var activeTab = $(this).attr('rel');
			$('#' + activeTab).show();
		});
		$('.tabArea .swiperMenu ul li').on('click','a', function (e) {
			e.preventDefault();
			//$(this).parent().siblings().find('a').removeClass('on');
			//$(this).addClass('on');
			$(this).parent('li').siblings().removeClass('on');
			$(this).parent('li').addClass('on');
			$(this).parents('.tabArea').find('.tabPanel').hide();
			var activeTab = $(this).attr('rel');
			$('#' + activeTab).show();
		});
	});


	// 유의사항
	$('.noteAcc .accBtn').click(function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).children('span').text('내용 보기');
			$($(this).parent().next('.accBody')).slideUp(function(){
				$('.accBody').animate('300', 'swing', function(){ 
					
				});
			});
		}else{
			$(this).removeClass('active');
			$(this).addClass('active');
			$(this).children('span').text('내용 닫기');
			$($(this).parent().next('.accBody')).slideDown(function(){
				$('.accBody').animate('300', 'swing', function(){ 
					
				});
			});
		}
	});

	
	// 전체메뉴 - 브랜드
	$('.brandOpenBtn').click(function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).children('span').text('브랜드 리스트 보기');
			$($(this).parent().next('.brandList')).slideUp(function(){
				$('.brandList').animate('300', 'swing', function(){ 
					
				});
			});
			$(this).parent().next().next('.sliderNewWrap').show();
		}else{
			$(this).removeClass('active');
			$(this).addClass('active');
			$(this).children('span').text('브랜드 리스트 닫기');
			$($(this).parent().next('.brandList')).slideDown(function(){
				$('.brandList').animate('300', 'swing', function(){ 
					
				});
			});
			$(this).parent().next().next('.sliderNewWrap').hide();
		}
	});

	// footer
	$('.footer .openBtn').click(function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).children('span').text('내용 보기');
			$($(this).parent().next('.comInfoList')).slideUp(function(){
				$('.comInfoList').animate('300', 'swing', function(){ 
					
				});
			});
		}else{
			$(this).removeClass('active');
			$(this).addClass('active');
			$(this).children('span').text('내용 닫기');
			$($(this).parent().next('.comInfoList')).slideDown(function(){
				$('.comInfoList').animate('200', 'swing', function(){ 
					
				});
			});
		}
	});
	

	// input delete button
	$('.iptWrap').each(function(){
		var deleteTxt = '해당 필드 입력값 삭제';
		$(this).append('<button type="button" class="deleteBtn"><span class="blind">'+deleteTxt+'</span></button>');
		
		//if($(this).hasClass('flex')==true){
		//	$('.deleteBtn').remove();
		//}

		$('input.delete').keyup(function() {
			$(this).parent('.iptWrap').find('.deleteBtn').show();
				if($(this).is(':visible')){
					$(this).parent('.iptWrap').find('.deleteBtn').show();
					$(this).parent('.iptWrap').addClass('on');
				}
		});
		$('.deleteBtn').click(function() {
			$(this).parent('.iptWrap').find('input.delete').val('').trigger('change').focus();
			$(this).hide();
		});
		$('input.delete').bind({
			'mousedown':function(e){
				e.preventDefault();
				$(this).closest('.iptWrap').find('input.delete').val('').focus();
				$(this).parent('.iptWrap').find('.deleteBtn').hide();
				$(this).parent('.iptWrap').removeClass('on');
			},
			'focusout':function(){
				$(this).parent('.iptWrap').removeClass('on');
			}
		});

		$('input.delete').each(function(){
			if($(this).hasClass('pw')==true){
				$(this).parent().find('.deleteBtn').css('right','35px');
			}else if($(this).hasClass('pw')==false){
				$(this).parent().find('.deleteBtn').css('right','10px');
			}
		});
	});
	// input password security key button
	$('.iptWrap .pwKeyBtn').click(function(){
		if($(this).hasClass('off')==true){
			$(this).removeClass('off');
			$(this).addClass('on');
			$(this).prev('input').prop('type', 'text');
		}else if($(this).hasClass('off')==false){
			$(this).removeClass('on');
			$(this).addClass('off');
			$(this).prev('input').prop('type', 'password');
		}
	});

		
	// textarea edit focus
	$('.textareaEdit > textarea').each(function(){
		$(this).bind('focus',function(){
			$(this).parent('.textareaEdit').css('border-color','#1b2026');
		});
		$(this).bind('focusout',function(){
			$(this).parent('.textareaEdit').css('border-color','#dbdee3');
		});
	});
		

	// toolTip
	$('.toolTip').each(function(){
		var className = $(this).attr('class');
		$(this).wrap('<div class="tip"></div>');
		$(this).closest('.tip').prepend('<button type="button" class="btnIco_tip"><span>도움말</span></button>');

		$(this).addClass('tooltip').addClass(className).removeClass('toolTip').wrapInner('<div class="cont"></div>');
		$(this).prepend('<div class="arrow"></div>');
		$(this).append('<button type="button" class="btnIco_close"><span>닫기</span></button>');
	});

	for(var i = 0; i < $('.tip').length ; ++i ){
		if( $('.tip').eq(i).hasClass('uiAct') == false ){
			$('.tip').eq(i).addClass('uiAct');
			$('.tip').eq(i).find('.btnIco_tip').attr('aria-labelledby','tooltip_'+i);
			$('.tip').eq(i).find('.tooltip').attr('id','tooltip_'+i);
			$('body').append($('.tip').eq(i).find('.tooltip'));
		}
		$('.tip').eq(i).find('.btnIco_tip').bind({
			'click' : function(e) {
				e.preventDefault();
				var str = $(this).attr('aria-labelledby');
				var isClass = String( $('#'+str).attr('class') ).indexOf("col_");
				var getW = Number( $(window).width()/12 ) * Number( String( $('#'+str).attr('class') ).substr(isClass + 4, 2) );
				var arrowL = Math.floor($(this).parents('.tip').offset().left - 15);
				//console.log(arrowL);

				$('.tip.on').removeClass('on');
				$(this).parents('.tip').addClass('on');

				$('#'+str).addClass('in');
				$('.tooltip:not(.in)').removeClass('on').fadeOut();

				if( $('#'+str).hasClass('on') == false ){
					$('#'+str).attr("tabindex", -1).focus();
				}
				
				if( isClass > -1 ) {
					$('#'+str).css('width',getW);
				} else {
					$('#'+str).css('right','15px');
				}

				$('#'+str).css('top',$(this).parents('.tip').offset().top);
				$('#'+str).find('.arrow').css('left',arrowL);
				$('#'+str).addClass('on').removeClass('in').fadeIn();
			}
		});
	}
	$('.tooltip .btnIco_close').bind({
		'click' : function(e) {
			e.preventDefault();
			$(this).parents('.tooltip').removeClass('on').fadeOut();
			$('.btnIco_tip[aria-labelledby="'+$(this).parents('.tooltip').attr('id')+'"]').parents('.tip').removeClass('on');
		}
	});
	
	$(window).resize(function(){
		if( $('body .tip').length > 0 && $('.tip').hasClass('on') ) {
			var str = $('.tip.on').find('.btnIco_tip').attr('aria-labelledby');
			var arrowL = Math.floor($('.tip.on').offset().left - 15);
			
			$('#'+str).css('top',$('.tip.on').offset().top);
			$('#'+str).find('.arrow').css('left',arrowL);
		}
	});


	// tab menu drop + scrollTop
	$('.tabDropWrap').each(function(){
		$('.tabMenuAcc .openBtn').click(function(e){
			e.preventDefault();
			
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).children('span').text('메뉴 보기');
				setTimeout(function(){
					$('.dim2').fadeOut();
					$('.dim2').remove();
				}, 400);
				$(this).parent('.tabMenuAcc').next('.tabMenuCont').slideUp(function(){
					$('.tabMenuCont').animate('300', 'swing', function() { });
				});
				$('html,body').css({'overflow': 'auto'});
			}else{
				var tabOffset = $(this).parent().parent('.tabDropWrap').offset();
				$('html,body').animate({scrollTop : (tabOffset.top) - 54 }, 500);
				$(this).addClass('active');
				$(this).children('span').text('메뉴 닫기');
				$('body').append('<div class="dim2"></div>');
				$('.dim2').fadeIn();
				$(this).parent('.tabMenuAcc').next('.tabMenuCont').slideDown(function(){
					$('.tabMenuCont').animate('300', 'swing', function() { });
				});
				$('html,body').css({'overflow': 'hidden'});
			}
		});
	});


	// 상품 찜하기
	$('.btnZzim').click(function(){
		if($(this).hasClass('off')==true){
			$(this).removeClass('off');
			$(this).addClass('on');
			//$(this).children('span').text('찜하기 취소');
		}else if($(this).hasClass('off')==false){
			$(this).removeClass('on');
			$(this).addClass('off');
			//$(this).children('span').text('찜하기');
		}
	});
	
	
	// sticky button일 때
	$('.wrap .container').each(function(){
		var bottom = $(this).children('.btnArea');
		if (bottom.hasClass('sticky')) {
			$(this).css('padding-bottom','70px');
		}else {
			$(this).css('padding-bottom','0');
		}
	});
	

	// 코스미끄 VOD 상세
	$('.vodImg.scrollFixed').each(function(){
		$('body .wrap').find('.popCont').css('padding-top','275px');
	});
	
	
	$('body .wrap').each(function(){
		// 페이지 플로팅 버튼
		$('.chaBtn_GoTop').hide();
		$('.chaBtn_GoTop').bind({
			'click':function(e){
				e.preventDefault();
				$('html,body').animate({scrollTop:0}, 500);
			}
		});
		
		// 스크롤링에 따른 플로팅버튼 + 바텀메뉴 + 메인페이지 헤더 
		var sh = screen.height/3;
		$(window).scroll(function(){
		   if($(window).scrollTop() > sh){
		        $('.chaBtn_GoTop').fadeIn();
		        $('.chaBtn_ReviewWrite').css('bottom','60px');
				$('.chaBtn_myPouch').css('bottom','60px');
				$('.chaBtn_vContent').css('bottom','60px');
				
		    } else {
		        $('.chaBtn_GoTop').fadeOut();
		        $('.chaBtn_ReviewWrite').css('bottom','0');
				$('.chaBtn_myPouch').css('bottom','0');
				$('.chaBtn_vContent').css('bottom','0');
				
		    }
		});
		var sh2 = $(window).scrollTop();
		if($('.btnArea.sticky.btnBuyArea').length) {
        	$('.botBtnArea').css('bottom','20px');
			
		}else {
			$(window).scroll(function(){
				if($(window).scrollTop() > sh2){
					$('.botBtnArea').addClass('on');
					$('.btnArea.sticky.tyB').addClass('on');
					$('header.headerScroll').addClass('on');
				}else{
					$('.botBtnArea').removeClass('on');
					$('.btnArea.sticky.tyB').removeClass('on');
					$('header.headerScroll').removeClass('on');
				}
				$(window).scrollTop() < 0 ? sh2 = 0 : sh2 = $(window).scrollTop()
			});
		}

		// 스크롤링에 따른 상품상세 sticky버튼
		if($('.btnArea.sticky.btnBuyArea').css('display') == 'block'){
			$('.reInvenArea').addClass('on');
		} else {
			$('.reInvenArea').removeClass('on');
		}


		// header scroll fixed
		if($('.wrap').children('header').hasClass('searchHeader')==true){
			$('.gnbHeader').removeClass('scrollTop_1');
			$('.wrap').css('padding-top','0');
		}else if($('.wrap').hasClass('mainWrap')==true){
			if($('.header').hasClass('headerScroll')==true){
				$('.gnbHeader').removeClass('scrollTop_1');
				$('header.headerScroll').addClass('scrollTop_1');
				$('.wrap').css('padding-top','155px');
			} else {
				$('.gnbHeader').removeClass('scrollTop_1');
				$('header.header').addClass('scrollTop_1');
				$('.wrap').css('padding-top','100px');
			}
		}else{
			$('.gnbHeader').addClass('scrollTop_1');
			$('.wrap').css('padding-top','55px');
		}
		

		// 해당 컨텐츠 위치 시 Fixed
		var top2 = $('.wrap').find('.scrollFixed_2').offset();
		var top3 = $('.wrap').find('.scrollFixed_3').offset();
		$(window).scroll(function(){
			if($('.wrap').find('.scrollFixed_2').hasClass('scrollFixed_2')==true){
			   	if ($(window).scrollTop() >= top2.top - 55) {
					$('.scrollFixed_2').addClass('scrollTop_2');
					$('.wrap').css('padding-top','110px');
				} else {
					$('.scrollFixed_2').removeClass('scrollTop_2');
					$('.wrap').css('padding-top','55px');
				}
			}
			if($('.wrap').find('.scrollFixed_3').hasClass('scrollFixed_3')==true){
				if ($(window).scrollTop() > top3.top - 155) {
					$('.scrollFixed_3').addClass('scrollTop_3');
				} else {
					$('.scrollFixed_3').removeClass('scrollTop_3');
				}
			}
		});
		
	});

/*
	// 레이어 팝업 deem 클릭시 닫기
	$(document).on('click','.deem',function(){
		$(this).closest('.layer_popup').hide();
		$('body').css('overflow','auto').off('touchmove');
	});
*/


/* content script (s) */
	/* 상품전시 2칼럼 리스트 height */
	//var columnHeight = $('.prdCategory_columnB ul li').height();
	//$('.prdCategory_columnB .inner').css({'height':''+columnHeight+'px'});
	
	/* faq */
	$('.faqList a.faqBtn').click(function (e) {
		e.preventDefault();	
		var t = $(this).parent();
		if (t.hasClass('active')) {
			t.find('.faqBody').slideUp();
			t.removeClass('active');
		} else {
			t.find('.faqBody').slideDown();
			t.addClass('active');
		}
		t.siblings().removeClass('active').find('.faqBody').slideUp();
	});

	/* 통합검색 - 성분검색 , 필터레이어 성분검색 */
	$('.schConsAcc .accBtn').click(function () {
		var t = $(this).parent();
		if (t.hasClass('active')) {
			t.find('.accBody').slideUp();
			t.removeClass('active');
		} else {
			t.find('.accBody').slideDown();
			t.addClass('active');
			var schoffset = t.offset();
			$('html, body').animate({scrollTop : schoffset.top - 55}, 500);
		}
		t.siblings().removeClass('active').find('.accBody').slideUp();
	});

	/* 통합검색 - 성분검색창 */
	$('.consLayerWrap').each(function(){
		//var innerHeight = $('.consInner').height();
		$('.wrap').css('padding-bottom','55px');
		$('.consOpbtn').click(function(){
			$(this).fadeOut();
			$('.wrap').css('padding-bottom','290px');
			$('.consLayerWrap').show().animate({
				bottom : "0px",
				height : "270px"
			}, 500);
			$('.schWrap').animate({scrollTop:0}, 500);
		});

		$('.consLayerWrap .btnIco_close').click(function(){
			$('.consLayerWrap').show().animate({
				bottom : "100%"
			}, 400);
			$('.schConstituentWrap').css('padding-bottom','50px');
		});
	});

	/* 통합검색 - 필터 레이어 */
	$('.filterSchWrap').each(function(){
		$(this).attr('aria-hidden','true');
		$(this).find('.filterInner').css('max-height', $(window).height() - $(this).find('.topArea').outerHeight() );
		if( $('.schDim').length == 0 ) {
			$('body').append('<div class="schDim"></div>');
		}
		
		// 필터 레이어 layout
		$('.filterOpLayer').click(function(){
			$('.schDim').fadeIn();
			$('.wrap').attr({'aria-hidden':'true','tabindex':'-1'});
			$('.filterSchWrap').attr('aria-hidden','false');
			$('.filterSchWrap').show().animate({
				left : "25%"
			}, 500);
		});
		$('.filterSchWrap .btnIco_close').click(function(){
			$('.filterSchWrap').show().animate({
				left : "100%"
			}, 400);
			$('.filterSchWrap').attr('aria-hidden','true');
			$('.wrap').removeAttr('aria-hidden tabindex');
			setTimeout(function(){
				$('.schDim').fadeOut();
			},400);
		});
		//필터 레이어 accordion
		$('.accordion .accBtn').click(function(e){
			e.preventDefault();
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).children('span').text('내용 보기');
				$($(this).parent().next('.accBody')).slideUp(function(){
					$('.accBody').animate('300', 'swing', function(){ 
				
					});
				});
			}else{
				$(this).removeClass('active');
				$(this).addClass('active');
				$(this).children('span').text('내용 닫기');
				$($(this).parent().next('.accBody')).slideDown(function(){
					$('.accBody').animate('200', 'swing', function(){ 
					});
				});
				//var accTop = $(this).parent();
				//var accTopOffset = accTop.offset();
				//$('.filterSchWrap .filterInner').animate({scrollTop : (accTopOffset.top) }, 300);
			}
		});
	});


	// 리뷰 도움 표시
	$('.btn_aid').click(function(){
		if($(this).hasClass('off')==true){
			$(this).removeClass('off');
			$(this).addClass('on');
		}else if($(this).hasClass('off')==false){
			$(this).removeClass('on');
			$(this).addClass('off');
		}
	});

	// 상품평작성 - 리뷰 별점
	$('.star a').click(function(e){
		e.preventDefault();
		var currentStar = $(this).attr('href');
		$(this).parent().children('a').removeClass('on');
		$('.reviewStar .txt').hide();
		$(this).addClass('on').prevAll('a').addClass('on');
		$(currentStar).show();
		return false;
	});

	// 상품평작성 - 만족도
	$('.bubbleIco_1 a').click(function(e){
		e.preventDefault();
		var currentBubble = $(this).attr('href');
		$(this).parent().children('a').removeClass('on').css('transform','scale(0.5)');
		$('.bubbleBar_1 .bar').hide();
		$(this).addClass('on').css('transform','scale(0.8)').prevAll('a').addClass('on');
		$(currentBubble).show();
		return false;
	});
	$('.bubbleIco_2 a').click(function(e){
		e.preventDefault();
		var currentBubble = $(this).attr('href');
		$(this).parent().children('a').removeClass('on').css('transform','scale(0.5)');
		$('.bubbleBar_2 .bar').hide();
		$(this).addClass('on').css('transform','scale(0.8)').prevAll('a').addClass('on');
		$(currentBubble).show();
		return false;
	});

	
	// 상세정보 더보기
	$('.moreBtn .more').click(function(e){
		e.preventDefault();
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).children('span').text('상세정보 더보기');
			$($(this).parent().prev('.editPubArea')).slideUp(function(){
				$('.editPubArea').animate('300', 'swing', function(){ 
					
				});
				$('.editPubArea').css({'height':'500px', 'display':'block'});
			});
			var moreTopOffset = $(this).parent().prev('.editPubArea').offset();
			$('html,body').animate({scrollTop : (moreTopOffset.top) - 75 }, 300);
		}else{
			$(this).addClass('on');
			$(this).children('span').text('상세정보 접기');
			$($(this).parent().prev('.editPubArea')).slideDown(function(){
				$('.editPubArea').animate('500', 'swing', function(){ 
					
				});
				$('.editPubArea').css('height','auto');
			});
		}
	});


	// 상품 옵션 레이어 - 전체 열기/닫기
	$('.optOpenClick').click(function(e){
		e.preventDefault();
		$('.optLayerWrap').addClass('dropActive');
		$('.optLayerWrap').show().animate({
			bottom : '0px'
		}, 400);
		$('html,body').css({'overflow': 'hidden'});
	});
	$('.optLayerClose').click(function(e){
		e.preventDefault();
		$(this).parent('.optLayerWrap').removeClass('dropActive');
		$('.optLayerWrap').show().animate({
			bottom : '-100%'
		}, 400);
		$('html,body').css({'overflow': 'auto'});
	});
	
	$('.optLayerWrap').each(function(){
		var optWrap = $(this).parents('.wrap').find('.optLayerWrap');

		// 상품 옵션 레이어 - 상품선택 열기/닫기
		$('.btnBuy.optOpen').click(function(e){
			optWrap.addClass('dropActive');
			optWrap.show().animate({
				bottom : '0px'
			}, 400);
			optWrap.find('.optLayerCont').removeClass('on');
			optWrap.find('.optLayerCont').css({'height' : '0px'});
			optWrap.find('.optSelectWrap#optChoice_1').show().animate({
				
			}, 500);
			optWrap.find('.optSelectWrap#optChoice_1').addClass('on');
			optWrap.find('.optSelectWrap#optChoice_1').css({'height' : 'auto' , 'opacity' : '1'});
			$('html,body').css({'overflow': 'hidden'});
		});

		$('.optBox .optOpenBtn').click(function(e){
			e.preventDefault();
			$('.optLayerCont').addClass('on');
			$('.optLayerCont').css({'height' : '0px'});
			$($(this).attr('href')).addClass('on');
			$($(this).attr('href')).css({'height' : 'auto' , 'opacity' : '1'});
			$($(this).attr('href')).show().animate({
				
			}, 500);
			$('.optBox .optOpenBtn').removeClass('active');                    
			$(this).addClass('active');
		});

		$('.optSelectWrap .optListClose').click(function(e){
			$('.optLayerCont').removeClass('on');
			$('.optLayerCont').css({'height' : 'auto'});
			$(this).parent('.optSelectWrap').show().animate({
				
			}, 500);
			$(this).parent('.optSelectWrap').removeClass('on');
			$(this).parent('.optSelectWrap').css({'height' : '0px' , 'opacity' : '0'});
		});

		// 상품 옵션 레이어 - 선택한 상품 삭제
		$('.buyOptionArea .btnDel').click(function(e){
			var $this = $(this);
			$this.closest('.buyOptionBox').removeClass('active');
			setTimeout(function(){
				$this.closest('.buyOptionBox').remove();
			},300);
		});

	});
	

	// 상품상세 - 전성분 toggle
	$('.moreView').on('click', function(){
		if($('.moreView span').text() == '자세히보기'){
			$('.moreView span').text('접기');
			$('.moreView').addClass('on');
		// });
		}
		else{
			$('.moreView span').text('자세히보기');
			$('.moreView').removeClass('on');
		}
		$('.detailGraph').slideToggle('50','linear');
		return false;
	});

	// 상품상세 - 제품속성 last on
	$(".sunTypeBox .chemiAppra .bar").each(function(){
		$(this).children('.on').last().css('transform','scale(1.4)');
	});


	//카테고리 삭제
	$('.favoriteMenu .btn_delM').click(function(){
		$(this).parent().toggle(function(){
			$(this).remove();
		});
	});



// slide (s)
	// 기본 swipe
	var swiperMenu = {
		oneitem:function(obj,page){
			var swiper = new Swiper('.'+obj, {
				pagination: '.'+page,
				paginationClickable: true,
				slidesPerView: 'auto',
				freeMode: true,
				observer: true,
				observeParents: true,
			});

			var $idx = $('.swiper-slide.active').index();
			//swiper.slideTo($idx, 0, true);
		}
	}
	$('.swiperMenu').length && swiperMenu.oneitem('swiperMenu');
	
	// 기본 swipe + "on" 클릭
	var $menuOnItem_1 = $('.swipeMenuTabA .swiper-wrapper .swiper-slide a');  // swipeMenuTabA + tabMenuAcc  
	$menuOnItem_1.click(function(e){
		var target = $(this).parent();
		$menuOnItem_1.parent().removeClass('on')
		target.addClass('on');
	});
	var $menuOnItem_2 = $('.swipeMenuTabB .swiper-wrapper .swiper-slide a'); // swipeMenuTabC + tabMenuAcc
	$menuOnItem_2.click(function(e){
		var target = $(this).parent();
		$menuOnItem_2.parent().removeClass('on')
		target.addClass('on');
	});
	var $menuOnItem_3 = $('.swipeMenuTabC .swiper-wrapper .swiper-slide a'); // swipeMenuTabC + tabMenuAcc
	$menuOnItem_3.click(function(e){
		var target = $(this).parent();
		$menuOnItem_3.parent().removeClass('on')
		target.addClass('on');
	});
	var $menuOnItem_4 = $('.swipeMenuTabD .swiper-wrapper .swiper-slide a');
	$menuOnItem_4.click(function(e){
		var target = $(this).parent();
		$menuOnItem_4.parent().removeClass('on')
		target.addClass('on');
	});
	var $menuOnItem_5 = $('.MenuTabCosmic .swiper-wrapper .swiper-slide a');
	$menuOnItem_5.click(function(e){
		var target = $(this).parent();
		$menuOnItem_5.parent().removeClass('on')
		target.addClass('on');
	});
	var $menuOnItem_6 = $('.categoryTab .swiper-wrapper .swiper-slide a');
	$menuOnItem_6.click(function(e){
		var target = $(this).parent();
		$menuOnItem_6.parent().removeClass('on')
		target.addClass('on');
	});
	var $menuOnItem_7 = $('.giftRecomList .swiper-wrapper .swiper-slide a');
	$menuOnItem_7.click(function(e){
		var target = $(this).parent();
		$menuOnItem_7.parent().removeClass('on')
		target.addClass('on');
	});
	var $menuOnItem_8 = $('.organDayWrap .swiper-wrapper .swiper-slide a'); // organDayWrap
	$menuOnItem_8.click(function(e){
		$menuOnItem_8.removeClass('on')
		$(this).addClass('on');
	});
	var $menuOnItem_9 = $('.MenuTabCosmic li a');
	$menuOnItem_9.click(function(e){
		var target = $(this).parent();
		$menuOnItem_9.parent().removeClass('on')
		target.addClass('on');
	});

	var $menuOnItem_10 = $('.MenuTabA li a , .MenuTabB li a');
	$menuOnItem_10.click(function(e){
		var target = $(this).parent();
		$menuOnItem_10.parent().removeClass('on')
		target.addClass('on');
	});

	

	// 메뉴 swiper - on 클릭 추가 	
/*	var swiper = new Swiper('.categoryTab', {
		slidesPerView: 'auto',
		preventClicks: true,
		preventClicksPropagation: false,
		observer: true,
		observeParents: true
	});
	var $snbSwiperItem = $('.categoryTab .swiper-wrapper .swiper-slide a');
	$snbSwiperItem.click(function(){
		var target = $(this).parent();
		$snbSwiperItem.parent().removeClass('on')
		target.addClass('on');
		muCenter(target);
	})

	function muCenter(target){
		var snbwrap = $('.categoryTab .swiper-wrapper');
		var targetPos = target.position();
		var box = $('.categoryTab');
		var boxHarf = box.width()/2;
		var pos;
		var listWidth=0;
		
		snbwrap.find('.swiper-slide').each(function(){ listWidth += $(this).outerWidth(); })
		
		var selectTargetPos = targetPos.left + target.outerWidth()/2;
		if (selectTargetPos <= boxHarf) { // left
			pos = 0;
		}else if ((listWidth - selectTargetPos) <= boxHarf) { //right
			pos = listWidth-box.width();
		}else {
			pos = selectTargetPos - boxHarf;
		}
		
		setTimeout(function(){snbwrap.css({
			"transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
			"transition-duration": "500ms"
		})}, 200);
	}
	*/


		






	/* BEST slide */
	var prodBestSlide = {
		oneitem:function(obj,page){
			var swiper = new Swiper('.'+obj, {
				slidesPerView: 'auto',
				initialSlide: 0,
				loop: true,
				centeredSlides: true, 
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});

			var $idx = $('.swiper-slide.active').index();
			//swiper.slideTo($idx, 0, true);
		}
	}
	$('.bestSlide').length && prodBestSlide.oneitem('bestSlide');

	/* Grab slide */
	var prodGrabSlide = {
		oneitem:function(obj,page){
			var swiper = new Swiper('.'+obj, {
				paginationClickable: true,
				slidesPerView: 'auto',
				//centeredSlides: true,
				//spaceBetween: 20,
				grabCursor: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});

			var $idx = $('.swiper-slide.active').index();
			//swiper.slideTo($idx, 0, true);
		}
	}
	$('.grab_slide').length && prodGrabSlide.oneitem('grab_slide');

	/* 상품 슬라이드 */
	var prodSlide = {
		oneitem:function(obj){
			var slider = $('.'+obj).bxSlider({  
				infiniteLoop:true,
				controls:false,
				auto:true,
				onSlideAfter: function(){

				}
			});
		}
	}
	jQuery('.cate_slide').length && prodSlide.oneitem('cate_slide');

	
	
	/* 이미지 이전,다음 슬라이드 */
	var prodImgSlide = {
		oneitem:function(obj){
			var slider = $('.'+obj).bxSlider({
				infiniteLoop:false,
				controls:true,
				auto:false,
				pager:false,
				hideControlOnEnd:true,
				onSlideAfters: function(){
					
				}
			});
		}
	}
	jQuery('.cateImg_slide').length && prodImgSlide.oneitem('cateImg_slide');
	
	/* start,stop 옵션 슬라이드  */
	var startAutoSlider = $('.prodAuto_slide > .slider').bxSlider({
		auto: true,
		speed: 500,
		//pause: 2000,
		pager: false,
		controls: true,
		autoControls: true,
		stopAutoOnClick: true, //prev, next 누르면 stop됨
		autoControlsCombine: true,
		autoControlsSelector: '.autoControl .stop',
		//prevSelector: '.autoControl .prev', 
		//nextSelector: '.autoControl .next',
		nextSelector: '.autoCounter .next',
		randomStart : true,
		infiniteLoop: true,

		//Class 추가
		onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
           // console.log(currentSlideHtmlObject);
            $('.active-slide').removeClass('active-slide');
            $('.slider > li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
        },
        onSliderLoad: function () {
            $('.slider > li').eq(1).addClass('active-slide');
        },

        //Pager
		onSlideBefore: function ($slideElement, oldIndex, newIndex){
		var current_index = parseInt(newIndex + 1);
			if(current_index > 9){
				$('.autoCounter .current').text(current_index);
			}else{
				$('.autoCounter .current').text(current_index);
			};
		}
	});
	if($('.wrap').find('.prodAuto_slide').hasClass('prodAuto_slide')==true){
		if(startAutoSlider.getSlideCount() > 9){
			$('.autoCounter .total').text(startAutoSlider.getSlideCount());
		}else{
			$('.autoCounter .total').text(startAutoSlider.getSlideCount());
		};
	};


	/* page num auto 옵션 슬라이드  */
	var pageNumAutoSlider = $('.pageAuto_slide > .slider').bxSlider({
		auto: true,
		speed: 500,
		pager: false,
		controls: false,
		infiniteLoop: true,
		
        //Pager
		onSlideBefore: function ($slideElement, oldIndex, newIndex){
		var current_index = parseInt(newIndex + 1);
			if(current_index > 9){
				$('.autoCounter .current').text(current_index);
			}else{
				$('.autoCounter .current').text(current_index);
			};
		}
	});
	if($('.wrap').find('.pageAuto_slide').hasClass('pageAuto_slide')==true){
		if(pageNumAutoSlider.getSlideCount() > 9){
			$('.autoCounter .total').text(pageNumAutoSlider.getSlideCount());
		}else{
			$('.autoCounter .total').text(pageNumAutoSlider.getSlideCount());
		};
	};


	
// slide (e)
	

	/* 원형차트 */
	$('.pieGraphBox').each(function(){
		var i=1;
		var func = setInterval(function(){
			if(i<60){
				color1(i);
				i++;
			} else if(i<75){
				color2(i);
				i++;
			} else if(i<90){
				color3(i);
				i++;
			 } else if(i<101){
				color4(i);
				i++;
			} else {
				clearInterval(func);
			}
		},5);

		function color1(i){
			$('.pieChart').css({
				"background":"conic-gradient(#ff206c 0% "+i+"%, #f5f6f8 "+i+"% 100%)"
				});
		}
		function color2(i){
			$('.pieChart').css({
				"background":"conic-gradient(#ff206c 0% 60, #c2c5c9 70% "+i+"%, #f5f6f8 "+i+"% 100%)"
				});
		}
		function color3(i){
			$('.pieChart').css({
				"background":"conic-gradient(#ff206c 0% 60%, #c2c5c9 60% 75%, #dbdee3 75%  "+i+"%, #f5f6f8 "+i+"% 100%)"
				});
		}
		function color4(i){
			$('.pieChart').css({
				"background":"conic-gradient(#ff206c 0% 60%, #c2c5c9 60% 75%, #dbdee3 75% 90% "+i+"%, #f5f6f8 100% "+i+"%, #f5f6f8 "+i+"% 100%)"
				});
		}
	});



});


/* 메인 슬라이드 높이값 체크 */
var checkHight = {
	init:function(){
		var h = $('.mainSlide.swiper-slide-active .heightCheck').outerHeight();
		$('.mainSwiper').css('height',h)
	}
}
/* 메인 슬라이드 */
var swiperMain = {
	init:function(){
		setTimeout(function(){
			var w = $('.mainSlide.swiper-slide').width();
			var len = $('.mainSlide.swiper-slide').length;
			$('.swWidth').css('width',w*len)
		},100);
		
		$(window).on('resize',function(){
			setTimeout(function(){
				var w = $('.mainSlide.swiper-slide').width();
				var len = $('.mainSlide.swiper-slide').length;
				$('.swWidth').css('width',w*len)
			},100);
		});
		setTimeout(function(){
			checkHight.init();
		},100);
		this.item();
	},
	
	item:function(){
		var _this = this;
		var gnbswiper = new Swiper('.mainGnb', {
			pagination: '.swiper-exhibit-pagination',
			paginationClickable: true,
			slidesPerView: 'auto',
			freeMode: true,
			
			onClick : function(swiper) {
				var $idx = swiper.clickedIndex; 
				if($idx === undefined){
				
				}else{
					conswiper.slideTo($idx, 100, true);
				}
			}
		});
			
		var conswiper = new Swiper('.mainSwiper', {
			paginationClickable: true,
			calculateHeight : false,
			touchAngle: 35,//각도 조절
			onInit:function(swiper){
				var url = $('.mainSlide').eq(swiper.activeIndex).data("url");
				var tab = $('.mainSlide').eq(swiper.activeIndex).children(".heightCheck").attr("id");
				$(".mainSlide").eq(swiper.activeIndex).append($('<div class="main_loding_none"><img src="../resources/images/main/img_main_loding.gif" alt="ak"></div>'));
				_this.onSwiperCreated(url,tab);
		    },
			onSlideChangeEnd : function(swiper) {
				_this.topPage();
			},          
			onSlideChangeStart : function(swiper) {
			
				//var height = $('.mainSlide.swiper-slide-active .heightCheck').outerHeight();
				//setTimeout(function(){
				//	$('.container').css('height', height);
				//},300);
			
				$('.mainGnb li').removeClass('on');
				$('.mainGnb li').eq(swiper.activeIndex).addClass('on');

			
				if(swiper.activeIndex === 0 ){
//					$('.container').css('height', height);
					$('.wrap').removeClass('sub_wrap')
				}else{
					$('.wrap').addClass('sub_wrap');
				}

				/* 가시범위에서 이동안함 */
				var num = $('.mainGnb .swiper-slide.on').offset().left;
				var size = $(window).width();
				var _num = $('.mainGnb .swiper-slide.on').outerWidth();

				if(num>size-_num){
					var $idx = $('.mainGnb .swiper-slide.on').index(); 
					gnbswiper.slideTo($idx, 100, true);  
				}else if(num < _num){
					var $idx = $('.mainGnb .swiper-slide.on').index(); 
					gnbswiper.slideTo($idx, 100, true);  
				}
				
				/* 가시범위와 상관없이 앞으로 이동 */
				var $idx = $('.mainGnb .swiper-slide.on').index(); 
				gnbswiper.slideTo($idx-1, 100, true); 
			
				/* 탭 URL 호출*/
				var url = $('.mainSlide').eq(swiper.activeIndex).data("url");
				var tab = $('.mainSlide').eq(swiper.activeIndex).children(".heightCheck").attr("id");
				$(".mainSlide").eq(swiper.activeIndex).append($('<div class="main_loding_none"><img src="../resources/images/main/img_main_loding.gif" alt="ak"></div>'));
				_this.onSwiperCreated(url,tab);
			},
		});
	},
	topPage:function(){
	  window.scrollTo(0, 0);
	},
	onSwiperCreated : function(url,tab) {
//		var url = "/beautyapp/BeautyAppStoreMainTab.do";
		//test용
		$(".heightCheck").empty();
		var testUrl = url.split(".");
		testUrl = testUrl[0]; 
		testUrl = testUrl + "Tab.do";
		$.ajax({
			type : "post",
			url : testUrl,
			dataType : 'html',
			loading : false,
			success : function(data) { 
				try {
					$("#" + tab).html(data);
					$(".main_loding_none").remove();
//					var h = $('.mainSlide.swiper-slide-active .heightCheck').outerHeight();
//					$('.mainSwiper').css('height',h)
//					conswiper.bindSwiper(idx);
			   } catch (e) {
			   }
			}
		});
	}
}
jQuery('.mainSlide').length && swiperMain.init();


$(document).ready(function(){

	// 상품상세 manuTab scrolling
	var $menu = $('.floatingMenu li'),
		$contents = $('.scroll'), 
		$doc = $('html, body'); 
	$(function () { 
		// 해당 섹션으로 스크롤 이동 
		$menu.on('click','a', function(e){ 
			var $target = $(this).parent(), 
				idx = $target.index(), 
				section = $contents.eq(idx), 
				offsetTop = section.offset().top;
			$doc.stop().animate({
				scrollTop : offsetTop - 125
			}, 300); return false; 
		});
	});
	// menu class 추가 
	$(window).scroll(function(){ 
		var scltop = $(window).scrollTop(); 
		$.each($contents, function(idx, item){ 
			var $target = $contents.eq(idx), 
			i = $target.index(), 
				targetTop = $target.offset().top,
				targetTop2 = targetTop - 130;
			if (targetTop2 <= scltop) { 
				$menu.removeClass('on'); 
				$menu.eq(idx).addClass('on'); 
			} if (!(200 <= scltop)) { 
				$menu.removeClass('on'); 
			} 
		}) 
	});

});

