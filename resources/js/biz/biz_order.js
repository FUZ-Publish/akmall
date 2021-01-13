//할인쿠폰
function couponApplyPopUp(){
	$("#salCp").empty();
	var url = "/order/pDiscCouponApply.do";
	
	$.ajax({
		type : "post",
		url : url,
		dataType : 'html',
		data : $("#orderFrm").serialize(),
		success : function(data) {
			
			$("#salCp").html(data);
			popTab.init('popup_tab_sale','tap_div2','tap_con');
			tooltip.init('btn_help','layer_help');
			popOffOn.init();
			
			layerFulls.showPopup($(".btn_full_couponsale"), "btn_full_couponsale");
			layerFulls.resizePop($(".btn_full_couponsale"), "btn_full_couponsale");
		},
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

//무료배송
function couponDeliveryApplyPopUp(){
	
	var frm = document.orderFrm;
	if (frm.place1 && frm.place1.checked){
		var tot_goods_cnt = frm.tot_goods_cnt.value;
		var slt_goods_cnt = 0;

		//SetMultiDeliveryAjaxM.jsp 확인필요 
		$(".input_qty").each(function() {
			slt_goods_cnt += Number($(this).val());
		});
		
		if (tot_goods_cnt != slt_goods_cnt){
			alert("배송지의 상품수량을 선택해 주세요.");
			return false;
		}
	}	
	$("#delivCp").empty();
	var url = "/order/pFreeDelivCouponAply.do";
			
	$.ajax({
		type : "post",
		url : url,
		dataType : 'html',
		data : $("#orderFrm").serialize(),
		success : function(data) {
			$("#delivCp").html(data); 
			popOffOn.init();
			
			layerFulls.showPopup($(".btn_full_couponuse"), "btn_full_couponuse");
			layerFulls.resizePop($(".btn_full_couponuse"), "btn_full_couponuse");
			
		},
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

//계산 함수(paymentPrice을 세팅한다.)
function calculate(multiChange){
	  dcPrice   		= 0;
	  totalDCPrice	= 0;
	  pointDc			= 0;
	  deliveryPrice   = defaultDeliveryPrice;
	  paymentPrice    = Number(productPrice) + Number(deliveryPrice);

	  //할인수단 체크
	  var couponAmt     = 0;       //쿠폰
	  var lguPlusAmt    = 0;       //LG U+ 할일
	  var mileAmtView   = 0;       //적립금 즉시할인
	  var lumpAmt       = 0;       //일시불 할인

	  var akMileDcPoint = 0;       //AK마일리지
	  var cashbagInput  = 0;       //OK캐쉬백
	  var ohPointInput  = 0;       //오!포인트
	  var pointInput    = 0;       //적립금보유
	  var voucherPoint  = 0;       //상품권포인트
	  var depositAmt    = 0;       //예치금
	  var naverMile     = 0;       //네이버 마일리지
	  var epointAmt     = 0;       //E포인트
	  var cyberAmt      = 0;       //사이버 머니
	  var cpDeliAmt     = 0;       //무료배송쿠폰
	  var skPlanetAmt   = 0;       //SK Planet 복지포인트
	  var mediccAmt     = 0;       //메디씨앤씨(구 메디피아), Visit포인트
	  var exanaduAmt    = 0;       //이제너두 포인트
	
	  var compSprtAmt   = 0;		 //회사 지원금
	  var appDCAmt      = 0;       //APP 할인 프로모션
	
	
	  if($("#couponAmt").length > 0) couponAmt     = uncomma($("#couponAmt").val());        //쿠폰
	  if($("#cpDeliAmt").length > 0) cpDeliAmt     = uncomma($("#cpDeliAmt").val());        //무료배송쿠폰
	  if($("#lguPlusAmt").length > 0) lguPlusAmt    = uncomma($("#lguPlusAmt").val());      //LG U+ 할인
	  if($("#mileAmtView").length > 0) mileAmtView   = uncomma($("#mileAmtView").val());    //적립금 즉시할인
	  if($("#akMileDcPoint").length > 0) akMileDcPoint = uncomma($("#akMileDcPoint").val());//AK마일리지
	  if($("#cashbagInput").length > 0) cashbagInput  = uncomma($("#cashbagInput").val());  //OK캐쉬백
	  if($("#ohPointInput").length > 0) ohPointInput  = uncomma($("#ohPointInput").val());  //오!포인트
	  if($("#pointInput").length > 0) pointInput    = uncomma($("#pointInput").val());      //적립금보유
	  if($("#voucherPoint").length > 0) voucherPoint  = uncomma($("#voucherPoint").val());  //상품권포인트
	  if($("#depositAmt").length > 0) depositAmt    = uncomma($("#depositAmt").val());      //예치금
	  if($("#naverMile").length > 0) naverMile     = uncomma($("#naverMile").val());        //네이버 마일리지
	  if($("#epointAmt").length > 0) epointAmt     = uncomma($("#epointAmt").val());        //E포인트
	  if($("#cyberAmt").length > 0) cyberAmt     = uncomma($("#cyberAmt").val());        //사이버 머니
	  if($("#SKPlanetAmt").length > 0) skPlanetAmt  = uncomma($("#SKPlanetAmt").val());        //SK플래닛
	  if($("#MediCCAmt").length > 0) mediccAmt  = uncomma($("#MediCCAmt").val());        //메디엔씨
	  if($("#ordEtbsAmt").length > 0) exanaduAmt  = uncomma($("#ordEtbsAmt").val());        //이제너두
	  if($("#compSprtAmt").length > 0) compSprtAmt  = 0;                                     //회사지원금
	  if($("#appDCAmt").length > 0) appDCAmt  = uncomma($("#appDCAmt").val());                                           //APP 할인 프로모션
	  
	  totalDCPrice = Number(couponAmt) + Number(lguPlusAmt) + Number(mileAmtView) + Number(akMileDcPoint) + Number(cashbagInput);
	  totalDCPrice += Number(pointInput) + Number(voucherPoint) + Number(depositAmt) + Number(naverMile);
	  totalDCPrice += Number(epointAmt) + Number(cyberAmt) + Number(skPlanetAmt) + Number(mediccAmt) + Number(exanaduAmt);
	  totalDCPrice += Number(appDCAmt)  + Number(ohPointInput);
	
	  pointDc = Number(totalDCPrice) - Number(couponAmt);
	  
	  if(document.orderFrm.place1 && document.orderFrm.place1.checked){
			deliveryPrice = 0;
			var multiDeliveryPrice = document.getElementsByName("multiDeliveryPrice[]");
	
			for(var i=0;i<multiDeliveryPrice.length;i++){
				deliveryPrice += Number(multiDeliveryPrice[i].value);
			}
	
			//다중배송이면서 배송비가 책정전에는 기본 배송비를 넣어준다.
			if(Number(deliveryPrice) == 0 && Number(document.orderFrm.defaultDeliveryPrice.value) > 0)
				deliveryPrice = document.orderFrm.defaultDeliveryPrice.value;
			
	  }
	
	  //무료배송쿠폰적용
	  if(Number(cpDeliAmt) > 0){
	  	deliveryPrice = Number(deliveryPrice) - Number(cpDeliAmt);
	  	$("#dc_delivery_coupon").html(comma(cpDeliAmt));
	  }
	  else{
	  	$("#dc_delivery_coupon").html(0);
	  }
	
	  //할인혜택 및 적립금 및 포인트의 합이 결제금액 보다 크면 포인트에서 뺀다
	  if(Number(totalDCPrice) > (Number(productPrice) + Number(deliveryPrice) - Number(defaultdcPrice))){
	  	var minusPrice = Number(totalDCPrice) - (Number(productPrice) + Number(deliveryPrice) - Number(defaultdcPrice));
		    if(Number(couponAmt) > 0){
		    	if(Number(pointInput) >= Number(couponAmt)){
		    		pointInput = Number(pointInput) - Number(minusPrice);
		    		$("#pointInput").val(comma(pointInput));
				}
				else if(Number(voucherPoint) >= Number(couponAmt)){
		    		voucherPoint = Number(voucherPoint) - Number(minusPrice);
		    		$("#voucherPoint").val(comma(voucherPoint));
				}
				else if(Number(depositAmt) >= Number(couponAmt)){
		    		depositAmt = Number(depositAmt) - Number(minusPrice);
		    		$("#depositAmt").val(comma(depositAmt));
				}
				else if(Number(epointAmt) >= Number(couponAmt)){
		    		epointAmt = Number(epointAmt) - Number(minusPrice);
		    		$("#epointAmt").val(comma(epointAmt));
				}
				else if(Number(cyberAmt) >= Number(couponAmt)){
		    		cyberAmt = Number(cyberAmt) - Number(minusPrice);
		    		$("#cyberAmt").val(comma(cyberAmt));
				}
				else if(Number(naverMile) >= Number(couponAmt)){
		    		naverMile = Number(naverMile) - Number(minusPrice);
		    		$("#naverMile").val(comma(naverMile));
				}
	
	
		    	totalDCPrice = Number(couponAmt) + Number(lguPlusAmt) + Number(mileAmtView) + Number(akMileDcPoint) + Number(cashbagInput);
		        totalDCPrice += Number(pointInput) + Number(voucherPoint) + Number(depositAmt) + Number(naverMile);
		        totalDCPrice += Number(epointAmt) + Number(cyberAmt) + Number(skPlanetAmt) + Number(mediccAmt) + Number(exanaduAmt) + Number(ohPointInput);
		        totalDCPrice += Number(appDCAmt) + Number(ohPointInput);
	
		        pointDc = Number(totalDCPrice) - Number(couponAmt);
		    }
	
		    if(Number(mileAmtView) > 0){
		    	if(Number(pointInput) >= Number(mileAmtView)){
		    		pointInput = Number(pointInput) - Number(minusPrice);
		    		$("#pointInput").val(comma(pointInput));
				}
				else if(Number(voucherPoint) >= Number(mileAmtView)){
		    		voucherPoint = Number(voucherPoint) - Number(minusPrice);
		    		$("#voucherPoint").val(comma(voucherPoint));
				}
				else if(Number(depositAmt) >= Number(mileAmtView)){
		    		depositAmt = Number(depositAmt) - Number(minusPrice);
		    		$("#depositAmt").val(comma(depositAmt));
				}
				else if(Number(epointAmt) >= Number(mileAmtView)){
		    		epointAmt = Number(epointAmt) - Number(minusPrice);
		    		$("#epointAmt").val(comma(epointAmt));
				}
				else if(Number(cyberAmt) >= Number(mileAmtView)){
		    		cyberAmt = Number(cyberAmt) - Number(minusPrice);
		    		$("#cyberAmt").val(comma(cyberAmt));
				}
				else if(Number(naverMile) >= Number(mileAmtView)){
		    		naverMile = Number(naverMile) - Number(minusPrice);
		    		$("#naverMile").val(comma(naverMile));
				}
	
	
		    	totalDCPrice = Number(couponAmt) + Number(lguPlusAmt) + Number(mileAmtView) + Number(akMileDcPoint) + Number(cashbagInput);
		        totalDCPrice += Number(pointInput) + Number(voucherPoint) + Number(depositAmt) + Number(naverMile);
		        totalDCPrice += Number(epointAmt) + Number(cyberAmt) + Number(skPlanetAmt) + Number(mediccAmt) + Number(exanaduAmt) + Number(ohPointInput);
		        totalDCPrice += Number(appDCAmt) + Number(ohPointInput);
	
		        pointDc = Number(totalDCPrice) - Number(couponAmt);
		    }
	
		    if(Number(mileAmtView) == 0 && Number(couponAmt) == 0) { //두 경우도 아닐 경우 포인트에서 뺸다
		    	if(Number(akMileDcPoint) >= Number(minusPrice)){
		    		akMileDcPoint = Number(akMileDcPoint) - Number(minusPrice);
		    		$("#akMileDcPoint").val(comma(akMileDcPoint));
		    	}
		    	else if(Number(pointInput) >= Number(minusPrice)){
		    		pointInput = Number(pointInput) - Number(minusPrice);
		    		$("#pointInput").val(comma(pointInput));
				}
				else if(Number(voucherPoint) >= Number(minusPrice)){
		    		voucherPoint = Number(voucherPoint) - Number(minusPrice);
		    		$("#voucherPoint").val(comma(voucherPoint));
				}
				else if(Number(depositAmt) >= Number(minusPrice)){
		    		depositAmt = Number(depositAmt) - Number(minusPrice);
		    		$("#depositAmt").val(comma(depositAmt));
				}
				else if(Number(epointAmt) >= Number(minusPrice)){
		    		epointAmt = Number(epointAmt) - Number(minusPrice);
		    		$("#epointAmt").val(comma(epointAmt));
				}
				else if(Number(cyberAmt) >= Number(minusPrice)){
		    		cyberAmt = Number(cyberAmt) - Number(minusPrice);
		    		$("#cyberAmt").val(comma(cyberAmt));
				}
				else if(Number(naverMile) >= Number(minusPrice)){
		    		naverMile = Number(naverMile) - Number(minusPrice);
		    		$("#naverMile").val(comma(naverMile));
				}
	
	
		    	totalDCPrice = Number(couponAmt) + Number(lguPlusAmt) + Number(mileAmtView) + Number(akMileDcPoint) + Number(cashbagInput);
		        totalDCPrice += Number(pointInput) + Number(voucherPoint) + Number(depositAmt) + Number(naverMile);
		        totalDCPrice += Number(epointAmt) + Number(cyberAmt) + Number(skPlanetAmt) + Number(mediccAmt) + Number(exanaduAmt) + Number(ohPointInput);
		        totalDCPrice += Number(appDCAmt) + Number(ohPointInput);
	
		        pointDc = Number(totalDCPrice) - Number(couponAmt);
			}
	  }
	
	  	totalDCPrice = Number(totalDCPrice)  + Number(defaultdcPrice);
		paymentPrice = (Number(productPrice) + Number(deliveryPrice)) - Number(totalDCPrice);
		//회사지원금 산출
		if($("#compSprtAmt").length > 0){
	
			if(Number($("#userCmpSprtAmt").val()) > 0){
				compSprtAmt = floor((Number($("#grantsPrice").val()) / 100) * Number($("#compSprtPer").val()) , -2);
	
				if(Number($("#userCmpSprtAmt").val()) < compSprtAmt)
					compSprtAmt = Number($("#userCmpSprtAmt").val());
	
				$("#compSprtAmt").val(comma(compSprtAmt));
	
				paymentPrice = Number(paymentPrice) - Number(compSprtAmt);
				totalDCPrice += Number(compSprtAmt);
				pointDc      += Number(compSprtAmt);
			}
		}
	
		document.orderFrm.paymentPrice.value      = paymentPrice;
		document.orderFrm.basicPaymentPrice.value = Number(productPrice) + Number(deliveryPrice) + Number(cpDeliAmt);
	
		showPrice(multiChange);
	
		var sum = 0;
		var obj; 
		var tmp = 0;
		var cnt = 0;
		
		if(Number(paymentPrice) > 0){
	
//			$("#paymentLayer").show();
			$(".payType").each(function(){
				if($(this).prop("checked")){
					var priceObj = $(this).parent().find("input[type=text]");
					sum += Number(uncomma(priceObj.val()));
	
					if(cnt == 0){
						obj = priceObj;
						tmp = Number(uncomma(priceObj.val()));
					}
					else if(Number(uncomma(priceObj.val())) < tmp  && tmp > 0){
						obj = priceObj;
						tmp = Number(uncomma(priceObj.val()));
					}
					cnt++;
				}
			});
	
			if(obj){
				if(Number(paymentPrice) > Number(sum)){
					var price = Number(paymentPrice) - Number(sum) + Number(uncomma(obj.val()));
					obj.val(comma(price));
					obj.prop("readonly", false);
				}
	
				if(Number(paymentPrice) < Number(sum)){
					var price = Number(sum) - Number(paymentPrice);
	
					$(".payType").each(function(){
						if($(this).prop("checked")){
							var priceObj = $(this).parent().find("input[type=text]");
							var thisPrice = Number(uncomma(priceObj.val()));
	
							if(thisPrice >= price){
								obj = priceObj;
								tmp = Number(uncomma(priceObj.val()));
							}
						}
					});
	
					obj.val(comma(Number(tmp) - Number(price)));
					obj.prop("readonly", false);
				}
				
				if($("#multi_pay_check").is(":checked")) {//복합결제 가격 setting.
					var $multiLi = $('.pay_method').find('.multi_payment').find('li.active');
					if($multiLi.length > 0) {
						
						var checkIdx = $multiLi.index();
						if(checkIdx == 2) {//페이코 + 무통장의 경우 페이코로 값세팅
							
							$multiLi.find(".multi_payPrice15").val(obj.val());
							$("#payPrice15").val(obj.val()); 
							obj.val(0);
						} else {
							$multiLi.find(".multi_" + obj.attr("id")).val(obj.val());
						}
					}
				}
			}
	
			chkEscrowAmt(); //에스크로 체크
		}
		else{
			$(".payType").each(function(){
				var priceObj = $(this).parent().find("input[type=text]");
				
				
				$(this).prop("checked", false); 
				priceObj.val(0);
			});
			
			$('.pay_method .tap_div5 li.active').removeClass("active");//결제수단 선택못함처리
			if($("#multi_pay_check").is(":checked")) {
				$("#multi_pay_check").prop("checked", false).change();// 복합결제 체크
			}
		}
		
		//비활성화 체크 
		if((Number(productPrice) + Number(deliveryPrice)) == Number(totalDCPrice))
			noPayment(false);
		else
			noPayment(true);
	
		//무이자 여부 체크 확인 초기화
		if($("#payPrice1").length > 0){
			var cardPrice = uncomma($("#payPrice1").val());
			if(Number(cardPrice) > 0) {
				$("#ca1").prop("checked", true);
				setInstallmentMonth(1);
			}
		}
}

//OK캐쉬백 처리
function setPoint(ablePoint, accumPoint){
	if(Number(ablePoint) > 0){
		var point = Number(ablePoint) - Number(accumPoint);
		$("#okLimitPointStr").html(comma(point));
		$("#okLimitPoint").val(point);
	}
}

//OK캐쉬백 최대 값 처리
function cashBackLimit(){
	if(Number($("#cashbagInput").val()) > Number($("#okLimitPoint").val())){

		alert("OK캐쉬백 총 보유금액 보다 사용 금액이 큽니다. 확인하시고 다시 적어주시기 바랍니다.")
		$("#cashbagInput").val($("#okLimitPoint").val());

	}
}

function resetDeliveryCoupon(){
	$("#dis03").prop("checked", false);
	$("#dis03").removeClass("on");
	$("#cpDeliAmt").val(0);

	if($("#place1").length > 0 && !$("#dis03").prop("checked")){

		//다중배송 초기화
		if($("#place1").prop("checked")){
			var deliveryDcPrice  = document.getElementsByName("deliveryDcPrice[]");
			var deliveryDcCoupon = document.getElementsByName("deliveryDcCoupon[]");

			for(var i = 0; i < deliveryDcPrice.length; i++){
				deliveryDcPrice[i].value = 0;
				deliveryDcCoupon[i].value = "";
			}
		}
		else{
			var deliveryDcPrice  = document.getElementsByName("deliveryDcPriceOne[]");
			var deliveryDcCoupon = document.getElementsByName("deliveryDcCouponOne[]");

			for(var i = 0; i < deliveryDcPrice.length; i++){
				deliveryDcPrice[i].value = 0;
				deliveryDcCoupon[i].value = "";
			}
		}
	}
	else if(!$("#dis03").prop("checked")){
		var deliveryDcPrice  = document.getElementsByName("deliveryDcPriceOne[]");
		var deliveryDcCoupon = document.getElementsByName("deliveryDcCouponOne[]");

		for(var i = 0; i < deliveryDcPrice.length; i++){
			deliveryDcPrice[i].value = 0;
			deliveryDcCoupon[i].value = "";
		}
	}
}

function chkEscrowAmt() {
	var frm = document.orderFrm;
	var escrow_amt = 0;
	if(frm.payPrice3){
		var payPrice3 = frm.payPrice3.value;
		if(payPrice3 != "" && Number(uncomma(payPrice3)) > 0){
			//무통장/실시간 계좌이체의 경우 보여줌
			escrow_amt = uncomma(payPrice3);
			var chk_escrow_amt = 1;

			if (escrow_amt >= chk_escrow_amt) {
				document.getElementById("escrowLayer").style.display = '';
				escrowInput();
			} else {
				document.getElementById("escrowLayer").style.display = 'none';
				frm.escrow.checked = false;
				escrowInput();
			}
		} else {
			document.getElementById("escrowLayer").style.display = 'none';
			frm.escrow.checked = false;
			escrowInput();
		}
	}
	if(frm.payPrice16 && escrow_amt == 0){
		var payPrice16 = frm.payPrice16.value;
		if(payPrice16 != "" && Number(uncomma(payPrice16)) > 0){
			//무통장/실시간 계좌이체의 경우 보여줌
			escrow_amt = uncomma(payPrice16);
			var chk_escrow_amt = 1;
			
			if (escrow_amt >= chk_escrow_amt) {
				document.getElementById("escrowLayer").style.display = '';
				escrowInput();
			} else {
				document.getElementById("escrowLayer").style.display = 'none';
				frm.escrow.checked = false;
				escrowInput();
			}
		} else {
			document.getElementById("escrowLayer").style.display = 'none';
			frm.escrow.checked = false;
			escrowInput();
		}
	}
	if(frm.payPrice17 && escrow_amt == 0){
		var payPrice17 = frm.payPrice17.value;
		if(payPrice17 != "" && Number(uncomma(payPrice17)) > 0){
			//무통장/실시간 계좌이체의 경우 보여줌
			escrow_amt = uncomma(payPrice17);
			var chk_escrow_amt = 1;
			
			if (escrow_amt >= chk_escrow_amt) {
				document.getElementById("escrowLayer").style.display = '';
				escrowInput();
			} else {
				document.getElementById("escrowLayer").style.display = 'none';
				frm.escrow.checked = false;
				escrowInput();
			}
		} else {
			document.getElementById("escrowLayer").style.display = 'none';
			frm.escrow.checked = false;
			escrowInput();
		}
	}
}

function escrowInput() {
	var frm = document.orderFrm;
	if(frm.escrow){
		if (frm.escrow.checked) {
			frm.escrow_yn.value = "Y";
		} else {
			frm.escrow_yn.value = "N";
		}
	}
}

function noPayment(flag){
	$(".payType").each(function(idx){
		if(!flag){
			$(this).attr("disabled", true);
			var priceObj = $(this).parent().find("input[type=text]");
			priceObj.attr("disabled", true);

			$("#escrowLayer").hide();
			$("#escrowLayer [name='escrow']").prop("checked", false);
			$('.pay_method').find('.tap5_area').hide();
			pointPaymentFlag = true;

		}else{
			$(this).attr("disabled", false);
			var priceObj = $(this).parent().find("input[type=text]");
			priceObj.attr("disabled", false);

			if(idx == 1 && pointPaymentFlag){
				$(this).prop("checked", true);
				pointPaymentFlag = false;
				setPaytype();
			}
		}
	});
}

function resetCard(){
	$("#ca1").prop("checked", true);
	setInstallmentMonth(1);
}

function showPrice(multiChange){
	if(deliveryPrice > 0) {
		if(multiChange != undefined) {
			$("#delivPopDefaultDeliveryPrice").val(deliveryPrice);
		}
		$("#deliveryPrice").html("+" + comma(deliveryPrice) + "<i>원</i>");
	} else {
		if(multiChange != undefined) {
			$("#delivPopDefaultDeliveryPrice").val(0);
		}
		$("#deliveryPrice").html("0<i>원</i>");
	}
	if(totalDCPrice > 0) {
		$("#tot_dc_price").html("-" + comma(totalDCPrice) + "<i>원</i>");
	} else {
		$("#tot_dc_price").html("0<i>원</i>");
	}
	$("#paymentPriceStr").html(comma(paymentPrice));
	$("#paymentPriceStr2").html(comma(paymentPrice));
	$("#paymentPriceStr3").html(comma(paymentPrice) + "원");
	
	
	var couponAmt = 0;	//할인 쿠폰
	var cpDeliAmt = 0;	//무료배송쿠폰
	var pointInput = 0;	//적립금
	var akMileDcPoint = 0;	//AK 마일리지
	var cashbagInput = 0;	//OK 캐쉬백
	var ohPointInput = 0; //오포인트
	var voucherPoint = 0; //상품권 포인트
	var depositAmt = 0; // 예치금
	var cyberAmt = 0; // 사이버머니
	var mileAmtInput = 0; //적립금 즉시할인액
	
	
	//할인 혜택
	if($("#couponAmt").length > 0 || $("#cpDeliAmt").length > 0 || $("#mileAmtView").length > 0) {
		couponAmt = uncomma($("#couponAmt").val());        //할인 쿠폰
		cpDeliAmt = uncomma($("#cpDeliAmt").val());        //무료배송쿠폰
		mileAmtInput = uncomma($("#mileAmtView").val());	//적립금 즉시할인액
		appDCAmtDis = uncomma($("#appDCAmt").val());	//즉시할인액
		
		if(mileAmtInput == 'undefined'){
			mileAmtInput = 0;
		}
		if(appDCAmtDis == 'undefined'){
			appDCAmtDis = 0;
		}
		
		//할인쿠폰
		if(couponAmt >= 0 || cpDeliAmt >= 0 || mileAmtInput >= 0 || appDCAmtDis >=0) {
			$("#navi_dc_coupon").html("- " + comma(Number(couponAmt) + Number(defaultdcPrice)) + "<i>원</i>");
			$("#cpDisTxt").html(comma(Number(couponAmt) + Number(cpDeliAmt) + Number(defaultdcPrice) + Number(mileAmtInput) + Number(appDCAmtDis)));
			
		}else {
			$("#navi_dc_coupon").html("0<i>원</i>");
			$("#cpDisTxt").html("0");
			
		}

		//무료배송쿠폰
		if(cpDeliAmt >= 0 ){
			$("#cpDisTxt").html(comma(Number(couponAmt) + Number(cpDeliAmt) + Number(defaultdcPrice) + Number(mileAmtInput) + Number(appDCAmtDis)));
		}
	}

	//적립금,AK마일리지
	if($("#pointInput").length > 0 || $("#akMileDcPoint").length > 0  ){
		pointInput = uncomma($("#pointInput").val());//적립금
		akMileDcPoint = uncomma($("#akMileDcPoint").val());//AK마일리지
		
		//적립금
		if(pointInput >= 0){
			$("#mileDisTxt").html(comma(Number(pointInput) + Number(akMileDcPoint)));
		}
		//AK마일리지
		if(akMileDcPoint >= 0){
			$("#mileDisTxt").html(comma(Number(pointInput) + Number(akMileDcPoint)));
		}
	}
	
	//제휴,AK마일리지
	if($("#cashbagInput").length > 0 || $("#ohPointInput").length > 0 || $("#voucherPoint").length > 0 || $("#depositAmt").length > 0 || $("#cyberAmt").length > 0 ){
		cashbagInput = uncomma($("#cashbagInput").val()); //OK 캐쉬백
		ohPointInput = uncomma($("#ohPointInput").val()); //오포인트
		voucherPoint = uncomma($("#voucherPoint").val()); //상품권 포인트
		depositAmt = uncomma($("#depositAmt").val()); // 예치금
		cyberAmt = uncomma($("#cyberAmt").val()); // 사이버머니
		
		if(cashbagInput >= 0 || ohPointInput >= 0 || voucherPoint >= 0 || depositAmt >= 0 ||cyberAmt >= 0 ){
			$("#pointDisTxt").html(comma(Number(cashbagInput) + Number(ohPointInput) + Number(voucherPoint) + Number(depositAmt) + Number(cyberAmt)));
		}
	}
	
	
	if(totalDCPrice > 0){
		$("#cdDisAmt").html(comma(totalDCPrice));
	} else {
		$("#cdDisAmt").html("0");
	}
	
	if(pointDc > 0) {
		$("#navi_dc_point").html("- " + comma(pointDc) + "<i>원</i>");
	} else {
		$("#navi_dc_point").html("0<i>원</i>");
	}
}

//나의 배송지 받아오기 
var delivFalg = true;	//통신 Flag
function pMyDeliv(pMyDelivFlag, opt, $obj, seq) {
	
	if(!$obj.hasClass("notCall")) {
		 
		if(pMyDelivFlag == "false") {
			var txt = "현재 저장된 나의 배송지가 없습니다."; 
			if(opt == "past") {
				txt = "현재 저장된 최근 배송지가 없습니다.";
			}
			alert(txt);
			return false;
		}
		
		if(delivFalg) {
			delivFalg = false;
			if(seq == undefined) seq = 0;
			$.ajax("/order/pMyDeliv.do?deliv_seq=" + seq + "&opt=" + opt, {
				type : "post",
				dataType : 'html',
				loading:false,
				success : function(data) {
					$obj.next("select").remove();
					$obj.after(data); 
					$obj.addClass("notCall");
					delivFalg = true; 
					showLayer($obj, true);
				},
				error : function(x, o, e) {
					delivFalg = true; 
					//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
				}
			});	
		}
	}
}

/*
 * 레이어팝업용 선택 배송지 정보 세팅
 * @param String 객체 id, String 주문서 내 배송지 순번(단일 배송지일경우 0, 다중일경우 1~10)
 */
function setOrderAddrLayer($obj, seq) { 
	var rcvr = $obj.find("option:selected"); 
	 
	if (seq == "0") {
		/* 배송처 */
		$("#deliver").val(rcvr.attr("data-deliv_keyword"));
		$obj.prev().text(rcvr.attr("data-deliv_keyword"));

		/* 받는사람 */
		$("#receiver_name_display").text(rcvr.attr("rcvr_name"));
		$("#receiver_name").val(rcvr.attr("rcvr_name"));
		
		/* 일반전화 */
		$("#receiver_tel_display").text(getPhoneNumXth(rcvr.attr("rcvr_tel"), 1) + "-" + 
									   getPhoneNumXth(rcvr.attr("rcvr_tel"), 2) + "-" + 
									   getPhoneNumXth(rcvr.attr("rcvr_tel"), 3));
		
		$("#receiver_tel").val(getPhoneNumXth(rcvr.attr("rcvr_tel"), 1) + "-" + 
							   getPhoneNumXth(rcvr.attr("rcvr_tel"), 2) + "-" + 
							   getPhoneNumXth(rcvr.attr("rcvr_tel"), 3))
		$("#receiver_tel1").val(getPhoneNumXth(rcvr.attr("rcvr_tel"), 1))
		$("#receiver_tel2").val(getPhoneNumXth(rcvr.attr("rcvr_tel"), 2))
		$("#receiver_tel3").val( getPhoneNumXth(rcvr.attr("rcvr_tel"), 3))
		
		/* 휴대폰 */
		$("#receiver_hand_tel_display").text(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 1) + "-" + 
									   getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 2) + "-" + 
									   getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 3));
		$("#receiver_hand_tel").val(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 1) + "-" + 
								    getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 2) + "-" + 
								    getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 3))
		$("#receiver_hand_tel1").val(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 1))
		$("#receiver_hand_tel2").val(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 2))
		$("#receiver_hand_tel3").val(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 3))
		
		/* 주소 */
		$("#receiver_base_addr_display").text("[" + rcvr.attr("zipcode") + "] " +
											  rcvr.attr("base_addr") + " " + 
											  rcvr.attr("dtl_addr"))
										.attr({"data-zipcode" : rcvr.attr("zipcode"),
											   "data-base_addr": rcvr.attr("base_addr"),
											   "data-dtl_addr" : rcvr.attr("dtl_addr")});
		$("#receiver_zipcode1").val(rcvr.attr("zipcode"));
		$("#receiver_base_addr").val(rcvr.attr("base_addr"));
		$("#receiver_dtl_addr").val(rcvr.attr("dtl_addr"));
		
		$("#turn_zipcode").val(rcvr.attr("turn_zipcode"));
		$("#turn_base_addr").val(rcvr.attr("turn_base_addr"));
		$("#turn_dtl_addr").val(rcvr.attr("turn_dtl_addr"));
		$("#new_addr_yn").val(rcvr.attr("road_addr_yn"));
		
		/* 기본배송지 저장용 */
		$("#cust_deliv_id").val(rcvr.attr("data-cust_deliv_id"));
		$("#deliv_keyword").val(rcvr.attr("data-deliv_keyword"));
		
	} else {
		/* 배송처 */
		$("#deliver_" + seq).val(rcvr.attr("data-deliv_keyword"));
		$obj.prev().text(rcvr.attr("data-deliv_keyword"));
		
		/* 받는사람 */
		$("#receiver_name_display_" + seq).text(rcvr.attr("rcvr_name"));
		$("#receiver_name_" + seq).val(rcvr.attr("rcvr_name"));
		
		/* 일반전화 */
		$("#receiver_tel_display_" + seq).text(getPhoneNumXth(rcvr.attr("rcvr_tel"), 1) + "-" + 
									   getPhoneNumXth(rcvr.attr("rcvr_tel"), 2) + "-" + 
									   getPhoneNumXth(rcvr.attr("rcvr_tel"), 3));
		
		$("#receiver_tel_" + seq).val(getPhoneNumXth(rcvr.attr("rcvr_tel"), 1) + "-" + 
							   getPhoneNumXth(rcvr.attr("rcvr_tel"), 2) + "-" + 
							   getPhoneNumXth(rcvr.attr("rcvr_tel"), 3))
		$("#receiver_tel1_" + seq).val(getPhoneNumXth(rcvr.attr("rcvr_tel"), 1))
		$("#receiver_tel2_" + seq).val(getPhoneNumXth(rcvr.attr("rcvr_tel"), 2))
		$("#receiver_tel3_" + seq).val( getPhoneNumXth(rcvr.attr("rcvr_tel"), 3))
		
		/* 휴대폰 */
		$("#receiver_hand_tel_display_" + seq).text(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 1) + "-" + 
									   getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 2) + "-" + 
									   getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 3));
		$("#receiver_hand_tel_" + seq).val(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 1) + "-" + 
								    getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 2) + "-" + 
								    getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 3))
		$("#receiver_hand_tel1_" + seq).val(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 1))
		$("#receiver_hand_tel2_" + seq).val(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 2))
		$("#receiver_hand_tel3_" + seq).val(getPhoneNumXth(rcvr.attr("rcvr_hand_tel"), 3))
		
		/* 주소 */
		$("#receiver_base_addr_display_" + seq).text("[" + rcvr.attr("zipcode") + "] " +
													  rcvr.attr("base_addr") + " " + 
													  rcvr.attr("dtl_addr"))
											   .attr({"data-zipcode" : rcvr.attr("zipcode"),
													  "data-base_addr": rcvr.attr("base_addr"),
													  "data-dtl_addr" : rcvr.attr("dtl_addr")});
		$("#receiver_zipcode1_" + seq).val(rcvr.attr("zipcode"));
		$("#receiver_base_addr_" + seq).val(rcvr.attr("base_addr"));
		$("#receiver_dtl_addr_" + seq).val(rcvr.attr("dtl_addr"));
		
		$("#turn_zipcode_" + seq).val(rcvr.attr("turn_zipcode"));
		$("#turn_base_addr_" + seq).val(rcvr.attr("turn_base_addr"));
		$("#turn_dtl_addr_" + seq).val(rcvr.attr("turn_dtl_addr"));
		$("#new_addr_yn_" + seq).val(rcvr.attr("road_addr_yn"));
		
		/* 기본배송지 저장용 */
		$("#cust_deliv_id_" + seq).val(rcvr.attr("data-cust_deliv_id"));
		$("#deliv_keyword_" + seq).val(rcvr.attr("data-deliv_keyword"));
	}
	
	$obj.prev().attr("data-beforeIdx", $obj.find('option:selected').index());
	$('.layer_popup .day_pop_close').click(); 
}

var multiQtyFlag = true;
function multiQtyChange($obj) {
	if(multiQtyFlag) {
		multiQtyFlag = false;
		
		var val = $obj.siblings(".cart_default").val();
		var varArr = val.split("@");
		var cnt = $obj.val();
		if(!$obj.parent().find("button").is(":disabled")){
			setMultiDeliveryGoods(varArr[0], varArr[2], Number(varArr[1]));
		}
	}
}

//다중배송지 수량 변경
function setMultiDeliveryGoods(cart_id, layoutCnt, qty){
	var totCnt = 0;
	
	$("select[name='qty_"+cart_id+"[]']").each(function(index) {
		totCnt += Number($(this).val());
	});
	
	var cnt = qty - Number(totCnt);	//남은 갯수
	//옵션 변경
	$("select[name='qty_"+cart_id+"[]']").each(function(index) {
		if(layoutCnt == (Number(index) + 1)) {
			return true;
		}  
		var beforeVal = Number($(this).val());
		if(cnt == 0 && beforeVal == 0) { 
			$(this).parent().find("button").prop("disabled", true); 
		} else {
			
			$(this).empty();
			for(var i = 0; i < ((cnt + beforeVal) + 1); i++) {
				
				var $option = $("<option>");	
				$(this).append($option.text(i).val(i));
				
				if(beforeVal == i) {
					$option.prop("selected", true);
				}
			}
			$(this).parent().find("button").prop("disabled", false);  
		}	
	});
	var sendStr = "";
	$(".qty_"+layoutCnt+"_class").each(function() {
		var qty = Number($(this).val());
		var infoStr = $(this).next().val();
		var infoArr = infoStr.split("@");

		if(sendStr!="") sendStr += ",";
		sendStr += infoArr[0] + "@" + qty;
	});


	document.etcFrm.sendStr.value = sendStr;
	if(sendStr!=""){

		$.ajax({
			type : "post",
			url : "/order/SetMultiDeliveryPriceAjax.do",
			data : $("#etcFrm").serialize(),
			dataType :'html',
			success : function(html){
				html = $.trim(html);

				var arr = html.split(",");
				if(arr.length > 0){
					for(var i=0;i < arr.length;i++){
						var tmp =  arr[i].split("@");

						$("#delivery_"+layoutCnt+"_"+tmp[0]).val(tmp[1]);
						$("#delivery_ori_"+layoutCnt+"_"+tmp[0]).val(tmp[1]);
						$("#delivery_ori_unit_"+layoutCnt+"_"+tmp[0]).val(tmp[2]);

						if(Number(tmp[1]) == 0)
							tmp[1] = "배송비:무료 배송";
						else
							tmp[1] = "배송비:" + comma(tmp[1]) + "원";

						$("#show_"+layoutCnt+"_"+tmp[0]).html(tmp[1]);

						calculate("multiChange");
					}
				}
			},
			error : function(x, o, e){ 
				//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); 
			}
		});
	} 
	//TODO 확인 작업 필요
	resetDeliveryCoupon();
	calculate();
	multiQtyFlag = true; 
}


//ok캐쉬백 조회팝업
var oKFlag = true;
function pOKCashbagUse($obj) {
	var h2 = $obj.offset().top;
	if(oKFlag) {
		oKFlag = false; 	
		$.ajax("/order/pOKCashbagUse.do", {
			dataType : "html",
			type : "post",
			success : function(data) {
				 
				$('.layer_okcashback').empty().append(data); 

	            var sh = $(window).outerHeight() - 80;
	            var st = $(window).scrollTop();
	            
	            $('.layer_okcashback').show().addClass('active');
	            // [D] 2017.01.19 수정
	             var ch = ($(window).outerHeight() - $('.layer_okcashback').find('.popup_wrap').outerHeight())/2 + $(window).scrollTop();

	             $('.layer_okcashback').find('.popup_wrap').css({'position':'absolute','top':ch});
	             $('.layer_okcashback').find('.deem').height($(document).height())
				
				layerOkcashback.init();
				oKFlag = true;
				
				
			},
			error : function(x, o, e){ 
				//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
				oKFlag = true;
			}
		}) 	
	}
}

//benepia 조회팝업
var beneFlag = true;
function pSkPlanetUse($obj) {
	var h2 = $obj.offset().top;
	if(beneFlag) {
		beneFlag = false; 	
		$.ajax("/order/pSkPlanetPointSearch.do", {
			dataType : "html",
			type : "post",
			success : function(data) {
				
				$('.layer_skplanet').empty().append(data); 
				
				var sh = $(window).outerHeight() - 80;
				var st = $(window).scrollTop();
				
				$('.layer_skplanet').show().addClass('active');
				// [D] 2017.01.19 수정
				var ch = ($(window).outerHeight() - $('.layer_skplanet').find('.popup_wrap').outerHeight())/2 + $(window).scrollTop();
				
				$('.layer_skplanet').find('.popup_wrap').css({'position':'absolute','top':ch});
				$('.layer_skplanet').find('.deem').height($(document).height())
				
				layerSkPlanet.init();
				beneFlag = true;
				
				
			},
			error : function(x, o, e){ 
				//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
				beneFlag = true;
			}
		}) 	
	}
}

//주문시 아시아나 인증
function asiana_agree(gubun) {
	if (gubun == 'Y') { 
		$("#asiana_id").val("");
		$("#asiana_id").attr("disabled",false);
	} else {
		$("#asiana_id").val("");
		$("#asiana_id_chk").val("N");
		$("#asiana_id").attr("disabled",true);
	}
}

function asiana_id_check() {
	var id = $("#asiana_id").val();
	if(id == "" || id == null){
		alert("회원번호를 입력해주세요.");
		$("#asiana_id").focus();
		return;
	}
	if(id.length < 9 || id == "000000000" || id == "111111111"){
		$("#asiana_id").val("");
		$("#asiana_id_chk").val("N");
		alert("회원번호가 올바르지 않습니다.");
		return;
	}
	// 적립대상 상품 미존재시 
	if(AsianaSavingMall.checkForAsiana(id)) {
		$("#asiana_id_chk").val("Y");
		alert('확인되었습니다.');
	} else {
		$("#asiana_id").val("");
		$("#asiana_id_chk").val("N");
		alert('올바르지 않은 회원번호입니다.');
	}
}
//주문시 아시아나 인증end


//OhPoint Popup
var oHFlag = true;
function pSearchOhPointAmt(){
	if(oHFlag) {
		oHFlag = false; 	
		
		$.ajax("/order/pSearchOhPointAmt.do", {
			dataType : "html",
			type : "post",
			success : function(data) {
				

//				var $this = jQuery(this);
//		        var $layer = 'layer_ohpoint_wrap'; 
//
//                var h1 = $(window).scrollTop();
//
//                $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
//                $('.'+$layer).attr('data-height',h1)
//                $('.'+$layer+' .ohpoint_wrap').html(data).css({'margin-top': '46px'});
//                oHFlag = true;
				$("#layer").empty().append(data); 
				oHFlag = true;
				
				$("#layer").html(data);

				var winH = $(window).height();
				var winW = $(window).width();
				var winS = $(window).scrollTop();

				$("#layer").css({'top' : '0',
								 'left': '0',
								 'height' : $(document).height()});
				$("#layer").show();
				
				// 레이어팝업 컨텐츠 height fix, auto scroll
				$("#layer").show();
				$("#layer .layerarea01").css({"position" : "fixed",
											  "top": "50%", 
											  "margin-top" : "-" + ($("#layer .layerarea01").height() / 2) + "px"});

				$('#layer .btn_close').click(function(e) {
					e.preventDefault();
					$('#layer').hide();	
				});
			},
			error : function(x, o, e){ 
				//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
				oHFlag = true;
			}
		}) 	
	}
}
//OhPoint Popup End

function closeOhPointLayer() {
	$('#layer').hide();
}
//OK캐쉬백 카드번호 입력값 변경
function okCashbagChange(){
	var frm = document.frmOkCashBag;
	var card_no = $("#cardok_no1").val() + $("#cardok_no2").val() + $("#cardok_no3").val() + $("#cardok_no4").val()
	$("#okcashbag_save_card_no").val(card_no);
}
//OK캐쉬백 카드번호 입력값 변경 End

//APP OK캐쉬백 카드번호 입력값 변경
function appOkCashbagChange(){
	var frm = document.frmOkCashBag;
	var card_no = $("#app_save_cashbag_card_no1").val() + $("#app_save_cashbag_card_no2").val() + $("#app_save_cashbag_card_no3").val() + $("#app_save_cashbag_card_no4").val()
	$("#app_save_cashbag_card_no").val(card_no);
}
//APP OK캐쉬백 카드번호 입력값 변경 End


//OH포인트 카드번호 입력값 변경 End
function ohPointChange(){
	var frm = document.ohPointFrm;
	var card_no = $("#cardoh_no1").val() + $("#cardoh_no2").val() + $("#cardoh_no3").val() + $("#cardoh_no4").val()
	$("#ohpoint_save_card_no").val(card_no);
}
//OH포인트 카드번호 입력값 변경 End	

function setRecvPointType(val){
	$('#mileAmtView').val(val);
	setReverseMargin();
}

//현금영수증 폼 노출
function setReceipt(receiptFlag){
	
	if(receiptFlag){
		
		$("#receiptLayer").show();
		$("#receiptLayerChk").prop("checked", false);
		$(".no_bankbook").hide();
	} else{

		//상품권 포인트
		if($("#voucherPoint").val() > 0){
			return false;
		}

		//사이버머니
		if($("#cyberAmt").val() > 0){
			return false;
		}

		//이포인트
		if($("#epointAmt").val() > 0){
			return false;
		} 

		$("#receiptLayer, .no_bankbook").hide();
		$("#receiptLayerChk").prop("checked", false);
	}
}

//소비자 피해 보상보험 폼 노출
function setEscrow(escrowFlag){
	if(escrowFlag){
		$("#escrowLayer").show();
		$("#escrow").prop("checked", false);
		$(".no_bankbook2").hide()
	} else{
		$("#escrowLayer, .no_bankbook2").hide();
		$("#escrow").prop("checked", false);
	}
}

//결제수단 선택에 따른 입력폼세팅
function setPaytype(){
	var receiptFlag = false;
	var escrowLFlag = false;
	var setPayType = 0;
	$(".payType").each(function(idx){
		var payType = $(this).val();
		if ($(this).prop("checked")) {
			if (payType==2||payType==3||payType==16||payType==17) receiptFlag = true;
			if (payType==3||payType==16||payType==17) escrowLFlag = true;
			
			// 점검중 체크
			if(payType == 3) {
				var pmCheck = payTypePMCheck.check('3');
			}
			setPayType = payType;
		}
		
	});	
	
	$("#card_id").html(cardOptionList);
	$("#card_id").prev().text("카드를 선택하세요."); 
	$(".card_txt.rate_y,.card_txt.rate_n").hide();
	
	$("#pay_bank_nm_3").html(bankOptionList);
	
	//비활성화 체크
	if ((Number(productPrice) + Number(deliveryPrice)) == Number(totalDCPrice)) {
		noPayment(false);
	} else {
		noPayment(true);
	}

	//30만원 이상결제 가능 카드
	cardLayerReload(true);

	//소비자피해 보상보험가입 표시 여부
	setEscrow(escrowLFlag);
	
	//현금영수증 표시 여부
	setReceipt(receiptFlag);
	
	//프로모션 광고 문구
	setPayPromotion(setPayType);
}

var cardSaveCheckFlag = false;
var defaultCardList = ""; // backup cardList
//30만원 이상 카드 목록 새로 고침
function cardLayerReload(firstFlag) {
	var cardPrice = Number(uncomma($("input#payPrice1").val()));
	beforeCardPrice = Number(uncomma($("input#payPrice1").val()));
	
	if(defaultCardList == "") defaultCardList = $("select#card_id option");
	if(cardPrice >= 300000) {
		//2,16,15,4,1
		$("select#card_id option").each(function(i,v){
			if(v.value =="1"
				||v.value =="2"
				||v.value =="3" 
				||v.value =="4"
				||v.value =="7"
				||v.value =="9" 
				||v.value =="10" 
				||v.value =="12"
				||v.value =="14"
				||v.value =="15"
				||v.value =="16"
				||v.value =="17"
				||v.value =="21"
				||v.value =="23"
				||v.value =="") {
			}else {
				$(v).remove();
			}
		});
	}else {
		$("select#card_id").html(defaultCardList);
	}
	
	$("select#card_id").val("");
	$(".card_txt.rate_y,.card_txt.rate_n").hide();
	$("#card_id").prev().text("카드를 선택하세요.");
	
	if(firstFlag) {
		//비회원인경우 결제타입정보 입력안탐
		if(payTypeInfo != null){
			
			var cardOption = $("#card_id option").size();
			var siteCode = $("#siteCode").val();
			
			//FDS에서 선택가능한 신용카드가 하나인경우 해당 신용카드 선택
			if(siteCode == 'MFDS'){
				if(cardOption == 2){
					$("#card_id").find("option:last").attr("selected","selected")
					$("#card_id").prev().html($("#card_id").find("option:selected").text());
				}
			}
			
			if(payTypeInfo.pay_type_1 == "1") {
				
				if(payTypeInfo.pay_option_1 == 17) { //우리카드
					$("#card_id").find("option[value='15']").each(function() {
						if(this.text == '우리카드') {
							this.selected = true;
							$("#card_id").prev().text(this.text);
						}
						
					});
				} else if(payTypeInfo.pay_option_1 == 15) { //BC카드
					$("#card_id").find("option[value='" + payTypeInfo.pay_option_1 + "']").each(function() {
						if(this.text == 'BC카드') {
							this.selected = true;
							$("#card_id").prev().text(this.text);
						}
						
					});
				} else if(payTypeInfo.pay_option_1 != 0) {
					
					var $option = $("#card_id").find("option[value='" + payTypeInfo.pay_option_1 + "']");
					$("#card_id").val(payTypeInfo.pay_option_1);
					$("#card_id").prev().text($option.text());
				}
			} else if(payTypeInfo.pay_type_2 == "1") {
				
				if(payTypeInfo.pay_option_2 == 17) { //우리카드
					$("#card_id").find("option[value='15']").each(function() {
						if(this.text == '우리카드') {
							this.selected = true;
							$("#card_id").prev().text(this.text);
						}
						
					});
				} else if(payTypeInfo.pay_option_2 == 15) { //BC카드
					$("#card_id").find("option[value='" + payTypeInfo.pay_option_2 + "']").each(function() {
						if(this.text == 'BC카드') {
							this.selected = true;
							$("#card_id").prev().text(this.text);
						}
						
					});
				} else if(payTypeInfo.pay_option_2 != 0) {
					var $option = $("#card_id").find("option[value='" + payTypeInfo.pay_option_2 + "']");
					$("#card_id").val(payTypeInfo.pay_option_2);
					$("#card_id").prev().text($option.text());
				}
			}
			cardSaveCheck(); // 결제수단저장 카드정보
			
			if(payTypeInfo.pay_type_1 == "3") {
				
				if(payTypeInfo.pay_option_1 != 0) {
					
					var $option = $("#pay_bank_nm_3").find("option[value='" + payTypeInfo.pay_option_1 + "']");
					if($option.text() == "") {
						$("#pay_bank_nm_3").val("");
						$("#pay_bank_nm_3").prev().text("은행 선택");
					}else {
						$("#pay_bank_nm_3").val(payTypeInfo.pay_option_1);
						$("#pay_bank_nm_3").prev().text($option.text());
					}
				}
			} else if(payTypeInfo.pay_type_2 == "3") {
				
				if(payTypeInfo.pay_option_2 != 0) {
					var $option = $("#pay_bank_nm_3").find("option[value='" + payTypeInfo.pay_option_2 + "']");
					if($option.text() == "") {
						$("#pay_bank_nm_3").val("");
						$("#pay_bank_nm_3").prev().text("은행 선택");
					}else {
						$("#pay_bank_nm_3").val(payTypeInfo.pay_option_2);
						$("#pay_bank_nm_3").prev().text($option.text());
					}
				}
			} else if(payTypeInfo.pay_type_1 == "17") {
				if(payTypeInfo.pay_option_1 != 0) {
					var pay_option_1 = fn_leadingZeros(payTypeInfo.pay_option_1,3)
					var $option =$("#bankCode").find("option[value='" + pay_option_1 + "']");
					if($option.length > 0) {
						$("#bankCode").val(pay_option_1);
						$("#bankCode").prev().text($option.text());
					}
					
				}
			}
		}
	}
}



// 카드, 은행 옵션 setting
var cardOptionList = "";
var bankOptionList = "";
var recieveOptionFlag = true;
function recieveOption(payType) {
	if(recieveOptionFlag) {
		recieveOptionFlag = false;
		$.ajax("/order/SetPayTypeAjax.do", {
			data : {"t" : payType},
			dataType : "html",
			type : "post",
			loading :false,
			success : function(html) {
				if(payType == "1") {
					cardOptionList = html;
					$("#card_id").html(cardOptionList);
					recieveOptionFlag = true;
					recieveOption(3);
				}
				if(payType == "3") {
					bankOptionList = html.split("||||")[0];
					$("#pay_bank_nm_3").html(bankOptionList);
					$("#ipkumDate").text(html.split("||||")[1]);
					recieveOptionFlag = true;
					paySelect.init();
					setPaytype();
				}
			},
			error : function(x, o, e){ 
				//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); 
				recieveOptionFlag = true;
			}
		});
	}
}


//무이자 안내
var pCardNoIntInfoFlag = true;
function pCardNoIntInfo(url){
	if(pCardNoIntInfoFlag) {
		pCardNoIntInfoFlag = false;
		$.ajax(url, {
			dataType : "html",
			type : "post",
			success : function(data) {
				$(".interest_info").html(data);
			},
			error : function(x, o, e){ 
				//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); 
			},
			complete : function() {
				pCardNoIntInfoFlag = true;
			}
		});
	}
}

function setPointSave(val){
	if(val.length == 0) {
		$("#trPoint").hide();
		$("#trSave").hide();
		$("#c_point").prop("checked", false);
		$("#p_save").prop("checked", false);
		return false;
	}
	
	$.each(cardVanSet, function(index) {
		var info = cardVanSet[index];
		if(info[0]==val && info[2]!=""){
			var arr1 = info[2].split("@");
			var arr2 = info[3].split("@");

			$("#trPoint").hide();
			$("#trSave").hide();

			$("#c_point").prop("checked", false);
			$("#p_save").prop("checked", false);

			//포인트
			if(arr1[0] == "Y"){
				$("#trPoint").find("label").html(arr2[0]);
				$("#trPoint").show();
			}

			//세이브
			if(arr1[1] == "Y"){
				$("#trSave").find("label").html(arr2[1]);
				$("#trSave").show();
			}
		} 
	});
}

//세이브 설정
function setCheckSave(obj){

	if($("#trPoint").css("display") == 'none') {
		$("#c_point").prop("checked", false);
	}
	//세이브와 중복체크
	if(obj.prop("checked") && $("#c_point").prop("checked")){
		alert("포인트와 세이브 서비스는 동시 사용할 수 없습니다.");
		obj.prop("checked", false);
		$("#isp_bonus_gb").val("N");
		return;
	}
	else{
		if(obj.prop("checked")){
			$("#isp_bonus_gb").val("Y");
		}else {
			$("#isp_bonus_gb").val("N");
			$("#bonus_point_gb").val("N");
		}
	}


}

//포인트 설정
function setCheckPoint(obj){

	var val = $("#card_id").val();

	if($("#trSave").css("display") == 'none'){
		$("#p_save").prop("checked", false);
	}


	//세이브와 중복체크
	if(obj.prop("checked") && $("#p_save").prop("checked")){
		alert("포인트와 세이브 서비스는 동시 사용할 수 없습니다.");
		obj.prop("checked", false);
		return;
	}

	if(obj.prop("checked")){
		$.each(cardVanSet, function(index) {
			var info = cardVanSet[index];
			if(info[0]==val && info[2]!=""){

				//TOP포인트만 ISP포인트 제외
				if(info[1] != 'ISP'){
					$("#bonus_point_gb").val("Y");

					//현대카드
					if(info[0] == 4) $("#bonus_point_gb").val("H");
				}
				else{
					$("#bonus_point_gb").val("N");
				}
			}
		});
		$("#pay_bonus_point").val("Y");
	}
	else{
		$("#isp_bonus_gb").val("N");
		$("#bonus_point_gb").val("N");
		$("#pay_bonus_point").val("N");
	}
}

function pointLimitCheck(item) {
	
	var price = Number(getDefaultPrice());	//결제금액
	
	if(price > 0) {							//결제 금액이 있는경우
		
		if(price <= Number(uncomma($(item).val()))) {
			$(item).val(price);
		}
		
		var name = item.getAttribute("point_name");				//알럿용 label
		var $limt = $("#" + item.getAttribute("point_value"));	//사용가능 포인트
		
		if ($limt.length > 0 && Number(item.value) > Number($limt.val())) {//입력포인트가 사용가능 포인트보다 큰경우
			
			alert(name + " 사용 가능 금액이 보유금액보다 큽니다.");

			if(Number($limt.val()) > Number(paymentPrice)) {	//사용가능 포인트가 남은 결제금액보다 큰경우
				item.value = comma(paymentPrice);
			} else {											//사용가능 포인트가 남은 결제금액보다 작은경우
				item.value = comma($limt.val());
			}
		} 
		
		var val = Number(uncomma(item.value));
		
		if (item.getAttribute("id") == "ohPointInput" && val != floor(val, -1)) {// 오포인트는 10원단위로 사용가능
			alert(name + "는 10원단위로 사용이 가능합니다.");
			item.value = comma(floor(val, -1));
		}

		if (item.getAttribute("id") == "akMileDcPoint" && val < 500) {//ak마일리지 500원 이상 사용가능.
			alert(name + "는 500원 이상부터 사용이 가능합니다.");
			item.value = 0;
		}
		
		if($(item).hasClass("receipt") && Number(uncomma($(item).val())) > 0) {
			setReceipt(true);
		};
		
		calculate();
	} else {//결제 금액이 없는경우									
		$(item).val(0);
	}
}

function getDefaultPrice(){
	var price = defaulPrice;
	if($("#mileAmtView").length > 0){
		if($("#dis07").prop("checked")){
//			price += Number(mile);
			price += Number(milePrice); //s변경
		}
	}
	return price;
}

//역마진 계산 AJAX
function setReverseMargin(){
	$.ajax({
		type : "post",
		url : "/order/ReverseMarginAjax.do",
		data : $("#orderFrm").serialize(),
		dataType :'json',
		loading : false,
		success : function(data){

			/*
			if($("#lguPlusAmt").length > 0){
				$("#lguPlusAmt").val(comma(Number(data.lguPlusAmt)));
				$("#lguPromotionData").val(data.lguPromotionData);
			}*/

			if($("#appDCAmt").length > 0){
				$("#appDCAmt").val(comma(Number(data.appDCAmt)));
				$("#appPromotionData").val(data.appPromotionData);

			}

			if(Number(data.lumpAmtView) > 0){
				$("#lumpPay").show();
				$("#lumpAmtView").val(comma(Number(data.lumpAmtView)));
				$("#lumpPromotionData").val(data.lumpPromotionData);
			}
			else{
				$("#lumpAmtView").val(0);
				$("#lumpPromotionData").val("");
				$("#lumpPay").hide();
			}
			
			// 페이코 프로모션 쿠폰 체크
			if($("#paycoEventCoupon").length > 0){
				$("#paycoEventCoupon").val(Number(data.paycoEventCoupon));
			}

			calculate();
		},
		error : function(x, o, e){ 
			//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); 
		}
	});
}

function calculPaymentSetLayer(obj){
	var sum = 0;
	var objIdx = obj.index(".payprice");

	var cnt = 0;
	$(".payType").each(function(idx){
		
		if($(this).prop("checked")) {
			if(objIdx != idx){
				var priceObj = $(this).parent().find("input[type=text]");
					
				sum += Number(uncomma(priceObj.val()));
				
				if(paymentPrice <= sum && Number(uncomma(obj.val())) > 0){
					var price = Number(paymentPrice) - Number(uncomma(obj.val()));
					if(price > 0){
						priceObj.val(comma(price));
						
						if($("#multi_pay_check").is(":checked")) {//복합결제 가격 setting.
							var $multiLi = $('.pay_method').find('.multi_payment').find('li.active');
							if($multiLi.length > 0) {
								$multiLi.find(".multi_" + priceObj.attr("id")).val(comma(priceObj.val()));
							}
						}
					}
					else{
						var price2 = Number(uncomma(obj.val())) + price;
						obj.val(price2);
						priceObj.val(0);
						$(this).prop("checked", false);
						
						if($("#multi_pay_check").is(":checked")) {//복합결제 가격 setting.
							var $multiLi = $('.pay_method').find('.multi_payment').find('li.active');
							if($multiLi.length > 0) {
								$multiLi.find(".multi_" + priceObj.attr("id")).val(comma(priceObj.val()));
								$multiLi.find(".multi_" + obj.attr("id")).val(comma(obj.val()));
							}
						}
					}
					
				} else {
					if(paymentPrice < sum){
						priceObj.val(0);
						$(this).prop("checked", false);
					} else {
						var price = Number(uncomma(priceObj.val())) - (Number(uncomma(obj.val())) + sum - paymentPrice);
						if(price > 0 && paymentPrice < price){
							
							priceObj.val(comma(price));
							
							if($("#multi_pay_check").is(":checked")) {//복합결제 가격 setting.
								var $multiLi = $('.pay_method').find('.multi_payment').find('li.active');
								if($multiLi.length > 0) {
									$multiLi.find(".multi_" + priceObj.attr("id")).val(comma(priceObj.val()));
								}
							}
						} else if(price > 0){
							
							priceObj.val(comma(price));
							
							if($("#multi_pay_check").is(":checked")) {//복합결제 가격 setting.
								var $multiLi = $('.pay_method').find('.multi_payment').find('li.active');
								if($multiLi.length > 0) {
									$multiLi.find(".multi_" + priceObj.attr("id")).val(comma(priceObj.val()));
								}
							}
						} else {
							var price = Number(uncomma(obj.val())) - (Number(uncomma(obj.val())) - paymentPrice);
							obj.val(comma(price));
							priceObj.val(0);
							$(this).prop("checked", false);
							
							if($("#multi_pay_check").is(":checked")) {//복합결제 가격 setting.
								var $multiLi = $('.pay_method').find('.multi_payment').find('li.active');
								if($multiLi.length > 0) {
									$multiLi.find(".multi_" + priceObj.attr("id")).val(comma(priceObj.val()));
									$multiLi.find(".multi_" + obj.attr("id")).val(comma(obj.val()));
								}
							}
						}
					}
				
				}
			}
			cnt++;
			
		}
	});
	chkEscrowAmt();
}

//할부선택
function setInstallmentMonth(val){
	if(val==1){
		$("#ca1").prop("checked", true);
		$("#ca2").prop("checked", false);
		$("#ca3").prop("checked", false);
		$("#installment_month_cnt").empty();
		$("#installment_month_cnt").append("<option value=\"00\">일시불</option>");
		$("#installment_month_cnt").prev().text($("#installment_month_cnt option:selected").text());
		
		$('.pay_method').find('.ins_choice').find('li').removeClass('active');
		$('.pay_method').find('.ins_choice').find('li').eq(0).addClass('active');
        $('.pay_method').find('.ins_choice_area').hide();
	}
	else{
		var cardPrice = uncomma($("#payPrice1").val());
		var cnt_004 = $("#cnt_004").val();
		if(cnt_004 > 0) {
			alert("해당상품은 할부결제가 되지 않습니다.\n일시불 결제를 선택해 주시기 바랍니다.");
			$("#ca1").prop("checked", true);
			$("#ca2").prop("checked", false);
			$("#ca3").prop("checked", false);
			
			$('.pay_method').find('.ins_choice').find('li').removeClass('active');
			$('.pay_method').find('.ins_choice').find('li').eq(0).addClass('active');
	        $('.pay_method').find('.ins_choice_area').hide();
			return;
		}
		if($("#card_id").val() == 26){
			
			alert("카카오뱅크는 할부결제가 되지 않습니다.\n일시불 결제를 선택해 주시기 바랍니다.");
			$("#ca1").prop("checked", true);
			$("#ca2").prop("checked", false);
			$("#ca3").prop("checked", false);
			
			$('.pay_method').find('.ins_choice').find('li').removeClass('active');
			$('.pay_method').find('.ins_choice').find('li').eq(0).addClass('active');
	        $('.pay_method').find('.ins_choice_area').hide();
			return;
		}
		
		if(Number(quotaPriceLimit) > Number(cardPrice)){
			alert(comma(quotaPriceLimit)+"원 이하는 할부결제가 되지 않습니다.\n일시불 결제를 선택해 주시기 바랍니다.");
			$("#ca1").prop("checked", true);
			$("#ca2").prop("checked", false);
			$("#ca3").prop("checked", false);
			
			$('.pay_method').find('.ins_choice').find('li').removeClass('active');
			$('.pay_method').find('.ins_choice').find('li').eq(0).addClass('active');
	        $('.pay_method').find('.ins_choice_area').hide();
			return;
		}

		//카드에 따른 무이자 정보 조회
		if(val==2){
			var card_id = $("#card_id").val();
			var goods_ids = $("#goods_ids").val();
			var culDeductionYn = $("#culDeductionYn").val();
			
			if(card_id==''){
				alert("결제하실 카드를 선택해 주세요.");
				$("#card_id").focus();
				$("#ca1").prop("checked", true);
				$("#ca2").prop("checked", false);
				$("#ca3").prop("checked", false);

				$("#installment_month_cnt").empty();
				$("#installment_month_cnt").append("<option value=\"00\">일시불</option>");
				$("#installment_month_cnt").prev().text($("#installment_month_cnt option:selected").text());
				
				$('.pay_method').find('.ins_choice').find('li').removeClass('active');
				$('.pay_method').find('.ins_choice').find('li').eq(0).addClass('active');
		        $('.pay_method').find('.ins_choice_area').hide();
				return;
			}

			$.ajax({
				type : "post",
				url : "/order/checkCardMu.do",
				dataType :'html',
				async :false,
				data : {
					"id" : card_id,
					"amt" : cardPrice,
					"goods_ids" : goods_ids,
					"culDeductionYn" : culDeductionYn
				},
				success : function(html){

					if($.trim(html)!=''){
						$("#installment_month_cnt").empty();
						$("#installment_month_cnt").append(html);
						$("#installment_month_cnt").prev().text($("#installment_month_cnt option:selected").text());
					}
					else{
						alert("해당 카드는 무이자 할부를 하지 않습니다.");
						$("#ca1").prop("checked", false);
						$("#ca2").prop("checked", false);
						$("#ca3").prop("checked", true);

						$("#installment_month_cnt").empty();

						$.each(quotaMonth, function(index) {
							var monthInfo = quotaMonth[index];
							$("#installment_month_cnt").append("<option value=\""+monthInfo[0]+"\">"+monthInfo[1]+"</option>");
						});
						$("#installment_month_cnt").prev().text($("#installment_month_cnt option:selected").text());
						$('.pay_method').find('.ins_choice').find('li').removeClass('active');
						$('.pay_method').find('.ins_choice').find('li').eq(2).addClass('active');
						
					}
				},
				error : function(x, o, e){ 
					//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); 
				}
			});
		}
		else{ //유이자
			$("#installment_month_cnt").empty();

			$.each(quotaMonth, function(index) {
				var monthInfo = quotaMonth[index];
				$("#installment_month_cnt").append("<option value=\""+monthInfo[0]+"\">"+monthInfo[1]+"</option>");
			});
			$("#installment_month_cnt").prev().text($("#installment_month_cnt option:selected").text());
		}
	}
}

function setKeyDiv(val){
	var frm = document.orderFrm;

	if(val == 2){
		frm.key_gb.value = 3;
	}

	frm.use_gb.value = val;
}

function chkGuestEscrow() {

	with (document.orderFrm) {


		if (e_resno_year.value == "") {
			alert ("소비자피해보상보험 가입하시는 분의 주민번호 앞자리(년도)는 숫자만 입력해 주십시오.");
			return false;
		}
		if (e_resno_year.value.length < 4) {
			alert ("소비자피해보상보험 가입하시는 분의 주민번호 앞자리(년도)는 4자리로 입력해 주십시오.");
			return false;
		}
		if (e_resno_month.value == "" || e_resno_day.value == "") {
			alert ("소비자피해보상보험 가입하시는 분의 주민번호 앞자리(생일)을 선택해 주십시오.");
			return false;
		}
		e_resno1.value = e_resno_year.value.substring(2,4) + e_resno_month.value + e_resno_day.value;

		for( var i=0; i<e_nation.length; i++)
			if (e_nation[i].checked)
				nation = e_nation[i].value;

		for( var i=0; i<e_gender.length; i++)
			if (e_gender[i].checked)
				gender = e_gender[i].value;

		if (nation == "0") {	// 내국인
			if (gender == "M") {
				if (e_resno_year.value.substring(0,2) == "18")
					e_resno2.value = "9";
				else if (e_resno_year.value.substring(0,2) == "19")
					e_resno2.value = "1";
				else
					e_resno2.value = "3";
			} else {
				if (e_resno_year.value.substring(0,2) == "18")
					e_resno2.value = "0";
				else if (e_resno_year.value.substring(0,2) == "19")
					e_resno2.value = "2";
				else
					e_resno2.value = "4";
			}
		} else {
			if (gender == "M") {
				if (e_resno_year.value.substring(0,2) == "19")
					e_resno2.value = "5";
				else
					e_resno2.value = "7";
			} else {
				if (e_resno_year.value.substring(0,2) == "19")
					e_resno2.value = "6";
				else
					e_resno2.value = "8";
			}
		}

		e_auth_yn.value = "Y";

		return true;

	}
}

//OK캐쉬백 카드번호 불러오기
var pOKCashbagSaveFlag = true;
function pOKCashbagSave() {
 if(pOKCashbagSaveFlag) {
  pOKCashbagSaveFlag = false;
  $.ajax("/order/pOKCashbagSave.do", {
   dataType : "html",
   type : "post",
   success : function(data) {
    $("#cardok_no1").val(data.split("-")[0]);
    $("#cardok_no2").val(data.split("-")[1]);
    $("#cardok_no3").val(data.split("-")[2]);
    $("#cardok_no4").val(data.split("-")[3]);
    $("#okcashbag_save_card_no").val(data.replace(/-/g,"").trim()); 
   },
   error : function(x, o, e){ 
	   //alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
   },
   complete : function() {
    pOKCashbagSaveFlag = true;    
   }
  });
 }
}

//OK캐쉬백 카드번호 불러오기
var pAppOKCashbagSaveFlag = true;
function pAppOKCashbagSave() {
	if(pAppOKCashbagSaveFlag) {
		pAppOKCashbagSaveFlag = false;
		$.ajax("/order/pOKCashbagSave.do", {
			dataType : "html",
			type : "post",
			success : function(data) {
				$("#app_save_cashbag_card_no1").val(data.split("-")[0]);
				$("#app_save_cashbag_card_no2").val(data.split("-")[1]);
				$("#app_save_cashbag_card_no3").val(data.split("-")[2]);
				$("#app_save_cashbag_card_no4").val(data.split("-")[3]);
				$("#app_save_cashbag_card_no").val(data.replace(/-/g,"").trim()); 
			},
			error : function(x, o, e){ 
				//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
			},
			complete : function() {
				pAppOKCashbagSaveFlag = true;    
			}
		});
	}
}

//OH포인트 카드번호 불러오기
var pOhPointSaveFlag = true;
function pOhPointSave() {
 if(pOhPointSaveFlag) {
  pOhPointSaveFlag = false;
  $.ajax("/order/pOhPointSave.do", {
   dataType : "html",
   type : "post",
   success : function(data) {
    $("#cardoh_no1").val(data.split("-")[0]);
    $("#cardoh_no2").val(data.split("-")[1]);
    $("#cardoh_no3").val(data.split("-")[2]);
    $("#cardoh_no4").val(data.split("-")[3]);
    $("#ohpoint_save_card_no").val(data.replace(/-/g,"").trim()); 
   },
   error : function(x, o, e){ 
	   //alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
   },
   complete : function() {
    pOhPointSaveFlag = true;    
   }
  });
 }
}

/**
 * 주문정보 수정 - 결제수단 변경(결제 취소 후 재 결제)
 * @param String 객체 id, String 주문서 내 배송지 순번(단일 배송지일경우 0, 다중일경우 1~10)
 */
function cancelValid(){
	
	if(!$("#payChangeAgree").is(":checked")) {
		alert("결제수단 변경에 동의하시기바랍니다.");
		return false;
	}
	
	var frm = document.orderFrm;

	var paytype = $(".payType").val();
	var price = $("#payPrice1").val();


	if(paytype == '1'){
		if($("#card_id").val()==''){
			alert("결제카드를 선택해 주세요.");
			$("#card_id").focus();
			exit = true;
			return false;
		}
		var cardPrice = price; //카드

		//유이자일 경우 무이자에 동일 개월수가 있는지 확인
		if(cardPrice > 0 && $("#ca3").prop("checked")){
			chkMuMonth(cardPrice);
		}
	}
	frm.submit();
}

function chkMuMonth(cardPrice){
	var card_id = $("#card_id").val();
	var month = $("#installment_month_cnt").val();
	var goods_ids = $("#goods_ids").val();
	var culDeductionYn = $("#culDeductionYn").val();

	$.ajax({
		type : "post",
		url : "/order/checkCardMu.do",
		dataType :'html',
		async :false,
		data : {
			"id" : card_id,
			"amt" : cardPrice,
			"month" : month,
			"goods_ids" : goods_ids,
			"culDeductionYn" : culDeductionYn
		},
		success : function(result){
			if(result.trim() == "true"){
				$("#ca2").prop("checked", true);
				setInstallmentMonth(2);
				$("#installment_month_cnt").val(month);
			}
		},
		error : function(x, o, e){ 
			//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); 
		}
	});
}

function onlyEngHangul($textObj) {
	  var inText = $textObj.val();
	  var chk_char = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]+$/;

	  if (!chk_char.test(inText)) {

	    alert("주문자 및 받는분은 한글 및 영문만 입력가능합니다.");

	    $textObj.select();

	    return false;
	  }
	  return true;
	}

var btnChk = true;
function valid(){
	if(!btnChk) {
		alert("결제 진행중입니다. 잠시만 기다려주세요");
		return;
	}
	var frm = document.orderFrm;
	if(!$("#agree1_check").prop("checked")){
		alert("주문정보 및 개인정보 취급위탁동의에 동의하셔야 합니다.");
		$("#agree1_check").focus();
		return;
	}
	if(!$("#agree2_check").prop("checked")){
		alert("개인 정보 제3자 제공/위탁에 동의하셔야 합니다.");
		$("#agree2_check").focus();
		return;
	}

	if($("#agree_jw").length > 0 && !$("#agree_jw").prop("checked")) {
		alert("중앙 멤버십 서비스폰 가입에 대한 제3자 제공에 동의하셔야 합니다.");
		$("#agree_jw").focus();
		return;
	}
	
	if($("#agree_drink").length == 1 && !$("#agree_drink").prop("checked")) {
		alert("전통주 구매에 따른 개인정보 제공 약관에 동의하셔야 합니다.");
		$("#agree_drink").focus();
		return;
	}
	
	if($("#agree_overseas").length == 1) {
		if (!$("#agree_overseas").prop("checked")) {
			alert("해외 직구 상품 구매에 따른 개인정보 제공 약관에 동의하셔야 합니다.");
			$("#agree_overseas").focus();
			return;
		}
	}	
	
//	if($(".payType[value='3']:checked").length > 0) {
//		alert("09시 ~ 10시 시스템 작업으로 인해 무통장거래가 불가합니다.");
//		return;
//	}
	
	if($(".payType[value='3']:checked").length > 0) {
		$("#pay_bank_nm_3").attr("req", "req");
		$("#pay_expect_nm_3").attr("req", "req");
//		$("#refund_bank_code").attr("req", "req");
//		$("#refund_acct_no").attr("req", "req");
	} else {
		$("#pay_bank_nm_3").removeAttr("req");
		$("#pay_expect_nm_3").removeAttr("req");
		
	}
	
	//비회원주문시 주문자 및 받는분 한글/영문 입력 체크
	if($("#member_yn").val() == 'N'){
		
		if($("#ord_user_name").val() != '' && !onlyEngHangul($("#ord_user_name"))){
			return;
		}
		
		if($("#ord_real_name").val() != '' && !onlyEngHangul($("#ord_real_name"))){
			return;
		}

		if(!mobileSendFlag){
			if($("#receiver_name").val() != '' && !onlyEngHangul($("#receiver_name"))){
				return;
			}
		}
	}
	// OK Cashbag 적립카드
	if($("#point2").prop("checked") && ($("#okcashbag_save_card_no").val().trim() == "" || $('#okcashbag_save_card_no').val().length != 16)){
		alert("OK 캐시백 적립을 받으시려면 카드번호를 입력하셔야 합니다.");
		$("#point2").focus();
		return;
	}

	// Oh Point 적립카드
	if($("#point3").prop("checked") && ($("#ohpoint_save_card_no").val().trim() == "" || $('#ohpoint_save_card_no').val().length != 16)){
		alert("오포인트 적립을 받으시려면 카드번호를 입력하셔야 합니다.");
		$("#point3").focus();
		return;
	}
	
	// APP 캐쉬백 적립요청시 카드번호 확인
	if($("#agree_app_save_cashbag").length == 1 && $("#agree_app_save_cashbag").prop("checked")) {
		var card_no = $.trim($("#app_save_cashbag_card_no1").val() + $("#app_save_cashbag_card_no2").val() + $("#app_save_cashbag_card_no3").val() + $("#app_save_cashbag_card_no4").val());
		if (card_no.length < 16) {
			alert("OK 캐시백 적립을 받으시려면 카드번호를 입력하셔야 합니다.");
			$("#app_save_cashbag_card_no1").focus();
			return;
		} else {
			$("#app_save_cashbag_card_no").val(card_no);
		}
	}
	
	if($("#member_yn").val() != "N") {
		//주문자변경 시
		if($("#ord_real_name").val() == ""){
			alert("실주문자를 입력해주세요");
			$("#ord_real_name").focus();
			return;
		}
		
//		if($("#ord_real_tel1").val() == "" || $("#ord_real_tel2").val() == "" || $("#ord_real_tel3").val() == ""){
//			alert("실주문자의 연락처를 입력해주세요");
//			if($("#infoBtn").length > 0) {
//					
//				$("#memInfoBox").addClass("active");
//				$("#memInfoBox").next().css("display", "block"); 
//			}
//			 
//			$("#ord_real_tel2").focus();
//			return;
//		}
		
		if($("#ord_user_hand_tel1").val() == "" || $("#ord_user_hand_tel2").val() == "" || $("#ord_user_hand_tel3").val() == ""){
			alert("실주문자의 휴대폰 번호를 입력해주세요");
			$("#ord_user_hand_tel2").focus();
			return;
		}
		$("#ord_user_name").val($("#ord_real_name").val());
		$("#ord_user_tel").val($("#ord_real_tel1").val()+$("#ord_real_tel2").val()+$("#ord_real_tel3").val());
		$("#ord_user_hand_tel").val($("#ord_user_hand_tel1").val()+$("#ord_user_hand_tel2").val()+$("#ord_user_hand_tel3").val());

	}
	//다중배송지 체크	
	if($("#place1").prop("checked")){
		//다중배송지
		var cnt = $("#multiSetSelect").val();
		for(var i=1;i<=cnt;i++){
			var activeIndex = $(".deli_place").eq(i).find("ul li.active").index();
			
			if(activeIndex == 0) {//기본배송지
				//데이터 입력
				$("#receiver_name_" + i).val($.trim($("#receiver_name_display_" + i).text()));
				$("#receiver_tel1_" + i).val($.trim($("#receiver_tel_display_" + i).text().split("-")[0]));
				$("#receiver_tel2_" + i).val($.trim($("#receiver_tel_display_" + i).text().split("-")[1]));
				$("#receiver_tel3_" + i).val($.trim($("#receiver_tel_display_" + i).text().split("-")[2]));
				$("#receiver_hand_tel1_" + i).val($.trim($("#receiver_hand_tel_display_" + i).text().split("-")[0]));
				$("#receiver_hand_tel2_" + i).val($.trim($("#receiver_hand_tel_display_" + i).text().split("-")[1]));
				$("#receiver_hand_tel3_" + i).val($.trim($("#receiver_hand_tel_display_" + i).text().split("-")[2]));
				$("#receiver_zipcode1_" + i).val($.trim($("#receiver_base_addr_display_" + i).attr("data-zipcode")));
				$("#receiver_base_addr_" + i).val($.trim($("#receiver_base_addr_display_" + i).attr("data-base_addr")));
				$("#receiver_dtl_addr_" + i).val($.trim($("#receiver_base_addr_display_" + i).attr("data-dtl_addr")));

			} else if(activeIndex == 1) {//신규배송지
				//데이터 입력
				$("#receiver_name_" + i).val($.trim($("#receiver2_name_" + i).val()));
				$("#receiver_tel1_" + i).val($.trim($("#receiver2_tel1_" + i).val()));
				$("#receiver_tel2_" + i).val($.trim($("#receiver2_tel2_" + i).val()));
				$("#receiver_tel3_" + i).val($.trim($("#receiver2_tel3_" + i).val()));
				$("#receiver_hand_tel1_" + i).val($.trim($("#receiver2_hand_tel1_" + i).val()));
				$("#receiver_hand_tel2_" + i).val($.trim($("#receiver2_hand_tel2_" + i).val()));
				$("#receiver_hand_tel3_" + i).val($.trim($("#receiver2_hand_tel3_" + i).val()));
				$("#receiver_base_addr_" + i).val($.trim($("#receiver2_base_addr_" + i).val()));
				$("#receiver_dtl_addr_" + i).val($.trim($("#receiver2_dtl_addr_" + i).val()));
				$("#receiver_zipcode1_" + i).val($.trim($("#receiver2_zipcode1_" + i).val()));
				$("#deliv_keyword_" + i).val($.trim($("#receiver2_deliv_keyword_" + i).val()));
				
			}
			
			$("#receiver_tel_" + i).val($("#receiver_tel1_"+i).val()+$("#receiver_tel2_"+i).val()+$("#receiver_tel3_"+i).val());
			$("#receiver_hand_tel_" + i).val($("#receiver_hand_tel1_"+i).val()+$("#receiver_hand_tel2_"+i).val()+$("#receiver_hand_tel3_"+i).val());
			$("#receiver_zipcode_" + i).val($("#receiver_zipcode1_"+i).val());
			
			$("#turn_zipcode_" + i).val($("#receiver_zipcode_" + i).val());
			$("#turn_base_addr_" + i).val($("#receiver_base_addr_" + i).val());
			$("#turn_dtl_addr_" + i).val($("#receiver_dtl_addr_" + i).val());
			
			//
			//필수값 단일배송지
			$("#receiver_name").removeAttr("req");
			$("#receiver_tel1").removeAttr("req");
			$("#receiver_tel2").removeAttr("req");
			$("#receiver_tel3").removeAttr("req");
			$("#receiver_hand_tel1").removeAttr("req");
			$("#receiver_hand_tel2").removeAttr("req");
			$("#receiver_hand_tel3").removeAttr("req");
			$("#receiver_base_addr").removeAttr("req");
			$("#receiver_dtl_addr").removeAttr("req");
			$("#receiver_zipcode1").removeAttr("req");
			//필수값 다중배송지
			$("#receiver_name_" + i).attr("req", "req");
//			$("#receiver_tel1_" + i).attr("req", "req");
//			$("#receiver_tel2_" + i).attr("req", "req");
//			$("#receiver_tel3_" + i).attr("req", "req");
			$("#receiver_hand_tel1_" + i).attr("req", "req");
			$("#receiver_hand_tel2_" + i).attr("req", "req");
			$("#receiver_hand_tel3_" + i).attr("req", "req");
			$("#receiver_base_addr_" + i).attr("req", "req");
			$("#receiver_dtl_addr_" + i).attr("req", "req");
			$("#receiver_zipcode1_" + i).attr("req", "req");
			
			if($("#delivReqDetail_" + i).css("display") == "none") {
				$("#delivReqDetail_" + i).val($("#delivReqDetail_sel_" + i).val());
			}

			var qtycnt = 0;
			$(".qty_" + i + "_class").each(function(){
				qtycnt += Number($(this).val());
			});
			if(Number(qtycnt) == 0){
				alert("배송지"+i+"의 배송상품 정보를 입력해 주세요.");
				return;
			}
		}
	}else{
		//단일배송지
		var activeIndex = $(".deli_place ul li.active").index();
		if(activeIndex == 0) {//기본배송지
			
			$("#receiver_name").val($.trim($("#receiver_name_display").text()));
			$("#receiver_tel1").val($.trim($("#receiver_tel_display").text().split("-")[0]));
			$("#receiver_tel2").val($.trim($("#receiver_tel_display").text().split("-")[1]));
			$("#receiver_tel3").val($.trim($("#receiver_tel_display").text().split("-")[2]));
			$("#receiver_hand_tel1").val($.trim($("#receiver_hand_tel_display").text().split("-")[0]));
			$("#receiver_hand_tel2").val($.trim($("#receiver_hand_tel_display").text().split("-")[1]));
			$("#receiver_hand_tel3").val($.trim($("#receiver_hand_tel_display").text().split("-")[2]));
			$("#receiver_zipcode1").val($.trim($("#receiver_base_addr_display").attr("data-zipcode")));
			$("#receiver_base_addr").val($.trim($("#receiver_base_addr_display").attr("data-base_addr")));
			$("#receiver_dtl_addr").val($.trim($("#receiver_base_addr_display").attr("data-dtl_addr")));
			
		} else if(activeIndex == 1) {//신규배송지
			$("#receiver_name").val($.trim($("#receiver2_name").val()));
			$("#receiver_tel1").val($.trim($("#receiver2_tel1").val()));
			$("#receiver_tel2").val($.trim($("#receiver2_tel2").val()));
			$("#receiver_tel3").val($.trim($("#receiver2_tel3").val()));
			$("#receiver_hand_tel1").val($.trim($("#receiver2_hand_tel1").val()));
			$("#receiver_hand_tel2").val($.trim($("#receiver2_hand_tel2").val()));
			$("#receiver_hand_tel3").val($.trim($("#receiver2_hand_tel3").val()));
			$("#receiver_zipcode1").val($.trim($("#receiver2_zipcode1").val()));
			$("#receiver_base_addr").val($.trim($("#receiver2_base_addr").val()));
			$("#receiver_dtl_addr").val($.trim($("#receiver2_dtl_addr").val()));
			$("#deliv_keyword").val($.trim($("#receiver2_deliv_keyword").val()));
		}
		
		$("#receiver_tel").val($("#receiver_tel1").val()+$("#receiver_tel2").val()+$("#receiver_tel3").val());
		$("#receiver_hand_tel").val($("#receiver_hand_tel1").val()+$("#receiver_hand_tel2").val()+$("#receiver_hand_tel3").val());
		$("#receiver_zipcode").val($("#receiver_zipcode1").val());
		
		$("#turn_zipcode").val($("#receiver_zipcode").val());
		$("#turn_base_addr").val($("#receiver_base_addr").val());
		$("#turn_dtl_addr").val($("#receiver_dtl_addr").val());
		
		//필수값 단일배송지
		$("#receiver_tel1").removeAttr("req");
		$("#receiver_tel2").removeAttr("req");
		$("#receiver_tel3").removeAttr("req");
		$("#receiver_name").attr("req", "req");
//		$("#receiver_tel1").attr("req", "req");
//		$("#receiver_tel2").attr("req", "req");
//		$("#receiver_tel3").attr("req", "req");
		$("#receiver_hand_tel1").attr("req", "req");
		$("#receiver_hand_tel2").attr("req", "req");
		$("#receiver_hand_tel3").attr("req", "req");
		$("#receiver_base_addr").attr("req", "req");
		$("#receiver_dtl_addr").attr("req", "req");
		$("#receiver_zipcode1").attr("req", "req");
		
		if($("#delivReqDetail").css("display") == "none") {
			$("#delivReqDetail").val($("#delivReqDetail_sel").val());
		}

	}
	
	// 해외직구
	if($("#agree_overseas").length == 1) {
		if($("#place1").prop("checked")){
			//다중배송지 체크일시 필수값처리
			var cnt = $("#multiSetSelect").val();

			for(var i=1;i<=cnt;i++){
				// 해외직구 상품이 포함된 배송지 정보의 배송지가 도로명이 아닐 경우 얼럿
				if ($("#new_addr_yn_" + i).val() != "2" && $("#new_addr_yn_" + i).val() != "4") {
					alert("통관이 필요한 상품 구매시 도로명주소를 입력하셔야 합니다.\n새주소를 선택하시고 도로명주소를 검색해주세요.");
					$("#receiver_zipcode1_" + i).focus();
					return;
				}
			}
		}
		else{
			// 해외직구 상품이 포함된 배송지 정보의 배송지가 도로명이 아닐 경우 얼럿
			if ($("#new_addr_yn").val() != "2" && $("#new_addr_yn").val() != "4") {
				alert("통관이 필요한 상품 구매시 도로명주소를 입력하셔야 합니다.\n새주소를 선택하시고 도로명주소를 검색해주세요.");
				$("#receiver_zipcode1").focus();
				return;
			}
		}
		
		//  개인고유통관부호 저장 체크
		var persIndex 		 = $.trim($("#persIndex").val());
		var origin_persIndex = $.trim($("#origin_persIndex").val());

		if (persIndex != "" && origin_persIndex == "") {	//  신규 미저장시
			if (!savePersIndex("new"))
				return;
		} else if (origin_persIndex != "" && persIndex != origin_persIndex) {	// 수정후 미저장시
			if (!savePersIndex("edit"))
				return;
		}
	}
	
	//nPick
	if(Number($("#smartPickCnt").val()) > 0 ){
		$("#receiver_hand_tel_pick").val($("#receiver_hand_tel1_pick").val()+$("#receiver_hand_tel2_pick").val()+$("#receiver_hand_tel3_pick").val());
		
	} else {
		$("#receiver_name_pick").removeAttr("req");
		$("#receiver_hand_tel1_pick").removeAttr("req");
		$("#receiver_hand_tel2_pick").removeAttr("req");
		$("#receiver_hand_tel3_pick").removeAttr("req");
	}
//
//	if($("#baseDeliverDiv").length == 0) {
//		
//		$("#receiver_name").removeAttr("req");
//		$("#receiver_tel1").removeAttr("req");
//		$("#receiver_tel2").removeAttr("req");
//		$("#receiver_tel3").removeAttr("req");
//		$("#receiver_hand_tel1").removeAttr("req");
//		$("#receiver_hand_tel2").removeAttr("req");
//		$("#receiver_hand_tel3").removeAttr("req");
//		$("#receiver_zipcode1").removeAttr("req");
//		$("#receiver_zipcode2").removeAttr("req");
//		$("#receiver_base_addr").removeAttr("req");
//		$("#receiver_dtl_addr").removeAttr("req");
//		
//	}
//	
	if(mobileSendFlag){
		var recv_tel1 = document.getElementsByName("recv_tel1[]");
		var recv_tel2 = document.getElementsByName("recv_tel2[]");
		var recv_tel3 = document.getElementsByName("recv_tel3[]");

//		var recv_title = document.getElementsByName("recv_title[]");
		var recv_msg   = document.getElementsByName("recv_msg[]");

		for(var i=0;i<recv_tel1.length;i++){
			if(recv_tel1[i].value == "" || recv_tel2[i].value == "" || recv_tel3[i].value == ""){
				alert("받는사람 핸드폰 번호를 입력해 주세요.");
				recv_tel1[i].focus();
				return;
			}//if end

			if(recv_msg[i].value == ""){
				alert("내용을 입력해 주세요.");
				recv_msg[i].focus();
				return;
			}//if end
		}//for end
		
	}//mobileSendFlag end

	if(nomem == 'false'){
		$("#ord_user_tel").val($("#ord_user_tel1").val()+$("#ord_user_tel2").val()+$("#ord_user_tel3").val());
		$("#ord_user_hand_tel").val($("#ord_user_hand_tel1").val()+$("#ord_user_hand_tel2").val()+$("#ord_user_hand_tel3").val());
		$("#ord_user_zipcode").val($("#ord_user_zipcode1").val());
//		$("#ord_user_email").val($("#email1").val()+"@"+$("#email3").val());
	}

	if(!chkForm(frm)) return;	//필수입력값들 확인
	
	// 포인트 결제제한
	var chk_point = 0;
	if($("#akMileDcPoint").length > 0) {
		chk_point = uncomma($("#akMileDcPoint").val());//AK마일리지
		if (chk_point > 0 && chk_point < 500) {
			alert("AK마일리지는 500원 이상부터 사용이 가능합니다.");
			return;
		}
	}
	if($("#ohPointInput").length > 0) {
		chk_point  = uncomma($("#ohPointInput").val());  //오!포인트
		if (chk_point > 0 && chk_point != floor(chk_point, -1)){
			alert("Oh포인트는 10원단위로 사용이 가능합니다.");
			return;
		}
	}
	
	//에스크로 실명인증
	frm.auth_step.value = "2";

	if($("#escrow").size() > 0){
		if (frm.escrow.checked) {
			if ( !chkGuestEscrow() ) {
				return;
			}
			if (frm.e_auth_yn.value != 'Y'){
				return;
			}
		}	//with 끝
	}
	
	//다중배송지일때 배송지N의 배송 상품들 0개인지 체크
	if($("#place1").prop("checked")){
		var cnt = $("#multiSetSelect").val();
		if(cnt == ""){
			alert("다중 배송지를 설정해 주세요.");
			$("#multiSetSelect").focus();
			return;
		}

		for(var i=1;i<=cnt;i++){
			var placeCnt = 0;

			$(".qty_"+i+"_class").each(function(){
				placeCnt += Number($(this).val());
			});

			if(placeCnt==0){
				alert("배송지"+i+"의 배송상품을 선택해 주세요.");
				return;
			}
		}
	}

	var cardPrice = 0;
	var bankPrice = 0;
	var muPrice = 0;
	var payTocPrice = 0;
	var mobilePrice = 0;
	var yellowPrice = 0;
	var worldPrice = 0;
	var paycoPrice = 0;
	var naverPayPrice = 0;
	var samsungPayPrice = 0;
	var akPayPrice = 0;
	
	var exit = false;
	var sum = 0;

	//쿠폰 적용 후 제한된 결제 수단
	var coupon_pay_type = frm.coupon_pay_type.value;

	//쿠폰 적용 후 제한된 결제 카드사
	var coupon_card = frm.coupon_card.value;

	//쿠폰 적용 후 제한된 결제 금액
	var coupon_limit = frm.coupon_limit.value;
	
	if(coupon_limit!=""){
		var arr = coupon_limit.split(",");
		for(var i=0;i<arr.length;i++){
			
			var tmp = arr[i].split("@");

			var msg = "";

			if(tmp[0] == '1') msg = "신용카드";
			if(tmp[0] == '2') msg = "실시간 계좌이체";
			if(tmp[0] == '3') msg = "무통장";
			if(tmp[0] == '8') msg = "옐로페이";
			if(tmp[0] == '9') msg = "페이톡 결제";
			if(tmp[0] == '10') msg = "모바일 결제";
			if(tmp[0] == '1W') msg = "월드패스";
			if(tmp[0] == '15') msg = "페이코 결제";
			if(tmp[0] == '16') msg = "네이버페이";

			if(tmp[0] == '5') msg = "Oh! point";
			if(tmp[0] == '6') msg = "OK캐쉬백";
			if(tmp[0] == '17') msg = "AK페이";
			
			var coupon_limit_pass = 0;
			$(".payType").each(function(){
				if($(this).prop("checked")){
					var paytype = $(this).val();
					var price = uncomma($(this).parent().find("input[type=text]").val());

					if(tmp[0] == paytype){
						if(Number(price) < Number(tmp[1])){
							alert(msg + " 전용쿠폰은 " + msg + " " + comma(tmp[1]) + "원 이상 결제를 하셔야 사용 가능합니다.");
							exit = true;
							return false;
						}
					}
					else{
						coupon_limit_pass++;
					}
				}
			});

			//오포인트
			if(tmp[0] == '5'){
				var ohPointInput = 0 ;
				if($("#ohPointInput").length > 0) ohPointInput  = uncomma($("#ohPointInput").val());  //오!포인트

				if(Number(defaulPrice) < Number(tmp[1])){
					alert(msg + " 전용쿠폰은  " + comma(tmp[1]) + "원 이상 결제를 하셔야 사용 가능합니다.");
					return;
				}

				//10만원이상
				if(Number(tmp[1]) == 100000){
					if(Number(ohPointInput) < 5000){
						alert(msg + " 전용쿠폰은 " + msg + "를 5,000포인트 이상 사용을 하셔야  합니다.");
						return;
					}
				}

				//2만원이상
				if(Number(tmp[1]) == 20000){
					if(Number(ohPointInput) < 1000){
						alert(msg + " 전용쿠폰은 " + msg + "를 1,000포인트 이상 사용을 하셔야  합니다.");
						return;
					}
				}
			}

			//OK캐쉬백
			if(tmp[0] == '6'){
				var cashbagInput = 0;
				if($("#cashbagInput").length > 0) cashbagInput  = uncomma($("#cashbagInput").val());  //OK캐쉬백
				if(Number(cashbagInput) < Number(tmp[1])){
					alert(msg + " 전용쿠폰은 " + msg + "을 " + comma(tmp[1]) + "포인트 이상 사용을 하셔야  합니다.");
					return;
				}
			}


			if(coupon_limit_pass == 0){
				if(Number(defaulPrice) < Number(tmp[1])){
					alert(msg + " 전용쿠폰은 " + msg + " " + comma(tmp[1]) + "원 이상 결제를 하셔야 사용 가능합니다.");
					exit = true;
					break;
				}
			}
		}

		if(exit) return;
	}
	
	$(".payType").each(function(){
		//복합결제 체크 추가
		if(Number(uncomma($(this).parent().find("input[type=text]").val())) == 0) {
			$(this).prop("checked", false);
		}
	});	
	
	//결제수단의 따른 결제금액 세팅
	//var payTypeCheck = false;
	$(".payType").each(function(){
		if($(this).prop("checked")){
			//payTypeCheck = true;
			var paytype = $(this).val();
			var price = uncomma($(this).parent().find("input[type=text]").val());
			
			if(coupon_pay_type!=""){
				
				var samsungPayFlag = false;
				// 삼성페이일때도 카드쿠폰 을 허용하기위해 임시세팅
				if(paytype == '1S'){
					samsungPayFlag = true;
					paytype = '1';
				}
				
				var arr = coupon_pay_type.split(",");
				for(var i=0;i<arr.length;i++){

					var msg = "";

					if(arr[i] == '1') msg = "신용카드";
					if(arr[i] == '2') msg = "실시간 계좌이체";
					if(arr[i] == '3') msg = "무통장";
					if(arr[i] == '8') msg = "옐로페이";
					if(arr[i] == '9') msg = "페이톡 결제";
					if(arr[i] == '10') msg = "모바일 결제";
					if(arr[i] == '1W') msg = "월드패스";
					if(arr[i] == '15') msg = "페이코결제";
					if(arr[i] == '16') msg = "네이버페이";	
					if(samsungPayFlag) msg = "삼성페이";
					if(arr[i] == '17') msg = "AK페이";
					
					if(paytype != arr[i]){
						alert("적용하신 쿠폰은 " + msg + " 단독 결제시에만 사용 가능합니다.\n(포인트및 타결제수단 복합결제 불가)");
						exit = true;
						break;
					}

					if(!chkNoPointDC()){
						alert("적용하신 쿠폰은 " + msg + " 단독 결제시에만 사용 가능합니다.\n(포인트및 타결제수단 복합결제 불가)");
						exit = true;
						break;
					}
				}
				
				// 삼성페이 카드쿠폰 허용후 paytype 원복
				if(samsungPayFlag){
					paytype = '1S';
				}

				if(exit) return false;
			}

			if(paytype == '1'){
				
				if($("#card_id").val()==''){
					alert("결제카드를 선택해 주세요.");
					$("#card_id").focus();
					exit = true;
					return false;
				}
				
				if(coupon_card!="" && coupon_card != "@"){
					var arr = coupon_card.split("|");

					for(var i=0;i<arr.length;i++){
						var tmp = arr[i].split("@");
						for(var e=0;e < tmp.length;e++){
							if(tmp[e]!=""){
								var tmp2 = tmp[e].split(",");

								var cardName = "";
								var applyCnt = 0;
								for(var f=0;f < tmp2.length;f++){
									if($("#card_id").val() == tmp2[f]) applyCnt++;

									if(cardName!="") cardName += ",";
									cardName += getCardName(tmp2[f]);
								}

								if(applyCnt == 0){
									$("#card_id").val("");
									alert(cardName + " 전용 쿠폰을 사용하시는 경우, " + cardName + "로 결제하셔야 합니다.");
									exit = true;
									break;
								}
							}
						}

						if(exit) break;
					}

					if(exit) return false;
				}//if end
				cardPrice = price;               //카드
				
			}
			
			if(paytype == '2') bankPrice = price; 			    //실시간 계좌이체
			if(paytype == '3') {
				if(!payTypePMCheck.check('3')) {
					exit = true;
					return false;
				}
				muPrice = price; 			    //무통장
				if($("#refund_bank_code").val() == "") {
					alert("환불 계좌 은행 선택은 필수 입니다.");
					$("#refund_bank_code").focus();
					exit = true;
					return false;
				}else if($("#refund_acct_no").val() == "") {
					alert("환불 계좌번호 항목은 필수 입니다.");
					$("#refund_acct_no").focus();
					exit = true;
					return false;
				}else if(($("#origin_refund_bank_code").val() != $("#refund_bank_code").val()
						|| $("#origin_refund_acct_no").val() != $("#refund_acct_no").val())){
					alert("환불계좌 변경 내용이 있습니다. 환불계좌를 다시 저장해 주세요.");
					exit = true;
					return false;
				}
				if(exit) return false;
			}
			if(paytype == '8') yellowPrice = price; 			//옐로페이
			if(paytype == '9') payTocPrice = price; 			//페이톡 결제
			if(paytype == '10') mobilePrice = price; 			//모바일 결제
			if(paytype == '1W') worldPrice = price; 		    //월드패스
			if(paytype == '15') paycoPrice = price; 			//페이코 결제
			if(paytype == '16') naverPayPrice = price;			//네이버페이
			if(paytype == '1S') samsungPayPrice = price;		//삼성페이
			if(paytype == '17') akPayPrice = price;				//AK페이
			
			sum = Number(sum) + Number(price);
		}
		
		//paytype 아무것도 선택되지 않음
		/* 운영에 반영이 안되어 있어서
		if(!payTypeCheck && coupon_pay_type!="") {
			
			var arr = coupon_pay_type.split(",");
			for(var i=0;i<arr.length;i++){
				var msg = "";
				if(arr[i] == '1') msg = "신용카드";
				if(arr[i] == '2') msg = "실시간 계좌이체";
				if(arr[i] == '3') msg = "무통장";
				if(arr[i] == '8') msg = "옐로페이";
				if(arr[i] == '9') msg = "페이톡 결제";
				if(arr[i] == '10') msg = "모바일 결제";
				if(arr[i] == '1W') msg = "월드패스";
				if(arr[i] == '15') msg = "페이코결제";
				if(arr[i] == '16') msg = "네이버페이";	
				if(arr[i] == '17') msg = "AK페이";
				
				if(!chkNoPointDC()){
					alert("적용하신 쿠폰은 " + msg + " 단독 결제시에만 사용 가능합니다.\n(포인트및 타결제수단 복합결제 불가)");
					exit = true;
					break;
				}
			}

			if(exit) return false;
		}
		*/
	});
	
	if(exit) return;
	
	 if(sum < paymentPrice){
		 
		if(sum == 0){
			alert("결제수단을 선택해 주세요.");
			return;
		}
		alert("선택하신 결제수단에 대한 합계금액과 상품의 구매금액 합이 일치하지 않습니다.");
		return;
	}
	 
	//일시불할인일때 카드수단 결제금액 체크
	if($("#lumpPayChk").length > 0){
		if($("#lumpPayChk").prop("checked") && Number(cardPrice) == 0){
			alert("일시불 할인 혜택은 카드결제 시 적용이 됩니다.");
			return;
		}
	}

	 //현금영수증 체크
	var cyberAmt = 0;
	var voucherPoint = 0;
	var epointAmt = 0;

	if(frm.cyberAmt)		cyberAmt = uncomma(frm.cyberAmt.value);
	if(frm.voucherPoint)	voucherPoint = uncomma(frm.voucherPoint.value);
	if(frm.epointAmt)		epointAmt = uncomma(frm.epointAmt.value);

	// var tot_price = Number(bankPrice) + Number(muPrice)  + Number(cyberAmt)  + Number(voucherPoint)  + Number(epointAmt);
    var tot_price = Number(bankPrice) + Number(muPrice) + Number(naverPayPrice) + Number(cyberAmt)  + Number(voucherPoint)  + Number(epointAmt) + Number(akPayPrice);

	if(tot_price > 0 && ($("#bi1").prop("checked") || $("#bi2").prop("checked"))){

		// 사이버머니
		// 상품권전환
		// e포인트
		// 복지포인트
		// 무통장
		// 실시간 계좌이체
		// 네이버페이
		// AK페이
		
	    if(frm.use_gb.value != "0" && tot_price <= 0){
			alert("현금영수증 발급은 0원 이상인 경우 가능합니다.");
			return ;
		}

		if(frm.use_gb.value != "0" && tot_price > 0){
			
			if($("#receiptLayer").is($("#receiptLayer").show())) {
				
				if($("#receiptLayer input:checkbox").is(":checked")) {
					
					if (!applyCashPay())
						return ;
				}
			}
		};
	}

	//<%-- 본인인증 처리조건 --%>
	if (drinkNotice) {
		//<%-- 전통주 구매시 생일정보입력및 본인인증 --%>
		if($("#drink_birth1").val() == "" || $("#drink_birth2").val() == "" || $("#drink_birth3").val() == ""){
			alert("전통주 구매시 생일정보를 입력해주세요.");
			$("#drink_birth1").focus();
			return;
		} else {
			if (!daysCheck(frm.drink_birth1, frm.drink_birth2, frm.drink_birth3)) {
				return;
			}
		}

		var birthYmd = $("#drink_birth1").val()+$("#drink_birth2").val()+$("#drink_birth3").val();
	    if (birthYmd.length == 8) {	    	
	    	var now = new Date();
	        var input = new Date(birthYmd.substr(0,4), birthYmd.substr(4,2)-1, birthYmd.substr(6,2));
	        var now_mmdd = fn_leadingZeros(now.getMonth() + 1, 2) + fn_leadingZeros(now.getDate(), 2);

	        var age = now.getFullYear() - input.getFullYear();
	        var ovr = now_mmdd - birthYmd.substr(4,4);
	        if (age > 0) age = (ovr < 0) ? age-1 : age;

	        //alert(age);
			if (age < 19) {
				alert("만 19세 미만인경우 전통주 구매가 불가합니다.");
				return;
			} else {
				$("#ord_user_resno").val($("#drink_birth1").val().substring(2,4)+$("#drink_birth2").val()+$("#drink_birth3").val() + "0000000");
			}
	    } else {
	    	alert("생일 정보 입력을 확인해주세요.");
			return;
	    }
	    
	    if (frm.ord_person_chk_drink.value != "0000") {
			if (confirm("전통주 구매시 본인인증이 필요합니다.\n본인인증을 하시겠습니까?")) {
				pOrdPersonCheck("drink");
				return;
			}
			return;
		}
		
	}
	else if (nowSite == 1 && giftCouponNotice) {
		if (ipin_member_yn == "M" || ipin_member_yn == "E" || ipin_member_yn == "S") {
			if(confirm("건전한 상품권 거래 문화 정착을 위하여 모바일 상품권의 경우 본인확인을 통해 가입하신 AK통합멤버스 회원만 구매가 가능합니다. AK통합멤버스으로 가입 하시겠습니까?")){
				if($("#isAkApp").val() != "" && $("#isAkApp").val() != "N") {
				   	window.location = "newtab:https://m.akmembers.com/signup/signup.do?act=stepIntro&members=1&site=makmall";   
				} else {
					window.open('https://m.akmembers.com/signup/signup.do?act=stepIntro&members=1&site=makmall');
				}
			}
			return;
		} else {
			/*if (akmembersCustNo != '0' && frm.ord_person_chk.value != "0000") {
				if (confirm("모바일 상품권의 주문/결제시 본인인증이 필요합니다.\n본인인증을 하시겠습니까?")) {
					pOrdPersonCheck();
					return;
				}else {
					return;
				}
			}*/
			
		}
	}
	
	//유이자일 경우 무이자에 동일 개월수가 있는지 확인
	if(cardPrice > 0 && $("#ca3").prop("checked")){
		chkMuMonth(cardPrice);
	}

	//카드결제일 경우 청구할인 체크
	if(Number(cardPrice) > 0){

		if(Number(cardPrice) < 100){
			alert("신용카드는 100원 이상 결제가 가능합니다.");
			return;
		}

		//안심결제
		if (frm.pay_type_card_gb.value == "A" && Number(cardPrice) > 0 ) {
		}else if (frm.pay_type_card_gb.value == "I" && Number(cardPrice) > 0) {//ISP
			frm.kb_savepointree.value  = "";
			if (frm.pay_bonus_point.value == "Y"){
			}else{
				if (Number(cardPrice) >= 50000 && $("#card_id").val() == '16') {
						frm.kb_savepointree.value = "TRUE";
				}
			}

			//일시불 할인
			if( frm.norest_dc_yn[0].checked ){
				frm.quota_inf.value	= "00";
				frm.noint_inf.value	= "NONE";
			}
			else if(frm.norest_dc_yn[1].checked){
				if (frm.installment_month_cnt.value.substring(0,1) == "0")
					frm.quota_inf.value	= frm.installment_month_cnt.value.substring(1);
				else
					frm.quota_inf.value	= frm.installment_month_cnt.value;
				var free_month = "";
				$("#installment_month_cnt option").each(function() {
					if(free_month!="") free_month += ":";
					free_month = free_month + Number($(this).val());
				});
				frm.noint_inf.value	 = frm.KVP_CARDCOMPANY.value  + "-"+free_month;	// 형식 : 0100-2:3:6:10,0204-2:3:6:10
			}
			else if(frm.norest_dc_yn[2].checked){
				if (frm.installment_month_cnt.value.substring(0,1) == "0")
					frm.quota_inf.value	= frm.installment_month_cnt.value.substring(1);
				else
					frm.quota_inf.value	= frm.installment_month_cnt.value;
				frm.noint_inf.value	= "";
			}
		}

		frm.submit();
	}
	else if ( Number(mobilePrice) > 0) {	         //모바일

		//휴대폰 최소 금액은 500원 이상
		if(Number(mobilePrice) < 500){
			alert("최소 결제 금액은 500원 이상이어야 합니다.");
			$("#payPrice10").focus();
			return;
		}
		btnChk = false;
		//모빌리언스와 다날 결제 분배
		if(Number(document.orderFrm.ord_id.value)%2 > 0){
			document.orderFrm.mobile_type.value 	= "M";
		}
		else{
			document.orderFrm.mobile_type.value 	= "D";
		}

		frm.submit();
	}	else if(Number(paycoPrice) > 0){               //PAYCO

		//PAYCO 최소 금액은 100원 이상
		if(Number(paycoPrice) < 100){
			alert("payco결제 최소 결제 금액은 100원 이상이어야 합니다.");
			$("#payPrice15").focus();
			return;
		}
		
		// 가맹점코드 변경
		if($("#culDeductionYn").val() == "Y") {
			//alert("CULTURE");
			$("#paycoSellerKey").val(paycoSellerKey_culture);
		} else if(Number($("#paycoEventGoods").val()) > 0 || Number($("#paycoEventCoupon").val()) > 0) {
			//alert("프로모션가맹점");
			$("#paycoSellerKey").val(paycoSellerKey_prom);
		} else {
			//alert("일반가맹점");
			$("#paycoSellerKey").val(paycoSellerKey);
		}
		//alert($("#paycoSellerKey").val());

	    // localhost 로 테스트 시 크로스 도메인 문제로 발생하는 오류
	    $.support.cors = true;

		/* + "&" + $('order_product_delivery_info').serialize() ); */
		$.ajax({
			type: "POST",
			url: "/order/PaycoReserveAjax.do",
			data: $("#orderFrm").serialize(),
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			dataType:"json",
			success:function(data){
				if(data == null) {
					alert("PAYCO 인증창 호출시 오류가 발생하였습니다.");
					return;
				}

			    if(data.code == '0') {
					$('#order_num').val(data.result.reserveOrderNo);
					$('#order_url').val(data.result.orderSheetUrl);
					var orderurl = data.result.orderSheetUrl;

					open_payco_order(data.result.orderSheetUrl, data.result.reserveOrderNo);

				} else {
					alert("code:"+data.code+"\n"+"message:"+data.message);
				}
			},
	        error: function(request,status,error) {
	            alert("code:"+request.status+"\n")
				return false;
	        }
		});
	 	return;
	}
	else if(Number(naverPayPrice) > 0){               //네이버페이
		//최소 금액은 100원 이상
		if(Number(naverPayPrice) < 100){
			alert("네이버페이 결제 최소 결제 금액은 100원 이상이어야 합니다.");
			$("#payPrice16").focus();
			return;
		}
		$.ajax({
			type: "POST",
			url: "/order/NaverPayReserveAjax.do",
			data: $("#orderFrm").serialize(),
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			dataType:"json",
			success:function(data){
				if(data == null) {
					alert("네이버페이 인증창 호출시 오류가 발생하였습니다.");
					disableItems( false );
					return;
				}
				if(data.code != 'Success') {
					alert("code:"+data.code+"\n"+"message:"+data.message);
				}
			    document.location.replace(data.paymentUrl);
			},
	        error: function(request,status,error) {
	            //에러코드
	            alert("code:"+request.status+"\n");
				return false;
	        }
		});
	 	return;
	}
	else if(Number(samsungPayPrice) > 0){
		
		if(Number(samsungPayPrice) < 100){
			alert("삼성페이는 100원 이상 결제가 가능합니다.");
			return;
		}
		
		var tempCouponCard = frm.coupon_card.value;
		if(tempCouponCard == "|" || tempCouponCard == "@|@"){ // 카드쿠폰이 아닌 중복쿠폰이 들어올경우
			frm.coupon_card.value = "";
		}
		
		var tempCouponCards = tempCouponCard.split("|");
		var deleteCouponCardIdx = new Array();
		
		var applyCouponCardIds = null;
		var applyCouponCardId = null;
		
		var validCouponCardId = true;
		
		for(var i=0; i<tempCouponCards.length; i++){
			if(tempCouponCards[i] == '@'){
				deleteCouponCardIdx.push(i);
			}
		}
		
		for(var i=0; i<deleteCouponCardIdx.length; i++){
			tempCouponCards.splice(deleteCouponCardIdx[i]-i, 1);
		}
		
		tempCouponCard = "";
		for(var i=0; i<tempCouponCards.length; i++){
			
			if(tempCouponCards[i] != '@'){
				
				applyCouponCardIds = tempCouponCards[i].split("@");
				
				for(var j=0; j<applyCouponCardIds.length; j++){
					
					if(applyCouponCardIds[j] != null && applyCouponCardIds[j] != ""){
						
						if( applyCouponCardId == null){
							applyCouponCardId = applyCouponCardIds[j];
						}else if(applyCouponCardId != applyCouponCardIds[j]){
							validCouponCardId = false;
						}
					}
				}
			}
		}
		
		if(applyCouponCardId != null){
			frm.coupon_card.value = applyCouponCardId;
		}else{
			frm.coupon_card.value = "";
		}
		
		if(!validCouponCardId){
			alert("동일한 카드사 쿠폰만 적용할수 있습니다.");
			return;
		}
		
		frm.submit();
		return;

	}
	else if(Number(akPayPrice) > 0){               //AK페이
		//최소 금액은 10000원 이상
		if(Number(akPayPrice) < 10000){
			alert("AK페이는 10,000원이상 결제 시 이용 가능합니다.");
			return;
		}
		if(frm.bankCode == undefined){
			open_ak_pay("/order/Akpay.do?ord_id="+frm.ord_id.value+"&price="+akPayPrice);
		} {
			open_ak_pay("/order/Akpay.do?ord_id="+frm.ord_id.value+"&bankCode="+frm.bankCode.value+"&price="+akPayPrice);
		}
	 	return;
	}
	else{
		var payprice = document.orderFrm.paymentPrice.value;
		if(nowSite == 1 && Number(payprice) == 0 && akmembersCustNo == '0'){
//			frm.action = '/order/OrdPersonCheckByMobile.do';
		}
		btnChk = false;
		frm.submit();
		
	}
}

function open_payco_order(url, ord_no){
	close_payco_order();

	var h = $(window).height() - 90; //(디바이스 높이) - (헤더영역 높이 + 마진값)

	$(".container").hide();

	var psn = '';
	psn += '<div id="comon_payco_order_wrap" class="common_hp_order_wrap">';
	psn += '	<div class="hpo_wrap">';
	psn += '		<div class="hpo_cont_wrap" style="-webkit-overflow-scrolling:touch;overflow-y:auto !important;width:100%;height:'+ h +'px;">';
	psn += '			<iframe name="PAYCO_FRAME" id="PAYCO_FRAME" src="'+url+'" frameborder="0" onload="onload_payco_order()" style="overflow:auto !important;width:100%;height:'+ (h-5) +'px;"></iframe>';
	psn += '		</div>';
	psn += '		<div class="btnType02 b_gray" onclick="close_payco_order();" style="display:block; text-align:center; margin:0 15px;"></div>';
	psn += '	</div>';
	psn += '</div>';

	$("header").after().append(psn);

}

//페이코 결제 레이어 팝업 닫기
function close_payco_order(){
	if($("#container").css("display") == "none" ) {
		$("#container").show();
	}
	$("#comon_payco_order_wrap").remove();
}

//페이코 결제 레이어 팝업 로딩 이벤트 처리
function onload_payco_order() {
	$(window).scrollTop(0);
	$("#comon_payco_order_wrap .hpo_cont_wrap").scrollTop(0);
	$("#PAYCO_FRAME").scrollTop(0);
}

function applyCashPay () {

	with (document.orderFrm) {

		var use_gb_val = use_gb.value;
		var key_gb_val = '';

		key_gb_val = key_gb.value;

		if (key_gb_val == '1') {

			if (keydiv_1_val_1.value == '' || keydiv_1_val_2.value == '' || keydiv_1_val_3.value == '' || keydiv_1_val_4.value == '') {
				alert('카드번호를 입력해주세요.');
				return false;
			}
			else {
				key_no.value = keydiv_1_val_1.value + keydiv_1_val_2.value + keydiv_1_val_3.value + keydiv_1_val_4.value;
			}

			if (key_no.value.length < 13) {
				alert('카드번호는 최소 13자리 이상의 숫자값이어야 합니다. 바르게 입력해주세요.');
				keydiv_1_val_1.focus();
				return false;
			}

		}
		else if (key_gb_val == '2') {

			if (keydiv_2_val_1.value == '' || keydiv_2_val_2.value == '') {
				alert('주민등록번호를 입력해주세요.');
				return false;
			} else if ( !chkResNo(keydiv_2_val_1.value, keydiv_2_val_2.value) && !check_fgnno(keydiv_2_val_1.value + keydiv_2_val_2.value) ){
				alert("올바른 주민등록번호가 아닙니다. 다시 한번 확인해 주시기 바랍니다.");
				keydiv_2_val_1.focus();
				return false;
			}
			else
				key_no.value = keydiv_2_val_1.value + keydiv_2_val_2.value;
		}
		else if (key_gb_val == '3') {

			if (keydiv_3_val_1.value == '' || keydiv_3_val_2.value == '' || keydiv_3_val_3.value == '') {
				alert('사업자 등록번호를 입력해주세요.');
				return false;
			}
			else
				key_no.value = keydiv_3_val_1.value + keydiv_3_val_2.value + keydiv_3_val_3.value;

			if ( !check_CorpNO(key_no.value) ){
				alert("올바른 사업자등록번호가 아닙니다. 다시 한번 확인해 주시기 바랍니다.");
				keydiv_3_val_1.focus();
				return false;
			}
		}
		else if (key_gb_val == '4') {

			if (keydiv_4_val_1.value == '' || keydiv_4_val_2.value == '' || keydiv_4_val_3.value == '') {
				alert('휴대폰 번호를 입력해주세요.');
				return false;
			}
			if (keydiv_4_val_1.value != '010' && keydiv_4_val_1.value != '011' && keydiv_4_val_1.value != '016' &&
					keydiv_4_val_1.value != '017' && keydiv_4_val_1.value != '018' && keydiv_4_val_1.value != '019') {
				alert('휴대폰 번호 앞자리를 바르게 입력해주세요.');
				return false;
			}

			key_no.value = keydiv_4_val_1.value + keydiv_4_val_2.value + keydiv_4_val_3.value;
		}
		else if (key_gb_val == '5') {

			if (keydiv_5_val_1.value == '' || keydiv_5_val_2.value == '' || keydiv_5_val_3.value == '' || keydiv_5_val_4.value == '') {
				alert('카드번호를 입력해주세요.');
				return false;
			}
			else {
				key_no.value = keydiv_5_val_1.value + keydiv_5_val_2.value + keydiv_5_val_3.value + keydiv_5_val_4.value;
			}

			if (key_no.value.length < 13) {
				alert('카드번호는 최소 13자리 이상의 숫자값이어야 합니다. 바르게 입력해주세요.');
				keydiv_5_val_1.focus();
				return false;
			}
		}

		if (isDigit(key_no.value) == false) {
			alert('현금영수증 발행 시 개인 식별 항목값은 숫자만 입력가능합니다.');
			key_no.value = "";
			return false;
		}

		if (key_no.value.length < 10) {
			alert('현금영수증 발행 시 개인 식별 항목값은 최소 10자리 이상의 숫자값이어야 합니다.');
			return false;
		}

		return true;
	}
}

//숫자 체크
function isDigit (num) {
	for (var i = 0; i < num.length; i++)
		if (num.charAt (i) < '0' || num.charAt (i) > '9')
			return false;

	return true;
}

//주민번호 체크
function chkResNo(resno1, resno2)
{
	var i3=0
	for (var i=0;i<resno1.length;i++)
	{
		var ch1 = resno1.substring(i,i+1);
		if (ch1<'0' || ch1>'9') { i3=i3+1 }
	}

	if ((resno1 == '') || ( i3 != 0 ))
	{
		return (false);
	}

	var i4=0
	for (var i=0;i<resno2.length;i++)
	{
		var ch1 = resno2.substring(i,i+1);
		if (ch1<'0' || ch1>'9') { i4=i4+1 }
	}
	if ((resno2 == '') || ( i4 != 0 ))
	{
		return (false);
	}

	if(resno1.substring(0,1) < 0)
	{
		return (false);
	}

	if(resno2.substring(0,1) > 4)
	{
		return (false);
	}

	if((resno1.length != 6) || (resno2.length != 7))
	{
		return (false);
	}

	if ((resno1 == '72') || ( resno2 == '18'))
	{
		return (false);
	}

	var f1=resno1.substring(0,1)
	var f2=resno1.substring(1,2)
	var f3=resno1.substring(2,3)
	var f4=resno1.substring(3,4)
	var f5=resno1.substring(4,5)
	var f6=resno1.substring(5,6)
	var hap=f1*2+f2*3+f3*4+f4*5+f5*6+f6*7
	var l1=resno2.substring(0,1)
	var l2=resno2.substring(1,2)
	var l3=resno2.substring(2,3)
	var l4=resno2.substring(3,4)
	var l5=resno2.substring(4,5)
	var l6=resno2.substring(5,6)
	var l7=resno2.substring(6,7)
	hap=hap+l1*8+l2*9+l3*2+l4*3+l5*4+l6*5
	hap=hap%11
	hap=11-hap
	hap=hap%10
	if (hap != l7)
	{
		return (false);
	}

	return true;
}

//사업자 번호 확인
function check_CorpNO(strNumb)
{
	if (strNumb.length != 10)
	{
		return false;
	}

	sumMod  = 0;
	sumMod += parseInt(strNumb.substring(0,1));
	sumMod += parseInt(strNumb.substring(1,2)) * 3 % 10;
	sumMod += parseInt(strNumb.substring(2,3)) * 7 % 10;
	sumMod += parseInt(strNumb.substring(3,4)) * 1 % 10;
	sumMod += parseInt(strNumb.substring(4,5)) * 3 % 10;
	sumMod += parseInt(strNumb.substring(5,6)) * 7 % 10;
	sumMod += parseInt(strNumb.substring(6,7)) * 1 % 10;
	sumMod += parseInt(strNumb.substring(7,8)) * 3 % 10;
	sumMod += Math.floor(parseInt(strNumb.substring(8,9)) * 5 / 10);
	sumMod += parseInt(strNumb.substring(8,9)) * 5 % 10;
	sumMod += parseInt(strNumb.substring(9,10));

	if (sumMod % 10 != 0)
	{
		return false;
	}

	return true;
}

function getCardName(id){
	var cardName = "";
	$("#card_id").find("option").each(function(){
		if($(this).val() == id){
			cardName = $(this).text();
			return false;
		}
	});

	return cardName;
}

function chkNoPointDC(){
	var chkFlag = true;

    if($("#akMileDcPoint").length > 0){
    	if(Number(uncomma($("#akMileDcPoint").val())) > 0) chkFlag = false;
    }

    if($("#cashbagInput").length > 0){
    	if(Number(uncomma($("#cashbagInput").val())) > 0) chkFlag = false;
    }

    if($("#ohPointInput").length > 0){
       	if(Number(uncomma($("#ohPointInput").val())) > 0) chkFlag = false;
    }

    if($("#pointInput").length > 0){
       	if(Number(uncomma($("#pointInput").val())) > 0) chkFlag = false;
    }

    if($("#voucherPoint").length > 0){
    	if(Number(uncomma($("#voucherPoint").val())) > 0) chkFlag = false;
    }

    if($("#depositAmt").length > 0){
    	if(Number(uncomma($("#depositAmt").val())) > 0) chkFlag = false;
    }

    if($("#naverMile").length > 0){
    	if(Number(uncomma($("#naverMile").val())) > 0) chkFlag = false;
    }

    if($("#epointAmt").length > 0){
    	if(Number(uncomma($("#epointAmt").val())) > 0) chkFlag = false;
    }

    if($("#cyberAmt").length > 0){
    	if(Number(uncomma($("#cyberAmt").val())) > 0) chkFlag = false;
    }

    if($("#SKPlanetAmt").length > 0){
    	if(Number(uncomma($("#SKPlanetAmt").val())) > 0) chkFlag = false;
    }

    if($("#MediCCAmt").length > 0){
    	if(Number(uncomma($("#MediCCAmt").val())) > 0) chkFlag = false;
    }

    if($("#ordEtbsAmt").length > 0){
    	if(Number(uncomma($("#ordEtbsAmt").val())) > 0) chkFlag = false;
    }

    return chkFlag;
}

function nextValid(){
	cardSaveCheckFlag = true;
	btnChk = true;
	valid();
}

function pCardSave(url) {
	$.ajax(url, {
		type : "post",
		dataType : "html",
		success : function(data) {
			$(".layer_claim .goods").html(data);	
			$('.layer_claim').show();
			$('.layer_claim').find('.popup_wrap').css('top', $(window).scrollTop() + "px");
	    },
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

function hideLayerClaim() {
	$('.layer_claim').hide();
}

function delivCopy() {
	var $this = $(event.target);
	if($this.is(":checked")) {
		
		$("#receiver2_name").val($("#ord_user_name").val());
		
		$(".test21 ").text($("#ord_real_tel1").val());
		$("#receiver2_tel1").val($("#ord_real_tel1").val());
		$("#receiver2_tel2").val($("#ord_real_tel2").val());
		$("#receiver2_tel3").val($("#ord_real_tel3").val());
		
		$(".test22 ").text($("#ord_user_hand_tel1").val());
		$("#receiver2_hand_tel1").val($("#ord_user_hand_tel1").val());
		$("#receiver2_hand_tel2").val($("#ord_user_hand_tel2").val());
		$("#receiver2_hand_tel3").val($("#ord_user_hand_tel3").val());
	} else {
		
		$("#receiver2_name").val("");
		
		$(".test21 ").text("02");
		$("#receiver2_tel1").val("02");
		$("#receiver2_tel2").val("");
		$("#receiver2_tel3").val("");
		
		$(".test22 ").text("010");
		$("#receiver2_hand_tel1").val("010");
		$("#receiver2_hand_tel2").val("");
		$("#receiver2_hand_tel3").val("");
	};
}

//신용카드 변경
function cardSaveCheck(){
	cardSaveCheckFlag = false;
	var val = $("#card_id").val();

	if (val!=""){
		
		if(val == 15 && $('#card_id option:selected').text() == "우리카드") {
			document.orderFrm.pay_use_card_id.value = 17;
		} else {
			document.orderFrm.pay_use_card_id.value = val;
		}
		
		$.each(cardVanSet, function(index) {
			var info = cardVanSet[index];
			if (info[0] == val){
				//카드 입점사 세팅
				document.orderFrm.card_comp_id.value = info[4];

				if (info[1]==""){
					$("#pay_type_card_gb").val("A");
				}else if (info[1].indexOf( "ISP", 0 ) >= 0){
					$("#pay_type_card_gb").val("I");
					if (val == 15) //BC카드
						document.orderFrm.KVP_CARDCOMPANY.value = "0100";
					else if (val == 16) //KB국민카드
						document.orderFrm.KVP_CARDCOMPANY.value = "0204";
					else if (val == 26) //카카오뱅크
						document.orderFrm.KVP_CARDCOMPANY.value = "0204";
					else if (val == 17) //우리
						document.orderFrm.KVP_CARDCOMPANY.value = "0170";
					else if (val == 10) //수협
						document.orderFrm.KVP_CARDCOMPANY.value = "1800";
					else if (val == 9) //전북
						document.orderFrm.KVP_CARDCOMPANY.value = "1600";
					else if (val == 27) //케이뱅크
						document.orderFrm.KVP_CARDCOMPANY.value = "0100";
					else
						document.orderFrm.KVP_CARDCOMPANY.value = "";
					
					if (val == 16)  //KB국민카드
						document.orderFrm.VP_BC_ISSUERCODE.value = "KBC";
					else if (val == 26)  //카카오뱅크
						document.orderFrm.VP_BC_ISSUERCODE.value = "KA";
					else if (val == 27)  //케이뱅크
						document.orderFrm.VP_BC_ISSUERCODE.value = "96";
					//else if (val == 24) { //KB체크카드
					//	document.orderFrm.VP_BC_ISSUERCODE.value = "HS";
					//	document.orderFrm.KVP_CARDCOMPANY.value = "0204";
					//} 
					else
						document.orderFrm.VP_BC_ISSUERCODE.value = "";

				}else if (info[1].indexOf( "ANSIM", 0 ) >= 0){
					$("#pay_type_card_gb").val("A");
				}else{
					$("#pay_type_card_gb").val("D");
				}

				$("#pay_card_no").val(info[1].substring( info[1].indexOf( "|", 0 ) + 1 ));
				$("#pay_type_card_data").val(info[1]);
			} 
		});

		$("#ca1").prop("checked", true);
		setInstallmentMonth(1); //일시불,할부 체크
		setReverseMargin();		//역마진 계산
		
		if(uncomma($("#payPrice1").val()) > 0 && $("#culDeductionYn").val() != "Y") {
		
			$(".card_txt.rate_y,.card_txt.rate_n").hide();
			$.ajax("/order/cardSaveCheckAjax.do", {
				data : $("#orderFrm").serialize(),
				dataType: "json",
				type : "post",
				loading : false,
				success : function(json) {
					
					if(json.resultCode == "0001") {
						
						alert(json.resultMsg);
						return false;
					} else if(json.resultCode == "0000") {
						
						if(json.type == "1") {
							
							var promotion = json.promotion;
							
							if(promotion != undefined && promotion.promotion_id != 108391){ //적립금 페이백(108391) 프로모션이면 비노출
								$(".card_txt.rate_y strong").html(promotion.card_comp_name + " " + 
										  promotion.charge_dc_rate + "%청구할인 예상가 : ")
									.append($("<i>").text(comma(json.cardPrice) + "원"));
								$(".card_txt.rate_y").show();
							}
							
						} else if(json.type == "9") {
							 
							$(".layer_claim .goods").remove();
							$(json.exGoodsList).each(function() {
								var $dl = $('<dl class="goods">');
								var $dt = $('<dt>').text(this.goods_name).appendTo($dl);
								var $dd = $('<dd>').appendTo($dl); 
								
								var $img = $("<img>", {"src" : getImagePath(170, this.goods_id, "IMG_DETAIL"),
													   "alt" : this.goods_name,
													   "onerror" : "noImage(this, '');"}).appendTo($dd);
								var $opt = $('<div class="options">').appendTo($dd);
								var $price = $('<span "class=price">').html(comma(this.final_price) + "<i>원</i>").appendTo($opt);
										
								$(".layer_claim .claim").after($dl);
							});
							
							$(".card_txt.rate_n strong").html(json.promotion.mall_front_disp_phrase);
							$(".card_txt.rate_n").show();
						}
					}
				},
				error : function(x, o, e){ 
					//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); 
				},
			});
		}
	} else {
		
		$(".card_txt.rate_y,.card_txt.rate_n").hide();
	}

	//카드포인트
	setPointSave(val);
};//신용카드 변경 end

//환불계좌
//환불계좌 수정버튼 클릭
function refundAcctModify(){
	if(!payTypePMCheck.check('3R')) return;
	if(confirm("환불 계좌정보를 수정하시겠습니까?")){
		$("#refundAcctInfoInptDiv").show();
		$("#refundAcctInfoViewDiv").hide();
		$("#bankName").text($("#refund_bank_code option:selected").text());
	}
}

//환불계좌 수정모드에서 빈값이면 origin정보 세팅
function refundAcctAutoSet(){
	if("" != $.trim($("#origin_refund_acct_no").val()) && "" == $.trim($("#refund_acct_no").val())){
		$("#refund_acct_no").val($("#origin_refund_acct_no").val());
		$("#refund_bank_code").val($("#origin_refund_bank_code").val());
	}
}

//환불계좌 저장
var refundCheck = true;
function saveRefundAcct(){
	if(!payTypePMCheck.check('3R')) return;
if(refundCheck) {
		refundCheck = false;
		$("#refund_acct_no").val($.trim($("#refund_acct_no").val()));
	if($("#refund_bank_code").val() == "" || $("#refund_bank_code").val() == "0"){
		alert("환불 계좌 은행 선택은 필수입니다.");
		refundCheck = true;
		return;
	} else if($("#refund_acct_no").val() == ""){
		alert("환불 계좌번호 항목은 필수 입력입니다.");
		refundCheck = true;
		return;
	}
	if(($("#origin_refund_bank_code").val() != $("#refund_bank_code").val())
			|| ($("#origin_refund_acct_no").val() != $("#refund_acct_no").val())
	){
		//$('#mask_w').show();
		//setTimeout(function cb(){
		
	
			var bcodeArr = $("#refund_bank_code").val().split("@");

			var kbnet_bank_code = bcodeArr[1];
			var refund_acct_no = $("#refund_acct_no").val();
			$(".layer_loding_wrap").show();
			$.ajax({
				type : "post",
				url : "/order/OrderRefundAcctProc.do",
				async : false,
				dataType :'json',
				data : {
					"kbnet_bank_code" : kbnet_bank_code,
					"refund_acct_no"  : refund_acct_no
				},
				success : function(data){


					if (data.chkYn == "Y"){
						$("#origin_refund_bank_code").val($("#refund_bank_code").val());
						$("#origin_refund_acct_no").val($("#refund_acct_no").val());
						$("#refundAcctInfoViewBankName").text($("#refund_bank_code option:selected").text());
						$("#refundAcctInfoViewName").text(data.refund_acct_owner_name);
						$("#refundAcctInfoViewNo").text(refund_acct_no);
						$("#refundAcctInfoInptDiv").hide();
						$("#refundAcctInfoViewDiv").show();

						alert("고객님의 환불 계좌 정보가 아래와 같이 저장되었습니다.\n" +
								"\n은행명 : " + $("#refund_bank_code option:selected").text() +
								"\n계좌번호 : " + refund_acct_no +
								"\n예금주 : " + data.refund_acct_owner_name);
					} else {
						//if ("0000" == data.respCode){
							alert("환불 계좌의 정보가 올바르지 않아 인증에 실패하였습니다.");
						//} else {
						//	alert($.trim(data.errMsg));
						//}
					}
					refundCheck = true;
				},
				error : function(x, o, e){
					alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
					$(".layer_loding_wrap").hide();
					refundCheck = true;
				}
			});
			$(".layer_loding_wrap").hide();
			//$('#mask_w').hide();
		//}, 1000);

	} else {
		alert("변경된 내용이 없습니다.");
		refundCheck = true;
	}
}
}
//환불계좌 end

function fn_leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (i = 0; i < digits - n.length; i++)
            zero += '0';
    }
    return zero + n;
}

//본인인증 iframe
var ordPersonFlag = true;
function pOrdPersonCheck(certGb){
	if(ordPersonFlag) {
		ordPersonFlag = false; 	
		
		$.ajax("/order/pOrdPersonCheck.do?certGb=" + certGb, {
			dataType : "html",
			type : "post",
			success : function(data) {
				
				var $this = jQuery(this);
		        var $layer = 'layer_person_wrap'; 

                var h1 = $(window).scrollTop();

                $('.'+$layer).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
                $('.'+$layer).attr('data-height',h1)
                $('.'+$layer+' .person_wrap').html(data).css({'margin-top': '46px'});
                
                ordPersonFlag = true;
                
                //e.preventDefault();
				 
				/*
				$("#layer").empty().append(data); 
				ordPersonFlag = true;
				
				$("#layer").html(data);

				var winH = $(window).height();
				var winW = $(window).width();
				var winS = $(window).scrollTop();

				$("#layer").css({'top' : '0',
								 'left': '0',
								 'height' : $(document).height()});
				$("#layer").show();
				
				// 레이어팝업 컨텐츠 height fix, auto scroll
				$("#layer").show();
				$("#layer .layerarea01").css({"position" : "fixed",
											  "top": "55%", 
											  "margin-top" : "-" + ($("#layer .layerarea01").height() / 2) + "px"});

				$('#layer .btn_close').click(function(e) {
					e.preventDefault();
					$('#layer').hide();	
				});
				
				*/
			},
			error : function(x, o, e){ 
				//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
				ordPersonFlag = true;
			}
		}) 	
	}
}

function closeOrdPersonCheckLayer() {
//	$('#layer').hide();
    $('.layer_person_wrap').hide().removeClass('active');
}

function nextOrder(){

	self.name = "orderForm";
	var frm = document.orderFrm;

	//<%-- 인증완료후에 다시 주문처리value() 로 이동 --%>
	var ord_person_chk = "";
	if (frm.certGb.value == "drink") {
		ord_person_chk = frm.ord_person_chk_drink.value;
	} else {
		ord_person_chk = frm.ord_person_chk.value;
	}

	if (ord_person_chk == "0000") {
		if (confirm("본인인증이 완료되었습니다. \n결제를 계속 진행하시겠습니까?")) {
			valid();
		}
		return;
	}
}

function savePersIndex(msgType) {

	var persIndex 		 = $.trim($("#persIndex").val());
	var origin_persIndex = $.trim($("#origin_persIndex").val());

	if (persIndex == "" || persIndex.length < 13) {
		alert("개인통관고유부호(13자리)를 입력해주세요.");
		$("#persIndex").focus();
		return false;
	}

	if (origin_persIndex != "" && persIndex == origin_persIndex) {
		alert("변경된 내용이 없습니다.");
		return false;
	}

	var msgTxt = "입력한 개인통관고유부호를 회원정보 저장에 동의하시겠습니까?";	// 신규저장
	if (msgType == "edit")	// 수정저장
		msgTxt = "개인통관고유부호의 정보가 변경되었습니다.\n회원정보 저장에 동의하시겠습니까?";

	if(confirm(msgTxt)){
		$.ajax({
			type : "post",
			url : "/order/persIndexProc.do",
			dataType :'json',
			async : false,
			data : {
				"persIndex" : persIndex
			},
			success : function(result){
				if($.trim(result) == "true"){
					$("#origin_persIndex").val(persIndex);
					alert("입력한 개인통관고유부호가 정상적으로 저장되었습니다.");
				} else {
					alert("개인통관고유부호 저장시 오류가 발생되었습니다.");
				}
			},
			error : function(x, o, e){ alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); }
		});
	}

	return true;

}

var akpayToggle = true;
var _temp_header;
function open_ak_pay(url) {

    // localhost 로 테스트 시 크로스 도메인 문제로 발생하는 오류
    //$.support.cors = true;
	
	if(akpayToggle) {
		akpayToggle = false;
		$.ajax({
			type: "POST",
			url: url,
			//contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			dataType:"html",
			success:function(result){
				close_akpay();
//				$("#resultDiv").html(result);
				
//				var sendurl = $("#resultDiv").find("#SENDURL").val();
				
				var h = $(window).height() - 90; //(디바이스 높이) - (헤더영역 높이 + 마진값)
				
				$(".container").hide();
				
				_temp_header = $('header a').attr('onclick');
				$('header a').attr('onclick','close_akpay()');
				$("header").after().append(result);
				var sendurl = $("#akpayForm").find("#SENDURL").val();
				
				doAkpay(sendurl);
				
				akpayToggle = true;
			},
			error: function(request,status,error) {
//				alert("code:"+request.status+"\n");
				akpayToggle = true;
				return false;
			}
		});
	}
}

//AKPAY 결제 레이어 팝업 닫기
function close_akpay(){
	if($(".container").css("display") == "none" ) {
		$('header a').attr('onclick',_temp_header);
		$(".container").show();
		_temp_header = null; 
	}
	$("#comon_akpay_order_wrap").remove();
}
function doAkpay(act)
{ 	
	var isAkApp = $("#isAkApp").val();
	if((isAkApp == "" || isAkApp == "N") && navigator.userAgent.search("iPhone") > -1) {
		
		var akpayPOP = window.open('','akpayPOP', null);
		var frm = document.akpayForm;
		
		if (akpayPOP == null || typeof(akpayPOP) == "undefined")
		{
			if(navigator.userAgent.indexOf("KAKAO") > -1) {
			}else {
				alert("팝업 차단 기능이 설정되어있습니다\n\n차단 기능을 해제(팝업허용) 한 후 다시 이용해 주십시오. (설정 - safari - 팝업 차단 해제)");
				close_akpay();
				return;
			}
		}
		frm.action =  act;
		frm.target = 'akpayPOP';
		frm.method = 'POST';     
		frm.submit();
		
	}else {
		
		var h = $(window).height() - 90; //(디바이스 높이) - (헤더영역 높이 + 마진값)
		var frm = document.akpayForm;
		$(window).scrollTop(0);
		$("#comon_akpay_order_wrap .hpo_cont_wrap").scrollTop(0);
		$("#AKPAY_FRAME").scrollTop(0);
		$("#AKPAY_FRAME").height(h-5);
		
		frm.action =  act;
		frm.target = 'AKPAY_FRAME';
		frm.method = 'POST';     
		frm.submit();
	}
}
function toggleAkPay(v){
	$("#paytype17 .holder_info").hide();
	$("#paytype17 .holder_info").eq(v).show();
}
function orderisAkApp(){
	return $("#isAkApp").val();
}
function animateAkPay () {
	setTimeout(function() {
		var offset = $("#paytype17").offset();
		$('html, body').animate({scrollTop : offset.top}, 400);
	}, 1000);
}

//결제수단 프로모션 광고 문구
function setPayPromotion(payType) {
	var pay_id = payType;
	var pay_dtl = "";
	if(payType == "1S") {
		pay_id = "1";
		pay_dtl = "S";
	}
	if(!$("#paytype"+payType+" .payPromotion").hasClass("active")) {
		$.ajax("/order/SetPayPromotionAjax.do", {
			data : {"pay_id" : pay_id, "pay_dtl" : pay_dtl},
			dataType : "html",
			type : "post",
			loading :false,
			success : function(html) {
				$("#paytype"+payType+" .payPromotion").html(html);
				$("#paytype"+payType+" .payPromotion").addClass("active");
			},
			error : function(x, o, e){ 
			}
		});
	}
}
