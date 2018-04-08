$(document).on('ready', function () {
   $("input[name^='user-phone']").mask("+7 (999) 999 - 9999");
    $('.scrollbar-inner').scrollbar();

    var menu = document.querySelector('#menu');
    var menu_spy = new MenuSpy(menu);

    $("#menu").on("click", 'a', function(event) {
        event.preventDefault();
        var scrollAnchor = $(this).attr("href");
        var scrollVal = $(scrollAnchor).offset().top - 0;
        $('html, body').animate({scrollTop: scrollVal}, 400);
        return false;
    });

$('.navbar .navbar-nav a, .btn-down').click(function () {
    var el = $(this).attr('href');
    $('html,body').animate({scrollTop: $(el).offset().top - 100}, 600);
    return false;
});
//при нажатии на ссылку
$(".navbar-collapse a").click(function () {
    $('.nav-item.active').removeClass('active');
    $(this).parent('.nav-item').addClass('active');
    //если она не имеет класс dropdown-toggle
    if (!$(this).hasClass("dropdown-toggle")) {
        //то закрыть меню
        $(".navbar-collapse").collapse('hide');
    }
});
$(window).scroll(function () {
    if (screen.width <= '992') return;
    if ($(window).scrollTop() >= 850) {
        $('.navbar').css({opacity: '1'});
        $('.navbar').addClass('fixed-top');
        $('#phone').css({opacity: '1'});
    }
    if ($(window).scrollTop() <= 600) {
        $('.navbar').css({opacity: '1'});
        $('.navbar').removeClass('fixed-top');
    }
    if ($(window).scrollTop() > 410 && $(window).scrollTop() < 850) {
        $('.navbar').css({
            opacity: '0'
        });
        $('#phone').css({opacity: '0'});
    }
});
})
;