function addGoodsByHtml(prodList) {
	var pdGoodsHtml = "";
	pdGoodsHtml = '<dl class="deal_list">';
	pdGoodsHtml += '<dt>';
	pdGoodsHtml += '	<a href="javascript:goMainPowerDeal(' + prodList.goods_id +'); ">';
	pdGoodsHtml += '		<img src="' + prodList.deal_goods_mobile_banner +'" alt="'+prodList.goods_name+'" onerror="noImageMain(this);" />';
	pdGoodsHtml += '		<span class="info time remaintime opened saletime" data-endtime="09/05/2016 16:49:00">';
	pdGoodsHtml += '';
	
	if(parseInt(prodList.goods_cnt) == 1) {
		if(parseInt(prodList.dc_rate) > 0) {
			pdGoodsHtml += '	<li class="sale"><span class="blind">SALE</span><span class="percent"><i class="num">' +comma(prodList.dc_rate)+'</i>%</span></li>';
		}
	}
	if(prodList.free_deliv_yn == "Y") {
		pdGoodsHtml += '		<strong>무료배송</strong>';
		pdGoodsHtml += '		<em>행사종료</em>';
	}
	if(parseInt(prodList.diff_date) == 0){
		pdGoodsHtml += '		<strong>오늘마감</strong>';
		pdGoodsHtml += '		<em>행사종료</em>';
	}
	pdGoodsHtml += '		</span>';
	
	if(prodList.upper_vendor_id == '50001') {
		pdGoodsHtml += ' <i class="flag_akplaza"><em class="blind">AK플라자</em></i>';
	}
	pdGoodsHtml += '		</a>';
	pdGoodsHtml += '	</dt>';
	pdGoodsHtml += '	<dd>';
	pdGoodsHtml += '		<a href="javascript:goMainPowerDeal(' + prodList.goods_id +'); ">';
	pdGoodsHtml += '			<strong>'+prodList.goods_name+'</strong>';
	pdGoodsHtml += '			<span>'+comma(prodList.sale_price);
	pdGoodsHtml += '				<i>원';
	
	if(parseInt(prodList.goods_cnt) > 1){
		pdGoodsHtml += '~';
	}
	
	pdGoodsHtml += '			</span>';
	
	if(parseInt(prodList.ord_cnt) > 0){
		pdGoodsHtml += '		<em>'+comma(prodList.ord_cnt)+'개 판매중</em>';
	}
	
	pdGoodsHtml += '		</a>';
	pdGoodsHtml += '	</dd>';
	pdGoodsHtml += '</dl>';

	return pdGoodsHtml;
}
