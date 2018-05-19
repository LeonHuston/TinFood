function getGeoCode(latitude, longitude){
    let lat = latitude;
    let long = longitude;
    var uri = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + lat + '&lon=' + long;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('user-key', 'a5d7d8b6e3bcbabee209e2b105999150');
    
    xhr.onload = function () {
        var responseJSON = JSON.parse(xhr.responseText);
        console.log(responseJSON);
    }
    xhr.send(null);
}