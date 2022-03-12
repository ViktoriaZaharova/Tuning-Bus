// Инициализация карты
ymaps.ready(init);

function init() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [59.866396, 30.355969],
        zoom: 17
    });


    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [59.866396, 30.355969], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/logo.png',  // картинка иконки
            iconImageSize: [59, 62],                                      // размеры картинки
            // iconImageOffset: [220, 0],// смещение картинки

        });


    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());




    function onResizeMap() {
        if ($(window).width() > '992') {
            //Set New center
            myMap.setCenter([59.866396, 30.351976], 17, {
                checkZoomRange: true
            });
        }
    } onResizeMap();

    window.onresize = function () {
        onResizeMap();
    };
}