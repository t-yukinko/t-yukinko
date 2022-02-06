$(function(){

    // スムーススクロール
    $('a[href^="#"]').on("click",function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    let appear = false;
    let pagetop = $('#page_top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
            if (appear === false) {
                appear = true;
                pagetop.stop().animate({
                    'bottom': '50px' //下から50pxの位置に
                }, 300); //0.3秒かけて現れる
            }
        } else {
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'bottom': '-50px' //下から-50pxの位置に
                }, 300); //0.3秒かけて隠れる
            }
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
        return false;
    });
});

// フェードイン
$(window).fadeThis({
    speed: 500,
    offset: -200,
    reverse: false
});
