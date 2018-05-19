function getGeoCode(latitude, longitude){
    var lat = latitude;
    var long = longitude;
    var responseJSON;

    var uri = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + lat + '&lon=' + long;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('user-key', 'a5d7d8b6e3bcbabee209e2b105999150');
    
    xhr.onload = function () {
        responseJSON = JSON.parse(xhr.responseText);
        console.log(responseJSON);
        getInfo(responseJSON);
    }
    xhr.send(null);
}

function getInfo(responseJSON){
    for(var i = 0; i <responseJSON.nearby_restaurants.length; i++){
        console.log('name:', responseJSON.nearby_restaurants[i].restaurant.name);
        console.log('address:', responseJSON.nearby_restaurants[i].restaurant.location.address);
        console.log('cusine:', responseJSON.nearby_restaurants[i].restaurant.cuisines);
        console.log('average cost:', '$' + responseJSON.nearby_restaurants[i].restaurant.average_cost_for_two);
        console.log('rating:', responseJSON.nearby_restaurants[i].restaurant.user_rating.aggregate_rating);
        console.log('-------------------------')
        
    }
}

window.onload = function () {
    getGeoCode(-36.852515, 174.768618);
}