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

$('.btn-toggle-blog').on('click', function (e) {
    e.preventDefault();
    $('.blog-col:hidden').slice(0, 3).slideDown();

    var onBlock = $('.blog-col:hidden').length;
    if (onBlock <= 0) {
        $('.btn-toggle-blog').hide();
    }
});

// активная ссылка меню
$('.blog-section-list li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

$('.recommended-article-slider').slick({
    slidesToShow: 4,
    appendArrows: '.recommended-article-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click", function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.accordion > .card .card-body').each(function () {
    if ($(this).find('.list-checkbox li').length > 8) {
        $(this).find('.list-checkbox li').slice(8).hide();
        $(this).append('<a href="#" class="color-accent links-load">Показать все</a>');
    }

});

// hidden list > 5

// show list all
$('.links-load').on('click', function (e) {
    e.preventDefault();
    $('.list-checkbox li:hidden').slice(0, 4).slideDown();

    var onBlock = $('.list-checkbox li:hidden').length;
    if (onBlock <= 0) {
        $('.links-load').hide();
    }
});



$('.btn-filter').on('click', function (e) {
    e.preventDefault();
    $('.sidebar').fadeToggle();
    $('.overlay').fadeToggle();
});

$('.btn-close-sidebar, .overlay').on('click', function () {
    $('.overlay').fadeOut();
    $('.sidebar').fadeOut();
});


$('.product-gallery-preview').slick({
    slidesToShow: 4,
    infinite: false,
    vertical: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.product-gallery-photo',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                vertical: false,
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 420,
            settings: {
                vertical: false,
                slidesToShow: 3,
            }
        }

    ]
});

$('.product-gallery-photo').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
});

//плавный скролл
$(document).ready(function () { //плавный скролл
    $(".go_to").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            headerHeight = $('header').height(),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 500 мс
        $('body, html').animate({scrollTop: top - headerHeight}, 500);
    });
});