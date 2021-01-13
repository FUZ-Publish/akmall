var cursorPos = -1;								// 자동완성 커서 위치 값
var formName = "#searchForm";					// 검색 form의 name을 설정한다.
var queryId = "#search";						// 검색어 <input> 의 id을 설정한다
var ark_brand = "#ark_brand";								// 자동완성 전체 <div> 의 id을 설정한다
var ark_category = "#ark_category";								// 자동완성 전체 <div> 의 id을 설정한다
var ark_planshop = "#ark_planshop";								// 자동완성 전체 <div> 의 id을 설정한다
var powerDealListId = "#deal_lst";								// 자동완성 전체 <div> 의 id을 설정한다
var arkId = "#ark";								// 자동완성 전체 <div> 의 id을 설정한다
var totalFwCount = 0;							// 전방 검색 전체 개수
var isArk = true;
var transURL = "/search/ArkAjax.do";
var g_oConvert = "fw";							// 정방향, 역방향 값
var charset = "utf-8";							// 인코딩 설정 (인코딩이 utf-8이 아닐 경우 8859_1 로 설정해야함)
var datatype = "json";							// 반환받을 Data의 타입을 설정. XML 과 JSON이 가능 (xml | json)

/************************************************
 * 자동완성 결과 요청
 * @name requestArk
 * @param query 키보드 입력된 문자열
 ************************************************/
function requestArkJson(query) {
	cursorPos = -1;

	$.ajaxSetup({cache:false});
	$.ajax({
		url: transURL,
		type: "POST",
		dataType: "json",
		loading : false,
		data: {"convert":g_oConvert, "target":"common", "charset":"utf-8", "query":query, "datatype": "json"},
		success: function(data) {
			$(arkId).html("").hide();
			var str = "";
			var result = "";
			var totalCount = 0;

			if(data.result.length <= 0) {
				totalFwCount = 0;
			} else {
				result = data.result[0];
				totalCount = parseInt(result.totalcount);
			}
			
			totalFwCount = totalCount;

			if (totalCount > 0) {

				// 자동완성 리스트 설정
				$.each(result.items, function(num,item){
					var hkeyword = item.hkeyword;
					if(hkeyword.indexOf("&lt;!CS&gt;") > 0) {
						hkeyword = hkeyword.replace(/&lt;!CS&gt;/g,"<em>").replace(/&lt;!CE&gt;/g,"</em>");
					}

					hkeyword = hkeyword.replace(/&lt;!SS&gt;/g,"").replace(/&lt;!SE&gt;/g,"");
						
					str += "<li>";
					str += "<a href=\"#\" id=\"bg" + num + "\" onClick=\"javascript:onClickKeyword(" + num + "); return false;\" >" + hkeyword;
					str += "<span id=\"f" + num + "\" style=display:none;>" + item.keyword + "</span></a>";
					str += "</li>";
				});
				$(arkId).html(str).show();
			}
			
		}
    });
}

/*
■ 자동완성 브랜드 리스트 가져오기
*/
function getArkBrand(query) {
	cursorPos = -1;

	$.ajaxSetup({cache:false});
	$.ajax({
		url: transURL,
		type: "POST",
		loading : false,
		dataType: "json",
		data: {"convert":g_oConvert, "target":"brand", "charset":"utf-8", "query":query, "datatype": "json"},
		success: function(data) {
			if(data.result.length <= 0) {
				totalFwCount = 0;
			}
			$("#ark_brand").html("").hide(); 
			var str = '';
 
			var result = data.result[0];
			var totalCount = 0;
			if(result != undefined) {
				totalCount = parseInt(result.totalcount);
			}
			var maxCount = 5;

			totalFwCount = totalCount;

			if (totalCount > 0) {
				str += '<div class="brandshop_list swiper-brand">';
				str += '<ul class="swiper-wrapper">';
				// 자동완성 리스트 설정
				$.each(result.items, function(num,item){
					if(num >= maxCount){
						return false;
					}
					
					str += '<li class="swiper-slide">';
					str += "<a href=\"/display/BrandShopSClsf.do?brand_id=" + item.linkname + "\" id=\"brand_" + num + "\" >";
					str += "<span>" + item.keyword + "</span></a>";
					str += "</li>";
					
				}); 
				str += "</ul>";
				str += "</div>";
				$("#ark_brand").html(str).show();
				
				setTimeout(function() {
					swiperCate.item('swiper-brand','swiper-cate-pagination');
				}, 200);
			}
		}
    });
}
/*
	■ 자동완성 검색어 리스트 가져오기
*/
function getArkWord(query){

	jQuery.support.cors = true;

	cursorPos = -1;

	$.ajaxSetup({cache:false});
	$.ajax({
		url: transURL,
		type: "POST",
		dataType: "json",
		data: {"convert":g_oConvert, "target":"common", "charset":"utf-8", "query":query, "datatype": "json"},
		//data: {"convert":g_oConvert, "target":$("#arkTarget").val(), "charset":charset, "query":query, "datatype": datatype},

		success: function(data) {
			var result = "";
			var totalCount = 0;

			if(data.result.length <= 0) {
				totalFwCount = 0;
			} else {
				result = data.result[0];
				totalCount = parseInt(result.totalcount);
			}

			var str = "";

			if (totalCount > 0) {
				totalFwCount = totalCount;

				if(totalCount > 5){
					totalFwCount = 10;
				}
				/*str += "<ul id=\"searchSlide\" class=\"search_ul swiper-wrapper\">";*/
				// 자동완성 리스트 설정
				$.each(result.items, function(num,item){
					var hkeyword = item.hkeyword;
					if(hkeyword.indexOf("&lt;!CS&gt;") > 0) {
						hkeyword = hkeyword.replace(/&lt;!CS&gt;/g,"<em>").replace(/&lt;!CE&gt;/g,"</em>");
					}

					hkeyword = hkeyword.replace(/&lt;!SS&gt;/g,"").replace(/&lt;!SE&gt;/g,"");
					
					str += "<a href=\"javascript:;\" class=\"swiper-slide\"><span id=\"bg" + num + "\" onclick=\"onClickKeyword2('" + item.keyword + "');\" >#" + item.keyword + "</span></a>";

				}); // end, each
				
				
				$("#div_ark_word").html(str);
				$("#div_ark_word").parent().show();
				
				setTimeout(function() { 
					swiperCate.item('swiper-Search','swiper-cate-pagination');
				}, 200);
			}

		} // end, success

	});

}


function getArkCategory(query) {
	$.ajax({
		url: transURL,
		type: "POST",
		dataType: "json",
		loading : false,
		data: {"convert":g_oConvert, "target":"category", "charset":charset, "query":query, "datatype": datatype},
		success: function(data) {
			
			$(ark_category).html("").hide();
			var str = "";
			var result = "";
			var totalCount = 0;

			if(data.result.length <= 0) {
				totalFwCount = 0;
			} else {
				result = data.result[0];
				totalCount = parseInt(result.totalcount);
			}
			
			totalFwCount = totalCount;

			if (totalCount > 0) {

				// 자동완성 리스트 설정
				$.each(result.items, function(num,item){
					if(num < 2) {
						var hkeyword = item.hkeyword;
						if(hkeyword.indexOf("&lt;!CS&gt;") > 0) {
							hkeyword = hkeyword.replace(/&lt;!CS&gt;/g,"<em>").replace(/&lt;!CE&gt;/g,"</em>");
						}

						hkeyword = hkeyword.replace(/&lt;!SS&gt;/g,"").replace(/&lt;!SE&gt;/g,"");

						str += "<li>";
						str += "<a href=\"" + item.linkname + "\" ><em>카테고리</em>" + hkeyword;
						str += "<span id=\"arkcate" + num + "\" style=display:none;>" + item.keyword + "</span></a>";
						str += "</li>";
					}
				});
			} 
			
			$(ark_category).html(str);
			//카테고리, 이벤트 검색결과 합쳐짐
			getArkEvent(query);
		}
    });

}

function getArkEvent(query){
	$.ajax({
		url: transURL,
		type: "POST",
		dataType: "json",
		loading : false,
		data: {"convert":g_oConvert, "target":"event", "charset":charset, "query":query, "datatype": datatype},
		success: function(data) {
			
			var str = "";
			var result = "";
			var totalCount = 0;

			if(data.result.length <= 0) {
				totalFwCount = 0;
			} else {
				result = data.result[0];
				totalCount = parseInt(result.totalcount);
			}
			
			$("#ark_category .event").remove();
			
			totalFwCount = totalCount;
			if (totalCount > 0) {
				// 자동완성 리스트 설정
				$.each(result.items, function(num,item){
					if(num < 2) {
						var hkeyword = item.hkeyword;
						if(hkeyword.indexOf("&lt;!CS&gt;") > 0) {
							hkeyword = hkeyword.replace(/&lt;!CS&gt;/g,"<em>").replace(/&lt;!CE&gt;/g,"</em>");
						}

						hkeyword = hkeyword.replace(/&lt;!SS&gt;/g,"").replace(/&lt;!SE&gt;/g,"");
						str += "<li class='event'>";
						str += "<a href=\"#\"  onclick=\"javascript:goShopEvent('" + item.linkname + "'); return false;\" ><em>기획전</em>" + hkeyword;
						str += "<span style=display:none;>" + item.keyword + "</span></a>";
						str += "</li>";
					}
				});
				//카테고리, 이벤트 검색결과 합쳐짐
				$("#ark_category").append(str);
			} 
			if($("#ark_category li").length > 0) {
				$("#ark_category").show();
			}
			
		}
    });
}

function getArkPowerdeal(query) {

	$.ajax({
		url: transURL,
		type: "POST",
		dataType: "json",
		data: {"convert":g_oConvert, "target":"powerdeal", "charset":charset, "query":query, "datatype": datatype},
		success: function(data) {
			var result = "";
			var totalCount = 0;

			if(data.result.length <= 0) {
				totalPowerFwCount = 0;
			} else {
				result = data.result[0];
				totalCount = parseInt(result.totalcount);
			}

			var str = "";

			totalPowerFwCount = 0;
			if (totalCount > 0) {
				str += "<div class=\"event\"><h3>파워딜</h3>";
				str += "<ul class=\"sch_lst2\">";
				$.each(result.items, function(num,item){
					if(num <= 1){
						var hkeyword = item.hkeyword;
						if(hkeyword.indexOf("&lt;!CS&gt;") > 0) {
							hkeyword = hkeyword.replace(/&lt;!CS&gt;/g,"<em>").replace(/&lt;!CE&gt;/g,"</em>");
						}

						hkeyword = hkeyword.replace(/&lt;!SS&gt;/g,"").replace(/&lt;!SE&gt;/g,"");

						str += "<li>";
						str += "<a href=\"" + item.linkname + "\" id=\"arkpower" + (num+totalFwCount) + "\" name=\"" + item.linkname + "\">" + hkeyword;
						str += "<span id=\"ark_power" + (num+totalFwCount) + "\" style=display:none;>" + item.keyword + "</span></a>";
						str += "</li>";

						totalPowerFwCount++;
					}
				});

				str += "</ul>";
				str += "</div>";
			}

			if (totalPowerFwCount == 0) {
				$(powerDealListId).html("");
			} else {
				$(powerDealListId).html(str);
			}

			//showArk();
		}
    });
}

/************************************************
 * 검색 결과 연관키워드 조회
 * @name getKeywordJson
 * @param query 입력된 문자열
 ************************************************/
function getKeywordJson(query) {
	cursorPos = -1;

	$.ajaxSetup({cache:false});
	$.ajax({
		url: transURL,
		type: "POST",
		dataType: "json",
		data: {"convert":g_oConvert, "target":"common", "charset":"utf-8", "query":query, "datatype": "json"},
		success: function(data) {
			
			var str = "<ul class=\"img swiper-wrapper\">";
			var result = "";
			var totalCount = 0;

			if(data.result.length <= 0) {
				totalFwCount = 0;
			} else {
				result = data.result[0];
				totalCount = parseInt(result.totalcount);
			}
			
			totalFwCount = totalCount;

			if (totalCount > 0) {

				// 자동완성 리스트 설정
				$.each(result.items, function(num,item){
						var hkeyword = item.hkeyword;
						if(hkeyword.indexOf("&lt;!CS&gt;") > 0) {
							hkeyword = hkeyword.replace(/&lt;!CS&gt;/g,"<em>").replace(/&lt;!CE&gt;/g,"</em>");
						}
						hkeyword = hkeyword.replace(/&lt;!SS&gt;/g,"").replace(/&lt;!SE&gt;/g,"");
						if(query != item.keyword) {
							str += "<li  class=\"swiper-slide\" style=\"background: url(http://photo.akmall.com/image3/goods/73/91/31/23/73913123_M_170.jpg) no-repeat; width: 86px;background-size: 80px;\">";
							str += "<span>" + item.keyword + "</span><div class=\"gray\"></div>";
							str += "</li>";
						}
				});

			} else {
				str += "<li><a>해당 단어로 시작하는 검색어가 없습니다.</a></li>";
			}


			str += "</ul>";

			$(".img_keyword").html(str);
			var navSwiper = $('.img_keyword').swiper({
				visibilityFullFit : true,
				slidesPerView : 'auto',
				calculateHeight : false,
				onSlideClick : function(swiper) {
					contentSwiper.swipeTo(swiper.clickedSlideIndex);
				}
			});
		}
    });
}
/************************************************
 * 마우스 클릭시 검색을 수행
 * @name onClickKeyword
 * @param cursorPos 커서의 위치
 ************************************************/
function onClickKeyword(cursorPos) {
	getMyKeyword($("#f" + cursorPos).text());
	reset();
    $(queryId).val($("#f" + cursorPos).text());
    $(formName).attr("onsubmit","return true;");
    $(formName).submit();
}

/************************************************
 * 마우스 클릭시 검색을 수행
 * @name onClickKeyword
 * @param cursorPos 커서의 위치
 ************************************************/
function onClickKeyword2(query) {
	reset();
    $(queryId).val(query);
    $(formName).attr("onsubmit","return true;");
    $(formName).submit();
}

