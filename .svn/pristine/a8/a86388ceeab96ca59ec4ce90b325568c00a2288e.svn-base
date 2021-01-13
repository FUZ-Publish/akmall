var _version = (typeof resourceVersion !== 'undefined') ? resourceVersion : (new Date()).getTime();
	
var require = {
        baseUrl: '../resources/js/',
        paths: {
       "jquery"    : "lib/jquery-1.9.1.min",
       "jquery_ui"    : "lib/jquery-ui.min",
       "bxslider"    : "lib/jquery.bxslider",
       "swiper"    : "lib/swiper.min",
       "lazyload"    : "lib/jquery.lazyload.min",
       "timers"    : "lib/jquery.timers",
       "default"   : "app/default",
       "cart"   : "app/cart",
       "order"   : "app/order",
       "member"   : "app/member",
       "common"  : "biz/common",
       "mypage"  : "app/mypage",
       "customer"  : "app/customer",
       "main"  : "app/main",
       "cate"  : "app/cate",
       "detail"  : "app/detail",
       "plan"  : "app/plan",
	   "beauty"  : "app/renewalUI",
       "imageMapWeaver" : "lib/jquery.imageMapWeaver",
       //개발용 
//       "asiana" : "https://m.flyasiana.com/CM/common/linkage/ozcd",
       "browser" : "biz/jquery.browser",
       "iframe-auto-height" : "biz/jquery.iframe-auto-height.plugin.1.9.5.min",
       "biz_order" : "biz/biz_order",
       "biz_detail" : "biz/biz_detail",
       "mobile_common" : "biz/mobile_common",
       "search" : "biz/search",
       "ark" : "biz/ark",
       "sns" : "biz/sns",
       "kakao" : "https://developers.kakao.com/sdk/js/kakao.min",
       "gapi" : "https://apis.google.com/js/client",
       "powerdeal" : "biz/powerdeal",
       "native" : "biz/native",
       "base64" : "biz/jquery.base64.min",
       "imgMap" : "lib/jquery.imageMapWeaver"
     },
     shim : {
      "jquery": {
        exports: "$" 
      },     
      "jquery_ui": {
        deps: ['jquery'],
        exports: "jquery_ui"
      },       
      "bxslider": {
        deps: ['jquery'],
        exports: "bxslider"
      },       
      "swiper": {
        deps: ['jquery'],
        exports: "swiper"
      },  
      "lazyload": {
          deps: ['jquery'],
          exports: "lazyload"
      },
      "imgMap": {
          deps: ['jquery'],
          exports: "imgMap"
      },  
      "timers": {
        deps: ['jquery'],
        exports: "timers"
      },       
      "common": {
        deps: ['jquery',"mobile_common"],
        exports: "common"
      },      
      "default": {
        deps: ['jquery','imageMapWeaver','swiper','common'],
        exports: "defaults"
      },            
      "cart": {
        deps: ['jquery','swiper','bxslider'],
        exports: "cart"
      },
      "order": {
        deps: ['jquery'],
        exports: "order"
      },
      "member": {
        deps: ['jquery',"mobile_common",'base64'],
        exports: "member"
      },
      "mypage": {
        deps: ['jquery','jquery_ui','bxslider'],
        exports: "mypage"
      },
      "customer": {
        deps: ['jquery','swiper'],
        exports: "customer"
      },
      "main": {
        deps: ['jquery','bxslider','swiper','timers', 'powerdeal', 'sns', 'mobile_common','imageMapWeaver'],
        exports: "main"
      },
      "cate": {
        deps: ['jquery','bxslider','swiper', 'sns'],
        exports: "cate"
      },
      "detail": {
        deps: ['jquery','bxslider','swiper','timers','iframe-auto-height'],
        exports: "detail"
      },
      "plan": {
        deps: ['jquery','bxslider','swiper','timers', 'sns','imageMapWeaver'],
        exports: "plan"
      },
      "biz_order": { 
          deps: ['jquery','default','common','order'],
          exports: "biz_order"
      },
      "biz_detail": { 
    	  deps: ['jquery','default','common','detail', 'sns' , 'mobile_common'],
    	  exports: "biz_detail"
      },
      "browser": {
          deps: ['jquery'],
          exports: "browser"
       },
       "iframe-auto-height": {
          deps: ['browser'],
          exports: "iframe-auto-height"
       },
       "mobile_common": {
    	   deps: ['jquery'],
    	   exports: "mobile_common"
       },
       "search" : {
    	   exports: "search"
       },
       "ark" : {
    	   exports: "ark"
       },
       "sns": {
    	   deps: ['kakao', 'gapi'],
    	   exports: "sns"
       }, 
       "kakao" : {
    	   exports: "kakao"
       },
       "gapi" : {
    	   exports: "gapi"
       },
       "powerdeal" : {
    	   expoerts : "powerdeal"
       },
       "base64" : {
    	   deps: ['jquery'],
    	   expoerts : "base64"
       },
       "native": {
    	  deps: ['jquery', 'base64'], 
     	  exports: "native"
       },
       "imageMapWeaver" : {
    	   deps: ['jquery'],
    	   expoerts : "imageMapWeaver"
       },
		"beauty" : {
    	   deps: ['jquery','bxslider','swiper'],
    	   expoerts : "beauty"
       }
    },
    waitSeconds : 60,
    urlArgs: "v=" + _version
}

