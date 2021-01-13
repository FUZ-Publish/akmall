var recomFlag = true;
var pwDealFlag = false;//파워딜 플래그 
if($("#pwDealFlag").length > 0) {
	pwDealFlag = true;//파워딜 플래그
}
function doRecom(obj, goodsCommentId, goodsId){
	event.preventDefault();  
	event.stopPropagation();
	if(recomFlag){
		recomFlag = false;
		$.ajax({
			type : "post",
			url : "/goods/GoodsCommentRecomAjax.do",
			data : {"goods_comment_id" : goodsCommentId , "goods_id" : goodsId },
			dataType : "json",
			success : function(data) {
				if(data.resultCode=="0000"){
					var cnt = obj.prev().text().replace('추천','');
					cnt = parseInt(cnt)+1;
					obj.prev().text('추천'+ cnt);
					obj.addClass("on");
				}else if(data.resultCode == "9001"){
					location.href = data.url;
					return false;
				}
				alert(data.resultMsg);
				
				
			},
			error : function(x, o, e) {
				//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
			},
			complete : function(data){
				recomFlag = true;
			}
		});
	}
}

//상품상세 옵션 검색
function searchOption(obj) {
	
	var keyword = $.trim($(obj).val());
	var $parent = $(obj).parents(".opt_sel_box");
	
	if (keyword.length > 0) {
		 
		$parent.find('.sel_op button').each(function(index,item){
			var keyIndex = $(item).find("strong").text().toLowerCase().indexOf(keyword.toLowerCase());
			if(keyIndex < 0) {
				$(item).hide();
			} else {
				$(item).show();
			}
		});
	} else {
		$parent.find('.sel_op button').show();
	}
}

//추가구성 상품 옵션 검색
function addSearchOption(obj) {
	 
	var keyword = $.trim($(obj).val());
	var $parent = $(obj).parents(".add_box");
	
	if (keyword.length > 0) {
		 
		$parent.find('.add_op button').each(function(index,item){
			var keyIndex = $(item).find("strong").text().toLowerCase().indexOf(keyword.toLowerCase());
			if(keyIndex < 0) {
				$(item).hide();
			} else {
				$(item).show();
			}
		});
	} else {
		$parent.find('.add_op button').show();
	}
}
//
//function disCount(){
//	var saleVal = parseInt(uncomma($("#saleValue").text()));
//	var rate = parseFloat(uncomma($("#catCouponList").val()))*0.01;
//	var disCountVal =0;
//	if(rate > 0.0){
//		disCountVal = saleVal * rate;
//	}
//	$("#discountCoupon").text(uncomma(disCountVal));
//	resetFinalVal();
//	
//};
//
//function resetFinalVal(){
//	var nowDcVal = parseInt(uncomma($("#nowDcValue").text()));
//	var discountCoupon = parseInt(uncomma($("#discountCoupon").text()));
//	var delivValue = parseInt(uncomma($("#delivValue").text()));
//	var savedMoneyDc = parseInt(uncomma($("#savedMoneyDc").text()));
//	var promoNowCardDc = parseInt(uncomma($("#promoNowCardDc").text()));
//	var saleValue = parseInt(uncomma($("#saleValue").text()));
//
//	var finalDcValue = nowDcVal+discountCoupon+savedMoneyDc+promoNowCardDc;
//	var finalValue =  Math.abs(finalDcValue) + delivValue;
//	$("#finalValue").text(comma(finalValue));
//	$("#finalDcValue").text(comma(finalDcValue))
//
//}


function setCard(t,obj){
	$(obj).find("input:radio").prop("checked", true);
	$(obj).parent().find("li").removeClass("active");
	$(obj).addClass("active");
	if(t==1){
		$(".flower1").show();
		$(".flower2").hide();
	}
	else if(t==2){
		$(".flower2").show();
		$(".flower1").hide();
	}
	else if(t==3){
		$(".flower1").hide();
		$(".flower2").hide();
	}
}

function quickBuy_close(){
	$(".Quick_box_open").hide();
	$(".Quick_box_Btn").show();
}
function show_Quick(){
	$(".Quick_box_open").show();
	$(".Quick_box_open").addClass('on');
	$(".Quick_box_open").css('position', 'fixed');
	$(".Quick_box_Btn").hide();
	$(".quick_top_box").show();
	$(".commentm").hide();
	$("#optionAdd").css('overflow-y','auto');
    $("#optionAdd").css('max-height','150px');
}

function createOption(id, data, parent, dept) {
	$("#" + id).append("<option value=\"\" selected=\"selected\">선택하세요</option>");

	var lastid = 0;
	if (option1.length > 0)
		lastid = "hidSelect1";
	if (option2.length > 0)
		lastid = "hidSelect2";
	if (option3.length > 0)
		lastid = "hidSelect3";
	if (option4.length > 0)
		lastid = "hidSelect4";
	if (option5.length > 0)
		lastid = "hidSelect5";
	
	//개발용
	$(".opt_type2").find('li:gt(' + (dept - 1) + ')').each(function() {
		$(this).find("button").text($(this).find("button").attr("data-optionname"));	
	});
	
	$("#select" + (dept + 1)).find("button").removeClass("end");
	$("#select" + (dept + 1)).find(".scroller").empty();
	//개발용
	
	var idx = 0;
	$.each(data, function(index) {
		var optionInfo = data[index];
		if (optionInfo[0] == parent) {

			var val = optionInfo[1];
			var stockComment = "";
			var addPriceComment = "";
			var endClass="";
			
			if (Number(optionInfo[3]) == 0 && lastid == id) {
				stockComment = "[품절]";
				val = "";
				endClass = "end";
			}

			if (Number(optionInfo[5]) != "") {

				var str = "";
				var tmpPrice = optionInfo[5];
				if (tmpPrice > 0)
					str = "+" + comma(tmpPrice) + "원";
				else
					str = comma(tmpPrice) + "원";

				addPriceComment = "(" + str + ")";
			}

			$("#" + id).append("<option value='" + val + "' >" + optionInfo[2] + stockComment + addPriceComment + "</option>");
			
			//개발용
			var btnTxt = '<button type="button" data-code="' + val + '" class="' + endClass + '"><strong>' + optionInfo[2] + stockComment + addPriceComment + '</strong></button>';
			$("#select" + (dept + 1)).find(".scroller").append(btnTxt);
			//개발용
		}
	});
	
}

function addOptionMulti(name) {
	var addflag = true;
	var selectMulti = $("#" + name + "hidSelectMulti").val();
	var unit_seq = $("#frmDetail input[name='unit_seq[]']");
	var arr;
	var in_unit_seq = "";
	var in_unit_text = "";
	var in_add_price = 0;
	var text = "";
	// 빈값이 아닐떄만(빈값 :품절)
	if (selectMulti != "") {

		arr = selectMulti.split("@");
		in_unit_seq = arr[0];
		in_unit_text = arr[1];
		in_add_price = arr[2];

		// 추가된 옵션에 같은 항목이 있는지 확인
		if (unit_seq.length > 0) {
			
			// 휴대폰 가입신청서 작성 상품 체크
			if(typeof(mobileAgreeGoodsYN) == 'string' && mobileAgreeGoodsYN == "Y") {
				$(".op_box .del").click();
			} else {
				for ( var i = 0; i < unit_seq.length; i++) {
					if (unit_seq[i].value == in_unit_seq){
						addflag = false;
						
						// 셀렉트버튼 초기화
						text = $("#" + name + "hidSelectMulti").attr("data-optionname");
						$("#" + name + "hidSelectMulti").find("option").eq(0).prop("selected", true);
						$(".drop_box #selectMulti").find('li').eq(0).children().text(text);
						alert("이미 선택한 옵션입니다.");
						break;
					}
				}
			}
		}

		if(!textOptionByEmptyOption(1)) {
			addflag = false;
			return false;
		}
		
		if (addflag) {
			var price = goodsPrice;
			if (Number(in_add_price) != "")
				price = Number(price) + Number(in_add_price);

			in_unit_text += $("#optionAdd").html();
			// 옵션화면추가
// 				addOptionByHtml(in_unit_text, in_unit_seq, price);
			optionSelect.optBox(in_unit_text, in_unit_seq, price);
			
			// 셀렉트버튼 초기화
			text = $("#" + name + "hidSelectMulti").attr("data-optionname");
			$("#" + name + "hidSelectMulti").find("option").eq(0).prop("selected", true);
			$(".drop_box #selectMulti").find('li').eq(0).children().text(text);
		}


	}
}

function addOption(data, depth, name) {
	var addflag = true;
	var unit_seq = $("#frmDetail input[name='unit_seq[]']");

	$(".drop_box #dispSelect button").removeClass("on");
	$(".drop_box #dispSelect li:eq(0) button").addClass("on");
	
	$.each(data, function(index) { 
		var optionInfo = data[index];
		var flag = false;
		if (depth > 1) {
			var val = $("#" + name + "hidSelect" + (depth - 1)).val();
			if (val == optionInfo[0]) {
				flag = true;
			}
		} else {
			flag = true;
		}
		
		var optText = "";
//		if (flag && optionInfo[1] == $("#" + name + "hidSelect" + depth).val() && $("#" + name + "hidSelect" + depth).val() != "" && Number(optionInfo[3]) > 0) {
		if (flag && optionInfo[1] == $("#" + name + "hidSelect" + depth).val() && $("#" + name + "hidSelect" + depth).val() != "") { // Number(optionInfo[3] 구매가능수량, 부족해도 진행하도록 변경
			// 추가된 옵션에 같은 항목이 있는지 확인
			if (unit_seq.length > 0) {
				
				// 휴대폰 가입신청서 작성 상품 체크
				if(typeof(mobileAgreeGoodsYN) == 'string' && mobileAgreeGoodsYN == "Y") {
					$(".op_box .del").click();
				} else {
				
					for ( var i = 0; i < unit_seq.length; i++) {
						if (unit_seq[i].value == optionInfo[4]){
							
							//chk_cnt 확인필요
	//						if (chk_cnt == document.getElementsByName(name + "item_value[]").length){
							addflag = false;
							
							// 셀렉트버튼 초기화
							for ( var i = 1; i <= depth; i++) {
								text = $("#" + name + "hidSelect" + i).attr("data-optionname")
								$("#" + name + "hidSelect" + i).find("option").eq(0).prop("selected", true);
								$(".drop_box #dispSelect ").find('li').eq(i-1).children().text(text);
							}
							alert("이미 선택한 옵션입니다.");
							break;
	//						}
							
						}
					}
				}
			}
			
			if(!textOptionByEmptyOption(1)) {
				addflag = false;
				return false;
			}
			
			if (addflag) {
				var text = "";
				for ( var i = 1; i <= depth; i++) {
					if (text != "")
						text += "/";
					text += $("#" + name + "hidSelect" + i + " option:selected").text();
				}
				
				text += $("#optionAdd").html();
				
				var price = goodsPrice;
				if (Number(optionInfo[5]) != "")
					price = Number(price) + Number(optionInfo[5]);

				// 옵션화면추가
				optionSelect.optBox(text, optionInfo[4], price);

				// 셀렉트버튼 초기화
				for ( var i = 1; i <= depth; i++) {
					text = $("#" + name + "hidSelect" + i).attr("data-optionname")
					$("#" + name + "hidSelect" + i).find("option").eq(0).prop("selected", true);
					$(".drop_box #dispSelect ").find('li').eq(i-1).children().text(text);
				}
				
				return false;
			}
		}
	}); 

}


function premiumChangeOder(val){
	$("#srchOrderDirection").val(1)
	$("#srchOrderKey").val(val);
	goPageMoveMobile(1);
}
function normalChangeOder(val){
	$("#srchOrderDirection").val(1)
	$("#srchOrderKey").val(val);
	goPageMoveMobile2(1);
}
function pSrchOrderDirectionToggle(){
	var val = $("#srchOrderDirection").val();
	if(val == 1) {
		$("#srchOrderDirection").val(2)
	}else {
		$("#srchOrderDirection").val(1)
	}
	goPageMoveMobile(1);
}
function nSrchOrderDirectionToggle(){
	var val = $("#srchOrderDirection").val();
	if(val == 1) {
		$("#srchOrderDirection").val(2)
	}else {
		$("#srchOrderDirection").val(1)
	}
	goPageMoveMobile2(1);
}
function goPageMoveMobileImage(page) {
	$("#imgFrmNavi input[name='pageIdx']").val(page);
	
	$.ajax({
		type : "post",
		url : "/goods/premiumCommentPictureAjax.do",
		data : $("#imgFrmNavi").serialize(),
		dataType :'html',
		success : function(html){
			
			$("#imgFrmNavi #nowPage").val(page);
			$("#imgFrmNavi #movePage").remove();
//				$(".premium_img").remove();
			
			if(page == 1){
				$("#imgFrmNavi .no_info").remove();
				$("#imgFrmNavi").append(html);
			}else{
				$("#imgFrmNavi .premium_img").append(html);
			}
			
			imagePagingFlag = true;
//			setTimeout(function() {
				checkHight.init();
//			}, 1000);
				$(".premium_img").hide();
				$(".premium_img").show();
				
		},
		error : function(x, o, e){ 
//			alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); 
			imagePagingFlag = true;
		}
	});
}

function goDetailPage(goods_id,goods_comment_id ,seq) {
	$.ajax({
		type : "post",
		url : "/goods/premiumCommentDetailAjax.do",
		data : {"goods_id"  : goods_id ,"goods_comment_id" :goods_comment_id , "seq" : seq},
		dataType :'html',
		success : function(html){
			layerFull.show();
			$(".premium_detail").empty().html(html);
			$(".premium_detail").show();
			$(".premium_img").hide();
			swiperSlide.item('swiper-premium','swiper-page');	
		},
		error : function(x, o, e){ 
			//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e);
		}
	});
}

var  imagePagingFlag = true;	//페이징 Flag
function imgPagingScroll() {
 $(".layer_premium_wrap .popup_wrap").scroll(function() {
	  if(imagePagingFlag) {
		  imagePagingFlag = false;
		   var winH = $(".layer_premium_wrap .popup_wrap").height();   //window 높이 
		   var docH = 0; //document 높이
		   $(".premium_img").each(function(){
			   docH +=  $(this).height();
		   })
		   
		   var distance = (docH - winH) * 0.8;
		   
	   	   var winTop = $(".layer_premium_wrap .popup_wrap").scrollTop();
	   
	   	   if(winTop > distance) {
		   		if($("#imgFrmNavi #movePage").val() > $("#imgFrmNavi #nowPage").val()) {
		   			goPageMoveMobileImage($("#imgFrmNavi #movePage").val());		   
		   		
				}
	   	   } else {
	   		imagePagingFlag = true;
	   	   }
	   } 
	 });
}

//계산 함수
function calculateGoods() {
	if(pwDealFlag) {//파워딜 경우
		
		
		var totalPrice  = 0;
		var cnt 		= $("#frmDetail input[name='cnt[]']");
		var good_price 	= $("#frmDetail input[name='good_price[]']");

		for ( var i = 0; i < good_price.length; i++) {
			totalPrice = totalPrice + (Number(good_price[i].value) * Number(cnt[i].value));
			$(good_price[i]).parent().find(".goos_price").text(comma((Number(good_price[i].value) * Number(cnt[i].value))));
		} 
		$("#totalPrice").html(comma(totalPrice));
		
	} else {//일반상세
		
		var totalPrice = 0;
		var cnt = $("#frmDetail input[name='cnt[]']");
		var unit_seq = $("#frmDetail input[name='unit_seq[]']");
		var addCompItem = $("#frmDetail input[name='addCompItem[]']");

		if (unit_seq.length > 0) {
			var arr;

			if (option5.length > 0)
				arr = option5;
			else if (option4.length > 0)
				arr = option4;
			else if (option3.length > 0)
				arr = option3;
			else if (option2.length > 0)
				arr = option2;
			else if (option1.length > 0)
				arr = option1;

			for ( var i = 0; i < unit_seq.length; i++) {
				var c = cnt[i];
				var seq = unit_seq[i];

				if (arr.length > 0) {
					$.each(arr, function(index) {
						var optionInfo = arr[index];
						var price = 0;
						if (optionInfo[4] == seq.value) {
							price = (Number(goodsPrice) * Number(c.value)) + Number(optionInfo[5]);
							totalPrice = Number(totalPrice) + Number(price);
						}
					});
				} else {
					// 옵션없을때
					price = (Number(goodsPrice) * Number(c.value));
					totalPrice = Number(totalPrice) + Number(price);
				}
			}

			// 추가구성상품
			for ( var i = 0; i < addCompItem.length; i++) {
				var item = addCompItem[i];
				if (item.value != "") {
					var itemArr = item.value.split("@");
					var price = itemArr[2];
					totalPrice = Number(totalPrice) + Number(price);
				}
			}
		}

		$("#totalPrice").html(comma(totalPrice));
	}

}

//바로구매하기 - 파워딜
function buyDirectDeal(url) {
	var goods_id = $("#frmDetail input[name='goods_id[]']")
	var unit_seq = $("#frmDetail input[name='unit_seq[]']");

	if (goods_id.length == 0) {
		alert("상품을 선택해 주세요.");
		return;
	}

	if (unit_seq.length == 0) {
		alert("옵션을 선택해 주세요.");
		return;
	}

	var noMem = "";
	// 로그인하지 않고 비회원 구매제한 상품이 아닐경우 비회원 구매버튼 활성화
	if ($("#hasLogin").val() == 'N') {
		self.name = "PowerDealDetail";
		if ($("#nonmemLimitYn").val() == 'N')
			noMem = "&no_member_ord=Y";

		var goUrl = "";
		if (url)
			goUrl = "&goUrl=" + url;

		var form = document.frmDetail;
		form.action = fullSSLUrl + "/login/Login.do?source=goodsDetail" + noMem + goUrl;
		form.target = "_self";
		form.cart_type.value = "03";
		form.submit();
		return false;
	}
	
	if(typeof(wiseLogging) == "function") {
		wiseLogging(2);
	}
	
	var form = document.frmDetail;
	form.action = fullUrl + "/order/ShoppingCart.do";
	form.target = "_self";
	form.cart_type.value = "03";
	form.submit();
}

//장바구니 담기 - 파워딜
function goBasket() {	
	var unit_seq = $("#frmDetail input[name='unit_seq[]']");
	if (unit_seq.length == 0) {
		alert("옵션을 선택해 주세요.");
		return;
	}

	// 비회원 구매제한이고 로그인하지 않았을 경우
	if ($("#hasLogin").val() == 'N' && $("#nonmemLimitYn").val() == 'Y') {
		self.name = "OrderDetail";

		var goUrl = "";
		if (url)
			goUrl = "&goUrl=" + url;

		var form = document.frmDetail;
		form.action = fullSSLUrl + "/login/Login.do?source=goodsDetail" + goUrl;
		form.target = "_self";
		form.cart_type.value = "01";
		form.submit();
		return false;
	}
	
	if(typeof(wiseLogging) == "function") {
		wiseLogging(1);
	}
	
	var form = document.frmDetail;
	form.action = fullUrl + "/order/ShoppingCart.do";
	form.target = "hiddenFrm";
	form.submit();
};

//바로담기 - 파워딜
function selGoodsDirectBtn(opt_value) {
	var p;
	$('.deal_opt .sel_op_img button').each(function(index,v){
		if($(v).data('value') == opt_value) {
			p = v;
		}
	})
	var val = $(p).data("value");
	if(val.split('@')[3] != '0'){
		alert('품절된 상품입니다.');
		return;
	}
	
//	$(".btn_open_option").trigger("click");
	$('.btn_open_option').closest('.btn_first').hide();
	$('.btn_buy_soon').show();
	$('.drop_box').addClass("active").show(); 
	$(".drop_box_area").addClass("active");
	$('.layer_opt').addClass("on");
	//개발용
    var src = $(p).find("img").attr("src");
    $(".deal_prod img").attr("src", src); 
    $(".deal_prod .tit").text($(p).find(".tit").text());
    $(".deal_prod strong").html($(p).find("strong").html());
	
	fillSubOption(val, $(p));
	return false;
}

function buyDirect(type, url) {
	var unit_seq = $("#frmDetail input[name='unit_seq[]']");

	if (unit_seq.length == 0) {
		alert("옵션을 선택해 주세요.");
		return;
	}

	// 개수체크
	var cnts = $("#frmDetail input[name='cnt[]']");
	var count = 0;
	for (i = 0; i < cnts.length; i++)
		count += Number(cnts[i].value);
	if (maxCnt == 0 || maxCnt < count) {
		alert("본 상품은 추가 구매가 불가능합니다.");
		return false;
	}

	if (maxCnt < count) {
		alert("개인별 최대 구매수량을 확인해주세요.");
		return false;
	}

	var form = document.frmDetail;
	
	// AK&PICK 여부
	if($("#opt_smart_pick_yn").length > 0 && $("#opt_smart_pick_yn").prop("checked")) {
		var pick_hope_deliv_dt = $("#pick_hope_deliv_dt").val();
		if( typeof(pick_hope_deliv_dt) == "undefined" || pick_hope_deliv_dt == "") {
			alert("AK&Pick 픽업예정일을 선택해 주세요.");
			var sh = $(window).outerHeight() - 80;
	        var st = $(window).scrollTop();
	            
//			openLayer($("#opt_smart_pick_yn"));
		  $('.layer_picksel_wrap').show().addClass('active');
            var ch = $('.layer_picksel_wrap').find('.popup_wrap').outerHeight();

            if(sh > ch){
                var ps = (sh - ch);
                $(".layer_picksel_wrap").find('.popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});

            }else if(sh <= ch){
            	$(".layer_picksel_wrap").find('.popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
            }
			return false;
		}

		var date = new Date();
		var hour = date.getHours();
		var today =  leadingZeros(date.getFullYear(), 4) +
        leadingZeros(date.getMonth() + 1, 2) +
        leadingZeros(date.getDate(), 2);

		if (pick_hope_deliv_dt < today || (pick_hope_deliv_dt == today && hour >= '17')){
			alert("AK&Pick의 픽업예정일이 지났습니다.\n예약정보를 변경해주세요.");
			var h2 = $(window).scrollTop();
	        $(".layer_picksel_wrap").show().find('.popup_wrap').css('top', h2 + "px");
			return false;
		}

		form.smart_pick_yn.value = 'Y';
		form.hope_deliv_date.value = pick_hope_deliv_dt;

	} else if($("#opt_smart_pick_yn").length > 0) {
		
		form.smart_pick_yn.value = 'N';
		form.hope_deliv_date.value = '';
	}

	var noMem = "";
	// 비회원 구매제한이고 로그인하지 않았을 경우
	if ($("#hasLogin").val() == 'N' && $("#nonmemLimitYn").val() == 'Y') {
		self.name = "OrderDetail";
		noMem = "&no_member_ord=N";

		var goUrl = "";
		if (url)
			goUrl = "&goUrl=" + url;

		var form = document.frmDetail;
		form.cart_type.value = "03";
		//ios bug, input value add
		var makeUrl = "";
		$("#frmDetail input").each(function(){
			makeUrl += "&" + $(this).attr("name") + "=" + $(this).val();
		});
		var makeUrlParam = "&makeUrl=" +  encodeURIComponent(makeUrl + noMem + goUrl + "&source=goodsDetail");
		form.action = fullSSLUrl + "/login/Login.do?source=goodsDetail" + makeUrl + noMem + goUrl + makeUrlParam;
		form.target = "_self";
		form.submit();
		return false;
	}


	// 로그인하지 않았을경우
	if ($("#hasLogin").val() == 'N') {
		self.name = "OrderDetail";
		if ($("#nonmemLimitYn").val() == 'N')
			noMem = "&no_member_ord=Y";

		var goUrl = "";
		if (url)
			goUrl = "&goUrl=" + url;

		var form = document.frmDetail;
		var chkQtyLimitCode = "&chkQtyLimitCode=" + $("#chk_qty_limit_code").val();
		var makeUrl = "";
		$("#frmDetail input").each(function(){
			makeUrl += "&" + $(this).attr("name") + "=" + $(this).val();
		});
		
		var makeUrlParam = "&makeUrl=" +  encodeURIComponent(makeUrl + noMem + goUrl + chkQtyLimitCode + "&source=goodsDetail");
		form.action =   fullSSLUrl + "/login/Login.do?source=goodsDetail" + makeUrl + noMem + goUrl + chkQtyLimitCode + makeUrlParam;
		form.target = "_self";
		form.cart_type.value = "03";
		form.submit();
		return false;
	}
	
	if(typeof(wiseLogging) == "function") {
		wiseLogging(2);
	}
	
	form.action = fullUrl + "/order/ShoppingCart.do";
	form.target = "_self";
	form.cart_type.value = "03";
	
	if(optionUseYN) {
		
		$("#optionAdd").html("");
	}
	
	form.submit();
}

function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (i = 0; i < digits - n.length; i++)
            zero += '0';
    } 
    return zero + n;
}


var buyCartChk = true;

function buyCart(type, url) {
	if(!buyCartChk) {
//		alert("결제 진행중입니다. 잠시만 기다려주세요");
		return;
	}
	buyCartChk = false;
	setTimeout(function() {		buyCartChk = true;	}, 3000);
	var unit_seq = $("#frmDetail input[name='unit_seq[]']");

	if (unit_seq.length == 0) {
		alert("옵션을 선택해 주세요.");
		buyCartChk = true;
		return;
	}

	var form = document.frmDetail;

	// AK&PICK 여부
	if($("#opt_smart_pick_yn").length > 0 && $("#opt_smart_pick_yn").prop("checked")) {
		var pick_hope_deliv_dt = $("#pick_hope_deliv_dt").val();
		if( typeof(pick_hope_deliv_dt) == "undefined" || pick_hope_deliv_dt == "") {
			alert("AK&Pick 픽업예정일을 선택해 주세요.");
			openLayer($("#opt_smart_pick_yn"));
			buyCartChk = true;
			return false;
		}

		var date = new Date();
		var hour = date.getHours();
		var today =  leadingZeros(date.getFullYear(), 4) +
        leadingZeros(date.getMonth() + 1, 2) +
        leadingZeros(date.getDate(), 2);

		if (pick_hope_deliv_dt < today || (pick_hope_deliv_dt == today && hour >= '17')){
			alert("AK&Pick의 픽업예정일이 지났습니다.\n예약정보를 변경해주세요.");
			openLayer($("#opt_smart_pick_yn"));
			buyCartChk = true;
			return false;
		}

		form.smart_pick_yn.value = 'Y';
		form.hope_deliv_date.value = pick_hope_deliv_dt;

	} else if($("#opt_smart_pick_yn").length > 0) {
		form.smart_pick_yn.value = 'N';
		form.hope_deliv_date.value = '';
	}

	var cnts = $("#frmDetail input[name='cnt[]']");
	var count = 0;
	for (i = 0; i < cnts.length; i++)
		count += Number(cnts[i].value);
	if(maxCnt < count){
		alert("개인별 최대 구매수량을 확인해주세요.");
		buyCartChk = true;
		return;
	}

	var noMem = "";
	// 비회원 구매제한이고 로그인하지 않았을 경우
	if ($("#hasLogin").val() == 'N' && $("#nonmemLimitYn").val() == 'Y') {
		self.name = "OrderDetail";

		var goUrl = "";
		if (url)
			goUrl = "&goUrl=" + url;

		var form = document.frmDetail;
		form.action = fullSSLUrl + "/login/Login.do?source=goodsDetail" + noMem + goUrl;
		form.target = "_self";
		form.cart_type.value = "01";
		form.submit();
		return false;
	}
	
	if(typeof(wiseLogging) == "function") {
		wiseLogging(1);
	}
	
	//
	try{
		if($("#akpushapp").val() == "Y" && typeof(checkV4App) == "function" && checkV4App()) {
			var goods_name = $("meta[property='og:title']").attr("content").replace("%"," ");
			var goods_id = $("#frmNavi").find("[name='goods_id']").val();
			var goods_price = $("meta[property='product:price:amount']").attr("content");
			var goods_final_price = $("meta[property='product:sale_price:amount']").attr("content") == undefined ? goods_price : goods_final_price = $("meta[property='product:sale_price:amount']").attr("content");
			if($("#noOptionFlag").length > 0) {
				var opt_name = $(".prd_amount span").text();
				var opt_qty = $(".item_input").val();
				var params = "goods_name=" +goods_name +"&goods_id=" +goods_id +"&goods_price=" +goods_price + "&goods_final_price=" + goods_final_price + "&goods_opt_name=" + opt_name + "&goods_opt_qty=" + opt_qty;
				AKWebInterface.web2app('addToCart', encodeURIComponent(params.replace(":"," ")));
			}else {
				$(".op_box.active").each(function(){
					var opt_name = $(this).find(".op_tit").text();
					var opt_qty = $(this).find(".item_input").val();
					var params = "goods_name=" +goods_name +"&goods_id=" +goods_id +"&goods_price=" +goods_price + "&goods_final_price=" + goods_final_price + "&goods_opt_name=" + opt_name + "&goods_opt_qty=" + opt_qty;
					AKWebInterface.web2app('addToCart', encodeURIComponent(params.replace(":"," ")));
				})
			}
		}
	
	//appier script
		if($("#siteCode").val() == "MOB" && typeof(appier_q) == "object") {
			var appier_item_id = $("#frmNavi").find("[name='goods_id']").val();
			var appier_price = $("meta[property='product:sale_price:amount']").attr("content") == undefined ? goods_price : goods_final_price = $("meta[property='product:sale_price:amount']").attr("content");
			var appier_opt_qty = 0;
			if($("#noOptionFlag").length > 0) {
				appier_opt_qty = $(".item_input").val();
			}else {
				$(".op_box.active").each(function(){
					appier_opt_qty = Number(appier_opt_qty) + Number($(this).find(".item_input").val());
				})
			}
			console.log("appier addToCart : " +appier_item_id + "|" +appier_price +"|"+appier_opt_qty);
			var appierRtAddToCart = [{"productID":appier_item_id, "unit":appier_opt_qty, "price":appier_price}]; 
			window.appier_q = window.appier_q || [];
			window.appier_q.push(
			   {"t": "register", content: { id: "GzCZ", site: "akmall.com" }},
			   {"t": "type_addcart", "itemList":appierRtAddToCart}
			);
		}
	}catch (e) {
		console.log(e.message);
	}
	
	form.action = "/order/ShoppingCart.do";
	form.target = "hiddenFrm";
	form.cart_type.value = "01";
	
	if(optionUseYN) {
		
		$("#optionAdd").html("");
	}
	
	form.submit();
}

//수기주문 체크
function textOptCheck(type, $obj) {
	
	if(textOptionByEmptyOption(type)) {
		$obj.parents('.layer_popup').hide();
		optionSelect.showOptBox();
	};
}

function textOptionByEmptyOption(type) {
	var unit_seq = $("#frmDetail input[name='unit_seq[]']");

	var name = "";
	if (type == 2)
		name = "cart_";

	// 추가입력옵션
	var item_name = document.getElementsByName(name + "item_name[]");
	var item_value = document.getElementsByName(name + "item_value[]");
	var item_code = document.getElementsByName(name + "item_code[]");
	
	// 꽃배달처리
	// ========================================================================================================================================[S]
	// 꽃배달 배송 희망일
	var v = $("#" + name + "add_hope_deliv_year").index();
	var add_hope_deliv_date = "";
	if (v > -1){
		add_hope_deliv_date = $("#" + name + "add_hope_deliv_year").val() + $("#" + name + "add_hope_deliv_month").val() + $("#" + name + "add_hope_deliv_day").val();
	}

	if (add_hope_deliv_date != ""){
		item_value[0].value = add_hope_deliv_date;
		
	}

	if($("#joinTel1").length > 0) {
		$("#joinTel").val($("#joinTel1").val() + $("#joinTel2").val() + $("#joinTel3").val());
	}
	
	// 꽃배달 배송 희망일
	var opt_msg = "";
	var v = $("#" + name + "opt_msg01").index();
	if (v > -1) {
		if ($("#" + name + "opt_msg01").prop("checked"))
			opt_msg = "리본메시지";
		if ($("#" + name + "opt_msg02").prop("checked"))
			opt_msg = "카드메시지";
		if ($("#" + name + "opt_msg03").prop("checked"))
			opt_msg = "선택안함";

		item_value[1].value = opt_msg;
		
	}

	// 기타사항
	var opt_etcmsg = "없음";
	var v = $("#" + name + "opt_etcmsg").index();
	if (v > -1) {
		if ($("#" + name + "opt_etcmsg").prop("checked"))
			opt_etcmsg = "익명배송요청";
		item_value[5].value = opt_etcmsg;
	}
	// 꽃배달처리
	// =========================================================================================================================================[E]

	// 희망배송일
	// ******************************************************************************************************************************
	var hv = $("#" + name + "hope_deliv_year").index();
	var hope_deliv_date = "";
	if (hv > -1){
		hope_deliv_date = $("#" + name + "hope_deliv_year").val() + $("#" + name + "hope_deliv_month").val() + $("#" + name + "hope_deliv_day").val();
	}

	if (hope_deliv_date != ""){
		item_value[0].value = hope_deliv_date;
	}
	// ******************************************************************************************************************************

	
	var text = "";
	var unit_cnt = unit_seq.length;
	if(textOptionFlag && !optionUseYN) {
		unit_cnt = 0;
	}
	
	if (item_name.length > 0) {

		for ( var i = 0; i < item_name.length; i++) {
			if ($("#" + name + "opt_msg03").length > 0) {
				if (!$("#" + name + "opt_msg03").prop("checked")) {

					if ($("#" + name + "opt_msg01").prop("checked") && (item_code[i].value == "00104" || item_code[i].value == "00105")) {

						if (item_value[i].value == "") {
							alert(item_name[i].value + "을 입력해 주세요.");
							return false;
						}

						text += "<br />" + item_name[i].value + " : "
								+ item_value[i].value;
						text += "<input type='hidden' name='text_option_name" + unit_cnt + "[]' value='" + item_name[i].value + "'>";
						text += "<input type='hidden' name='text_option_value" + unit_cnt + "[]' value='" + item_value[i].value + "'>";
						text += "<input type='hidden' name='text_option_code" + unit_cnt + "[]' value='" + item_code[i].value + "'>";

					} else if ($("#" + name + "opt_msg02").prop("checked") && item_code[i].value == "00103") {

						if (item_value[i].value == "") {
							alert(item_name[i].value + "을 입력해 주세요.");
							return false;
						}

						text += "<br />" + item_name[i].value + " : "
								+ item_value[i].value;
						text += "<input type='hidden' name='text_option_name" + unit_cnt + "[]' value='" + item_name[i].value + "'>";
						text += "<input type='hidden' name='text_option_value" + unit_cnt + "[]' value='" + item_value[i].value + "'>";
						text += "<input type='hidden' name='text_option_code" + unit_cnt + "[]' value='" + item_code[i].value + "'>";
					} else if (item_code[i].value == "00101" || item_code[i].value == "00106") {
						text += "<br />" + item_name[i].value + " : "
								+ item_value[i].value;
						text += "<input type='hidden' name='text_option_name" + unit_cnt + "[]' value='" + item_name[i].value + "'>";
						text += "<input type='hidden' name='text_option_value" + unit_cnt + "[]' value='" + item_value[i].value + "'>";
						text += "<input type='hidden' name='text_option_code" + unit_cnt + "[]' value='" + item_code[i].value + "'>";
					}
				} else if ($("#" + name + "opt_msg03").prop("checked") && (item_code[i].value == "00101" || item_code[i].value == "00106")) {
					text += "<br />" + item_name[i].value + " : "
							+ item_value[i].value;
					text += "<input type='hidden' name='text_option_name" + unit_cnt + "[]' value='" + item_name[i].value + "'>";
					text += "<input type='hidden' name='text_option_value" + unit_cnt + "[]' value='" + item_value[i].value + "'>";
					text += "<input type='hidden' name='text_option_code" + unit_cnt + "[]' value='" + item_code[i].value + "'>";

				} else if (!$("#" + name + "opt_msg01")) {

					if (item_value[i].value == "") {
						alert(item_name[i].value + "을 입력해 주세요.");
						return false;
					}

					text += "<br />" + item_name[i].value + " : "
							+ item_value[i].value;
					text += "<input type='hidden' name='text_option_name" + unit_cnt + "[]' value='" + item_name[i].value + "'>";
					text += "<input type='hidden' name='text_option_value" + unit_cnt + "[]' value='" + item_value[i].value + "'>";
					text += "<input type='hidden' name='text_option_code" + unit_cnt + "[]' value='" + item_code[i].value + "'>";
				}
			} else {

				if (item_value[i].value == "") {
					alert(item_name[i].value + "을 입력해 주세요.");
					return false;
				}

				text += "<input type='hidden' name='text_option_name" + unit_cnt + "[]' value='" + item_name[i].value + "'>";
				text += "<input type='hidden' name='text_option_value" + unit_cnt + "[]' value='" + item_value[i].value + "'>";
				text += "<input type='hidden' name='text_option_code" + unit_cnt + "[]' value='" + item_code[i].value + "'>";
			}
		}
	}
	
	$("#optionAdd").html(text); 
	return true;
}
 
function chanelOptionChange(unitSeq, text, image,obj) {
	if($(obj).hasClass("end")){
		return false;
	}
	$("#chanel_option_name").val(text);
	if (image != null && image.length > 0) {
		$("#goods_detail").find(" > li.swiper-slide-active > img").hide();
		$(".swiper-slide-active").find(" > img").attr("src", image);
	}

	chanelAddOption(unitSeq, text);
}

function chanelOptionOver(id, image) {
	if (image != null && image.length > 0) {
		$("#goods_detail").find(" > li.swiper-slide-active > img").hide();
		$(".swiper-slide-active").find(" > img").attr("src", image);
	}

	$("#chip1 > li").removeClass("selected");
	$("#chipOption" + id).addClass("selected");

	$("#chip1 > li > div").removeClass("on");
	$("#chipOption" + id + " > div").addClass("on");

}

function chanelOptionOut() {
	$("#chip1 > li").removeClass("selected");
	$("#chip1 > li > div").removeClass("on");
}

function chanelAddOption(unitSeq, text) {

	var unit_seq = $("#frmDetail input[name='unit_seq[]']");
	var data = option1;

	var addflag = true;

	$.each(data, function(index) {
		var optionInfo = data[index];

		if (optionInfo[4] == unitSeq) {
			// 추가된 옵션에 같은 항목이 있는지 확인
			if (unit_seq.length > 0) {
				for ( var i = 0; i < unit_seq.length; i++) {
					if (unit_seq[i].value == unitSeq) {
						addflag = false;
						break;
					}
				}
			}

			if (addflag) {

				var price = goodsPrice;
				if (Number(optionInfo[5]) != "")
					price = Number(price) + Number(optionInfo[5]);

				var optionInfo4 = optionInfo[4];
				var price_msg = price;
				// 옵션화면추가
//				addOptionByHtml(text, optionInfo[4], price);
				optionSelect.optBox(text, optionInfo[4], price);
				return false;
			}
		}
	});

}

//바로구매하기
function buyChanelDirect(type, goUrl) {
	var unit_seq = $("#frmDetail input[name='unit_seq[]']");

	if (unit_seq.length == 0) {
		alert("옵션을 선택해 주세요.");
		return;
	}

	// 개수체크
	var cnts = $("#frmDetail input[name='cnt[]']");
	var count = 0;
	for (i = 0; i < cnts.length; i++)
		count += Number(cnts[i].value);
	if (maxCnt == 0 || maxCnt < count) {
		alert("본 상품은 추가 구매가 불가능합니다.");
		return false;
	}

	if (maxCnt < count) {
		alert("개인별 최대 구매수량을 확인해주세요.");
		return false;
	}

	var form = document.frmDetail;
	
	if (hasLogin == "true") {
		var form = document.frmDetail;
		form.action = "/order/ShoppingCart.do";
		form.target = "_self";
		form.cart_type.value = "03";
		form.submit();
	} else {
		location.href = fullSSLUrl + "/login/Login.do?source=goodsDetail&no_member_ord=Y&goUrl="+ goUrl;
	}
}

function soldoutOptSel(unit_seq) {
	;
	
}

//가입신청 팝업
function pAKmobile(goods_id) {
	
	var mobileAgreeGoodsUnitSeq = "";
	
	var unit_seq = $("#frmDetail input[name='unit_seq[]']");

	if (unit_seq.length == 0) {
		alert("옵션을 선택해 주세요.");
		return;
	}

	if(optionUseYN) {
		mobileAgreeGoodsUnitSeq = unit_seq[0].value;
	}
	
	$.ajax("/goods/pAKmobile.do", {
		data : {"goods_id" : goods_id, "unit_seq": mobileAgreeGoodsUnitSeq},
		type : "post",
		dataType : "html",
		success : function(html) {
//			$(".btn_door").click();
			$(".layer_phone_wrap").html(html);
			
			var h1 = $(window).scrollTop();
			$(".layer_phone_wrap").show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
			$(".layer_phone_wrap").attr('data-height',h1);
            $('body').css('overflow','auto').off('touchmove');
            $(document).off('touchmove scroll');
		},
		error : function(x, o, e) {
//			alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}