document.addEventListener('DOMContentLoaded', function() {
    console.log('Backend JS');

    var checkoutPointsMap = document.querySelector('#points-map');

    if (checkoutPointsMap) {
        ymaps.ready(initCheckoutPointsMap);

        function initCheckoutPointsMap() {
            console.log('Initializing points map')
            var pin = {
                iconLayout: 'default#image',
                iconImageHref: 'img/pin.svg',
                iconImageSize: [26, 36],
                iconImageOffset: [-13, -36]
            };

            var center = [55.796554, 49.104752];

            var pointsMapData = [
                {
                    coords: [55.831082, 49.079644]
                },
                {
                    coords: [55.815159, 49.101276]
                },
                {
                    coords: [55.812957, 49.183735]
                },
                {
                    coords: [55.79474, 49.114071]
                },
                {
                    coords: [55.833308, 49.132141]
                },
                {
                    coords: [55.776266, 49.140724]
                }
            ];

            var mapInstance = new ymaps.Map(checkoutPointsMap, {
                center: center,
                zoom: 10,
                controls: []
            });

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
                    options: pin,
                    properties: {
                        // type: item.type,
                        // allDay: item.allDay,
                        // cash: item.cash,
                        // balloonContent: item.content
                    }
                };
                objectManager.add(objectToAdd);
            })
        }
    }
});
