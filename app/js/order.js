$(function () {
    var topPos = $('.form-total').offset().top;
    $(window).scroll(function () {
        var top = $(document).scrollTop(),
            pip = $('.advantages-order').offset().top, //расстояние до подвала от верха окна браузера
            height = $('.form-total').outerHeight(); //получаем значение высоты пл.блока
        if (top > topPos && top < pip - height) {
            $('.form-total').addClass('fixed').fadeIn();
        } //блок будет виден, если значения соответствуют указанным
        else if (top < pip) {
            $('.form-total').removeClass('fixed');
        } //блок скроется когда достигнет заданного расстояния
        else {
            $('.form-total').removeClass('fixed');
        }
    });
});