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

            }
        });
    }

}
jQuery('.cate_slide').length && prodSlide.oneitem('cate_slide');

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
            if($this.hasClass('cate_big')){
                $hs = 0;
                _this.$wrap.find('.p_head3 .title').text($(".cate_big").text());
                $('.cate_type').hide();
                $('.depth_cate_big').show();
            }else if($this.hasClass('cate_mid')){
                $hs = 0;
                _this.$wrap.find('.p_head3 .title').text($(".cate_mid").text())
                $('.cate_type').hide();
                $('.depth_type2').show();
            }else if($this.hasClass('cate_sam')){
                $hs = 0;
                _this.$wrap.find('.p_head3 .title').text($(".cate_sam").text())
                $('.cate_type').hide();
                $('.depth_cate_sam').show();
            }else if($this.hasClass('cate_sam2')){
                $hs = 0;
                _this.$wrap.find('.p_head3 .title').text($(".cate_sam2").text())
                $('.cate_type').hide();
                $('.depth_cate_sam2').show();
            }else if($this.hasClass('cate_brand')){
                $hs = $this.offset().top;
                _this.$wrap.find('.p_head3 .title').text($(".cate_big").text()+' 추천브랜드')
                $('.cate_type').hide();
                $('.cate_brand_pop').show();
            }else if($this.hasClass('special_cate')){
         	   $hs = 0;
               _this.$wrap.find('.p_head3 .title').text($(".special_cate").text());
               $('.cate_type').hide();
               $('.depth_type1').show();
	        }else if($this.hasClass('special_mid')){
	        	$hs = 0;
	        	_this.$wrap.find('.p_head3 .title').text('카테고리 선택');
	        	$('.cate_type').hide();
	        	$('#cate2').show();
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
//jQuery('.swiper-brand').length && swiperCate.item('swiper-brand','swiper-cate-pagination');


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
        this.$reset = $('.btn_reset_wrap');
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
    },
    
    close: function(){
        this.opened = false;
        this.bodyUnfreezing();
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(100%, 0, 0)'});
        this.$dim.fadeOut('fast');
        this.$reset.hide();
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
            
            if($(".line_tap .recomTab").hasClass("active")){
                $('.sub_tit').show();
                $('.cate_img_type').hide();
                $('.recomProduct').show();
                tabIndex = 2;
            }
            else if($(".line_tap .newTab").hasClass("active")){
                $('.sub_tit').hide();
                $('.cate_img_type').hide();
                $('.newProduct').show();
                tabIndex = 1;
            }
            else if($(".line_tap .bestTab").hasClass("active")){
                $('.sub_tit').hide();
                $('.cate_img_type').hide();
                $('.bestProduct').show();
                tabIndex = 0;
            }
            pagingFlag = true;
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

            console.log($this.parent().index());
            
            /*if($this.parent().index() === 1){
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
            }*/
            
            if($this.parent().index() === 0){
                _this.$tg.hide();
                _this.$tg.eq($index).show();
            }else if($this.parent().index() === 2){
                _this.$tg.hide();
                _this.$tg.eq($index+4).show();
            }else if($this.parent().index() === 4){
                _this.$tg.hide();
                _this.$tg.eq($index+8).show();
            }

            e.preventDefault();
        });
    }
}

jQuery('.c_nav').length && cateNav.init();

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

/* 2018-04-11, fix */

/* 혜택 슬라이드 */
var swiperExhibit = {
    
    item:function(obj,page){

        if($('.'+obj+' .swiper-slide.active').length){
            var $dis = $('.'+obj+' .swiper-slide.active').index(); 
          }else{
            $dis = 0;
          }

        setTimeout(function(){

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
            paginationClickable: false,
            slidesPerView: 'auto',
            freeMode: true,
            initialSlide:$dis,
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

            },
            /* [D] 2017.1.13 화살표 제어 */  

            onClick : function(swiper) {
              var $idx = swiper.clickedIndex; 
              if($idx === undefined){
                //console.log($idx)
              }else{
                swiper.slideTo($idx, 100, true);
              }
              
            }
          });

        },10);
    }
}
jQuery('.swiper-event1').length && swiperExhibit.item('swiper-event1','swiper-exhibit-pagination');

/* 슬라이드 버튼 */
var butAlert ={
    init: function(){

        this.$btn = $('.sorting_btn_new span');
        this.act();

    },
    act: function(){
        var _this = this;
        this.$btn.on('click',function(){

            var $this = jQuery(this);
                _this.$btn.removeClass('on');
                $('.but_alert1').hide();
                $this.addClass('on');
                if($this.index()===0){
                  $('.but_alert1').show();
                }
                if($this.index()===1){
                  $('.but_alert2').show();
                }
        });
    }
}
butAlert.init();

/* tab_ak 하단 탭 */
/* 2018-04-27 탭 수정 */
var tab_ak = {

  init: function(){

        this.$btn = $('.tab_ak li');
        this.$tg = $('.tab_ak_con li');
        this.act();

        /* [D] 2017.01.04 슬라이드 오류 수정 */
        setTimeout(function(){
          $('.last_tab_ak_con').css({'height':0,'opacity':0});
        },50);
        

    },
    act: function(){
        var _this = this;
        this.$btn.on('click',function(e){

            var $this = jQuery(this);
            var $index = $this.index();

            /* [D] 2017.01.04 슬라이드 오류 추가 */
            $('.last_tab_ak_con').css({'height':'auto','opacity':1});
            _this.$btn.removeClass('active');
            $this.addClass('active');       

            
            
            e.preventDefault();

            /* 2017.0l1.l16 이벤트 탭 동작 추가 */
            _this.$tg.eq($index).find('.swiper-event1 .swiper-wrapper').css({'transform':'translate3d(0,0,0)'});
            _this.$tg.eq($index).find('.swiper-event1 .swiper-wrapper li span').removeClass('on')
            _this.$tg.eq($index).find('.swiper-event1 .swiper-wrapper li:first span').addClass('on')
            _this.$tg.eq($index).find('.arrows').hide();
            /* 2017.0l1.l16 이벤트 탭 동작 추가 */

            if($index === 0){
                //$('.layer_akgroup_wrap li').show();
                $('.tab_ak_con li').show();

            }else{
                console.log($index);
                //$('.layer_akgroup_wrap li').hide();
                //$('.layer_akgroup_wrap .group' + $index).show();
                _this.$tg.hide();
                $('.tab_ak_con .group'+$index).show();
            }
            
        });
    }
}
$('.tab_ak').length && tab_ak.init();



/* 높이값 체크 */
var checkHight = {
    init:function(){
        var h = $('.swiper-akgroup .swiper-slide-active .height_check').outerHeight();
        
        if($('.layer_akgroup_wrap').hasClass('active')){
            // console.log(1);
            $('.swiper-akgroup').css('height',h);
        }else{
            // console.log(2);
            $('.swiper-akgroup').removeAttr('style');
        }
    }
}

/* 화살표 레이어팝업 슬라이드 */
var swiperSlide2 = {

    item:function(obj, num){
        var swiper = new Swiper('.'+obj, {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            onInit:function(){
                setTimeout(function(){
                    checkHight.init();
                    swiper.slideTo(num, 0, true);
                },10);
            },
            onSetTranslate:function(){
                setTimeout(function(){
                    checkHight.init();
                },10);
            },
            onClick : function() {
                setTimeout(function(){
                    checkHight.init();
                },10);             
            }
       });
    }
}

/* 혜택 layer */
var layerFull = {
    
    addEvent: function(obj){
        var _this = this;
        
        $(document).on('click','.'+obj,function(e){
            var $this = jQuery(this);
            var $idx = $this.index();
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);

            setTimeout(function(){
                swiperSlide2.item('swiper-akgroup', $idx);
            },20);

            if(type === 'thin'){

                var sh = $(window).outerHeight() - 80;
                var st = $(window).scrollTop();
                
                $('.'+$layer).show().addClass('active');

                var ch = $('.'+$layer).find('.popup_wrap .swiper-slide').eq($idx).find('.height_check').outerHeight();
                 $('.'+$layer).find('.popup_wrap').css({'margin-top':'50px','position':'absolute','top':st});
                // if(sh > ch){
                //     var ps = (sh - ch);
                //     $('.'+$layer).find('.popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});

                // }else if(sh <= ch){
                //     $('.'+$layer).find('.popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
                // }
            }
            e.preventDefault();
        });

        $(document).on('click','.btn_pop_close',function(e){
            var $this = jQuery(this);
            
            $('.swiper-akgroup').removeAttr('style');
            $('.popup_wrap').removeAttr('style');
            $('.swiper-wrapper').removeAttr('style');
            $this.closest('.layer_popup').hide().removeClass('active');
            
            if($this.closest('.layer_popup').hasClass('layer_full')){
                
                var h1 = $this.closest('.layer_popup').attr('data-height');
                console.log(h1);
                $('body').scrollTop(h1);
            }
            e.preventDefault();
        });

        $(window).on('orientationchange',function(){

            var $this = jQuery(this);
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);


            if($('.'+$layer).hasClass('active')){

                setTimeout(function(){
                   var sh = $(window).outerHeight() - 80;
                    var st = $(window).scrollTop();
                    
                    $('.'+$layer).show().addClass('active');
                    var ch = $('.'+$layer).find('.popup_wrap').outerHeight();

                    if(sh > ch){
                        var ps = (sh - ch);
                        $('.'+$layer).find('.popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});

                    }else if(sh <= ch){
                        $('.'+$layer).find('.popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
                    }
                 },500);

            }
        });
    }
}
$('.layer_akgroup_wrap').length && layerFull.addEvent('btn_thin_akgroup');

/* //2018-04-11, fix */

