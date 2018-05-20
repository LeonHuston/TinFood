function init() {

    var latCode = -36.848996
    var lonCode = 174.766213
    var tileLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    var view = new ol.View({
        center: ol.proj.fromLonLat([lonCode, latCode]),
        zoom: 18
    });

    var pointFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([lonCode, latCode]))
    })

    var pointStyle = new ol.style.Style({
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
    })

    var vectorSource = new ol.source.Vector({
        features: pointFeature
    })

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: pointStyle
    });

    var map = new ol.Map({
        target: 'map',
        layers: [
            tileLayer,
            vectorLayer
        ],
        view: view,
        interactions: new ol.interaction.defaults({
            dragPan: false,
            keyboardPan: false
        })
    })
}