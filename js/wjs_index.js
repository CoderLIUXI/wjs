$(function () {
    /*初始化工具提示*/
    $('[data-toggle="tooltip"]').tooltip();
    var items=$(".carousel-inner .item");
    /*监听屏幕大小动态添加图片或背景*/
    $(window).on("resize",function () {
        var width = $(window).width();
        if (width>768){
            $(items).each(function () {
                var item=$(this);
                var imgSrc = item.data("largeImage");
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            });
        }
        else {
            $(items).each(function () {
                var item=$(this);
                var imgSrc = item.data("smallImage");
                item.html($('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt=""></a>'));
            });
        }
    }).trigger("resize");
    /*添加移动端滑动操作*/
    var startX,endX;

    /*获取当前轮播图*/
    var carousel=$(".carousel");

    var carousel_inner=$(".carousel-inner")[0];
    carousel_inner.addEventListener("touchstart",function (e) {
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function (e) {
       endX=e.changedTouches[0].clientX;
       if (endX-startX>100){
           /*上一张*/
           carousel.carousel('prev');/*调用轮播图中的carousel方法*/
       }
       else if (endX-startX<-100){
           carousel.carousel('next');/*调用轮播图中的carousel方法*/
       }
    });

    /*拿到导航项*/
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    var totalWidth = 0;
    lis.each(function (index,value) {
        /*Width方法取不到padding,margin值*/
        totalWidth= totalWidth+$(value).innerWidth();
    });
   ul.width(totalWidth);

   /*插件实现导航条*/
    var myScroll = new IScroll(".tabs_parent",{
        scrollX:true,scrollY:false
    });

});