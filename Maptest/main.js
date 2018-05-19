function init() {
    var latCode = -36.848996;
    var lonCode = 174.766213;
    var map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),
                new ol.layer.Vector({
                    source: new ol.source.Vector({
                        features: new ol.Feature({
                            geometry: new ol.geom.Point({
                                coordinates: lonCode,
                                latCode
                            })
                        })
                    })

                }),
                style: new ol.style.Style({
                    image: new ol.style.Icon({
                        src: "/Icons/Map-Marker.png",
                        opacity: 0.75
                    })
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([lonCode, latCode]),
                zoom: 18
            })
        )

    }

    /*
    function drawMap() {
        var latCode = -36.848996;
        var lonCode = 174.766213;

        var vectorSource = new ol.source.Vector()
        var vectorLayer = new ol.layer.Vector({
            source: vectorSource
        })

        var olView = new ol.View({
            center: ol.proj.fromLonLat([lonCode, latCode]),
            zoom: 18
        })

    }
    */