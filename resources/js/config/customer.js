/* 고객센터 상단 메뉴 */
var myScrolls = {
    init:function(){
        //var myScroll = new IScroll('#faq_wrap',{ scrollX: true, scrollY: false, mouseWheel: true});
    }
}
$('#faq_wrap').length && myScrolls.init();

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



