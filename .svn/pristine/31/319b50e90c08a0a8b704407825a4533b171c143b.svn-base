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

/* 혜택 열고닫기 */
var benefitOnoff = {
    init:function(){
        this.$btn = $('.benefit_info dt');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
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
jQuery('.benefit_info').length && benefitOnoff.init();

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
//jQuery('.cate_img_type').length && snsOnOff.init('cate_img_type');
//jQuery('.cate_deal_type').length && snsOnOff.init('cate_deal_type');

/* 상품평 탭 */
var reviewsTab = {
    init:function(){
        this.$btn = $('.reviews_list_new li');
        this.$tg = $('.reviews_con');
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
            // 개발용
            $("#srchOrderDirection").val(1);
			$("#srchOrderKey").val(1);
			//개발용
        });
    }
}
$('.reviews_list_new').length && reviewsTab.init();

/* 상품평 열고닫기 */
var reviewOnoff = {
    init:function(){
        this.$btn = $('.premium_list dt');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
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
        });

    }    
}
jQuery('.premium_list').length && reviewOnoff.init();

/* qna 열고닫기 */
var qnaOnoff = {
    init:function(){
        this.$btn = $('.ans_complete dt a');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.parent().hasClass('ans_open')){
                $this.parent().addClass('ans_open');
                $this.next().show();
                checkHight.init();

            }else if($this.parent().hasClass('ans_open')){
                $this.parent().removeClass('ans_open');
                $this.next().hide();
                checkHight.init();
            }
        });

    }    
}
jQuery('.ans_complete').length && qnaOnoff.init();

/* 높이값 체크 */
var checkHight = {
	init:function(){
		var h = $('.detail_wrap.swiper-slide-active .height_check').outerHeight();
		/* [D] 2017.1.04 +46 제거 */ 
        $('.swiper-main').css('height',h)
    }
}

/* 높이값 체크 */
var checkHight2 = {
    init:function(){
        var h = $('.sw_layer.swiper-slide-active .height_check').outerHeight();
        $('.swiper-deal').css('height',h).css('overflow','hidden');
    }
}

/* detail layer */
var layerFull = {
    
    addEvent: function(obj){
        var _this = this;
        
        $(document).on('click','.'+obj,function(e){
//        	if($('.'+obj).hasClass("login_true") && $("#hasLogin").val() == 'N') {
//        		if(confirm('해당 상품은 로그인후 구매 가능합니다.\n로그인 하시겠습니까?')) {
//					window.location.href = "/login/Login.do?goUrl=" + encodeURIComponent(window.location.href);
//				}else {
//					return false;
//				}
//        	}
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
                //개발용
                if(obj == 'btn_full_premium') {
                	$(".premium_img").remove();
                	$(".premium_detail").hide();
                	if(! $this.hasClass('img_detail_btn_flag')){
                		goPageMoveMobileImage(1)
                	}
                }
                //개발용
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
            //개발용
            if($this.attr("id")=="pickCancle"){
            	if("${goodsDetail.smart_pick_yn}" != "P" ){
    				$("#opt_smart_pick_yn").attr("checked",false);
    			}
            }
            //개발용
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
	
	,show : function() {
	
	    var $layer = 'layer_premium_wrap'; 
	        var h1 = $(window).scrollTop();
	        $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
	        $('.'+$layer).attr('data-height',h1);
	        setTimeout(function(){
	            jQuery('.detail_wrap').length && swiperPw.init();
	        },20);
	   }

} 
$('.layer_calculator_wrap').length && layerFull.addEvent('btn_full_calculator');
$('.layer_sale_wrap').length && layerFull.addEvent('btn_thin_sale');
$('.layer_div_wrap').length && layerFull.addEvent('btn_thin_div');
$('.layer_sale_wrap').length && layerFull.addEvent('btn_thin_mileage');
$('.layer_cup_wrap').length && layerFull.addEvent('btn_full_cup');
$('.layer_pickinfo_wrap').length && layerFull.addEvent('btn_thin_pickinfo');
$('.layer_rental_wrap').length && layerFull.addEvent('btn_thin_rental');
//$('.layer_picksel_wrap').length && layerFull.addEvent('btn_thin_picksel');
$('.layer_sms_wrap').length && layerFull.addEvent('btn_full_sms');
$('.layer_fw_wrap').length && layerFull.addEvent('btn_full_fw');
$('.layer_join_wrap').length && layerFull.addEvent('btn_full_join');
$('.layer_joinsimple_wrap').length && layerFull.addEvent('btn_full_joinsimple');
$('.layer_namecard_wrap').length && layerFull.addEvent('btn_full_namecard');
$('.layer_premium_wrap').length && layerFull.addEvent('btn_full_premium');
$('.layer_premium_wrap').length && layerFull.addEvent('btn_full_premium2');//개발용
$('.layer_fw2_wrap').length && layerFull.addEvent('btn_full_fw2');
$('.layer_applecare_wrap').length && layerFull.addEvent('btn_full_applecare');
//$('.layer_deal_wrap').length && layerFull.addEvent('btn_full_deal');
//$('.layer_phone_wrap').length && layerFull.addEvent('btn_full_phone');
/* detail layer */
var layerInput = {
    
    addEvent: function(obj){
        var _this = this;
        
        $(document).on('change','.'+obj,function(){
            var $this = jQuery(this);
            var $layer = 'layer_'+obj.substr(obj.lastIndexOf('_')+1)+'_wrap'; 
            var type = obj.substr(4,4);


            if(type === 'full'){
                var h1 = $(window).scrollTop();
                $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
                $('.'+$layer).attr('data-height',h1)
            }else if(type === 'thin'){
                var h2 = $(window).scrollTop();
                $('.'+$layer).show().find('.popup_wrap').css('top', h2 + "px");
            }

        });

        $(document).on('click','.btn_pop_close',function(e){
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

/* 파워딜 바로담기 */
var dealCart = {
    init:function(){
        this.$btn_open = $('.btn_deal_push');
        this.$btn_soon = $('.btn_buy_soon');
        this.$btn_frist = $('.btn_first');
        this.$tg = $('.drop_box');
        this.$opt_selected_box = this.$tg.find('.op_box_area');
        this.$opt_type3 = this.$tg.find('.opt_type3');
        this.$opt_type4 = this.$tg.find('.opt_type4');
        this.$layer_box = $('.layer_opt');
        this.$opt_box = $('.opt_sel_box');
        this.$total_price = this.$tg.find('.price_area_total');
        this.$scroll_max = $('.scroll_area');
        
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn_open.on('click',function(e){
            var $this = jQuery(this);

            _this.$btn_frist.hide();
            _this.$btn_soon.show();
            _this.$tg.show();
            _this.$layer_box.addClass('on');
            _this.$layer_box.parent(".drop_box_area").addClass('active');

            var $qt = $this.attr('data-qt');
            var $code = $this.attr('data-code');

            if(_this.checkData($code) >= 0){
            
            }else if(_this.checkData($code) === -1){
                _this.$opt_selected_box.prepend(_this.optBox($code,$qt));
                setTimeout(function(){
                    _this.$opt_selected_box.find('.op_box:first').addClass('active');
                },10);
                _this.$total_price.show();
                _this.$scroll_max.addClass('max');
                
            }

         e.preventDefault();
            
        });

    },
    optBox:function(code,qt){
        var htm = ''
        +'<div class="op_box deal" data-qt="' + qt + '" data-code="' + code + '">'
        +'<img src="../resources/images/detail/test_img10.png" alt="">'
        +'<p class="op_tit">'
        +'<strong>영옥이 가을여신 만들어줄 여신 니트 갖고싶으다.영옥이 가을여신 만들어줄 여신 니트 갖고싶으다.</strong>'
        +'<span>사선 꽈배기 니트</span>'
        +'</p>'
        +'<div class="prd_amount">'
        +'<button class="minus"><em class="blind">빼기</em></button>'
        +'<input type="number" value="1" title="수량">'
        +'<button class="plus"><em class="blind">더하기</em></button>'
        +'<span>98,900 <i>원</i></span>'
        +'</div>'
        +'<button class="del"><em class="blind">삭제</em></button>'
        +'</div>';
        return htm;
    },
    checkData:function(obj){

        var $box = this.$opt_selected_box.find('.op_box');
        var len = $box.length;
        var $arr = [];

        for(var i= 0; i<len; i++){  
            $arr[i] = $box.eq(i).attr('data-code');
        }

        var $reuslt = $.inArray(obj,$arr);

        return $reuslt;
    }
}
//jQuery('.btn_deal_push').length && dealCart.init();

//[D]2017.01.03 스크롤 추가
var opt_scroll_set = {
    init:function(target){
        var scroll_option = {
        		scrollX: false,
        	    scrollY: true,
        	    //probeType: 1,
        	    tap: true,
        	    //click: false,
        	    preventDefaultException: {
        	        tagName: /.*/
        	    },
//        	    mouseWheel: true,
        	    scrollbars: true,
//        	    fadeScrollbars: true,
//        	    interactiveScrollbars: true,
//        	    deceleration: 0.001,
        	    disablePointer: true, // important to disable the pointer events that causes the issues
        	    disableTouch: false, // false if you want the slider to be usable with touch devices
        	    disableMouse: false // false if you want the slider to be usable with a mouse (desktop)
        }
        if(this.targetId == target){
            setTimeout(function() {
                opt_scroll_set.scroll.refresh()
            },0)
        }else{
            this.targetId && this.scroll.destroy();this.scroll = null;
            this.scroll = new IScroll(target, scroll_option);
            this.targetId = target
        }
//        $(document).on('touchmove scroll',function(e){e.preventDefault();});
        document.addEventListener('touchmove', handleTouchMove, isPassive() ? {
         	//capture: false,
         	passive: false
        } : false);
    }
}  

var handleTouchMove = function(e) { 
	e.preventDefault();
}
function isPassive() {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}
    return supportsPassiveOption;
}
//[D]2017.01.03 스크롤 추가
var optdetail_scroll_set = {
    init:function(target){
        var scroll_option = {
             preventDefaultException: {tagName:/.*/},
            scrollX:false,
            scrollY:true,
            scrollbars:false,
            tab: true,
            disablePointer: true, // important to disable the pointer events that causes the issues
    	    disableTouch: false, // false if you want the slider to be usable with touch devices
    	    disableMouse: false // false if you want the slider to be usable with a mouse (desktop)
        }
        this.scroll && this.scroll.destroy();this.scroll = null;
        this.scroll = new IScroll(target, scroll_option);
    }
}
//[D]2017.01.03 스크롤 추가
var optdetail2_scroll_set = {
    init:function(target){
        var scroll_option = {
            preventDefaultException: {tagName:/.*/},
            scrollX:false,
            scrollY:true,
            scrollbars:false,
            tab: true,
            disablePointer: true, // important to disable the pointer events that causes the issues
    	    disableTouch: false, // false if you want the slider to be usable with touch devices
    	    disableMouse: false // false if you want the slider to be usable with a mouse (desktop)
        }
    	this.scroll && this.scroll.destroy();this.scroll = null;
        this.scroll = new IScroll(target, scroll_option);
    }
}
//[D]2017.01.03 스크롤 추가
var opt_height = {
    init:function(){
//    	if($("#noOptionFlag").length > 0){ //nooption
//    	}else{

//    	if($(".npick").length > 0) 
//    	if($("#noOptionFlag").length > 0)
//    		var sh = window.innerHeight - def_top - def_bot - 68;//[D]2017.01.10 계산 추가
//    	else
    	
    	 var sh = window.innerHeight/100 * 60;//[D]2017.01.10 계산 추가
         var def_bot = $('.fixed_area').outerHeight(true);
         var def_top = $('.scroll_area > div').outerHeight(true);
         var box = sh - def_top - def_bot -68;
         var box2 = sh - def_bot - 68;
//         
//    		var sh = window.innerHeight - $(".drop_box_area.active").height();//[D]2017.01.10 계산 추가
//    		var def_bot = $('.fixed_area').outerHeight(true);
//    		var def_top = $('.scroll_area > div').outerHeight(true);
//            var box = sh - def_top - def_bot -68;
//            var box2 = sh - def_bot - 68;
//
//            if($(".npick").length > 0) {
//            	//$(".drop_box_area.active").height(231);
//            	sh = box+46;
//            	sh = box+46;
//            }
           
         	//동적으로 옵션 높이 수정
         	if($("#noOptionFlag").length > 0){
	         	var dy_height = 199;
	         	if($(".npick").length > 0) dy_height += 45; 
	         	if($(".buy_max_qty_once").length > 0) dy_height += 16; 
	         	if($(".ord_avail_max_qty").length > 0) dy_height += 32; 
//	         	if($(".opt_type2").length > 0) dy_height += 20; 
				var sheet = document.createElement('style');
				var sheet_str = ".drop_box_area.active {height: "+dy_height+"px;}";
				var head = document.head || document.getElementsByTagName('head')[0];
					sheet.type='text/css';
				if (sheet.styleSheet) {
					sheet.styleSheet.cssText=sheet_str;
				}
				else {
					sheet.appendChild(document.createTextNode(sheet_str));
				}
				head.appendChild(sheet);﻿ 
         	}
            $('body').css('overflow','hidden')
            

            if($('.opt_layer .sel_op').length){
                $('.opt_layer .sel_op').css({'height':sh -110+'px','overflow':'hidden'});
            }

            if($('.opt_layer .add_op').length){
                $('.opt_layer .add_op').css({'height':sh -110+'px','overflow':'hidden'});
            }

            if($('.opt_layer .sel_op_img').length){
                $('.opt_layer .sel_op_img').css({'height':sh -110+'px'});
            }

            if($('.opt_layer .sel_op2').length){
                $('.opt_layer .sel_op2').css({'height':sh -170+'px'});
            }
            //[D]2017.01.05 스크롤 추가 
            if(box > 100 && $('.selected_scroll_wrap').length){
                $('.all_scroll_wrap').css('height','auto')
                $('.all_scroll_wrap').children().removeAttr('style')
                $('.selected_scroll_wrap').css({'height':box+'px'});
                opt_scroll_set.init('.selected_scroll_wrap')
            }else if(box <= 100 && $('.selected_scroll_wrap').length){
                $('.selected_scroll_wrap').css('height','auto')
                $('.selected_scroll_wrap').children().removeAttr('style')
                $('.all_scroll_wrap').css({'height':box2+'px'});
                opt_scroll_set.init('.all_scroll_wrap')
            }else if(!$('.selected_scroll_wrap').length){
                $('.all_scroll_wrap').css({'height':box2+'px'});
                opt_scroll_set.init('.all_scroll_wrap')
            }
//    	} 
    }
}   
//[D]2017.01.03 스크롤 추가
$(window).resize(function(){
    if($('.drop_box_area.active').length){
         opt_height.init();
        setTimeout(function(){
            opt_scroll_set.targetId && opt_scroll_set.scroll.refresh()
            optdetail_scroll_set.targetId && optdetail_scroll_set.scroll.refresh()
            optdetail2_scroll_set.targetId && optdetail2_scroll_set.scroll.refresh()
        },500)
    }
})

/* option select */
var optionSelect = {
    init:function(){
        if(($("#isAkApp").val() != "" && $("#isAkApp").val() != "N") || siteCode == 'MFDS') {
    		this.$btn_open = $('.btn_open_option');
    	}else{
    		this.$btn_open = $('.btn_open_option2');
    	}
    	
        this.$btn_soon = $('.btn_buy_soon');
        this.$tg = $('.drop_box');
        this.$close = $('.btn_door');
        
        this.$opt_box_wrap = $('.attr_box');
        this.$opt_box = $('.opt_sel_box');
        this.$add_box = $('.add_box');
        this.$alarm = this.$opt_box_wrap.find('.quantity');

        this.$opt_selected_box = this.$tg.find('.op_box_area');
        this.$total_price = this.$tg.find('.price_area_total');
        this.$opt_type2 = this.$tg.find('.opt_type2');
        this.$opt_type3 = this.$tg.find('.opt_type3');
        this.$opt_type4 = this.$tg.find('.opt_type4');
        this.$opt_type5 = this.$tg.find('.opt_type5');
        this.$opt_type6 = this.$tg.find('.opt_type6');
        
        this.$layer_detal = $('.deal_opt dd button');
        this.$layer_detal_tit = $('.deal_opt dt');
        this.$layer_del = $('.deal_prod .btn_del'); 
        
        this.$layer_box = $('.layer_opt');
        this.$opt_layer = $('.opt_layer');
        this.$scroll_max = $('.scroll_area');

        this.act();
        this.plus();
        this.minus();
        this.changeInput();
        this.del();
        
    },
    act:function(obj){

        var _this = this;

        var slider = $('.chanel_slide').bxSlider({  
            infiniteLoop:false,
            controls:false
        });

        var _slider = slider; 

        this.$btn_open.on('click',function(){
        	//개발용
        	if($("[name='ord_opt_group_code']").length == 0) {
        		
        		var $this = jQuery(this);
        		
        		//파워딜경우
        		if($this.hasClass('btn_deal_opt')){
        			//자세히 보기 팝업인경우 
        			if($(".layer_deal_wrap").css("display") == "block") {
        				var goodsId = $(".sw_layer.swiper-slide-active").find(".goods_contents").attr("data-goodsid"); 
        				if(goodsId == undefined) {
        					setTimeout(function() {
        						
        						$(".btn_deal_opt").click();
        					}, 100);
        				} else {
        					selGoodsDirectBtn($('.thumbParents.'+goodsId).data('value'));
        				}
        				return false;
        			}
        			if($(".op_box_area").find("div").length == 0) {
        				$('.layer_opt').addClass('active');
        				$(".deal_opt").show();
        				//[D]2017.01.03 스크롤 추가
                        optdetail_scroll_set.init('.op_scroll_wrap');
        			}
                }
        		
        		optionSelect.$close.addClass("active");
        		$(".drop_box_area").addClass('active'); 
        		
                $this.closest('.btn_first').hide();
                _this.$btn_soon.show();
                _this.$tg.show().addClass("active");
                opt_height.init();
              //[D]2017.01.03 스크롤 추가
                
                if($("#noOptionFlag").length > 0) {
                	
                	_this.$total_price.show();
                	_this.$scroll_max.addClass('max');
                	calculateGoods();
                }
                
                if(_this.$opt_type2.length || _this.$opt_type5.length){
//                    _this.$opt_box.parent().addClass('on');
                }
                
                _this.$layer_box.addClass('on');
                if(_this.$opt_type3.length && _this.$opt_selected_box.find('div').length === 0){
                    _this.$layer_box.addClass('active');
//                    _this.$layer_box.addClass('on');
                    _this.$opt_box.eq(0).show();
                    //[D]2017.01.03 스크롤 추가
                    optdetail_scroll_set.init('.op_scroll_wrap');
                }
                if(_this.$opt_type4.length){
                    _slider.reloadSlider();
                }
        	}
            //개발용
        });
        
        this.$close.on('click',function(e){
        	
        	var $this = jQuery(this);

            if(!_this.$tg.hasClass('active')){
            	_this.$btn_open.trigger("click");
                
            }else if(_this.$tg.hasClass('active')){
                _this.$tg.hide();
                _this.$tg.removeClass('active');
                _this.$btn_soon.hide();
                _this.$btn_open.closest('.btn_first').show();
                
                if(_this.$opt_type2.length || _this.$opt_type5.length){
                    _this.$layer_box.removeClass('on active');
                }
                if(_this.$opt_type3.length && _this.$opt_selected_box.find('div').length === 0){
                    _this.$opt_box.eq(0).hide();
                    _this.$layer_box.removeClass('active');
                }
                if(_this.$opt_type3.length && _this.$opt_selected_box.find('div').length > 0){
                    _this.$layer_box.removeClass('active on');
                }
                
                //개발용
	            _this.$opt_box.eq(0).hide();
	            $(".drop_box_area").removeClass('active');
	            $('.opt_layer').hide(); 
	            $this.removeClass("active");
	            $('body').css('overflow','auto').off('touchmove');
	            $(document).off('touchmove scroll');
	            document.removeEventListener('touchmove', handleTouchMove);
            }
        });

    },
    optSel1:function(){

        var _this = this;
        var len = this.$opt_box.length;

        /* start 초기 데이터 배열 및 리셋 배열 */
        var rcopy=[];
        var $sel_cal= $('.hid_sel');
        if($sel_cal.find('option').length){
            for(var i= 0; i<len; i++){  
                rcopy[i] = $sel_cal.eq(i).html().replace(/option/g,'button');
            }
        }
        for(var i= 1; i<len; i++){  
            this.$opt_box.eq(i).find('dd:first').empty().append(rcopy[i]);
        }
        /* end 초기 데이터 및 리셋 배열 */

        this.$opt_box_wrap.on('click','button',function(){
            
            var $this = jQuery(this);
            var $pindex = parseInt($this.closest('dl').index()+1);

            /* 품절상품 체크 */
            if($this.hasClass('end')){
            }else if($this.hasClass('start')){
            }else{

                /* 인덱스 값 체크후 append */
                if($pindex===1){
                    $('.hid_'+parseInt($pindex+1)).empty()
                    _this.$opt_box.eq($pindex+1).find('dd:first').empty().append(rcopy[$pindex+1]);
                    $('.hid_'+$pindex).empty().append(_this.selectAppend1());
                }

                if($pindex===2){
                    $('.hid_'+$pindex).empty().html(_this.selectAppend2());
                }

                _this.$opt_box.eq($pindex).find('dd:first').empty().append(_this.itemCopy($pindex));
                $this.closest('dl').find('button').removeClass('on');
                $this.addClass('on');
                _this.$alarm.hide();

                /* 마지막 옵션 선택시 if */
                if($pindex === len){
                   
                   /* 품절임박 조건 */
                    var $qt = $this.attr('data-qt');
                    _this.$alarm.show();
                    _this.$alarm.find('i').hide();
                    if($qt < 100){_this.$alarm.find('i').show();}
                    _this.$alarm.find('em').text($qt);

                    /* 옵션추가 조건 */
                    var $code = $this.attr('data-code');
                    if(_this.checkData($code) >= 0){
                        //이미고른상품;
                    }else if(_this.checkData($code) === -1){
                        _this.$opt_selected_box.append(_this.optBox($code,$qt));
                        _this.$total_price.show();
                        _this.$scroll_max.addClass('max');
                        //상품추가;
                    }
                }
            }
            
        });
    },
    optSel2:function(){ 
        var _this = this;
        var len = $('.opt_sel_box').length;

        /* start 초기 데이터 배열 및 리셋 배열 */
        var rcopy=['옵션명1 선택','옵션명2 선택','옵션명3 선택','옵션명4 선택'];

        this.$opt_type2.on('click','button',function(){
            var $this = jQuery(this);
            var $index = parseInt($this.closest('li').index());
            if($this.hasClass('on')){
            	$('.opt_sel_box').hide();
            	$('.opt_sel_box').eq($index).show();
            	$('.opt_sel_box').parent().addClass('active');
            	
            	opt_height.init();
            	
            	if($this.closest('.opt_selected').length){
            		optdetail2_scroll_set.init($('.opt_sel_box').eq($index).find('.sel_op')[0])
            	}else{
            		//[D]2017.01.03 스크롤 추가
                    optdetail_scroll_set.init(_this.$opt_box.eq($index).find('.sel_op')[0])
            	}
            	
            }
        });
        
        this.$opt_type5.find('.add').on('click',function(){
            var $this = jQuery(this);
            var $index = parseInt($this.closest('li').index());
            	 
                _this.$add_box.hide();
                _this.$add_box.eq($index).show();
                _this.$add_box.parent().addClass('active');
                
                //[D]2017.01.03 스크롤 추가
                optdetail_scroll_set.init(_this.$add_box.eq($index).find('.add_op')[0])
        });
        
        this.$add_box.find('dt').on('click',function(){
            var $this = jQuery(this);
            $this.closest('.add_box').hide();
            $this.closest('.layer_opt').removeClass('active');
        });
        
        this.$add_box.on('click','button',function(){
            
            var $this = jQuery(this);

            if($this.hasClass("search_del")) {
            	$this.parent().find("input").val("").trigger("keyup");
            	return false;
            }

            /* 품절상품 체크 */
            if($this.hasClass('end')){
            }else{
            	
            	var parentId = $this.parents(".add_box").attr("id");
            	var pIndex = $this.parents(".add_box").attr("data-index");
            	var selVal = $this.attr("data-value");
            	var setTxt = $.trim($this.find("strong").text());
            	
            	$("#add" + parentId).val(selVal);
            	$(".opt_type5 li").eq(pIndex).find("button").text(setTxt);
            	$this.closest('.add_box').hide();
            	calculateGoods();
            	return false
            	
            }
            
        });
        
        $(document).on('click','.opt_sel_box dt',function(){
            var $this = jQuery(this);
            $this.closest('.opt_sel_box').hide();
            $this.closest('.layer_opt').removeClass('active');
        });

        $(document).on('click','.opt_sel_box button',function(){
            
            var $this = jQuery(this);
            var $clost = $this.closest('.opt_sel_box');
            var $pindex = parseInt($clost.index()+1);
            
            if($this.hasClass("search_del")) {
            	$this.parent().find("input").val("").trigger("keyup");
            	return false;
            }
            
            /* 품절상품 체크 */
            if($this.hasClass('end')){
            	//품절
            } else if($this.hasClass('start')){
                //초기세팅
            }else{

                var $text = $this.text();
                
                $this.addClass('on');
                $clost.hide();
                //개발용
                _this.$opt_type2.find('li:gt(' + $pindex + ')').children().removeClass('on');
                //개발용
                _this.$opt_type2.find('li').eq($pindex).children().addClass('on');
                _this.$opt_type2.find('li').eq($pindex-1).children().text($text);
                $this.closest('.layer_opt').removeClass('active');
                
                /* 옵션추가 조건 */
                
                //개발용
                var $code = $this.attr('data-code');
                if($this.hasClass("multi")) {					 //복합형태
                	
                	$("#hidSelectMulti").val($code);
                	addOptionMulti("");
                } else if($this.hasClass("power_deal_opt_btn")) {//파워딜옵션
                	
                	var finalYn = $this.attr("finalYn");
                	if(finalYn == "Y") {//마지막 옵션
                		optionSelect.optBox2($this.attr("data-value"), 
                							 $this.attr("data-goodsnm"), 
                							 $this.attr("data-path-optionnm"), 
                							 $this.attr("data-imgpath"));
                	} else {
                		
                		var parentId = $this.attr("data-pathId");
                		$clost.next().find(".sel_op button").hide();
                		$clost.next().find(".sel_op button[data-parentId='" + parentId + "']").show();
                	}
                } else {										//일반상세옵션
                	var scnt = $this.parents(".sel_op").attr("data-scnt");
                	$("#hidSelect" + scnt).val($code);
                	
                	var data = option1;
            		var nextSelTxt = "hidSelect2";
            		
            		if($pindex == 1) {
            			
            			$("#hidSelect2").empty();
            			$("#hidSelect3").empty();
            			$("#hidSelect4").empty();
            			$("#hidSelect5").empty();
            			
            			if ($("#hidSelect3").length > 0) {
            				
            				$("#hidSelect3").append("<option value=\"\" selected=\"selected\">선택하세요</option>");
            			}
            			if ($("#hidSelect4").length > 0) {
            				
            				$("#hidSelect4").append("<option value=\"\" selected=\"selected\">선택하세요</option>");
            			}
            			if ($("#hidSelect5").length > 0) {
            				
            				$("#hidSelect5").append("<option value=\"\" selected=\"selected\">선택하세요</option>");
            			}
            		} else if($pindex == 2) {
            			
            			data = option2
            			nextSelTxt = "hidSelect3";
            			
            			$("#hidSelect3").empty();
            			$("#hidSelect4").empty();
            			$("#hidSelect5").empty();
            			
            			if ($("#hidSelect4").length > 0) {
            				
            				$("#hidSelect4").append("<option value=\"\" selected=\"selected\">선택하세요</option>");
            			}
            			if ($("#hidSelect5").length > 0) {
            				
            				$("#hidSelect5").append("<option value=\"\" selected=\"selected\">선택하세요</option>");
            			}
            		} else if($pindex == 3) {
            			
            			data = option3
            			nextSelTxt = "hidSelect4";
            			
            			$("#hidSelect4").empty();
            			$("#hidSelect5").empty();
            			
            			if ($("#hidSelect5").length > 0) {
            				
            				$("#hidSelect5").append("<option value=\"\" selected=\"selected\">선택하세요</option>");
            			}
            		} else if($pindex == 4) {
            			
            			data = option4
            			nextSelTxt = "hidSelect5";
            			
            			$("#hidSelect5").val("");
            		} else if($pindex == 5) {
            			
            			data = option5
            		}
            		
                	if($pindex === len){
                		//마지막 옵션
                		addOption(data, $pindex, "");
                	} else {
                		//다음 옵션 세팅
                		if($pindex == 1) {
                			
                			data = option2;
                		} else if($pindex == 2) {
                			
                			data = option3;
                		} else if($pindex == 3) {
                			
                			data = option4;
                		} else if($pindex == 4) {
                			
                			data = option5;
                		}
                		
                		createOption(nextSelTxt, data, $code, $pindex);
                	}
                }
                
                return false;
                //개발용
                
            }
            
        });
    },
    optSel3:function(){

        var _this = this;
        var len = this.$opt_box.length;

        this.$opt_type3.on('click','button',function(){
            var $this = jQuery(this);
                _this.$opt_box.hide();
                _this.$opt_box.eq(0).show();
                $this.closest('.layer_opt').addClass('active');
                //[D]2017.01.03 스크롤 추가
//                optdetail_scroll_set.init('.op_scroll_wrap')
        });

        this.$opt_box.on('click','dt',function(){
            var $this = jQuery(this);
            $this.closest('.opt_sel_box').hide();
            $this.closest('.layer_opt').removeClass('active');
        });

        this.$opt_box.on('click','.btn_del',function(){
            var $this = jQuery(this);
            $this.closest('.opt_sel_box').hide();
            
            if(_this.$opt_selected_box.find('div').length === 0){
                _this.$opt_box.eq(0).show();
            }
            //[D]2017.01.03 스크롤 추가
//            optdetail_scroll_set.init('.op_scroll_wrap')
        });

        this.$opt_box.on('click','dl button',function(){
            
            var $this = jQuery(this);
            var $clost = $this.closest('.opt_sel_box');
            var $pindex = parseInt($clost.index()+1);

            /* 품절상품 체크 */
            if($this.hasClass('end')){
                //품절3;
            }else{

                $clost.hide();

                /* 마지막 옵션 선택시 if */
                if($pindex === len){
                    //끝;
                   
                    var $qt = $this.attr('data-qt');
                    
                    /* 옵션추가 조건 */
                    var $code = $this.attr('data-code');
                    if(_this.checkData($code) >= 0){
                        console.log('이미고른상품');
                    }else if(_this.checkData($code) === -1){
                        _this.$opt_selected_box.prepend(_this.optBox2($code,$qt));
                       setTimeout(function(){
                            _this.$opt_selected_box.find('.op_box:first').addClass('active');
                        },10);
                        _this.$total_price.show();
                        $this.closest('.layer_opt').removeClass('active');
                        _this.$scroll_max.addClass('max');
                        console.log('상품추가');
                    }
                    //[D]2017.01.03 스크롤 추가
//                    opt_height.init()
                }else{
                    var $pd = $this.html();
                    $clost.next().show();
                    $('.hid_'+$pindex).empty().append(_this.selectAppend5());
                    _this.$opt_box.find('.prd_area div').empty().append($pd);
                    //개발용 
                    var val =  $this.data('value') ;
            		if(val.split('@')[3] != '0'){
            			alert('품절된 상품입니다.');
            			return;
            		}
                    fillSubOption("up", val);
                    
                }
            }
            
        });

        
    },
    optSel4:function(){

        var _this = this;

        this.$opt_box_wrap.on('click','button',function(){
            
            var $this = jQuery(this);

            /* 품절상품 체크 */
            if($this.hasClass('end')){
            
            }else{

                $this.closest('ul').find('button').removeClass('on');
                $this.addClass('on');

                var $qt = $this.attr('data-qt');
                /* 옵션추가 조건 */
                var $code = $this.attr('data-code');

                if(_this.checkData($code) >= 0){
                }else if(_this.checkData($code) === -1){
                    _this.$opt_selected_box.append(_this.optBox($code,$qt));
                    _this.$total_price.show();
                    _this.$scroll_max.addClass('max');
                }
                    
            }
            
        });
    },
    optSel5:function(){

        var _this = this;

        this.$opt_type6.on('click','button',function(){
            var $this = jQuery(this);
                $this.closest('.layer_opt').addClass('active');
                $('.deal_opt').show();
                optdetail_scroll_set.init($('.deal_opt').find('.sel_op_img')[0]);
        });
        
        this.$layer_detal_tit.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.opt_sel_box').hide();
            $this.closest('.layer_opt').removeClass('active');
            $('.opt_selected').hide();
            $('.opt_type6').show();
        });
        
        this.$layer_detal.on('click',function(){
            var $this = jQuery(this);
            if($this.hasClass("search_del")) {
            	$this.parent().find("input").val("").trigger("keyup");
    			return false; 
    		}
            
            var val =  $this.attr('data-value');
    		if(val.split('@')[3] != '0'){
    			alert('품절된 상품입니다.');
    			return;
    		}    
    		
            //개발용
            var src = $this.find("img").attr("src");
            $(".deal_prod img").attr("src", src); 
            $(".deal_prod .tit").text($this.find(".tit").text());
            $(".deal_prod strong").html($this.find("strong").html());
            fillSubOption(val, $this);
            //개발용
            
        });
        
        this.$layer_del.on('click',function(){
            var $this = jQuery(this);
                $this.closest('.layer_opt').addClass('active');
                $('.deal_opt').show();
        });

    },
	optBox:function(goodnm, unit_seq, price){
        var htm = ''
        +'<div class="op_box">'	
        +'<p class="op_tit">' + goodnm + '</p>'
        +'<div class="prd_amount">'
        +'<button class="minus"><em class="blind">빼기</em></button>'
        +'<input type="number" name="cnt[]" class="item_input direct" value="' + basicCnt + '" title="수량" >'
        +'<button class="plus"><em class="blind">더하기</em></button>'
        +'<span>' + comma(price) + ' <i>원</i></span>'
        +'<input type="hidden" name="unit_seq[]" value="' + unit_seq + '">'
        +'<input type="hidden" name="good_price[]" value="' + price + '">'
        +'</div>'
        +'<button type="button" class="del"><em class="blind">삭제</em></button>'
        +'</div>';
        
        optionSelect.$opt_selected_box.prepend(htm);
        setTimeout(function(){
        	optionSelect.$opt_selected_box.find('.op_box:first').addClass('active');
        },10);

        optionSelect.$total_price.show();
        optionSelect.$scroll_max.addClass('max');
        calculateGoods();
        opt_height.init();
        
        //개발용
//        optionSelect.$opt_selected_box.append(htm);
//        optionSelect.$total_price.show();
//        optionSelect.$scroll_max.addClass('max');
//        calculateGoods();
//        //개발용
//        opt_height.init();
    },
    optBox2:function(val, goodnm, opt, imgpath){
    	
    	if( val != ""){
    		
    		var addflag  = true;
    		var valArr   = val.split("@");
    		var goods_id_deal = valArr[0];
    		var unit_seq_deal = valArr[1];
    		var price_deal    = valArr[2];
    		var basicCnt_deal = valArr[3];
    		var maxCnt_deal   = valArr[4];
    		var setCntDeal   = valArr[5];
    		
    		var goodsIdList = $("#frmDetail input[name='goods_id[]']")
    		var unitSeqList = $("#frmDetail input[name='unit_seq[]']");
    		
    		if (goodsIdList.length > 0) {
    			for ( var i = 0; i < goodsIdList.length; i++) {
    				if (goodsIdList[i].value == goods_id_deal && unitSeqList[i].value == unit_seq_deal){
    					alert("이미 선택한 옵션입니다.");
    					addflag = false;
    				}
    			}
    		}
    		if(addflag) {
    			
    			var htm = ''
		        +'<div class="op_box deal">'
		        +'<img src="' + imgpath + '" alt="">'
		        +'<p class="op_tit">'
		        +'<strong>' + goodnm + '</strong>'
		        +'<span>' + opt + '</span>'
		        +'</p>'
		        +'<div class="prd_amount">'
		        +'<button class="minus"><em class="blind">빼기</em></button>'
		        +'<input type="text" class="item_input direct" name="cnt[]" title="수량" value="'+setCntDeal+'" readonly>'
		        +'<button class="plus"><em class="blind">더하기</em></button>'
		        +'<span class="goos_price">' + comma(price_deal) + ' <i>원</i></span>'
		        +'<input type="hidden" name="goods_id[]" value="' + goods_id_deal + '">'
				+'<input type="hidden" name="unit_seq[]" value="' + unit_seq_deal + '">'
				+'<input type="hidden" name="good_price[]" value="' + price_deal + '">'
				+'<input type="hidden" name="basicCnt[]" value="'+basicCnt_deal+'">'
				+'<input type="hidden" name="maxCnt[]" value="'+maxCnt_deal+'">'
				+'<input type="hidden" name="setCnt[]" value="'+setCntDeal+'">'
		        +'</div>'
		        +'<button type="button" class="del"><em class="blind">삭제</em></button>'
		        +'</div>';
		        
		        optionSelect.$opt_selected_box.prepend(htm);
		        setTimeout(function(){
		        	optionSelect.$opt_selected_box.find('.op_box:first').addClass('active');
	            },10);
    		}
	         
    	}
    	
    	
    	
    	optionSelect.$total_price.show();
        optionSelect.$scroll_max.addClass('max');
        $('.layer_opt').removeClass('active'); 
        $('.deal_opt').hide();
        $('.opt_selected').hide();
        $('.opt_type6').show();
        calculateGoods();
        $(".selected_scroll_wrap").show(); 
        opt_height.init();
    },
    checkData:function(obj){

        var $box = this.$opt_selected_box.find('.op_box');
        var len = $box.length;
        var $arr = [];

        for(var i= 0; i<len; i++){  
            $arr[i] = $box.eq(i).attr('data-code');
        }

        var $reuslt = $.inArray(obj,$arr);

        return $reuslt;
    },
    itemCopy:function(clas){

        var $sel_cal = $('.hid_'+clas)

        if($sel_cal.find('option').length){
            var copy = $sel_cal.html().replace(/option/g,'button').replace(/&lt;_/g,'<').replace(/_&gt;/g,'>');
            return copy;
        }
        
    },
    plus:function(obj){
      var _this = this;
      
      $(document).on('click','.plus',function(){
    	  //개발용
    	  if(pwDealFlag) {//파워딜 경우
    		  var flag = false;
			  var cnt = 0;
			  var setCntDeal;
			  var maxCntDeal;
			  setCntDeal = $(this).parent().find("input[name='setCnt[]']").val();
			  maxCntDeal = $(this).parent().find("input[name='maxCnt[]']").val();
			  cnt = Number($(this).parent().find("input[name='cnt[]']").val()) + Number(setCntDeal);
			  if (cnt <= maxCntDeal){
				  $(this).parent().find("input[name='cnt[]']").val(cnt);
				  calculateGoods();
			  }
    	  } else {//일반상품
    		  var cnt = 0;
	  		  cnt = Number($(this).parent().find("input[name='cnt[]']").val()) + Number(setCnt);
	  		  var data;
	  		  if (option1.length > 0)
	  			  data = option1;
	  		  if (option2.length > 0)
	  			  data = option2;
	  		  if (option3.length > 0)
	  			  data = option3;
	  		  if (option4.length > 0)
	  			  data = option4;
	  		  if (option5.length > 0)
	  			  data = option5;
	  		  var maxCnt = 0;
	  		  var unit_seq = $(this).parent().find("input[name='unit_seq[]']").val();
	  		
	  		  $.each(data, function(index) {
	  			  var optionInfo = data[index];
	  			  if (optionInfo[4] == unit_seq) {
	  				  maxCnt = optionInfo[3];
	  				  return false;
	  			  }
	  		  });
	  		  if (cnt <= maxCnt) {
	  			  $(this).parent().find("input[name='cnt[]']").val(cnt);
	  			  calculateGoods();
	  		  }
    	}
    	
  		
  		return false;
  		//개발용
    	  
        var $this = $(this);
        var $num = $this.prev().val();
        var $max = $this.closest('.op_box').attr('data-qt');

        if($num === $max){
          alert($max + '재고');
        }else{

          $this.prev().val(parseInt($num)+1);

        }

      });
        
    },
    minus:function(obj){
    	
      var _this = this;

      $(document).on('click','.minus',function(){
	  	
	      //개발용
    	  if(pwDealFlag) {//파워딜 경우
    		  var flag = false;
    	  		var cnt = 0;
    	  		var setCntDeal;
    	  		var basicCntDeal;
    	  		setCntDeal = $(this).parent().find("input[name='setCnt[]']").val();
    	  		basicCntDeal = $(this).parent().find("input[name='basicCnt[]']").val();
    	  		cnt = Number($(this).parent().find("input[name='cnt[]']").val()) - Number(setCntDeal);
    	  		if (cnt >= basicCntDeal){
    	  			$(this).parent().find("input[name='cnt[]']").val(cnt);
    	  			calculateGoods();
    	  		}
    	  } else {//일반상품
    		  var cnt = 0;
    		 
    	      cnt = Number($(this).parent().find("input[name='cnt[]']").val()) - Number(setCnt);
    	      if (cnt >= basicCnt) {
    	    	  
    			$(this).parent().find("input[name='cnt[]']").val(cnt);
    			calculateGoods();
    	      }
    	      
    	  }
    	  
    	  return false;	
    	  
	      //개발용
          
        var $this = $(this);
        var $num = $this.next().val();

        if($num < 2){
          alert('1개이상 구매하셔야합니다.');
        }else{

          $this.next().val(parseInt($num)-1);

        }

      });

    },
    changeInput:function(obj){

      var _this = this;

      $(document).on('change','.item_input',function(){
    	  	
    	  //개발용
    	  if(pwDealFlag) {//파워딜 경우
    		  
    		  var setCntDeal;
    			var maxCnt = 0;
    			var basicCntDeal;
    			var unit_seq_deal;
    			setCntDeal = $(this).parent().find("input[name='setCnt[]']").val();
    			basicCntDeal = $(this).parent().find("input[name='basicCnt[]']").val();
    			maxCnt = $(this).parent().find("input[name='maxCnt[]']").val();
    			unit_seq_deal = $(this).parent().find("input[name='unit_seq[]']").val();
    			if (maxCnt == 0)
    				maxCnt = 1;
    			var cnt = $(this).val();
    			if (cnt == "")
    				cnt = basicCntDeal;
    			if (Number(cnt) < Number(basicCntDeal))
    				cnt = basicCntDeal;
    			var digit = "1234567890";
    			if (cnt.length > 0) {
    				for ( var i = 0; i < cnt.length; i++) {
    					if (digit.indexOf(cnt.substring(i, i + 1)) < 0) {
    						alert("수량은 숫자만 입력 가능합니다.");
    						$(this).val(basicCntDeal);
    						$(this).focus();
    						return false;
    					}
    				}
    			}
    			// 수량단위 체크
    			cnt = cnt - (cnt % setCntDeal);
    			if (cnt > maxCnt) {
    				alert("최대 주문 가능 수량은 " + maxCnt + "개 입니다.");
    				cnt = maxCnt;
    			}
    			$(this).val(cnt);
    			calculateGoods();
    		  
    	  } else {
    		  
    		  var flag = false;
    		  var cnt = 0;
    		  
    		  var data;
    		  if (option1.length > 0)
    				data = option1;
    		  if (option2.length > 0)
    				data = option2;
    		  if (option3.length > 0)
    				data = option3;
    		  if (option4.length > 0)
    				data = option4;
    		  if (option5.length > 0)
    				data = option5;
    		  var unit_seq = $(this).parent().find("input[name='unit_seq[]']").val();
    		  
    		  var maxCnt = 0;
    		  $.each(data, function(index) {
    			  var optionInfo = data[index];
    			  if (optionInfo[4] == unit_seq) {
    				  maxCnt = optionInfo[3];
    				  return false;
    			  }
    		  });
    		  
    		  if (maxCnt == 0)
    				maxCnt = 1;
    		  cnt = Number($(this).val());
    		  var cnt = $(this).val();
    		  if (cnt == "")
    				cnt = basicCnt;
    		  if (Number(cnt) < Number(basicCnt))
    				cnt = basicCnt;
    		  
    		  var digit = "1234567890";
    		  if (cnt.length > 0) {
    			  for ( var i = 0; i < cnt.length; i++) {
    				  if (digit.indexOf(cnt.substring(i, i + 1)) < 0) {
    					  alert("수량은 숫자만 입력 가능합니다.");
    					  $(this).val(basicCnt);
    					  $(this).focus();
    					  return false;
    			      }
    			  }
    		  }
    		  
    		  // 수량단위 체크
    		  cnt = cnt - (cnt % setCnt);
    		  if (cnt > maxCnt) {
    			  alert("최대 주문 가능 수량은 " + maxCnt + "개 입니다.");
    			  cnt = maxCnt;
    		  }
    		  
    		  $(this).parent().find("input[name='cnt[]']").val(cnt);
    		  calculateGoods();
    	  }
    	  
    	  return false;	
    	  //개발용
        var $this = $(this);
        var $num = $this.val();
        var $max = $this.closest('.op_box').attr('data-qt');
       
        if($num < 1){
          alert('1개이상 구매하셔야합니다.');
          $this.val(1);
        }else if(parseInt($num) > parseInt($max)){
          alert($max + '재고');
          $this.val($max);
        }
      });

    },
    del:function(obj){

      var _this = this;
      
      $(document).on('click','.del',function(e){

        var $this = $(this);
        
        $this.closest('.op_box').removeClass('active');
        setTimeout(function(){
            $this.closest('.op_box').remove();
            
            var len = $('.op_box').length;
            if(len === 0){
                _this.$total_price.hide()
                _this.$scroll_max.removeClass('max');
                if(_this.$opt_type3.length){
                    _this.$opt_box.eq(0).show();
                    _this.$layer_box.addClass('active');
                }
            }
            
            opt_height.init();
            
           //개발용
            calculateGoods();
            //개발용
        },200);
      });

    },
    selectAppend1:function(){
        var htm = ''
        +'<option class="btn_txt end" data-code="end" value="end">90</option>'
        +'<option class="btn_txt" data-code="1_2" value="1_2">95</option>'
        +'<option class="btn_txt" data-code="1_3" value="1_3">100</option>'
        +'<option class="btn_txt" data-code="1_4" value="1_4">105</option>';
        return htm;
    },
    selectAppend2:function(){
        var htm = ''
        +'<option class="btn_color end" data-code="end" value="end" style="background-color:#000;color: transparent;"><em class="blind">블랙2</em></option>'
        +'<option class="btn_color end" data-code="end" value="end" style="background-color:#fff;color: transparent;"><em class="blind">화이트</em></option>'
        +'<option class="btn_color sel" data-qt="27" data-code="1-1-1" value="1-1-1" style="background-color:#91a9c0;"><em class="blind">블루</em></option>'
        +'<option class="btn_color sel" data-qt="1527" data-code="1-1-2" value="1-1-2" style="background-color:#000;"><em class="blind">블랙</em></option>';
        return htm;
    },
    selectAppend3:function(){
        var htm = ''
        +'<option><_strong_>선택 1. 라이트옐로우(31)_90<_/strong_></option>'
        +'<option><_strong_>선택 2. 라이트옐로우(31)_90<_/strong_></option>'
        +'<option><_strong_>선택 3. 라이트옐로우(31)_90<_/strong_></option>';
        return htm;
    },
    selectAppend4:function(){
        var htm = ''
        +'<option class="end" data-code="end" value="end"><_strong_>선택 1. 라이트옐로우(31)_90<_/strong_></option>'
        +'<option data-qt="27" data-code="1-1-1" value="1-1-1"><_strong_>선택 2. 라이트옐로우(31)_90<_/strong_></option>'
        +'<option data-qt="1527" data-code="1-1-2" value="1-1-2"><_strong_>선택 3. 라이트옐로우(31)_90<_/strong_></option>';
        return htm;
    },
    selectAppend5:function(){
        var htm = ''
        +'<option data-qt="27" data-code="1-1-1" value="1-1-1"><_strong_>니트 베이지<_/strong_>155,500개 남음</option>'
        +'<option data-qt="1527" data-code="1-1-2" value="1-1-2"><_strong_>사선 꽈배기 니트<_/strong_>155,500개 남음</option>'
        +'<option class="end"><_strong_>이쁜 니트<_/strong_>0개 남음<_i_>(품절)<_/i_></option>';
        return htm;
    }
    //개발용
    ,
    showOptBox : function() {
    	var _this = this;
    	var $this = jQuery(".btn_open_option");
        
		//파워딜경우
		if($this.hasClass('btn_deal_opt')){
			//자세히 보기 팝업인경우 
			if($(".layer_deal_wrap").css("display") == "block") {
				var goodsId = $(".sw_layer.swiper-slide-active").find(".goods_contents").attr("data-goodsid"); 
				if(goodsId == undefined) {
					setTimeout(function() {
						
						$(".btn_deal_opt").click();
					}, 100);
				} else {
					selGoodsDirectBtn($('.thumbParents.'+goodsId).data('value'));
				}
				return false;
			}
			if($(".op_box_area").find("div").length == 0) {
				$('.layer_opt').addClass('active');
				$(".deal_opt").show();
				//[D]2017.01.03 스크롤 추가
                optdetail_scroll_set.init('.op_scroll_wrap');
			}
        }
		
		optionSelect.$close.addClass("active");
		$(".drop_box_area").addClass('active'); 
		
        $this.closest('.btn_first').hide();
        _this.$btn_soon.show();
        _this.$tg.show().addClass("active");
        opt_height.init();
        //[D]2017.01.03 스크롤 추가
        
        if($("#noOptionFlag").length > 0) {
        	
        	_this.$total_price.show();
        	_this.$scroll_max.addClass('max');
        	calculateGoods();
        }
        
        if(_this.$opt_type2.length || _this.$opt_type5.length){
            _this.$opt_box.parent().addClass('on');
        }
        
        if(_this.$opt_type3.length && _this.$opt_selected_box.find('div').length === 0){
            _this.$layer_box.addClass('active');
            _this.$layer_box.addClass('on');
            _this.$opt_box.eq(0).show();
            //[D]2017.01.03 스크롤 추가
            optdetail_scroll_set.init('.op_scroll_wrap');
        }
        if(_this.$opt_type4.length){
            _slider.reloadSlider();
        }
    }
  //개발용
}
jQuery('.drop_box_area').length && optionSelect.init();
jQuery('.opt_type1').length && optionSelect.optSel1();
(jQuery('.opt_type2').length || jQuery('.opt_type5').length) && optionSelect.optSel2();
jQuery('.opt_type3').length && optionSelect.optSel3();
jQuery('.opt_type4').length && optionSelect.optSel4();
jQuery('.deal_opt').length && optionSelect.optSel5();

/* 메인 슬라이드 */
var swiperMain = {

    init:function(){

        var w = $('.detail_wrap.swiper-slide').width();
        var len = $('.detail_wrap.swiper-slide').length;
        $('.sw-width').css('width',w*len)

        $(window).on('resize',function(){
            setTimeout(function(){
                var w = $('.detail_wrap.swiper-slide').width();
                var len = $('.detail_wrap.swiper-slide').length;
                $('.sw-width').css('width',w*len)
            },10);
        });

        this.item();
    },
    
    item:function(){

      var _this = this;

      /* [D] 2017.1.13 화살표 제어 */ 
      var liw=0;
      var lastindex = $('.swiper-gnb .swiper-slide').length -1;
      var ssize = $('.swiper-gnb').width();
      var lastli = $('.swiper-gnb .swiper-slide').eq(lastindex).outerWidth(true);
      var firstli = $('.swiper-gnb .swiper-slide').eq(0).outerWidth(true)/3;
      
      for(var i = 0;i <= lastindex;i++){
         liw = liw + $('.swiper-gnb .swiper-slide').eq(i).outerWidth(true);
      }

      var last_size = -(liw - ssize - 10)

      if(ssize > liw){
        $('.swiper-gnb .arrows').hide();
        $('.swiper-gnb .arrow').hide();
      }

      var gnbswiper = new Swiper('.swiper-gnb', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 'auto',
        freeMode: true,
        /* [D] 2017.1.13 화살표 제어 */ 
       onInit:function(swiper){
        var tleft = swiper.translate;

          if(tleft <= last_size){
            $('.swiper-gnb .arrow').hide();
          }else if(-firstli < tleft){
            $('.swiper-gnb .arrows').hide();
          }else{
            $('.swiper-gnb .arrow').show();
            $('.swiper-gnb .arrows').show();
          }
       },
       onSetTranslate:function(swiper){
          var tleft = swiper.translate;

          if(tleft <= last_size){
            $('.swiper-gnb .arrow').hide();
          }else if(-firstli < tleft){
            $('.swiper-gnb .arrows').hide();
          }else{
            $('.swiper-gnb .arrow').show();
            $('.swiper-gnb .arrows').show();
          }
           
        }, 
        onSlideChangeStart : function(swiper) {

          var tleft = swiper.translate;
          if(tleft <= last_size){
            $('.swiper-gnb .arrow').hide();
          }else if(-firstli < tleft){
            $('.swiper-gnb .arrows').hide();
          }else{
            $('.swiper-gnb .arrow').show();
            $('.swiper-gnb .arrows').show();
          }

        },    
        onSlideChangeEnd : function(swiper) {
            var tleft = swiper.translate;
            if(tleft <= last_size){
                $('.swiper-gnb .arrow').hide();
              }else if(-firstli < tleft){
                $('.swiper-gnb .arrows').hide();
              }else{
                $('.swiper-gnb .arrow').show();
                $('.swiper-gnb .arrows').show();
              }

        },
        /* [D] 2017.1.13 화살표 제어 */ 
        onClick : function(swiper) {
          var $idx = swiper.clickedIndex; 
          conswiper.slideTo($idx, 100, true);

          var tleft = swiper.translate;
          if(tleft <= last_size){
            $('.swiper-gnb .arrow').hide();
          }else if(-firstli < tleft){
            $('.swiper-gnb .arrows').hide();
          }else{
            $('.swiper-gnb .arrow').show();
            $('.swiper-gnb .arrows').show();
          }
        }
      });

      var conswiper = new Swiper('.swiper-main', {
          paginationClickable: true,
          calculateHeight : false,
          noSwiping: true,
          onSlideChangeEnd : function(swiper) {
            _this.topPage();
          },
          onSlideChangeStart : function(swiper) {

            var height = $('.detail_wrap.swiper-slide-active .height_check').height();
            setTimeout(function(){
                $('.container').css('height', height+46);
            },300);

            $('.detail_menu li').removeClass('active');
            $('.detail_menu li').eq(swiper.activeIndex).addClass('active');

            
            /*var num = $('.swiper-gnb .swiper-slide.active').offset().left;
            var size = $(window).width();
            var _num = $('.swiper-gnb .swiper-slide.active').outerWidth();

            if(num>size-_num){
              var $idx = $('.swiper-gnb .swiper-slide.active').index(); 
              gnbswiper.slideTo($idx, 100, true);  
            }else if(num < _num){
              var $idx = $('.swiper-gnb .swiper-slide.active').index(); 
              gnbswiper.slideTo($idx, 100, true);  
            }    */  

            var $idx = $('.swiper-gnb .swiper-slide.active').index(); 
            gnbswiper.slideTo($idx-1, 100, true);   

          }

          
      });

        if($('.swiper-main').attr('data-num')){
            var num = $('.swiper-main').attr('data-num');
            conswiper.slideTo(num,0)
        }
    
    },
    topPage:function(){
      window.scrollTo(0, 0);
    }
}
jQuery('.detail_wrap').length && swiperMain.init();

/* 메인 기획전 슬라이드 */
var swiperSlide = {
    
    item:function(obj,page){

        var swiper = new Swiper('.'+obj, {
          pagination: '.'+page,
          loop:true,
          paginationClickable: true
        });

        if($('.'+obj).attr('data-num')){
            var num = $('.'+obj).attr('data-num');
            swiper.slideTo(num,0)
        }

    }
}
jQuery('.swiper-visual').length && $('.swiper-visual .swiper-slide').length > 1 && swiperSlide.item('swiper-visual','swiper-page');
jQuery('.swiper-mostview').length && $('.swiper-mostview .swiper-slide').length > 1 && swiperSlide.item('swiper-mostview','swiper-page');

/* 파워딜 슬라이드 */
var swiperPw = {
    init:function(){
        var w = $('.sw_layer.swiper-slide').width();
        var len = $('.sw_layer.swiper-slide').length;
        $('.sw-deal').css('width',w*len)

        $(window).on('resize',function(){
            setTimeout(function(){
                var w = $('.sw_layer.swiper-slide').width();
                var len = $('.sw_layer.swiper-slide').length;
                $('.sw-deal').css('width',w*len)
            },10);
        });
        setTimeout(function(){	
            checkHight2.init();
        },10);
        
        this.item();
    },
    
    item:function(){

        this.$btn_prev = $('.btn_deal_move2 .btn_prev');
        this.$btn_next = $('.btn_deal_move2 .btn_next');
        this.$tit = $('.deal_title_new');

      var _this = this;

      var conswiper = new Swiper('.swiper-pw', {
          paginationClickable: true,
          calculateHeight : false,
          onSlideChangeEnd : function(swiper) {
            _this.topPage();
          },
          onSlideChangeStart : function(swiper) {
        	//개발용  
        	var $activeSlide = $('.sw_layer.swiper-slide-active');  
        	if($activeSlide.hasClass("on")) {
        		
        		var height = $activeSlide.find(".height_check").height();
                var count =  $activeSlide.find(".height_check").find(".count").val();
                if(count < 10){
                	count = "0"+count;
                }
                $(".deal_title_new").text("선택 "+count);
                $('.swiper-deal').css('height', height).css('overflow','hidden');
                setTimeout(function() {
                	checkHight2.init();
                }, 500);
        	} else {
        		
        		$.ajax({
					type : "post",
					url : "/special/PowerDealDetailContent.do",
					data :  {'goods_id':$activeSlide.data("goods_id"),'goodsDetailId':$activeSlide.data("goodsid"),'detailYn':'Y'},
					dataType : 'html',
					success : function(html) {
						$activeSlide.addClass("on");
						$("#detailtab_" + swiper.activeIndex).html(html); 
						var height = $activeSlide.find(".height_check").height();
		                var count =  $activeSlide.find(".height_check").find(".count").val();
		                if(count < 10){
		                	count = "0"+count;
		                }
		                $(".deal_title_new").text("선택 "+count);
		                $('.swiper-deal').css('height', height).css('overflow','hidden');
		                setTimeout(function() {
		                	checkHight2.init();
		                }, 500);
					},
					error : function(x, o, e) {
						//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
					}
				});
        	}
        	//개발용
          }
      });

      var _conswiper = conswiper;
      var num = 0;
      
      if($('.swiper-pw').attr('data-num')){
    	  num = $('.swiper-pw').attr('data-num');
    	  conswiper.slideTo(num,0);
      }
      
        this.$btn_next.on('click',function(){
        	var count = $(".sw_layer.swiper-slide-active .height_check .count").val();
            var $index =count-1;
            var $len = $('.swiper-wrapper').find('.sw_layer').length;


            if($len-1 === $index){
                //alert('마지막 페이지');
            }else{
                _conswiper.slideTo($index+1,300);
            }
            
        });

        this.$btn_prev.on('click',function(){
        	var count = $(".sw_layer.swiper-slide-active .height_check .count").val();
            var $index =count-1;
            var $len = $('.swiper-wrapper').find('.sw_layer').length;


            if($index===0){
                //alert('첫번째 페이지');
            }else{
                _conswiper.slideTo($index-1,300);
            }
            
        });
    
    },
    topPage:function(){
      $('.sw_layer').scrollTop(0);
    }
}


/* 찜 */
var btnLay = {
    init:function(){
        this.$btn = $('.btn_buy_soon .cart');
        this.$tg = $('.cart_alert');
        this.$btn2 = $('.btn_first .zzim');
        this.$tg2 = $('.zzim_alert');
        this.$close = $('.zzim_alert span');
        this.act();
    },
    act:function(){

        var _this = this;

//        this.$btn.on('click',function(){
//        	
//        	
//        	return false;
//        	
//            var $this = jQuery(this);
//            _this.$tg.fadeIn(500).delay(2000).fadeOut(500,function(){
//                //alert();
//                $('.btn_door').trigger('click');
//            });
//            
//        });

        this.$btn2.on('click',function(){
            var $this = jQuery(this);
            _this.$tg2.fadeIn(500);
        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            _this.$tg2.fadeOut(500);
        });

    }    
}
jQuery('.btn_buy_soon').length && btnLay.init();

/* 프리미엄 상품평 */
var premiumLay = {
    init:function(){
        this.$btn = $('.premium_img li a');
        this.$list = $('.premium_detail .btn_list');
        this.$tg = $('.premium_detail');
        this.$pimg = $('.premium_img');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(e){
            var $this = jQuery(this);
            return false;
            $this.closest('.premium_img').hide();
            _this.$tg.show();
            swiperSlide.item('swiper-premium','swiper-page');
            e.preventDefault();
        });
        

//        this.$list.on('click',function(){
//            var $this = jQuery(this);
//            $this.closest('.premium_detail').hide();
//            $(".premium_img").show();
//            _this.$pimg.show();
//        });

    }    
}
jQuery('.premium_img').length && premiumLay.init();

/* 확대보기 스크립트 */
var zoomImg = {
    init:function(){
        this.$btn = $('.aggrandize_wrap li');
        this.$tg = $('.img_big img');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $src = $this.attr('data-url')
            $this.addClass('active');
            _this.$tg.attr('src',$src);
        });

    }    
}
jQuery('.aggrandize_wrap').length && zoomImg.init();





/* 구매정보 열고닫기 */
var moreInfo = {
    init:function(){
        this.act();
    },
    act:function(){

    	this.$btn = $('.sub_tit2');
        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.hasClass('active')){
                $this.addClass('active');
                $this.next().show();
                checkHight.init();

            }else if($this.hasClass('active')){
                $this.removeClass('active');
                $this.next().hide();
                checkHight.init();
            }
        });

    }    
}
jQuery('.sub_tit2').length && moreInfo.init();

/* 상단 gnb  동작 [D] 2016.12.14 수정 */
var gnbScorll = {
  init:function(){
    var h = $('.detail_menu').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() > h){
          $('.detail_menu').addClass('activemove');
         
        }else{
          $('.detail_menu').removeClass('activemove');
        }
      });
    }
}
jQuery('.detail_menu').length && gnbScorll.init();

/* lazyload 실행 */
var lazyloadMove ={
    init:function(){
        $("img.lazy").lazyload({
            effect : "fadeIn"
        });
    }
}
//jQuery('.lazy').length && lazyloadMove.init();



//자동으로 사라지는 레이어 팝업 추가
var autoBombLayer = {
  init:function(pop, btn){
      this.popup = $('.'+pop);
      this.btnClosePopup = this.popup.find('.'+btn)
      var autoBomb = setTimeout(function(){
          autoBombLayer.popup.hide();
      },3000)
      this.btnClosePopup.on('click',function(){
          clearTimeout(autoBomb)
          autoBombLayer.popup.hide();
      })
  }
}

$('.goods_notice_layer').length && autoBombLayer.init('goods_notice_layer','btn_close')
