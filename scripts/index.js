function getGeoCode(latitude, longitude){
    let lat = latitude;
    let long = longitude;
    var responseJSON;

    var uri = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + lat + '&lon=' + long;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('user-key', 'a5d7d8b6e3bcbabee209e2b105999150');
    
    xhr.onload = function () {
        responseJSON = JSON.parse(xhr.responseText);
        console.log(responseJSON);
        getAddress(responseJSON);
    }
    xhr.send(null);

    
}

function getAddress(responseJSON){
    for(var i = 0; i <responseJSON.nearby_restaurants.length; i++){
        console.log(responseJSON.nearby_restaurants[i].restaurant.location.address);
    }
}

window.onload = function () {
    getGeoCode(-36.852515, 174.768618);
}