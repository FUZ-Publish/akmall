/* 제휴 카드 상단 on off */
var adCardonoff = {
    init:function(){
        this.$btn = $('.ad_card_wrap .btn_alert');
        this.$tg = $('.ad_card_wrap .bot');
        this.act();
    },
    act:function(){

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

    }    
}
jQuery('.ad_card_wrap').length && adCardonoff.init();

/* top ad */
var topAd = {
    init:function(obj){
        this.$wrap = $('.'+obj);
        this.$close = this.$wrap.find('.btn_close');
        this.act(obj);
    },
    act:function(obj){

        var _this = this;

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            e.preventDefault();
            $this.closest('.'+obj).slideUp(function(){
              $(this).remove();
              if(typeof gnbScorll == "Object") {
            	  gnbScorll.init();
              }
              
              //개발용
              setCookie("app_down_bn", "N", 1);
              //개발용
            });
            
        });
    }    
}
jQuery('.top_md').length && topAd.init('top_md');

/* 탑버튼 및 뒤로가기 버튼 노출타이밍 스크립트 */
var footScorll = {
  init:function(){
		var sh = screen.height/3; 
			$(window).scroll(function(){
				if($(window).scrollTop() > sh){
					$('.foot_btn_ara').addClass('on');
					
				} else {
					$('.foot_btn_ara').removeClass('on');
				}
			});
	}
}
jQuery('.foot_btn_ara').length && footScorll.init();

/* 하단 바 동작 [D] 2017.1.07 추가 */
var barMove = {
    init:function(){
        var sh = $(window).scrollTop();
        if($('.btn_first').length) {
        	$('.bot_btn_area').removeClass('on');
		}else {
			$(window).scroll(function(){
				if($(window).scrollTop() > sh){
					$('.bot_btn_area').addClass('on');
				}else{
					$('.bot_btn_area').removeClass('on');
				}
				$(window).scrollTop() < 0 ? sh = 0 : sh = $(window).scrollTop() //[D] 2017.01.31 수정
			});
		}
    }
}
jQuery('.bot_btn_area').length && barMove.init();

/* alert 회원가입 및 아이디찾기 클릭시 예제 노출 */
var alertBox = {
    tg1:function(){
        $('.alert_box1').show(300).delay(3000).hide(300);
    },
    tg2:function(){
        $('.alert_box2').show(300).delay(3000).hide(300);
    }
}

/* layer tooltip */
var tooltip = {
    init:function(obj1,obj2){
        this.$btn = $('.'+obj1);
        this.$tg = $('.'+obj2);
        this.act();
        this.close(obj1,obj2);

    },
    act:function(){
        var _this = this;
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            $this.next().show();
        });
    },
    close:function(obj1,obj2){
        var _this = this;
        this.$tg.find('.btn_close').on('click',function(){
            var $this = jQuery(this);
            $this.closest('.'+obj2).hide();
        });
        this.$tg.find('.btn_close2').on('click',function(){
            var $this = jQuery(this);
            $this.closest('.'+obj2).hide();
        });
    }
}
$('.btn_priceinfo').length && tooltip.init('btn_priceinfo','layer_priceinfo');
$('.btn_priceinfo').length && tooltip.init('btn_priceinfo','layer_priceinfo2');
$('.btn_help').length && tooltip.init('btn_help','layer_help');
$('.btn_help2').length && tooltip.init('btn_help2','layer_help');

/* 새창 */
var blankWindow = {
    init: function(obj,htm,obj3){

        this.$btn = $('.'+obj);
        
        this.act(htm,obj3);

    },
    act:function(htm,obj3){
        var _this = this;

        if(obj3){
            this.$btn.on('click',function(){
                location.href = htm;
            });
        }else{
            this.$btn.on('click',function(){
                var $open = window.open('about:blank'); 
                $open.location.href = htm;
            });
        }
    },
    close:function(){
        window.close();
    },
    open:function(htm,obj3){
        var _this = this;

        if(obj3){
            location.href = htm;
        }else{
                var $open = window.open('about:blank'); 
            $open.location.href = htm;
        }
    }
}
//$('.btn_myclass').length && blankWindow.init('btn_myclass','popup_my_rating.html',false);
//$('.btn_pay_change_my1').length && blankWindow.init('btn_pay_change_my1','popup_address_change.html',false);
$('.btn_pay_change_my2').length && blankWindow.init('btn_pay_change_my2','popup_payment_change.html',false);

/* 타이틀 열고닫기 */
var titOnOff = {
    init:function(){
        this.$btn = $('.product_tit button');
        this.act();
    },
    act:function(){
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if($this.closest('.product_tit').hasClass('active')){
                $this.closest('.product_tit').removeClass('active');
                $this.closest('.product_tit').next('.tg_onoff').hide();
//                if(jQuery('.cart_wrap').length)
//                allBuy.check();
            }else if(!$this.closest('.product_tit').hasClass('active')){
                $this.closest('.product_tit').addClass('active');
                $this.closest('.product_tit').next('.tg_onoff').show();
//                if(jQuery('.cart_wrap').length)
//                allBuy.check();
            }
        });
    }    
}
jQuery('.product_tit').length && titOnOff.init();

/* 기본 탭 페이지에 탭이 1개만 있을시 사용 */
var defaultTab = {
    init:function(obj1,obj2,obj3){
        this.$btn = $('.'+obj2+' li');
        this.act(obj1,obj2,obj3);
    },
    act:function(obj1,obj2,obj3){
        var _this = this;
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            
            //개발용
            if($this.hasClass("step2_call")) {
            	
            	step2($this);
            	return false;
            } else if($this.hasClass("ret_opt1")) {
            	
            	$("#ret_opt_sel").val("1");
            } else if($this.hasClass("step3_call")) { //편의점반품
            	/*if(getTimeStamp() >= '20180919' && getTimeStamp() < '20180927') {
            		alert('추석연휴 기간(9/19~9/26)에는 편의점 반품 접수가 불가 하오니 반품 접수 시 참조 바랍니다.');
            	}*/

            	step3($this);
            	return false;
            }
            if($index == 0) {
            	if($(".no_info.brand").length > 0) {
            		
            		$(".no_info.brand").hide();
            	}
            	
            	if($(".no_info.like").length > 0) {
            		
            		$(".no_info.like").show();
            	}
            } else if($index == 1) {
            	
            	if($(".no_info.brand").length > 0) {
            		
            		$(".no_info.brand").show();
            	}
            	
            	if($(".no_info.like").length > 0) {
            		
            		$(".no_info.like").hide();
            	}
            }
            
            if($("#noTabActive").length > 0) {//개발용 
            	return false; 
            }
            
            if($this.text() == "카테고리"){
            	$(".goLikeChk").attr("href", "/mypage/MyCtg.do")
            }
            if($this.text() == "브랜드"){
            	$(".goLikeChk").attr("href", "/mypage/MyBrand.do")
            }
            
            //개발용 end
            
            $this.closest('.'+obj2).find('li').removeClass('active');
            $this.addClass('active');
            $this.closest('.'+obj1).find('.'+obj3).hide();
            $this.closest('.'+obj1).find('.'+obj3).eq($index).show();
        });
    }
}
$('.login_tap').length && defaultTab.init('login_wrap','login_tap','login_area');
$('.box_tab').length && defaultTab.init('join_wrap','box_tab','con');
$('.box_tab2').length && defaultTab.init('join_wrap','box_tab2','con');
//$('.level_info').length && defaultTab.init('popup_wrap','level_info','con');
$('.login_wrap').length && defaultTab.init('login_wrap','tap_div2','login_area');
$('.login_wrap').length && defaultTab.init('login_wrap','line_tap','login_area');
$('.order_return_wrap').length && defaultTab.init('order_return_wrap','line_tap','order_return_box');
$('.order_return_wrap').length && defaultTab.init('order_return_wrap','tap_div_tab1','tap_check_wrap1');
$('.order_return_wrap').length && defaultTab.init('order_return_wrap','tap_div_tab2','tap_check_wrap2');
$('.popup_wrap').length && defaultTab.init('popup_wrap','tap_check2','tap_area');
$('.search_container').length && defaultTab.init('search_container','line_tap','search_wrap');
//$('.notice_qna').length && defaultTab.init('notice_qna','tap_div2','shop_con');
$('.event_wrap').length && defaultTab.init('event_wrap','tap_div2','exper_list');
$('.event_wrap').length && defaultTab.init('event_wrap','tap_div2','photo_list_box');
$('.event_wrap').length && defaultTab.init('event_wrap','tap_div2','experience_area');
$('.category_wrap').length && defaultTab.init('category_wrap','tap_div2','like_list');


/*  옵션 변경 */
var selectChange = {
    init: function(){

        this.$btn = $('.btn_sel_dr');
        this.$tg = $('.container');

        this.act();

    },
    act:function(){
        var _this = this;

        $(document).on('click','.btn_opti',function(){
            //alert(1)
            var $this = jQuery(this);
            $this.addClass('btn_sel_dr');
            $this.removeClass('btn_opti');

            var opt = $('.test').html();
            $this.next().append(opt);

            $this.trigger('click')

        });

        $(document).on('click','.btn_sel_dr',function(){

            var $this = jQuery(this);
            var $clas = $this.attr('data-class');
            var $sel_cal = $('.hid_'+$clas)
            var $sel_cal_index = $sel_cal.find('option:selected').index();
            
            if($this.attr('data-text')){
                var text = 'btn_layer2';
            }else{
                var text ='btn_layer';
            }

        	_this.$tg.after(_this.dataitem($clas,text));
            $('.layer_'+$clas).find('.deem').css('z-index','2019');
            $('.layer_'+$clas).find('.popup_wrap').css('z-index','2020');
            $('.layer_'+$clas).find('.popup_wrap ul li').eq($sel_cal_index).addClass('on');
            var $top = $('.layer_'+$clas).find('.popup_wrap ul .on').offset().top;
            var $list = $('.layer_'+$clas).find('.popup_wrap ul li').outerHeight();
            var $listIndex = (($sel_cal_index +1) * $list)-$list;
            var $top2 = $(window).scrollTop();
            
            /* [D] 2016.12.06 수정 #27613 */
            $('.layer_select_popup').on('touchmove', function(e) {
                e.preventDefault();
            });

            var $ht = 225;
            var $hct = $('.layer_'+$clas).find('.popup_wrap').outerHeight();

            $('body').css('overflow','hidden').on('touchmove', function(e) {
                e.preventDefault();
            });

            if($ht > $hct){
                $('.layer_'+$clas).find('.popup_wrap').css('margin-top',-$hct/2);
            }else if($ht <= $hct){
                $('.layer_'+$clas).find('.popup_wrap').css('margin-top',-$ht/2);
                $('.scroll_box').css('height', '225px');
                $('.scroll_box').find('li').addClass('swiper-slide');
                var swiper = new Swiper('.scroll_box', {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    freeMode: true
                });
               if($('.scroll_box').find('li.on').length){
                 swiper.slideTo($('.scroll_box').find('li.on').index(),0);
               }
            }
            /* [D] 2016.12.06 수정 #27613 */
        });

        $(window).on('resize',function(){
            if($('.layer_select_popup').length){
                var $hss = screen.height - 80;
                $('.layer_select_popup .popup_wrap .btn_layer_sel').css('max-height',$hss)
            }
        });

        $(document).on('click', '.layer_popup .btn_layer_sel button', function(e){ 
            var $this = jQuery(this); 
            var $index = $this.parent().index();
           
            var $num = $this.text();
            var $clas = $this.closest('.layer_popup').attr('data-class');
            var $sel_cal = $('.hid_'+$clas)

            /* 메일 인증시 직접입력 */
            if($this.closest('.layer_popup').hasClass('layer_mail_confirm_data') && $index == 0 ){
                $('.mail_inp').val("").focus();
            }else if($this.closest('.layer_popup').hasClass('layer_mail_confirm_data')){
                $('.mail_inp').val($this.attr('data-val'))
            }

            /* 개인정보 수정 관련 알럿 */
            if($('.' + $clas).hasClass('mail_confirm_data_my')){
            }

            /* 버튼 무한 */
            if($('.' + $clas).hasClass('btn_loop')){
                $('.' + $clas).removeClass('btn_sel_dr');
                $('.' + $clas).addClass('btn_opti');
                /*서버통신*/
                $('.' + $clas).next().empty();
            }

            $('.' + $clas).text($num);

            /* 장바구니 pick 상품 */
            if($('.' + $clas).hasClass('change')){
                $('.' + $clas).parent().find('em').text($num);
                $('.' + $clas).text('변경');
            }
            
            //개발용
            var beforeIdx = $sel_cal.find("option:selected").index();
            
            $('.' + $clas).attr('data-opt',$num);
            $sel_cal.find('option').eq($index).prop('selected',true);

            /* 주문 기본주소 */
            if($('.' + $clas).hasClass('default_sel')){
                //adderssSet.defaultAddress();
            }

            /* 주문 최근주소 */
            if($('.' + $clas).hasClass('div_new')){
                $('.' + $clas).text('최근 배송지');
                //adderssSet.newAddress();
            }

            /* 배송메세지 직접입력*/
//            if($('.' + $clas).hasClass('btn_dm') && $index == 6){
        	if($('.' + $clas).hasClass('btn_dm') ){
        		if($this.parent().text() == "직접입력") {
        			$('.txt_' + $clas).show().addClass('active').val('').focus();
        			$('.' + $clas).hide();
        			$("#del_info").show();
        		}else {
        			$("#del_info").hide();
        		}
            }

            /* 개인소득공제용 */
            if($('.' + $clas).hasClass('btn_sel_card')){
                
                if($index === 0){

                    $('.' + $clas).next().next().show();
                    $('.' + $clas).next().next().next().hide();
                    $('.' + $clas).next().next().next().next().hide();
                }
                if($index === 1){

                    $('.' + $clas).next().next().hide();
                    $('.' + $clas).next().next().next().show();
                    $('.' + $clas).next().next().next().next().hide();
                }
                if($index === 2){

                    $('.' + $clas).next().next().hide();
                    $('.' + $clas).next().next().next().hide();
                    $('.' + $clas).next().next().next().next().show();
                }

            }

            /* 주문 최근주소 */
            if($this.closest('.layer_popup').hasClass('layer_btn_mutil')){
                var $data = $this.attr('data-val');
                multiDiv.view($data);
            }

            /* 문의유형선택 */
            if($('.' + $clas).hasClass('btn_ask_select')){
                $('.' + $clas).text('문의유형 선택');
            }

           //개발용 추가
           if(beforeIdx != $index) {
        	
    		   $sel_cal.trigger("change");
    		   
    		  
           }
            
           if(location.pathname.indexOf("ShoppingCart.do") > -1 && $sel_cal.find("option").length == 1) {
			   $sel_cal.trigger("change");
		   }
           
           if(popCloseFlag) {
        	   if(changeFlag) {
        		   changeFlag = false;
        		   $sel_cal.trigger("change");
        	   }
        	   popCloseFlag = false;
        	   
           }  
           //개발용 추가end
           
           $this.closest('.layer_popup').remove();
           $('body').css('overflow','auto').off('touchmove');
        });

        $(document).on('focusout', '.div_sel .active', function(e){ 
            var $this = jQuery(this);
            if($this.val() === ""){
                $this.removeClass('active').hide();
                $this.prev().prev().show();
                /* [D] 2016.01.23 배송메시지를 선택하기 텍스트 수정 */
                if($this.prev().prev().hasClass('btn_dm')){
                    $this.prev().prev().text('배송메시지를 선택하기');
                }
            }
        });

        $(document).on('click', '.layer_popup .day_pop_close', function(e){ 
            var $this = jQuery(this);
            var $clas = $this.closest('.layer_popup').attr('data-class');
            $this.closest('.layer_popup').remove();
            
            //개발용 추가
            if(popCloseFlag) {
               if(changeFlag) {
         		   changeFlag = false;
               }	   
         	   popCloseFlag = false;
            }
            //개발용 추가end
            
            /* 버튼 무한 */
            if($('.' + $clas).hasClass('btn_loop')){
                $('.' + $clas).removeClass('btn_sel_dr');
                $('.' + $clas).addClass('btn_opti');
                $('.' + $clas).next().empty();
            }
            $('body').css('overflow','auto').off('touchmove');
        });

    },
    dataitem:function(clas,text){

            var $sel_cal = $('.hid_'+clas)
            var $sel_cal_data_v = [];
            var $sel_cal_data_t = [];

            for(var i= 0, len=$sel_cal.find('option').length; i<len; i++){       
                $sel_cal_data_v.push($sel_cal.find('option').eq(i).val());
                $sel_cal_data_t.push($sel_cal.find('option').eq(i).text());
            }


        var htm = '';
        
        htm+= ''
	            +'<div class="layer_popup layer_select_popup layer_'+clas+'" data-class="'+clas+'">'
	            +'<div class="deem"></div>'
	            +'<div class="popup_wrap">'
	            +'<div class="inner2">'
	            +'<div class="scroll_box">'
	            +'<ul class="' + text + ' btn_layer_sel swiper-wrapper">'
	
	        for(var i= 0, len=$sel_cal.find('option').length; i<len; i++){            
	            htm+='<li><button data-val="'+$sel_cal_data_v[i]+'">'+$sel_cal_data_t[i]+'</button></li>'
	        }
	
	        htm+='</ul>'
	            +'</div>'
	            +'</div>'
	            +'</div>'
	            +'</div>';
        

        return htm;
    }
}
$('.selectdata').length && selectChange.init();

/* input check */
var inpck = {
    init:function(){
        this.$btn = $('input[type="radio"].ck');
        this.act();
    },
    act:function(){

        var _this = this;

        $(document).on('change','input[type="radio"].ck',function(){

            var $this = jQuery(this);
            var $index = $this.parent().parent().index();

            if($this.is(':checked')){
                $this.parent().parent().children().removeClass('active on');
                $this.parent().addClass('active on');
            }
            if(!$this.is(':checked')){
                $this.parent().parent().children().removeClass('active on');
                $this.parent().removeClass('active on');
            }

        });

        $(document).on('change','input[type="checkbox"].ck',function(){

            var $this = jQuery(this);
            var $index = $this.parent().parent().index();

            if($this.is(':checked')){
                $this.parent().parent().children().removeClass('active on');
                $this.parent().addClass('active on');
            }
            if(!$this.is(':checked')){
                $this.parent().parent().children().removeClass('active on');
                $this.parent().removeClass('active on');
            }

        });
    }
    
}
jQuery('input.ck').length && inpck.init();

/* 주소찾기 스크립트 */
var adressFind = {
    init:function(){
        this.$wrap = $('.address_use_wrap');
        this.$tg = this.$wrap.find('.address_area');
        this.$btn = this.$wrap.find('.tap_div2 li');
        this.$btn_ser1 = this.$wrap.find('.btn_adderss_search1');
        this.$btn_confirm1 = this.$wrap.find('.btn_validation1 button');
        this.$btn_ser2 = this.$wrap.find('.btn_adderss_search2');
        this.$btn_confirm2 = this.$wrap.find('.btn_validation2 button');
        this.ser_inp1 = this.$wrap.find('.ser_inp1');
        this.adr_inp1 = this.$wrap.find('.adr_inp1');
        this.ser_inp2 = this.$wrap.find('.ser_inp2');
        this.adr_inp2 = this.$wrap.find('.adr_inp2');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){

            var $this = jQuery(this);
            var $index = $this.index();

                _this.$btn.removeClass('active');
                $this.addClass('active');
//                _this.$tg.hide();
//                _this.$tg.eq($index).show();

        });

//        this.$btn_ser1.on('click',function(){
//            var $this = jQuery(this);
//
//            if(_this.ser_inp1.val() === ''){
//                alert('검색어 입력')
//            }else{
//                $this.closest('.search_area').next().show();
//                $this.closest('.search_area').next().next().hide();
//            }
//        });

        this.$btn_confirm1.on('click',function(){
            var $this = jQuery(this);

            if(_this.adr_inp1.val() === ''){
                alert('주소 입력')
            }else{
                $this.closest('.result_area').hide();
                $this.closest('.result_area').next().show();
            }
        });

//        this.$btn_ser2.on('click',function(){
//            var $this = jQuery(this);

//            if(_this.ser_inp2.val() === ''){
//                alert('검색어 입력')
//            }else{
//                $this.closest('.search_area').next().show();
//                $this.closest('.search_area').next().next().hide();
//            }
//        });

        this.$btn_confirm2.on('click',function(){
            var $this = jQuery(this);

            if(_this.adr_inp2.val() === ''){
                alert('주소 입력')
            }else{
                $this.closest('.result_area').hide();
                $this.closest('.result_area').next().show();
            }
        });

    }
    
}
jQuery('.address_use_wrap').length && adressFind.init();

/* layer_full */
var layerFind = {

    addressFind: function(obj){
        var _this = this;
        
        $(document).on('click','button.'+obj,function(){
            var $this = jQuery(this);
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);

                if(type === 'full'){
                    //주소찾기 - 개발용 
                	$addrWrap = $('.'+$layer);  
//                	openPopAddrFindMobile('receiver_zipcode1', 'receiver_zipcode2', 'receiver_base_addr', 'receiver_dtl_addr', 'receiver_txt', 'turn_zipcode', 'turn_base_addr', 'turn_dtl_addr', 'new_addr_yn');
//                	  var h1 = $(window).scrollTop();
//                    $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
//                    $('.'+$layer).attr('data-height',h1)
                    //주소찾기 - 개발용
                }else if(type === 'thin'){
                    var h2 = $(window).scrollTop();
                    $('.'+$layer).show().find('.popup_wrap').css('top', h2 + "px");
                }

        });

        $(document).on('click','.btn_close_adress',function(e){
            var $this = jQuery(this);
            $this.closest('.layer_popup').hide().find('.popup_wrap');
            
            if($this.closest('.layer_popup').hasClass('layer_full')){
                
                var h1 = $this.closest('.layer_popup').attr('data-height');
                $('body').scrollTop(h1);
            }
            e.preventDefault();
        });

    }

}
$('.layer_address_wrap').length && layerFind.addressFind('btn_full_address');

/* 히스토리 */
var historyFun = {
    init:function(){
        
        this.$switch = $('.btn_history');
        this.$switchTab = $('.btn_history_tab');
        this.$sideWrap = $('.layer_history');
        this.layerMore = $('.layer_more');
        this.$inner = this.$sideWrap.find('.layer_area')
        this.$dim = this.$sideWrap.find(".deem");
        this.$close = this.$sideWrap.find(".btn_close");
        this.$tabItem = $('.his_tab_filter li');
        this.$tabCon = $('.his_tab_filter_con')
        this.$reset = this.$sideWrap.find('.btn_reset_wrap');
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
        
        this.$switchTab.on('click', function(e){ 
        	var $this = jQuery(this);
        	_this.$sideWrap.show();
        	_this.opened? _this.close() : _this.open(); 
        	e.preventDefault();
        });

        this.$tabItem.on('click', function(){
          _this.viewTab(this);
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

    },    
    
    viewTab: function(target){
        var idx = $(target).index();    
        
        //개발용 
        if(idx == 0) {
        	//최근본 상품
        	this.$tabItem.removeClass('active').eq(idx).addClass('active');
        	this.$tabCon.hide().eq(idx).show();
        } else {
        	//최근 활동내역 
        	getActionHistory(idx);
        }
    },
    
    open: function(){
        this.opened = true;
        this.bodyFreezing();
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(0, 0, 0)'});
        this.$tabCon.height(this.wh - $('.his_head').height() - $('.his_tab_filter').height() - $('.serach_area').height());
        this.$dim.fadeIn('fast');
        this.$reset.fadeIn(500);
    },
    
    close: function(){
        this.opened = false;
        this.bodyUnfreezing();
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(100%, 0, 0)'});
        this.$dim.fadeOut('fast');
        this.$reset.hide();
        this.layerMore.hide();
        blurMore.removeActive();
    },
    toggle: function() {
    	 var _this = this;
         var $this = jQuery(this);
         _this.$sideWrap.show();
         _this.opened? _this.close() : _this.open(); 
    },
    bodyFreezing: function(){
//        this.$wrap.css({'height': this.wh + 'px'});
    }, 
    
    bodyUnfreezing: function(){
//        this.$wrap.css({'height': 'auto'});
    }
}
$('.layer_history').length && historyFun.init();

var histroyBack = {
    init:function(){
//        $('.foot_btn_ara .btn_back').on('click',function(){
//            history.back(-1); 
//        });

       $('.foot_btn_ara .btn_top').on('click',function(){
    	   $('body,html').animate({
				scrollTop: 0
			}, 300);
//            location.href = 'javascrit:;';
        });
    }
    
}
$('.foot_btn_ara').length && histroyBack.init();

var cateMore = {
    init:function(){
        this.$wrap = $('.quick_link_area');
        this.$btn_more = this.$wrap.find('li:last');
        this.$tg = this.$wrap.find('.the_area');
        this.$close = this.$wrap.find('.btn_door');
        this.act();

    },
    act:function(){

        var _this = this;

        this.$btn_more.on('click',function(){
            _this.$tg.show();
        });

        this.$close.on('click',function(){
            _this.$tg.hide();
        });

    }
}
$('.quick_link').length && cateMore.init();

/* 찜 버튼 */
/*공통작업으로 변경되어 주석처리*/
/*var widshLayer = {
    init: function(){

        this.$btn = $('.btn_wish_open');
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
$('.btn_wish_open').length && widshLayer.init();
*/
/* layer_full */
var layerFull = {

    addEvent: function(obj){
        var _this = this;
        
        $(document).on('click','.'+obj,function(){
            var $this = jQuery(this);
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);
            
            	var mainTabCode = $("#tabForm input[name='mainTabCode']").val();
            	var mall_div = $("#mall_div_40").val();
            	
	            //개발용
	            if(mainTabCode == '40'){
	            	$(".depth_type1").hide();
	            	$(".depth_type2").show();
				
	            	if(mall_div == "AKMall"){
						$(".depth_type2 #AKMCtg").show();
						$(".depth_type2 #AKPCtg").hide();
					}else if(mall_div == "AKPlaza"){
						$(".depth_type2 #AKPCtg").show();
						$(".depth_type2 #AKMCtg").hide();
					}else{
						$(".depth_type2 #AKPCtg").show();
						$(".depth_type2 #AKMCtg").show();
					}
	           	  
	            } else if(mainTabCode == '60'){
	            	
	            	$(".depth_type1").hide();
	            	$(".depth_type2").show();
	            	$(".depth_type2 #AKPCtg").show();
					$(".depth_type2 #AKMCtg").show();
					
	            } else if(mainTabCode == 20) {
	          	  
					$(".depth_type3").show();
					$(".depth_type1").hide();
					$(".depth_type2").hide();
					
					
	            
	            } else if(mainTabCode == 70) {
		          	  
	            	$(".depth_type2").hide();
	            	$(".depth_type1").show();
	            	$(".depth_type3").hide();
		          	  
	            	$(".AKPCtg_6").hide();
	            	$(".AKPCtg_200204").hide();
	            	
		        } else{

		        	$(".depth_type2").hide();
					$(".depth_type1").show();
					$(".depth_type3").hide();
					
					$(".AKPCtg_6").show();
					$(".AKPCtg_200204").show();
					
	            }
            
                if(type === 'full'){
                    var h1 = $(window).scrollTop();
                    $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
                    $('.'+$layer).attr('data-height',h1)
                }else if(type === 'thin'){
                    var h2 = $(window).scrollTop();
                    $('.'+$layer).show().find('.popup_wrap').css('top', h2 + "px");
                }

        });

        $(document).on('click','.btn_close_link',function(e){
            var $this = jQuery(this);
            $this.closest('.layer_popup').hide().find('.popup_wrap');
            
            if($this.closest('.layer_popup').hasClass('layer_full')){
                
                var h1 = $this.closest('.layer_popup').attr('data-height');
                $('body').scrollTop(h1);
            }
            e.preventDefault();
        });

    }

}
$('.layer_link_wrap').length && layerFull.addEvent('btn_full_link');
$('.layer_cate_wrap').length && layerFull.addEvent('btn_full_cate');

/* sns layer */
var snsLayer = {
    init:function(){
        this.$btn = $('.btn_layer_share');
        this.$tg = $('.layer_pop_share');
        this.$close = this.$tg.find('.btn_pop_close');
        this.act();
    },
    act:function(){

        var _this = this;

        $(document).on('click','.btn_layer_share',function(){
            var $this = jQuery(this);
            _this.$tg.show(); 
        });

        $(document).on('click','.layer_pop_share .btn_pop_close',function(e){
            var $this = jQuery(this);
            $this.closest('.layer_pop_share').hide();
        });
        $(document).on('click','.layer_pop_share .btn_black_one',function(e){
        	var $this = jQuery(this);
        	$this.closest('.layer_pop_share').hide();
        });
        
    }    
}
jQuery('.layer_pop_share').length && snsLayer.init();

/* loding layer */
var lodingIng = {
    start:function(){

        this.$tg = $('.layer_loding_wrap');
        this.$tg.show();

    },
    end:function(){

        this.$tg = $('.layer_loding_wrap');
        this.$tg.hide();
        
    }    
}

/* 더보기 */
var moreLayer = {
    init:function(){
        this.$btn = $('.foot_btn_ara .btn_more');
        this.$tg = $('.layer_more');
        this.$close = this.$tg.find('.btn_more');
        this.$close2 = this.$tg.find('.deem');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            _this.$tg.show(); 
            blurMore.addActive();
        });

        this.$close.on('click',function(e){
            var $this = jQuery(this);
            _this.$tg.hide();
            blurMore.removeActive();
        });

        this.$close2.on('click',function(e){
            var $this = jQuery(this);
            _this.$tg.hide();
            blurMore.removeActive();
        });

    }    
}
jQuery('.layer_more').length && moreLayer.init();

var blurMore = {
    addActive:function(){
        this.$blur1 = $('footer');
        this.$blur2 = $('.container');
        this.$blur3 = $('header');
        this.$blur4 = $('.quick_link_area');
        this.$blur5 = $('.foot_btn_ara');

        this.$blur1.addClass('active');
        this.$blur2.addClass('active');
        this.$blur3.addClass('active');
        this.$blur4.addClass('active');
        this.$blur5.addClass('active');
    },
    removeActive:function(){
        this.$blur1 = $('footer');
        this.$blur2 = $('.container');
        this.$blur3 = $('header');
        this.$blur4 = $('.quick_link_area');
        this.$blur5 = $('.foot_btn_ara');

        this.$blur1.removeClass('active');
        this.$blur2.removeClass('active');
        this.$blur3.removeClass('active');
        this.$blur4.removeClass('active');
        this.$blur5.removeClass('active');
    }
}

/* 레이어 팝업 deem 클릭시 닫기 */
$(document).on('click','.deem',function(){
    $(this).closest('.layer_popup').hide();
    $('body').css('overflow','auto').off('touchmove');
});

/* 이미지 맵 함수 */
$('map').length && $('map').imageMapWeaver();

