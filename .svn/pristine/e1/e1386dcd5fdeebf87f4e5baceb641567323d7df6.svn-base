var searchPageNum = 0;

/**
 * 인기검색어 Ajax
 */
function getPopkeyword() {
	var target		= "popword";
	var range		= "D";
	var collection  = "MOB";
    var datatype   = "xml";
	$.ajax({
	  type: "POST",
	  url: "/search/PopwordAjax.do",
	  dataType: "xml",
	  data: { "target" : target, "range" : range, "collection" : collection , "datatype" : datatype },
	  success: function(xml) {

		var str = "<ol class=\"search_list sch_list searchTabContent searchTabContent2\">";

		$(xml).find("Query").each(function(){

			str += "<li>";;
			str += "<i>"+$(this).attr("id") +"</i><a href='#' onClick=\"javascript:doKeyword('" + $(this).text() + "'); return false;\">" + $(this).text() + "</a>";
			str += "</li>";

		});
		
		str += "</ol>";

		$("#popKeyword").html(str);
	  },
	  error : function () {
		  console.log(arguments);
	  } 
	});

}

//인기검색어, 내가 찾은 검색어로 검색
function doKeyword(query) {
	getMyKeyword(query);
	reset();
	$("#search").val(query);
	$("#searchForm").attr("onsubmit","return true;");
    $("#searchForm").submit();
}

// 쿠키 값 조회
function getCookieForMyKeyword(c_name) {
	var i,x,y,cookies=document.cookie.split(";");
	for (i=0;i<cookies.length;i++) {
		x=cookies[i].substr(0,cookies[i].indexOf("="));
		y=cookies[i].substr(cookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");

		if (x==c_name) {
			return unescape(y);
		}
	}
}

// 쿠키값 설정
function setCookieForMyKeyword(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; path=/; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

// 내가 찾은 검색어 조회
function getMyKeyword(keyword, totCount) {
	var MYKEYWORD_COUNT = 11; //내가 찾은 검색어 갯수 + 1
	var myKeyword = getCookieForMyKeyword("mykeyword");
	if( myKeyword== null) {
		myKeyword = "";
	}

	var myKeywords = myKeyword.split("^%");

	if( totCount > 0 ) {
		var existsKeyword = false;
		for( var i = 0; i < myKeywords.length; i++) {
			if( myKeywords[i] == keyword) {
				existsKeyword = true;
				break;
			}
		}

		if( !existsKeyword ) {
			myKeywords.push(keyword);
			if( myKeywords.length == MYKEYWORD_COUNT) {
				myKeywords = myKeywords.slice(1,MYKEYWORD_COUNT);
			}
		}
		setCookieForMyKeyword("mykeyword", myKeywords.join("^%"), 365);
	}

}

// 내가 찾은 검색어 삭제
/*function removeMyKeyword() {
	var myKeyword = getCookieForMyKeyword("mykeyword");
	if( myKeyword == null) {
		myKeyword = "";
	}

	var myKeywords = myKeyword.split("^%");
	myKeywords.splice(0, myKeywords.length);

	setCookieForMyKeyword("mykeyword", myKeywords.join("^%"), 365);

	showMyKeyword(myKeywords.reverse());
}*/

//내가 찾은 검색어 삭제
function removeMyKeyword(keyword) {
	var myKeyword = getCookieForMyKeyword("mykeyword");
	if( myKeyword == null) {
		myKeyword = "";
	}
	if(typeof(keyword) != "undefined" && keyword.length > 0) { //단일 삭제
		myKeyword = myKeyword.replace("^%"+keyword, "");
		var myKeywords = myKeyword.split("^%");
		setCookieForMyKeyword("mykeyword", myKeywords.join("^%"), 365);
	} else { //전체 삭제
		var myKeywords = myKeyword.split("^%");
		myKeywords.splice(0, myKeywords.length);
		setCookieForMyKeyword("mykeyword", myKeywords.join("^%"), 365);
		$("#mykeywordNoList").show();
	}
	var myKeywordChk = getCookieForMyKeyword("mykeyword");
	if(myKeywordChk == null || myKeywordChk == ""){
		$("#mykeywordNoList").show();
	}
	
	showMyKeyword(myKeywords.reverse());
}


//내가 찾은 검색어
function showMyKeyword(myKeywords) {
	var str = "<ul class=\"sch_list search_list\">";

	var count = 0;
	for( var i = 0; i < myKeywords.length; i++) {
		if( myKeywords[i] == "") continue;

		str += "<li><a href=\"#\" onClick=\"javascript:doKeyword('"+myKeywords[i]+"'); return false;\">"+myKeywords[i]+"</a>";
		str += "<span class=\"day\"><button onclick=\"removeMyKeyword('" + myKeywords[i] + "');\"><em class=\"blind\">삭제</em></button></span></li>";
		count ++;
	}
	
	str += "<div class=\"btn_search\"><button class=\"bttn all_del\" onclick=\"javascript:removeMyKeyword(); return false;\">검색기록 전체삭제</button></div>";
	str += "</ul>";

	if(count > 0){
		$("#mykeywordList").html(str);
		$("#mykeywordNoList").html("");
	} else {
		$("#mykeywordList").html("");
		$("#mykeywordNoList").html("<strong>최근 검색어가 없습니다.</strong>");
	}
}

// 내가 찾은 검색어 보기
function showKeyword() {
	var myKeyword = getCookieForMyKeyword("mykeyword");
	if( myKeyword == null) {
		myKeyword = "";
	}
	var myKeywords = myKeyword.split("^%");
	showMyKeyword(myKeywords.reverse());
}

// 오타 조회
function getSpell(query) {
	$.ajax({
	  type: "POST",
	  url: "./popword/popword.jsp?target=spell&charset=",
	  dataType: "xml",
	  data: {"query" : query},
	  success: function(xml) {
		if(parseInt($(xml).find("Return").text()) > 0) {
			var str = "<div class=\"resultall\">";

			$(xml).find("Data").each(function(){
				if ($(xml).find("Word").text() != "0" && $(xml).find("Word").text() != query) {
					str += "<span>이것을 찾으셨나요? </span><a href=\"#none\" onClick=\"javascript:doKeyword('"+$(xml).find("Word").text()+"');\">" + $(xml).find("Word").text() + "</a>";
				}
			});

			str += "</div>";

			$("#spell").html(str);
		}
	  }
	});

	return true;
}

// 기간 설정
function setDate(range) {
	var startDate = "";
	var endDate = "";

	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth() +1;
	var day = currentDate.getDate();

	if (parseInt(month) < 10) {
		month = "0" + month;
	}

	if (parseInt(day) < 10) {
		day = "0" + day;
	}

	var toDate = year + "." + month + "." + day;

	// 기간 버튼 이미지 초기화
	for (i = 1;i < 5 ;i++) {
		$("#range"+i).attr ("src", "images/btn_term" + i + ".gif");
	}

	// 기간 버튼 이미지 선택
	if (range == "D") {
		startDate = getAddDay(currentDate, -0);
		$("#range2").attr ("src", "images/btn_term22.gif");
	} else if (range == "W") {
		startDate = getAddDay(currentDate, -6);
		$("#range3").attr ("src", "images/btn_term32.gif");
	} else if (range == "M") {
		startDate = getAddDay(currentDate, -29);
		$("#range4").attr ("src", "images/btn_term42.gif");
	} else {
		startDate = "1970.01.01";
		endDate = toDate;
		$("#range1").attr ("src", "images/btn_term12.gif");
	}

	if (range != "A" && startDate != "") {
		year = startDate.getFullYear();
		month = startDate.getMonth()+1;
		day = startDate.getDate();

		if (parseInt(month) < 10) {
			month = "0" + month;
		}

		if (parseInt(day) < 10) {
			day = "0" + day;
		}

		startDate = year + "." + month + "." + day;
		endDate = toDate;
	}

	$("#range").val(range);
	$("#startDate").val(startDate);
	$("#endDate").val(endDate);
}

// 날짜 계산
function getAddDay ( targetDate, dayPrefix )
{
	var newDate = new Date( );
	var processTime = targetDate.getTime ( ) + ( parseInt ( dayPrefix ) * 24 * 60 * 60 * 1000 );
	newDate.setTime ( processTime );
	return newDate;
}

// 정렬
function doSorting(sort) {
	var searchForm = document.searchForm;
	searchForm.sort.value = sort;
	searchForm.reQuery.value = "2";
	
	var temp_categoryId = searchForm.categoryId.value;
	searchForm.categoryId.value = temp_categoryId.replace(/;/g, '^');
	
	searchForm.submit();
}

// 검색
function doSearch() {
	if(eventKeyword()){
		reset();
		$("#reQuery").val("");
		
		document.searchForm.brand.value = "";
		document.searchForm.submit();
	} 
}

//조건 검색
function doSearchFormSubmit() {
	$("#categoryId").val($("#categoryId").val().replace(/;/g, '^'));
	document.searchForm.submit();
}

//키워드검색
function eventKeyword() {
	if(typeof(document.searchForm.search.value) != "undefiend") {
		var keyword = document.searchForm.search.value;
		var currentDate = new Date();
		var year = currentDate.getFullYear();
		var month = currentDate.getMonth()+1;
		var day = currentDate.getDate();
		if (parseInt(month) < 10) {
			month = "0" + month;
		}
		if (parseInt(day) < 10) {
			day = "0" + day;
		}
		var toDate = year + "." + month + "." + day;
		
		if(keyword == "하나쿠폰"){
				var startDate = "2017.10.01";
				var endDate = "2017.12.31";
				var startDate2 = "2018.01.01";
				var endDate2 = "2018.03.31";
				if((compareStringNum(startDate,toDate, "."))&&(compareStringNum(toDate,endDate, ".")))
				{
					location.href="/event/EventDetail.do?no=1014414";
					return false;
				}
				else if((compareStringNum(startDate2,toDate, "."))&&(compareStringNum(toDate,endDate2, ".")))
				{
					location.href="/event/EventDetail.do?no=1015468";
					return false;
				}
		}else if(keyword == "하나멤버스"){			
				var startDate = "2017.10.01";
				var endDate = "2017.12.31";
				var startDate2 = "2018.01.01";
				var endDate2 = "2018.03.31";
				if((compareStringNum(startDate,toDate, "."))&&(compareStringNum(toDate,endDate, ".")))
				{
					location.href="/event/EventDetail.do?no=1014415";
					return false;
				}				
				else if((compareStringNum(startDate2,toDate, "."))&&(compareStringNum(toDate,endDate2, ".")))
				{
					location.href="/event/EventDetail.do?no=1015467";
					return false;
				}
		}else if(keyword == "리브메이트" || keyword == "리브 메이트" || keyword == "리브" || keyword == "메이트" || keyword == "LIIV Mate"){
			var startDate = "2017.09.01";
			var endDate = "2017.12.31";
			if((compareStringNum(startDate,toDate, "."))&&(compareStringNum(toDate,endDate, ".")))
			{				
				location.href="/event/EventDetail.do?no=1013995";
				return false;
			}			
		}else if(keyword == "미녀와 야수"){
			var startDate = "2017.03.10";
			var endDate = "2017.03.26";
			if((compareStringNum(startDate,toDate, "."))&&(compareStringNum(toDate,endDate, ".")))
			{				
				location.href="/planshop/PlanShopView.do?shop_event_id=1011716";
				return false;
			}		
		}else if(keyword == "농협쿠폰" || keyword == "농협 쿠폰"){
			if($("#siteCode").val() ==  "MOB"){
				var startDate = "2018.01.04";
				var endDate = "2018.12.31";
				if((compareStringNum(startDate,toDate, "."))&&(compareStringNum(toDate,endDate, ".")))
				{				
					location.href="/event/EventDetail.do?no=1012032";
					return false;
				}					
			}
		}else if(keyword == "셀렉토커피"||keyword == "셀렉토 커피"||keyword == "SELECTO COFFEE"){
			if($("#siteCode").val() ==  "MOB"){
				var startDate = "2017.08.07";
				//var endDate = "2017.12.31";
				if(compareStringNum(startDate,toDate, "."))
				{				
					location.href="/event/EventDetail.do?no=1013578";
					return false;
				}					
			}
		}else if(keyword == "잘하고있어"||keyword == "잘하고 있어"||keyword == "잘 하고 있어"||keyword == "잘하고있어!"){
			if($("#siteCode").val() ==  "MOB"){
				var startDate = "2017.08.07";
				//var endDate = "2017.12.31";
				if(compareStringNum(startDate,toDate, "."))
				{				
					location.href="/event/EventDetail.do?no=1013579";
					return false;
				}					
			}
		}else if(keyword == "북킹페스티벌"||keyword == "북킹페스티발"){
			if($("#siteCode").val() ==  "MFDS"){
				var startDate = "2017.11.16";
				var endDate = "2017.11.30";
				if(compareStringNum(startDate,toDate, "."))
				{				
					location.href="/event/EventDetail.do?no=1014846";
					return false;
				}					
			}
		}
	}
	return true;
}

//검색
function doSearchMain() {
	resetSearchMain();
	resetMainCondition();
	document.searchMainForm.submit();
}

// 초기화
function reset() {
	var searchForm = document.searchForm;

	searchForm.collection.value = "ALL";
	searchForm.startDate.value = "";
	searchForm.endDate.value = "";
	searchForm.range.value = "A";
	searchForm.startCount.value = 0;
	searchForm.searchField.value = "ALL";
	searchForm.sort.value = "RANK/DESC";
	searchForm.categoryDepth.value = "";
	searchForm.categoryId.value = "";
	searchForm.categoryName.value = "";
	searchForm.brandMore.value = "";
	searchForm.brand.value = "";
	searchPageNum = 0;
}

//초기화
function resetSearch() {
	var searchForm = document.searchForm;

	searchForm.collection.value = "ALL";
	searchForm.startDate.value = "";
	searchForm.endDate.value = "";
	searchForm.range.value = "A";
	searchForm.startCount.value = 0;
	searchForm.searchField.value = "ALL";
	searchForm.sort.value = "RANK/DESC";
	searchForm.categoryDepth.value = "";
	searchForm.categoryName.value = "";
	searchForm.categoryId.value = "";
	searchForm.minPrice.value = "";
	searchForm.maxPrice.value = "";
	searchForm.minRangePrice.value = "";
	searchForm.maxRangePrice.value = "";
	searchForm.brand.value = "";
	searchForm.brandMore.value = "";
	searchForm.showQuery.value = "";
	searchForm.realQuery.value = "";
	
	//초기 검색어 입력
	var names = [];
	
	if($("#search").val() != ''){
		
		var reSearchVal = $("#search").val();
		var reSearchVals = reSearchVal.split(",");
		
		
		for(var s=0; s< reSearchVals.length; s++) {
			
			if(reSearchVals[0] == reSearchVals[s]){
				names.push(reSearchVals[s]); 
			}				
		}
	}
	
	$("#search").val(names);
	
	searchPageNum = 0;
	
	searchForm.submit();
}

//초기화
function resetSearchChanel() {
	var searchForm = document.searchForm;

	var searchForm = document.searchChanelForm;

	searchForm.collection.value = "goods_chanel";
	searchForm.startDate.value = "";
	searchForm.endDate.value = "";
	searchForm.range.value = "A";
	searchForm.searchField.value = "ALL";
	//searchForm.sort.value = "RECOM_CNT/DESC";
	searchForm.sort.value = "";
	searchForm.categoryDepth.value = "2";
	searchForm.showQuery.value = "샤넬";
	searchForm.realQuery.value = "";
	searchForm.categoryId.value = "200202";
	searchForm.categoryName.value = "";
	
	//초기 검색어 입력
	var names = [];
	
	if($("#search").val() != ''){
		
		var reSearchVal = $("#search").val();
		var reSearchVals = reSearchVal.split(",");
		
		
		for(var s=0; s< reSearchVals.length; s++) {
			
			if(reSearchVals[0] == reSearchVals[s]){
				names.push(reSearchVals[s]); 
			}				
		}
	}
	
	$("#search").val(names);
	
	searchPageNum = 0;
	
	searchChanelForm.submit();
}

//초기화
function resetSearchMain() {
	var searchForm = document.searchForm;

	searchForm.collection.value = "ALL";
	searchForm.range.value = "A";
	searchForm.startCount.value = 0;
}

// 컬렉션별 검색
function doCollection(coll) {
	var searchForm = document.searchForm;
	searchForm.collection.value = coll;
	searchForm.reQuery.value = "2";
	searchPageNum = 0;
	searchForm.submit();
}

//검색조건 초기화(header부분 form)
function resetMainCondition(){
	var searchForm = document.searchForm;

//	searchForm.sort.value = "RANK/DESC";
	searchForm.sort.value = "";
	searchForm.categoryDepth.value = "";
	searchForm.categoryId.value = "";
}

//초기화
function resetChanel() {
	var searchForm = document.searchChanelForm;

	searchForm.collection.value = "goods_chanel";
	searchForm.startDate.value = "";
	searchForm.endDate.value = "";
	searchForm.range.value = "A";
	searchForm.searchField.value = "ALL";
	//searchForm.sort.value = "RECOM_CNT/DESC";
	searchForm.sort.value = "";
	searchForm.categoryDepth.value = "2";
//	searchForm.categoryId.value = "200202";
}

// 엔터 체크
function pressCheck() {
	if (event.keyCode == 13) {
		return true;
	}else{
		return false;
	}
}

//검색어 체크
function hasQuery() {
	if($("#search").val() == "") {
		alert("검색어를 입력해 주시기 바랍니다.");
		return false;
	} else {
		return true;
	}
}

var temp_query = "";

//결과내 재검색
function checkReSearch() {
	if ($("#chk1").is(":checked") == true) {
		//temp_query = $("#search").val();
		$("#reQuery").val(1);
		//$("#search").val("");
		//$("#search").focus();
		$("#chk1").addClass("on");
		$("#chk2").removeClass("on");
	} else {
		//$("#search").val(trim(temp_query));
		$("#reQuery").val("");
		temp_query = "";
		$("#chk1").removeClass("on");

	}
}

var temp_query2 = "";

//검색어제외
function exceptReSearch() {
	if ($("#chk2").is(":checked") == true) {
		///temp_query2 = $("#search").val();
		$("#reQuery").val(11);
		//$("#search").val("");
		//$("#search").focus();
		$("#chk2").addClass("on");
		$("#chk1").removeClass("on");
	} else {
		//$("#search").val(trim(temp_query2));
		$("#reQuery").val("");
		temp_query2 = "";
		$("#chk2").removeClass("on");
	}
}

// 페이징
function doPaging(count) {
	var searchForm = document.searchForm;
	searchForm.startCount.value = count;
	searchForm.reQuery.value = "2";
	searchForm.submit();
}

// 기간 적용
function doRange() {
	var searchForm = document.searchForm;

	if($("#startDate").val() != "" || $("#endDate").val() != "") {
		if($("#startDate").val() == "") {
			alert("시작일을 입력하세요.");
			$("#startDate").focus();
			return;
		}

		if($("#endDate").val() == "") {
			alert("종료일을 입력하세요.");
			$("#endDate").focus();
			return;
		}

		if(!compareStringNum($("#startDate").val(), $("#endDate").val(), ".")) {
			alert("기간이 올바르지 않습니다. 시작일이 종료일보다 작거나 같도록 하세요.");
			$("#startDate").focus();
			return;
		}
	}

	searchForm.startDate.value = $("#startDate").val();
	searchForm.endDate.value = $("#endDate").val();
	searchForm.range.value = $("#range").val();
	searchForm.reQuery.value = "2";
	searchForm.submit();
}

// 영역
function doSearchField(field) {
	searchPageNum = 0;
	var searchForm = document.searchForm;
	searchForm.searchField.value = field;
	searchForm.reQuery.value = "2";
	searchForm.submit();
}

// 문자열 숫자 비교
function compareStringNum(str1, str2, repStr) {
	var num1 =  parseInt(replaceAll(str1, repStr, ""));
	var num2 = parseInt(replaceAll(str2, repStr, ""));

	if (num1 > num2) {
		return false;
	} else {
		return true;
	}
}

// Replace All
function replaceAll(str, orgStr, repStr) {
	return str.split(orgStr).join(repStr);
}

// 공백 제거
function trim(str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

//조건검색
function doSearchByConditions(field, value) {
	searchPageNum = 0;
	$("#"+field).val(value);
	$("#reQuery").val(2);
	$("#searchForm").submit();
}

/*function categorySearch(cateid, depth) {
	var catedepth = Number(depth);
	var searchForm = document.searchForm;
	searchForm.depth.value = catedepth+1;
	searchForm.category.value = cateid;
	searchForm.reQuery.value = "2";
	searchForm.submit();
}*/

//카테고리 검색
function doSearchByCategory(depth, id) {
	searchPageNum = 0;
	$("#categoryDepth").val(depth);
	$("#categoryId").val(id.replace(/;/g, '^'));
	$("#reQuery").val(2);
	$("#searchForm").attr("onsubmit","return true;");
	$("#searchForm").submit();
}

//카테고리 검색
function doSearchChanelByCategory(depth, id) {
	searchPageNum = 0;
	$("#categoryDepth").val(depth);
	$("#categoryId").val(id.replace(/;/g, '^'));
	$("#reQuery").val(2);
	$("#searchChanelForm").attr("onsubmit","return true;");
	$("#searchChanelForm").submit();
}

//결과정렬 버튼 셋팅
function setSortBtn() {
	var sort = $("#sort").val();

	$("#search_sort").find("option").each(function(){
		var btn = $(this).val();

		if(sort == btn)
			$(this).attr("selected","selected");
	});
}

//이미지보기, 리스트 보기 셋팅
function setViewType(moreBtn) {
	searchPageNum = 0;					// 페이지 번호 초기화

	var viewType = $("#viewType").val();
	var viewTypes = $(".view_type > li");

	if(viewType == "list_type"){
		$("#sch_more").html(moreBtn);	// 더보기 버튼 초기화
		$("#sch_btn_more").show();		// 더보기 버튼 보이기
		$("#sch_prod_list2").html("");	// 다른 뷰 초기화
	}else if(viewType == "img_type"){
		$("#sch_more2").html(moreBtn);	// 더보기 버튼 초기화
		$("#sch_btn_more2").show();		// 더보기 버튼 보이기
		$("#sch_prod_list").html("");	// 다른 뷰 초기화
	}else if(viewType == "chanel"){
		$("#sch_more2").html(moreBtn);	// 더보기 버튼 초기화
		$("#sch_btn_more2").show();		// 더보기 버튼 보이기
		$("#sch_prod_list").html("");	// 다른 뷰 초기화
	}else {
		$("#sch_more").html(moreBtn);	// 더보기 버튼 초기화
		$("#sch_prod_list").html("");	// 다른 뷰 초기화(리스트보기)
		$("#sch_prod_list2").html("");	// 다른 뷰 초기화(이미지보기)
	}

	// 버튼 이미지 셋팅
	$(viewTypes).each(function(i){
		var type = $(this).find("button").attr("value");

		if(viewType == type) {
			$(this).children().addClass("on");
		} else {
			$(this).children().removeClass("on");
		}
	});

	// 결과 페이지 셋팅
	$(".result_view_type").each(function(){
		var type = $(this).attr("id");

		if(viewType == type) {
			$("#"+type).show();
		} else {
			$("#"+type).hide();
		}
	});

}

function addToHistory( num )
{
//	history.replaceState({num : num}, "search", location.href);
//	window.location.hash = num;
}

function getParams(param) {
    var params = {};
    param.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}

function getPageLinks(param, PageNum) {
	searchPageNum = searchPageNum + 1;
	var onload = document.getElementById("onload").value;
	
	var params = getParams(param);
	var mobileKind = params.mobileKind;

	//console.log("getPageLinks in @@@@@@@@");
	//console.log("param = " + param);
	//console.log("mobileKind = " + mobileKind);
	//console.log(arguments);
	
	//로그인여부를 loginYn 할당
	var loginYn = false;
	if($("#loginYn").length > 0) {
		loginYn = $("#loginYn").val();
	}
	
	if($("#movePage").val() == 60 && $("#viewType").val() == "list_type"){
		searchPageNum = 1;
	}
	if($("#movePage2").val() == 60 && $("#viewType").val() == "img_type"){
		searchPageNum = 1;
	}
	if($("#movePage3").val() == 60 && $("#viewType").val() == "thumb_type"){
		searchPageNum = 1;
	}
	$.ajax({
		url: "/search/PagingAjax.do",
		type: "POST",
		dataType: "json",
		data: param + "&searchPageNum=" + searchPageNum + "&PageNum=" + PageNum,
		success: function(data) {
			
			var result = data.SearchQueryResult.Collection[0].DocumentSet;

			var count = 0;
			if(onload == "N"){
				var count = parseInt(searchPageNum*60)+parseInt(result.Count);
				addToHistory(searchPageNum + 1);
			}else if(onload == "Y"){
				var count = parseInt(result.Count);
				addToHistory(PageNum);
			}
		
			var totalCount = parseInt(result.TotalCount);
			var goodsList = "";

			var viewId = "#result_view_type";
			var otherViewId = "#result_view_type";
			var btnId = "#sch_btn_more";
			var btnTextId = "#sch_more";
			
			var BENEFIT = "";
			var NOINT_YN = "";
			var COUPON = "";
			var BENEFIT_APPLY_PRICE = "";
			var CARD_INFO = "";

			if($("#viewType").val() == "list_type"){
				
				$("#movePage").remove();
				$.each(result.Document, function(num,goodInfo){
					var good = goodInfo.Field;

					good.GOODS_NAME = good.GOODS_NAME.replace(/<!HS>/,"<font color=#e20167>").replace(/<!HE>/,"</font>");
					var buyAgeCode = good.DTL_DESC.split(":")[2];
					var goodsImgPath = getImagePath(170, good.GOODS_ID, buyAgeCode);
					var sizeCode = 170;
					
					// 매체별 가격 세팅
					BENEFIT             = good.BENEFIT;
					NOINT_YN            = good.NOINT_YN;
					COUPON              = good.COUPON;
					BENEFIT_APPLY_PRICE = good.BENEFIT_APPLY_PRICE;
					CARD_INFO           = good.CARD_INFO;

					if(mobileKind == "10"){

						BENEFIT             = good.BENEFIT_MA;
						NOINT_YN            = good.NOINT_YN_MA;
						COUPON              = good.COUPON_MA;
						BENEFIT_APPLY_PRICE = good.BENEFIT_APPLY_PRICE_MA;
						CARD_INFO           = good.CARD_INFO_MA;

					}else if(mobileKind == "20"){

						BENEFIT             = good.BENEFIT_MW;
						NOINT_YN            = good.NOINT_YN_MW;
						COUPON              = good.COUPON_MW;
						BENEFIT_APPLY_PRICE = good.BENEFIT_APPLY_PRICE_MW;
						CARD_INFO           = good.CARD_INFO_MW;

					}

					goodsList += "<li>";
					goodsList += "<div class=\"item_box\">";
					goodsList += "<span class=\"img_area\">";
					goodsList += "<a href=\"javascript:goods_detail(" + good.GOODS_ID + ")\">";
					goodsList += "<img src=\"" + goodsImgPath + "\" alt=\"%" + good.GOODS_NAME + "%\" onerror=\"noImage("+this+", "+sizeCode+");\">";
					goodsList += "</a>";
					goodsList += "<button class=\"btn_open\"><em class=\"blind\">메뉴</em></button>";
					goodsList += "<span class=\"zzim_" + good.GOODS_ID + "\">";
					goodsList += "<button class=\"btn_close\"><em class=\"blind\">닫기</em></button>";
					goodsList += "<button class=\"btn_share btn_layer_share\" onclick=\"openShareLayer('/goods/pSnsShare.do?goods_id=" + good.GOODS_ID + "', '" + good.GOODS_ID + "' ); return false;\"><em class=\"blind\">공유하기</em></button>";
					
					goodsList += "<button class=\"btn_pick btn_wish_open\" onclick=\"pWishInpt('/goods/pWishInptAjax.do','" + good.GOODS_ID + "')\"><em class=\"blind\">찜</em></button>";
					goodsList += "<button class=\"btn_cart\"  onclick=\"checkShoopingCart(" + good.GOODS_ID + ");\"><em class=\"blind\">장바구니담기</em></button>";
					goodsList += "</span>";
					goodsList += "</span>";
					
					
					goodsList += "<a href=\"javascript:goods_detail(" + good.GOODS_ID + ")\"  class=\"link_area\">";
					goodsList += "<div class=\"link_inner\">";
					
					if(good.AKPLAZA_YN == 'Y'){
					
						goodsList += "<span class=\"flag\">";
						goodsList += "<c:set var=\"vender_name\" value=\"${VENDOR_NAME}\"/>";
						if(good.LAUNCH_YN == 'N'){
							goodsList += "<em class=\"selectshop\">AK 온라인전용</em>";
						}else{
							goodsList += "<em class=\"akplaza\">"+ getPlazaName2(good.VENDOR_NAME) +"</em> ";
							if(good.SMART_PICK_YN == 'Y'){
								goodsList += "<em class=\"pick\"></em>";
							}
						
						}
						goodsList += "</span>";
					}
					
					goodsList += "<strong>" + good.GOODS_NAME + "</strong>";
					
					if(good.GOODS_KIND_CODE == "009" || good.GOODS_KIND_CODE == "010"){
						goodsList += "<div class=\"rental\">";
						
						if(good.GOODS_KIND_CODE == "009"){
							goodsList += "<p><span class=\"sbj\">렌탈료</span>";
							goodsList += "<span>" + comma(good.RENTAL_MONTH_PRICE) + "</span></p>";
						}
						if(good.GOODS_KIND_CODE == "010"){
							if(good.SALE_PRICE == BENEFIT_APPLY_PRICE){
								goodsList += "<p><span class=\"sbj\">할인가 " + comma(good.SALE_PRICE) + "원</span>";
								goodsList += "<span>(최초 1회차 결제)</span></p>";
							}else{
								goodsList += "<p><span class=\"sbj\">할인가 " + comma(BENEFIT_APPLY_PRICE) + "원</span>";
								goodsList += "<span>(최초 1회차 결제)</span></p>";
							}
							goodsList += "<p><span class=\"sbj\">렌탈료</span><span>" + comma(good.RENTAL_MONTH_PRICE) + "원(월)</span></p>";
						}
						
						goodsList += "<p><span class=\"sbj\">약정개월</span><span>" + comma(good.RENTAL_MONTHS) + "개월</span></p>";
						goodsList += "</div>";
						
					}else{
						goodsList += "<span class=\"price\">";
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE){
							
							goodsList += "<em>" + comma(BENEFIT_APPLY_PRICE) + "<i>원</i></em><del>" + comma(good.SALE_PRICE) + "</del>";
							
						}else{
							
							goodsList += "<em>" + comma(good.SALE_PRICE) + "<i>원</i></em>";
						}
						goodsList += "</span>";
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE && good.SALE_PRICE != 0 && BENEFIT_APPLY_PRICE != 0) {
							var sale_rate = 0;
							var s = good.SALE_PRICE * 1.0;
							var f = BENEFIT_APPLY_PRICE * 1.0;
							sale_rate = Math.floor((s - f) * 100 / s);
							
							goodsList += "<span class=\"sale\">";							
							goodsList += sale_rate +"<i>%</i>";
							goodsList += "</span>";
						}
					}
					goodsList += "</div>";
					goodsList += "</a>";

					goodsList += "<span class=\"offer\">";
					if( BENEFIT.indexOf("무료배송") != -1){
						goodsList += "<i class=\"free\">무료배송</i>";
						goodsList += "<em>|</em>";
					}
					goodsList += "<i class=\"free\">상품평(" + good.GOODS_COMMENT_CNT + ")</i>";
					
					goodsList += "</span>";
					goodsList += "</div>";
					goodsList += "</li>";
					
					
				});
			} else if($("#viewType").val() == "img_type"){
				
				viewId += "2";
				btnId += "2";
				btnTextId += "2";
				$("#movePage2").remove();
				
				$.each(result.Document, function(num,goodInfo){
					var good = goodInfo.Field;
					good.GOODS_NAME = good.GOODS_NAME.replace(/<!HS>/,"<font color=#e20167>").replace(/<!HE>/,"</font>");
					
					// 매체별 가격 세팅
					BENEFIT             = good.BENEFIT;
					NOINT_YN            = good.NOINT_YN;
					COUPON              = good.COUPON;
					BENEFIT_APPLY_PRICE = good.BENEFIT_APPLY_PRICE;
					CARD_INFO           = good.CARD_INFO;

					if(mobileKind == "10"){

						BENEFIT             = good.BENEFIT_MA;
						NOINT_YN            = good.NOINT_YN_MA;
						COUPON              = good.COUPON_MA;
						BENEFIT_APPLY_PRICE = good.BENEFIT_APPLY_PRICE_MA;
						CARD_INFO           = good.CARD_INFO_MA;

					}else if(mobileKind == "20"){

						BENEFIT             = good.BENEFIT_MW;
						NOINT_YN            = good.NOINT_YN_MW;
						COUPON              = good.COUPON_MW;
						BENEFIT_APPLY_PRICE = good.BENEFIT_APPLY_PRICE_MW;
						CARD_INFO           = good.CARD_INFO_MW;

					}

					var buyAgeCode = good.DTL_DESC.split(":")[2];
					var goodsImgPath = getImagePath(200, good.GOODS_ID, buyAgeCode);
					var sizeCode = 200;

					goodsList += "<li>";
					goodsList += "<a href=\"javascript:goods_detail(" + good.GOODS_ID + ")\" class=\"inner\">";
					goodsList += "<span>";
					goodsList += "<img src=\"" + goodsImgPath + "\" alt=\"%" + good.GOODS_NAME + "%\" onerror=\"noImage("+this+", "+sizeCode+");\">";
					goodsList += "</span>";
					goodsList += "<div class=\"area\">";
					
					if(good.AKPLAZA_YN == 'Y'){
						
						goodsList += "<span class=\"flag\">";
						if(good.LAUNCH_YN == 'N'){
							goodsList += "<em class=\"selectshop\">AK 온라인전용</em>";
						}else{
							goodsList += "<em class=\"akplaza\">"+ getPlazaName2(good.VENDOR_NAME) +"</em> ";
							if(good.SMART_PICK_YN == 'Y'){
								goodsList += "<em class=\"pick\"></em>";
							}
						
						}
						goodsList += "</span>";
					}
					
					goodsList += "<strong>" + good.GOODS_NAME + "</strong>";
					
					if(good.GOODS_KIND_CODE == "009" || good.GOODS_KIND_CODE == "010"){
					
						goodsList += "<div class=\"rental\">";
						
						if(good.GOODS_KIND_CODE == "009"){
							goodsList += "<p><span class=\"sbj\">렌탈료</span>";
							goodsList += "<span>" + comma(good.RENTAL_MONTH_PRICE) + "</span></p>";
						}
						if(good.GOODS_KIND_CODE == "010"){
							if(good.SALE_PRICE == BENEFIT_APPLY_PRICE){
								goodsList += "<p><span class=\"sbj\">할인가 " + comma(good.SALE_PRICE) + "원</span>";
								goodsList += "<span>(최초 1회차 결제)</span></p>";
							}else{
								goodsList += "<p><span class=\"sbj\">할인가 " + comma(BENEFIT_APPLY_PRICE) + "원</span>";
								goodsList += "<span>(최초 1회차 결제)</span></p>";
							}
							goodsList += "<p><span class=\"sbj\">렌탈료</span><span>" + comma(good.RENTAL_MONTH_PRICE) + "원(월)</span></p>";
						}
						
						goodsList += "<p><span class=\"sbj\">약정개월</span><span>" + comma(good.RENTAL_MONTHS) + "개월</span></p>";
						goodsList += "</div>";
						
					}else{
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE && good.SALE_PRICE != 0 && BENEFIT_APPLY_PRICE != 0) {
							var sale_rate = 0;
							var s = good.SALE_PRICE * 1.0;
							var f = BENEFIT_APPLY_PRICE * 1.0;
							sale_rate = Math.floor((s - f) * 100 / s);
							
							goodsList += "<span class=\"sale\">";							
							goodsList += sale_rate +"<i>%</i>";
							goodsList += "</span>";
						}
						
						goodsList += "<span class=\"price\">";
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE){
							
							goodsList += "<del>" + comma(good.SALE_PRICE) + "</del><br/><em>" + comma(BENEFIT_APPLY_PRICE) + "<i>원</i></em>";
							
						}else{
							
							goodsList += "<em>" + comma(good.SALE_PRICE) + "<i>원</i><em>";
						}
						goodsList += "</span>";
					}
					goodsList += "</div>";
					goodsList += "</a>";
					
					goodsList += "<span class=\"offer\">";
					if( BENEFIT.indexOf("무료배송") != -1){
						goodsList += "<i class=\"free\">무료배송</i>";
						goodsList += "<em>|</em>";
					}
					goodsList += "<i class=\"free\">상품평(" + good.GOODS_COMMENT_CNT + ")</i>";
					goodsList += "</span>";
					goodsList += "<button class=\"btn_open\" ><em class=\"blind\">메뉴</em></button>";
					goodsList += "<span class=\"icon zzim_" + good.GOODS_ID + "\">";
					goodsList += "<button class=\"btn_close\"><em class=\"blind\">닫기</em></button>";
					goodsList += "<button class=\"btn_share btn_layer_share\" onclick=\"openShareLayer('/goods/pSnsShare.do?goods_id=" + good.GOODS_ID + "', '" + good.GOODS_ID + "' ); return false;\"><em class=\"blind\">공유하기</em></button>";
					
					goodsList += "<button class=\"btn_pick btn_wish_open\" onclick=\"pWishInpt('/goods/pWishInptAjax.do','" + good.GOODS_ID + "')\"><em class=\"blind\">찜</em></button>";
					goodsList += "<button class=\"btn_cart\" onclick=\"checkShoopingCart("+ good.GOODS_ID +");\"><em class=\"blind\">장바구니담기</em></button>";
					goodsList += "</span>";
					goodsList += "</li>";
					
					
				});
			}else if($("#viewType").val() == "thumb_type"){
				
				viewId += "3";
				btnId += "3";
				btnTextId += "3";
				$("#movePage3").remove();

				$.each(result.Document, function(num,goodInfo){
					var good = goodInfo.Field;
					good.GOODS_NAME = good.GOODS_NAME.replace(/<!HS>/,"<font color=#e20167>").replace(/<!HE>/,"</font>");

					// 매체별 가격 세팅
					BENEFIT             = good.BENEFIT;
					NOINT_YN            = good.NOINT_YN;
					COUPON              = good.COUPON;
					BENEFIT_APPLY_PRICE = good.BENEFIT_APPLY_PRICE;
					CARD_INFO           = good.CARD_INFO;

					if(mobileKind == "10"){

						BENEFIT             = good.BENEFIT_MA;
						NOINT_YN            = good.NOINT_YN_MA;
						COUPON              = good.COUPON_MA;
						BENEFIT_APPLY_PRICE = good.BENEFIT_APPLY_PRICE_MA;
						CARD_INFO           = good.CARD_INFO_MA;

					}else if(mobileKind == "20"){

						BENEFIT             = good.BENEFIT_MW;
						NOINT_YN            = good.NOINT_YN_MW;
						COUPON              = good.COUPON_MW;
						BENEFIT_APPLY_PRICE = good.BENEFIT_APPLY_PRICE_MW;
						CARD_INFO           = good.CARD_INFO_MW;

					}
					
					var buyAgeCode = good.DTL_DESC.split(":")[2];
					var goodsImgPath = getImagePath(500, good.GOODS_ID, buyAgeCode);
					var sizeCode = 500;

					goodsList += "<li>";
					goodsList += "<a href=\"javascript:goods_detail(" + good.GOODS_ID + ")\" class=\"inner\">";
					goodsList += "<img src=\"" + goodsImgPath + "\" alt=\"%" + good.GOODS_NAME + "%\" onerror=\"noImage("+this+", "+sizeCode+");\">";
					goodsList += "<div class=\"inner\">";
					
					if(good.AKPLAZA_YN == 'Y'){
						
						goodsList += "<span class=\"flag\">";
						if(good.LAUNCH_YN == 'N'){
							goodsList += "<em class=\"selectshop\">AK 온라인전용</em>";
						}else{
							goodsList += "<em class=\"akplaza\">"+ getPlazaName2(good.VENDOR_NAME) +"</em> ";
							if(good.SMART_PICK_YN == 'Y'){
								goodsList += "<em class=\"pick\"></em>";
							}
						}
						goodsList += "</span>";
					}
					
					goodsList += "<strong>" + good.GOODS_NAME + "</strong>";
					
					if(good.GOODS_KIND_CODE == "009" || good.GOODS_KIND_CODE == "010"){
						goodsList += "<div class=\"rental\">";
						
						if(good.GOODS_KIND_CODE == "009"){
							goodsList += "<p><span class=\"sbj\">렌탈료</span>";
							goodsList += "<span>" + comma(good.RENTAL_MONTH_PRICE) + "</span></p>";
						}
						if(good.GOODS_KIND_CODE == "010"){
							if(good.SALE_PRICE == BENEFIT_APPLY_PRICE){
								goodsList += "<p><span class=\"sbj\">할인가 " + comma(good.SALE_PRICE) + "원</span>";
								goodsList += "<span>(최초 1회차 결제)</span></p>";
							}else{
								goodsList += "<p><span class=\"sbj\">할인가 " + comma(BENEFIT_APPLY_PRICE) + "원</span>";
								goodsList += "<span>(최초 1회차 결제)</span></p>";
							}
							goodsList += "<p><span class=\"sbj\">렌탈료</span><span>" + comma(good.RENTAL_MONTH_PRICE) + "원(월)</span></p>";
						}
						
						goodsList += "<p><span class=\"sbj\">약정개월</span><span>" + comma(good.RENTAL_MONTHS) + "개월</span></p>";
						goodsList += "</div>";
						
					}else{
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE && good.SALE_PRICE != 0 && BENEFIT_APPLY_PRICE != 0) {
							var sale_rate = 0;
							var s = good.SALE_PRICE * 1.0;
							var f = BENEFIT_APPLY_PRICE * 1.0;
							sale_rate = Math.floor((s - f) * 100 / s);
							
							goodsList += "<span class=\"sale\">";							
							goodsList += sale_rate +"<i>%</i>";
							goodsList += "</span>";
						}

						goodsList += "<span class=\"price\">";
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE){
							goodsList +="<em>" + comma(BENEFIT_APPLY_PRICE) + "<i>원</i></em><del>" + comma(good.SALE_PRICE) + "</del>";
							
						}else{
							goodsList += "<em>" + comma(good.SALE_PRICE) + "<i>원</i><em>";
							
						}
						goodsList += "</span>";
					
					}
					goodsList += "</div>";
					goodsList += "</a>"; 
					
					goodsList += "<span class=\"offer line\">";
					if( BENEFIT.indexOf("무료배송") != -1){
						goodsList += "<i class=\"free\">무료배송</i>";
						goodsList += "<em>|</em>";
					}
					goodsList += "<i class=\"free\">상품평(" + good.GOODS_COMMENT_CNT + ")</i>";
					goodsList += "</span>";
					
					goodsList += "<button class=\"btn_open\"><em class=\"blind\">메뉴</em></button>";
					goodsList += "<span class=\"icon zzim_" + good.GOODS_ID + "\">";
					goodsList += "<button class=\"btn_close\"><em class=\"blind\">닫기</em></button>";
					goodsList += "<button class=\"btn_share btn_layer_share\" onclick=\"openShareLayer('/goods/pSnsShare.do?goods_id=" + good.GOODS_ID + "', '" + good.GOODS_ID + "' ); return false;\"><em class=\"blind\">공유하기</em></button>";
					
					goodsList += "<button class=\"btn_pick btn_wish_open\" onclick=\"pWishInpt('/goods/pWishInptAjax.do','" + good.GOODS_ID + "')\"><em class=\"blind\">찜</em></button>";
					goodsList += "<button class=\"btn_cart\" onclick=\"checkShoopingCart("+ good.GOODS_ID +");\"><em class=\"blind\">장바구니담기</em></button>";
					goodsList += "</span>";
					goodsList += "</li>";
					
					
					
				});
			}
			
			
			if(onload == "N"){

				if($("#viewType").val() == "list_type"){
					goodsList += "<input type=\"hidden\" id=\"movePage\" value="+count+">";
					$(".prod_list").append(goodsList);
					pagingFlag = true;
				}
				else if($("#viewType").val() == "img_type"){
					goodsList += "<input type=\"hidden\" id=\"movePage2\" value="+count+">";
					$(".prod_list2").append(goodsList);
					imgPagingFlag = true;
				}
				else if($("#viewType").val() == "thumb_type"){
					goodsList += "<input type=\"hidden\" id=\"movePage3\" value="+count+">";
					$(".prod_list3").append(goodsList);
					thumbPagingFlag = true;
				}
				//pagingFlag = true;
			}	
			// 선택한 뷰 상품 append
			else if(onload == "Y"){
				if($("#viewType").val() == "list_type"){
					goodsList += "<input type=\"hidden\" id=\"movePage\" value="+count+">";
					$("ul.prod_list li").remove();
					$(".prod_list").append(goodsList);
					pagingFlag = true;
				}
				else if($("#viewType").val() == "img_type"){
					goodsList += "<input type=\"hidden\" id=\"movePage2\" value="+count+">";
					$("ul.prod_list2 li").remove();
					$(".prod_list2").append(goodsList);
					imgPagingFlag = true;
				}
				else if($("#viewType").val() == "thumb_type"){
					goodsList += "<input type=\"hidden\" id=\"movePage3\" value="+count+">";
					$("ul.prod_list3 li").remove();
					$(".prod_list3").append(goodsList);
					thumbPagingFlag = true;
				}
			}

		}/*,
		error:function(x,e,o){
			  alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}*/
    });
	var hashGoodsFoc = getCookie("hashGoodsFoc");
	if(onload == "Y")
		focus(hashGoodsFoc);
}
function focus(hashGoodsFoc){
	var scroll_fo = getCookie("hashGoodsFoc");
	window.scrollTo(0, scroll_fo);
}

function getChanelPageLinks(param, PageNum) {
	searchPageNum = searchPageNum + 1;
	var onload = document.getElementById("onload").value;
	$.ajax({
		url: "/search/ChanelPagingAjax.do",
		type: "POST",
		dataType: "json",
		data: param + "&searchPageNum=" + searchPageNum + "&PageNum=" + PageNum,
		success: function(data) {
			var result = data.SearchQueryResult.Collection[0].DocumentSet;

			var count = 0;
			if(onload == "N"){
				var count = parseInt(searchPageNum*60)+parseInt(result.Count);
				addToHistory(searchPageNum + 1);
			}else if(onload == "Y"){
				var count = parseInt(result.Count);
				addToHistory(PageNum);
			}

			var totalCount = parseInt(result.TotalCount);
			var goodsList = "";

			var viewId = ".chanel_list";
			var otherViewId = ".chanel_list";
			var btnId = "#sch_btn_more";
			var btnTextId = "#sch_more";
			
			$("#movePage").remove();

				/*viewId += "2";
				btnId += "2";
				btnTextId += "2";*/

				$.each(result.Document, function(num,goodInfo){
					var good = goodInfo.Field;
					/*if(num%2 == 0) {
						goodsList += "<ul style=\"overflow:hidden;\" class= \"chanel_list\">";
					}*/
					var buyAgeCode = good.DTL_DESC.split(":")[2];
					var goodsImgPath = getImagePath(250, good.GOODS_ID, buyAgeCode);

					goodsList += "<li>";
					goodsList += "<a href=\"javascript:goods_detail(" + good.GOODS_ID + ")\">";
					goodsList += "<img src=\"" + goodsImgPath + "\" alt=\"%" + good.GOODS_NAME + "%\">";
					goodsList += "<em>CHANEL</em>";
					goodsList += "<span>" + good.GOODS_NAME + "</span>";
					goodsList += "<strong>" + comma(good.SALE_PRICE) + "<i>원</i></strong>";
					goodsList += "</a>";
					goodsList += "</li>";

					/*if(num%2 == 1)
						goodsList += "<input type=\"hidden\" id=\"movePage\" value=\"<%=viewCount%>\">";*/
				});

				goodsList += "<input type=\"hidden\" id=\"movePage\" value="+count+">";
				
			/*if(count >= totalCount)
				$(btnId).hide();
			else
				$(btnTextId).html("더보기<span>("+count+"/"+totalCount+")</span><em></em>");*/
			if(onload == "N"){
				$(viewId).append(goodsList);		// 선택한 뷰 상품 append
				pagingFlag = true;
			}
			else if(onload == "Y"){
				//$("ul. li").remove();
				$(viewId).append(goodsList);
				pagingFlag = true;
			}

		}/*,
		error:function(x,e,o){
			  alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}*/
    });
	var hashGoodsFoc = getCookie("hashGoodsFoc");
	if(onload == "Y")
		focus(hashGoodsFoc);
}
//샤넬검색
function doChanel(form, query) {
	var searchForm = "";
	if(form == "searchForm"){
		resetSearchMain();
		resetMainCondition();
		searchForm = document.searchForm;
		searchForm.realQuery.value = query;
	}else{
		resetChanel();
		searchForm = document.searchChanelForm;
	}

	searchForm.categoryDepth.value = 2;
	searchForm.categoryId.value = 200202;
	searchForm.sort.value = "RANK/DESC";
	searchForm.sort.value = "";

	searchForm.collection.value = "goods_chanel";

	$("#"+form).attr("action","/search/SearchChanel.do");
	searchForm.submit();
}

