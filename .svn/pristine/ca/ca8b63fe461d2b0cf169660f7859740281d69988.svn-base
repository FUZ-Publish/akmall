/* 옵션변경 */
var optChangeBtn = {
    init:function(){
        this.$btn = $('.prd_info .option .btn_opchange');
        this.$tg = $('.sel_opt .btn_change .change');
        this.act();
        this.change();
    },
    act:function(){
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            
            if(!$this.closest('.option').hasClass('active')){   
//                $this.closest('.option').addClass('active');         
                $this.closest('.prd_info').next('.sel_opt').show();
            
            }else if($this.closest('.option').hasClass('active')){
//                $this.closest('.option').removeClass('active');         
                $this.closest('.prd_info').next('.sel_opt').hide();
            }
        });
    },
    change:function(){
        this.$tg.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.option').removeClass('active');
            //$this.closest('.sel_opt').prev('.prd_info').find('.option').removeClass('active');
        });
    }
}
jQuery('.cart_wrap').length && optChangeBtn.init();

/* cart checkbox */
var cartCheckbox = {
    init: function(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10){
        this.$divbox = $('.'+obj1);
        this.$divitem = $('.'+obj2);
        this.$pikbox = $('.'+obj3);
        this.$pikitem = $('.'+obj4);
        this.$onebox = $('.'+obj5);
        this.$oneitem = $('.'+obj6);
        this.$all = $('.'+obj7);
        this.$item = $('.'+obj8);
        this.addEvent(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10);
        this.allcheck(obj7,obj8,obj10);
        this.onlycheck(obj6,obj9);
    },
    addEvent: function(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10){
        var _this = this;
        this.$divbox.on('click', function(){
            _this.$divitem.prop('checked', $(this).prop('checked')? true: false);
        });
        $(document).on('click', _this.$divitem, function(){_this.allcheck(obj7,obj8,obj10);setTimeout( function(){ _this.checkAll(obj1,obj2) }, 50); }); 
        
        this.$pikbox.on('click', function(){
            _this.$pikitem.prop('checked', $(this).prop('checked')? true: false);
        });
        $(document).on('click', _this.$pikitem, function(){_this.allcheck(obj7,obj8,obj10);setTimeout( function(){ _this.checkAll(obj3,obj4) }, 50); }); 

        this.$onebox.on('click', function(){
            _this.$oneitem.prop('checked', $(this).prop('checked')? true: false);
        });
        $(document).on('click', _this.$oneitem, function(){_this.onlycheck(obj6,obj9);setTimeout( function(){ _this.checkAll(obj5,obj6) }, 50); }); 
    },
    checkAll: function(obj1,obj2){
        var state = 1;
        $('.'+obj2).each(function(i,el){
            if($(el).prop('checked')) {state *= 1;}
            else {state *= 0;}
        });
        $('.'+obj1).prop('checked', state);
    },
    allcheck:function(obj7,obj8,obj10){
        if($('.'+obj8).length === $('.'+obj8+':checked').length){

            $('.'+obj7).html('전체해제');
            $('.'+obj7).on('click',function(){
                $('.'+obj8).prop('checked',0);
            });
            
            $('.btn_order').html('전체상품 주문하기');
            $('.btn_order').attr("onclick","javascript:setAllOrderGoods(1);");

        }else{
            $('.'+obj7).html('전체선택');
            $('.'+obj7).on('click',function(){
                $('.'+obj8).prop('checked',1);
            });
            
            var $sold = $('.'+obj10+':checked').length;
            var $num = $('.'+obj8+':checked').length;
            var $total = $num - $sold;
            
            
            if($total > 0){
            	$('.btn_order').html('선택상품 주문하기<br>'+'(선택한주문: '+$total+'건)' );
            	$('.btn_order').attr("onclick","javascript:setOrderGoods(1);");            	
            }else{
            	$('.btn_order').html('전체상품 주문하기');
                $('.btn_order').attr("onclick","javascript:setAllOrderGoods(1);");
            }
            
        }

        
    },

    onlycheck:function(obj6,obj9){
        if($('.'+obj6).length === $('.'+obj6+':checked').length){

            $('.'+obj9).html('전체해제');
            $('.'+obj9).on('click',function(){
                $('.'+obj6).prop('checked',0);
            });

        }else{
            $('.'+obj9).html('전체선택');
            $('.'+obj9).on('click',function(){
                $('.'+obj6).prop('checked',1);
            });
        }

    }
}
                                              
$('.cart_wrap').length && cartCheckbox.init('div_checkbox_all','div_checkbox_item','pik_checkbox_all','pik_checkbox_item','one_checkbox_all','one_checkbox_item','btn_all_all','checkbox_item','btn_only_all','soldout_checkbox_item');

/* 모두상품 구매버튼 */
var allBuy = {
    init: function(){

        this.$wrap = $('.buy_wrap');
        this.$btn = $('.buy_wrap .btn_order');
        this.$tg = $('.btn_buy_info');
        this.$htg = $('.only_item_box');
        this.$close = this.$tg.find('.btn_pop_close');
        this.$cancel = this.$tg.find('.btn_cansel');
        this.$save = this.$tg.find('.btn_save');
        this.act();
//        this.stops();
//        this.check();

    },
    act:function(){
        var _this = this;

       //개발용 - 주석처리
//        this.$btn.on('click',function(){
//            _this.$tg.show()
//            _this.$tg.find('.popup_wrap').css('top', $(window).scrollTop() + "px");
//        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.btn_buy_info').hide();
        });

        this.$cancel.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.btn_buy_info').hide();
        });
      //개발용 - 주석처리
//        this.$save.on('click',function(){
//            var $this = jQuery(this);
//            $this.closest('.btn_buy_info').hide();
//       });

//        $(window).on('resize',function(){
//            _this.check();
//        });
    },
  //개발용 - 주석처리
//    stops:function(){
//        var _this = this;
//        
//        $(window).scroll(function(){
//
//            _this.check();
//        });
        
//    },
  //개발용 - 주석처리
//    check:function(){
//        var $hss = screen.height;
//        
//        if(this.$htg.length > 0) {//개발용 - 스크립트 에러 임시 if
//        	var $hs=this.$htg.offset().top;
//            if($(window).scrollTop()>$hs-$hss){
//                this.$wrap.css('position','relative');
//            }
//
//            if($(window).scrollTop()<$hs-$hss){
//                this.$wrap.css('position','fixed');
//            }
//        }//개발용 - 스크립트 에러 임시 if
//    } 
} 
$('.buy_wrap').length && allBuy.init();

/* 장바구니 찜 버튼 
var cartWish = {
    init: function(){

        this.$btn = $('header .btn_wish2');
        this.$tg = $('.cart_wish_top');
        this.$close = this.$tg.find('.btn_pop_close');
        this.$cancel = this.$tg.find('.btn_cansel');
        this.$save = this.$tg.find('.btn_save');
        this.act();

    },
    act:function(){
        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            _this.$tg.show()
            _this.$tg.find('.popup_wrap').css('top', $(window).scrollTop() + "px");
        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.cart_wish_top').hide();
        });

        this.$cancel.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.cart_wish_top').hide();
        });

        this.$save.on('click',function(){
            var $this = jQuery(this);
            _this.$btn.addClass('on');
            $this.closest('.cart_wish_top').hide();
        });
    }
}
$('.btn_wish2').length && cartWish.init();

/* 장바구니 찜 버튼 */
var cartWish1 = {
    init: function(){

        this.$btn = $('header .btn_wish2');
        this.$tg = $('.cart_wish_top');
        this.$close = this.$tg.find('.btn_pop_close');
        this.$cancel = this.$tg.find('.btn_cansel');
        this.$save = this.$tg.find('.btn_save');
        this.act();

    },
    act:function(){
        var _this = this;

//        this.$btn.on('click',function(e){
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
//
//            e.preventDefault();
//        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.cart_wish_top').hide().removeClass('active');
        });

        this.$cancel.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.cart_wish_top').hide().removeClass('active');
        });

//        this.$save.on('click',function(){
//            var $this = jQuery(this);
//            $this.closest('.cart_wish_top').hide().removeClass('active');
//        });

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
$('.btn_wish2').length && cartWish1.init();
//
/* 찜 버튼 */
var cartWishProd = {
    init: function(){

        this.$btn = $('.prd_list .wish');
        this.$tg = $('.cart_wish_prod');
        this.$close = this.$tg.find('.pop_close');
        
        this.act();

    },
    act:function(){
        var _this = this;

//        this.$btn.on('click',function(e){
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
//            e.preventDefault();
//        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.cart_wish_prod').hide().removeClass('active');
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
$('.prd_list .wish').length && cartWishProd.init();

/* sale on off */
var saleOnoff = {
    init:function(){
        this.$wrap = $('.price_result');
        this.$btn = this.$wrap.find('.minus');
        this.$tg = $('.price_cou');
        this.act();

    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.hasClass('active')){
                $this.closest('.price_result').next().show();
                $this.addClass('active');
            }else if($this.hasClass('active')){
                $this.closest('.price_result').next().hide();
                $this.removeClass('active');
            }
        });
        
    }    
}
jQuery('.cart_wrap').length && saleOnoff.init();

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
//jQuery('.swiper-mostview').length && swiperSlide.item('swiper-mostview','swiper-page');

/* tab */
var cartTab = {
    init:function(){
        this.$btn = $('.cart_tab li');
        this.$wrap = $('.cart_tab_con');
        this.act();
    },
    act:function(){
        var _this = this;
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            _this.$btn.removeClass('active');
            $this.addClass('active');
            _this.$wrap.hide();
            _this.$wrap.eq($index).show();

        });
    }
}
jQuery('.cart_wrap').length && cartTab.init();

/* 탭바 다운타이밍 스크립트 */
var tabbarScorll = {
  init:function(){
    var sh = screen.height/3; 
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
          $('.quick_link_area_new.type_scroll_move').addClass('off');
         
        }else{
          $('.quick_link_area_new.type_scroll_move').removeClass('off');
        }
      });
    }
}
jQuery('.quick_link_area_new.type_scroll_move').length && tabbarScorll.init();

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

//체크 상품에 따라 값 변경
function calculate(form, id){

	var fieldname = eval("document." + form + ".elements['cartId']");

	var totGoodsPrice = 0;
	var totDeliv = 0;
	var totDC = 0;
	//var totLumpDC = 0;
	var totPayment = 0;
	var totPromotionDC = 0;
	var totCouponDC = 0;
	var totPointDC = 0;
	var selPointAmt = 0;
	if (fieldname) {

		//여러개
		if (fieldname.length) {
			for ( var j = 0; j < fieldname.length; j++)
				
				
				if (fieldname[j].checked){					
					var cart_id = fieldname[j].value;
					var multiOrdYn = $("#multiOrderYN_" + cart_id).val();//단독상품 체크 제외
					if(multiOrdYn == 'Y'){
						var price = $("#goods_price_" + cart_id).val();
						var deliv = $("#goods_deliv_" + cart_id).val();
						var dc = $("#goods_dc_amt_" + cart_id).val();
						
						var promotion_dc = $("#promotion_dc_amt_" + cart_id).val();
						var point_dc = $("#point_dc_amt_" + cart_id).val();
						var coupon_dc = $("#coupon_dc_amt_" + cart_id).val();
						//var lump_dc = $("#lumppay_dc_amt_" + cart_id).val();
						
						totGoodsPrice += Number(price);
						totDeliv += Number(deliv);
						totDC += Number(dc);
						//totLumpDC += Number(lump_dc);
						//totPayment += Number(price) + Number(deliv) - Number(dc) - Number(lump_dc);
						totPayment += Number(price) + Number(deliv) - Number(dc);
						
						totPromotionDC += Number(promotion_dc);
						totPointDC += Number(point_dc);
						totCouponDC += Number(coupon_dc);
						
						var point_amt = $("#point_amt_" + cart_id).val();
						selPointAmt += Number(point_amt);
					}
				}
		} else {
			//한개
			if (fieldname.checked){
				var cart_id = fieldname.value;
				var price = $("#goods_price_" + cart_id).val();
				var deliv = $("#goods_deliv_" + cart_id).val();
				var dc = $("#goods_dc_amt_" + cart_id).val();
				
				var promotion_dc = $("#promotion_dc_amt_" + cart_id).val();
				var point_dc = $("#point_dc_amt_" + cart_id).val();
				var coupon_dc = $("#coupon_dc_amt_" + cart_id).val();
				//var lump_dc = $("#lumppay_dc_amt_" + cart_id).val();kl

				totGoodsPrice += Number(price);
				totDeliv += Number(deliv);
				totDC += Number(price);
				//totLumpDC += Number(lump_dc);
				//totPayment += Number(price) + Number(deliv) - Number(dc) - Number(lump_dc);
				totPayment += Number(price) + Number(deliv) - Number(dc);
				
				totPromotionDC += Number(promotion_dc);
				totPointDC += Number(point_dc);
				totCouponDC += Number(coupon_dc);
				
				var point_amt = $("#point_amt_" + cart_id).val();
				selPointAmt += Number(point_amt);
			}
		}
	}

	$("#totGoodsPrice_"+id).html(comma(totGoodsPrice) + "<em>원</em>");
	
	//0원일때 +,-제외
	if(totDeliv > 0)
		$("#totDeliv_"+id).html("+ " + comma(totDeliv) + "<em>원</em>");
	else
		$("#totDeliv_"+id).html(comma(totDeliv) + "<em>원</em>");
	
	if(totDC > 0)		
		$("#totDC_"+id).html("- " + comma(totDC) + "<em>원</em>");
	else
		$("#totDC_"+id).html(comma(totDC) + "<em>원</em>");
	
	//$("#totLumpDC_"+id).html("(-) " + comma(totLumpDC) + "원");
	$("#totPayment_"+id).html(comma(totPayment) + "<em>원</em>");	
	
	if(totPromotionDC > 0)
		$("#promotionDC_"+id).html("- " +comma(totPromotionDC) + "<em>원</em>");
	else
		$("#promotionDC_"+id).html(comma(totPromotionDC) + "<em>원</em>");
	if(totPointDC > 0)
		$("#pointDC_"+id).html("- " +comma(totPointDC) + "<em>원</em>");
	else
		$("#pointDC_"+id).html(comma(totPointDC) + "<em>원</em>");
	if(totCouponDC > 0)
		$("#couponDC_"+id).html("- " +comma(totCouponDC) + "<em>원</em>");
	else
		$("#couponDC_"+id).html(comma(totCouponDC) + "<em>원</em>");

	var recv_point = 0;
	
	if( $("#recv_point_"+id).length > 0 && Number(cust_comp_group_code) < 2){
		if(Number(grade) == 1) recv_point  = totPayment * 0.01;
		else if(Number(grade) == 2) recv_point  = totPayment * 0.005;
		if(recv_point > 0) {
			$("#recv_point_txt").show();
			$("#recv_point_"+id).html(comma(Math.floor(recv_point)) + "원");
		}else {
			$("#recv_point_txt").hide();
		}
	}
	if(selPointAmt > 0) {
		$("#totGoodsPoint_txt").show();
		$("#totGoodsPoint").html(comma(Math.floor(selPointAmt)) + "원");
	}else {
		$("#totGoodsPoint_txt").hide();
	}
}

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