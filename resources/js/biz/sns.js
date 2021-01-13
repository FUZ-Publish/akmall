//Kakao.init('502933237475a0db43dd1d123db83d2e');
Kakao.init('94eddedf7a89bfc8f5fb18ce775b527f');

//sns 공유 팝업
function openShareLayer(url, snsId, flag) {
	if(flag == "link") 
		url = url +"&link=Y";
	$.ajax(url, {
		type : "post",
		dataType : "html",
		success: function(html) {
			
				$(".layer_pop_share").html(html).show(); 
				if(flag == "link") {
					//shortUrl = makeShortUrl(snsId);
					shortUrl = makeShortUrl2("", "link");
				}else {
					//기존
					/*if(flag == undefined) {
						
						shortUrl = "/goods/GoodsDetail.do?goods_id="+snsId;
					}
					
					
					if(flag == "event"){
						
						shortUrl = "/event/EventDetail.do?no="+snsId;
					}
					if(flag == "planshop"){
						
						shortUrl = "/planshop/PlanShopView.do?shop_event_id="+snsId;
					}

					if(flag == "akPlaza"){
						
						shortUrl = "/akplaza/DeptStore.do?deptStoreId="+snsId;
					}
					if(flag == "powerDeal"){
						
						shortUrl = "/special/PowerDealDetail.do?goods_id="+snsId;
					}*/
					
					
					if(flag == "visit"){//출석체크 이벤트 추가
						
						shortUrl = "/event/RightVisit.do";
						
						kakao = function() {	
							Kakao.Link.sendDefault({
								objectType: "feed",
								content:{
									title:  '[AK몰] 모바일 출석체크 모바일로 출석체크하면 더 많은 혜택이',
									imageUrl: "http://m.akmall.com/resources/images/main/check_tit.png",
									link:{
										mobileWebUrl: decodeURIComponent("http://m.akmall.com/event/RightVisit.do") 
									},
									imageWidth : 360,
									imageHeight  : 149 
								},
								buttons :[{
									title: "출석체크 바로가기",
									link:{
										mobileWebUrl: decodeURIComponent("http://m.akmall.com/event/RightVisit.do") 
									}
									
								}],
								installTalk: true			
							});
						}
						
						shareStory = function() {
							
							if (shortUrl == "") {
								
								shortUrl = makeShortUrl(location.origin + "/assc/associate.jsp?assc_comp_id=103166&url=" + location.pathname+location.search);
								setTimeout(function() {
									shareStory();	
								}, 100);
								return false;
							}
							
							// 통신중 시간차를 위한 interval 셋팅
							Kakao.Story.open({
								url:shortUrl,
								text:"[AK몰] 모바일 출석체크 모바일로 출석체크하면 더 많은 혜택이"
							});
						}
						
						shareSMS = function() {
							var siteCode = document.getElementById("siteCode") ? document.getElementById("siteCode").value : "MOB";
							// 단축URL 생성
							if (shortUrl == "")
								shortUrl = makeShortUrl(shareUrl);
							// 통신중 시간차를 위한 interval 셋팅
							tempInterval = setInterval(function() {
								if (shortUrl != "") {
									clearInterval(tempInterval);
									if($("#isAkApp").val() != "" && $("#isAkApp").val() != "N") {
										if(siteCode != "MFDS"){
											location.href = "akmall://sms?" + encodeURIComponent(JSON.stringify({"t" : "[AK몰] 모바일 출석체크 모바일로 출석체크하면 더 많은 혜택이 " + shortUrl}));
										}else{
											location.href = "akfamily://sms?" + encodeURIComponent(JSON.stringify({"t" : "[AK몰] 모바일 출석체크 모바일로 출석체크하면 더 많은 혜택이 " + shortUrl}));
										}
									} else {
										location.href = "sms://?body="+goodsName+" "+shortUrl;
									}
								}
							}, 100);
						}
						shortUrl = makeShortUrl(location.origin + shortUrl);
					} else {
						shortUrl = makeShortUrl2(snsId, flag);	
					}
					
					//기존
					//shortUrl = makeShortUrl(location.origin + shortUrl);
					
					//shortUrl = makeShortUrl("http://m.akmall.com" + shortUrl);
				}

				
		},
		error : function(x, o, e) {
			console.log(arguments); 
			//alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}
	});
}

//카카오스토리
function shareStory(goodsName,shareUrl) {
	
	if (shortUrl == "") {
		
		shortUrl = makeShortUrl(location.origin + "/assc/associate.jsp?assc_comp_id=103166&url="+shareUrl);
		setTimeout(function() {
			shareStory(goodsName,shareUrl);	
		}, 100);
		return false;
	}
	
	// 통신중 시간차를 위한 interval 셋팅
	Kakao.Story.open({
		url:shortUrl,
		text:goodsName
	});
}

//페이스북
function shareFacebook(goodsName, summary, shareUrl, imageUrl) {

	if (shortUrl == "") {
		
		shortUrl = makeShortUrl(location.origin + "/assc/associate.jsp?assc_comp_id=26014&url="+shareUrl);
		setTimeout(function() {
			shareFacebook(goodsName, summary, shareUrl, imageUrl);	
		}, 100);
		return false;
	}
	
	var url = "http://facebook.com/sharer.php?u="+encodeURIComponent(shortUrl);
	if($("#isAkApp").val() != "" && $("#isAkApp").val() != "N") {
		
		if(siteCode != "MFDS"){
			location.href = "akmall://openBrowser?" + encodeURIComponent(JSON.stringify({"url" : url}));
		}else{
			location.href = "akfamily://openBrowser?" + encodeURIComponent(JSON.stringify({"url" : url}));
		}
		
	} else {
		window.open(url);
	} 
}

//클립보드 복사
function clipboard() {
	var t = $.trim($("#url_id").val());
	var siteCode = document.getElementById("siteCode") ? document.getElementById("siteCode").value : "MOB";
	if(t.length == 0) {
		
		return false;
	}
	
	if(siteCode != "MFDS"){
		location.href = "akmall://clipboard?" + JSON.stringify({"t" : t});
	}else{
		location.href = "akfamily://clipboard?" + JSON.stringify({"t" : t}); 
	}
}

//SMS공유
function shareSMS(goodsName,shareUrl) {
	var siteCode = document.getElementById("siteCode") ? document.getElementById("siteCode").value : "MOB";
	// 단축URL 생성
	if (shortUrl == "")
		shortUrl = makeShortUrl(shareUrl);
	// 통신중 시간차를 위한 interval 셋팅
	tempInterval = setInterval(function() {
		if (shortUrl != "") {
			clearInterval(tempInterval);
			if($("#isAkApp").val() != "" && $("#isAkApp").val() != "N") {
				if(siteCode != "MFDS"){
					location.href = "akmall://sms?" + encodeURIComponent(JSON.stringify({"t" : goodsName + " " + shortUrl}));
				}else{
					location.href = "akfamily://sms?" + encodeURIComponent(JSON.stringify({"t" : goodsName + " " + shortUrl}));
				}
			} else {
				location.href = "sms://?body="+goodsName+" "+shortUrl;
			}
		}
	}, 100);
}

//goo.gl 단축 URL 생성 (shortUrl 전역변수에 담음)
var shortUrl = "";
function makeShortUrl(longUrl,target) {
	
	
	var bit = {
		login : "akmallcom",
		apiKey : "R_3cc68c979a6ab040cd1f3c33a822c289"
	};
	var url = "https://api-ssl.bitly.com/v3/shorten?"
		+ "&longUrl=" + encodeURIComponent(longUrl)
		+ "&login=" + bit.login
		+ "&apiKey=" + bit.apiKey
		+ "&format=json";
	$.ajax({
		url : url,
		type : "post",
		dataType : "jsonp",
		success : function(data) {	
				if(data.status_txt == "OK"){
					shortUrl = data.data.url;
					$("#url_id").val(shortUrl);
				}else {
					shortUrl = longUrl;
					$("#url_id").val(longUrl);
				}
			},error : function(x, o, e) {
//				console.log(arguments); 
				shortUrl = longUrl;
				$("#url_id").val(longUrl);
		}
	});
	
}

//서버에서 통신해서 단축URL 생성(snsId -> 상품코드, 이벤트코드, 기획전코드등, target -> event, planshop등 호출위치)  
function makeShortUrl2(snsId, target) {
	var url = "/goods/makeShortUrl.do?snsId=" + snsId + "&target=" + target;

	$.ajax({
		url : url,
		type : "post",
		dataType: "json",
		success : function(data) {
				if(data.status_txt == "OK"){
					shortUrl = data.returnUrl;
					$("#url_id").val(shortUrl); // callback
				}else{
					$("#url_id").val(location.href);
				}
			},error : function(x, o, e) {
				$("#url_id").val(location.href);
			}
	});
}