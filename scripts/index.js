var responseJSON;

function getGeoCode(latitude, longitude) {
    var lat = latitude;
    var long = longitude;
    

    var uri = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + lat + '&lon=' + long;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('user-key', '3d0ab60f2f13468436ded2fa7d6a0188');

    xhr.onload = function () {
        responseJSON = JSON.parse(xhr.responseText);
        console.log(responseJSON);
        setInfo();
        nextRest();
    }
    xhr.send(null);

}

/* function getMap(latCode, lonCode) {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            new ol.layer.Vector({
                source: new ol.source.Vector({features: new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([lonCode, latCode]))
                })}),
                style: new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 
                    })
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lonCode, latCode]),
            zoom: 18
        })
    })
} */

function getMenu(id) {

    var menuJSON;
    menu_uri = 'https://developers.zomato.com/api/v2.1/dailymenu?res_id=' + id;
    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", menu_uri, true);
    xhr2.setRequestHeader('Accept', 'application/json');
    xhr2.setRequestHeader('user-key', '3d0ab60f2f13468436ded2fa7d6a0188');
    xhr2.onload = function () {
        menuJSON = JSON.parse(xhr2.responseText);
    }
    xhr2.send(null);
    return menuJSON;
}

var counter = 0
function nextRest(){
    console.log("click");
    document.getElementById('name').innerHTML = responseJSON.nearby_restaurants[counter].restaurant.name;
    document.getElementById('address').innerHTML = responseJSON.nearby_restaurants[counter].restaurant.location.address;
    document.getElementById('ratings').innerHTML = 'rating ' + responseJSON.nearby_restaurants[counter].restaurant.user_rating.aggregate_rating;
    document.getElementById('cuisine').innerHTML = responseJSON.nearby_restaurants[counter].restaurant.cuisines;
    document.getElementById('averagecost').innerHTML = '$' + responseJSON.nearby_restaurants[counter].restaurant.average_cost_for_two;
    document.getElementById('featureImage').src = responseJSON.nearby_restaurants[counter].restaurant.featured_image;
    counter += 1;
}

function setInfo() {
    for (var i = 0; i < responseJSON.nearby_restaurants.length; i++) {

        console.log('name:', responseJSON.nearby_restaurants[i].restaurant.name);
        console.log('address:', responseJSON.nearby_restaurants[i].restaurant.location.address);
        console.log('cuisine:', responseJSON.nearby_restaurants[i].restaurant.cuisines);
        console.log('average cost:', '$' + responseJSON.nearby_restaurants[i].restaurant.average_cost_for_two);
        console.log('rating:', responseJSON.nearby_restaurants[i].restaurant.user_rating.aggregate_rating);
        console.log('photo url:', responseJSON.nearby_restaurants[i].restaurant.featured_image);
        //console.log('menu:', getMenu(responseJSON.nearby_restaurants[i].restaurant.id));
        console.log('-------------------------')

    }
}

window.onload = function () {
    getGeoCode(-36.852515, 174.768618);
}