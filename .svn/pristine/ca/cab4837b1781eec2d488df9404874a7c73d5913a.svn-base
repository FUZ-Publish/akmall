//네이티브 호출
function nativeCall() {
	if(arguments.length == 0) {
		
		return false;
	}
	
	var k = arguments[0];
	var p = "";
	var siteCode = document.getElementById("siteCode") ? document.getElementById("siteCode").value : "MOB";
	
	if(arguments.length > 1) {
		
		p = arguments[1];
		p = encodeURIComponent(p);
	}
	if(siteCode != "MFDS"){
		window.location = "akmall://" + k + "?" + p;
	}else{
		window.location = "akfamily://" + k + "?" + p;
	}
}

//네이티브 공톡 콜백
function nativeCallBack(json) {
	json = $.base64.decode(json);
	json = decodeURIComponent(json);
	json = JSON.parse(json);
	nativeCall(json.k, JSON.stringify(json.data, replacer));
} 

//json stringify null처리
function replacer(key, val) {
	if(val == null) {
		val = "";
	}
	return val;
}

var beforeDocumentHeight = 0;
function checkHeight(tp, hasLogin, loginUrl) {
	setInterval(function() {
		if(beforeDocumentHeight != $(".wrap").height()) {
			beforeDocumentHeight = $(".wrap").height();	
			nativeCall('checkHeight', JSON.stringify({"tp" : tp, "h" : beforeDocumentHeight, "hasLogin" : hasLogin=="Y" ? "Y" : "N", "loginUrl" : loginUrl}));
		}		
	}, 1000);
}; 

//장바구니 체크
function checkShoopingCartNative(json) {
	
	json = $.base64.decode(json); 
	json = decodeURIComponent(json);
	json = JSON.parse(json);
	
	var goods_id = json.goods_id;
	
	$.ajax({
		type : "post",
		url : "/goods/checkShoppingCartAjax.do",
		data : {
			"goods_id" : goods_id
		},
		dataType : "json",
		success : function(data) {
			if(data.resultCode == '0000'){
				
				if(data.goodsInfo.stockout_yn == 'N'){	
					if(data.goodsInfo.opt_yn == 'Y' || data.goodsInfo.unit_cnt > 1){
						goGoodsDetailNative(goods_id);
					}else{
						goOrderRelatedNative('01', goods_id+"@"+data.goodsInfo.unit_cnt);
					}
				}else{
					alert('품절 상품 입니다.');
				}
				
			}else{
				alert("죄송합니다. 검색하신 상품은 현재 서비스 되지 않고 있습니다.");
				return false;
			}
		},
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

function goOrderRelatedNative(cart_type, id){

	   var frm = document.frmShopCart;
	   
	   var arrInfo = id.split("@");
	   frm.goods_id.value=arrInfo[0];
	   document.getElementById("unit_seq[]").value=arrInfo[1];
	   document.getElementById("cnt[]").value=1;
	   
	   frm.action = "/order/ShoppingCart.do?dummy=I";
	   frm.target = "tmp_frame";		  
	   frm.submit();
}

//상품상세로 이동(옵션이 있는 경우)
function goGoodsDetailNative(goodsId){
	alert("이 상품은 옵션이 있는 상품 입니다.\n상품상세에서 옵션을 선택해주세요.");
	nativeCall('openWebview', JSON.stringify({'tp' : 'Z', 
											  'url' : fullUrl + '/goods/GoodsDetail.do?goods_id=' + goodsId}));
}

/**
 * 쿠키 get
 * @param name
 * @returns
 */ 
function getCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;
	while (x <= document.cookie.length) {
		var y = (x + nameOfCookie.length);
		if (document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0)
			break;
	}
	return "";
} 

/**
 * 숫자 1,000 단위 ',' 추가 
 * 문자열 ''치환
 * 
 */
function comma(num) {
	num = (num+"").replace(/[^0-9]/gi,"");

	var pattern = /(-?[0-9]+)([0-9]{3})/;
	while(pattern.test(num)) {
		num = num.replace(pattern,"$1,$2");
	} 
	if(num.length == 0) num = 0;
	return num;
} 

function uncomma(n) {
	if (n != '') {
		n = (n + "").replace(/,/gi, "");
	}

	return n;
} 
 
function voiceSearch(data) {
	data = $.base64.decode(data);
	data = decodeURIComponent(data);
	if(typeof data  == "string") {
		data.replace(/\+/gi,"");
	}
	if($("#srchWord").length) {
		
		$("#srchWord").val(data).change();
		$(".txt_search").click();
		
	} else if($("#search").length) {
		
		$("#search").val(data).change();
		if($(".btnType01").length) {
			
			$(".btnType01").click();
		}
		
		if($(".btn_find_N").length) {
			$(".btn_find_N").click();
		}
	};
}

var initFlag = "Y";
var filterFlag = true;
function closeSeachItem(key, id, plazaFlag) {
	
	if(filterFlag) {
		filterFlag = false;
		
		if(key == "C") { 
			
			$("#subCtgId_" + id).prop("checked", false);
			var names = [];
			$(eval($("#firstId").val())).each(function(idx, val) {
				
				if(val != id) {
					
					names.push(val);
				}
			});
			
			if(names.length > 0) {
				
				$("#firstId").val(names);
			} else {
				
				$("#firstId").val("");
			}
			
			names = [];
			$(eval($("#secId").val())).each(function(idx, val) {
				
				names.push(val);
			});
			
			if(names.length > 0) {
				
				$("#secId").val(names);
			} else {
				
				$("#secId").val("");
			}
		} else if(key == "B") {
			
			$("#brandList_" + id).prop("checked", false);
			var names = [];
			$(eval($("#secId").val())).each(function(idx, val) {
				
				names.push(val);
			});
			
			if(names.length > 0) {
				
				$("#firstId").val(names);
			} else {
				
				$("#firstId").val("");
			}
			
			names = [];
			$(eval($("#firstId").val())).each(function(idx, val) {
				if(val != id) {
					
					names.push(val);
				}
			});
			if(names.length > 0) {
				
				$("#secId").val(names);
			} else {
				
				$("#secId").val("");
			}
			
			
		} else if(key == "P") {
			
			$("#smartPickYn").prop("checked",false);
			$("input[name=smartPickYn]").val("");
		} else if(key == "F") {
			
			$("#freeDelivYn").prop("checked",false);
			document.frmNavi.freeDelivYn.value = '';
		} else if(key == "S") {
			
			$("input[name=srchKeyword]").val("");
			$("#srchKeyword").val("");
		} else if(key == "HL") {
			
			$("input[name=highPrice]").val(0);
			$("#highPrice").val(0);
			$("input[name=lowPrice]").val(0);
			$("#lowPrice").val(0);
		} else if(key == "L") {
			
			$("input[name=lowPrice]").val(0);
			$("#lowPrice").val(0);
		} else if(key == "H") {
			
			$("input[name=highPrice]").val(0);
			$("#highPrice").val(0); 
		}
		
		initFlag = "Y";
			
		var path = $("#pathname").val();
		path = path + "?" + $("#frmNavi").serialize() + "&pageIdx=1";
		nativeCall('openWebview', JSON.stringify({'tp' : 'A','url' : path,
					   								  'action' : {"k" : "closePopup", 
					   									  		  "data" : {'tp' : 'C'}}}));
		filterFlag = true;
	}
}

//필터초기화
function searchInit(plazaFlag) {
	if(filterFlag) {
		filterFlag = false;
		
		document.frmNavi.subCtgId.value='';
		document.frmNavi.brandId.value='';
		document.frmNavi.srchKeyword.value='';
		document.frmNavi.freeDelivYn.value='';
		document.frmNavi.smartPickYn.value='';
		document.frmNavi.lowPrice.value=0;
		document.frmNavi.highPrice.value=0;
		$("#firstId").val("");
		$("#secId").val("");
		
		initFlag = "Y";
		var path = $("#pathname").val();
		path = path + "?" + $("#frmNavi").serialize() + "&pageIdx=1";
		nativeCall('openWebview', JSON.stringify({'tp' : 'A','url' : path,
													  'action' : {"k" : "closePopup", 
														  		  "data" : {'tp' : 'C'}}}));
		filterFlag = true;
	}	
}