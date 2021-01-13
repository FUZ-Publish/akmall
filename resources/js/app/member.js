/* 한글자판 */
var korKey = {
    init:function(){
        this.$btn = $('.id_save .key button');
        this.act();
    },
    act:function(){
        var _this = this;
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            var $index = $this.index();
            if(!$this.hasClass('active')){
                $this.addClass('active');
                $this.closest('.id_save').next().show();
            }else if($this.hasClass('active')){

                $this.removeClass('active');
                $this.closest('.id_save').next().hide();
            }

        });
    }
}
$('.id_save .key').length && korKey.init();

/* naver 계정 */
var pointsave = {
    init:function(){
        this.$btn = $('.inp_acont');
        this.$tg = $('.inp_naver');
        this.act();

    },
    act:function(){

        var _this = this;
        this.$btn.on('change',function(){
            var $this = jQuery(this);
            var $index = $this.closest('li').index();
            //삭제
//            if($this.is(':checked')){
//                _this.$tg.prop('readonly', false);
//                _this.$tg.focus();
//            }else if(! $this.is(':checked')){
//                _this.$tg.prop('readonly', true);
//            }
        });
        
    }    
}
jQuery('.inp_naver').length && pointsave.init();

/* layer tooltip */
var tooltipMem = {
    init:function(obj1,obj2){
        this.$btn = $('.'+obj1 + ' span');
        this.$tg = $('.'+obj2);
        this.act();
        this.close(obj1,obj2);

    },
    act:function(){
        var _this = this;
        this.$btn.on('click',function(){
            var $this = jQuery(this);
            $this.parent().next().show();
        });
    },
    close:function(obj1,obj2){
        var _this = this;
        this.$tg.find('.btn_pop_close').on('click',function(){
            var $this = jQuery(this);
            $this.closest('.'+obj2).hide();
        });
    }
}
$('.tit_help').length && tooltipMem.init('tit_help','login_help');



