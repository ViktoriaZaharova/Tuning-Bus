$(window).scroll(function () {
    var heightHeader = $('header').height();

    if ($(this).scrollTop() > heightHeader) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});


$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

// событие клика по веб-документу
$(document).mouseup(function (e) {
    var div = $(".mobile-menu");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.fadeOut();
    }
});

$('.links-toggle').on('click', function (e) {
    e.preventDefault();
    $('.box-text-hidden').addClass('open');
    $(this).hide();
});

$('.btn-toggle').on('click', function (e) {
    e.preventDefault();
    $('.works-box-col').fadeIn();
    $(this).hide();
});