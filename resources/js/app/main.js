var gnbScorll = {
  init:function(){
    if($('.top_md').length){
      var h = 46;
    }else{
      var h = 1;
    }
    $(window).scroll(function(){
        if($(window).scrollTop() > h){
          $('.main_gnb .deem').show();
          $('.wrap').addClass('sub_wrap_sc');
         
        }else{
           $('.main_gnb .deem').hide();
          $('.wrap').removeClass('sub_wrap_sc');
        }
      });
    }
}
jQuery('.main_gnb').length && gnbScorll.init();

/* 메인 기획전 슬라이드 */
/* [D] 2016.12.12 active 슬라이드 관련수정 */
var swiperExhibit = {
    
    item:function(obj,page){

        if($(obj+' .swiper-slide.active').length){
            var $dis = $(obj+' .swiper-slide.active').index(); 
          }else{
            $dis = 0;
          }

        setTimeout(function(){

          /* [D] 2017.1.13 화살표 제어 */ 
          var liw=0;
          var lastindex = $(obj+' .swiper-slide').length -1;
          var ssize = $(obj).width();
          var lastli = $(obj+' .swiper-slide').eq(lastindex).outerWidth(true);
          var firstli = $(obj+' .swiper-slide').eq(0).outerWidth(true)/3;
          
          for(var i = 0;i <= lastindex;i++){
             liw = liw + $(obj+' .swiper-slide').eq(i).outerWidth(true);
          }

          var last_size = -(liw - ssize - 10)

          if(ssize > liw){
            $(obj+' .arrow').hide();
            $(obj+' .arrows').hide();
          }

          var swiper = new Swiper(obj, {
            pagination: '.'+page,
            paginationClickable: false,
            slidesPerView: 'auto',
            freeMode: true,
            initialSlide:$dis,
            /* [D] 2017.1.13 화살표 제어 */ 
           onInit:function(swiper){
            var tleft = swiper.translate;

              if(tleft <= last_size){
                $(obj+' .arrow').hide();
              }else if(-firstli < tleft){
                $(obj+' .arrows').hide();
              }else{
                $(obj+' .arrow').show();
                $(obj+' .arrows').show();
              }
           },
           onSetTranslate:function(swiper){
              var tleft = swiper.translate;

              if(tleft <= last_size){
                $(obj+' .arrow').hide();
              }else if(-firstli < tleft){
                $(obj+' .arrows').hide();
              }else{
                $(obj+' .arrow').show();
                $(obj+' .arrows').show();
              }
               
            }, 
            onSlideChangeStart : function(swiper) {
                var tleft = swiper.translate;
                 if(tleft <= last_size){
                    $(obj+' .arrow').hide();
                  }else if(-firstli < tleft){
                    $(obj+' .arrows').hide();
                  }else{
                    $(obj+' .arrow').show();
                    $(obj+' .arrows').show();
                  }

            },    
            onSlideChangeEnd : function(swiper) {
                var tleft = swiper.translate;
                  if(tleft <= last_size){
                    $(obj+' .arrow').hide();
                  }else if(-firstli < tleft){
                    $(obj+' .arrows').hide();
                  }else{
                    $(obj+' .arrow').show();
                    $(obj+' .arrows').show();
                  }

            },
            /* [D] 2017.1.13 화살표 제어 */  

            onClick : function(swiper) {
              var $idx = swiper.clickedIndex; 
              if($idx === undefined){
                //console.log($idx)
              }else{
                swiper.slideTo($idx, 100, true);
              }
              
            }
          });
          //개발용 
          if($(obj).hasClass("swiper-event2")) {
        	  tabBeauty.init();
          }
          if($(obj).hasClass("swiper-event5")) {
        	  tabkid.init();
          }
          //개발용

        },10);
    }
}
//jQuery('.swiper-exhibit1').length && swiperExhibit3.item('swiper-exhibit1','swiper-exhibit-pagination1');
//jQuery('.swiper-exhibit2').length && swiperExhibit3.item('swiper-exhibit2','swiper-exhibit-pagination2');
//jQuery('.swiper-exhibit3').length && swiperExhibit3.item('swiper-exhibit3','swiper-exhibit-pagination3');
//jQuery('.swiper-deal-cate').length && swiperExhibit.item('swiper-deal-cate','swiper-exhibit-pagination4');
//jQuery('.swiper-brand').length && swiperExhibit.item('swiper-brand','swiper-exhibit-pagination5');
//jQuery('.swiper-event').length && swiperExhibit.item('swiper-event','swiper-exhibit-pagination6');
//jQuery('.swiper-event_id').length && swiperExhibit.item('swiper-event_id','swiper-exhibit-pagination6');

/* 메인 기획전 슬라이드 */
var swiperExhibit3 = {
    
    item:function(obj,page){
        setTimeout(function(){
          var swiper = new Swiper(obj, {
            pagination: '.'+page,
            paginationClickable: false,
            slidesPerView: 'auto'
          });

        },10);
    }
}
/*
* 타임세일 시간 줄어드는 스크립트.
* 'saletime' 클래스 엘레먼트만 발동
* 타임세일 페이지와 메인/상세에서 남은시간 포맷이 달라서 각 페이지별로 Timer클래스를 페이지에 두어 각 페이지에 맞게 변경. 
 */ 
var timesale = {
   init: function(){

     this.counters = [];
     this.nowTime = new Date().getTime();
     $('.saletime').each(function(i,el){
                var timer = new Timer(el);
                timer.count();
                timesale.counters.push(timer);

     });
     this.addEvent();

   },

   addEvent: function(){

     $(this).everyTime(1000, "countTimer", function(){

            for(var i=0, len=timesale.counters.length; i<len; i++){
                var timer = timesale.counters[i];
                timer.state == 'open' && timer.count();
            }
     });

   }, 
   
   formatting: function(dateMillisec){
       var day = Math.floor(dateMillisec / 86400);
       var hour = Math.floor(dateMillisec % 86400 / 3600);
       var min = Math.floor(dateMillisec % 3600 / 60);
       var sec = Math.floor(dateMillisec % 3600 % 60);
       hour = (hour < 10? "0" : "") + hour;
       min = (min < 10? "0" : "") + min;
       sec = (sec < 10? "0" : "") + sec;
       return { day:day, hour:hour, min:min, sec:sec };
   }
};

//timesale용 Timer 클래스.
var Timer = function Timer(el){

    this.$el = $(el);
    this.state = 'open';
    this.leftTime = Math.floor(Date.parse(this.$el.attr('data-endtime')) / 1000 - timesale.nowTime/ 1000);
    
    this.count = function(){
      this.leftTime -= 1;
      if (this.leftTime <= 0) {
              this.state = 'close';
              this.$el.find('em').html("행사종료");
       } else {
              var timedata = timesale.formatting(this.leftTime);
              var dayStr = timedata.day == "00"? "" : "<strong style='display:none'>"+timedata.day+"<strong>일 </strong></strong>";
              this.$el.find('em').html(dayStr + timedata.hour + ':' + timedata.min + ':' + timedata.sec);
       }

    };
};
$('.saletime').length && timesale.init();

/* [D] 2016.12.28 메인 기획전 슬라이드 2개로 분리 */
 


/* 메인 슬라이드 */
var swiperSlide = {

    item:function(obj,page){
        setTimeout(function(){
          var w = $('.'+obj+' .swiper-slide').width();
          var len = $('.'+obj+' .swiper-slide').length;

          $('.'+obj+' .swiper-wrapper').css('width',w*len);
        },30);
        
        
        $(window).on('resize',function(){
            setTimeout(function(){
                var w = $('.'+obj+' .swiper-slide').width();
                var len = $('.'+obj+' .swiper-slide').length;
                $('.'+obj+' .swiper-wrapper').css('width',w*len);
                //$('.'+obj).css('width',w);
            },20);
        });
        

        var swiper = new Swiper('.'+obj, {
          pagination: '.'+page,
          loop:true,
          paginationClickable: true         
          
      });
    }
}
//jQuery('.swiper-visual').length && $('.swiper-visual .swiper-slide').length > 1 && swiperSlide.item('swiper-visual','swiper-page');
//jQuery('.swiper-hot').length && $('.swiper-hot .swiper-slide').length > 1 && swiperSlide.item('swiper-hot','swiper-page');
//jQuery('.swiper-rival').length && $('.swiper-rival .swiper-slide').length > 1 && swiperSlide.item('swiper-rival','swiper-page');
//jQuery('.swiper-mostview').length && $('.swiper-mostview .swiper-slide').length > 1 && swiperSlide.item('swiper-mostview','swiper-page');
//jQuery('.swiper-deal').length && $('.swiper-deal .swiper-slide').length > 1 && swiperSlide.item('swiper-deal','swiper-page');
//jQuery('.swiper-ak-ban').length && $('.swiper-ak-ban .swiper-slide').length > 1 && swiperSlide.item('swiper-ak-ban','swiper-page');


/* 메인 슬라이드 개발용 */
var swiperSlideTab = { 

    item:function(obj,page){
    	
        var swiper = new Swiper(obj, {
          pagination: '.'+page,
          loop:true,
          paginationClickable: true,
          onSlideChangeStart : function(swiper) {

              var $idx = swiper.activeIndex; 
              $('.deal_txt em').hide();
              $('.deal_txt em').eq($idx+1).show(300);
           
          }
      });
    }
}

/* 메인 슬라이드 */
var swiperSlide2 = {

    item:function(obj,page){

        setTimeout(function(){
          var w = $('.'+obj+' .swiper-slide').width();
          var len = $('.'+obj+' .swiper-slide').length;

          $('.'+obj+' .swiper-wrapper').css('width',w*len);
        },30);
        
        
        $(window).on('resize',function(){
            setTimeout(function(){
                var w = $('.'+obj+' .swiper-slide').width();
                var len = $('.'+obj+' .swiper-slide').length;
                $('.'+obj+' .swiper-wrapper').css('width',w*len);
                //$('.'+obj).css('width',w);
            },20);
        });
        
        var swiper = new Swiper('.'+obj, {
          pagination: '.'+page,
          paginationClickable: true,
          onSlideChangeStart : function(swiper) {

              var $idx = swiper.activeIndex; 
              $('.deal_txt em').hide();
              $('.deal_txt em').eq($idx+1).show(300);
           
          }
          
      });
    }
}
jQuery('.swiper-deal2').length && $('.swiper-deal2 .swiper-slide').length > 1 && swiperSlide2.item('swiper-deal2','swiper-page');

/* 높이값 체크 */
var checkHight = {
    init:function(){
        var h = $('.main_wrap.swiper-slide-active .height_check').outerHeight();
        $('.swiper-main').css('height',h)
    }
}

/* 이벤트 탭 */
var eventTab = {
    init:function(){
        this.$btn = $('.event_wrap .line_tap li');
        this.$tg = $('.event_box');
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
        });
    }
}
$('.event_wrap').length && eventTab.init();

/* 메인 슬라이드 */
var conswiper;
var swiperMain = {
  init:function(){
        setTimeout(function(){
          var w = $('.main_wrap.swiper-slide').width();
          var len = $('.main_wrap.swiper-slide').length;
          $('.sw-width').css('width',w*len)
        },20);
        
        $(window).on('resize',function(){
            setTimeout(function(){
                var w = $('.main_wrap.swiper-slide').width();
                var len = $('.main_wrap.swiper-slide').length;
                $('.sw-width').css('width',w*len)
            },20);
        });
        setTimeout(function(){
            checkHight.init();
        },20);
        this.item();
    },
    
    item:function(){
      $('.main_gnb .swiper-slide').show();
      var _this = this;

      /* [D] 2017.1.13 화살표 제어 */ 
      var liw=0;
      var lastindex = $('.main_gnb .swiper-slide').length -1;
      var ssize = $('.main_gnb').width();
      var lastli = $('.main_gnb .swiper-slide').eq(lastindex).outerWidth(true);
      var firstli = $('.main_gnb .swiper-slide').eq(0).outerWidth(true)/3;
      
      for(var i = 0;i <= lastindex;i++){
         liw = liw + $('.main_gnb .swiper-slide').eq(i).outerWidth(true);
      }

      var last_size = -(liw - ssize - 10)

      if(ssize > liw){
        $('.main_gnb .arrows').hide();
        $('.main_gnb .arrow').hide();
      }
      
      var gnbswiper = new Swiper('.main_gnb', {
        pagination: '.swiper-exhibit-pagination',
        paginationClickable: true,
        slidesPerView: 'auto',
        freeMode: true,
        /* [D] 2017.1.13 화살표 제어 */ 
       onInit:function(swiper){
        var tleft = swiper.translate;

          if(tleft <= last_size){
            $('.main_gnb .arrow').hide();
          }else if(-firstli < tleft){
            $('.main_gnb .arrows').hide();
          }else{
            $('.main_gnb .arrow').show();
            $('.main_gnb .arrows').show();
          }
       },
       onSetTranslate:function(swiper){
          var tleft = swiper.translate;

          if(tleft <= last_size){
            $('.main_gnb .arrow').hide();
          }else if(-firstli < tleft){
            $('.main_gnb .arrows').hide();
          }else{
            $('.main_gnb .arrow').show();
            $('.main_gnb .arrows').show();
          }
           
        }, 
        onSlideChangeStart : function(swiper) {

          var tleft = swiper.translate;
          if(tleft <= last_size){
            $('.main_gnb .arrow').hide();
          }else if(-firstli < tleft){
            $('.main_gnb .arrows').hide();
          }else{
            $('.main_gnb .arrow').show();
            $('.main_gnb .arrows').show();
          }

        },    
        onSlideChangeEnd : function(swiper) {
            var tleft = swiper.translate;
            if(tleft <= last_size){
                $('.main_gnb .arrow').hide();
              }else if(-firstli < tleft){
                $('.main_gnb .arrows').hide();
              }else{
                $('.main_gnb .arrow').show();
                $('.main_gnb .arrows').show();
              }

        },
        /* [D] 2017.1.13 화살표 제어 */ 
        onClick : function(swiper) {
          var $idx = swiper.clickedIndex; 
          if($idx === undefined){
            //console.log($idx)
          }else{
            conswiper.slideTo($idx, 100, true);
          }
          
          
        }
      });
      //탭분리
      if($("#mainDetailId").length > 0) { 
    	  var mainTabCode = $("#mainTabCode").val();
		  var moveIdx = $("#mainDetailId").val();
		  
		  if(!$("#tab_" + moveIdx).hasClass("call")){
			  _this.onSwiperCreated(moveIdx, mainTabCode);
		  }else {
			 // if($("#bindSwiperCall").val() == "Y")
				  _this.bindSwiper(moveIdx);
		  }
		  //기획전 템플릿 페이징 flag
		  $(".plan_paging_flag").val("false");
		  $("#planPagingFlag_" + mainTabCode).val("true");
		  
		  
		  var height = $('.height_check').height();
		  setTimeout(function(){
			  height = $('.height_check').height();
			  $('.container').css('height', 'auto');
		  },300);
		  
		  if(typeof gaHandler == 'function') {
			  gaHandler("MTP_"+ $("#tab_" + moveIdx).data("templateid"));
		  }
		  
      }else {
    	  conswiper = new Swiper('.swiper-main', {
    		  paginationClickable: true,
    		  calculateHeight : false,
    		  touchAngle: 35,//각도 조절
    		  onSlideChangeEnd : function(swiper) {
    			  _this.topPage();
    			  
    			  var height = $('.main_wrap.swiper-slide-active .height_check').height();
    			  setTimeout(function(){
    				  height = $('.main_wrap.swiper-slide-active .height_check').height();
    				  $('.container').css('height', height + 45);
    			  },300);
    			  if(typeof gaHandler == 'function') {
    				  //console.log("Main tab ga end = >" + $("#tab_" + swiper.activeIndex).data("templateid"));
    				  gaHandler("MTP_"+ $("#tab_" + swiper.activeIndex).data("templateid"));
    			  }
    			  
    		  },
    		  onSlideChangeStart : function(swiper) {
    			  pagingFlag = true;
    			  
    			  var tabcode = $("#tab_" + swiper.activeIndex).data("tabcode");
    			  $("#mainTabCode").val(tabcode);
    			  
    			  //기획전 템플릿 페이징 flag
    			  $(".plan_paging_flag").val("false");
    			  $("#planPagingFlag_" + tabcode).val("true");
    			  
    			  
    			  if(!$("#tab_" + swiper.activeIndex).hasClass("call")){
//  				$(".swiper-main").prepend("<div class='main_loding_none'><img src='../resources/images/main/img_main_loding.gif' alt='ak'></div>");
    				  _this.onSwiperCreated(swiper.activeIndex, $("#tab_" + swiper.activeIndex).data("tabcode"));
    				  
    			  } else {
    				  _this.resizeWH(swiper.activeIndex);
    				  
    			  }
    			  
    			  var height = $('.main_wrap.swiper-slide-active .height_check').height();
    			  setTimeout(function(){
    				  height = $('.main_wrap.swiper-slide-active .height_check').height();
    				  $('.container').css('height', height + 45);
    			  },300);
    			  
    			  $('.main_gnb li').removeClass('on');
    			  $('.main_gnb li').eq(swiper.activeIndex).addClass('on');
    			  
    			  if(swiper.activeIndex === 0 ){
    				  $('.container').css('height', height);
    				  $('.wrap').removeClass('sub_wrap')
    			  }
    			  else{
    				  $('.wrap').addClass('sub_wrap');
    			  }
    			  
    			  //파워딜이 아닐경우 비디오 paused
    			  if(tabcode != "20") { 
    				  $(".main_wrap[data-tabcode='20']").find("video").each(function() {
    					  if(!this.paused) {
    						  
    						  this.pause();
    						  $(this).parents(".app_video_box").find(".movie_btn").fadeIn(300);
    						  $(this).parents(".app_video_box").find(".movie_btn").find(".btn_play").show();
    						  $(this).parents(".app_video_box").find(".movie_btn").find(".btn_pause").hide();
    					  }
    				  });
    			  }	
    			  
    			  //해당 템플릿 비디오 paused
    			  if($("#tab_" + swiper.activeIndex).data("templateid") != "3012") {
    				  $(".main_wrap[data-templateid='3012']").find("video").each(function() {
    					  if(!this.paused) {
    						  
    						  this.pause();
    					  }
    				  });
    			  }
    			  
    			  /* 가시범위와 상관없이 앞으로 이동 */
    			  var $idx = $('.main_gnb .swiper-slide.on').index(); 
    			  gnbswiper.slideTo($idx-1, 100, true); 
    		  }
    	  });
    	  if($("#mainTabCode").length > 0) {
    		  var mainTabCode = $("#mainTabCode").val();
    		  var moveIdx = $("[data-tabcode='" + mainTabCode + "']").index();
    		  
    		  if(mainTabCode == 10) {
    			  _this.onSwiperCreated(moveIdx, mainTabCode);
    			  
    		  } else { 
    			  conswiper.slideTo(moveIdx, 0, true);
    		  }
    	  }
      }
    },
    resizeWH : function(idx) {
    	setTimeout(function(){
    		
            var w = $('.main_wrap.swiper-slide').width();
            var len = $('.main_wrap.swiper-slide').length;
            $('.sw-width').css('width',w*len);
            
            var height = $('.main_wrap.swiper-slide-active').height();
	        $('.container').css('height', height+45);
	        	
            if(idx === 0 ){
              $('.container').css('height', height);
              $('.wrap').removeClass('sub_wrap')
            }
            else{
              $('.wrap').addClass('sub_wrap');
            }
            
        },300);    
    },
    onSwiperCreated : function(idx, code) {
        // $('.container').height(640);
        // $(".main_loding_none").remove();
        // $(".container.swiper-main").prepend($('<div class="main_loding_none"><img src="../resources/images/main/img_main_loding.gif" alt="ak"></div>'));
        
        /* Template 용 */
        var url = $("#tab_" + idx).data("url");

//        svrGubun = "REAL";
        //로컬의 경우 무조건 프리뷰
        // var mainData = "";
        // if(svrGubun == "LOCAL" || svrGubun == "DEV") {
        // 	if(code == "10" || code == "20" || code == "30" ||
        // 			code == "40" || code == "50" || code == "60" ||
        // 			code == "70" || code == "80" || code == "90" || code == "110") {

        // 		var isAkApp = "";
        // 		if(isApplication == "Y" || isApplication == "Android" || isApplication == "iPhone") {
        // 			isAkApp = "?isAkApp=" + isApplication;
        // 		} 
        		
        // 		url = "/main/MainHomePreview.do" + isAkApp;
        // 		mainData = $("#tabForm").serialize();
        // 	}
        // } 
 
        if($("#tab_" + idx).hasClass("call")) {
        	$(".main_loding_none").remove();
        	var height = $('.main_wrap.swiper-slide-active .height_check').height();
            setTimeout(function(){
              height = $('.main_wrap.swiper-slide-active .height_check').height();
              $('.container').css('height', height+45);
            },300);
        	url = null;
        }
        //기본 템플릿 -  홈:10, 파워딜:20, 기획전:40
//        if($("#mainTabCode").val() == "10" ||
//           $("#mainTabCode").val() == "20" ||
//           $("#mainTabCode").val() == "40") {
//        	
//        	$(".main_loding_none").remove();
//        	$("#tab_" + idx).addClass("call");
//        	url = null;
//        };  
        
        if(url!=null && url.length>0) {
            $.ajax({
	              type : "post",
		          url : url,
		          data : mainData,
		          dataType : 'html',
		          loading : false,
		          success : function(data) { 
		           try {  
		        	$(".main_loding_none").remove();         
		            $("#tab_" + idx).addClass("call").html(data);
		            swiperMain.bindSwiper(idx);
		            
		            //Main -Event 인경우 호출
		            if($("#mainTabCode").val()  == "50"){
		             $('.event_wrap').length && eventTab.init();
		            }
		            //탭분리 아닐경우는 기존대로
		            if($("#mainDetailId").length == 0) {
			            var height = $('.main_wrap.swiper-slide-active .height_check').height();
	                     setTimeout(function(){
	                       height = $('.main_wrap.swiper-slide-active .height_check').height();
	                       $('.container').css('height', height+45);
	                     },300);
		            }
		           } catch (e) {
		           }
		          },
		          error : function(x, o, e) {
		           //alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		        	  $(".main_loding_none").remove();     
		          }
            });
        }
        pagingFlag = true;
    }, 
    //개발용
    bindSwiper : function(idx) { 
    	if(!$('#tab_' + idx).hasClass("bindCall")) {
    		$('#tab_' + idx).addClass("bindCall");
    		$('#tab_' + idx + ' .swiper-visual').length && swiperSlideTab.item('#tab_' + idx + ' .swiper-visual','swiper-page');
    		$('#tab_' + idx + ' .swiper-hot').length  && $('#tab_' + idx + ' .swiper-hot .swiper-slide').length > 1 && swiperSlideTab.item('#tab_' + idx + ' .swiper-hot','swiper-page');
    		$('#tab_' + idx + ' .swiper-rival').length && swiperSlideTab.item('#tab_' + idx + ' .swiper-rival','swiper-page');
    		$('#tab_' + idx + ' .swiper-deal').length && swiperSlideTab.item('#tab_' + idx + ' .swiper-deal','swiper-page');
    		$('#tab_' + idx + ' .swiper-ak-ban').length && swiperSlideTab.item('#tab_' + idx + ' .swiper-ak-ban','swiper-page');
    		$('#tab_' + idx + ' .swiper-deal2').length && swiperSlideTab.item('#tab_' + idx + ' .swiper-deal2','swiper-page');
    		
    		$('#tab_' + idx + ' .swiper-deal-cate').length && swiperExhibit.item('#tab_' + idx + ' .swiper-deal-cate','swiper-exhibit-pagination4');
    		if($('#tab_' + idx + ' .swiper-brand').length) {
    			var siteCode = $("#siteCode").val(); 
    			$.each($(".swiper-brand .wcard_list"), function(k, v) {
    				if($(v).data("site") == "all" || $(v).data("site") == siteCode) {
    					
    				}else {
    					$(v).hide();
    				}

    			})
    			swiperExhibit.item('#tab_' + idx + ' .swiper-brand','swiper-exhibit-pagination5');
    			
    		}
    		$('#tab_' + idx + ' .swiper-event').length && swiperExhibit.item('#tab_' + idx + ' .swiper-event','swiper-exhibit-pagination6');
    		$('#tab_' + idx + ' .swiper-event1').length && swiperExhibit.item('#tab_' + idx + ' .swiper-event1','swiper-exhibit-pagination6');
    		$('#tab_' + idx + ' .swiper-event2').length && swiperExhibit.item('#tab_' + idx + ' .swiper-event2','swiper-exhibit-pagination6');
    		$('#tab_' + idx + ' .swiper-event3').length && swiperExhibit.item('#tab_' + idx + ' .swiper-event3','swiper-exhibit-pagination6');
    		$('#tab_' + idx + ' .swiper-event4').length && swiperExhibit.item('#tab_' + idx + ' .swiper-event4','swiper-exhibit-pagination6');
    		$('#tab_' + idx + ' .swiper-event5').length && swiperExhibit.item('#tab_' + idx + ' .swiper-event5','swiper-exhibit-pagination6');
    		$('#tab_' + idx + ' .swiper-exhibit1').length && swiperExhibit3.item('#tab_' + idx + ' .swiper-exhibit1','swiper-exhibit-pagination1');
    		$('#tab_' + idx + ' .swiper-exhibit2').length && swiperExhibit3.item('#tab_' + idx + ' .swiper-exhibit2','swiper-exhibit-pagination2');
    		$('#tab_' + idx + ' .swiper-exhibit3').length && swiperExhibit3.item('#tab_' + idx + ' .swiper-exhibit3','swiper-exhibit-pagination3');
	
    		if(idx > 0)
    			$('#tab_' + idx + ' map').length && $('#tab_' + idx + ' map').imageMapWeaver();
    		setTimeout(function() {
    			$('#tab_' + idx + ' .swiper-buty').length && swiperSlideTab.item('#tab_' + idx + ' .swiper-buty','swiper-page');
    			$('#tab_' + idx + ' .swiper-kid').length && swiperSlideTab.item('#tab_' + idx + ' .swiper-kid','swiper-page');
    			$('#tab_' + idx + ' .swiper-mostview').length && swiperSlideTab.item('#tab_' + idx + ' .swiper-mostview','swiper-page'); 
    		}, 300);  
    	}
    },
     //개발용
     
    topPage:function(){
      window.scrollTo(0, 0);
    }
}
jQuery('.main_wrap').length && swiperMain.init();

/* 조건검색 */
var sideFun = {
    init:function(){
        
        this.$switch = $('.btn_filter');
        this.$sideWrap = $('.layer_filter');
        this.$result = $('.related_word');
        this.$inner = this.$sideWrap.find('.layer_area')
        this.$dim = this.$sideWrap.find(".deem");
        this.$close = this.$sideWrap.find(".btn_close");
        this.$init = this.$sideWrap.find(".btn_init");
        this.$apply = this.$sideWrap.find(".btn_apply");
        this.$reset = $('.btn_reset_wrap');
        this.$tabItem = $('.cate_tab_filter li');
        this.$tabCon = $('.cate_tab_filter_con')
        this.$wrap = $('.wrap').css('overflow', 'hidden');
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(100%, 0, 0)'});
        this.wh = $(window).height();

        this.addEvent();
    },
    
    addEvent: function(){
        var _this = this;
        
        $(document).on('click', '.btn_filter', function(e){ 
          var $this = jQuery(this);
          //개발 수정 
          var mainTabCode = $("#tabForm input[name='mainTabCode']").val();
          var mall_div = $("#mall_div_40").val();
          
          if(mainTabCode == '40'){
          	$(".depth_type1").hide();
          	$(".depth_type2").show();
			
          	if(mall_div == "AKMall"){
				$(".depth_type2 #AKMCtg").show();
				$(".depth_type2 #AKPCtg").hide();
			}else if(mall_div == "AKPlaza"){
				$(".depth_type2 #AKPCtg").show();
				$(".depth_type2 #AKMCtg").hide();
			}else{
				$(".depth_type2 #AKPCtg").show();
				$(".depth_type2 #AKMCtg").show();
			}
         	  
          } else if(mainTabCode == '60'){
          	
          	$(".depth_type1").hide();
          	$(".depth_type2").show();
          	$(".depth_type2 #AKPCtg").show();
				$(".depth_type2 #AKMCtg").show();
				
          } else if(mainTabCode == 20) {
        	  
				$(".depth_type3").show();
				$(".depth_type1").hide();
				$(".depth_type2").hide();
				
          } else if(mainTabCode == 70) {
	          	  
          	$(".depth_type2").hide();
          	$(".depth_type1").show();
          	$(".depth_type3").hide();
	          	  
          	$(".AKPCtg_6").hide();
          	$(".AKPCtg_200204").hide();
          	
	       } else {

	        	$(".depth_type2").hide();
				$(".depth_type1").show();
				$(".depth_type3").hide();
				
				$(".AKPCtg_6").show();
				$(".AKPCtg_200204").show();
				
          }
          _this.$sideWrap.show();
          _this.opened? _this.close() : _this.open(); 
          e.preventDefault();
        });

        this.$tabItem.on('click', function(){
          _this.viewTab(this) 
        });

        this.$dim.on('click', function(){
            _this.close();
        });

        this.$close.on('click', function(){
            _this.close();
        });

        $(window).on('resize', function(){ 
            _this.opened && _this.open(); 
        });

        this.$init.on('click', function(){
            _this.$sideWrap.find('input[type="checkbox"]').prop('checked',false);
            _this.$sideWrap.find('input[type="text"]').val('');
            _this.$sideWrap.find('input[type="tel"]').val('');
        });

        this.$apply.on('click',function(){
            _this.close();
            _this.$result.show();
        });
    },    
    
    viewTab: function(target){
        var idx = $(target).index();    
        this.$tabItem.removeClass('active').eq(idx).addClass('active');
        this.$tabCon.hide().eq(idx).show();
    },
    
    open: function(){
        this.opened = true;
        this.bodyFreezing();
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(0, 0, 0)'});
        this.$dim.fadeIn('fast');
        this.$reset.fadeIn(500)
        jQuery('.swiper-filter').length && swiperCate.item('swiper-filter','swiper-cate-pagination');
    },
    
    close: function(){
        this.opened = false;
        this.bodyUnfreezing();
        this.$inner.css({'transition': 'transform 300ms ease','transform': 'translate3d(100%, 0, 0)'});
        this.$dim.fadeOut('fast');
        this.$reset.hide();
    },
    
    bodyFreezing: function(){
//        this.$wrap.css({'height': this.wh + 'px'});
    }, 
    
    bodyUnfreezing: function(){
        this.$wrap.css({'height': 'auto'});
    }
}
$('.layer_filter').length && sideFun.init();

/* 중카 열고 닫기 */
var midCateOnOff ={
    init: function(obj1,obj2){

        this.$wrap = $('.depth_type2');
        this.act();

    },
    act: function(){
        var _this = this;
    	$(document).on('click', '.depth_type2 dt', function(e){

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
midCateOnOff.init();

/* 슬라이드 버튼 */
var butAlert ={
    init: function(obj1,obj2){

        this.$btn = $('.sorting_btn_new span');
        this.act();
    },
    act: function(){
        var _this = this;
        this.$btn.on('click',function(){
        	
            var $this = jQuery(this);
                _this.$btn.removeClass('on');
                $('.but_alert1').hide();
                $this.addClass('on');
                if($this.index()===0){
                  $('.but_alert1').show();
                }
                if($this.index()===1){
                  $('.but_alert2').show();
                }
                checkHight.init();
        });
    }
}
butAlert.init();

/* npick tab */
var nPickTab ={
    init: function(){

        this.$btn = $('.spot_info .tab li');
        this.$tg = $('.spot_info .info_box');
        this.act();

    },
    act: function(){
        var _this = this;
        this.$btn.on('click',function(){

            var $this = jQuery(this);
            var $index = $this.index();

            _this.$btn.removeClass('on');
            $this.addClass('on');
            _this.$tg.hide();

            if($index === 0){

            }else{
                _this.$tg.eq($index-1).show();
            }
                
            
            
            checkHight.init();
        });
    }
}
$('.spot_info').length && nPickTab.init();

/* 메인 슬라이드 */
var swiperSlide3 = {

    item:function(obj1,obj2){
 
        
        
        var swiperbox = new Swiper('.'+obj1, {
          pagination: '.swiper-page',
          paginationClickable: true,
          onSlideChangeStart : function(swiper) {
              var $idx = swiper.activeIndex;
              swipertext.slideTo($idx, 200, true);  
          }
          
      });

        var swipertext = new Swiper('.'+obj2, {
          paginationClickable: true,
          onSlideChangeStart : function(swiper) {
              var $idx = swiper.activeIndex;
              swiperbox.slideTo($idx, 200, true);  
          }
          
      });
    }
}
//jQuery('.swiper-mutil1_1').length && swiperSlide3.item('swiper-mutil1_1','swiper-mutil1_2');
//jQuery('.swiper-mutil2_1').length && swiperSlide3.item('swiper-mutil2_1','swiper-mutil2_2');
//jQuery('.swiper-mutil3_1').length && swiperSlide3.item('swiper-mutil3_1','swiper-mutil3_2');
//jQuery('.swiper-mutil4_1').length && swiperSlide3.item('swiper-mutil4_1','swiper-mutil4_2');
//jQuery('.swiper-mutil5_1').length && swiperSlide3.item('swiper-mutil5_1','swiper-mutil5_2');
//jQuery('.swiper-mutil6_1').length && swiperSlide3.item('swiper-mutil6_1','swiper-mutil6_2');
jQuery('.swiper-trand_1').length && $('.swiper-trand_1 .swiper-slide').length > 1 && swiperSlide.item('swiper-trand_1','swiper-page');


/* 뷰티 하단 탭 */
var tabBeauty = {

  init: function(){

        this.$btn = $('.tab_beauty li');
        this.$tg = $('.tab_beauty_con');
        this.act();

        /* [D] 2017.01.04 슬라이드 오류 수정 */
        setTimeout(function(){
          $('.last_tab_beauty_con').css({'height':0,'opacity':0});
        },100);
        

    },
    act: function(){
        var _this = this;
        this.$btn.on('click',function(e){

            var $this = jQuery(this);
            var $index = $this.index();
            /* [D] 2017.01.04 슬라이드 오류 추가 */
            $('.last_tab_beauty_con').css({'height':'auto','opacity':1});
            _this.$btn.removeClass('active');
            $this.addClass('active');
            _this.$tg.hide();

            _this.$tg.eq($index).show();
            
            checkHight.init();
            e.preventDefault();
            
            /* 2017.0l1.l16 이벤트 탭 동작 추가 */
            _this.$tg.eq($index).find('.swiper-event1 .swiper-wrapper').css({'transform':'translate3d(0,0,0)'});
            _this.$tg.eq($index).find('.swiper-event2 .swiper-wrapper').css({'transform':'translate3d(0,0,0)'});
            _this.$tg.eq($index).find('.swiper-event1 .swiper-wrapper li span').removeClass('on');
            _this.$tg.eq($index).find('.swiper-event2 .swiper-wrapper li span').removeClass('on');
            _this.$tg.eq($index).find('.swiper-event1 .swiper-wrapper li:first span').addClass('on');
            _this.$tg.eq($index).find('.swiper-event2 .swiper-wrapper li:first span').addClass('on');
            _this.$tg.eq($index).find('.arrows').hide();
            /* 2017.0l1.l16 이벤트 탭 동작 추가 */
            
            //개발용
//            changeCtg.call($(".tab_beauty_con").eq($index).find("li"));
            $(".tab_beauty_con").eq($index).find("li").eq(0).find("span").click();
            //개발용
        }); 
    }
}
$('.tab_beauty').length && tabBeauty.init();

/* 키드 하단 탭 */
var tabkid = {

  init: function(){

        this.$btn = $('.tab_kid li');
        this.$tg = $('.tab_kid_con');
        this.act();

        /* [D] 2017.01.04 슬라이드 오류 수정 */
        setTimeout(function(){
          $('.last_tab_kid_con').css({'height':0,'opacity':0});
        },50);
        

    },
    act: function(){
        var _this = this;
        this.$btn.on('click',function(e){

            var $this = jQuery(this);
            var $index = $this.index();

            /* [D] 2017.01.04 슬라이드 오류 추가 */
            $('.last_tab_kid_con').css({'height':'auto','opacity':1});
            _this.$btn.removeClass('active');
            $this.addClass('active');
            _this.$tg.hide();

            _this.$tg.eq($index).show();
            
            checkHight.init();
            e.preventDefault();
            
            /* 2017.0l1.l16 이벤트 탭 동작 추가 */
            _this.$tg.eq($index).find('.swiper-event3 .swiper-wrapper').css({'transform':'translate3d(0,0,0)'});
            _this.$tg.eq($index).find('.swiper-event4 .swiper-wrapper').css({'transform':'translate3d(0,0,0)'});
            _this.$tg.eq($index).find('.swiper-event5 .swiper-wrapper').css({'transform':'translate3d(0,0,0)'});
            _this.$tg.eq($index).find('.swiper-event3 .swiper-wrapper li span').removeClass('on')
            _this.$tg.eq($index).find('.swiper-event4 .swiper-wrapper li span').removeClass('on')
            _this.$tg.eq($index).find('.swiper-event5 .swiper-wrapper li span').removeClass('on')
            _this.$tg.eq($index).find('.swiper-event3 .swiper-wrapper li:first span').addClass('on')
            _this.$tg.eq($index).find('.swiper-event4 .swiper-wrapper li:first span').addClass('on')
            _this.$tg.eq($index).find('.swiper-event5 .swiper-wrapper li:first span').addClass('on')
            _this.$tg.eq($index).find('.arrows').hide();
            /* 2017.0l1.l16 이벤트 탭 동작 추가 */
            
            //개발용
            $(".tab_kid_con").eq($index).find("li").eq(0).click();
            //개발용
        });
    }
}
$('.tab_kid').length && tabkid.init();

/* 2018-04-11, fix */

/*애경 탭 / 더 많은 혜택정보 보기*/
var fourtimes_list = {
    init:function(){
        this.$wrap = $('.fourtimes_list');
        this.$list = this.$wrap.find('.underway li');
        this.$more = this.$wrap.find('.btn_more');
        this.$close = this.$wrap.find('.btn_close');
        this.$all_len = this.$list.length;
        
        this.addEvent();
    },
    addEvent:function(){
        var _this = this;
        var num = 4;
        var count = 1;
        if(this.$all_len <= num){
            this.$list.show();
            this.$more.hide();
        } else if(this.$all_len > num){
            this.$more.show();
            for(var i = 0; i < num; i++){
                this.$list.eq(i).show();
            }
            count++;
        }

        this.$more.on('click', function(){
            for(var i = 0; i < num*count; i++){
                _this.$list.eq(i).show();
            }
            count++;
            if(_this.$all_len <= num*(count-1)){
                _this.$more.hide();
                _this.$close.show();
            }
            checkHight.init();
        });

        this.$close.on('click', function(e){
            _this.$more.show();
            _this.$close.hide();
            count = 2;
            for(var i = _this.$all_len; num-1 < i; i--){
                _this.$list.eq(i).hide();
            }
            checkHight.init();
        });
    }    
}
$('.fourtimes_list').length && fourtimes_list.init();

/* //2018-04-11, fix */

function changeTab(t, idx){	
	
	var $tab = $(t).parent().find('button.on');
	$tab.removeClass("on");
	$(t).addClass("on");
	
	if(idx < 9){
		$('.tab_content').hide();
		$('#tab'+idx+'_1').show();	
	}else{
		idx = idx - 8;
		$('.tab_content2').hide();
		$('#tab'+idx+'_2').show();	
	}	
	
}

function tdmore(b){
	
	var $list = $(b).prev().find("li.hide");
	var row = 4;
	$list.each(function(i,data){
		if(i < 4) {
			$(this).show();
			$(this).removeClass("hide");
		}
	});
	if($list.length < 4){
		$(b).hide();
	}
}


