function init() {
    var latCode = -36.848996;
    var lonCode = 174.766213;

    var layerTile = new ol.layer.Tile({
        source: new ol.source.OSM()
    })

    var vectorSource = new ol.source.Vector({
        features: new ol.Feature({
            geometry: new ol.geom.Point(([lonCode, latCode])),

        })
    });
    var map_view = new ol.View({
        center: ol.proj.fromLonLat([lonCode, latCode]),
        zoom: 18
    });
    var layerVector = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 7,
                snapToPixel: false,
                fill: new ol.style.Fill({
                    color: 'red'
                }),
                stroke: new ol.style.Stroke({
                    color: 'black',
                    width: 3
                })
            })
            /*new ol.style.Icon({
                src: 'http://www.yeskids.org/wp-content/uploads/2016/10/YES-logo_2016-WEB.png',
                anchor: [0.5, 0.5],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction'
            })*/
        })
    });

    var map = new ol.Map({
        target: 'map',
        layers: [
            layerTile,
            layerVector
        ],
        view: map_view
    })
}