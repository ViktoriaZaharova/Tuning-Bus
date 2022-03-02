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
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});