/* 상단 gnb  동작 [D] 2016.12.14 수정 */
var gnbScorll = {
  init:function(){
    var h = $('.cate_menu').offset().top;
    var targetHeight = $('.cate_menu').outerHeight();
    $(window).scroll(function(){
        if($(window).scrollTop() > h){
            $('.cate_menu').addClass('active');
            $('.category_wrap.pt46').css('padding-top',targetHeight)
        }else{
            h = $('.cate_menu').offset().top
            $('.cate_menu').removeClass('active');
            $('.category_wrap.pt46').css('padding-top',0)
        }
      });
    }
}
jQuery('.scroll_fix').length && gnbScorll.init();

/* 상품 슬라이드 */
var prodSlide = {
    
    oneitem:function(obj){

        var slider = $('.'+obj).bxSlider({  
            infiniteLoop:true,
            controls:false,
            auto:true,
            onSlideAfter: function(){
            },onSlideBefore: function(){
            }
        });
    }

}
jQuery('.cate_slide1').length && prodSlide.oneitem('cate_slide1');

/* 상품 슬라이드 */
// 161207수정
var prodSlide2 = {
    
    oneitem:function(obj, page){

        var swiper = new Swiper('.'+obj, {
            pagination: '.'+page,
            autoplay:2000,
            loop:true,
            paginationClickable: true,
            onTouchStart:function(swiper){
              
              console.log(1)
               
            }
        });
    }

}
jQuery('.cate_slide2').length && prodSlide2.oneitem('cate_slide2', 'swiper-page');

/* layer_full */
var layerFull = {
    init: function(obj1,obj2){

        this.$wrap = $('.'+obj1);
        this.$btn = $('.'+obj2);
        this.$body = $('body');
        this.$close = this.$wrap.find('.btn_close_cate');
        this.addEvent(obj2);

    },
    addEvent: function(obj2){
        var _this = this;
        var $hs = 0;
        $(document).on('click','.'+obj2,function(e){
            var $this = jQuery(this);
            e.preventDefault();
            _this.$body.css({'overflow':'','position':''});
            _this.$wrap.show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
            
            $('.depth_type1').hide();
            $('.depth_type2').hide();

            if($this.hasClass('cate_big')){
                $hs = 0;
                _this.$wrap.find('.p_head3 .title').text('카테고리 선택');
                $('.cate_type').hide();
                $('.depth_type1').show();
            }else if($this.hasClass('cate_mid')){
                $hs = 0;
                _this.$wrap.find('.p_head3 .title').text('카테고리 선택')
                $('.cate_type').hide();
                $('.depth_type2').show();
            }else if($this.hasClass('cate_sam')){
                $hs = 0;
                _this.$wrap.find('.p_head3 .title').text('카테고리 선택')
                $('.depth_type1').show();
            }else if($this.hasClass('cate_sam2')){
                $hs = 0;
                _this.$wrap.find('.p_head3 .title').text('카테고리 선택');
                $('.depth_type1').show();
            }else if($this.hasClass('cate_brand')){
                $hs = $this.offset().top;
                var $name =$('.cate_aly.cate_brand').attr('data-name');
                _this.$wrap.find('.p_head3 .title').text($name+' 추천브랜드');
                $('.depth_type1').show();
            }
        });

        this.$close.on('click',function(e){
             var $this = jQuery(this);
            _this.$body.css({'overflow':'','position':''}).scrollTop($hs + -50);
            _this.$wrap.hide().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
            e.preventDefault();
        });

    }

}
$('.layer_full_cate').length && layerFull.init('layer_full_cate','cate_aly');

/* 중카 열고 닫기 */
var midCateOnOff ={
    init: function(obj1,obj2){

        this.$wrap = $('.depth_type2');
        this.act();

    },
    act: function(){
        var _this = this;
        this.$wrap.find('dt').on('click',function(){

            var $this = jQuery(this);

            if(!$this.hasClass('active')){
                $this.addClass('active');
                $this.next().show();
            }else if($this.hasClass('active')){
                $this.removeClass('active');
                $this.next().hide();
            }
        });
    }
}
midCateOnOff.init();

/* sns on off */
var snsOnOff = {
    init:function(obj){
        this.$wrap = $('.'+obj);
        this.$btn = this.$wrap.find('.btn_open');
        this.$close = this.$wrap.find('.btn_close');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            $this.next().show();
        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            $this.closest('span').hide()
        });
    }    
}
jQuery('.cate_img_type').length && snsOnOff.init('cate_img_type');
jQuery('.cate_list_type').length && snsOnOff.init('cate_list_type');
jQuery('.cate_thumb_type').length && snsOnOff.init('cate_thumb_type');

/* wish 버튼 토글 
var wishToggle = {
    init:function(){
        this.$btn = $('.btn_wish2');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            
            if(!$this.hasClass('on')){
                $this.addClass('on');
            }else if($this.hasClass('on')){
                $this.removeClass('on');
            }

        });

    }    
}
jQuery('.category_wrap').length && wishToggle.init();

/* 장바구니 찜 버튼 */
var wishToggle = {
    init: function(){

        this.$btn = $('header .btn_wish2');
        this.$tg = $('.default_wish_prod');
        this.$close = this.$tg.find('.btn_close');
        this.act();

    },
    act:function(){
        var _this = this;

        this.$btn.on('click',function(e){
            var $this = jQuery(this);
            var sh = $(window).outerHeight() - 80;
            var st = $(window).scrollTop();
            
            _this.$tg.show().addClass('active');
            var ch = _this.$tg.find('.popup_wrap').outerHeight();

            if(sh > ch){
                var ps = (sh - ch);
                _this.$tg.find('.popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});

            }else if(sh <= ch){
                _this.$tg.find('.popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
            }
            e.preventDefault();
        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.default_wish_prod').hide().removeClass('active');
        });

        $(window).on('orientationchange',function(){
            if(_this.$tg.hasClass('active')){

                setTimeout(function(){
                    var sh = $(window).outerHeight()-80;
                    var st = $(window).scrollTop();
                    _this.$tg.show();
                    var ch = _this.$tg.find('.popup_wrap').outerHeight();

                    if(sh > ch){
                        var ps = (sh - ch);
                        _this.$tg.find('.popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});

                    }else if(sh <= ch){
                        _this.$tg.find('.popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
                    }
                 },500);

            }
        });

    }
}
$('.btn_wish2').length && wishToggle.init();

/* 카테고리 슬라이드 */
var swiperCate = {
    
    item:function(obj,page){

          /* [D] 2017.1.13 화살표 제어 */ 
          var liw=0;
          var lastindex = $('.'+obj+' .swiper-slide').length -1;
          var ssize = $('.'+obj).width();
          var lastli = $('.'+obj+' .swiper-slide').eq(lastindex).outerWidth(true);
          var firstli = $('.'+obj+' .swiper-slide').eq(0).outerWidth(true)/3;
          
          for(var i = 0;i <= lastindex;i++){
             liw = liw + $('.'+obj+' .swiper-slide').eq(i).outerWidth(true);
          }

          var last_size = -(liw - ssize - 10)

          if(ssize > liw){
            $('.'+obj+' .arrow').hide();
            $('.'+obj+' .arrows').hide();
          }


        var swiper = new Swiper('.'+obj, {
            pagination: '.'+page,
            paginationClickable: true,
            slidesPerView: 'auto',
            freeMode: true,
			observer: true,
			observeParents: true,
           /* [D] 2017.1.13 화살표 제어 */ 
           onInit:function(swiper){
            var tleft = swiper.translate;

              if(tleft <= last_size){
                $('.'+obj+' .arrow').hide();
              }else if(-firstli < tleft){
                $('.'+obj+' .arrows').hide();
              }else{
                $('.'+obj+' .arrow').show();
                $('.'+obj+' .arrows').show();
              }
           },
           onSetTranslate:function(swiper){
              var tleft = swiper.translate;

              if(tleft <= last_size){
                $('.'+obj+' .arrow').hide();
              }else if(-firstli < tleft){
                $('.'+obj+' .arrows').hide();
              }else{
                $('.'+obj+' .arrow').show();
                $('.'+obj+' .arrows').show();
              }
               
            }, 
            onSlideChangeStart : function(swiper) {
                var tleft = swiper.translate;
                 if(tleft <= last_size){
                    $('.'+obj+' .arrow').hide();
                  }else if(-firstli < tleft){
                    $('.'+obj+' .arrows').hide();
                  }else{
                    $('.'+obj+' .arrow').show();
                    $('.'+obj+' .arrows').show();
                  }

            },    
            onSlideChangeEnd : function(swiper) {
                var tleft = swiper.translate;
                  if(tleft <= last_size){
                    $('.'+obj+' .arrow').hide();
                  }else if(-firstli < tleft){
                    $('.'+obj+' .arrows').hide();
                  }else{
                    $('.'+obj+' .arrow').show();
                    $('.'+obj+' .arrows').show();
                  }

            }
            /* [D] 2017.1.13 화살표 제어 */ 
        });

        if($('.'+obj).hasClass('swiper-cate')){
            var $idx = $('.'+obj+' .swiper-slide.on').index(); 
            swiper.slideTo($idx, 0, true);
        }

    }
}
jQuery('.swiper-cate').length && swiperCate.item('swiper-cate','swiper-cate-pagination');
jQuery('.swiper-link').length && swiperCate.item('swiper-link','swiper-cate-pagination');
jQuery('.swiper-brand').length && swiperCate.item('swiper-brand','swiper-cate-pagination');
jQuery('.swiper-links1').length && swiperCate.item('swiper-links1','swiper-cate-pagination');
jQuery('.swiper-links2').length && swiperCate.item('swiper-links2','swiper-cate-pagination');


/* 조건검색 */
var sideFun = {
    init:function(){
        
        this.$switch = $('.btn_filter');
        this.$sideWrap = $('.layer_filter');
        this.$result = $('.related_word');
        this.$inner = this.$sideWrap.find('.layer_area')
        this.$dim = this.$sideWrap.find(".deem");
        this.$close = this.$sideWrap.find(".btn_close");
        this.$init = this.$sideWrap.find(".btn_init");
        this.$apply = this.$sideWrap.find(".btn_apply");
        this.$reset = this.$sideWrap.find('.btn_reset_wrap');
        this.$tabItem = $('.cate_tab_filter li');
        this.$tabCon = $('.cate_tab_filter_con')
        this.$wrap = $('.wrap').css('overflow', 'hidden');
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(100%, 0, 0)'});
        this.wh = $(window).height();

        this.addEvent();
    },
    
    addEvent: function(){
        var _this = this;
        
        this.$switch.on('click', function(e){ 
          var $this = jQuery(this);
          _this.$sideWrap.show();
          _this.opened? _this.close() : _this.open(); 
          e.preventDefault();
        });

        this.$tabItem.on('click', function(){
          _this.viewTab(this) 
        });

        this.$dim.on('click', function(){
            _this.close();
        });

        this.$close.on('click', function(){
            _this.close();
        });

        $(window).on('resize', function(){ 
            _this.opened && _this.open(); 
        });

        this.$init.on('click', function(){
            _this.$sideWrap.find('input[type="checkbox"]').prop('checked',false);
            _this.$sideWrap.find('input[type="text"]').val('');
            _this.$sideWrap.find('input[type="tel"]').val('');
            $('.category_list li').removeClass('active');
        });

        this.$apply.on('click',function(){
            _this.close();
            _this.$result.show();
        });

        this.$tabCon.find('.category_list li input').on('change', function(){
            var $this = jQuery(this);

            if($this.is(':checked')){
                $this.parent().addClass('active');
            }else{
                $this.parent().removeClass('active');
            }
            

        });
    },    
    
    viewTab: function(target){
        var idx = $(target).index();    
        this.$tabItem.removeClass('active').eq(idx).addClass('active');
        this.$tabCon.hide().eq(idx).show();
    },
    
    open: function(){
        this.opened = true;
        this.bodyFreezing();
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(0, 0, 0)'});
        this.$dim.fadeIn('fast');
        this.$reset.fadeIn(500);
        jQuery('.swiper-filter').length && swiperCate.item('swiper-filter','swiper-cate-pagination');
        jQuery('.swiper-filter-cate').length && swiperCate.item('swiper-filter-cate','swiper-cate-pagination');/* [D] 2016.12.28 추가 */
        if(checkV4App("iOS") || checkVersionApp("Android",470,"MOB")) {
        	AKWebInterface.web2app('toggleTabbar', 'N', '');
        }
    },
    
    close: function(){
        this.opened = false;
        this.bodyUnfreezing();
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(100%, 0, 0)'});
        this.$dim.fadeOut('fast');
        this.$reset.hide();
        if(checkV4App("iOS") || checkVersionApp("Android",470,"MOB")) {
        	AKWebInterface.web2app('toggleTabbar', 'Y', '');
        }
    },
    
    bodyFreezing: function(){
        this.$wrap.css({'height': this.wh + 'px'});
    }, 
    
    bodyUnfreezing: function(){
        this.$wrap.css({'height': 'auto'});
    }
}
$('.layer_filter').length && sideFun.init();

/* 검색 카테고리 on off */
var searchCateOnOff = {
    init:function(obj){
        this.$wrap = $('.'+obj);
        this.$btn = this.$wrap.find('dt button');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.parent().hasClass('active')){
                $this.parent().addClass('active');
                $this.parent().next().show();
            }else if($this.parent().hasClass('active')){
                $this.parent().removeClass('active');
                $this.parent().next().hide();
            }
        });

    }    
}
jQuery('.category_list').length && searchCateOnOff.init('category_list');
jQuery('.category_list3').length && searchCateOnOff.init('category_list3');

/* 상품 슬라이드 */
var prodSlide = {
    
    oneitem:function(obj){

        this.page_text = $('.paging');
        var $current;
        var _this = this;

        var slider = $('.'+obj).bxSlider({  
            infiniteLoop:false,
            controls:false,
            pager:false,
            onSlideAfter: function(){
                $current = _slider.getCurrentSlide();
                _this.page_text.find('i').text($current+1);
            },
            onSliderLoad: function(){
                $current = parseInt($('.bx-controls .bx-pager-item .active').attr('data-slide-index'));
                _this.page_text.find('span').text($current+1);
            }
        });

        var _slider = slider;
        var $conunt = slider.getSlideCount();
        this.page_text.find('em').text($conunt);
    }

}
jQuery('.bx_search').length && prodSlide.oneitem('bx_search');

/* 라이크잇 탭 */
var likeitCateTab = {
    init:function(obj){
        this.$wrap = $('.'+obj);
        this.$btn = this.$wrap.find('h3 span button');
        this.$tg = this.$wrap.find('.like_list');
        this.act(obj);
    },
    act:function(obj){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();

                _this.$btn.removeClass('on')
                $this.addClass('on');
                _this.$tg.hide();
                _this.$tg.eq($index).show();
        });

    }    
}
jQuery('.cate_likeit_wrap').length && likeitCateTab.init('cate_likeit_wrap');

/* 브랜드 검색 한영 토글 */
var brandSearchTg = {
    init:function(obj){
        this.$wrap = $('.'+obj);
        this.$btn = this.$wrap.find('.word_wrap .btn');
        this.$tg = this.$wrap.find('.word_wrap');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);

                _this.$tg.parent().css({'opacity':'1','z-index':100});
                $this.parent().parent().css({'opacity':'0','z-index':99});

        });

    }    
}
jQuery('.brand_tg_wrap').length && brandSearchTg.init('brand_tg_wrap');

/* 메뉴 슬라이드 */
var brandSer = {
    
    item:function(obj,page){

        /* [D] 2017.1.13 화살표 제어 */ 
          var liw=0;
          var lastindex = $('.'+obj+' .swiper-slide').length -1;
          var ssize = $('.'+obj).width();
          var lastli = $('.'+obj+' .swiper-slide').eq(lastindex).outerWidth(true);
          var firstli = $('.'+obj+' .swiper-slide').eq(0).outerWidth(true)/3;
          
          for(var i = 0;i <= lastindex;i++){
             liw = liw + $('.'+obj+' .swiper-slide').eq(i).outerWidth(true);
          }

          var last_size = -(liw - ssize - 10)

          if(ssize > liw){
            $('.'+obj+' .arrow').hide();
            $('.'+obj+' .arrows').hide();
          }

        var swiper = new Swiper('.'+obj, {
            pagination: '.'+page,
            paginationClickable: true,
            slidesPerView: 'auto',
            freeMode: true,
            /* [D] 2017.1.13 화살표 제어 */ 
           onInit:function(swiper){
            var tleft = swiper.translate;

              if(tleft <= last_size){
                $('.'+obj+' .arrow').hide();
              }else if(-firstli < tleft){
                $('.'+obj+' .arrows').hide();
              }else{
                $('.'+obj+' .arrow').show();
                $('.'+obj+' .arrows').show();
              }
           },
           onSetTranslate:function(swiper){
              var tleft = swiper.translate;

              if(tleft <= last_size){
                $('.'+obj+' .arrow').hide();
              }else if(-firstli < tleft){
                $('.'+obj+' .arrows').hide();
              }else{
                $('.'+obj+' .arrow').show();
                $('.'+obj+' .arrows').show();
              }
               
            }, 
            onSlideChangeStart : function(swiper) {
                var tleft = swiper.translate;
                 if(tleft <= last_size){
                    $('.'+obj+' .arrow').hide();
                  }else if(-firstli < tleft){
                    $('.'+obj+' .arrows').hide();
                  }else{
                    $('.'+obj+' .arrow').show();
                    $('.'+obj+' .arrows').show();
                  }

            },    
            onSlideChangeEnd : function(swiper) {
                var tleft = swiper.translate;
                  if(tleft <= last_size){
                    $('.'+obj+' .arrow').hide();
                  }else if(-firstli < tleft){
                    $('.'+obj+' .arrows').hide();
                  }else{
                    $('.'+obj+' .arrow').show();
                    $('.'+obj+' .arrows').show();
                  }

            }
            /* [D] 2017.1.13 화살표 제어 */  
        });

        var $idx = $('.'+obj+' .swiper-slide.on').index(); 

        swiper.slideTo($idx, 0, true);

    }
}
jQuery('.swiper-barnd-ser1').length && brandSer.item('swiper-barnd-ser1','swiper-brand-pagination1');
jQuery('.swiper-barnd-ser2').length && brandSer.item('swiper-barnd-ser2','swiper-brand-pagination2');

/* tab */
var onecateTab = {
    init:function(){
        this.$btn = $('.line_tap li a');
        this.act();
    },
    act:function(){
        var _this = this;
        this.$btn.on('click',function(e){
            var $this = jQuery(this);
            var $index = $this.parent().index();
            _this.$btn.parent().removeClass('active');
            $this.parent().addClass('active');
            if($index === 2){
                $('.sub_tit').show();
            }else{
                $('.sub_tit').hide();
            }
            e.preventDefault();
        });
    }
}
jQuery('.line_tap').length && onecateTab.init();

/* category on off */
var cateNav = {
    init:function(){
        this.$btn = $('.c_nav');
        this.$tg = $('.cate_bot');
        this.act();
    },
    act:function(){
        var _this = this;
        this.$btn.on('click',function(e){
            var $this = jQuery(this);
            var $index = $this.index();
            _this.$btn.removeClass('active');
            $this.addClass('active');

            if($this.parent().index() === 1){
                _this.$tg.hide();
                _this.$tg.eq($index).show();
            }else if($this.parent().index() === 3){
                _this.$tg.hide();
                _this.$tg.eq($index+4).show();
            }

            if($this.parent().index() === 6){
                _this.$tg.hide();
                _this.$tg.eq($index).show();
            }else if($this.parent().index() === 8){
                _this.$tg.hide();
                _this.$tg.eq($index+4).show();
            }else if($this.parent().index() === 10){
                _this.$tg.hide();
                _this.$tg.eq($index+8).show();
            }

            e.preventDefault();
        });
    }
}

jQuery('.c_nav').length && cateNav.init();

/* 메인 슬라이드 */
var swiperSlide = {

    item:function(obj,page){

        var swiper = new Swiper('.'+obj, {
          pagination: '.'+page,
          paginationClickable: true
          
      });
    }
}
jQuery('.swiper-deal').length && swiperSlide.item('swiper-deal','swiper-page');
jQuery('.swiper-mostview').length && swiperSlide.item('swiper-mostview','swiper-page');

/* 랄프로렌 */
var ralphOnOff ={
    init: function(){

        this.$wrap = $('.ralph_header');
        this.act();

    },
    act: function(){
        var _this = this;
        this.$wrap.find('li').on('click',function(){

            var $this = jQuery(this);
            
            if(!$this.hasClass('active')){
                _this.$wrap.find('li').removeClass('active');
                _this.$wrap.find('.sp_navsub').hide();
                $this.addClass('active');
                $this.find('.sp_navsub').show();
                $('.chanel_tit').removeClass('active');
                $('.sbanner2.mb0').hide();
            }else if($this.hasClass('active')){
                $this.removeClass('active');
                _this.$wrap.find('li').removeClass('active');
                _this.$wrap.find('.sp_navsub').hide();
                $('.chanel_tit').removeClass('active');
                $('.sbanner2.mb0').hide();
            }

        });

        $('.sp_catebox').on('click',function(){

            var $this = jQuery(this);
            
            if(!$this.hasClass('active')){
                _this.$wrap.find('.sp_catebox').removeClass('active');
                _this.$wrap.find('.sp_navsubin').hide();
                $this.addClass('active');
                $this.next('.sp_navsubin').show();
            }else if($this.hasClass('active')){
                $this.removeClass('active');
                _this.$wrap.find('.sp_catebox').removeClass('active');
                _this.$wrap.find('.sp_navsubin').hide();
                $this.next('.sp_navsubin').hide();
            }

        });
		
		$('.ralph_btn_cate').on('click',function(){

            var $this = jQuery(this);
            
            if(!$this.hasClass('active')){
                _this.$wrap.find('.ralph_btn_cate').removeClass('active');
                _this.$wrap.find('.ralph_nav').hide();
                $this.addClass('active');
                $this.next('.ralph_nav').show();
				_this.$wrap.find('li').removeClass('active')
				_this.$wrap.find('.sp_navsub').hide();
            }else if($this.hasClass('active')){
                $this.removeClass('active');
                _this.$wrap.find('.ralph_btn_cate').removeClass('active');
                _this.$wrap.find('.ralph_nav').hide();
                $this.next('.ralph_nav').hide();
				_this.$wrap.find('li').removeClass('active')
				_this.$wrap.find('.sp_navsub').hide();
            }

        });

    }
}
jQuery('.ralph_header').length && ralphOnOff.init();


var ralphOnOff2 ={
    init: function(){

        this.$wrap = $('.ralph_faq_list');
        this.act();

    },
    act: function(){
        var _this = this;
        this.$wrap.find('li').on('click',function(){

            var $this = jQuery(this);
            
            if(!$this.hasClass('active')){
                _this.$wrap.find('li').removeClass('active');
                $this.addClass('active');
            }else if($this.hasClass('active')){
                $this.removeClass('active');
                _this.$wrap.find('li').removeClass('active');
            }

        });
		
		$('ul.ralph_faq_tab_tit').each(function(){
			
					var $active, $content, $links = $(this).find('a');
					$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
					$active.addClass('active');
					$content = $($active[0].hash);
					$links.not($active).each(function () {
						$(this.hash).hide();
					});

					$(this).on('click', 'a', function(e){
						$active.removeClass('active');
						$content.hide();
						$active = $(this);
						$content = $(this.hash);
						$active.addClass('active');
						$content.show();
						e.preventDefault();
					});
				});

    }
}
jQuery('.ralph_faq_list').length && ralphOnOff2.init();


