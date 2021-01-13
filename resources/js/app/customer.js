/* faq on off */
var customerOnoff = {
	 init:function(obj1){
        this.$wrap = $('.'+obj1);
        this.$btn = this.$wrap.find('dt');
        this.act();
    },
    act:function(){

        var _this = this;

        this.$btn.on('click',function(){
            var $this = jQuery(this);

            if(!$this.hasClass('active')){
                $this.next().show();
                $this.addClass('active');
            }else if($this.hasClass('active')){
                $this.next().hide();
                $this.removeClass('active');
            }

        });
        
    }
}
$('.openclose_list').length && customerOnoff.init('openclose_list');
$('.faqList').length && customerOnoff.init('faqList');

/* 메뉴 슬라이드 */
var swiperCumenu = {
    
    item:function(obj,page){

        var swiper = new Swiper('.'+obj, {
            pagination: '.'+page,
            paginationClickable: true,
            slidesPerView: 'auto',
            freeMode: true
        });

        var $idx = $('.swiper-slide.on').index(); 

        swiper.slideTo($idx, 0, true);
    }
}
jQuery('.swiper-cu').length && swiperCumenu.item('swiper-cu','swiper-cu-pagination');

