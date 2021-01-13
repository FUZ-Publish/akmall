var buffer = new Array();
var messages = new JMessage();
var popCloseFlag = false;	
var changeFlag = false;
var currSort = "1";
var isProcess = false;


function videoPlay(url) {
	
	var $this = $(event.target);
	var playFlag = true;
	
	if(navigator.connection != undefined) {
		if(navigator.connection.type != "wifi") {
			
			playFlag = false;
		}
	} else {
		
		playFlag = false;
	}
	
	if(!playFlag) {
		
		if(!$this.hasClass("agreeFlag")) {
			
			if(confirm("3G/LTE에서 재생시 데이터 요금이 부과할 수 있으니 유의하세요.\n(자동재생 설정 : 앱설정에서 가능)")) {
				playFlag = true;
				$this.addClass("agreeFlag");
			}
		} else {
			playFlag = true;
		}
	}
	
	if(playFlag) {
		
		if($("#isAkApp").val() != "" && $("#isAkApp").val() != "N") { 
			location.href = "newplay:" + url;
		} else {
			window.open(url, "_blank");
		}
	}
}

//recopic import
if($("#siteCode").val() == "MOB") {
	
	(function(w,d,n,s,e,o) {
	    w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
	    e=d.createElement(s);e.async=1;e.charset='utf-8';e.src='//static.recopick.com/dist/production.min.js';
	    o=d.getElementsByTagName(s)[0];o.parentNode.insertBefore(e,o);
	})(window, document, 'recoPick', 'script');
}

if($("#isAkApp").val() != "" && $("#isAkApp").val() != "N") {
	if(typeof nativeCall != "function") {
		//네이티브 호출
		function nativeCall() {
			if(arguments.length == 0) {
				
				return false;
			}
			
			var k = arguments[0];
			var p = "";
			if(arguments.length > 1) {
				
				p = arguments[1];
				p = encodeURIComponent(p);
			}
			if($("#siteCode").val() != "MFDS"){
				window.location = "akmall://" + k + "?" + p;								
			}else{
				window.location = "akfamily://" + k + "?" + p;
			}
		}
	}
}

/**##
 * 패턴체크(직접사용X, 내부 호출용)
 */
function chkPattern(field, pattern, msg) {
	var regNum = /^[0-9]+$/;
	var regEmail = /[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*/;
	var regUrl = /^(http\:\/\/)*[.a-zA-Z0-9-]+\.[a-zA-Z]+$/;
	var regAlpha = /^[a-zA-Z]+$/;
	var regHangul = /[가-힣]/;
	var regHangulEng = /[가-힣a-zA-Z]/;
	var regHangulOnly = /^[가-힣]*$/;
	var regId = /^[a-zA-Z0-9]{1}[^"']{3,9}$/;
	var regPass = /^[a-zA-Z0-9_-]{4,12}$/;

	pattern = eval(pattern);
	if (!pattern.test(field.value)) {
		/*
		 * var caption = field.parentNode.parentNode.firstChild.innerText; if (!field.getAttribute("label")) field.setAttribute("label",(caption)?caption:field.name); var msg2 = "[" + field.getAttribute("label") + "] 입력형식오류"; //if (msg) msg2 += "\n\n" + msg; alert(msg2); field.focus();
		 */
		return false;
	}
	return true;
}
/**## 
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


/**
 * n = 전체문자
 * t = 정규식
 * c = 변경문자
 */
function changeText(n, t, c) {
	if(c == undefined) c = ""; 
	return n.replace(t, c);
}

/** 
 * 숫자로 replace
 */
function onlyNumber(obj, callBack) {
	return $(obj).val($(obj).val().replace(/[^0-9]/gi,"")); 
	if(typeof callBack == "function") {
		callBack();
	}
}



/**   
 * String buffer  
 */
function append(t) {
	return buffer.push(t);
	
}

/**   
 * String buffer  
 */
function empty() {
	return buffer.length = 0; 
}

/**
 * String buffer
 */
function toString() {
	return buffer.join("");
}

/**##
 * 쿠키 set
 *
 * @param name
 * @param value
 * @param expiredays
 */
function setCookie() {
	var name = "";
	var value = "";
	var expiredays = "";

	if (arguments.length < 2)
		return false;

	if (arguments.length >= 2) {
		name = arguments[0];
		value = arguments[1];
	}

	if (arguments.length >= 3) {
		expiredays = arguments[2];
	}

	var todayDate = new Date();
	if (expiredays != "") {
		todayDate.setDate(todayDate.getDate() + expiredays);
		document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	} else {
		document.cookie = name + "=" + escape(value) + "; path=/;";
	}
}

/**##
 * 쿠키 get
 *
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

/**a
 * 현재시간
 * @param f
 * @returns String
 */
function getDate(f) { 
    if (!this.valueOf()) return " ";
 
    var weekName = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
    var d = new Date();
      
    return f.replace(/(yyyy|yy|MM|dd|E|hh|HH|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (t = (d.getFullYear() % 1000).toString()).length == 2 ? t : t.length == 3 ? t.slice(1) : "0" + t;
            case "MM": return (t = (d.getMonth() + 1).toString()).length < 2 ? "0" + t : t;
            case "dd": return (t = d.getDate().toString()).length < 2 ? "0" + t : t;
            case "E": return weekName[d.getDay()];
            case "HH": return (t = d.getHours().toString()).length < 2 ? "0" + t : t; 
            case "hh": return (t = ((h = d.getHours() % 12) ? h : 12).toString()).length < 2 ? "0" + t : t;
            case "mm": return (t = d.getMinutes().toString()).length < 2 ? "0" + t : t;
            case "ss": return (t = d.getSeconds().toString()).length < 2 ? "0" + t : t;
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};


//텍스트 길이체크
function msgLen(obj, maxByte, han) {
	var str = $.trim($(obj).val());
	 
	if (str == null || str.length == 0) {
	  return 0;
	}
	var size = 0;
	var index = 0;
	for (var i = 0; i < str.length; i++) {
	  size += charByteSize(str.charAt(i), han);
	  if(size > maxByte) {
		  alert(maxByte + " byte를 초과 입력할 수 없습니다.");
		  $(obj).val($(obj).val().substring(0, index));
		  return false;
	  }
	  index++;
	}
}


function charByteSize(ch, han) {
    if (ch == null || ch.length == 0) {
      return 0;
    }
    
    if(han == 2) {// 한글이면 2를 더한다.
    	if (escape(ch).length > 4) {
    		return 2;
    	} else {
    		return 1;
    	}
    } else {//UTF-8
        var charCode = ch.charCodeAt(0);

        if (charCode <= 0x00007F) {
          return 1;
        } else if (charCode <= 0x0007FF) {
          return 2;
        } else if (charCode <= 0x00FFFF) {
          return 3;
        } else {
          return 4;
        }
    }
}
	
/**##
 * chkForm(form)
 * 입력박스의 null 유무 체크와 패턴 체크
 *
 * @Usage <form onSubmit="return chkForm(this)">
 */
function chkForm(form) {
	
	for ( var i = 0; i < form.elements.length; i++) {
		currEl = form.elements[i];
		if (currEl.disabled)
			continue;
		// 기본명칭 필요...
		// if (!currEl.getAttribute("label"))
		// currEl.setAttribute("label", "해당항목");

		// 필수여부 체크
		if (currEl.getAttribute("req") != null) {
			if (currEl.type == "checkbox" || currEl.type == "radio") {
				if (!chkSelect(form, currEl, currEl.getAttribute("msgR")))
					return false;
			} else {
				if (!chkText(currEl, currEl.value, currEl.getAttribute("msgR")))
					return false;
			}
		}

		if (currEl.getAttribute("option") != null && currEl.value.length > 0) {
			if (!chkPattern(currEl, currEl.getAttribute("option"), currEl.getAttribute("msgO")))
				return false;
		}

		// 최소길이 체크
		if (currEl.getAttribute("minlength") != null) {
			if (!chkLength(currEl, currEl.getAttribute("minlength")))
				return false;
		}

		// 숫자여부 체크
		if (currEl.getAttribute("chknumber") != null) {
			if (!chkNumber(currEl))
				return false;
		}

		// 이메일 체크
		if (currEl.getAttribute("chkemail") != null) {
			if (!chkEmail(currEl))
				return false;
		}

		if (currEl.getAttribute("id") == "keepid") {
			saveId(form, currEl);
		}
	}

	return true;
}

/**##
 * Selectbox 필수여부 체크
 */
function chkSelect(form, field, msg) {
	var ret = false;
	fieldname = eval("form.elements['" + field.name + "']");
	if (fieldname.length) {
		for ( var j = 0; j < fieldname.length; j++)
			if (fieldname[j].checked)
				ret = true;
	} else {
		if (fieldname.checked)
			ret = true;
	}
	if (!ret) {
		if (!field.getAttribute("label")) {
			// field.getAttribute("label") = field.name;
			field.setAttribute(filed.name);
		}
		var msg2 = "[" + field.getAttribute("label") + "] 필수선택사항";
		if (!msg)
			msg = messages.get("COMMON.ERR.MANDATORY_SELECT", field.getAttribute("label"));
		if (msg)
			msg2 += "\n\n" + msg;
		alert(msg2);
		field.focus();
		return false;
	}
	return true;
}

/**##
 * 문자열 필수여부 체크
 */
function chkText(field, text, msg) {
	text = $.trim(text);
	if (text == "") {
		var caption = field.parentNode.parentNode.firstChild.innerText;
		if (!field.getAttribute("label"))
			field.setAttribute("label", (caption) ? caption : field.name);
		alert(messages.get("COMMON.ERR.MANDATORY_TEXT", field.getAttribute("label")));
		setFocus(field);
		return false;
	}
	return true;
}

/**##
 * 최소 문자열 길이 체크함수
 */
function chkLength(field, len) {
	text = field.value;
	if ($.trim(text).length < len) {
		alert(messages.get("COMMON.ERR.MINLENGTH", [ field.getAttribute("label"), len ]));
		field.focus();
		return false;
	}
	return true;
}

/**##
 * 숫자여부 체크
 */
function chkNumber(field) {
	var regNum = /^[0-9]+$/;
	if (field.value == '')
		return true;
	if (!chkPattern(field, regNum)) {
		alert(messages.get("COMMON.ERR.NUMBER", field.getAttribute("label")));
		field.value = '';
		field.focus();
		return false;
	}
	return true;
}

/**##
 * 이메일 체크
 */
function chkEmail(field) {
	var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z_-])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	if (!chkPattern(field, regEmail)) {
		alert(messages.get("COMMON.ERR.EMAIL", field.value));
		setFocus(field);
		return false;
	}
	return true;
}
	
/**##
 * 오류시 focus 주기 위한 함수
 */
function setFocus(field) {
	if (field.tagName != "SELECT")
		field.value = "";
	if (field.type != "hidden" && field.style.display != "none")
		field.focus();
}

/*
 * Script용 오류메시지 정리 messages_ko.properties 파일에 정리한 내용을 동일하게 추가.
 */
function JMessage() {
	this.init;
	this.messages;

	this.get = function(id, args) {
		if (!this.init) {
			this.messages = new Array();
			this.messages["COMMON.ERR.MANDATORY_TEXT"] = "{0} 항목은 필수입력입니다.";
			this.messages["COMMON.ERR.MANDATORY_SELECT"] = "{0} 항목은 필수선택입니다.";
			this.messages["COMMON.ERR.EMAIL"] = "입력하신 이메일 주소({0})가 잘못되었습니다.";
			this.messages["COMMON.ERR.MINLENGTH"] = "{0} 항목은 최소 {1} 자 이상 입력해야 합니다.";
			this.messages["COMMON.ERR.NUMBER"] = "{0} 항목은 숫자로 입력해야 합니다.";
			this.messages["COMMON.ERR.DATE"] = "{0}년 {1}월은 최대 {2}일까지 있습니다.";
			this.messages["COMMON.ERR.BASICDATE"] = "{0} 항목이 오늘날짜보다 이전날짜입니다.";
			this.messages["COMMON.ERR.PERIODDATE"] = "{0} 항목이 시작날짜보다 이전날짜입니다.";
			this.messages["COMMON.NTC.WORKING"] = "페이지 준비 중입니다.";
			this.messages["COMMON.ERR.LOGIN"] = "아이디 또는 비밀번호가 일치하지 않습니다.  다시 입력해주세요.";
			this.messages["COMMON.ERR.PASSWD_TYPE"] = "비밀번호는 10~20자로 영문(대,소문자), 숫자, 특수문자 4가지 조합 중 2가지 이상 조합하셔서 작성해주세요. (공백입력불가)";
			this.messages["COMMON.ERR.PASSWD_SEQNUM"] = "4회이상 연결된 숫자는 제한됩니다.";
			this.messages["COMMON.ERR.PASSWD_SEQCHAR"] = "4회이상 연결된 문자는 제한됩니다.";
			this.messages["COMMON.ERR.PASSWD_SAMECHAR"] = "4회이상 연속된 문자/숫자는 제한됩니다.";
			this.messages["COMMON.ERR.PASSWD_SPECIALCHAR"] = "해당 특수문자는 비밀번호로 사용할 수 없습니다.";
			this.messages["COMMON.ERR.PASSWD_SAMEID"] = "아이디를 비밀번호로 사용할 수 없습니다.";
			this.messages["COMMON.ERR.PASSWD_SAMETEL"] = "전화번호/휴대폰번호를 비밀번호로 사용할 수 없습니다.";
			this.messages["COMMON.ERR.PASSWD_SAMEBIRTH"] = "생년월일을 비밀번호로 사용할 수 없습니다.";
			this.messages["COMMON.ERR.CHKNEWPASSWD"] = "새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다. 다시 입력해주세요.";
			this.messages["COMMON.ERR.SAMECHKPASSWD"] = "새 비밀번호와 기존 비밀번호가 동일합니다. 다시 입력해주세요.";
			this.messages["COMMON.ERR.NOGIFTPAPER"] = "상품권 입력내역이 없습니다.";
			this.messages["COMMON.ERR.NOGIFTCHECK"] = "잔액조회 후 전환신청 가능합니다.";
			this.messages["COMMON.ERR.GIFTEXCEED"] = "전환가능금액을 초과하였습니다.";
			this.messages["COMMON.ERR.GIFTMIN"] = "{0}원 이상 전환가능합니다.";
			this.messages["COMMON.ERR.GIFTLUMP"] = "{0}원 단위로 전환 가능합니다.";
			this.messages["COMMON.ERR.EVENT_END"] = "이벤트가 종료되었습니다. 빠른시일내 더 좋은 행사로 찾아뵙겠습니다.";
			this.messages["ACCOUNT.SIMPLE.ERR.PASSWD_TYPE"] = "비밀번호는 10~20자리까지 이용 가능합니다.";
			this.messages["ACCOUNT.SIMPLE.ERR.PASSWD_CHAR"] = "영문(대,소문자), 숫자, 특수문자 4가지 조합 중 2가지 이상 조합하셔서 작성해주세요.";
			this.init = true;
		}
		var message = this.messages[id];
		if (!message) {
			return id;
		}
		if (args) {
			if (typeof args == "object" && args.length) {
				for ( var i = 0; i < args.length; i++) {
					var pattern = new RegExp("\\{" + i + "\\}", "g");
					message = message.replace(pattern, args[i]);
				}
			} else {
				message = message.replace(/\{0\}/g, args);
			}
		}
		return message;
	};
}

/**##
 * inputbox 숫자만 입력 가능 $obj - inputbox object (this) onchange="chk_num(this)" 등
 */
var chk_num = function($obj) {
	
	var t = $obj.value;
	var digit = "1234567890";
	if (t.length > 0) {
		for ( var i = 0; i < t.length; i++) {
			if (digit.indexOf(t.substring(i, i + 1)) < 0) {
				alert("[" + $obj.getAttribute("label") + "] 항목은 숫자만 입력 가능합니다.");
				$obj.value = null;
				$obj.focus();
				return false;
			}
		}
	}
	return true;
};

/**
 * 한자리가 되는 숫자에 "0"을 넣어주는 함수
 * @param n
 * @returns
 */
function addzero(n) {
	
   if(n == undefined || n == "") {
	   
	   n = 0;
   }
   n = n.toString().replace(/[^0-9]/gi, '');
   return parseInt(n) < 10 ? "0" + n : n;
}


function floor(num, ja) {
    ja = Math.pow(10, ja)
    return Math.floor(num * ja) / ja;
}

/**
 * 장바구니 단일 삭제
 * @param id
 */
function delCart1(id){
	
	if(confirm("선택한 상품을 삭제 하시겠습니까?")) {
		var form = document.frmCart1;
		form.cart_id.value = id;
		form.action = "/order/ShoppingCartDelProc.do";
		form.target = "hfrm";
		form.submit();
	}
}

var today = getTimeStamp();
/**
 * 오늘날짜 받아오기
 * @param
 * @param
 */
function getTimeStamp() {
    var d = new Date();

    var s =
        leadingZeros(d.getFullYear(), 4) +
        leadingZeros(d.getMonth() + 1, 2) +
        leadingZeros(d.getDate(), 2);

    return s;
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

/**
 * 바로구매
 * @param id
 * @param card_id
 */
function setOrderGoodsByCardId(id, cart_id, coupon_id){
	var hour = getDate("HH");
	var form = eval("document.frmCart"+id);
	
	var smartPickYn = $("#smart_pick_yn_" + cart_id).val();
	var pickDate 	= $("#hope_deliv_dt_" + cart_id).val();

	if (smartPickYn == 'Y' && (pickDate < today || (pickDate == today && hour >= '17')) ){
		alert("AK&Pick의 픽업예정일이 지났습니다.\n예약정보를 변경해주세요.");
		return;
	}
	if ("" != pickDate && Number(pickDate) > 0 && (pickDate < today) ){
		alert("희망배송일이 지났습니다.\n날짜를 변경해주세요.");
		return;
	}
	
	form.cart_id.value = cart_id;
	form.coupon_id.value = coupon_id;
	form.cart_type.value = "0"+id;
	form.mode.value = "setOrder";
	form.target = "_self";
	
	form.action = fullSSLUrl + "/order/DeliPaymentInpt.do";
	form.submit();
}

function cartWish() {
	  var $checked = $(".cart_id:checked");
	  if($checked.length == 0) {
		  alert("상품을 한개 이상 선택하셔야 합니다.");
		  return false;
	  }
	  var $tg = $('.cart_wish_top');
	  var $close = $tg.find('.btn_pop_close');
	  var $cancel = $tg.find('.btn_cansel');
	  var $save = $tg.find('.btn_save');
	  
	  $("#dibs_folder").val(getDate("yyyy.MM.dd HH:00"));
	  
	  $tg.show();
	  
      var sh = $(window).outerHeight() - 80;
      var st = $(window).scrollTop();
    
      var ch = $tg.find('.popup_wrap').outerHeight();
	  if(sh > ch){
	      var ps = (sh - ch);
	      $tg.find('.popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});
	
	  }else if(sh <= ch){
	      $tg.find('.popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
	  }
	   
} 

var snceBuyFlag = true;
function snceBuyInsert() {
	 if(snceBuyFlag) {
		 var $checked = $(".cart_id:checked");
		  if($checked.length == 0) {
			  alert("상품을 한개 이상 선택하셔야 합니다.");
			  snceBuyFlag = true;
			  return false;
		  }
	  
		  $("#dibs_folder").val($.trim($("#dibs_folder").val()));
		  if($("#dibs_folder").val().length == 0) {
			  alert("찜폴더명 항목은 필수입력입니다.");
			  $("#dibs_folder").focus(); 
			  snceBuyFlag = true;
			  return false; 
		  }
		  
		  var $li = $(".cart_id:checked").parents("li");
		  var $good_id = $li.find("[name='goods_id[]']");
		  var goodsArray = new Array();
		  for(var i = 0; i < $good_id.length; i++) {
		  	 goodsArray[i] = $good_id.eq(i).val(); 
		  };
	    
		  $.ajax("/order/SnceBuyInsertProcAjax.do", {
			  data : {"goods_id[]" : goodsArray, "dibs_folder" : $("#dibs_folder").val()},
		      type : "post",  
		      dataType : "json",  
		      success : function(json) {
		    	  alert("현재 장바구니 상품을" + $("#dibs_folder").val() + " 폴더에 담았습니다."); 
		    	  $('.cart_wish_top').hide()
		    	  snceBuyFlag = true;
		      },
		      error : function(x, o, e) {
		    	  snceBuyFlag = true;
		    	  //alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
			  }
		  }) 
	 }	  
}

var forderFlag = true;  //폴더레이어 팝업Flag
var wishFlag = true;	//찜하기 Flag
/**
 * 폴더리스트 레이어 팝업 - 기본폴더일 경우 바로 찜하기 변경
 * @param url	
 * @param goods_id_array : 상품아이디 배열
 */
function pWishInpt(url, goods_id) {
	if(forderFlag && wishFlag) {
		
		try {
			n_click_logging("http://"+_n_sid+"/goods/pWishInpt.do?goods_id="+goods_id, location.href, "click");
		} catch(e) {}
		
		forderFlag = false;
		wishFlag = false;
		
		$.ajax(url, { 
			type : "post", 
			dataType : "json",
			success : function(json) {
				if(json.resultCode == "0001") {
					alert(json.resultMsg);
					location.href = json.url;
					return false;
				} 
				if(json.dibsFolderList.length > 1) {
					wishFlag = true;
					dispFolderList(json.dibsFolderList, goods_id, '');
				} else if(json.dibsFolderList.length == 1){
					pWishInptFinishAjax(goods_id, json.dibsFolderList[0].disp_folder_id, json.dibsFolderList[0].dibs_folder, '');
					
				} else {
					alert("에러가 발생하였습니다.");
					forderFlag = true; 
					wishFlag = true;
				}
			},
			error : function(x, o, e) {
				forderFlag = true;
				wishFlag = true;
				//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
			}
			
		});
	}
}

/**
 * 찜하기 폴더 레이어 팝업
 * @param data : 폴더리스트
 * @param goods_id : 상품아이디
 */
function dispFolderList(data, goods_id, ctgId){
	  var $tg = $('.wishZZim_prod');
	  var $close = $tg.find('.pop_close');
	  var $ul = $tg.find('.btn_layer2');
	 
	  $ul.empty();
	  
	  for(var i = 0; i < data.length; i++) {
		  var $li = $("<li>"); 
		  var $btn = $("<button>").attr({"type" : "button","data-dispFolderId": data[i].disp_folder_id})
		  						  .text(data[i].dibs_folder)
		  						  .appendTo($li);
		  $btn.on("click", function() {
			  if(wishFlag) {
				  wishFlag = false;
				  pWishInptFinishAjax(goods_id, $(this).attr("data-dispFolderId"), $(this).text(), '');
			  }
		  }); 
		  $ul.append($li); 
	  };
	  
	  $tg.show().addClass('active');
	  
	  var sh = $(window).outerHeight()-80;
      var st = $(window).scrollTop();
      var ch = $tg.find('.popup_wrap').outerHeight();

      if (sh > ch) {
    	  
          var ps = (sh - ch);
          $tg.find('.popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});
      } else if (sh <= ch){
    	  
    	  $tg.find('.popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
      }
      
      $close.on('click', function(){
		  $close.closest('.wishZZim_prod').hide(); 
		  forderFlag = true; 
	  }); 
	  
}


/**
 * 찜하기완료 
 * @param goodsId : 상품아이디
 * @param dispFolderId : 폴더아이디
 * @param ctgId : 카테고리 아이디
 */ 
function pWishInptFinishAjax(goodsId, dispFolderId, dibsFolder, ctgId) { 
	
	$.ajax("/goods/pWishInptFinishAjax.do", { 
		data : {"goodsId" : goodsId,"dispFolderId" : dispFolderId, "dibsFolder" : dibsFolder, "ctgId" : ctgId},
		dataType : "json",
		type : "post",
		success : function(json) {
			if(json.resultCode == "0001") {
				alert(json.resultMsg);
				forderFlag = true;
				wishFlag = true;
				return false;
			}
			var r = confirm("상품을 라이크잇 하였습니다. 확인하시겠습니까?");
			if(r == true){
				$(".wishZZim_prod").hide(); 
				forderFlag = true;
				wishFlag = true;
				window.location.href="/mypage/MyBelongingGoods.do";
			}else{
				$(".wishZZim_prod").hide(); 
				forderFlag = true;
				wishFlag = true;
				return false;
			}
			
		},
		error : function(x, o, e) {
			forderFlag = true;
			wishFlag = true;
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

/**
 * 수량변경
 * @param id : 카트아이디
 * @param cnt : 선택수량
 */
function modifyQty1(id, $obj) {
	var form = document.frmCart1;
	form.cart_id.value = id;
	form.sel_qty.value = $obj.val(); 
	form.action = "/order/ShoppingCartModifySelQtyProc.do";
	form.submit();
}

/**
 * &pick 날짜 변경 팝업
 */
var choiceAkpickFlag = true;
function choiceAkpickChange(id, cart_id, nowDate, $sel, btn) {
	if(choiceAkpickFlag) {
		choiceAkpickFlag = false;
		var form = eval("document.frmCart" + id);
		form.cart_id.value = cart_id;
		var url = "/order/pAkPickChange.do";
		$.ajax({
			type : "post", 
			url : url,
			data : $(form).serialize(),
			dataType : 'html',
			success : function(data) { 
				$("." + $sel).next().remove();
				$("." + $sel).after(data);
				var $div = $("." + $sel).next();  
				var $select = $div.find("select"); 
				$select.addClass("hid_" + $sel);
					      
				
				for(var i = 0; i < $div.find("option").length; i++) {
					if(nowDate == $div.find("option").eq(i).val()) {
						$div.find("option").eq(i).prop("selected", true);
						continue;
					} 
				} 
				 
				$select.change(function() {
					 pAkPickChangeProcAjax($(this)); 
				});
				showLayer($(btn));
				choiceAkpickFlag = true; 
				
			}, 
			error : function(x, o, e) {
				choiceAkpickFlag = true;
				//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
			}
		});
	}
}


/**
 * &pick 날짜 선택
 * @param data : 픽업 날짜 
 * @param obj : 레이어 팝업 닫기 버튼
 */
var pickChangeFlag = true;
function pAkPickChangeProcAjax($obj) {
	
	if(pickChangeFlag){
		pickChangeFlag = false;
		
		$("#frm [name='pickup_date']").val($obj.val());
		
		$.ajax("/order/pAkPickChangeProcAjax.do" , {
			data : $("#frm").serialize(),
			dataType : "json",
			type : "post",
			success : function(json) {
				pickChangeFlag = true;
				if(json.resultCode == "0000") {
					alert("픽업일정이 변경되었습니다.");
				} else {
					alert("시스템 오류가 발생하였습니다.");
				}
//				$(".layer_popup .day_pop_close").click();
				location.reload();
			}, 
			error: function(x, o, e) {
				pickChangeFlag = true;
				//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
			}
			
		});
	}
}

/**
 * textarea용 최대길이 체크 obj - select object maxlenth - 입력값 최대길이 cbyte - byte 표시할 객체 id (선택입력)
 */
function fc_chk_byte(obj, maxlenth, cbyte) {

	var temp_str = obj.value; // 이벤트가 일어난 컨트롤의 value 값
	var temp_len = temp_str.length; // 전체길이

	// 변수초기화
	var str_max = maxlenth; // 제한할 글자수 크기
	var i = 0; // for문에 사용
	var str_byte = 0; // 한글일경우는 2 그밗에는 1을 더함
	var str_len = 0; // substring하기 위해서 사용
	var one_char = ""; // 한글자씩 검사한다
	var text_str = ""; // 글자수를 초과하면 제한할수 글자전까지만 보여준다.

	for (i = 0; i < temp_len; i++) {
		// 한글자추출
		one_char = temp_str.charAt(i);

		// 한글이면 2를 더한다.
		if (escape(one_char).length > 4) {
			str_byte += 2;
		} else { // 그밗의 경우는 1을 더한다.
			str_byte++;
		}

		// 전체 크기가 str_max를 넘지않으면
		if (str_byte <= str_max) {
			str_len = i + 1;
		}
	}

	// 전체길이를 초과하면
	if (str_byte > str_max) {
		alert(maxlenth + " byte를 초과 입력할 수 없습니다.");
		text_str = temp_str.substr(0, str_len);
		obj.value = text_str;
		str_byte = maxlenth;
	}

	$("#" + cbyte).text(str_byte);

	//obj.focus();
} 

function cartListDelete(form, multiFlag){
	//단독 구매상품 분리
	var checkCnt = 0;
	if(multiFlag) {
		checkCnt = $("#" + form).find(".multi_y:checked").length;
	} else {
		checkCnt = $("#" + form).find(".multi_n:checked").length;
	}
	
	if(checkCnt == 0) {
		alert("선택된 상품이 없습니다.");
		return false; 
	}
	
	if(confirm("선택한 상품을 삭제 하시겠습니까?")) {
		if(multiFlag) {
			checkCnt = $("#" + form).find(".multi_n").prop("checked", false);
		} else {
			checkCnt = $("#" + form).find(".multi_y").prop("checked", false);
		}
		 
		var f = eval("document." + form); 
		f.action = "/order/ShoppingCartDelProc.do";
		f.target = "hfrm";
		f.submit();
	}
}

//페이지 이동
function movePage(url) {
   location.href = url;
}

/**
 * 장바구니 주문하기
 * @param id : 
 */
function allOrder(id){
	var form = eval("document.frmCart"+id);

	if(!form.cartId){
		alert("장바구니에 담긴 상품이 없습니다.");
		return;
	}

	var valuse = "";
	if (form.cartId) {
		if (form.cartId.length) {

			for ( var j = 0; j < form.cartId.length; j++){

				if (valuse != "")
					valuse += ",";
				valuse += form.cartId[j].value;

				var stockOut = $("#stockOut_"+form.cartId[j].value).val();
				if (stockOut == 'Y') {
					alert("품절된 상품은 구매가 불가합니다.");
					return;
				}

				var goods_name   =  $("#goods_name_"+form.cartId[j].value).val();
				var multiOrderYN =  $("#multiOrderYN_"+form.cartId[j].value).val();
				if(multiOrderYN == 'N'){
					alert(goods_name + "은 단일로 주문하셔야 합니다.");
					return;
				}
				
				var smartPickYn = $("#smart_pick_yn_" + form.cartId[j].value).val();
				var pickDate 	= $("#hope_deliv_dt_" + form.cartId[j].value).val();

				if (smartPickYn == 'Y' && (pickDate < today || (pickDate == today && hour >= '17')) ){
					alert("AK&Pick의 픽업예정일이 지난 상품이 있습니다.\n예약정보를 변경해주세요.");
					return;
				}
				if ("" != pickDate && Number(pickDate) > 0 && (pickDate < today) ){
					alert("희망배송일이 지난 상품이 있습니다.\n예약정보를 변경해주세요.");
					return;
				}
			}
		}
		else {
			valuse = form.cartId.value;

			var stockOut = $("#stockOut_"+form.cartId.value).val();
			if (stockOut == 'Y') {
				alert("품절된 상품은 구매가 불가합니다.");
				return;
			}
		}
	}

	form.cart_id.value = valuse;
	form.cart_type.value = "0"+id;
	form.target = "_self";
	form.mode.value = "allOrder";
	form.action = fullSSLUrl + "/order/DeliPaymentInpt.do";

	checkInterestFree();
}

function setAllOrderGoods(id) {
	$(".multi_y").prop("checked", true); 
	setOrderGoods(id);
}

var orderGoodsFlag = true; 
function setOrderGoods(id){
	var hour = getDate("HH");
	if(orderGoodsFlag) {
		orderGoodsFlag = false;
		var valuse = "";
		var coupon_id = "";

		var $form = $("#frmCart" + id);
		var form = eval("document.frmCart"+id);
		
		var $multiCart = $form.find(".multi_y:checked");
		
		if($multiCart.length == 0) {
			alert("선택된 상품이 없습니다.");
			orderGoodsFlag = true; 
			return false;
		}
		
		for(var i = 0; i < $multiCart.length; i++) { 
			
			var stockOut = $("#stockOut_"+$multiCart.eq(i).val()).val();
			if (stockOut == 'Y') {
				alert("품절된 상품은 구매가 불가합니다.");
				orderGoodsFlag = true;
				return false;
			}
			
			var goods_name   =  $("#goods_name_"+$multiCart.eq(i).val()).val();
			var multiOrderYN =  $("#multiOrderYN_"+$multiCart.eq(i).val()).val();
			if(multiOrderYN == 'N' && checkedCnt > 1){
				alert(goods_name + " 상품은 다른 상품과 같이 주문할 수 없습니다.");
				orderGoodsFlag = true; 
				return;
			}

			var smartPickYn = $("#smart_pick_yn_" + $multiCart.eq(i).val()).val();
			var pickDate 	= $("#hope_deliv_dt_" + $multiCart.eq(i).val()).val();

			if (smartPickYn == 'Y' && (pickDate < today || (pickDate == today && hour >= '17')) ){
				alert("AK&Pick의 픽업예정일이 지난 상품이 있습니다.\n예약정보를 변경해주세요.");
				orderGoodsFlag = true; 
				return;
			}
			if ("" != pickDate && Number(pickDate) > 0 && (pickDate < today) ){
				alert("희망배송일이 지난 상품이 있습니다.\n예약정보를 변경해주세요.");
				orderGoodsFlag = true; 
				return;
			}
			
			if(valuse!="") valuse += ",";
			if(coupon_id!="") coupon_id += ",";
			valuse += $multiCart.eq(i).val();
			coupon_id += $multiCart.eq(i).attr("data-coupon_id");
		}
		

		$form.find("[name='cart_id']").val(valuse);
		$form.find("[name='coupon_id']").val(coupon_id);
		$form.find("[name='cart_type']").val("0"+id);
		$form.find("[name='mode']").val("setOrder");
		$form.attr("target", "_self");
		$form.attr("action", fullSSLUrl + "/order/DeliPaymentInpt.do");
		 
		checkCnt = $form.find(".multi_n").prop("checked", false);
		
		checkInterestFree();
	}
}

/**
 * 장바구니 구매하기
 */
function checkInterestFree(){
	$.ajax({
		type : "post",
		url : "/order/pInterestFreeCheck.do",
		data : $("#frmCart1").serialize(),
		dataType : 'html',
		success : function(data) {
			orderGoodsFlag = true;
			if($.trim(data) == 'N') {  
				document.frmCart1.submit();
			}
			else{ 
				 var $this = jQuery(this);
	            var sh = $(window).outerHeight() - 80;
	            var st = $(window).scrollTop();
	            $('.btn_buy_info').show();
	            var ch = $('.btn_buy_info .popup_wrap').outerHeight();
	            if(sh > ch){
	                var ps = (sh - ch);
	                $('.btn_buy_info .popup_wrap').css({'margin-top':-ch/2,'position':'fixed','top':'50%'});

	            }else if(sh <= ch){
	                $('.btn_buy_info .popup_wrap').css({'margin-top':0,'position':'absolute','top':st});
	            }
			}
		},
		error : function(x, o, e) {
			orderGoodsFlag = true;
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

/**
 * 장바구니 할부 팝업 결제하기
 */
function nextStep(){
	document.frmCart1.submit();
}

var beforeId = "";
var setOptionFlag = true;
function setOptionDiv(id, $obj){
	
	if(setOptionFlag) {
		setOptionFlag = false;
		
		var $parentOpt = $obj.closest('.option');
		var $prdInfo = $obj.closest('.option').find('.sel_opt');
		
		if(beforeId!="" && beforeId != id) { 
			$(".opt_" + beforeId).empty().hide(); 
			$(".chng_" + beforeId).removeClass("active");
		}
		 
		if(!$parentOpt.hasClass('active')){     
			
			$.ajax({ 
				type : "post",
				url : "/order/OptionAjax.do?cart_id="+id,
				dataType :'html',
				success : function(html){
					$prdInfo.html(html);
					beforeId = id;

					for(var i = 0; i < $prdInfo.find("select").length; i++) {
						var val = $prdInfo.find("select").eq(i).find("option:selected").text();
						$prdInfo.find("select").eq(i).prev().text(val);
					}
					$parentOpt.addClass('active');
					$prdInfo.show();
				},
				complete : function() {
					setOptionFlag = true;
				}
			});  
			
		} else {
			$parentOpt.removeClass('active');
	    	$prdInfo.empty();
	    	beforeId = "";
	    	$prdInfo.hide(); 
	    	setOptionFlag = true;
		}		
	}
}

//옵션 박스 닫기
function closeOptBox($obj) {
	
	var $parentOpt = $obj.closest('.option');
	var $prdInfo = $obj.closest('.option').find('.sel_opt');
	
	$parentOpt.removeClass('active');
	$prdInfo.empty();
	beforeId = "";
	$prdInfo.hide(); 
	setOptionFlag = true;
}//closeOptBox end

//ak 머니 검색 submit
function mileFrmSubmit() {
	
	//마일리지 종류 
	$("#srchGivenTakenCode").val($("#srchGivenTakenCode2").val());

	//기간 소팅
	var date = new Date();
	var yyyy = date.getFullYear();
	var mm = date.getMonth() + 1;
	var dd = date.getDate();
	$("#srchEdate").val(yyyy.toString() + addzero(mm).toString() + addzero(dd).toString());

	var term = $("#srchDate").val();
	if(term.length == 0 ) term = 1;
	date.setMonth(date.getMonth() - term);
	
	var t_yyyy = date.getFullYear();
	var t_mm = date.getMonth() + 1;
	var t_dd = date.getDate();
	$("#srchSdate").val(t_yyyy.toString() + addzero(t_mm).toString() + addzero(t_dd).toString());
	
	$("#srchDateCode").val($("#srchDate").val());
	
	$("[name='pageIdx']").val(1);
	$("#frmNavi").submit();
}

//ak 머니 검색 submit

//[공통] 카테고리 이동 (args[0]:ctgId, args[1]:areaCode)
function goCtg() {
	var ctgId = arguments[0].trim();
	if (arguments.length < 1 || ctgId == 0 || ctgId == "")
		return false;

	// params (json)
	var params = {};

	// params.ctgId
	params.ctgId = ctgId;

	// params.urlpath
	if (arguments.length >= 2) {
		var areaCode = arguments[1].trim();
		params.urlpath = areaCode + "@" + ctgId;
		//TODO : 어널리틱스 추후 적용
		gaHandler(params.urlpath);
	}
	$.ajax({
		type : "post",
		url : "/goCtg.do",
		data : {
			"ctgId" : ctgId
		},
		dataType : "json",
		success : function(result) {
			if (result.CtgInfo.actionUrl != "") {
				// 폼 생성 후 submit (@ > %40)
				// makeForm(result.CtgInfo.actionUrl, "get", "",
				// params).submit();

				var url = result.CtgInfo.actionUrl;
				$.each(params, function(key, value) {
					url += (url.indexOf("?", 0) > 0 ? "&" : "?") + key + "=" + value;
				});
				moveCall(url)
			}
		},
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
		
	});
}

function moveCall(url) {
	setTimeout(function() {
		location.href = url;
	}, 200);
	
}
//replace용
function goCtg2() { 
	
	var ctgId = arguments[0].trim();
	if (arguments.length < 1 || ctgId == 0 || ctgId == "")
		return false;

	// params (json)
	var params = {};

	// params.ctgId
	params.ctgId = ctgId;

	// params.urlpath
	if (arguments.length >= 2) {
		var areaCode = arguments[1].trim();
		params.urlpath = areaCode + "@" + ctgId;
		//TODO : 어널리틱스 추후 적용
		gaHandler(params.urlpath);
	}

	$.ajax({
		type : "post",
		url : "/goCtg.do",
		data : {
			"ctgId" : ctgId
		},
		dataType : "json",
		success : function(result) {
			if (result.CtgInfo.actionUrl != "") {
				// 폼 생성 후 submit (@ > %40)
				// makeForm(result.CtgInfo.actionUrl, "get", "",
				// params).submit();

				var url = result.CtgInfo.actionUrl;
				jQuery.each(params, function(key, value) {
					url += (url.indexOf("?", 0) > 0 ? "&" : "?") + key + "=" + value;
				});
				
				location.replace(url);
			}
				
		},
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

//[공통] 브랜드샾 이동
function goBrand(brandId, ctg_type_code) {
	if(brandId != "") {
		if(ctg_type_code == '30') {
			location.href = "/akplaza/DeptStore.do?deptStoreId=" + brandId;	
		} else {
			location.href = "/display/BrandShopSClsf.do?brand_id=" + brandId;
		}
	}
}

//[공통] 브랜드샾 이동 : replace용
function goBrand2(brandId, ctg_type_code) {
	if(brandId != "") {
		if(ctg_type_code == '30') {
			location.replace("/akplaza/DeptStore.do?deptStoreId=" + brandId);
		} else {
			location.replace("/display/BrandShopSClsf.do?brand_id=" + brandId);	
		}
	}
}

//[공통] 이벤트 이동
function goEvent(id,t) {
	if(id != "") {
		gaHandler('GMA_07_03');
		if(t == "P") {
			location.href = '/planshop/PlanShopView.do?shop_event_id=' + id;
		} else if(t == "E") {
			location.href = '/event/EventDetail.do?no=' + id;
		}
	}
	
}


/**
 * 전화번호 x 자리의 숫자 추출
 *
 * @param num
 *            전화번호
 * @param xth
 *            자리
 * @return String
 */
function getPhoneNumXth(num, xth) {
	if (num == undefined) {
		return;
	}

	num = num.replace(/-/g, '');

	if (num == "" || num.length < 9) {
		return "";
	} else {
		if (num.substring(0, 2) == "02") {
			if (xth == 1) {
				return num.substring(0, 2);
			} else if (xth == 2) {
				return num.substring(2, num.length - 4);
			} else if (xth == 3) {
				return num.substring(num.length - 4, num.length);
			} else {
				return "";
			}
		} else if (num.substring(0, 4) == "0505" || num.substring(0, 4) == "0507") {
			if (xth == 1) {
				return num.substring(0, 4);
			} else if (xth == 2) {
				return num.substring(4, num.length - 4);
			} else if (xth == 3) {
				return num.substring(num.length - 4, num.length);
			} else {
				return "";
			}
		} else {
			if (xth == 1) {
				return num.substring(0, 3);
			} else if (xth == 2) {
				return num.substring(3, num.length - 4);
			} else if (xth == 3) {
				return num.substring(num.length - 4, num.length);
			} else {
				return "";
			}
		}
	}
}

function showLayer($obj, change) {
	//퍼블용 레이어 팝업 show 
	popCloseFlag = true;
	if(change != undefined) {
		changeFlag = true;
	}
	
	$obj.addClass("btn_sel_dr").click().removeClass("btn_sel_dr");
	
	if($obj.hasClass("notCall")) {
		$obj.addClass("btn_sel_dr");
	}
}




//커서 이동
function moveNext(num, from, to) {
	var len = from.value.length;

	if (len == num) {
		to.focus();
//		to.select();
	}
}

/**
 * 모바일 주소찾기 팝업 (회원정보용, default 지번주소)
 *
 * @dParam 우편번호1 id, 우편번호2 id, 기본주소 id, 상세주소 id, 도로명주소 출력 id - 기본 프로세스
 * @dParam 변환된 우편번호 id, 변환된 기본주소 id, 변환된 상세주소 id, 주소 구분 id - 회원정보 프로세스
 */
var addrFlag = true;
var $addrWrap = "";
function openPopAddrFindMobile() {
	if(addrFlag) {
		addrFlag = false;
		var url = "/popup/pAddrFind.do?z1=" + arguments[0] + "&z2=" + arguments[1] + "&a1=" + arguments[2] + "&a2=" + arguments[3] + "&txt=" + arguments[4];

		if (arguments.length == 5) { // 기본 프로세스 (인자 5개, 기본)
			url += "&cz=&ca1=&ca2=&yn=";
		} else if (arguments.length == 9) { // 회원정보 프로세스 (인자 9개, 변환된 주소 관련 항목 추가)
			url += "&cz=" + arguments[5] + "&ca1=" + arguments[6] + "&ca2=" + arguments[7] + "&yn=" + arguments[8];
		} else {
			alert("잘못된 접근입니다.");
			return false;
		}
		
		$.ajax(url, {
			dataType : "html",
			type : "post",
			success : function(data) {
				 var h1 = $(window).scrollTop();
				 $addrWrap.html(data).show().find('.popup_wrap').css({'position':'fixed','top':0,'left':0,'overflow-y':'scroll','height':'100%'});
				 $addrWrap.attr('data-height',h1);
				 $addrWrap = "";
				 adressFind.init();
			},
			error : function(x, o, e){ 
				//alert("서버 통신이 원활하지 않습니다.\n"+x.status + " : "+ o +" : "+e); 
				$addrWrap = "";
			},
			complete : function() {
				addrFlag = true; 
			}
		});
	}
}


function setAddress(z1, z2, a1, a2, txt, cz, ca1, ca2, yn, parcel_addr, road_addr, input_addr, select_gb) {
	
	
	
	if (select_gb === "J") { // 검증 구분이 지번 이면
		
		if($("#" + z2).length > 0){
			$("#" + z1).val(parcel_addr['zip_1']);
			$("#" + z2).val(parcel_addr['zip_2']);
		}else{
			$("#" + z1).val(parcel_addr['zip_1']+parcel_addr['zip_2']);
		}
		$("#" + a1).val(parcel_addr['addr_1']);
		$("#" + a2).val(parcel_addr['addr_2']);

		if (road_addr['addr_1']) {
			$("#" + txt).html("도로명주소 : " + road_addr['addr_1'] + " " + road_addr['addr_2']); // 도로명주소 출력
		}

		if (cz && ca1 && ca2 && yn) { // 회원정보용 주소찾기 팝업창 이면
			$("#" + cz).val(road_addr['zip_1'] + road_addr['zip_2']);
			$("#" + ca1).val(road_addr['addr_1']);
			$("#" + ca2).val(road_addr['addr_2']);
			$("#" + yn).val("3");
		}
	} else if (select_gb === "N") { // 검증 구분이 도로명 이면
		if($("#" + z2).length > 0){
			$("#" + z1).val(road_addr['zip_1']);
			$("#" + z2).val(road_addr['zip_2']);
		}else{
			$("#" + z1).val(road_addr['zip_1']+road_addr['zip_2']);
		}

		$("#" + a1).val(road_addr['addr_1']);
		$("#" + a2).val(road_addr['addr_2']);
		$("#" + txt).html("");

		if (cz && ca1 && ca2 && yn) { // 회원정보용 주소찾기 팝업창 이면
			$("#" + cz).val(parcel_addr['zip_1'] + parcel_addr['zip_2']);
			$("#" + ca1).val(parcel_addr['addr_1']);
			$("#" + ca2).val(parcel_addr['addr_2']);
			$("#" + yn).val("4");
		}
	} else if (select_gb === "IJ") { // 검증 구분이 지번(입력) 이면
		if($("#" + z2).length > 0){
			$("#" + z1).val(input_addr['zip_1']);
			$("#" + z2).val(input_addr['zip_2']);
		}else{
			$("#" + z1).val(input_addr['zip_1']+input_addr['zip_2']);
		}

		$("#" + a1).val(input_addr['addr_1']);
		$("#" + a2).val(input_addr['addr_2']);
		$("#" + txt).html("");

		if (cz && ca1 && ca2 && yn) { // 회원정보용 주소찾기 팝업창 이면
			$("#" + cz).val(road_addr['zip_1'] + road_addr['zip_2']);
			$("#" + ca1).val(road_addr['addr_1']);
			$("#" + ca2).val(road_addr['addr_2']);
			$("#" + yn).val("1");
		}
	} else if (select_gb === "IN") { // 검증 구분이 도로명(입력) 이면
		if($("#" + z2).length > 0){
			$("#" + z1).val(input_addr['zip_1']);
			$("#" + z2).val(input_addr['zip_2']);

		}else{
			$("#" + z1).val(input_addr['zip_1']+input_addr['zip_2']);
		}
		$("#" + a1).val(input_addr['addr_1']);
		$("#" + a2).val(input_addr['addr_2']);
		$("#" + txt).html("");

		if (cz && ca1 && ca2 && yn) { // 회원정보용 주소찾기 팝업창 이면
			$("#" + cz).val(parcel_addr['zip_1'] + parcel_addr['zip_2']);
			$("#" + ca1).val(parcel_addr['addr_1']);
			$("#" + ca2).val(parcel_addr['addr_2']);
			$("#" + yn).val("2");
		}
	}
}

//[공통] 기획전/이벤트 이동
function goShopEvent(shopEventId) {

	// 오류발생. 임시주석처리
	// shopEventId = shopEventId.trim();

	if (shopEventId == 0 || shopEventId == "")
		return false;

	// params (json)
	var params = {};

	$.ajax({
		type : "post",
		url : "/goShopEvent.do",
		data : {
			"shopEventId" : shopEventId
		},
		dataType : "json",
		success : function(result) {
			params[result.ShopEventInfo.sendParam] = shopEventId;
			if (result.ShopEventInfo.actionUrl != "") {
				// 폼 생성 후 submit (@ > %40)
				// makeForm(result.ShopEventInfo.actionUrl, "get", "",
				// params).submit();

				var url = result.ShopEventInfo.actionUrl;
				jQuery.each(params, function(key, value) {
					url += (url.indexOf("?", 0) > 0 ? "&" : "?") + key + "=" + value;
				});
				location.href = url;
			}
		},
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

//즐겨찾기 추가 (카테고리 or 브랜드)
function procFavoriteCtg(ctgId,brandId) {
	
	var favorite_id = ctgId;
	if(brandId != undefined && brandId.length) { 
		favorite_id = brandId;
	}
	
	$.ajax({
		type : "post",
		url : "/mypage/MyCtgProc.do",
		data : {
			"ctgId" : ctgId,
			"brandId":brandId||''
		},
		dataType : "json",
		success : function(data) {
			if ($.trim(data.msg) != "")
				alert($.trim(data.msg));

			if (data.code == "00") {
				$("#bookmark" + favorite_id).addClass("on");
				$(".history_like" + favorite_id).addClass("on");
			} else {
				$("#bookmark" + favorite_id).removeClass("on"); 
				$(".history_like" + favorite_id).removeClass("on");
			}
		},
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

//즐겨찾기 추가 (백화점매장)
function procFavoriteDeptStore(deptStoreId) {
	$.ajax({
		type : "post",
		url : "/mypage/MyCtgProc.do",
		data : {
			"ctgId" : "",
			"brandId" : deptStoreId||"",
			"ctg_type_code" : "30"
		},
		dataType : "json",
		success : function(data) {
			if ($.trim(data.msg) != "")
				alert($.trim(data.msg));

			if (data.code == "00") {
				$("#bookmark" + deptStoreId).addClass("on");
			} else {
				$("#bookmark" + deptStoreId).removeClass("on");
			}

			if (data.site == "AKM")
				resetFavorite();
		},
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

function openWindowLayer(url) {
	$.ajax({
		type : "post",
		url : url,
		dataType : 'html',
		success : function(data) {
			$("#layer").html(data);

			var winH = $(window).height();
			var winW = $(window).width();
			var winS = $(window).scrollTop();

			if ($("#layer").width() > 0 && $("#layer").height() > 0) {

				$("#layer").css('top', winH / 2 + winS - $("#layer").height() / 2);
				$("#layer").css('left', winW / 2 - $("#layer").width() / 2);

				// 레이어팝업 컨텐츠 height fix, auto scroll
				$("#layer").show();
				var sel_tblHeight = $("#layer .cont").height();
				$("#layer .cont").css("height", sel_tblHeight);
				$("#layer .cont").css("overflow-x", "hidden");
				$("#layer .cont").css("overflow-y", "auto");

				// 레이어 마스크
				var maskHeight = $(document).height();
				var maskWidth = $(window).width();
				$('#layermask').css({
					'width' : maskWidth,
					'height' : maskHeight
				});
				$('#layermask').show();

				var top = parseInt($("#layer").css('top'));
				if (top < 0) {
					$("#layer").css('top', '50px');
				}

				$('#layer .close,#layer .btn_close').click(function(e) {
					e.preventDefault();
					closeWindowLayer();
				});
			} else {
				$('#layermask').hide();
			}
		},
		error : function(x, o, e) {
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
			$('#layermask').hide();
		}
	});	
}

function lpad(val, padString, length) {
    var str = val.toString();
    while (str.length < length)
        str = padString + str;
    return str;
}


//로딩 레이어 호출
/*
$(document).ajaxSend(function(event, jqXHR, ajaxOptions) {
	var loading = true;
	if(ajaxOptions.loading != null) {
		if(ajaxOptions.loading == false) {
			loading = false;
		}
	}
	if(loading) {
		//$(".layer_loding_wrap").show();
	}
});
*/
//로딩 레이어 닫기
/*
$(document).ajaxComplete(function(event, jqXHR, ajaxOptions) {
	var loading = true;
	if(ajaxOptions.loading != null) {
		if(ajaxOptions.loading == false) {
			loading = false;
		} 
	}
	if(loading) {
		//$(".layer_loding_wrap").hide(); 
	}
	
//	if($("#isAkApp").val() != '' && $("#isAkApp").val() != "N") {
//		
//		linkCheck();
//	}
});
*/

//function linkCheck() {
//	
//	var allLinks = document.getElementsByTagName('a');
//	if (allLinks) {
//		var i;
//		for (i=0; i<allLinks.length; i++) {
//			var link = allLinks[i];
//			var target = link.getAttribute('target');
//			if (target && target == '_blank') {
//				
//				link.setAttribute('target','_self');
//				link.href = 'newtab:'+link.href;
//			}
//		}
//	}
//}

function newTab(url) {
	if($("#isAkApp").val() != '' && $("#isAkApp").val() != "N") {
		window.location = "newtab:" + url;
	} else {
		var win =window.open(url);
		if (win == null || typeof(win) == "undefined")
		{
			alert("팝업 차단 기능이 설정되어있습니다\n\n차단 기능을 해제(팝업허용) 한 후 다시 이용해 주십시오.");
		}
	}
}

function openBrowser(url) {
	if($("#isAkApp").val() != '' && $("#isAkApp").val() != "N") {
			
			if($("#siteCode").val() != "MFDS"){
				location.href = "akmall://openBrowser?" + encodeURIComponent(JSON.stringify({"url" : url}));
			}
			else {
				if(navigator.userAgent.search("Android") > -1 ) {
					//ios의 경우 akmall만 작동됨.
					location.href = "akfamily://openBrowser?" + encodeURIComponent(JSON.stringify({"url" : url}));
				}else {
					window.location = "newtab:" + url;
				}
			}
			
			
	} else {
		var win =window.open(url);
		if (win == null || typeof(win) == "undefined")
		{
			alert("팝업 차단 기능이 설정되어있습니다\n\n차단 기능을 해제(팝업허용) 한 후 다시 이용해 주십시오.");
		}
	}
}

//location.href = url + urlpath : 링크 이동
function goUrlPath(url, addpath, area_code, disp_ctg_id, newFlag) {
	var urlpath = area_code + "@" + disp_ctg_id;

	gaHandler(urlpath);

	var goUrl = url;
	if (url.indexOf("?", 0) > 0) {
		goUrl += "&urlpath=" + urlpath;
	} else {
		goUrl += "?urlpath=" + urlpath;
	}
	
	if($("#isAkApp").val() != "" && $("#isAkApp").val() != "N" && newFlag) {
		location.href = "newtab:" + goUrl;
		return false;
	}
	location.href = goUrl;
}

//location.href = url + urlpath : replace
function goUrlPath2(url, addpath, area_code, disp_ctg_id) {
	var urlpath = area_code + "@" + disp_ctg_id;

	gaHandler(urlpath);

	var goUrl = url;
	if (url.indexOf("?", 0) > 0) {
		goUrl += "&urlpath=" + urlpath;
	} else {
		goUrl += "?urlpath=" + urlpath;
	}
	location.replace(goUrl);
}

// return url + urlpath : url 리턴
function addUrlPath(url, addpath, area_code, disp_ctg_id) {
	var urlpath = area_code + "@" + disp_ctg_id;

	gaHandler(urlpath);

	var goUrl = url;
	if (url.indexOf("?", 0) > 0) {
		goUrl += "&urlpath=" + urlpath;
	} else {
		goUrl += "?urlpath=" + urlpath;
	}
	return goUrl;
}

function goShopEventUrl(url, params) {
	
	gaHandler(params);
	location.href = url;
}

/**
 * google analytics 호출
 */
function gaHandler(params) {

	if(params == null || "" == params) params = "0";

	var category = ""; //위치코드 앞 2자리, GA에서 필터매칭 위해 앞뒤 슬래쉬 기호 처리.
	var action = ""; //@이전 순수 위치코드
	var param = "";  //@이후 코드

	if(params.length > 2) {
		category = params.substring(0, params.indexOf("_", 0)+1);
	}

	action = params;

	if(params.indexOf("@", 0) > 0) {
		action = params.substring(0, params.indexOf("@", 0));
		param = params.substring(params.indexOf("@", 0));
	}

	try {
		if( category != '' && action != '' && action != 'undefined' && action != '0') {
			if(typeof(ga) != 'undefined') {
				ga('send', 'event', "/"+category+"/", action, "/"+action+"/"+param);
				ga(function() {
					if(typeof(ga.getByName('akAll')) != 'undefined') ga('akAll.send', 'event', "/"+category+"/", action, "/"+action+"/"+param);
				});
			}
		}
	} catch(e) {}
	
	wiseLogHandler(params);
}

/**
 * WISELOG Click Logging
 */
function wiseLogHandler(acode) {
	if(acode == null || "" == acode || "0" == acode) return;

	var argc = wiseLogHandler.arguments.length;
	var argv = wiseLogHandler.arguments;
	var code = (1 < argc) ? argv[1] : null;

	try {

		if(acode.indexOf("@", 0) > 0) {
			var action = ""; //@이전 순수 위치코드
			var param = "";  //@이후 코드(ex:ctgId)

			action = acode.substring(0, acode.indexOf("@", 0));
			param = acode.substring(acode.indexOf("@", 0)+1);

			acode = action;
			if(param != null && param != "" && param != "0") {
				acode += "_"+param;
			}
		}
		//acode에 @값이 없거나 하나만 있는 경우 logging 처리함.
		if(acode.indexOf("@") == acode.lastIndexOf("@")) {
			n_click_logging("http://"+_n_sid+"/area.do?acode="+acode, location.href, code);
		}
	} catch(e) {}
}

function getPlazaName(upperVendorId) {
	if(upperVendorId == "50001") {
		return "AK 구로";
	} else if(upperVendorId == "50002") {
		return "AK 수원";
	} else if(upperVendorId == "50003") {
		return "AK 분당";
	} else if(upperVendorId == "50004") {
		return "AK 평택";
	} else if(upperVendorId == "50005") {
		return "AK 원주";
	}
	return "";
} 

function getPlazaName2(upperVendorName) {
	if("구로본점" == upperVendorName) {
		return "AK 구로";
	} else if("수원점" == upperVendorName) {
		return "AK 수원";
	} else if("분당점"== upperVendorName) {
		return "AK 분당";
	} else if("평택점"== upperVendorName) {
		return "AK 평택";
	} else if("원주점"== upperVendorName) {
		return "AK 원주";
	}
	return "";
}

/**
 * 클립보드 복사
 * @param $obj - $객체(텍스트 필드 display block 여야함)
 */
function copy_trackback($obj) {
	$obj.select();
	document.execCommand("copy");
}

//상품상세이동
function setSave(goods_id) {
	//스크롤 위치 반환 document.body.scrollTop -> window.pageYOffset 변경
	setCookie("hashGoodsFoc", window.pageYOffset);
	location.href = fullUrl + "/goods/GoodsDetail.do?goods_id=" + goods_id;
}


//상품상세로 이동(옵션이 있는 경우)
function goGoodsDetail(goodsId){
	alert("이 상품은 옵션이 있는 상품 입니다.\n상품상세에서 옵션을 선택해주세요.");
	location.href = fullUrl + "/goods/GoodsDetail.do?goods_id=" + goodsId;
}


function daysCheck(year, month, day) {

	var curr_year = Number(year.options[year.selectedIndex].value);
	var curr_month = Number(month.options[month.selectedIndex].value);
	var curr_day = Number(day.options[day.selectedIndex].value);

	var maxDays = 0;

	if (curr_month < 7) {
		if (curr_month % 2 === 1) {
			maxDays = 31;
		} else {
			maxDays = 30;
		}
	} else if (curr_month > 8) {
		if (curr_month % 2 === 1) {
			maxDays = 30;
		} else {
			maxDays = 31;
		}
	} else {
		maxDays = 31;
	}

	if (curr_month === 2) {
		if ((curr_day % 4 === 0 && curr_day % 100 !== 0) || curr_day % 400 === 0) {
			maxDays = 29;
		} else {
			maxDays = 28;
		}
	}

	if (curr_day > maxDays) {
		alert(messages.get("COMMON.ERR.DATE", [ curr_year, curr_month, maxDays ]));
		day.value = maxDays;
		return false;
	} else {
		return true;
	}
}

//장바구니, 찜, 체크
function checkShoopingCart(goods_id) {
	var obj = event.target;
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
						goGoodsDetail(goods_id);
					}else{
						goOrderRelated('01', goods_id+"@"+data.goodsInfo.unit_cnt);
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

(function closeSns() {
	$(document).on('click',".btn_close",function(){
	    var $this = jQuery(this);
	    $this.closest('span').hide()
	});
}());


(function openSns() {
	$(document).on('click',".btn_open",function(){
	    var $this = jQuery(this);
	    $this.next().show();
	});
}());

function goOrderRelated(cart_type, id){

	   var frm = document.frmShopCart;
	   
	   var arrInfo = id.split("@");
	   frm.goods_id.value=arrInfo[0];

	   $("#frmShopCart input[name='unit_seq[]']").val(arrInfo[1]);
	   $("#frmShopCart input[name='cnt[]']").val(1);
	   
	   
	   frm.action = "/order/ShoppingCart.do?dummy=I";
	   frm.target = "tmp_frame";		  
	   
	   frm.submit();
}

//AKM의 StringTag.getCommonImagePath를 옮겨와서 사용. getCommonImagePath가 변경될경우 같이 변경필요
function getCommonImagePath(imgSize, goodsId){
	var photoHost = "photo.akmall.com";
	var pathPrefix = "/image" + Number(goodsId) % 5 + "/goods/";
	var tempStr = "";
	// 경로생성
	if( goodsId.length < 8){
		var compareLength = 8 - Number(goodsId.length);

		for(var idx = 0; idx < compareLength ; idx++){
			tempStr+="0";
		}
	}

	var goodsIdStr = tempStr + goodsId;
	goodsIdStr = goodsIdStr.substr(0, goodsIdStr.length);
	var pathStr = goodsIdStr.substr(0,2) + "/" + goodsIdStr.substr(2,2) + "/" + goodsIdStr.substr(4,2) + "/" + goodsIdStr.substr(6,2) + "/";
	return "http://" + photoHost + pathPrefix + pathStr + goodsId;
}

// AKM의 StringTag.getImagePath를 옮겨와서 사용. getImagePath가 변경될경우 같이 변경필요
function getImagePath(imgSize, goodsId, buyAgeCode){ 
	if( buyAgeCode == "19" ){
		return "/resource/front/images/content/adult_" + imgSize + ".gif";
	}
	return getCommonImagePath(imgSize, goodsId) + "_M_" + imgSize + ".jpg";
}


//네이티브 관련
var mobileKey = ["iPhone","iPod","iPad", "BlackBerry", "Android", "Windows CE", "LG", "MOT", "SAMSUNG", "Nokia", "Webos", "Opera Mini", "SonyEricsson", "Opera Mobi", "IEMobile"];
/**##
 * 모바일여부체크 
 * return boolean
 */
function isMobile() {
	if(navigator.userAgent.search(mobileKey.join("|")) > -1) {
		return true;
	}  
	return false;
}

/**##
 * 모바일 OS체크 
 * return OS
 */
function isOs() {
	var os = "";
	if(isMobile()) {
		for(var i = 0; i < mobileKey.length; i++) {
			if(navigator.userAgent.indexOf(mobileKey[i]) > -1){ 
				os = mobileKey[i];
				break;
			} 
		} 
	} 
	return os;
}


//[임시] 검색화면이동 : 디자인 요청으로
function goSearch2(){
	 location.href="/search/SearchMain.do"
}

(function appDownCheck() {
	if($("#isAkApp").length) {
		var isAkApp = $("#isAkApp").val();
		//비노출 페이지
		var pass = true;
		if(location.pathname === '/customer/ChatbotMain.do' ) {
			pass = false;
		}
			if(pass && isAkApp == "" || isAkApp == "N") {
				
				var app_down_bn = getCookie("app_down_bn");
				if(app_down_bn != "N") {
					
						$("#app_down_bn").show();
				}
			}
	}
}());

//상품 클립보드 복사
function goodsClipboard() {
	var $obj = $(event.target);
	var t = $obj.data("key");
	var json = {"t" : t+""};
	
	if($("#siteCode").val() != "MFDS"){
		window.location = "akmall://clipboard?" + JSON.stringify(json);
	}else{
		window.location = "akfamily://clipboard?" + JSON.stringify(json);
	}
}//goodsClipboard() end


var togle = false;
function joinEvent(formId) {
	
	//상품상세는 안탐
	if($("#goUrl").val() != undefined && $("#isLogin").val() != undefined ){
		var goUrl = $("#goUrl").val();
		var isLogin = $("#isLogin").val();
		
		if(isLogin != "true") {
			location.href = "/login/Login.do?goUrl="+goUrl;
			return false;
		}
	}
	
	if(togle) {
		alert("잠시만 기다려주세요");
		return false;
	}
	var form = $('#' + formId);
	var url = form.attr('action');
	var dataToSend = form.serialize();
	var eventId = $('input[name="event_id"]').val();
	//숨박꼭딜 쿠키값 삭제
	if(eventId == "1007988"){
		setCookie("dealEventWin_"+$('input[name="event_goods_id"]').val(),"N");
	}
	var success = function(recvData, status) {

		if(status == "success") {
			var success = recvData.success;
			var cause = recvData.cause;
			var message = recvData.message;
			var hasCoupon = recvData.hasCoupon;
			var couponId = recvData.couponId;
			var couponCount = recvData.couponCount || 0;
			var isIssuedCoupon = recvData.isIssuedCoupon;
			var couponMessage = recvData.couponMessage;
			var animateId = recvData.animateId;

			if(success)  {// 이벤트 응모 성공
				if(cause == "roulette") { //룰렛 응모
					$("#rlboxImage").rotate({
						duration : 10000,
						animateTo:parseInt(animateId.split("/")[1]),
						callback: function () {
						$("#"+animateId.split("/")[1]).show();
						}
					});
				}
				else if(cause == "roulette_comment") { //상품평룰렛 응모
					$("#rlboxImage").rotate({
						duration : 10000,
						animateTo:parseInt(animateId.split("/")[1]),
						callback: function () {
						//$("#"+animateId).show();
							alert(animateId.split("/")[0] + " 당첨되었습니다.");
							location.reload();
						}
					});
				}else if(cause == "ordcomment") { //상품평룰렛 응모
					$("#rlboxImage").rotate({
						duration : 10000,
						animateTo:parseInt(animateId.split("/")[1]),
						callback: function () {
							alert(animateId.split("/")[0] + " 당첨되었습니다.");
							location.reload();
						}
					});
				}
				else if(cause == "coupon") {
					alert(message);
					togle  = false;
					location.reload();
				}
				else if(cause == "attend") {
					if(animateId == "alert") {
						alert(message);
						location.reload();
					}else {
						$(animateId).show();
					}
				}else if(cause == "1011535"){
					if(getCookie("1011535_JOINYN") != "Y")
						setCookie("1011535_JOINYN", "Y", 30);
					alert(message);
					location.reload();
				}
				else if(cause == "0001") {
					var entryType = recvData.entryType;
					var entryValue = recvData.entryValue;
					var msg = recvData.msg;
					if(typeof entryValue == "undefined" && typeof msg != "undefined") {
						alert(msg);
						return false;
					}else if(entryValue == '-1')
					{
						msg = "선착순 응모가 마감되었습니다.";
						alert(msg)
						return false;
					}
					else {
						if(confirm("장바구니로 이동하시겠습니까?")) {
							window.location.href = "/order/ShoppingCart.do?tabCode=02";
							return false;
						}else {
							return false;
						}					
					}
					togle = false;
				} else if(cause == "appdown"){
					if(eventId == "1007988"){
						alert("파워딜 로고 찾으셨습니다!");
						if(confirm("숨바꼭딜 이벤트로 이동하시겠습니까?"  )){
							location.href = "/event/EventDetail.do?no=1007988";
						}else{
							location.reload();
						}
					}else{
						alert(message);
						togle  = false;
						if(recvData.eventid != null && recvData.eventid == "1003833"){
//							test();
						}else{
							location.reload();
						}

					}
				}  else if(cause == "cpe"){
					if(animateId == "1") {
				 			document.eventForm.submit();
					}else {
						alert(message);
						return false;
					}
				}  else if(cause == "pushEvent"){
					alert(message);
					togle  = false;
					//location.reload();
					location.replace(location.href.replace("&push_id", "&pid"));
				}  else if(cause == "fingerpushEvent"){
					alert(message);
					togle  = false;
					//location.reload();
					location.replace(location.href.replace("&msgTag", "&mt").replace("&hiddenTab=Y",""));
				}
				return false;

			}
			else { //이벤트 응모 실패
				if(cause == 'nosign') { // 실패 원인이 로그인 필요
					if(confirm('로그인후 응모 가능합니다.\n로그인 하시겠습니까?')) {
						window.location.href = "/login.do?returnUrl=" + encodeURIComponent(window.location.href);
						return false;
					}
				} else { // 그외 실패
					if(message == "1003833"){
//						test();
					} else {
						alert(message);
						//location.reload();
						location.replace(location.href.replace("&push_id", "&pid"));
					}
				}
			}
		} else {
			alert('시스템에 장애가 있습니다. 잠시후 다시 시도해 주세요.');
		}

	}; // function success

	togle = true;
	$.post(url, dataToSend, success, 'json')
	.error(function() {togle = false; alert('네트워크에 장애가 있습니다.');});
}

//	if(err_code.length > 0) {
//	//메세지 토글 박스
//	$('.alert_box1').show(300).delay(3000).hide(300);
//}

//메세지 토글 체크
(function messageToggleCheck() {
	if($(".alert_box1 p").length > 0) {
		$('.alert_box1').show(300).delay(3000).hide(300);	
	}
}());

//푸쉬이벤트 배너 체크
(function pushBannerCheck() {
	if($(".push_banner").length > 0) {
		$(".push_banner").slideDown(500);		
	}
}());


//백키 ui체크
(function backKeyCheck() {
	if(history.length == 1 && $("#isAkApp").length && $("#isAkApp").val() == "Android" && $("#newapp").val().length == 0) {
		$(".btn_back_only").hide();
	}
}());

// v4 app interface start by minseok
var MSDebug = {
		logstate : false,
		alertstate : false,
		log : function(msg) {
			this.logstate ? console.log(msg) : false ;
			this.alertstate ? alert(msg) : false ;
		}
}
/**
 * APP에서 페이지 진입시 호출됨   
 */
function appProcess() {
	try {
			reloadCart ();
			toggleTabbarCheck();
			commonAppProcess();
//			checkMyFeedCnt();
			
	}
	catch (e) {
		// TODO: handle exception
		MSDebug.log("appProcess error");
	}
}
//현재 iOS만 작동
function toggleTabbarCheck() {
	if($(".push_banner").length > 0 && (checkV4App("iOS"))) {
		AKWebInterface.web2app('toggleTabbar', 'N', '');
//		console.log("toggleTabbarCheck start");
//		if(checkVersionApp("Android",470,"MOB")) {
//			setInterval(function() {
//				toggleTabbarCheck();
//			}, 1000);
//		}
    }
}

function appLogin(id,name) {
	if(checkV4App()) {
		AKWebInterface.web2app('login', 'userid=' + id +'&username='+name, '');
		MSDebug.log("login ok" + 'userid=' + id +'&username='+name);
	}
}

function appLogout(url) {
	if(checkV4App("Android")) {
		
//    	  $.ajax({
//    	 		type : "post",
//    	 		url : url,
//    	 		data : {"native" : "Y"},
//    	 		dataType :'json',
//    	 		success : function(data){
//    	 			MSDebug.log("logout ok" );
//    	 			AKWebInterface.web2app('logout', '', '');
//    	 		},
//    	 		error : function(x, o, e){ 
//    	 		}
//    	 	});
		url += (url.indexOf("?", 0) > 0 ? "&" : "?") + "native=Y";
		location.href=url;
    	 
	}else {
		location.href = url;
	}
}
/**
 * v4 MALL 안드로이드 체크 
 * @returns {Boolean}
 */
function checkV4App(p) {
	var os = $("#newapp").val();
	var siteCode = $("#siteCode").val() == "MOB" ? true : false;
	var version = Number($("#newappVersion").val().replace(/\./g,"")) >= 400 ? true :false;
	var v4App = $("#app_v4").val() == "Y" ? true : false;
	var v = false;	
	try {
		if(v4App && siteCode) {
			if((typeof(p) == "undefined") || (p == "iOS" && os == "iPhone") || (p == "Android" && os == "Android")) v = true;
		}
	}
	catch (e) {	return false;}
	return v;
}
/**
 * 버전별 앱 체크
 * p Android, iPhone, ALL
 * v version
 * c sitecode MOB MFDS ALL
 * @returns {Boolean}
 */
function checkVersionApp(p, v , c) {
	try {
		var os = $("#newapp").val();
		var step1 = false;
		if(os == p || (p == "ALL" && (os == "Android" || os == "iPhone"))) step1 = true;
		var step2 = Number($("#newappVersion").val().replace(/\./g,"")) >= v ? true :false;
		var step3 = $("#siteCode").val() == c ? true : false;
		if(c == "ALL") step3 = true;
		if(step1 && step2 && step3)	return true;
	}
	catch (e) {	return false;}
}
// 스키마 호출
var AKWebInterface = {
		web2app:function(func_name, params) {

				params = encodeURIComponent(params);
				var iframe = document.createElement('IFRAME'); 
				iframe.setAttribute("src", "akmall://appinterface/?func="+func_name+"&params="+params); 
				iframe.setAttribute('frameborder', '0'); 
				iframe.style.width = '1px'; 
				iframe.style.height = '1px'; 
				document.body.appendChild(iframe); 
				document.body.removeChild(iframe); 
				iframe = null;
				MSDebug.log("AKWebInterface :" + "akmall://appinterface/?func="+func_name+"&params="+params);
		}
}
// 스키마 호출
var AKWebInterfaceFDS = {
		web2app:function(func_name, params) {
			
			params = encodeURIComponent(params);
			var iframe = document.createElement('IFRAME'); 
			iframe.setAttribute("src", "akfamily://"+func_name+"&params="+params); 
			iframe.setAttribute('frameborder', '0'); 
			iframe.style.width = '1px'; 
			iframe.style.height = '1px'; 
			document.body.appendChild(iframe); 
			document.body.removeChild(iframe); 
			iframe = null;
			MSDebug.log("AKWebInterfaceFDS :" + "akfamily://"+func_name+"&params="+params);
		}
}
// 장바구니 카운트 변경
function reloadCart () {
	try {
				if(location.pathname === '/goods/GoodsDetail.do' ||
				   location.pathname === '/order/ShoppingCart.do'||
				   location.pathname === '/order/OrderFinish.do'||
				   location.pathname === '/main/Main.do') {
					if(location.search.indexOf("tabid") > -1 && location.search.indexOf("tabid=0") == -1)
					{
						return false;
					}
					MSDebug.log("reloadCart start");
					$.getJSON("/app/preload.do?type=03").done(function (data) {
						if(data.resultCode == "0000") {
							if(checkV4App()) {
								AKWebInterface.web2app('cartCount', data.data.cartCount, '');
								MSDebug.log("reloadCart cartCount > " + data.data.cartCount);
							}else {
								//web or notv4app
								$('header .cart .cart_btn>span').html(Number(data.data.cartCount))
								if(Number(data.data.cartCount) > 0) {
									$('header .cart .cart_btn').addClass("on");
								}else {
									$('header .cart .cart_btn').removeClass("on");
								}
							}
							setCookie("cartCount", data.data.cartCount, 365);
						}
					});
				}
	}
	catch (e) {
		// TODO: handle exception
		MSDebug.log("reloadCart error");
	}
}
// 히스토리 최근본상품 이미지 변경 - 상품상세에서 호출
function historyImg (img) {
	try {
		if(checkV4App()) {
				MSDebug.log("historyImg start");
				AKWebInterface.web2app('historyImg',img, '');
				setCookie("historyImg", img, 365);
		}else{
			setCookie("historyImg", img, 365);
		}
	}
	catch (e) {
		// TODO: handle exception
		MSDebug.log("historyImg error");
	}
}
// 마이피드
function checkMyFeedCnt () {
	try {
		if(
			location.pathname === '/main/Main.do'
//			location.pathname === '/goods/GoodsDetail.do' ||
//		   location.pathname === '/order/ShoppingCart.do'||
//		   location.pathname === '/order/OrderFinish.do'||
//		   location.pathname === '/order/DeliPaymentInpt.do'
			) {
			if(location.search.indexOf("tabid") > -1 && location.search.indexOf("tabid=0") == -1)
			{
				return false;
			}
			var akpushapp = $("#akpushapp").val();
			if(akpushapp == "Y") {
//				setTimeout(function() {
//					if($("#siteCode").val() != "MFDS"){
//						location.href="akmall://callMyFeedCnt";
//						//임직원몰만 스키마로 체크
//					}else {
//						location.href="akfamily://callMyFeedCnt";
//					}
//				}, 300);
			}else {
				$.getJSON("/app/getMyfeed.do").done(function (data) {
					if(data.resultCode == "0000" || data.resultCode == "1111") {
						var newAlarm = data.newAlarmYn;
						
						MSDebug.log("newAlarm > " + data.newAlarmYn);
						if(checkV4App()) {
							AKWebInterface.web2app('newAlarm', newAlarm, '');
						}else {
							//web or notv4app
							if(newAlarm == "Y") {
								$('header .cate_btn').addClass("on");
							}else {
								$('header .cate_btn').removeClass("on");
							}
						}
					}
				});
			}
			MSDebug.log("Myfeed start");
		}else if(location.pathname === '/mypage/MyFeedList.do') {
			// 
			if(checkV4App()) {
				AKWebInterface.web2app('newAlarm', "N", '');
			}else {
				
			}
			var feedCookie = getCookie("newAlarm").replace('Y','N'); 
			
			setCookie("newAlarm", feedCookie, 365);
			$(".cate_btn").removeClass("on");
			setCookie("akpushchecktoday", today, 365);
		}
	}
		catch (e) {
		// TODO: handle exception
		MSDebug.log("Myfeed error");
	}
	
}
function commonAppProcess() {
	//pushapp 전용
	try {
		if($("#akpushapp").val() == "Y" && checkV4App()) {
			if(location.pathname === '/display/CtgSClsf.do'
				|| location.pathname === '/display/CtgMClsf.do'	
				|| location.pathname === '/display/BrandCtgMClsf.do'	
				|| location.pathname === '/display/ShopFront.do'	
			) {
				var cat1 = $('.cate_big').text();
				var cat2 = $('.cate_mid').text() == "카테고리 선택" ? "" : $('.cate_mid').text();
				var cat3 = $('.cate_sam').text() == "카테고리 선택" ? "" : $('.cate_sam').text();
				var cat4 = $('.cate_sam2').text() == "카테고리 선택" ? "" : $('.cate_sam2').text();
				var params = "cat1=" +cat1 +"&cat2=" +cat2 +"&cat3=" +cat3 + "&cat4=" + cat4;
				AKWebInterface.web2app('categoryView', encodeURIComponent(params.replace(":"," ")));
			}
			 else if(location.pathname === '/goods/GoodsDetail.do') {
				var goods_name = $("meta[property='og:title']").attr("content").replace('%','').replace('#','').replace('&','').replace(":"," ");
				var goods_id = $("#frmNavi").find("[name='goods_id']").val();
				var goods_price = $("meta[property='product:price:amount']").attr("content");
				var goods_final_price = $("meta[property='product:sale_price:amount']").attr("content") == undefined ? goods_price : goods_final_price = $("meta[property='product:sale_price:amount']").attr("content");
				var params = "goods_name=" +goods_name +"&goods_id=" +goods_id +"&goods_price=" +goods_price + "&goods_final_price=" + goods_final_price;
				AKWebInterface.web2app('productView', encodeURIComponent(params));
			}
		}
	}
	catch (e) {
	// TODO: handle exception
	MSDebug.log("Myfeed error");
	}
}

function limitCookieCheck() {
	try {
		console.log("limitCookieCheck");
		//1 mykeyword
		var i,x,y,cookies=document.cookie.split(";");
		var myKeyword = "";
		for (i=0;i<cookies.length;i++) {
			x=cookies[i].substr(0,cookies[i].indexOf("="));
			y=cookies[i].substr(cookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");
			if (x=="mykeyword") {
				myKeyword = unescape(y);
				//break;
			}
		}
		var myKeywords = myKeyword.split("^%");
		//10개 이상 삭제
		if( myKeywords.length  > 10 ) {
			myKeywords = myKeywords.slice(myKeywords.length-9,myKeywords.length);
			var exdate=new Date();
			var exdays = 365;
			exdate.setDate(exdate.getDate() + exdays);
			var c_value=escape(myKeywords.join("^%")) + ((exdays==null) ? "" : "; path=/; expires="+exdate.toUTCString());
			document.cookie="mykeyword" + "=" + c_value;
		}
	} catch (e) {
		
	}
}

function onNewAlarm(on) {
	//web or notv4app
//	if(on == "Y") {
//		var akpushchecktoday = getCookie("akpushchecktoday");
//		if(akpushchecktoday != today) {
//				//web or notv4app
//				setCookie("newAlarm", "Y", 365);
//				$('header .cate_btn').addClass("on");
//		}else {
//			//web or notv4app
//			$('header .cate_btn').removeClass("on");
//		}
//		//setCookie("akpushappcnt", total, 365);
//	}else {
//		$('header .cate_btn').removeClass("on");
//	}
	
}
function callPushApi(async,uri,token_idx,page,listcnt,mode,tag) {
	var j;
	if(token_idx != null && token_idx != ""){
		var device_type = navigator.userAgent.search("Android") > -1?"A":"I";
		$.ajax({
			type : "post",
			data : {"pushUri" : uri, "token_idx" : token_idx, "device_type" : device_type, "page" : page, "listcnt" : listcnt, "mode" : mode, "tag" : tag},
			url : "/push/pushApi.do",
			dataType : "json",
			async : async,
			success : function(json) {
				if(json.code == "200") { // 정상
					j = json
				}
			},
			error : function(x, o, e) {
			}
		});	
		
	}
	return j;
}