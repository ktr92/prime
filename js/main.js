$(document).ready(function() {
    new WOW().init();
    $("input[type=tel]").mask("+7 (999) 999-99-99");

    
});


$(window).scroll(function() {
    scroll = $(window).scrollTop();

    if (scroll >= 700) $('#header').addClass('fixed');
    else $('#header').removeClass('fixed');
});





$(function() {
    $('.menumobile').click(function(event) {
        $(this).toggleClass('active');
        $('.header__menu').slideToggle();
    });
    $('.closemenu').click(function(event) {
        $('.menumobile').toggleClass('active');
        $('.header__menu').slideToggle();
    });
});


$(document).ready(function() {



    var btn = $('.up');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    jQuery("a[href^='#']").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 90;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
});


$(document).ready(function() {
    $('.close-modal').on('click', close_modal);
    $('#modal_close_href').on('click', close_modal);

    function close_modal() {
        $('.dom-popup').css("display", "none");
    }
});