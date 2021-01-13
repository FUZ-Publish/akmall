var searchPageNum = 0;

//쿠키 날짜값 세팅을 위한 선언
var todayDate=new Date();	
var month = (1 + todayDate.getMonth()).toString();
month = month.length > 1 ? month : '0' + month;
var day = todayDate.getDate().toString();
day = day.length > 1 ? day : '0' + day;
var formattedDate = month + '-' + day;


/**
 * 인기검색어 Ajax
 */
function getPopkeyword(siteId) {
	var target		= "popword";
	var range		= "D";
	var collection  = "MOB";
	if(siteId == 2) {
		collection = "FMOB";
	}

    var datatype   = "xml";
	$.ajax({
	  type: "POST",
	  url: "/search/PopwordAjax.do",
	  dataType: "xml",
	  data: { "target" : target, "range" : range, "collection" : collection , "datatype" : datatype },
	  success: function(xml) {

		var str = "<ol class=\"search_list popular\">";

		$(xml).find("Query").each(function(num){

			str += "<li>";;
			str += "<a href='#' onClick=\"javascript:doKeyword('" + $(this).text() + "'); return false;\">" +(num+1)+". " + $(this).text() + "</a>";
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
	var MYKEYWORD_COUNT = 10; //내가 찾은 검색어 갯수 + 1
	var myKeyword = getCookieForMyKeyword("mykeyword");
	if( myKeyword== null) {
		myKeyword = "";
	}
	//처음 쿠키값을 리플레스 하기 위한 ^% 추가
	myKeyword = "^%"+myKeyword;
	myKeyword = myKeyword.replace("^%^%", "^%");
	//검색어 입력시 우선 실행
	var myKeywords = myKeyword.split("^%");
	//myKeywords : 쿠키값에 있는 검색어1%^날짜1 , 검색어2%^날짜2 
	if( totCount > 0 ) {
		var existsKeyword = false;
		//var replaceMyKeywords = "";
		for( var i = 0; i < myKeywords.length; i++) {

			var keywords = myKeywords[i].split("%^");
			//keyword : 검색입력값
			//keywords : 쿠키값1%^날짜1 
			// 검색입력값과  쪼갠값의 쿠키값1 을 비교해서 같을때
			if( keywords[0] == keyword) { // 쿠키값의 검색어1 과 검색입력값과 비교해서 같을경우
				existsKeyword = true;
				// 기존쿠키에 있는 같은 값을 지움
				myKeyword = myKeyword.replace("^%"+myKeywords[i], "");
				myKeywords = myKeyword.split("^%");
				//날짜 갱신하여 푸쉬
				myKeywords.push(keyword +"%^"+ formattedDate);
				if( myKeywords.length == MYKEYWORD_COUNT) {
					myKeywords = myKeywords.slice(1,MYKEYWORD_COUNT);
				}
			}
		}
		if( !existsKeyword ) {
			//검색어:11-10; 검색어:11-10
			if(keyword != null){
				//keyword = keyword +"%^"+ formattedDate;
				myKeywords.push(keyword +"%^"+ formattedDate);
			}
			// 키워드 9개 이하  지우기
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

//내가 찾은 검색어 삭제 (완료)
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
	if(myKeywordChk == null || myKeywordChk == "" || myKeywordChk =="^%"){
		$("#mykeywordNoList").show();
	}
	
	showMyKeyword(myKeywords.reverse());
}


//내가 찾은 검색어
function showMyKeyword(myKeywords) {
	var str = "<ul class=\"search_list\">";

	var count = 0;
	
	var myKeywordLenth = myKeywords.length;
	if(myKeywordLenth > 9){
		myKeywordLenth = 9;
	}
	for( var i = 0; i < myKeywordLenth; i++) {
		if( myKeywords[i] == "") continue;
		
		// 검색어%^2017-11-30 
		var keywords = myKeywords[i].split("%^");

		
		if (typeof keywords[1] == "undefined") {
			keywords[1] = "";
		}

		
		str += "<li>";
		str += "<a href=\"#\" onClick=\"javascript:doKeyword('"+keywords[0]+"'); return false;\">"+keywords[0]+"</a>";
		str += "<span class=\"day\">"+keywords[1]+"<button onclick=\"removeMyKeyword('" + myKeywords[i] + "');\"><em class=\"blind\">삭제</em></button></span>";
		str += "</li>";
		count ++;
	}
	
	str += "<div class=\"btn_search\"><button class=\"bttn all_del\" onclick=\"javascript:removeMyKeyword(); return false;\">검색기록 전체삭제</button></div>";
	str += "</ul>";


	if(count > 0){
		$("#mykeywordList").html(str);
		//$("#mykeywordNoList").html("");
		$("#mykeywordNoList").hide();
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
	//배열순서를 역순으로
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
		
		if(keyword == "태그온뷰티"){
			location.href=" /special/TagOnBeautyMain.do";
			return false;
		}
		
		if(keyword == "하나쿠폰"){
			var startDate = "2018.01.01";
			var endDate = "2018.03.31";
			var startDate2 = "2018.04.01";
			var endDate2 = "2018.06.30";
			if((compareStringNum(startDate,toDate, "."))&&(compareStringNum(toDate,endDate, ".")))
			{
				location.href="/event/EventDetail.do?no=1015468";
				return false;
			}
			else if((compareStringNum(startDate2,toDate, "."))&&(compareStringNum(toDate,endDate2, ".")))
			{
				location.href="/event/EventDetail.do?no=1016403";
				return false;
			}
		}else if(keyword == "하나멤버스"){			
				var startDate = "2018.01.01";
				var endDate = "2018.03.31";
				var startDate2 = "2018.04.01";
				var endDate2 = "2018.06.30";
				if((compareStringNum(startDate,toDate, "."))&&(compareStringNum(toDate,endDate, ".")))
				{
					location.href="/event/EventDetail.do?no=1015467";
					return false;
				}				
				else if((compareStringNum(startDate2,toDate, "."))&&(compareStringNum(toDate,endDate2, ".")))
				{
					location.href="/event/EventDetail.do?no=1016404";
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
		}else if(keyword == "출석체크"||keyword == "출첵"||keyword == "바로방문출첵"||keyword == "바로방문출석체크"){
			location.href="/event/RightVisit.do";
			return false;	
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

	searchForm.minPrice.value = -1;
	searchForm.maxPrice.value = -1;
	

	$("#reSearch_s").val("");
	$("#reSaerch_e").val("");

	searchForm.attoption.value = "";
	searchForm.plaza.value = "";
	searchForm.smartpick.value = "";
	searchForm.benefit.value = "";
	
	searchForm.color.value = "";
	searchForm.brandSort.value = "count";

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

	$("#reSearch_s").val("");
	$("#reSaerch_e").val("");
	searchForm.brand.value = "";
	searchForm.brandMore.value = "";

	searchForm.attoption.value = "";
	searchForm.plaza.value = "";
	searchForm.benefit.value = "";
	searchForm.color.value = "";

	searchForm.showQuery.value = "";
	searchForm.selectQuery.value = "";
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
	var realQuery = searchForm.collection.value;
	searchForm.collection.value = coll;
	searchForm.reQuery.value = "2";
	searchPageNum = 0;
	
	searchForm.search.value= realQuery;
	doSearchFormSubmit();
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

/*
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
*/

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


//ajax 페이징처리
function getPageingAjax(viewCount,number) {
	
	if(viewCount !=''){
		number = (number/viewCount)+1;
	}
	getParamValues();
	$("#startCount").val(number);
	getSearchResultAjax($("#searchForm").serialize());
}

$(window).load(function() {
	if(window.history.state != null) {
		checkLoading(window.history.state);
	}
	
	//setFilterEvent();
});

function checkLoading(state){
	
	setTimeout(function() {
		$("#"+state.tabid).html(state.data);
		$("html body").scrollTop(state.scroll);
	},300);
		
};

function pushState(id){ 
	history.pushState({data:$("#"+id).html(), scroll:$("html body").scrollTop(), tabid : id},"Search", location.href);
	//history.pushState({data:$("#"+id).html(), scroll:$("html body").scrollTop(), tabid : id},"Search");
}

//2017.12.12
function getSearchResultAjax(param) {
	
	var params = getParams(param);
	var mobileKind = params.mobileKind;

	
	//console.log("getResultAjax in @@@@@@@@");
	//console.log("param = " + param);
	//console.log("mobileKind = "+ mobileKind);
	//startCount 를 가져올 방법이 별도로 없어서 강제 처리
	var paramsplit = "";
	paramsplit = param.split("&");
	var paramValus = paramsplit[0].split("=");
	
	var startCount = paramValus[1];

	var siteId = params.siteId;
	//console.log("siteId:" + siteId);
	
	//$(".result_view_type").html("<div class=\"popup_wrap\"><div class=\"loader\"></div></div>");
	
	//연관검색 비노출
	if($("#div_ark_word").html().length == 0){$("#related_word").hide();}
	
	$.ajax({
		url: "/search/PagingAjax2.do",
		type: "POST",
		dataType: "json",
		data: param,
		success: function(data) {
				
			var result = "";
			//console.log("PagingAjax2 in");
			var collection = "";
			collection = data.SearchQueryResult.Collection[0].Id;
			result = data.SearchQueryResult.Collection[0].DocumentSet;
			var count = 0;
			
			//console.log("collection:" + collection);

			//현재 뷰 카운트 
			var viewCount =  parseInt(result.Count);
			//컬렉션 총 카운트
			var totalCount = parseInt(result.TotalCount);
			var goodsList = "";
			var goodsList2 = "";//이미지
			var goodsList3 = "";//큰이미지
			var powerdealList = "";//파워딜
			var nogoodsList = "";//검색결과 0건

			var viewId = "#result_view_type";
			var otherViewId = "#result_view_type";
			var btnId = "#sch_btn_more";
			var btnTextId = "#sch_more";
			
			var BENEFIT = "";
			var NOINT_YN = "";
			var COUPON = "";
			var BENEFIT_APPLY_PRICE = "";
			var CARD_INFO = "";

			var colName = "";

			if(collection ==='goods_ak' || collection ==='goods_fds'){colName = "전체"}
			if(collection ==='powerdeal'){colName = "파워딜"}
			if(collection ==='goods_akmall'){
				colName = "AK몰"
				if(siteId === '2'){
					colName = "임직원몰"
				}
			}
			if(collection ==='goods_akplaza'){colName = "백화점"}

			//검색결과가 있고  파워딜일때 노출 
			if(totalCount > 0 && collection ==="powerdeal"){

				powerdealList += "<div class=\"deal_list_wrap\">";
				$.each(result.Document, function(num,goodInfo){

					var powerGood = goodInfo.Field;
					powerGood.GOODS_NAME = powerGood.GOODS_NAME.replace(/<!HS>/,"<font color=#e20167>").replace(/<!HE>/,"</font>");
		
					powerdealList += "<dl class=\"deal_list\">"; 
					powerdealList += "<dt>";
					powerdealList += "<a href=\"/special/PowerDealDetail.do?goods_id="+powerGood.GOODS_ID+"\">";
					powerdealList += "<img src=\""+powerGood.DEAL_GOODS_MOBILE_BANNER+"\" alt=\"%"+powerGood.GOODS_NAME+"%\" onerror=\"noImage(this, '', true);\">";
					powerdealList += "</a>";
					powerdealList += "</dt>";
					powerdealList += "<dd>";
					powerdealList += "<a href=\"/special/PowerDealDetail.do?goods_id="+powerGood.GOODS_ID+"\">";
					powerdealList += "<i class=\"sp\">"+powerGood.GOODS_NAME+"</i>"; 
					powerdealList += "<strong>"+powerGood.SELLING_POINT_BACK+"</strong>";
					powerdealList += "<span class=\"dealprice\">파워딜가</span>";
					powerdealList += "<span> "+comma(powerGood.SALE_PRICE)+"<i>원~</i></span>";
					powerdealList += "<em>"+comma(powerGood.ORD_CNT)+"개 판매중</em>";
					powerdealList += "</a>";
					powerdealList += "</dd>";
					powerdealList += "</dl>";			
					
				});
				powerdealList += "</div>";

				$(".list_paging").show();
				$(".noresult").remove();

				//필터 area 비노출
				$(".searchfilter_area").hide();
				
				$(".brand_shopgo").hide();
				
				//광고영역 삭제
				$(".sbanner2").remove();
				//추천상품영역 삭제
				$(".keyword_ad").remove();
				
				$(".search_banner").remove();
				$("ul.prod_list li").remove();
				//$(".prod_list").append(powerdealList);
				$("ul.prod_list2 li").remove();
				//$(".prod_list2").append(powerdealList);
				$("ul.prod_list3 li").remove();
				
				$(".deal_list_wrap").remove();
				$(".deal_result_list_wrap_view").append(powerdealList);
				$(".deal_result_list_wrap_view").show();
				//$(".prod_list3").append(powerdealList);
			
			}else if(totalCount > 0 && collection !="powerdeal"){
				//prod_list
				$.each(result.Document, function(num,goodInfo){
					var good = goodInfo.Field;
					good.GOODS_NAME = good.GOODS_NAME.replace(/<!HS>/,"<font color=#e20167>").replace(/<!HE>/,"</font>");
					
					var buyAgeCode = good.DTL_DESC.split(":")[2];
					var goodsImgPath = getImagePath(350, good.GOODS_ID, buyAgeCode);
					var sizeCode = 350;

					var goodsImgPath2 = getImagePath(200, good.GOODS_ID, buyAgeCode);
					var sizeCode2 = 200;

					var goodsImgPath3 = getImagePath(500, good.GOODS_ID, buyAgeCode);
					var sizeCode3 = 500;
					
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
					if(good.BEST_SELLER_YN == 'Y'){
						goodsList += "<div class=\"besticon\">Best Seller</div>";
					}
					goodsList += "<div class=\"item_box\">";
					goodsList += "<span class=\"img_area\">";
					goodsList += "<a href=\"javascript:goods_detail(" + good.GOODS_ID + ")\">";
					goodsList += "<img src=\"" + goodsImgPath + "\" alt=\"%" + good.GOODS_NAME + "%\" onerror=\"noImage(this, "+sizeCode+");\">";
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

					//이미지 보기
					goodsList2 += "<li>";
					goodsList2 += "<a href=\"javascript:goods_detail(" + good.GOODS_ID + ")\" class=\"inner\">";
										
					if(good.BEST_SELLER_YN == 'Y'){
						goodsList2 += "<div class=\"besticon\">Best Seller</div>";
					}

					goodsList2 += "<span>";
					goodsList2 += "<img src=\"" + goodsImgPath2 + "\" alt=\"%" + good.GOODS_NAME + "%\" onerror=\"noImage(this, "+sizeCode2+");\">";
					goodsList2 += "</span>";
					goodsList2 += "<div class=\"area\">";
					
					if(good.AKPLAZA_YN == 'Y'){
						
						goodsList2 += "<span class=\"flag\">";
						if(good.LAUNCH_YN == 'N'){
							goodsList2 += "<em class=\"selectshop\">AK 온라인전용</em>";
						}else{
							goodsList2 += "<em class=\"akplaza\">"+ getPlazaName2(good.VENDOR_NAME) +"</em> ";
							if(good.SMART_PICK_YN == 'Y'){
								goodsList2 += "<em class=\"pick\"></em>";
							}
						
						}
						goodsList2 += "</span>";
					}
					
					goodsList2 += "<strong>" + good.GOODS_NAME + "</strong>";
					
					if(good.GOODS_KIND_CODE == "009" || good.GOODS_KIND_CODE == "010"){
					
						goodsList2 += "<div class=\"rental\">";
						
						if(good.GOODS_KIND_CODE == "009"){
							goodsList2 += "<p><span class=\"sbj\">렌탈료</span>";
							goodsList2 += "<span>" + comma(good.RENTAL_MONTH_PRICE) + "</span></p>";
						}
						if(good.GOODS_KIND_CODE == "010"){
							if(good.SALE_PRICE == BENEFIT_APPLY_PRICE){
								goodsList2 += "<p><span class=\"sbj\">할인가 " + comma(good.SALE_PRICE) + "원</span>";
								goodsList2 += "<span>(최초 1회차 결제)</span></p>";
							}else{
								goodsList2 += "<p><span class=\"sbj\">할인가 " + comma(BENEFIT_APPLY_PRICE) + "원</span>";
								goodsList2 += "<span>(최초 1회차 결제)</span></p>";
							}
							goodsList2 += "<p><span class=\"sbj\">렌탈료</span><span>" + comma(good.RENTAL_MONTH_PRICE) + "원(월)</span></p>";
						}
						
						goodsList2 += "<p><span class=\"sbj\">약정개월</span><span>" + comma(good.RENTAL_MONTHS) + "개월</span></p>";
						goodsList2 += "</div>";
						
					}else{
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE && good.SALE_PRICE != 0 && BENEFIT_APPLY_PRICE != 0) {
							var sale_rate = 0;
							var s = good.SALE_PRICE * 1.0;
							var f = BENEFIT_APPLY_PRICE * 1.0;
							sale_rate = Math.floor((s - f) * 100 / s);
							
							goodsList2 += "<span class=\"sale\">";							
							goodsList2 += sale_rate +"<i>%</i>";
							goodsList2 += "</span>";
						}
						
						goodsList2 += "<span class=\"price\">";
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE){
							
							goodsList2 += "<del>" + comma(good.SALE_PRICE) + "</del><br/><em>" + comma(BENEFIT_APPLY_PRICE) + "<i>원</i></em>";
							
						}else{
							
							goodsList2 += "<em>" + comma(good.SALE_PRICE) + "<i>원</i><em>";
						}
						goodsList2 += "</span>";
					}
					goodsList2 += "</div>";
					goodsList2 += "</a>";
					
					goodsList2 += "<span class=\"offer\">";
					if( BENEFIT.indexOf("무료배송") != -1){
						goodsList2 += "<i class=\"free\">무료배송</i>";
						goodsList2 += "<em>|</em>";
					}
					goodsList2 += "<i class=\"free\">상품평(" + good.GOODS_COMMENT_CNT + ")</i>";
					goodsList2 += "</span>";
					goodsList2 += "<button class=\"btn_open\" ><em class=\"blind\">메뉴</em></button>";
					goodsList2 += "<span class=\"icon zzim_" + good.GOODS_ID + "\">";
					goodsList2 += "<button class=\"btn_close\"><em class=\"blind\">닫기</em></button>";
					goodsList2 += "<button class=\"btn_share btn_layer_share\" onclick=\"openShareLayer('/goods/pSnsShare.do?goods_id=" + good.GOODS_ID + "', '" + good.GOODS_ID + "' ); return false;\"><em class=\"blind\">공유하기</em></button>";
					
					goodsList2 += "<button class=\"btn_pick btn_wish_open\" onclick=\"pWishInpt('/goods/pWishInptAjax.do','" + good.GOODS_ID + "')\"><em class=\"blind\">찜</em></button>";
					goodsList2 += "<button class=\"btn_cart\" onclick=\"checkShoopingCart("+ good.GOODS_ID +");\"><em class=\"blind\">장바구니담기</em></button>";
					goodsList2 += "</span>";
					goodsList2 += "</li>";

					//큰이미지
					goodsList3 += "<li>";

					if(good.BEST_SELLER_YN == 'Y'){
						goodsList3 += "<div class=\"besticon\">Best Seller</div>";
					}

					goodsList3 += "<a href=\"javascript:goods_detail(" + good.GOODS_ID + ")\" class=\"inner\">";
					goodsList3 += "<img src=\"" + goodsImgPath3 + "\" alt=\"%" + good.GOODS_NAME + "%\" onerror=\"noImage(this, "+sizeCode3+");\">";
					goodsList3 += "<div class=\"inner\">";
					
					if(good.AKPLAZA_YN == 'Y'){
						
						goodsList3 += "<span class=\"flag\">";
						if(good.LAUNCH_YN == 'N'){
							goodsList3 += "<em class=\"selectshop\">AK 온라인전용</em>";
						}else{
							goodsList3 += "<em class=\"akplaza\">"+ getPlazaName2(good.VENDOR_NAME) +"</em> ";
							if(good.SMART_PICK_YN == 'Y'){
								goodsList3 += "<em class=\"pick\"></em>";
							}
						}
						goodsList3 += "</span>";
					}
					
					goodsList3 += "<strong>" + good.GOODS_NAME + "</strong>";
					
					if(good.GOODS_KIND_CODE == "009" || good.GOODS_KIND_CODE == "010"){
						goodsList3 += "<div class=\"rental\">";
						
						if(good.GOODS_KIND_CODE == "009"){
							goodsList3 += "<p><span class=\"sbj\">렌탈료</span>";
							goodsList3 += "<span>" + comma(good.RENTAL_MONTH_PRICE) + "</span></p>";
						}
						if(good.GOODS_KIND_CODE == "010"){
							if(good.SALE_PRICE == BENEFIT_APPLY_PRICE){
								goodsList3 += "<p><span class=\"sbj\">할인가 " + comma(good.SALE_PRICE) + "원</span>";
								goodsList3 += "<span>(최초 1회차 결제)</span></p>";
							}else{
								goodsList3 += "<p><span class=\"sbj\">할인가 " + comma(BENEFIT_APPLY_PRICE) + "원</span>";
								goodsList3 += "<span>(최초 1회차 결제)</span></p>";
							}
							goodsList3 += "<p><span class=\"sbj\">렌탈료</span><span>" + comma(good.RENTAL_MONTH_PRICE) + "원(월)</span></p>";
						}
						
						goodsList3 += "<p><span class=\"sbj\">약정개월</span><span>" + comma(good.RENTAL_MONTHS) + "개월</span></p>";
						goodsList3 += "</div>";
						
					}else{
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE && good.SALE_PRICE != 0 && BENEFIT_APPLY_PRICE != 0) {
							var sale_rate = 0;
							var s = good.SALE_PRICE * 1.0;
							var f = BENEFIT_APPLY_PRICE * 1.0;
							sale_rate = Math.floor((s - f) * 100 / s);
							
							goodsList3 += "<span class=\"sale\">";							
							goodsList3 += sale_rate +"<i>%</i>";
							goodsList3 += "</span>";
						}

						goodsList3 += "<span class=\"price\">";
						if(good.SALE_PRICE != BENEFIT_APPLY_PRICE){
							goodsList3 +="<em>" + comma(BENEFIT_APPLY_PRICE) + "<i>원</i></em><del>" + comma(good.SALE_PRICE) + "</del>";
							
						}else{
							goodsList3 += "<em>" + comma(good.SALE_PRICE) + "<i>원</i><em>";							
						}
						goodsList3 += "</span>";
					
					}
					goodsList3 += "</div>";
					goodsList3 += "</a>"; 
					
					goodsList3 += "<span class=\"offer line\">";
					if( BENEFIT.indexOf("무료배송") != -1){
						goodsList3 += "<i class=\"free\">무료배송</i>";
						goodsList3 += "<em>|</em>";
					}
					goodsList3 += "<i class=\"free\">상품평(" + good.GOODS_COMMENT_CNT + ")</i>";
					goodsList3 += "</span>";
					
					goodsList3 += "<button class=\"btn_open\"><em class=\"blind\">메뉴</em></button>";
					goodsList3 += "<span class=\"icon zzim_" + good.GOODS_ID + "\">";
					goodsList3 += "<button class=\"btn_close\"><em class=\"blind\">닫기</em></button>";
					goodsList3 += "<button class=\"btn_share btn_layer_share\" onclick=\"openShareLayer('/goods/pSnsShare.do?goods_id=" + good.GOODS_ID + "', '" + good.GOODS_ID + "' ); return false;\"><em class=\"blind\">공유하기</em></button>";
					
					goodsList3 += "<button class=\"btn_pick btn_wish_open\" onclick=\"pWishInpt('/goods/pWishInptAjax.do','" + good.GOODS_ID + "')\"><em class=\"blind\">찜</em></button>";
					goodsList3 += "<button class=\"btn_cart\" onclick=\"checkShoopingCart("+ good.GOODS_ID +");\"><em class=\"blind\">장바구니담기</em></button>";
					goodsList3 += "</span>";
					goodsList3 += "</li>";
					
				});//each(result.Document, function(num,goodInfo)
			
				$(".noresult").remove();
				$(".list_paging").show();
				//필터 area 노출
				$(".searchfilter_area").show();
				//연관검색 비노출
				//if($("#div_ark_word").html().length == 0){$("#related_word").hide();}
				
				// 광고영역 삭제
				$(".sbanner2").remove();
				//사넬영역 삭제
				$(".brand_shopgo").hide();
				//추천상품영역 삭제
				$(".keyword_ad").remove();
				$(".search_banner").remove();
				//파워딜 영역 제거
				$(".deal_result_list_wrap_view").hide();
				$(".deal_list_wrap").remove();
				$("ul.prod_list li").remove();
				$(".prod_list").append(goodsList);
				$("ul.prod_list2 li").remove();
				$(".prod_list2").append(goodsList2);
				$("ul.prod_list3 li").remove();
				$(".prod_list3").append(goodsList3);
				
			}else{ // 검색결과 없을때
				nogoodsList = "<div class=\"noresult\">"
				nogoodsList += "<strong>선택하신 조건에 맞는 상품이 없습니다.</strong>";
				nogoodsList += "<span>다른 조건으로 재 검색해 주세요.</span>";
				nogoodsList += "</div>";
				
				$(".list_paging").hide();
				$(".noresult").remove();
				//필터 area 노출
				$(".searchfilter_area").show();

				//연관검색 비노출
				$("#related_word").hide();
				//광고영역 삭제
				$(".sbanner2").remove();
				//사넬영역 삭제
				$(".brand_shopgo").hide();
				//추천상품영역 삭제
				$(".keyword_ad").remove();
				//파워딜영역 삭제
				$(".search_banner").remove();
				$(".deal_list_wrap").remove();

				$("ul.prod_list li").remove();
				$(".prod_list").append(nogoodsList);
				$("ul.prod_list2 li").remove();
				$(".prod_list2").append(nogoodsList);
				$("ul.prod_list3 li").remove();
				$(".prod_list3").append(nogoodsList);
			}
			
			var collCountList = "";
			collCountList +=colName+"("+comma(totalCount)+")";
			
			//컬렉션 카운트 변경
			$("#ntest1").text("");
			$("#ntest1").text(collCountList);

		
			//페이징처리
			getPageLinksAjax(startCount , totalCount, 60, 5 , "#list_paging");
			
			pushState("search_wrap_new");
			
			
		}/*,
		error:function(x,e,o){
			  alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}*/
    });
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

//브랜드 ajax
function getBrandList() {

	var formObj = document.searchForm;
	var temp_categoryId = formObj.categoryId.value;
	formObj.categoryId.value = temp_categoryId.replace(/;/g, '^');

	var param = $("#searchForm").serialize();
	var brand = $("#brandMore").val();

	$("#brandSubView").html("<div class=\"loading\" style=\"margin-top: 37px; margin-bottom:37px; text-align: center;\">브랜드를 로딩중입니다.</div>");
	//$("#brandSubView").html("<div class=\"popup_wrap\"><div class=\"loader\"></div></div>");
	

	$.ajax({
		url: "/search/BrandAjax.do",
		type: "POST",
		dataType: "json",
		data: param,
		success: function(data) {
			var result = data.brandObj;
			var count = parseInt(data.brandCount);

			var viewId = "#brandMainView";
			var viewSubId = "#brandSubView";
			//var brandMainView = "";
			var brandSubView = "";

			$.each(result, function(num, brand){
				
				
				//brandMainView += "<li class='swiper-slide'>";
				//brandMainView += "<a href=\"#\" id=\"brandMainView" + (num+1) + " class=\"brandMainView\" value=\"brand^"+ brand.id +"\" data=\""+brand.name +"\">";
				//brandMainView += brand.name;
				//brandMainView += "</a>";
				//brandMainView += "</li>";
				
				try{
					
					brandSubView += "<li>";
					brandSubView += "<input type=\"checkbox\"  name=\"brandSubView\" id=\"brandMore" + (num+1) + "\" class=\"brandSubView\" value=\"brand^"+brand.id+"\"  data=\""+brand.name +"\">";
					brandSubView += "<a href=\"#\" value=\"brand^" + brand.id +"\">" + brand.name + "<i>(" + brand.count + ")</i></a>";
					brandSubView += "</li>";
					
				}catch(e){
					console.log(e);
				}

			});

			//$(viewId).html(brandMainView);		// 선택한 브랜드 뷰  append
			$(viewSubId).html(brandSubView);		// SearchFillter 영역 브랜드 뷰 상품 append

			//상세 체크박스 재정의
			$('#layer_filter_wrap input[type="checkbox"]').each(function() {
					$(this).prop('checked', false);
			});
				
			$('#divSubFilter > button').each(function() {					
				var filterValue = $(this).val();
				var filterName = $(this).attr('data');
				//console.log(filterName, filterValue);
				
				//상세 체크박스재생성
				$('#layer_filter_wrap input[type="checkbox"]').each(function() {
					if($(this).val() === filterValue) {
						$(this).prop('checked', true);
					}
				});
			});
			
			//Main쪽 filter 속성 클릭시
			$("#brandMainView .swiper-slide > a").click(function(){

				var $fwaObj = $(this); 			
				var addFlag = true;
				var brandName = $fwaObj.attr("data"); //나이키(NIKE)
				var brandValue = $fwaObj.attr("value");
				var addText = "";
				
				$("#divMainFilter > button").each(function(){
					var $mfbObj = $(this);
					if($mfbObj.attr("value") == brandValue){addFlag = false;}
				});
				
				if(addFlag){
					
					$("#divMainFilter").append(
						"<button class='swiper-slide' onclick='delParamFillterSubmit(this);' value='" + brandValue + "' data='"+brandName+"'>" + brandName + "<span><em class='blind'>닫기</em></span></button>"	
					);
				
					//필드지정후 검색Ajax 
					var paramValue = "";
						$("#divMainFilter > button").each(function(){
							var $mfbObj = $(this);
							paramValue += $mfbObj.attr("value")+"@@";
							
					});
					
					getParamValues(paramValue);
					$("#startCount").val("0");
					getSearchResultAjax($("#searchForm").serialize());
					//필드지정후 검색Ajax  end
				}
			});
			
			$("#brandSubView > li > a").click(function(){
				var $blA = $(this);
				var $blChk = $blA.parent().find("input[type=checkbox]");
				$blChk.click();
			});

			// Sub쪽 체크 및 해제
			$("#brandSubView > li > input[type=checkbox]").click(function(){
				
				var $blChk = $(this); 
				var $blA = $blChk.parent().find("a");
				var addFlag = true;
				var addText = "";
				var brandName = $blChk.attr("data"); //나이키(NIKE)
				var brandValue = $blChk.attr("value");
					
				$("#divSubFilter > button").each(function(){
					var $mfbObj = $(this);
					//if($mfbObj.attr("value") == $blA.text()){addFlag = false;}
					if($mfbObj.attr("value") == brandValue){addFlag = false;}
				});
					
				if($blChk.is(":checked")){
					//alert("]]]" + $blChk.val());
					if(addFlag){
						$("#divSubFilter").append(
							"<button class='swiper-slide' onclick='delParamFillter($(this));' value='" + brandValue + "' data='"+brandName+"'>" + brandName + "<span><em class='blind'>닫기</em></span></button>"	
						);
					}
					
				}else{
					
					$("#divSubFilter > button").each(function(){
						var $filterBtn = $(this);
						try{
							if($filterBtn.attr("value") == brandValue){
								$filterBtn.remove();
							}
						}catch(e){
							console.log(e);
						}
					});
				}

				//필터 노출영역 유무에따른 노출
				setDivSubFilterView();
				
			});

		}/*,
		error:function(x,e,o){
			  alert("서버 통신이 원활하지 않습니다.\n" + x.status + " : " + o + " : " + e);
		}*/
    });
}

//브랜드,혜택 체크박스 셋팅
function setCheckbox(value,checkboxName) {
	
	if(value != null) {
		var values = value.split("|");
		var checkbox = $("input[name="+checkboxName+"]:checkbox");
		//var checkbox = $('.brand_category_chk input:checked');
		//alert("시작");
		$(checkbox).each(function() {
			if(jQuery.inArray($(this).attr("value"), values) >= 0) {
				$(this).attr("checked", true);
			} else {
				$(this).attr("checked", false);
			}
		});
	}
}

function setAttCheckbox(value) {
	
	if(value != null) {
		var values = value.split("|");
		var checkbox = $('#search_attribute .category_list > li > input[type="checkbox"]');

		$(checkbox).each(function() {
			if(jQuery.inArray($(this).attr("value"), values) >= 0) {

				$(this).attr("checked", true);
			} else {
				$(this).attr("checked", false);
			}
		});
	}
}


// // 메인필터값 유무에따라 영역 노출 적용
function setDivMainFilterView(){
		if ($('#divMainFilter > button').length) {
			//$("#related_word2").css("display", "block");
			//$("#related_word3").css("display", "block");
			$("#related_word2").show();
			$("#related_word2_init").show();
			$("#related_word3").show();
		} else {
			$("#related_word2").hide();
			$("#related_word2_init").hide();
			$("#related_word3").hide();
			//$("#related_word2").css("display", "none");
			//$("#related_word3").css("display", "none");
		}
}

// // 서브필터값 유무에따라 영역 노출 적용
function setDivSubFilterView(){
		if ($('#divSubFilter > button').length) {
			//$("#related_word2").css("display", "block");
			//$("#related_word3").css("display", "block");
			
			$("#related_word2").show();
			$("#related_word2_init").show();
			$("#related_word3").show();
		} else {
			$("#related_word2").hide();
			$("#related_word2_init").hide();
			$("#related_word3").hide();
			//$("#related_word2").css("display", "none");
			//$("#related_word3").css("display", "none");
		}
}

// 필터  ajax전달용 파라미터
function getParamValues(){
	var paramValue = "";
	$("#divMainFilter > button").each(function(){
		var $mfbObj = $(this);
		paramValue += $mfbObj.attr("value")+"@@";
		
	});	

	var query = $("#showQuery").val();
	var paramValues = "";
	paramValues = paramValue.split("@@");
	var cateDepth = 0;
	//카테고리 필터정리
	var cateValues1 = "";
	var cateValues2 = "";
	var cateValues3 = "";
	var cateResultValue = "";
	var categoryId,brand,attoption,plaza,benefit,color,smartpick,selectquery = "";
	
	var minPrice = -1;
	var maxPrice = -1;

	for( var i = 0; i < paramValues.length; i++) {
			if(typeof(paramValues[i]) != "undefined" || paramValues[i] != '' || paramValues[i] != 'undefined'){
				var paramVals = paramValues[i].split("^");
				if(paramVals[0] ==='categoryId'){ 
					var cateVal = "";

					cateVal = paramVals[1].split(";");
					cateDepth = paramVals[1].split(";").length;
					
					if(cateDepth == 1){
						cateValues1 += "|" + cateVal[0];
					}else if(cateDepth == 2){
						cateValues2 += "|" + cateVal[1];
					}else if(cateDepth == 3){
						cateValues3 += "|" + cateVal[2];
					}
					
				
				}else if(paramVals[0] ==='brand'){ 
					brand += "|"+paramVals[1];
				}else if(paramVals[0] ==='attoption'){ 
					attoption += "|"+paramVals[1];
				}else if(paramVals[0] ==='plaza'){ 
					plaza += "|"+paramVals[1];
				}else if(paramVals[0] ==='benefit'){ 
					benefit += " "+paramVals[1];
				}else if(paramVals[0] ==='color'){ 
					color += "|"+paramVals[1];
				}else if(paramVals[0] ==='smartpick'){ 
					smartpick = paramVals[1];
				}else if(paramVals[0] ==='selectquery'){ 
					selectquery +=" "+paramVals[1];
				}else if(paramVals[0] ==='price'){ 
					var priceValue = paramVals[1].split(":");
						minPrice = priceValue[0];
						maxPrice = priceValue[1];
				}
			}//if
	}

	if(cateValues1 != ""){cateResultValue += "1:"+cateValues1;}
	if(cateValues2 != ""){cateResultValue += "@@2:"+cateValues2;}
	if(cateValues3 != ""){cateResultValue += "@@3:"+cateValues3;}

	$("#realQuery").val(query+" "+selectquery);
	//$("#categoryDepth").val('2');
	$("#categoryId").val(cateResultValue);
	$("#brand").val(brand);
	$("#attoption").val(attoption);
	$("#plaza").val(plaza);
	$("#benefit").val(benefit);
	$("#color").val(color);
	$("#smartpick").val(smartpick);

	$("#minPrice").val(minPrice);
	$("#maxPrice").val(maxPrice);

}


//

function getPageLinksAjax(pageNo, totalCnt, dataSize, pageSize, pagingDiv){ 
    $(pagingDiv).html("");
	totalCnt = parseInt(totalCnt);// 전체레코드수 
	dataSize = parseInt(dataSize);// 페이지당 보여줄 데이타수 viewCount
	pageSize = parseInt(pageSize);// 페이지 그룹 범위 1 2 3 5 6 7 8 9 10  bundleCount
	pageNo = parseInt(pageNo);// 현재페이지 
	

	if(pageNo == 0){
		pageNo = 1;
	}

	var html = "";

	if(totalCnt == 0){ 
		return "";
	}
	

	// 페이지 카운트 
	var pageCnt = totalCnt % dataSize;

	if(pageCnt == 0){ 
		pageCnt = parseInt(totalCnt / dataSize);
	}else{ 
		pageCnt = parseInt(totalCnt / dataSize) + 1;
	} 

	//alert("pageCnt:" + pageCnt +" dataSize:" +dataSize);
	var pRCnt = parseInt(pageNo / pageSize);
	
	if(pageNo % pageSize == 0){ 
		pRCnt = parseInt(pageNo / pageSize) - 1;
	} 

	//이전 화살표 
	if(pageNo > pageSize){ 
		var s2;
		if(pageNo % pageSize == 0){ 
			s2 = pageNo - pageSize;
		}else{ 
			s2 = pageNo - pageNo % pageSize;
		} 
		html +="<button class=\"btn_pre\" onClick=\"javascript:getPageingAjax('','"+ s2 +"');\" title=\"이전 리스트\">이전 리스트</button>";
	}else{ 
		html += "<button class=\"btn_pre none\" title=\"이전 리스트\">이전 리스트</button>";
	} 

	//paging Bar
	
	for(var index=pRCnt * pageSize + 1; index<(pRCnt + 1)*pageSize + 1; index++){ 
		if(index == pageNo){ 
		 html += "<a href=\"#\" class=\"page now\">" + index + "</a>";
		}else{ 
		 html +="<a href=\"#\" class=\"page\" onClick=\"javascript:getPageingAjax('','"+index+"');\" title=\"페이징\"> "+ index +"</a>";
		} 

		if(index == pageCnt){ 
			break;
		}else {

		}

	} //for
		
	//다음 화살표 
	if(pageCnt > (pRCnt + 1) * pageSize){ 
		html += "<button class=\"btn_next\" onClick=\"javascript:getPageingAjax('','"+ ((pRCnt + 1)*pageSize + 1) +"')\" title=\"다음 리스트\">다음 리스트</button>";
	}else{ 
		html += "<button class=\"btn_next none\" title=\"다음 리시트\">다음 리스트</button>";
	} 

	$(pagingDiv).append(html);

}

function setFilterEvent(){
	
	//console.log("setFilterEvent in ");
	
	// #divMainFilter 에 필터 정보들을   #divSubFilter에 노출
	$('#filter_btn > div').unbind("click").bind("click",(function() {
		//서브필터 노출 버튼들 제거
		$('#divSubFilter > button').each(function() {
				$(this).remove();
		});
	
		$('#divMainFilter > button').each(function() {					
			var filterValue = $(this).val();
			var filterName = $(this).attr('data');


			var buttonId = $(this).attr("id");
			if(buttonId == 'priceButton'){
				$('#divSubFilter').append('<button id=\"priceButton\"class="swiper-slide" onclick="delParamFillter($(this));" value="'+filterValue+'" data="'+filterName+'">' + filterName + '<span><em class="blind">닫기</em></span></button>');
			}else if(buttonId == 'colorButton'){				
				$("#divSubFilter").append('<button id=\"colorButton\" class="swiper-slide" onclick="delParamFillter($(this));" value="'+filterValue+'" data="'+filterName+'"><div class=\"color\" style=\"background-color: '+filterName+';\">'+ filterName +'</div><span><em class=\"blind\">닫기</em></span></button>');
			}else{
				$('#divSubFilter').append('<button class="swiper-slide" onclick="delParamFillter($(this));" value="'+filterValue+'" data="'+filterName+'">' + filterName + '<span><em class="blind">닫기</em></span></button>');
			}

			$('#layer_filter_wrap input[type="checkbox"]').each(function() {
				if($(this).val() === filterValue) {
					$(this).prop('checked', true);
				}
			});
		});
	}));
	// 처음부터 div 속성을 none으로 지정하면 swiper 가 제대로 동작하지않아서 script에서 none처리
	//$("#filter_wrap > div").css("display", "none");
	//$("#filter_wrap > #filter_cate").css("display", "block");
	
	// filter_sort click : 필터옵션리스트
	$(".filter_view_wrap .filter_view .swiper-wrapper > a").unbind("click").bind("click", (function(){
		
		var clickedText =  $(this).text();
		
		$("#cate_tab_filter > li").each(function(){  
			var thisText = $(this).text(); 
			if(thisText == clickedText){
				$(this).click();
				$('#filter_btnA').click();
			}
		});
				
	})); // end, $("#filter_sort .swiper-slide > a").click(function()

	// collection change & list sort
	$("#cate_smenu select").unbind("change").bind("change", (function(){
		
		var $cateSmenuObjs = $(this);
		$cateSmenuObjs.each(function(){
			
			var id = $(this).attr("id");
			var value = $(this).val();
			
		});
	}));
	
	
	// ■ 추가
	//몰선택 검색
	$("#collectionSelect > li").click(function(){
		var coll = $(this).attr('data');
		getParamValues();
		$("#collection").val(coll);	
		$("#startCount").val("0");
		getSearchResultAjax($("#searchForm").serialize());
	});
	
	//상품정렬 검색
	$("#s0").change(function(){
		var sort = $(this).val();
		var coll = $("#collection").val();
		//if($("#sort").val() != sort)
		if(coll =='powerdeal'){
			$("#sort").val(sort);
			alert("파워딜 검색은 정렬방식을 변경할 수 없습니다.");
			return;
		}
			
		getParamValues();
		$("#sort").val(sort);
		$("#startCount").val("0");
		getSearchResultAjax($("#searchForm").serialize());
	});
	
	$('.search_container').length && defaultTab.init('search_container','line_tap','search_wrap');
	
	//$('.selectdata').length && selectChange.init();
	
}