document.addEventListener('DOMContentLoaded', function() {
    console.log('Backend JS');

    var mapElements = [document.querySelector('#where-to-buy'), document.querySelector('#points-map')];

    mapElements.forEach(mapElement => {
        if (!mapElement) return;
        ymaps.ready(initWhereToBuy);

        function initWhereToBuy() {
            console.log('Initializing points map');
            var pin = {
                iconLayout: 'default#image',
                iconImageHref: 'img/pin.svg',
                iconImageSize: [26, 36],
                iconImageOffset: [-13, -36]
            };

            var center = [55.796554, 49.104752];

            var pointsMapData = [
                {
                    coords: [55.831082, 49.079644],
                    title: 'Славянка',
                    content: `г. Москва, Волоколамское шоссе, д. 71 <br> <a href="#">zel-sport-pit.ru</a>`
                },
                {
                    coords: [55.815159, 49.101276],
                    title: 'Славянка',
                    content: `г. Москва, Волоколамское шоссе, д. 71 <br> <a href="#">zel-sport-pit.ru</a>`
                },
                {
                    coords: [55.812957, 49.183735],
                    title: 'Славянка',
                    content: `г. Москва, Волоколамское шоссе, д. 71 <br> <a href="#">zel-sport-pit.ru</a>`
                },
                {
                    coords: [55.79474, 49.114071],
                    title: 'Славянка',
                    content: `г. Москва, Волоколамское шоссе, д. 71 <br> <a href="#">zel-sport-pit.ru</a>`
                },
                {
                    coords: [55.833308, 49.132141],
                    title: 'Славянка',
                    content: `г. Москва, Волоколамское шоссе, д. 71 <br> <a href="#">zel-sport-pit.ru</a>`
                },
                {
                    coords: [55.776266, 49.140724],
                    title: 'Славянка',
                    content: `г. Москва, Волоколамское шоссе, д. 71 <br> <a href="#">zel-sport-pit.ru</a>`
                }
            ];

            var mapInstance = new ymaps.Map(mapElement, {
                center: center,
                zoom: 10,
                controls: []
            });

            var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="popover top">' +
                    '<a class="close" href="#"></a>' +
                    '<div class="arrow"></div>' +
                    '<div class="popover-inner">' +
                    '$[[options.contentLayout observeSize minWidth=235 maxWidth=360 maxHeight=450]]' +
                    '</div>' +
                    '</div>',
                {
                    /**
                     * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                     * @function
                     * @name build
                     */
                    build: function() {
                        this.constructor.superclass.build.call(this);

                        this._$element = $('.popover', this.getParentElement());

                        this.applyElementOffset();

                        this._$element.find('.close').on('click', $.proxy(this.onCloseClick, this));
                    },

                    /**
                     * Удаляет содержимое макета из DOM.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                     * @function
                     * @name clear
                     */
                    clear: function() {
                        this._$element.find('.close').off('click');

                        this.constructor.superclass.clear.call(this);
                    },

                    /**
                     * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onSublayoutSizeChange
                     */
                    onSublayoutSizeChange: function() {
                        MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                        if (!this._isElement(this._$element)) {
                            return;
                        }

                        this.applyElementOffset();

                        this.events.fire('shapechange');
                    },

                    /**
                     * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name applyElementOffset
                     */
                    applyElementOffset: function() {
                        this._$element.css({
                            left: -(this._$element[0].offsetWidth / 2),
                            top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                        });
                    },

                    /**
                     * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onCloseClick
                     */
                    onCloseClick: function(e) {
                        e.preventDefault();

                        this.events.fire('userclose');
                    },

                    /**
                     * Используется для автопозиционирования (balloonAutoPan).
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                     * @function
                     * @name getClientBounds
                     * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                     */
                    getShape: function() {
                        if (!this._isElement(this._$element)) {
                            return MyBalloonLayout.superclass.getShape.call(this);
                        }

                        var position = this._$element.position();

                        return new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [position.left, position.top],
                                [
                                    position.left + this._$element[0].offsetWidth,
                                    position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                                ]
                            ])
                        );
                    },

                    /**
                     * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                     * @function
                     * @private
                     * @name _isElement
                     * @param {jQuery} [element] Элемент.
                     * @returns {Boolean} Флаг наличия.
                     */
                    _isElement: function(element) {
                        return element && element[0] && element.find('.arrow')[0];
                    }
                }
            );
            // Создание вложенного макета содержимого балуна.
            var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                '<h3 class="popover-title">$[properties.balloonHeader]</h3>' + '<div class="popover-content">$[properties.balloonContent]</div>'
            );

            var objectManager = new ymaps.ObjectManager({
                clusterize: true,
                clusterHasBalloon: false,
                geoObjectOpenBalloonOnClick: true,
                clusterIconColor: '#e62f48'
            });
            mapInstance.geoObjects.add(objectManager);

            pointsMapData.forEach(function(item) {
                var objectToAdd = {
                    id: item.coords.join('-'),
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: item.coords
                    },
                    options: {
                        ...pin,
                        balloonShadow: false,
                        balloonLayout: MyBalloonLayout,
                        balloonContentLayout: MyBalloonContentLayout,
                        balloonPanelMaxMapArea: 0,
                        hideIconOnBalloonOpen: false,
                        balloonOffset: [0, -30]
                    },
                    properties: {
                        // type: item.type,
                        // allDay: item.allDay,
                        // cash: item.cash,
                        balloonContent: item.content,
                        balloonHeader: item.title
                    }
                };
                objectManager.add(objectToAdd);
            });
        }
    });

    var writeUsForm = document.querySelector('#write-us-form');
    if (writeUsForm) {
        writeUsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(writeUsForm)
                    .parsley()
                    .isValid()
            ) {
                if (typeof window.openModal === 'function') {
                    window.openModal('#write-us-success');
                    writeUsForm.reset();
                    $(writeUsForm)
                        .parsley()
                        .reset();
                }
            }
        });
    }

    var catalog = document.querySelector('.catalog');

    if (catalog && catalogList) {
        var loadMore = catalog.querySelector('.catalog__show-more-link');
        var catalogResults = catalog.querySelector('.catalog__results');
        var loadMoreTextElement = catalog.querySelector('.catalog__show-more-link-text');
        var loadMoreOriginalText = loadMoreTextElement.textContent;
        console.log(catalogList);

        loadMore.addEventListener('click', function(event) {
            event.preventDefault();

            var catalogListCopy = catalogList.cloneNode(true);

            var catalogItems = Array.prototype.slice.call(catalogListCopy.querySelectorAll('.catalog__list-item'));

            loadMore.classList.add('loading');
            loadMoreTextElement.textContent = 'Загрузка';

            setTimeout(function() {
                loadMoreTextElement.textContent = loadMoreOriginalText;
                loadMore.classList.remove('loading');
                catalogResults.appendChild(catalogListCopy);

                if (typeof window.revealElements === 'function') {
                    window.revealElements(catalogItems);
                }
                if (typeof window.catalogCards.initializeCardSliders === 'function') {
                    window.catalogCards.initializeCardSliders();
                }
            }, 3000);
        });
    }
});
