$(window).ready(function () {

    if($(window).width() < 769) {
        $('.link-phone').insertAfter('.order-free');
        $('.link-email').insertAfter('.link-phone');
    } else {
        $('.link-phone').insertAfter('.logo');
        $('.link-email').insertAfter('.link-phone');
    }

    $(window).resize(function() {

        if($(window).width() < 769) {
            $('.link-phone').insertAfter('.order-free');
            $('.link-email').insertAfter('.link-phone');
        } else {
            $('.link-phone').insertAfter('.logo');
            $('.link-email').insertAfter('.link-phone');
        }

    });

    $('.order-free').click(function() {

        if($(window).width() < 769) {
            $('.form-wrap').fadeIn(400);
        } else {
            $('html, body').animate({scrollTop: $('.form-order').offset().top - 50}, 600);
        }

    });

    $('.form-wrap').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-order')).length) {
            $('.form-wrap').fadeOut();
        }
        if ($target.hasClass('close-window')){
            $('.form-wrap').fadeOut();
        }
    });

});