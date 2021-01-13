/* 마이페이지 메인 하단 온오프 */
var myOnOff = {
    init:function(){
        this.$btn = $('.openclose_list2 dt');
        this.act();
    },
    act:function(){
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if($this.hasClass('active')){
                $this.removeClass('active');
                $this.next().hide();
            }else if(!$this.hasClass('active')){
                $this.addClass('active');
                $this.next().show();
            }
        });
    }    
}
jQuery('.mypage_wrap').length && myOnOff.init();

/* 하단 온오프 */
var myOnOff2 = {
    init:function(){
        this.$btn = $('.arrow_right');
        this.act();
    },
    act:function(){
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if($this.hasClass('active')){
                $this.removeClass('active');
                $this.next().hide();
            }else if(!$this.hasClass('active')){
                $this.addClass('active');
                $this.next().show();
            }
        });
    }    
}
jQuery('.arrow_right').length && myOnOff2.init();

/* 마이페이지 메인 하단 온오프 */
var myOnOff = {
    init:function(){
        this.$btn = $('.openclose_list2_new dt');
        this.act();
    },
    act:function(){
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if($this.hasClass('active')){
                $this.removeClass('active');
                $this.next().hide();
            }else if(!$this.hasClass('active')){
                $this.addClass('active');
                $this.next().show();
            }
        });
    }    
}
jQuery('.mypage_wrap').length && myOnOff.init();

/* 마이페이지 기간조회 */
var dateSearch = {
    init:function(){
        this.$wrap = $('.date_srarch');
        this.$btn = this.$wrap.find('.sort li');
        this.$tg = this.$wrap.find('.search_input');
        this.act();
        this.cal();
    },
    act:function(){

        var _this = this
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            
            if($index == 4 && !_this.$btn.eq(4).hasClass('active')){
                _this.$tg.show();
                _this.$btn.removeClass('active');
                _this.$btn.eq(4).addClass('active');
                
            }else if($index == 4 && _this.$btn.eq(4).hasClass('active')){
                _this.$tg.hide();
                $this.removeClass('active');
            }else{
                _this.$tg.hide();
                _this.$btn.removeClass('active');
                $this.addClass('active')
            }

        });
    },
    cal:function(){

        $( "#search_date1" ).datepicker({});
        $( "#search_date2" ).datepicker({});
    }
}
jQuery('.order_wrap').length && dateSearch.init();

/* 옵션변경 */
var optChangeBtn = {
    init:function(){
        this.$btn = $('.state_wrap .state_btn .btn_change');
        this.$tg = $('.sel_opt .save');
        this.$tg2 = $('.sel_opt .del');
        this.act();
        this.change();
    },
    act:function(){
//    	개발용 주석
//        this.$btn.on('click',function(){
//            var $this = jQuery(this);
//            if(!$this.closest('.state_wrap').hasClass('active')){   
//                $this.closest('.state_wrap').addClass('active');         
//                $this.closest('.state_wrap').next('.sel_opt').show();
//            }else if($this.closest('.state_wrap').hasClass('active')){
//                $this.closest('.state_wrap').removeClass('active');         
//                $this.closest('.state_wrap').next('.sel_opt').hide();
//            }
//        });
    },
    change:function(){
        this.$tg.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.sel_opt').hide();
            $this.closest('.sel_opt').prev('.state_wrap').removeClass('active');
        });

        this.$tg2.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.sel_opt').hide();
            $this.closest('.sel_opt').prev('.state_wrap').removeClass('active');
        });
    }
}
jQuery('.order_wrap').length && optChangeBtn.init();

/* 다중 팝업 탭 */
var mutilTab = {
    init:function(obj,obj2,obj3){
        this.$wrap = $('.'+obj);
        this.$btn = this.$wrap.find('.'+obj2+' li');

        this.act(obj,obj2,obj3);
    },
    act:function(obj,obj2,obj3){
        var _this = this;
        //this.$btn.hide()
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            
            $this.closest('.'+obj2).find('li').removeClass('active');
            $this.addClass('active');
            $this.closest('.'+obj).find('.'+obj3).hide();
            $this.closest('.'+obj).find('.'+obj3).eq($index).show();

        });
    }
}
$('.mutil_tab').length && mutilTab.init('mutil_tab','tap_div2','tap_area');


/* 결제 수단 변경 on off */
var myPayOnOff = {
    init:function(){
        this.$btn = $('.mypay_onoff .op');
        this.$tg = $('.mypay_onoff .tg_op');
        this.act();
    },
    act:function(){

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if($this.closest('.mypay_onoff').hasClass('active')){
                $this.closest('.mypay_onoff').removeClass('active');
                $this.closest('.mypay_onoff').find('.tg_op').hide();
            }else if(!$this.closest('.mypay_onoff').hasClass('active')){
                $this.closest('.mypay_onoff').addClass('active');
                $this.closest('.mypay_onoff').find('.tg_op').show();
            }
        });
    }    
}
jQuery('.pop_mypay').length && myPayOnOff.init();

/* 환불계좌정보 on off */
var myPayBank = {
    init:function(){
        this.$btn1 = $('.btn_bank_write');
        this.$btn2 = $('.btn_bank_save');
        this.$tg1 = $('.bank_info_txt');
        this.$tg2 = $('.bank_info_write');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn1.on('click',function(){
            _this.$tg1.hide();
            _this.$tg2.show();
            _this.$btn1.hide();
            
            //개발용
            $("#chkYn").val("N"); 
    		$("#temp_chk_yn").val("N"); 
    		$("#mode").val("U");
    		//개발용 end
        });
        
//        this.$btn2.on('click',function(){
//            _this.$tg2.hide();
//            _this.$tg1.show();
//        });
    }    
}
jQuery('.btn_bank_write').length && myPayBank.init();

/* 송장번호 레이어 */
var divPost = {
    init:function(obj1,obj2,obj3){
        this.$btn = $('.'+obj1);
        this.$tg = $('.'+obj2);
        this.$close = this.$tg.find('.'+obj3);
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
        	 var $this = jQuery(this);
             var h2 = $this.offset().top;
            _this.$tg.show();
            _this.$tg.find('.popup_wrap').css('top', h2 + "px");

        });

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            $this.closest('.layrer_post_div').hide();
            e.preventDefault();
        });
        
    }    
}
jQuery('.btn_layer_post').length && divPost.init('btn_layer_post','layrer_post_div','btn_pop_post_close');

/* 앤픽교환권 레이어 */
var npickEx = {
    init:function(obj1,obj2,obj3){
        this.$btn = $('.'+obj1);
        this.$tg = $('.'+obj2);
        this.$close = this.$tg.find('.'+obj3);
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
//            var $this = jQuery(this);
//            var sh = $(window).outerHeight() - 80;
//            var st = $(window).scrollTop();
//            
//            _this.$tg.show().addClass('active');
//            var ch = _this.$tg.find('.popup_wrap').outerHeight();
//
//            if(sh > ch){
//                var ps = (sh - ch);
//                _this.$tg.find('.popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});
//
//            }else if(sh <= ch){
//                _this.$tg.find('.popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
//            }
        });

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            $this.closest('.layrer_npick_div').hide().removeClass('active');;
            e.preventDefault();
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
jQuery('.btn_npick_ex').length && npickEx.init('btn_npick_ex','layrer_npick_div','btn_pop_npick_close');

/* 1:1채팅 관련 
var oneAsk = {
    init:function(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8){
        this.$btn1 = $('.'+obj1);
        this.$btn2 = $('.'+obj2);
        this.$btn3 = $('.'+obj6);
        this.$btn4 = $('.'+obj7);
        this.$tg1 = $('.'+obj3);
        this.$tg2 = $('.'+obj4);
        this.$tg3 = $('.'+obj8);
        this.$close = $('.'+obj5);
        this.act();
    },
    act:function(){

        var _this = this;

//        this.$btn1.on('click',function(){
//            _this.$tg1.show();
//            _this.$tg1.find('.popup_wrap').css('top', $(window).scrollTop() + "px");
//
//        });

        this.$btn2.on('click',function(){
            _this.$tg2.show();
            _this.$tg2.find('.popup_wrap').css('top', $(window).scrollTop() + "px");

        });

//        this.$btn3.on('click',function(){
//            _this.$tg1.hide();  layer_prod_lookup
//            _this.$tg2.show(); layer_ask_con
//            _this.$tg2.find('.popup_wrap').css('top', $(window).scrollTop() + "px"); layer_ask_con
//        });

       

        this.$btn4.on('click',function(){
            _this.$tg3.show();
            _this.$tg3.find('.popup_wrap').css('top', $(window).scrollTop() + "px");

        });

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            $this.closest('.layer_popup').hide();
            e.preventDefault();
        });
        
    }    
}
jQuery('.chatting').length && oneAsk.init('btn_prod_lookup','btn_ask_con','layer_prod_lookup','layer_ask_con','btn_pop_close','btn_lookup_confirm','btn_terms_view','layer_terms_con');
*/
/* 1:1채팅 관련 UI변경 */
var oneAsk = {
    init:function(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10){
        this.$btn1 = $('.'+obj1);
        this.$btn2 = $('.'+obj2);
        this.$btn3 = $('.'+obj6);
        this.$btn4 = $('.'+obj7);
        this.$btn5 = $('.'+obj9);
        this.$tg1 = $('.'+obj3);
        this.$tg2 = $('.'+obj4);
        this.$tg3 = $('.'+obj8);
        this.$tg4 = $('.'+obj10);
        this.$close = $('.'+obj5);
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn1.on('click',function(){
            _this.$tg1.show();
            _this.$tg1.find('.popup_wrap').css('top', $(window).scrollTop() + 15 + "px");
            var $hss = screen.height - 80;
            _this.$tg1.find('.popup_wrap .inner').css('max-height',$hss).css('overflow-y','auto');
            _this.$tg1.addClass('active');
            if($('.layer_prod_lookup.active').length){

                $(window).scroll(function(){
                    var top = $(window).scrollTop() + 15;
                    $('.layer_prod_lookup.active').find('.popup_wrap').delay(500).css('top',top);
                });
            }
        });

        this.$btn2.on('click',function(){
            _this.$tg2.show();
            _this.$tg2.find('.popup_wrap').css('top', $(window).scrollTop() + 15 + "px");
            var $hss = screen.height - 80;
            _this.$tg2.find('.popup_wrap .inner').css('max-height',$hss).css('overflow-y','auto');
            _this.$tg2.addClass('active');
       /*     if($('.layer_ask_con.active').length){

                $(window).scroll(function(){
                    var top = $(window).scrollTop() + 15;
                    $('.layer_ask_con.active').find('.popup_wrap').delay(500).css('top',top);
                });
            }*/
//            if($('.layer_prod_lookup2.active').length){
//        	  $(window).scroll(function(){
//        	  var top = $(window).scrollTop() + 15;
//        	  $('.layer_prod_lookup2.active').find('.popup_wrap').delay(500).css('top',top);
//        	  });
//    	 	}
        });

        this.$btn5.on('click',function(){
            _this.$tg4.show();
            _this.$tg4.find('.popup_wrap').css('top', $(window).scrollTop() + "px");
            var $hss = screen.height - 80;
            _this.$tg4.find('.popup_wrap .inner').css('max-height',$hss).css('overflow-y','auto');
            _this.$tg4.addClass('active');
            if($('.layer_ask_con.active').length){

                $(window).scroll(function(){
                    var top = $(window).scrollTop() + 15;
                    $('.layer_ask_con.active').find('.popup_wrap').delay(500).css('top',top);
                });
            }
        });

        this.$btn3.on('click',function(){
            _this.$tg1.hide();
            _this.$tg2.show();
            _this.$tg2.find('.popup_wrap').css('top', $(window).scrollTop() + 15 + "px");
            var $hss = screen.height - 80;
            _this.$tg2.find('.popup_wrap .inner').css('max-height',$hss).css('overflow-y','auto');
            _this.$tg2.addClass('active');
//            if($('.layer_ask_con.active').length){
//
//                $(window).scroll(function(){
//                    var top = $(window).scrollTop() + 15;
//                    $('.layer_ask_con.active').find('.popup_wrap').delay(500).css('top',top);
//                });
//            }
        });

        this.$btn4.on('click',function(){
            _this.$tg3.show();
            _this.$tg3.find('.popup_wrap').css('top', $(window).scrollTop() + "px");
            var $hss = screen.height - 80;
            _this.$tg3.find('.popup_wrap .inner').css('max-height',$hss).css('overflow-y','auto');
            _this.$tg3.addClass('active');
            if($('.layer_terms_con.active').length){

                $(window).scroll(function(){
                    var top = $(window).scrollTop() + 15;
                    $('.layer_terms_con.active').find('.popup_wrap').delay(500).css('top',top);
                });
            }
        });

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            $this.closest('.layer_popup').hide().removeClass('active');;
            e.preventDefault();
        });

        $(window).on('resize',function(){
            if($('.layer_popup.active').length){
                var $hss = screen.height - 80;
                $('.layer_popup.active .popup_wrap .inner').css('max-height',$hss);
            }
        });
        
    }    
}
jQuery('.chatting').length && oneAsk.init('btn_prod_lookup','btn_ask_con','layer_prod_lookup','layer_ask_con','btn_pop_close','btn_lookup_confirm','btn_terms_view','layer_terms_con','btn_ask_select','layer_prod_lookup2');

/* 프리미엄 상품평 on off */
/*var starOnoff = {
    init:function(){
        this.$wrap = $('.premium_list');
        this.$btn = this.$wrap.find('.btn_star_onoff');
        this.$tg = this.$wrap.find('.starzone');
        this.act();
    },
    act:function(){

        var _this = this;

        $(document).on('click','.btn_star_onoff',function(){
            var $this = jQuery(this);
            if(!$this.hasClass('on')){
                $this.closest('p').next().show();
                $this.addClass('on');
            }else if($this.hasClass('on')){
                $this.closest('p').next().hide();
                $this.removeClass('on');
            }
        });
        
    }    
}
jQuery('.premium_list').length && starOnoff.init();*/

/* 프리미엄 상품평 on off */
var starOnoff = {
    init:function(){
        this.$wrap = $('.premium_list_new');
        this.$btn = this.$wrap.find('.btn_star_onoff');
        this.$tg = this.$wrap.find('.starzone');
        this.act();
    },
    act:function(){

        var _this = this;

        $(document).on('click','.btn_star_onoff',function(){
            var $this = jQuery(this);
            if(!$this.hasClass('on')){
                $this.closest('p').next().show();
                $this.addClass('on');
            }else if($this.hasClass('on')){
                $this.closest('p').next().hide();
                $this.removeClass('on');
            }
        });
        
    }    
}
jQuery('.premium_list_new').length && starOnoff.init();

/* qna on off */
var qnaOnoff = {
    init:function(){
        this.$wrap = $('.qna_list');
        this.$btn = this.$wrap.find('.btn_star_onoff');
        this.$tg = this.$wrap.find('.starzone');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.hasClass('on')){
                $this.closest('p').next().show();
                $this.addClass('on');
            }else if($this.hasClass('on')){
                $this.closest('p').next().hide();
                $this.removeClass('on');
            }
        });
        
    }    
}
jQuery('.qna_list').length && qnaOnoff.init();

/* like it  바로구매시 옵션 선택 */
var likeitOptsel = {
    init:function(obj1,obj2,obj3){
        this.$btn = $('.'+obj1);
        this.$tg = $('.'+obj2);
        this.$close = this.$tg.find('.'+obj3);
        this.act(obj2);
    },
    act:function(obj){
        var _this = this;
        var name = obj;

        this.$btn.on('click',function(){
            _this.$tg.show();
            _this.$tg.find('.popup_wrap').css('top', $(window).scrollTop() + "px");

        });

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            $this.closest('.'+name).hide();
            e.preventDefault();
        });
        
    }    
}
jQuery('.info_goods').length && likeitOptsel.init('buy','likeit_optsel','btn_pop_close');

/* mileage on off */
var mileageOnoff = {
    init:function(){
        this.$wrap = $('.info_txt');
        this.$btn = this.$wrap.find('dt');
        this.$tg = this.$wrap.find('.dd');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.hasClass('active')){
                $this.next().show();
                $this.addClass('active');
            }else if($this.hasClass('active')){
                $this.next().hide();
                $this.removeClass('active');
            }
        });
        
    }    
}
jQuery('.info_txt').length && mileageOnoff.init();

/* 배송조회 레이어 팝업 */
var mydivSearch = {
    init:function(obj1,obj2,obj3){
        this.$btn = $('.'+obj1);
        this.$tg = $('.'+obj2);
        this.$close = this.$tg.find('.'+obj3);
        this.act(obj2);
    },
    act:function(obj){
        var _this = this;
        var name = obj;

        this.$btn.on('click',function(){
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
        });

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            $this.closest('.'+name).hide().removeClass('active');
            e.preventDefault();
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
//jQuery('.btn_div_search').length && mydivSearch.init('btn_div_search','layer_div_search','btn_pop_close');
jQuery('.btn_refund1').length && mydivSearch.init('btn_refund1','layrer_refund1','btn_pop_close');

/* 배송조회 레이어 팝업 */
var mydivSearch2 = {
    init:function(obj1,obj2,obj3){
        this.$btn = $('.'+obj1);
        this.$tg = $('.'+obj2);
        this.$close = this.$tg.find('.'+obj3);
        this.act(obj2);
    },
    act:function(obj){
        var _this = this;
        var name = obj;

        this.$btn.on('click',function(){
	        
        	//개발용
        	if(_this.$btn.hasClass('btn_refund2') && _this.$btn.attr('data-type') == "change"){
	        	var msg = '교환요청을 철회하시겠습니까? 교환철회를 하신 후에는 직접 교환요청을 하실 수 없습니다.'; 
				if(confirm(msg)){
					jQuery('.btn_refund1').length && mydivSearch.init('btn_refund1','layrer_refund1','btn_pop_close');
		      	}else{
		      		return false;
		      	}
			}else if(_this.$btn.hasClass('btn_refund2') && _this.$btn.attr('data-type') == "refund"){
				var msg = '반품요청을 철회하시겠습니까? 반품철회를 하신 후에는 직접 반품요청을 하실 수 없습니다.'; 
				if(confirm(msg)){
					jQuery('.btn_refund1').length && mydivSearch.init('btn_refund1','layrer_refund1','btn_pop_close');
		      	}else{
		      		return false;
		      	}
			}//if end
        	//개발용
        	
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
        });

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            $this.closest('.'+name).hide().removeClass('active');
            e.preventDefault();
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
        
    },
    //개발용
    npickLayerShow : function($obj) {
    	 var $this = $obj;
         var h2 = $this.offset().top;
         mydivSearch.$tg.show();
         mydivSearch.$tg.find('.popup_wrap').css('top', h2 + 'px');  
    }
    //개발용
     
    
}
//jQuery('.btn_div_search').length && mydivSearch.init('btn_div_search','layer_div_search','btn_pop_close');
jQuery('.btn_npick').length && mydivSearch.init('btn_npick','layer_npick','btn_pop_close');
jQuery('.btn_refund2').length && mydivSearch2.init('btn_refund2','layrer_refund2','btn_pop_close');

/* 한줄상품평 입력 */
var lineReview = {
    init:function(){
        this.$btn = $('.rating button');
        this.rating();
    },
    rating:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();

            $this.parent().children().removeClass('active');
            $this.addClass('active');

        });
        
    }

}
jQuery('.popup_wrap').length && lineReview.init();

/* 프리미엄 상품평 별 입력 */
var starWrite = {
    init:function(){
        this.$wrap = $('.star_score_data');
        this.$btn = this.$wrap.find('li button');
        this.act();

    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){

            var $this = jQuery(this);
            var $index = $this.index() + 1;
            var $pindex = $this.parent().index();

            $this.parent().attr('class','')
            $this.parent().addClass('score'+$index);

            for(var i= 0, len=_this.$wrap.find('li').length; i<len; i++){            
                if($pindex === i){
                    _this.$wrap.attr('data'+i,$index)
                }
            }

        });
        
    }

}
jQuery('.star_score_data').length && starWrite.init();

/* qna list on off */
var qnaOnoff = {
    init:function(){
        this.$wrap = $('.qna_list');
        this.$btn = this.$wrap.find('dl');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);

            if(!$this.hasClass('active')){
                $this.next().show();
                $this.addClass('active');
            }else if($this.hasClass('active')){
                $this.next().hide();
                $this.removeClass('active');
            }

        });
        
    }

}
jQuery('.qna_list').length && qnaOnoff.init();

/* pay method */
var myPaymethod = {
    init:function(){
        this.$wrap = $('.pay_method_wrap');
        this.$btn = this.$wrap.find('.pay_method');
        this.$tg = this.$wrap.find('.pay_method_con');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('change',function(){
            var $this = jQuery(this);
            var $index = $this.parent().index();
            _this.$tg.hide();
            if($this.is(':checked')){
                _this.$tg.eq($index).show();
            }
            	
     		document.orderFrm.payType.value = $(this).val();
     		document.orderFrm.pay_method_id_ord.value = $(this).val();
        });
        
    }

}
jQuery('.pay_method_wrap').length && myPaymethod.init();

/* 프리미엄 상품평 이미지 클릭시 */
var reviewSlide = {
    init:function(){
        this.$wrap = $('.photozone');
        this.$btn = this.$wrap.find('span');
        this.$tg = $('.layer_photozone');
        this.$tgHtm = this.$tg.find('.view_area');
        this.$close = this.$tg.find('.head button');
        this.$url = [];
        this.act();
        $('.bxslide').bxSlider({})
    },
    act:function(){

        var _this = this;

        $(document).on('click', ".photozone span",function(){
            var $this = jQuery(this);
            var $index = $this.index();
            var $num = $this.parent().find('span').length;

            for(var i= 0, len=$num; i<len; i++){       
                _this.$url.push($this.parent().find('span').eq(i).attr('data-url'));
            }
            _this.$tg.show();
            _this.$tgHtm.empty().append(_this.htm($num));
            _this.bxslide($index); 
            _this.$tgHtm.next('p').find('span').text($num);
            _this.$tgHtm.next('p').find('em').text($index+1);

        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            _this.$tg.hide();
        });
    },
    htm:function(obj){

        var $num = obj;
        var htm = ''
        +'<ul class="bxslide">';

        for(var i= 0, len=$num; i<len; i++){
           
             htm += '<li><img src="'+ this.$url[i] +'" alt="" onerror="noImage(this);" ></li>';
        }
        htm+='</ul>';
        this.$url.splice(0);
        return htm;

    },
    bxslide:function(obj){
        
        var cont;
        var _this = this;
        var slider = $('.bxslide').bxSlider({  
            infiniteLoop:false,
            //adaptiveHeight: true,
            //mode:'fade',
            pager:false,
            controls:false,
            onSlideAfter: function(){
                cont = _slide.getCurrentSlide();
                _this.$tgHtm.next('p').find('em').text(cont+1);
            }
        });

        var num = obj;
        slider.goToSlide(num);

        var _slide = slider
    }

}
jQuery('.photozone').length && reviewSlide.init();

/* 교환 반품 접수 상품 */
var accordion = {
    init:function(){
        this.$wrap = $('.prd_item');
        this.$btn = this.$wrap.find('input');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('change',function(){
            var $this = jQuery(this);
            var $index = $this.parent().index();
            $this.closest('.prd_item').removeClass('active');
            if($this.is(':checked')){
                $this.closest('.prd_item').addClass('active');
            }
            
            //개발용
            $(".ak_refund").click();
            //개발용end
        });
        
    }

}
jQuery('.prd_item').length && accordion.init();

/* info layer */
var infoLayer = {
    init:function(){
        this.$wrap = $('.btn_delivery i');
        this.$btn = this.$wrap.find('button');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);

            _this.$wrap.hide();

        });
        
    }

}
jQuery('.btn_delivery').length && infoLayer.init();

/* layer_full */
var layerFulls = {
    
    addEvent: function(obj){
        var _this = this;
        
        $(document).on('click','.'+obj,function(e){
            var $this = jQuery(this);
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);

                if(type === 'full'){
                    var h1 = $(window).scrollTop();
                    console.log(h1);

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
$('.layer_apple_wrap').length && layerFulls.addEvent('btn_full_apple');

/* 1:1 채팅 스크롤 함수 */
var scrollEvent = {
    act:function(){
        var sc= $(document).height() - $(window).height() - $('.footer_main').height();
        $(window).scrollTop(sc);
    }
}

//[D] 2017.01.10 자동으로 사라지는 레이어 팝업 추가
var autoBombLayer = {
    init:function(pop, btn){
        this.popup = $('.'+pop);
        this.btnClosePopup = this.popup.find('.'+btn)
        var autoBomb = setTimeout(function(){
            autoBombLayer.popup.hide();
        },5000)//[D] 2017.01.23 5000으로 수정
        this.btnClosePopup.on('click',function(){
            clearTimeout(autoBomb)
            autoBombLayer.popup.hide();
        })
    }
}

//가입신청 팝업
function pAKmobile(ord_id, goods_id) {
	$.ajax("/order/pAKmobile.do", {
		data : {"ord_id" : ord_id,"goods_id" : goods_id},
		type : "post",
		dataType : "html",
		success : function(html) {
			$(".layer_phone_wrap").html(html);
			
			var h1 = $(window).scrollTop();
			$(".layer_phone_wrap").show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
			$(".layer_phone_wrap").attr('data-height',h1);
		},
		error : function(x, o, e) {
//			alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

/* pAKmobile layer */
var layerPAKmobile = {
    
    addEvent: function(obj){
        var _this = this;

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

$('.layer_phone_wrap').length && layerPAKmobile.addEvent('btn_full_phone');
$('.prd_notice_layer').length && autoBombLayer.init('prd_notice_layer','btn_close');

function goAbort(type, v_ord_id, v_ord_seq, v_ord_div_code, v_counsel_id){
	
// 	$('#mask_w').show();
	
	if(!confirm(type+"요청을 철회하시겠습니까?")){
// 		$('#mask_w').hide();
		return;
	}
	
	$.ajax({
		type : "post",
		url : "/mypage/crcAbortAjax.do",
		async : false,
		dataType :'json',
		data : {
			"ord_id" : v_ord_id,
			"ord_seq" : v_ord_seq,
			"ord_div_code" : v_ord_div_code,
			"counsel_id"  : v_counsel_id
		},
		success : function(data){
			
			if ("0000" == data.orderErrorCode){
				alert("철회가 완료되었습니다.");
				location.href='/mypage/OrderDeliInquiry.do';
			} else {
				alert(data.orderErrorMsg);
				
			}
			
// 			frmNavi.submit();
			
			
		},
		error : function(x, o, e){
			alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
		}
	});
	
// 	$('#mask_w').hide();
	
}

