$(window).ready(function () {

    if($(window).width() < 769) {
        $('.link-phone').insertAfter('.order-free');
        $('.link-email').insertAfter('.link-phone');
        $('.form-order').insertAfter('.you-will-know');
    } else {
        $('.link-phone').insertAfter('.logo');
        $('.link-email').insertAfter('.link-phone');
        $('.form-order').insertAfter('.order-free');
    }

    $(window).resize(function() {

        if($(window).width() < 769) {
            $('.link-phone').insertAfter('.order-free');
            $('.link-email').insertAfter('.link-phone');
            $('.form-order').insertAfter('.you-will-know');
        } else {
            $('.link-phone').insertAfter('.logo');
            $('.link-email').insertAfter('.link-phone');
            $('.form-order').insertAfter('.order-free');
        }

    });

    $('.order-free').click(function() {
        $('html, body').animate({scrollTop: $('.form-order').offset().top - 50}, 600);
    });

});