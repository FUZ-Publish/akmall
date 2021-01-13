$(function(){
	listNum = $('.guideTbl01.blue tbody').length;
	sum = 0;
	sumNum = 0;
	tName = ""
	htmlSum = ""
	totalSum = 0;
	
	//항목별 합계 구해

	for(var i = 0 ; i < listNum ; i ++){
		sum = 0;
		listNum2 = $('.guideTbl01.blue tbody').eq(i).children('tr').length;
		for(var j = 0 ; j < listNum2 ; j ++){
			tName = $('.guideTbl01.blue tbody').eq(i).children('tr').eq(j).children('td').eq(0).text()
			
			if($('.guideTbl01.blue tbody').eq(i).children('tr').eq(j).children('td').eq(6).text() == "Y"){
			sumNum = 1
			}
			else{
				sumNum = 0
			}
			sum += sumNum				
		}

		// 작업공정률 동적 생성
		if(i % 4 == 0)htmlSum += '<tr>'
		htmlSum += '<th scope="row">'+tName+'</th><td class="alC">'+Math.ceil(sum *  (100/(listNum2)))+'％</td>'
		
		totalSum += sum *  (100/(listNum2));

	}
	// 작업공정률 빈박스 채워넣어주기
	if(listNum % 4 != 0)
	{
		if(listNum % 4 == 1)
		{
			htmlSum += '<th scope="row"></th><td class="alC"></td><th scope="row"></th><td class="alC"></td><th scope="row"></th><td class="alC"></td>'
		}
		else if(listNum % 4 == 2)
		{
			htmlSum += '<th scope="row"></th><td class="alC"></td><th scope="row"></th><td class="alC"></td>'
		}
		else if(listNum % 4 == 3)
		{
			htmlSum += '<th scope="row"></th><td class="alC"></td>'
		}
	}
	$('.totalNum').text("["+(Math.ceil(totalSum / listNum))+"%]");
	$('.rowtbl tbody').html(htmlSum);
	
	// 인풋 클릭시 전체/완료목록/미완료목록
	$('input').click(function(){
		
		switch($(this).attr('id'))
		{
			case('muSort1'):
				$('.guideTbl01.blue tbody tr').css('display','')
			break;
			case('muSort2'):
				for( i = 0 ; i < listNum ; i ++){
				
					listNum2 = $('.guideTbl01.blue tbody').eq(i).children('tr').length;
					for( j = 0 ; j < listNum2 ; j ++){
						if($('.guideTbl01.blue tbody').eq(i).children('tr').eq(j).children('td').eq(6).text() == "Y"){
							$('.guideTbl01.blue tbody').eq(i).children('tr').eq(j).css({'display':''})
						}
						else{
							$('.guideTbl01.blue tbody').eq(i).children('tr').eq(j).css({'display':'none'})
						}
					}
					
				}
			break;
			case('muSort3'):
				for( i = 0 ; i < listNum ; i ++){
				
					listNum2 = $('.guideTbl01.blue tbody').eq(i).children('tr').length;
					for( j = 0 ; j < listNum2 ; j ++){
						if($('.guideTbl01.blue tbody').eq(i).children('tr').eq(j).children('td').eq(6).text() == "N"){
							$('.guideTbl01.blue tbody').eq(i).children('tr').eq(j).css({'display':''})
						}
						else{
							$('.guideTbl01.blue tbody').eq(i).children('tr').eq(j).css({'display':'none'})
						}
					}
					
				}
			break;
		}
		
	});
	

});