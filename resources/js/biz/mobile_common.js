
var siteCode = document.getElementById("siteCode") ? document.getElementById("siteCode").value : "";
if(siteCode == "") {
	if(location.origin.indexOf("m.akfamily") > -1) {
		siteCode = "MFDS";
	}else {
		siteCode = "MOB";
	}
}
var isInapp = document.getElementById("isAkApp") ? document.getElementById("isAkApp").value : "N";
//var server_url = siteCode == "MOB" ? "http://m.akmall.com" : "http://m.akfamily.com";
var server_url =  document.getElementById("server_url") ? document.getElementById("server_url").value : location.origin ;
var appScheme = "akmall";
var iosAppId = "id490615718";
if(siteCode == "MFDS"){
	appScheme = "akfamily";
	iosAppId = "id1196668176";
}

/*
 * 디바이스 체크
 * 어플 미설치 시에 마켓으로 이동 설치되어 있으면 해당 앱실행후 해당 페이지로 이동
 */
var AppChecker = {
		/**
		 * 앱실행후 이동할 페이지 세팅
		 * 세팅 안할 시 메인으로 이동
		 * @param url
		 */
		
		goUrlSetting: function(url){
			if(url == "")
				url =  server_url + "/main/Main.do";
			var device = "Y";
			if(AppChecker.checkDevice() == "iOS") {
				device = "iPhone";
			}else {
				device = "Android";
			}
			
			AppChecker.options.schemeAddress = appScheme + "://?returnUrl=" + encodeURIComponent(url) + "%26isAkApp%3D"+ device;
			AppChecker.options.chromeIntent = "intent://?returnUrl=" + encodeURIComponent(url) + "%26isAkApp%3D"+device+"#Intent;scheme=" + appScheme + ";package=com.ak.android." + appScheme + ";end;";
		},
		options: {
			noAppMsg: "터치AK몰 App이 설치되어 있지 않습니다. \n앱스토어로 이동하시겠습니까?",
			
			//schemeAddress: appScheme + "://?returnUrl=" + encodeURIComponent(server_url + "?isAkApp=Y"),
			schemeAddress: appScheme + "://home",
		
			chromeIntent:"intent://?returnUrl=" + encodeURIComponent(server_url + "?isAkApp=Y") + "#Intent;scheme=" + appScheme + ";package=com.ak.android." + appScheme + ";end;",
			marketAddress: {
				iOS: "http://itunes.apple.com/kr/app/" + iosAppId + "?mt=8",
				Android: "market://details?id=com.ak.android." + appScheme
			}
		},

		checkDevice: function() {
			if(navigator.userAgent.search("iPhone|iPod|iPad") > -1) {
				return "iOS";
			} else if(navigator.userAgent.search("Android") > -1) {
				return "Android";
			} else {
				return "not support device";
			}
		},
		/**
		 * 마켓으로 바로 이동
		 * @param options
		 * @returns {Boolean}
		 */
		goMarketDirect: function() {
			// iOS
			if(AppChecker.checkDevice() == "iOS") {
					window.location.href = AppChecker.options.marketAddress.iOS;
			}
			// Android
			else if(AppChecker.checkDevice() == "Android") {
					window.location = AppChecker.options.marketAddress.Android;
			}

			return false;
		},

		goMarket: function(options) {
			try {
				if(AppChecker.checkDevice() != "iOS" && options.noAppMsg && options.noAppMsg.trim() != "" && !confirm(options.noAppMsg)) {
					// don't go market
				} else {
					// go to market
						AppChecker.goMarketDirect(options);
				}
			} catch(e) {
				console.log(e);
			}
		},
		/**
		 * 어플 미설치 시에 마켓으로 이동 설치되어 있으면 해당 앱실행후 해당 페이지로 이동
		 * @param options
		 * @returns {Boolean}
		 */
//		run: function(options) {
		run: function(store) {
			//var isAndroid = navigator.userAgent.match(/Android/i);
			var isChrome = navigator.userAgent.match(/Chrome/i);
			
			if(store == "AKMALL") {
				AppChecker.options.marketAddress.iOS = "http://itunes.apple.com/kr/app/" + iosAppId + "?mt=8";
				AppChecker.options.marketAddress.Android = "market://details?id=com.ak.android." + appScheme;
				AppChecker.options.schemeAddress= appScheme + "://home";
				AppChecker.options.chromeIntent = "intent://?returnUrl=" + encodeURIComponent(server_url + "?isAkApp=Y") + "#Intent;scheme=" + appScheme + ";package=com.ak.android." + appScheme + ";end;";
			} else if(store == "AKPLAZA" || store == "AKPLAZA_INAPP") {
				AppChecker.options.marketAddress.iOS = "http://itunes.apple.com/kr/app/id499453449";
				AppChecker.options.marketAddress.Android = "market://details?id=com.ak.android.akplaza";
				AppChecker.options.schemeAddress="akplaza://?returnURL=http://m.akplaza.com/main.do?isApp=Y&";
				AppChecker.options.chromeIntent = "intent://?returnUrl=http://m.akplaza.com/main.do?isApp=Y#Intent;scheme=akplaza;package=com.ak.android.akplaza;end;";
			}
			if(store == "AKPLAZA_INAPP") {
				// MALL앱 내에서 PLAZA앱 호출
				var options = AppChecker.options;
				if(AppChecker.checkDevice() == "iOS") {
					if(isInapp == "iPhone") {
						window.location = "newtab:http://m.akplaza.com/mevent.do?act=view&event_index=681";
					}else {
						var start = new Date();
						setTimeout(function() {
							if(new Date() - start > 2000) {
								return false;
							}
							AppChecker.goMarket(options);
						}, 1500);
						window.location = options.schemeAddress;
					}
				}
				else if(AppChecker.checkDevice() == "Android" && isChrome) {//android chrome
					top.window.location = options.chromeIntent;
				}else if(AppChecker.checkDevice() == "Android") { //android
					var iframe = document.createElement("iframe");
					iframe.style.visibility = "hidden";
					iframe.style.height = 0 ;
					iframe.src = options.schemeAddress;
					iframe.id = "androidIframe";
					iframe.onload = function() {
						AppChecker.goMarket(options);
					};
					document.body.appendChild(iframe);
				}else {
					alert("지원하지 않는 기기입니다.");
				}
				return false;
			}else {
//			options = options || AppChecker.options;
				var options = AppChecker.options;
				if(AppChecker.checkDevice() == "iOS") {
					var start = new Date();
					setTimeout(function() {
						if(new Date() - start > 2000) {
							return false;
						}
						AppChecker.goMarket(options);
					}, 1500);
					window.location = options.schemeAddress;
				}
				else if(AppChecker.checkDevice() == "Android" && isChrome) {//android chrome
					top.window.location = options.chromeIntent;
				}else if(AppChecker.checkDevice() == "Android") { //android
					var iframe = document.createElement("iframe");
					iframe.style.visibility = "hidden";
					iframe.style.height = 0 ;
					iframe.src = options.schemeAddress;
					iframe.id = "androidIframe";
					iframe.onload = function() {
						AppChecker.goMarket(options);
					};
					document.body.appendChild(iframe);
				}else {
					alert("지원하지 않는 기기입니다.");
				}
				return false;
			}
		}
};


