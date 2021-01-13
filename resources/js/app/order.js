/* 기본 및 신규 배송지 탭 */
var orderTab = {
    init:function(obj){
        this.$wrap = $('.'+obj);
        this.$btn = $('.tap_area .tap_div2 li');
        this.gift_wrap = this.$wrap.find('.gift_def')

        this.act();
    },
    act:function(){
        var _this = this;
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            //개발용
            if($("#noTabActive").length > 0) {
            	return false; 
            }
            //개발용
            $this.closest('.tap_div2').find('li').removeClass('active');
            $this.addClass('active');
            $this.closest('.shipping_to').find('.tab_con2').hide();
            $this.closest('.shipping_to').find('.tab_con2').eq($index).show();

            //개발용
            if($index === 0){
            	$this.closest('.shipping_to').find('.tab_con2').eq(1).find(".btn_right input[type='checkbox']").prop("checked", false);
            	$this.closest('.shipping_to').find('.gift_def').show();
            }else{
            	$this.closest('.shipping_to').find('.gift_def').find("[type='checkbox']").prop("checked", false);
            	$this.closest('.shipping_to').find('.gift_def').hide();
            }
			//개발용
        });
    }
}
$('.tap_area').length && orderTab.init('tap_area');

/* 팝업 탭 */
var popTab = {
    init:function(obj,obj2,obj3){
        this.$wrap = $('.'+obj);
        this.$btn = this.$wrap.find('.'+obj2+' li');

        this.act(obj2,obj3);
    },
    act:function(obj2,obj3){
        var _this = this;
        //this.$btn.hide()
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            
            $this.closest('.'+obj2).find('li').removeClass('active');
            $this.addClass('active');
            _this.$wrap.find('.'+obj3).hide();
            _this.$wrap.find('.'+obj3).eq($index).show();

        });
    }
}
$('.popup_tab_sale').length && popTab.init('popup_tab_sale','tap_div2','tap_con');
$('.popup_tab_my_div').length && popTab.init('popup_tab_my_div','tap_div2','tap_area');

/* 할인쿠폰 open && close */
var popOffOn = {
    init:function(){
        this.$wrap = $('.coupon_box');
        this.$btn = this.$wrap.find('dt button');

        this.act();
    },
    act:function(){
        var _this = this;
        //this.$btn.hide()
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            
            if(!$this.hasClass('on')){
                $this.addClass('on');
                $this.closest('.coupon_box').find('dd .sticker_wrap').hide();
            }else if($this.hasClass('on')){
                $this.removeClass('on');
                $this.closest('.coupon_box').find('dd .sticker_wrap').show();
            }
            
        });
    }
}
$('.coupon_box').length && popOffOn.init();

/* 다중배송지 */
var multiDiv = {
    init:function(){
        //개발용
        this.$check = $('.multi_tit #place1');
        //개발용
        this.$sel = $('.multi_count');
        this.$btn = $('.btn_mutil');
        this.$def = $('.div_default');
        this.$mutil = $('.div_mutil');
        this.check();
        //this.selectReset();

    },
    selectReset:function(){

        var _this = this;
        var $num = this.$check.attr('data-prod');
        var htm = ''
        +'<option value="0" selected="selected">다중배송지 개수</option>';

        for(var i= 2, len=$num; i<=len; i++){
           
             htm += '<option value="' + i + '">' + i + '</option>'
        }

        return htm;

    },
    check:function(){

        var _this = this;
        this.$sel.empty().append(_this.selectReset());
        this.$check.change(function(){
            if(_this.$check.is(':checked')){
                _this.$btn.prop('disabled', false);
                _this.$def.hide();
                _this.$btn.trigger('click');
            }else if(!_this.$check.is(':checked')){
                _this.$btn.prop('disabled', true);
                _this.$btn.text('다중배송지 개수');
                _this.$def.show(); 
                _this.$mutil.empty();
                _this.$sel.find('option:first').prop('selected',true);
            }
        });

    },
    view:function(obj){
        this.$mutil.empty().append(this.divClone(obj));
        orderTab.init('tap_area');
    },
    divClone:function(obj){
        var htm ='';
        var _this = this;
        var $num = obj;
		//개발용 다중배송지
        var deliTxt = $("#deliTxt").val();
        var viewFlag = $("#viewFlag").val();
        var defaultFlag = $("#defaultFlag").val();
        var newFlag = $("#newFlag").val();
        var OverSeasTxt = $("#OverSeasTxt").val();
        
        for(var i= 1, len=$num; i<=len; i++){
            htm+= ''
                +'<!-- 배송지 -->'
                +'<div class="deli_place" style="border-top: none;">'
                +'<div class="shipping_to">'
                +'<h3 class="delivery_tit">배송지 '+ i + '</h3>'
                +'<!-- 배송지 탭 -->';
            
                if($("#noTabActive").length > 0) {
                	htm += '<ul class="tap_div2 mx" style="display:none;">';
                } else {
                	htm += '<ul class="tap_div2 mx">';
                }
            	if(viewFlag == "default") {
            		htm += '<li class="active">기본 배송지</li>';
            		htm += '<li>신규 배송지</li>';
            	} else if(viewFlag == "new") { 
            		htm += '<li>기본 배송지</li>';
            		htm += '<li class="active">신규 배송지</li>';
            	}
            	htm += '</ul>'
                +'<!-- //배송지 탭 -->'
                +'<!-- 기본배송지 -->';
            	if($("#viewFlag").val() == "default") {
            		htm += '<div class="tab_con2">';
            	} else if($("#viewFlag").val() == "new") { 
            		htm += '<div class="tab_con2" style="display : none;">';
            	}
                htm += '<div class="lately">'
                +'<button type="button" class="default_sel pMyDeliv'+ i + '"'
                +'onclick="pMyDeliv(\'' + defaultFlag + '\',\'base\', $(this),' + i +');"'
                +'data-class="pMyDeliv'+ i + '" data-text="left">' + deliTxt + '</button>';
                
            	htm +='<button type="button" class="bttn pastAddr'+ i + ' div_new"' 
            	+'onclick="pMyDeliv(\'' + newFlag +'\',\'past\', $(this), ' + i + ');"'
            	+'data-class="pastAddr'+ i + '" data-text="left">최근 배송지</button>';
                htm +='</div>'
                +'<div class="detault_view">'
                +'<table summary="기본배송정보입니다.">'
                +'<colgroup>'
                +'<col width="73px" />'
                +'<col width="*" />'
                +'</colgroup>'
                +'<caption>배송정보</caption>'
                +'<tbody>'
                +'<tr>'
                +'<th>받는 사람</th>'
                +'<td id="receiver_name_display_' + i + '">' + $("#receiver_name_display").text() + '</td>'
                +'</tr>'
                +'<tr>'
                +'<th>일반전화</th>'
                +'<td id="receiver_tel_display_' + i + '">' + $("#receiver_tel_display").text() + '</td>'
                +'</tr>'
                +'<tr>'
                +'<th>휴대폰</th>'
                +'<td id="receiver_hand_tel_display_' + i + '">' + $("#receiver_hand_tel_display").text() + '</td>'
                +'</tr>'
                +'<tr>'
                +'<th class="vat">주소</th>'
                +'<td id="receiver_base_addr_display_' + i 
                + '" data-zipcode="' + $("#receiver_base_addr_display").attr("data-zipcode") + '"'
                + '" data-base_addr="' + $("#receiver_base_addr_display").attr("data-base_addr") + '"'
                + '" data-dtl_addr="' + $("#receiver_base_addr_display").attr("data-dtl_addr") + '"'
                + '">' + $("#receiver_base_addr_display").text() + '</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'<input type="hidden" name="receiver_name_'+ i +'" id="receiver_name_'+ i +'" label="배송지'+ i +' 받는사람"  value="' + $("#receiver_name_display").text() + '" /><!-- 받는사람 -->'
                +'<input type="hidden" name="receiver_tel_'+ i +'" id="receiver_tel_'+ i +'" value="' + $("#receiver_tel_display").text() + '"/><!-- 전화번호 -->'
                +'<input type="hidden" maxlength="3" name="receiver_tel1_'+ i +'" id="receiver_tel1_'+ i +'" label="배송지'+ i +' 전화번호" value="' + $("#receiver_tel1").val() + '"/><!-- 전화번호 첫번째  -->'
                +'<input type="hidden" maxlength="4" name="receiver_tel2_'+ i +'" id="receiver_tel2_'+ i +'" label="배송지'+ i +' 전화번호" value="' + $("#receiver_tel2").val() + '"/><!-- 전화번호 두번째  -->'
                +'<input type="hidden" maxlength="4" name="receiver_tel3_'+ i +'" id="receiver_tel3_'+ i +'" label="배송지'+ i +' 전화번호" value="' + $("#receiver_tel3").val() + '"/><!-- 전화번호 세번째  -->'
                +'<input type="hidden" name="receiver_hand_tel_'+ i +'" id="receiver_hand_tel_'+ i +'" value="' + $("#receiver_hand_tel_display").text() + '"/><!-- 휴대폰번호 -->'
                +'<input type="hidden" maxlength="3" name="receiver_hand_tel1_'+ i +'" id="receiver_hand_tel1_'+ i +'" label="배송지'+ i +' 휴대폰번호" value="' + $("#receiver_hand_tel1").val() + '"/><!-- 휴대폰번호 첫번째 -->'
                +'<input type="hidden" maxlength="4" name="receiver_hand_tel2_'+ i +'" id="receiver_hand_tel2_'+ i +'" label="배송지'+ i +' 휴대폰번호" value="' + $("#receiver_hand_tel2").val() + '"/><!-- 휴대폰번호 두번째 -->'
                +'<input type="hidden" maxlength="4" name="receiver_hand_tel3_'+ i +'" id="receiver_hand_tel3_'+ i +'" label="배송지'+ i +' 휴대폰번호" value="' + $("#receiver_hand_tel3").val() + '"/><!-- 휴대폰번호 세번째 -->'
                +'<input type="hidden" id="receiver_zipcode_'+ i +'" name="receiver_zipcode_'+ i +'" label="우편번호'+ i + '" value=""/>'
                +'<input type="hidden" id="receiver_zipcode1_'+ i +'" name="receiver_zipcode1_'+ i +'" label="배송지'+ i +' 우편번호" value="' + $("#receiver_zipcode1").val() + '"/><!-- 우편번호 -->'
                +'<input type="hidden" id="receiver_base_addr_'+ i +'" name="receiver_base_addr_'+ i +'" label="배송지'+ i +' 기본주소" value="' + $("#receiver_base_addr").val() + '"/><!-- 기본주소 -->'
                +'<input type="hidden" id="receiver_dtl_addr_'+ i +'" name="receiver_dtl_addr_'+ i +'" label="배송지'+ i +' 상세주소" value="' + $("#receiver_dtl_addr").val() + '"/><!-- 상세주소 -->'
                +'</div>'
                +'</div>'
                +'<!--// 기본배송지 -->'
                +'<!-- 신규배송지 -->';
                if($("#viewFlag").val() == "default") {
            		htm += '<div class="tab_con2" style="display : none;">';
            	} else if($("#viewFlag").val() == "new") { 
            		htm += '<div class="tab_con2">'; 
            	}
                htm += '<!-- 배송지 -->';
            	if($("#noTabActive").length > 0) {
            		htm += '<div class="btn_right" style="display:none;">';
            	} else {
            		htm += '<div class="btn_right">';
            	}
                
            	htm += '<input type="text" class="mb8" id="receiver2_deliv_keyword_' + i +'" name="receiver2_deliv_keyword_' + i +'" placeholder="배송지" value=""/>';
                if(nomem == "true") {
                	htm += '<span><input type="checkbox" id="chk_deliv_new_yn_' + i +'" name="chk_deliv_new_yn_' + i +'" value="Y"/><label for="newDeliver">신규등록</label></span>';
                }
                
                htm += '</div>'
                +'<input type="text" class="mb8" id="receiver2_name_' + i +'" name="receiver2_name_'+ i +'" placeholder="받는사람" value="" maxlength="30"/>'
                +'<!-- //배송지 -->'
                +'<!-- 전화 번호 -->'
                +'<div class="phoen_wrap mb8">' 
                +'<p>'
                +'<span>'
                +'<button type="button" class="test1_num' + i + ' sel_shape btn_sel_dr" data-class="test1_num' + i + '">02</button>'
                +'<input type="hidden" name="receiver2_tel_' + i +'" id="receiver2_tel_' + i +'" value=""/>'
                +'<select name="receiver2_tel1_' + i + '" id="receiver2_tel1_' + i + '" class="hid_test1_num' + i + ' selectdata" style="display: none;">';
                
                var tel1Array = $("#receiver2_tel1 option");
                tel1Array.each(function() {
                	htm += '<option value="' + $(this).val() + '">' + $(this).text() + '</option>';
                });
                
                htm += '</select>'
                +'</span>'
                +'</p>'
                +'<p><span><input type="tel" maxlength="4" name="receiver2_tel2_' + i + '" id="receiver2_tel2_' + i + '" value="" onkeyup="onlyNumber(this);"></span></p>'
                +'<p><span><input type="tel" maxlength="4" name="receiver2_tel3_' + i + '" id="receiver2_tel3_' + i + '" value="" onkeyup="onlyNumber(this);"></span></p>'
                +'</div>'
                +'<!-- //전화 번호 -->'
                +'<!-- 휴대폰 번호 -->'
                +'<div class="phoen_wrap mb8">'
                +'<p>'
                +'<span>'
                +'<button type="button" class="test2_num' + i + ' sel_shape btn_sel_dr" data-class="test2_num' + i + '">010</button>'
                +'<input type="hidden" name="receiver2_hand_tel_' + i + '" id="receiver2_hand_tel_' + i + '" value=""/>'
                +'<select name="receiver2_hand_tel1_' + i + '" id="receiver2_hand_tel1_' + i + '" class="hid_test2_num' + i + ' selectdata" style="display: none;">';
                
                var handTel1Array = $("#receiver2_hand_tel1 option");
                handTel1Array.each(function() {
                	htm += '<option value="' + $(this).val() + '">' + $(this).text() + '</option>';
                });
                
                htm += '</select>'
                +'</span>'
                +'</p>'
                +'<p><span><input type="tel" maxlength="4" name="receiver2_hand_tel2_' + i + '" id="receiver2_hand_tel2_' + i + '" value="" onkeyup="onlyNumber(this);"></span></p>'
                +'<p><span><input type="tel" maxlength="4" name="receiver2_hand_tel3_' + i + '" id="receiver2_hand_tel3_' + i + '" value="" onkeyup="onlyNumber(this);"></span></p>'
                +'</div>'
                +'<!-- //휴대폰 번호 -->'
                +'<!-- 주소 -->'
                +'<div class="post_find mb8">'
                +'<input type="text" class="" id="receiver2_zipcode1_' + i + '"  name="receiver2_zipcode1_' + i + '" placeholder="우편번호" readonly value="" />' 
                +'<button type="button" class="bttn btn_full_address" onclick="openPopAddrFindMobile(\'receiver2_zipcode1_' + i + '\', \'zipcode2_' + i + '\', \'receiver2_base_addr_' + i + '\', \'receiver2_dtl_addr_' + i + '\', \'new_addr_txt_' + i + '\', \'turn_zipcode_' + i + '\', \'turn_base_addr_' + i + '\', \'turn_dtl_addr_' + i + '\', \'new_addr_yn_' + i + '\')";>주소찾기</button>'
                +'</div>'
                +'<input type="hidden" name="deliver_' + i + '" id="deliver_' + i + '" value="' + multi_deliver+ '"/><!-- 배송지 -->'
                +'<!-- 1: 지번주소 -->'
                +'<input type="text" title="주소 기본" class="mb8" id="receiver2_base_addr_' + i + '" name="receiver2_base_addr_' + i + '" placeholder="기본주소" value="" readonly="readonly"/>'
                +'<input type="text" title="주소 상세" class="mb8" id="receiver2_dtl_addr_' + i + '" name="receiver2_dtl_addr_' + i + '" placeholder="상세주소" value="" readonly="readonly"/>'
                +'<!-- 2: 입력주소 / 3: 표준지번주소 / 4: 도로명주소 -->'
                +'<input type="hidden" id="turn_zipcode_' + i + '" name="turn_zipcode_' + i + '" value="' + multi_turn_zipcode + '" />'
				+'<input type="hidden" id="turn_base_addr_' + i + '" name="turn_base_addr_' + i + '" value="' + multi_turn_base_addr + '" />'
				+'<input type="hidden" id="turn_dtl_addr_' + i + '" name="turn_dtl_addr_' + i + '" value="' + multi_turn_dtl_addr + '" />'
				+'<input type="hidden" id="new_addr_yn_' + i + '" name="new_addr_yn_' + i + '" value="' + multi_new_addr_yn + '" />'
				+'<input type="hidden" id="cust_deliv_id_' + i + '" name="cust_deliv_id_' + i + '" value="' + multi_cust_deliv_id + '" />'
				+'<input type="hidden" id="deliv_keyword_' + i + '" name="deliv_keyword_' + i + '" value="' + multi_deliv_keyword + '" />'
                +'</div>'
                +'<!--// 신규배송지 -->'
                
                if(OverSeasTxt == "Y") {
                	htm +='<!--// 해외직구상품 구매 -->'
                		+ '<div class="add_text_box">통관이 필요한 상품 구매시 도로명주소를 입력하셔야 합니다. <br>새주소를 선택하시고 도로명주소를 검색해주세요.</div>';
                		+'<!--// 해외직구상품 구매 -->'
                }
                
                htm += '<!-- 배송메시지 -->'
                +'<div class="div_sel">'
                +'<button type="button" class="delivReqDetail_sel'+ i + ' btn_dm sel_shape btn_sel_drv mb8 btn_sel_dr" data-class="delivReqDetail_sel'+ i + '">배송메시지를 선택하기</button>'
                +'<select name="delivReqDetail_sel_' + i + '" id="delivReqDetail_sel_' + i + '" class="hid_delivReqDetail_sel'+ i + ' selectdata" style="display: none;">'
                +'<option value="" selected="selected">배송메시지를 선택하기</option>'
                +'<option value="부재 시, 경비실에 맡겨주세요.">부재 시, 경비실에 맡겨주세요.</option>'
                +'<option value="부재 시, 핸드폰으로 연락 바랍니다.">부재 시, 핸드폰으로 연락 바랍니다.</option>'
                +'<option value="배송 전 연락 바랍니다." selected="selected" >배송 전 연락 바랍니다.</option>'
                +'<option value="">직접입력</option>'
                +'</select>'
                +'<textarea cols="10" rows="2" maxlength="20" class="txt_delivReqDetail_sel'+ i + '" id="delivReqDetail_' + i + '" name="delivReqDetail_' + i + '" style="display: none;"></textarea>'
                +'<p class="txt_group b_line2"><span>한글 20자 이내로 작성해주세요</span></p>'
                +'</div>';
                htm+='<div class="inner pt20">';
                var $list = $(".info_goods.no_pick");
                var listSize = $list.length;
                var tmp = "";
                $list.each(function(index) {
                	var $this = $(this);
                	var name = $this.find(".goods_name").text();
                	var src = $this.find("img").attr("src");
                	var alt = $this.find("img").attr("alt");
                	var opt = $this.find(".opt").text();
                	var deli_price = $this.find(".deli_price").text();
                	var selQty = $this.find(".multi_sel_qty").val();
                	
                	//다중배송지용
                	var replaceCartListVal = $this.find("#replaceCartListVal").val();
                	var multiDeliveryPrice = $this.find("#multiDeliveryPrice").val();
                	var ori_multiDeliveryPrice_unit = $this.find("#ori_multiDeliveryPrice_unit").val(); 
                	
                	var cart_id = $this.find(".multi_cart_default").val();
                	var cost_id = $this.find(".multi_cart_cost_id").val();
                	var cart_default = cart_id + "@" + selQty + "@" + i + "@" + cost_id
                	
                	
                	htm +='<dl class="opt_goods">'
                     +'<dt>' + name + '</dt>'
                     +'<dd>'
                     +'<img src="' + src + '" alt="' + alt + '" />'
                     +'<div class="options">'
                     +'<span>' + opt + '</span>';
                	if(tmp != cost_id) {
                		htm += '<span id="show_' + i + '_' + cost_id + '">' + deli_price + '</span>';
                	}
                	 tmp = cost_id;
                     htm += '<div class="opt_num">' 
                     +'<button type="button" class="multi_sel_qty_'+ i + '_' + index + ' btn_sel_dr" data-class="multi_sel_qty_'+ i + '_' + index + '">0</button>'
                     +'</div>'                
                     +'<select name="qty_' + cart_id + '[]" id="" class="hid_multi_sel_qty_'+ i + '_' + index + ' selectdata qty_' + i + '_class input_qty" style="display: none;"'
                	 +' onchange="javascript:multiQtyChange($(this))">';
                	for(var j = 0; j < (parseInt(selQty) + 1); j++) { 
                		htm += '<option value="' + j + '">' + j + '</option>';
                	}
                     htm += '</select>'
                     +'<input type="hidden" class="cart_default" value="' + cart_default + '"/>'
                     +'</div>'
                     +'</dd>';
                     if(replaceCartListVal != undefined) {
                    	 htm += '<input type="hidden" id="delivery_' + i + '_' + replaceCartListVal + '" name="multiDeliveryPrice[]" value="' + multiDeliveryPrice + '"/>'
    					 +'<input type="hidden" id="delivery_ori_' + i + '_' + replaceCartListVal + '" name="ori_multiDeliveryPrice[]" value="' + multiDeliveryPrice + '"/>'
    					 +'<input type="hidden" id="delivery_ori_unit_' + i + '_' + replaceCartListVal + '" name="ori_multiDeliveryPrice_unit[]" value="' + ori_multiDeliveryPrice_unit + '"/>'
    					 +'<input type="hidden" id="delivery_dc_' + i + '_' + replaceCartListVal + '" name="deliveryDcPrice[]" value="0"/>'
    					 +'<input type="hidden" id="delivery_coupon_' + i + '_' + replaceCartListVal + '" name="deliveryDcCoupon[]" value=""/>'
    					 +'<input type="hidden" id="delivery_layout_' + i + '_' + replaceCartListVal + '" name="deliveryLayout[]" value="' + i + '"/>'
    					 +'<input type="hidden" id="delivery_cost_' + i + '_' + replaceCartListVal + '" name="deliveryCost[]" value="' + replaceCartListVal + '"/>';
                     }
                     
                     htm += '</dl>'
                });
                	
                htm += '</div>';
                if(i == 1 && $("#noTabActive").length == 0) {
                	htm +='<div class="gift_wrap3 gift_def">'
    					+'<input type="checkbox"  value="Y" name="multi_chk_deliv_base_yn" id="multi_chk_deliv_base_yn"/><label for="chk_deliv_base_yn">선택한 배송지를 기본 배송지로 변경</label>'
    					+'</div>';
                }
	
                htm += '</div>'
                +'<!-- //배송지 -->'; 
        }
   		//개발용 다중배송지
        return htm;
    }
}
$('.multi_tit').length && multiDiv.init();

/* ok 캐쉬백 조회 버튼 레이어팝업*/
var layerOkcashback = {
    init: function(){

        this.$btn = $('.btn_okcashback');
        this.$tg = $('.layer_okcashback');
        this.$close = this.$tg.find('.btn_pop_close');
        this.$cancel = this.$tg.find('.btn_cansel');
        this.$save = this.$tg.find('.btn_save');
        this.act();

    },
    act:function(){
        var _this = this;

        this.$btn.on('click',function(){
        	pOKCashbagUse($(this));
        });

        this.$close.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.layer_okcashback').hide().removeClass('active');
        });

        this.$cancel.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.layer_okcashback').hide().removeClass('active');
            oKFlag = true; // 개발용
        });

        this.$save.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.layer_okcashback').hide().removeClass('active');
            
//            _this.$btn.text('모두사용');
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
$('.btn_okcashback').length && layerOkcashback.init();

/* SKPLANET 베네피아 조회 버튼 레이어팝업*/
var layerSkPlanet = {
		init: function(){
			
			this.$btn = $('.btn_skplanet');
			this.$tg = $('.layer_skplanet');
			this.$close = this.$tg.find('.btn_pop_close');
			this.$cancel = this.$tg.find('.btn_cancel');
			this.$save = this.$tg.find('.btn_save');
			this.act();
			
		},
		act:function(){
			var _this = this;
			
			this.$btn.on('click',function(){
				pSkPlanetUse($(this));
			});
			
			this.$close.on('click',function(){
				var $this = jQuery(this);
				$this.closest('.layer_skplanet').hide().removeClass('active');
			});
			
			this.$cancel.on('click',function(){
				var $this = jQuery(this);
				$this.closest('.layer_skplanet').hide().removeClass('active');
				oKFlag = true; // 개발용
			});
			
			this.$save.on('click',function(){
				var $this = jQuery(this);
				$this.closest('.layer_skplanet').hide().removeClass('active');
				
//            _this.$btn.text('모두사용');
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
$('.btn_skplanet').length && layerSkPlanet.init();

/* 개인 정보 제3자 제공/위탁 레이어팝업 */
var privacyAgree = {
    init: function(){

        this.$btn = $('.all_agree button');
        this.$tg = $('.layer_privacy');
        this.$close = this.$tg.find('.btn_pop_close');
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
            $this.closest('.layer_privacy').hide().removeClass('active');
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
$('.all_agree').length && privacyAgree.init();

/* 청구할인 불가 상품 레이어팝업*/
var layerClaim = {
    init: function(){

        this.$btn = $('.btn_order_pay');
        this.$tg = $('.layer_claim');
        this.$close = this.$tg.find('.btn_pop_close');
        this.$cancel = this.$tg.find('.btn_cansel');
        this.$save = this.$tg.find('.btn_save');
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
            $this.closest('.layer_claim').hide().removeClass('active');
        });

        this.$cancel.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.layer_claim').hide().removeClass('active');
        });

        this.$save.on('click',function(){
            var $this = jQuery(this);
            $this.closest('.layer_claim').hide().removeClass('active');
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
$('.btn_order_pay').length && layerClaim.init();

/* 결제수단 선택 */
var paySelect ={
    init:function(obj){
        this.$wrap = $('.pay_method');
        this.$tab5 = this.$wrap.find('.tap_div5 li');
        this.$tab5_con = this.$wrap.find('.tap5_area');

        this.$inp = this.$wrap.find('.mutil_pay input');
        this.$inp_m = this.$wrap.find('.multi_payment');

        this.$tap_credit1 = this.$wrap.find('.tab_ords1').find('li');
        this.$tap_credit2 = this.$wrap.find('.tab_ords2').find('li');
        this.$ins_choice = this.$wrap.find('.ins_choice').find('li');
        this.$ins_choice_area = this.$wrap.find('.ins_choice_area')
        this.$tap_credit_area1 = this.$wrap.find('.tab_ords1_con');
        this.$tap_credit_area2 = this.$wrap.find('.tab_ords2_con');

        this.$tap_div2 = this.$wrap.find('.tap_interest .tap_div2 li');
        this.$tap2_area = this.$wrap.find('.tap2_area');

        this.$nobank = this.$wrap.find('.nobank input');
        this.$nobank_m = this.$wrap.find('.no_bankbook1');

        this.$nobank2 = this.$wrap.find('.nobank2 input');
        this.$nobank_m2 = this.$wrap.find('.no_bankbook2');

        this.$tap_credit_v1 = this.$wrap.find('.tap_credit_v1 li');
        
        this.act();


    },
    act:function(){

        var _this = this;

        /* 결제수단 선택 */
        this.$tab5.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            //개발용
            if($this.hasClass("active")) {
            	return false;
            }
            if(Number(paymentPrice) == 0) {
            	return false;
            }
            //개발용   
            $('.pay_new').show();
            $this.find('.pay_new').hide();
            $this.closest('.tap_div5').find('li').removeClass('active');
            $this.addClass('active');
            $this.closest('.pay_method').find('.tap5_area').hide();
            $this.closest('.pay_method').find('.tap5_area').eq($index).show();
            _this.$inp.prop('checked',false);
            _this.$inp_m.hide();
            _this.$inp_m.find('li').removeClass('active');
            
            //개발용
            $(".payType:checked").prop("checked", false);
            $(".payprice").val(0);
            $this.find(".payType").prop("checked", true);
            $(".payType").prop("disabled", true);
    		
    		calculate();
    		setPaytype();
            //개발용
        });

        /* 복합결제 체크 유무 */
        this.$inp.change(function(){

            var $this = jQuery(this);

            if(_this.$inp.is(':checked')){
                _this.$tab5.removeClass('active');
                _this.$tab5_con.hide();
                _this.$inp_m.show();
                _this.$inp_m.find('li').removeClass('active');
            }else if(!_this.$inp.is(':checked')){
                _this.$inp_m.hide();
                _this.$tab5_con.hide();
            }
			//개발용
            $(".payType:checked").prop("checked", false);
            $(".payprice").val(0);
            $(".multi_payPrice").val(0);
            
            calculate();
    		setPaytype();
			//개발용
        });

        /* 복합결제 해당 부분 온 오프 */
        this.$inp_m.find('li').not(".pay li").on('click',function(event){ //개발용

            var $this = jQuery(this);
            var $index = $this.index();
            //개발용
            if($this.hasClass("active")) {
            	return false;
            }

            _this.$inp_m.find('li').removeClass('active');
            $this.addClass('active');
            _this.$tab5_con.hide();

            $(".payType:checked").prop("checked", false);
            $(".payprice").val(0);
            $(".multi_payPrice").val(0);
            
            //점검 체크
            var pmCheck = payTypePMCheck.check('3');
            
            if($index === 0){//신용카드 + 무통장
                $("#paytype1").show(); //신용카드
                $("#paytype3").show(); //무통장
                
                $("#pay1, #pay2").prop("checked", true);

            }else if($index === 1){//무통장 + 휴대폰
            	$("#paytype3").show(); // 무통장
                $("#paytype10").show(); //휴대폰
                
                $("#pay2, #pay3").prop("checked", true);
                
            }else if($index === 2){//페이코 + 무통장
                $("#paytype15").show(); // 페이코
                $("#paytype3").show(); // 무통장
                
                $("#pay5, #pay2").prop("checked", true);
            }
            calculate();
    		setPaytype();
    		//개발용
        });

        /* 신용카드 - 개인/개인법인 공요법인 탭이동 */
        this.$tap_credit1.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            //개발용
        	if($("#public_only_yn").val() == "Y") {
    			return false;
    		}
        	
            $this.closest('.tab_ords1').find('li').removeClass('active');
            $this.addClass('active');
            $this.find("input:radio").prop("checked", true);
            //개발용
        });


        /* 신용카드 - 일시불 무이자 일반할부 체크 */
        this.$ins_choice.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            
            //결제수단 변경 화면 
            if($("#payChengeFlag").length > 0) {
            	return false;
            }
            
            $this.closest('.ins_choice').find('li').removeClass('active');
            $this.addClass('active');
            _this.$ins_choice_area.show();
            
            if($index === 0){
                _this.$ins_choice_area.hide();
            }
            $this.find("input:radio").prop("checked", true);
            setInstallmentMonth($this.find("input:radio").val());
        });

        /* 신용카드 - 청구할인안내 무이자안내 탭이동 */
        this.$tap_div2.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            
            $this.closest('.tap_div2').find('li').removeClass('active');
            $this.addClass('active');
            
            if($this.hasClass("samsungPay")){
            	
            	$this.closest('.pay_method').find('.tap2_area.samsungPay').hide();
            	$this.closest('.pay_method').find('.tap2_area.samsungPay').eq($index).show();
            	
            }else{
            	
            	$this.closest('.pay_method').find('.tap2_area').not(".samsungPay").hide();
            	$this.closest('.pay_method').find('.tap2_area').not(".samsungPay").eq($index).show();
            	
            }

        });

        /* 무통장 - 현금영수증 신청 체크 유무 */
        this.$nobank.change(function(){

            var $this = jQuery(this);

            if(_this.$nobank.is(':checked')){
                _this.$nobank_m.show();
            }else if(!_this.$nobank.is(':checked')){
                _this.$nobank_m.hide();
            }

        });

        /* 무통장 - 개인소득공제용 사업자지출증빙용 탭이동*/
        this.$tap_credit2.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            
            $this.closest('.tab_ords2').find('li').removeClass('active');
            $this.addClass('active');
            //개발용
            $this.find("input:radio").prop("checked", true); 
            setKeyDiv($this.find("input:radio").val());
            //개발용            
            $this.closest('.pay_method').find('.tab_ords2_con').hide();
            $this.closest('.pay_method').find('.tab_ords2_con').eq($index).show();

        });

        /* 무통장 - 소비자 피해 보상보험에 가입 체크 유무 */
        this.$nobank2.change(function(){

            var $this = jQuery(this);

            if(_this.$nobank2.is(':checked')){
                _this.$nobank_m2.show();
            }else if(!_this.$nobank2.is(':checked')){
                _this.$nobank_m2.hide();
            }

        });

        /* 무통장 - 소비자 피해 보상보험에 가입 내국인 외국인 체크 && 남자 여자 체크 */
        this.$tap_credit_v1.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            
            $this.closest('.tap_credit_v1').find('li').removeClass('active');
            $this.addClass('active');
            $this.find("input:radio").prop("checked", true); //개발용
        });  
    }
}
//$('.pay_method').length && paySelect.init();

var adderssSet ={
    defaultAddress:function(){
        alert('기본배송지 사용');
    },
    newAddress:function(){
        alert('최근배송지 사용');
    }
}

/* sale on off */
var saleOnoff2 = {
    init:function(){
        this.$wrap = $('.price');
        this.$btn = this.$wrap.find('.minus');
        this.$tg = $('.benefits');
        this.act();

    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.hasClass('active')){
                $this.closest('.price').next().show();
                $this.addClass('active');
            }else if($this.hasClass('active')){
                $this.closest('.price').next().hide();
                $this.removeClass('active');
            }
        });
        
    }    
}
jQuery('.total_price').length && saleOnoff2.init();

/* ak point */
var pointsave = {
    init:function(){
        this.$wrap = $('.point_save');
        this.$btn = this.$wrap.find('li input');
        this.$tg = $('.point_save_wrap');
        this.act();

    },
    act:function(){

        var _this = this;
        this.$btn.on('change',function(){
            var $this = jQuery(this);
            var $index = $this.closest('li').index();
            _this.$tg.hide();
            _this.$tg.eq($index).show();
        });
        
    }    
}
jQuery('.point_save').length && pointsave.init();

/* agree on off */
var agreeCheck = {
    init:function(){
        this.$wrap = $('.full_wrap');
        this.$btn = this.$wrap.find('button');
        this.$tg = $('.all_agree');
        this.act();

    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);
            if(!$this.closest('.full_wrap').hasClass('active')){
                $this.closest('.full_wrap').next().show();
                $this.closest('.full_wrap').addClass('active');
            }else if($this.closest('.full_wrap').hasClass('active')){
                $this.closest('.full_wrap').next().hide();
                $this.closest('.full_wrap').removeClass('active');
            }
        });
        
    }    
}
jQuery('.full_wrap').length && agreeCheck.init();

/* agree checkbox */
var agreeCheckbox = {
    init: function(obj1,obj2){
        this.$divbox = $('.'+obj1);
        this.$divitem = $('.'+obj2);
        this.addEvent(obj1,obj2);
    },
    addEvent: function(obj1,obj2){
        var _this = this;

        this.$divbox.on('click', function(){
            _this.$divitem.prop('checked', $(this).prop('checked')? true: false);
        });
        $(document).on('click', _this.$divbox, function(){setTimeout( function(){ _this.checkAll(obj1,obj2) }, 50); }); 
        
    },
    checkAll: function(obj1,obj2){
        var state = 1;
        $('.'+obj2).each(function(i,el){
            if($(el).prop('checked')) {state *= 1;}
            else {state *= 0;}
        });
        $('.'+obj1).prop('checked', state);
    }
    
}
$('.order_wrap').length && agreeCheckbox.init('all_agree_checkbox','agree_checkbox');

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

    },
    //팝업버튼클릭
    showPopup : function($obj, txt) {
    	
    	 var $this = $obj;
         var $layer = 'layer_'+txt.substr(txt.lastIndexOf('_')+1)+'_wrap'; 
         var type = txt.substr(4,4);
             if(type === 'full'){
                 var h1 = $(window).scrollTop();
                 $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
                 $('.'+$layer).attr('data-height',h1)
                 setTimeout(function(){
//                     jQuery('.detail_wrap').length && swiperPw.init();
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
//             e.preventDefault();
    },
    //팝업닫기
    resizePop : function ($obj, txt) {
    	
    	 var $this = $obj;
         var $layer = 'layer_'+txt.substr(txt.lastIndexOf('_')+1)+'_wrap'; 
         var type = txt.substr(4,4);

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
    }
}
//$('.layer_couponuse_wrap').length && layerFulls.addEvent('btn_full_couponuse');//무료배송쿠폰
//$('.layer_couponsale_wrap').length && layerFulls.addEvent('btn_full_couponsale');//할인쿠폰
$('.layer_events_wrap').length && layerFulls.addEvent('btn_full_events');//결제/할인 혜택 전체 보기
$('.layer_phone_wrap').length && layerFulls.addEvent('btn_full_phone');//휴대폰결제 자세히보기
$('.layer_book_wrap').length && layerFulls.addEvent('btn_full_book');//도서 소득공제 자세히보기

//var layerEvent = {
//init: function(obj1,obj2){
//    this.$wrap = $('.'+obj1);
//    this.$btn = $('.'+obj2);
//
//    this.$body = $('body');
//    this.$close = this.$wrap.find('.btn_pop_close');
//    this.addEvent();
//},
//addEvent: function(){
//    var _this = this;
//    var $hs = this.$btn.offset().top;
//    this.$btn.on('click',function(){
//        
//        _this.$body.css({'overflow':'','position':''});
//        _this.$wrap.show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
//    });
//
//    $(document).on('click','.btn_pop_close',function(e){
//         var $this = jQuery(this);
//
//        _this.$body.css({'overflow':'','position':''}).scrollTop($hs + -50);
//        _this.$wrap.hide().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
//        e.preventDefault();
//
//    });
//
//    $(window).on('resize',function(){
//        _this.check();
//    });
//    
//},
//check:function(){
//    var $hss = screen.height;
//    this.$wrap.find('.popup_wrap').css({'height':$hss+'px'});
//    }
//}
//$('.layer_full_event').length && layerEvent.init('layer_full_event','btn_event');

/* notice box */
var noticeBox = {
    init: function(){
        this.$wrap = $('.notice_alert');
        this.$close = $('.notice_alert span');
        this.addEvent();
    },
    addEvent: function(obj1,obj2){
        var _this = this;

        this.$close.on('click', function(){
            _this.$wrap.hide();
        });
    }
}
$('.order_wrap').length && noticeBox.init();

/* 조회버튼 함수 */
var pointCheck = {
    textEvent: function(obj){
        this.$btn = $('.'+obj);
        this.$btn.text('모두사용');
    }
}

/* 점검 체크 */
var payTypePMCheck = {
	check: function(p){
	    var v_today = this.getDate();
		if(p == '3') { //무통장 입금
			 if(20170715235959 <= v_today && v_today <= 20170716020100){ 
				 alert("보다 나은 서비스 제공을 위해 무통장 입금 관련 점검 진행중입니다.\n" +
							"무통장 입금 외 타 결제 수단으로 결제 부탁드립니다.\n" +
							"사용에 불편을 드려 죄송합니다.\n" +
							"점검시간 : 2017년 07월 16일 (일)  00:00 ~ 02:00  (2시간)");
				 return false;
			 }
		}else if(p = '3R') {
			if(20170715235959 <= v_today && v_today <= 20170716020100){ 
				alert("보다 나은 서비스 제공을 위해 계좌확인 관련 점검 진행중입니다.\n" +
					"사용에 불편을 드려 죄송합니다.\n" +
					"점검시간 : 2017년 07월 16일 (일)  00:00 ~ 02:00  (2시간)\n");
				return false;
			}
		}
		return true;
	},
	getDate: function(){
		var d = new Date();
	    var v_today =
	    	this.getZeroDigit(d.getFullYear(), 4) +
	    	this.getZeroDigit(d.getMonth() + 1, 2) +
	    	this.getZeroDigit(d.getDate(), 2) +
	    	this.getZeroDigit(d.getHours(), 2) +
	    	this.getZeroDigit(d.getMinutes(), 2) +
	    	this.getZeroDigit(d.getSeconds(), 2);
	    return v_today;
	    
	},
	getZeroDigit: function(n, digits){
		var zero = '';
	    n = n + "";

	    if (n.length < digits) {
	        for (i = 0; i < digits - n.length; i++)
	            zero += '0';
	    }
	    return zero + n;
	}
}

/* 매장요청 메세지 등록 버튼 레이어팝업*/
var layerVendorMsg = {
		init: function(){
			
			this.$btn = $('.btn_full_VendorMsg');
			this.$tg = $('.layer_msg');
			this.$close = this.$tg.find('.btn_pop_close');
			this.$cancel = this.$tg.find('.btn_cancel');
			this.$save = this.$tg.find('.btn_save');
			this.$gft = $('.gft');
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
	            
	            
	            var c_id = _this.$gft.find('.ipt_txt_small3').attr('id');
	            var msg = _this.$gft.find('.ipt_txt_small3').val();
	            $("#ven_msg_id").val(c_id);
	            $("#ven_msg").val(msg);
	            
	        });
			
			this.$close.on('click',function(){
				var $this = jQuery(this);
				$this.closest('.layer_msg').hide().removeClass('active');
			});
			
			this.$cancel.on('click',function(){
				var $this = jQuery(this);
				$this.closest('.layer_msg').hide().removeClass('active');
			});
			
			this.$save.on('click',function(){
				var $this = jQuery(this);
				$this.closest('.layer_msg').hide().removeClass('active');
				
				$('#'+$('#ven_msg_id').val()).val($('#ven_msg').val());
				
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
$('.btn_full_VendorMsg').length && layerVendorMsg.init();

/* 해외배송상품 통관번호 수집/제공 동의*/
var perIndexAgree = {
    init: function(){

        this.$btn = $('.btn_persIndex');
        this.$tg = $('.layer_persIndex');
        this.$close = this.$tg.find('.btn_pop_close');
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
            $this.closest('.layer_persIndex').hide().removeClass('active');
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
$('.layer_persIndex').length && perIndexAgree.init();
