$(window).scroll(function () {
    var scroll_picca = $('.form-order').offset().top;

    if ($(this).scrollTop() > scroll_picca) {
        $('.form-total').addClass('scroll');

    } else {
        $('.form-total').removeClass('scroll');
    }
});


$(document).ready(function () {

// Получаем нужный элемент
    var element = document.querySelector('.scroll-stop');

    var visible = function (target) {
        // Все позиции элемента
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            // console.clear();
            $('.form-total').removeClass('scroll');
            console.log('Вы видите элемент :)');
        }
    };

// Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', function () {
        visible(element);
    });

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
    visible(element);
});