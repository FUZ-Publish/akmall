/* ak on 스크롤시 상단 gnb fixed */
var gnbScorll = {
  init:function(){
    var h = $('.pos').offset().top;
    $(window).scroll(function(){
        var h = $('.pos').offset().top;
        if($(window).scrollTop() > h){
          $('.header.type_tp').addClass('fixed');
        }else{
          $('.header.type_tp').removeClass('fixed');
        }
      });
    }
}
jQuery('.header.type_tp').length && gnbScorll.init();

/* 기획전 전체보기 */
var btnPlan = {
    init:function(){
        this.$wrap = $('.btn_more_plan');
        this.$btn = this.$wrap.find('.btn_more');
        this.$close = this.$wrap.find('.pop_close');
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
            $this.closest('.popup').hide()
        });
    }    
}
jQuery('.btn_more_plan').length && btnPlan.init();

/* 매장정보 탭 */
var reviewsTab = {
    init:function(){
        this.$btn = $('.tap_div2 li');
        this.$tg = $('.shop_con');
        this.act();
    },
    act:function(){
        var _this = this;
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            _this.$btn.removeClass('active');
            $this.addClass('active');
            _this.$tg.hide();
            _this.$tg.eq($index).show();
            checkHight.init();
        });
    }
}
$('.notice_qna').length && reviewsTab.init();

/* 백화점 매장정보 */
var noticeOnoff = {
    init:function(obj){
        this.$wrap = $('.'+obj);
        this.$btn = this.$wrap.find('dt');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.parent().hasClass('active')){
              $this.parent().addClass('active');
              checkHight.init();
            }else{
              $this.parent().removeClass('active');
              checkHight.init();
            }
        });
        
    }    
}
jQuery('.notice_list').length && noticeOnoff.init('notice_list');

//개발용
/* Q&A 매장정보 */
var qnaOnoff = {
    init:function(obj){
        this.$wrap = $('.'+obj);
        this.$btn = this.$wrap.find('dt');
        this.act();
        
    },
    act:function(){

    	var _this = this;
        $(document).on('click','.qna_list dt',function(e){
            var $this = jQuery(this);
            if(!$this.parent().hasClass('active')){
              $this.parent().addClass('active');
              checkHight.init();
            }else{
              $this.parent().removeClass('active');
              checkHight.init();
            }
        });
        
    }    
}
jQuery('.qna_list').length && qnaOnoff.init('qna_list');
//개발용

/* 높이값 체크 */
var checkHight = {
    init:function(){
        var h = $('.department_wrap.swiper-slide-active .height_check').outerHeight();
        $('.swiper-main').css('height',h+45)
    }
}

/* 메인 슬라이드 */
var swiperMain = {
  init:function(){

        setTimeout(function(){
            var w = $('.main_wrap.swiper-slide').width();
                var len = $('.main_wrap.swiper-slide').length;
                $('.sw-width').css('width',w*len)
        },300);
        
        
        $(window).on('resize',function(){
            setTimeout(function(){
                var w = $('.main_wrap.swiper-slide').width();
                var len = $('.main_wrap.swiper-slide').length;
                $('.sw-width').css('width',w*len)
            },10);
        });

        this.item();
        this.topPage();
    },
    
    item:function(){

      var _this = this;
      var height = $('.main_wrap.swiper-slide-active .height_check').height();
      var conswiper = new Swiper('.swiper-main', {
          paginationClickable: true,
          calculateHeight : false,
          onSlideChangeEnd : function(swiper) {
            _this.topPage();
            setTimeout(function(){
                height = $('.main_wrap.swiper-slide-active .height_check').height();
                $('.container').css('height', height+45);
                
            },300); 
          
          },
          onSlideChangeStart : function(swiper) {
            
            setTimeout(function(){
              height = $('.main_wrap.swiper-slide-active .height_check').height();
              $('.container').css('height', height+45);
            },300);

            $('.department_menu li').removeClass('active');
            $('.department_menu li').eq(swiper.activeIndex).addClass('active');

            $('.department_menu_new li').removeClass('active');
            $('.department_menu_new li').eq(swiper.activeIndex).addClass('active');
            
          }
      });

      $('.department_menu li').on('click',function(){

            var $this = jQuery(this);
            var $index = $this.index();

            conswiper.slideTo($index);
      })

      $('.department_menu_new li').on('click',function(){

            var $this = jQuery(this);
            var $index = $this.index();
            //개발용
            $("#tabId").val($index);

            conswiper.slideTo($index);
      })
    
    },
    topPage:function(){
      window.scrollTo(0, 0);
    }
}
jQuery('.main_wrap').length && swiperMain.init();

/* write modify */
/* [D] 2016.12.16 수정 */
var writeModify = {
    init:function(){
        this.$wrap = $('.reply_list');
        this.$btn = this.$wrap.find('.btn_modify');
        this.$close = this.$wrap.find('.btn_cancle');
        this.$save = this.$wrap.find('.btn_save');
        this.act();
    },
    act:function(){

        var _this = this;
        //개발용
        $(document).on('click','.reply_list .btn_modify',function(e){
            var $this = jQuery(this);
            $this.closest('.reply_list').hide();
            $this.closest('.reply_list').next().show();
        });
        //개발용
        $(document).on('click','.reply_list .btn_cancle',function(e){
            var $this = jQuery(this);
            $this.closest('.reply_list').prev().show();
            $this.closest('.reply_list').hide()
        });
        //개발용
        $(document).on('click','.reply_list .btn_save',function(e){
            var $this = jQuery(this);
            $this.closest('.reply_list').prev().show();
            $this.closest('.reply_list').hide()
        });
    }    
}
jQuery('.reply_list').length && writeModify.init();
/* [D] 2016.12.16 수정 */

/* 리스트 열고닫기 */
var reviewOnoff = {
    init:function(){
        this.$btn = $('.reply_list .tit');
        this.act();
    },
    act:function(){

        var _this = this;
       
        //개발용
        $(document).on('click','.reply_list .tit',function(e){
//        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.closest('.reply_list').hasClass('on')){
                $this.closest('.reply_list').addClass('on');
            }else if($this.closest('.reply_list').hasClass('on')){
                $this.closest('.reply_list').removeClass('on');
            }
        });

    }    
}
jQuery('.reply_list').length && reviewOnoff.init();

/* 상품평 열고닫기 */
var reviewOnoff = {
    init:function(){
        this.$btn = $('.premium_list dt');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(e){
            var $this = jQuery(this);
            if(!$this.hasClass('on')){
                $this.addClass('on');
                $this.next().show();
                checkHight.init();
            }else if($this.hasClass('on')){
                $this.removeClass('on');
                $this.next().hide();
                checkHight.init();
            }
            e.preventDefault();
        });

    }    
}
jQuery('.premium_list').length && reviewOnoff.init();

/* layer */
var layerFull = {
    
    addEvent: function(obj){
        var _this = this;
        
        $(document).on('click','.'+obj,function(e){
            var $this = jQuery(this);
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);

                if(type === 'full'){
                    var h1 = $(window).scrollTop();
                    $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
                    $('.'+$layer).attr('data-height',h1)
                    setTimeout(function(){
                        jQuery('.detail_wrap').length && swiperPw.init();
                    },20);

                }else if(type === 'thin'){

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
                    
                }
                e.preventDefault();

        });

        $(document).on('change','input.'+obj,function(){
            var $this = jQuery(this);
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);

            if($this.is(':checked')){
            
                if(type === 'full'){
                    var h1 = $(window).scrollTop();
                    $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
                    $('.'+$layer).attr('data-height',h1)
                }else if(type === 'thin'){

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

                }

            }

        });

        $(document).on('click','.btn_pop_close',function(e){
            var $this = jQuery(this);
            $this.closest('.layer_popup').hide().removeClass('active');
            
            if($this.closest('.layer_popup').hasClass('layer_full')){
                
                var h1 = $this.closest('.layer_popup').attr('data-height');
                $('body').scrollTop(h1);
            }
            e.preventDefault();
        });

    }
}
$('.layer_stamp_wrap').length && layerFull.addEvent('btn_thin_stamp');
$('.layer_normal_wrap').length && layerFull.addEvent('btn_full_normal');
$('.layer_sms_wrap').length && layerFull.addEvent('btn_thin_sms');

/* 인증 체크 */
var agreeCheck = {
    init:function(){
        this.$tg = $('.tap_credit_radio input');
        this.$btn = $('.tap_credit li');
        this.act();     
    },
    act:function(){
        var _this = this;

        this.$btn.on('click',function(e){
            var $this = jQuery(this);
            var $index = $this.index();

            if(!$this.hasClass('active')){
                _this.$btn.removeClass('active');
                $this.addClass('active');
                _this.$tg.eq($index).prop('checked',true);
            }
            e.preventDefault();
        });
    }
}
jQuery('.tap_credit_radio').length && agreeCheck.init();

/* 당첨자 동작 */
var stampMov = {
    init:function(){
        this.$btn = $('.btn_save');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){

            var $this = jQuery(this);
            
            $this.closest('.stemp_box').hide().next().show(0,function(){
                if(true){
                    var $this = jQuery(this);
                    $this.hide().next().show();
                }
            });

        });

    }    
}
jQuery('.btn_save').length && stampMov.init();

/* sns layer */
var snsLayer = {
    init:function(obj1,obj2,obj3){
        this.$btn = $('.'+obj1);
        this.$tg = $('.'+obj2);
        this.$close = this.$tg.find('.'+obj3);
        this.act(obj2);
    },
    act:function(obj){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.hasClass('active')){
                $this.addClass('active');
                _this.$tg.show();
            }else if($this.hasClass('active')){
                $this.removeClass('active');
                _this.$tg.hide();
            }
        });

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            $this.closest('.'+obj).hide();
            _this.$btn.removeClass('active');
        });
        
    }    
}
jQuery('.layer_share_wrap').length && snsLayer.init('btn_layer_share','layer_share_wrap','btn_layer_share_close');

/* 슬라이드 */
var swiperSlide = {

    item:function(obj,page){

        var swiper = new Swiper('.'+obj, {
          pagination: '.'+page,
          loop:true,
          paginationClickable: true
          
      });
    }
}
jQuery('.swiper-deal').length && swiperSlide.item('swiper-deal','swiper-page');
//jQuery('.swiper-mostview').length && swiperSlide.item('swiper-mostview','swiper-page');

/* [D] 2017.02.06 샤넬 동작 수정 */ 
var chanelOnOff ={
    init: function(){

        this.$wrap = $('.openclose_list2');
        this.act();

    },
    act: function(){
        var _this = this;
        this.$wrap.find('dt').on('click',function(){

            var $this = jQuery(this);
            
            if(!$this.hasClass('active')){
                _this.$wrap.find('dt').removeClass('active');
                _this.$wrap.find('dd').hide();
                $this.addClass('active');
                $this.next().show();
                $('.chanel_tit').removeClass('active');
                $('.sbanner2.mb0').hide();
                var $tp = $this.offset().top;
                $(document).scrollTop($tp);
            }else if($this.hasClass('active')){
                $this.removeClass('active');
                _this.$wrap.find('dt').removeClass('active');
                _this.$wrap.find('dd').hide();
                $('.chanel_tit').removeClass('active');
                $('.sbanner2.mb0').hide();
            }

        });

        $('.chanel_tit').on('click',function(){

            var $this = jQuery(this);
            
            if(!$this.hasClass('active')){
                _this.$wrap.find('dt').removeClass('active');
                _this.$wrap.find('dd').hide();
                $this.addClass('active');
                $this.next('.sbanner2.mb0').show();
                var $tp = $this.offset().top;
                $(document).scrollTop($tp);
            }else if($this.hasClass('active')){
                $this.removeClass('active');
                _this.$wrap.find('dt').removeClass('active');
                _this.$wrap.find('dd').hide();
                $this.next('.sbanner2.mb0').hide();
            }

        });

    }
}
jQuery('.openclose_list2').length && chanelOnOff.init();
/* 장바구니 찜 버튼 */
var wishToggle = {
    init: function(){

        this.$btn = $('header .shopping_wish');
        this.$tg = $('.default_wish_prod');
        this.$close = this.$tg.find('.pop_close');
        this.act();

    },
    act:function(){
        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            $this.addClass('on');
            _this.$tg.show()
            _this.$tg.find('.popup_wrap').css('top', $(window).scrollTop() + 15 + "px");
            
            var $hss = screen.height - 80;
            _this.$tg.find('.popup_wrap .inner').css('max-height',$hss).css('overflow-y','auto');
            _this.$tg.addClass('active');
            if($('.default_wish_prod.active').length){

                $(window).scroll(function(){
                    var top = $(window).scrollTop() + 15;
                    $('.default_wish_prod.active').find('.popup_wrap').delay(500).css('top',top);
                });
            }
        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.default_wish_prod').hide().removeClass('active');
        });

        $(window).on('resize',function(){
            if($('.layer_popup.active').length){
                var $hss = screen.height - 80;
                $('.layer_popup.active .popup_wrap .inner').css('max-height',$hss);
            }
        });

    }
}
$('.shopping_wish').length && wishToggle.init();

var swiperadd;
/* 카테고리 슬라이드 */
var swiperCate = {
    
    item:function(obj,page){

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

        this.swiper = new Swiper('.'+obj, {
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

    }
}

//개발용
/* 카테고리 슬라이드2 */
var swiperCate2 = {
    
    item:function(obj,page){

        /* [D] 2017.1.13 화살표 제어 */ 
        function evs(){
          
          var liw=0;
          var lastindex = $('.'+obj+' .swiper-slide').length -1;
          var ssize = $('.'+obj).width();
          
          for(var i = 0;i <= lastindex;i++){
             liw = liw + $('.'+obj+' .swiper-slide').eq(i).outerWidth(true);
          }

          var last_size = -(liw - ssize - 10)

          if(ssize > liw){
            $('.'+obj+' .arrow').hide();
            $('.'+obj+' .arrows').hide();
          }

          return last_size;
        }

        evs();


         this.swiper = new Swiper('.'+obj, {
            pagination: '.'+page,
            paginationClickable: true,
            slidesPerView: 'auto',
            freeMode: true,
           /* [D] 2017.1.13 화살표 제어 */ 
           onSetTranslate:function(swiper){
        	  var firstli = $('.'+obj+' .swiper-slide').eq(0).outerWidth(true)/3;
              var last_sizes = evs(); 
              var tleft = swiper.translate;
              if(tleft <= last_sizes){
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
    }
}
//개발용
//jQuery('.swiper-link').length && swiperCate.item('swiper-link','swiper-cate-pagination');
jQuery('.swiper-filter').length && swiperCate2.item('swiper-filter','swiper-cate-pagination');

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
        this.$inner.show().css({'transition': 'transform 300ms ease','transform': 'translate3d(0, 0, 0)'});
        this.$dim.fadeIn('fast');
        this.$reset.fadeIn(500);
        swiperCate2.swiper.onResize();
    },
    
    close: function(){
        var _this = this;
        this.opened = false;
        this.bodyUnfreezing();
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(100%, 0, 0)'});
        this.$dim.fadeOut('fast',function(){
            _this.$inner.hide();
        });
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

var evTab = {
    init:function(obj1,obj2,obj3){
        this.$btn = $('.'+obj2+' button');
        this.act(obj1,obj2,obj3);
    },
    act:function(obj1,obj2,obj3){
        var _this = this;
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            $this.closest('.'+obj2).find('button').removeClass('on');
            $this.addClass('on');
            //개발용
            goBoardSearch();
            //개발용
        });
    }
}
$('.photo_wrap').length && evTab.init('photo_wrap','ev_tab','photo_list_box');

var dpTab = {
    init:function(){
        this.$btn = $('.line_tap_new li');
        this.$tg = $('.category_con_new');
        this.act();
    },
    act:function(){
        var _this = this;
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();

            _this.$btn.removeClass('active');
            $this.addClass('active')
            _this.$tg.css({'height':'0px','overflow':'hidden'});
            _this.$tg.eq($index).css({'height':'auto','overflow':'auto'});

        });
    }
}
$('.category_con_new').length && dpTab.init();

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

        var swiper = new Swiper('.'+obj, {
            pagination: '.'+page,
            paginationClickable: true,
            slidesPerView: 'auto',
            freeMode: true
        });

        var $idx = $('.'+obj+' .swiper-slide.on').index(); 

        swiper.slideTo($idx, 0, true);

    }
}
jQuery('.swiper-barnd-ser1').length && brandSer.item('swiper-barnd-ser1','swiper-brand-pagination1');
jQuery('.swiper-barnd-ser2').length && brandSer.item('swiper-barnd-ser2','swiper-brand-pagination2');

/* [D]2017.1.19 js 덮어 주세요 */
var moveTest = {
    init:function(){
        this.wrap = $('.move_wrap');
        this.tg = $('.move_target');
        this.tit = this.tg.find('dt strong');
        this.txt = this.tg.find('dt span');
        this.eventScroll();
    },
    eventScroll:function(){

        var _this = this;
        var check_height_old = $(window).scrollTop();

        $(window).scroll(function(){

            var check_height_new = $(window).scrollTop();
            var num = -check_height_new/2;/* 숫자조정으로 움직임 제어 */
            var num2 = -check_height_new/10;

            var top = 88;

            if(check_height_old < check_height_new){
                _this.wrap.css({'background-position': '0 '+num+'px'});
                    check_height_old = check_height_new;
            }else if(check_height_old > check_height_new){
                _this.wrap.css({'background-position': '0 '+num+'px'});
                    check_height_old = check_height_new;
            }

        });
    }
}
jQuery('.move_wrap').length && moveTest.init();
/* [D]2017.1.19 js 덮어 주세요 */

var planCate = {
    init:function(){
        this.tg = $('.category_chioce_wrap');
        this.img = $('.first_tit');
        this.tit = $('.text_arr span');
        this.eventScroll();
    },
    eventScroll:function(){

        var _this = this;
		var check_height = $('.category_chioce_wrap').offset().top;

        var len;
        var $index = [];
        var $top = [];
        

        $(window).scroll(function(){

            if($(window).scrollTop() < check_height){
            	
            	$('.category_chioce_wrap').removeClass('active');
            	$('.first_tit').removeClass('active'); 
            	$('.category_chioce_wrap').find('button').eq(0).text($('.category_chioce_wrap').find('select option:selected').text());
            } else if($(window).scrollTop() > check_height){
            	
            	$('.category_chioce_wrap').addClass('active');
            	$('.first_tit').addClass('active');
                
                var $text_arr = $('.text_arr');
                for(var i= 0; i < $('.text_arr.show').length; i++){
                	
                    if( $(window).scrollTop() > $('.text_arr.show').eq(i).offset().top){
                    	
                    	$('.category_chioce_wrap').find('button').eq(0).text($('.text_arr.show span').eq(i).text());
                    }
                }

            }

            

        });

    }
}
//jQuery('.category_chioce_wrap').length && planCate.init();

/* detail layer */
var layerFull = {
    
    addEvent: function(obj){
        var _this = this;
        
        $(document).on('click','.'+obj,function(e){
            var $this = jQuery(this);
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);

                if(type === 'full'){
                    var h1 = $(window).scrollTop();
                    $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
                    $('.'+$layer).attr('data-height',h1)
                    setTimeout(function(){
                        jQuery('.detail_wrap').length && swiperPw.init();
                    },20);

                }else if(type === 'thin'){

//                	개발용
//                    var sh = $(window).outerHeight() - 80;
//                    var st = $(window).scrollTop();
//                    
//                    $('.'+$layer).show().addClass('active');
//                    var ch = $('.'+$layer).find('.popup_wrap').outerHeight();
//
//                    if(sh > ch){
//                        var ps = (sh - ch);
//                        $('.'+$layer).find('.popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});
//
//                    }else if(sh <= ch){
//                        $('.'+$layer).find('.popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
//                    }
                    
                }
                e.preventDefault();

        });

        $(document).on('change','input.'+obj,function(){
            var $this = jQuery(this);
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);

            if($this.is(':checked')){
            
                if(type === 'full'){
                    var h1 = $(window).scrollTop();
                    $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
                    $('.'+$layer).attr('data-height',h1)
                }else if(type === 'thin'){

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

                }

            }

        });

        $(document).on('click','.btn_pop_close',function(e){
            var $this = jQuery(this);
            $this.closest('.layer_popup').hide().removeClass('active');
            
            if($this.closest('.layer_popup').hasClass('layer_full')){
                
                var h1 = $this.closest('.layer_popup').attr('data-height');
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

$('.layer_review_wrap').length && layerFull.addEvent('btn_thin_review');
$('.layer_premium_wrap').length && layerFull.addEvent('btn_full_premium');

/* 메인 슬라이드 */
var swiperSlide2 = {

    item:function(obj,page){

        var swiper = new Swiper('.'+obj, {
          pagination: '.'+page,
          effect: 'flip',
          loop:true,
          grabCursor: true,
          onTap : function(swiper) {
              swiper.slideNext(300)
          }
         
        });

    }
}

jQuery('.swiper-list1').length && jQuery('.swiper-list1 .swiper-slide').length >1 && swiperSlide2.item('swiper-list1','swiper-page');
jQuery('.swiper-list2').length && jQuery('.swiper-list2 .swiper-slide').length >1 && swiperSlide2.item('swiper-list2','swiper-page');
jQuery('.swiper-list3').length && jQuery('.swiper-list3 .swiper-slide').length >1 && swiperSlide2.item('swiper-list3','swiper-page');
jQuery('.swiper-list4').length && jQuery('.swiper-list4 .swiper-slide').length >1 && swiperSlide2.item('swiper-list4','swiper-page');
jQuery('.swiper-list5').length && jQuery('.swiper-list5 .swiper-slide').length >1 && swiperSlide2.item('swiper-list5','swiper-page');
jQuery('.swiper-list6').length && jQuery('.swiper-list6 .swiper-slide').length >1 && swiperSlide2.item('swiper-list6','swiper-page');
jQuery('.swiper-list7').length && jQuery('.swiper-list7 .swiper-slide').length >1 && swiperSlide2.item('swiper-list7','swiper-page');
jQuery('.swiper-list8').length && jQuery('.swiper-list8 .swiper-slide').length >1 && swiperSlide2.item('swiper-list8','swiper-page');
jQuery('.swiper-list9').length && jQuery('.swiper-list9 .swiper-slide').length >1 && swiperSlide2.item('swiper-list9','swiper-page');
jQuery('.swiper-list10').length && jQuery('.swiper-list10 .swiper-slide').length >1 && swiperSlide2.item('swiper-list10','swiper-page');
jQuery('.swiper-list11').length && jQuery('.swiper-list11 .swiper-slide').length >1 && swiperSlide2.item('swiper-list11','swiper-page');
jQuery('.swiper-list12').length && jQuery('.swiper-list12 .swiper-slide').length >1 && swiperSlide2.item('swiper-list12','swiper-page');
jQuery('.swiper-list13').length && jQuery('.swiper-list13 .swiper-slide').length >1 && swiperSlide2.item('swiper-list13','swiper-page');
jQuery('.swiper-list14').length && jQuery('.swiper-list14 .swiper-slide').length >1 && swiperSlide2.item('swiper-list14','swiper-page');
jQuery('.swiper-list15').length && jQuery('.swiper-list15 .swiper-slide').length >1 && swiperSlide2.item('swiper-list15','swiper-page');
jQuery('.swiper-list16').length && jQuery('.swiper-list16 .swiper-slide').length >1 && swiperSlide2.item('swiper-list16','swiper-page');
jQuery('.swiper-list17').length && jQuery('.swiper-list17 .swiper-slide').length >1 && swiperSlide2.item('swiper-list17','swiper-page');
jQuery('.swiper-list18').length && jQuery('.swiper-list18 .swiper-slide').length >1 && swiperSlide2.item('swiper-list18','swiper-page');
jQuery('.swiper-list19').length && jQuery('.swiper-list19 .swiper-slide').length >1 && swiperSlide2.item('swiper-list19','swiper-page');
jQuery('.swiper-list20').length && jQuery('.swiper-list20 .swiper-slide').length >1 && swiperSlide2.item('swiper-list20','swiper-page');


var premiumLay = {
    init:function(){
        this.$btn = $('.premium_img li a');
        this.$btn2 = $('.photozone img');
        this.$wrap_btn = $('.btn_img_more');
        this.$list = $('.premium_detail .btn_list_new');
        this.$tg = $('.premium_detail');
        this.$pimg = $('.premium_img');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$wrap_btn.on('click',function(){
            var $this = jQuery(this);
            _this.$pimg.show();
            _this.$tg.hide();
        });

        this.$btn.on('click',function(e){
            var $this = jQuery(this);
            _this.$tg.show();
            _this.$pimg.hide();
            _this.$list.show();
            swiperSlide.item('swiper-premium','swiper-page');
            e.preventDefault();
        });

        this.$btn2.on('click',function(e){
            var $this = jQuery(this);
            _this.$tg.show();
            _this.$pimg.hide();
            _this.$list.hide();
            setTimeout(function(){
                swiperSlide.item('swiper-premium','swiper-page');
            },20);
            
            e.preventDefault();
        });

        this.$list.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.premium_detail').hide();
            _this.$pimg.show();
        });

    }    
}
jQuery('.premium_img').length && premiumLay.init();



function changeTab(t, idx){	
	
	var $tab = $(t).parent().find('button.on');
	$tab.removeClass("on");
	$(t).addClass("on");
	
	if(idx < 9){
		$('.tab_content').hide();
		$('#tab'+idx+'_1').show();	
	}else{
		idx = idx - 8;
		$('.tab_content2').hide();
		$('#tab'+idx+'_2').show();	
	}	
	
}

function tdmore(b){
	
	var $list = $(b).prev().find("li.hide");
	var row = 4;
	$list.each(function(i,data){
		if(i < 4) {
			$(this).show();
			$(this).removeClass("hide");
		}
	});
	if($list.length < 4){
		$(b).hide();
	}
}