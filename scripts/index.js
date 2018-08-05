var responseJSON;

function getGeoCode(latitude, longitude) {
    var lat = latitude;
    var long = longitude;


    var uri = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + lat + '&lon=' + long;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = function () {
        responseJSON = JSON.parse(xhr.responseText);
        console.log(responseJSON);
        nextRest();
    }
    xhr.send(null);

}


function getMenu(id) {

    var menuJSON;
    menu_uri = 'https://developers.zomato.com/api/v2.1/dailymenu?res_id=' + id;
    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", menu_uri, true);
    xhr2.setRequestHeader('Accept', 'application/json');
    xhr2.onload = function () {
        menuJSON = JSON.parse(xhr2.responseText);
    }
    xhr2.send(null);
    return menuJSON;
}

var counter = 0
function nextRest(){
    document.getElementById('name').innerHTML = responseJSON.nearby_restaurants[counter].restaurant.name;
    document.getElementById('address').innerHTML = responseJSON.nearby_restaurants[counter].restaurant.location.address;
    document.getElementById('ratings').innerHTML = 'Rating: ' + responseJSON.nearby_restaurants[counter].restaurant.user_rating.aggregate_rating;
    document.getElementById('cuisine').innerHTML = 'Cuisine: ' + responseJSON.nearby_restaurants[counter].restaurant.cuisines;
    document.getElementById('averagecost').innerHTML = '$' + responseJSON.nearby_restaurants[counter].restaurant.average_cost_for_two + ' for two people.';
    document.getElementById('featureImage').src = responseJSON.nearby_restaurants[counter].restaurant.featured_image;

    var taglines = [
        "One is never enough",
        "Satisfy your cravings",
        "No, I am my father",
        "I'm loving it",
        "No, we aren't voilating copyright law",
        "Please find our complaints department below",
        "Click, Match, Eat",
        "Geographical center of the world",
        "Finger clicking good",
        "We're not responsible for food-poisoning claims"
    ];
    var randomtag = taglines[Math.floor(Math.random()*10)];
    document.getElementById("tagline").innerHTML=randomtag;

    counter += 1;
    if (counter >= responseJSON.nearby_restaurants.length){
        counter = 0;
    }
}


function openMap(){
    window.open('map.html', '_blank');
}


window.onload = function () {
    getGeoCode(-36.852515, 174.768618);
}
