var responseJSON;

function getGeoCode(latitude, longitude) {
    var lat = latitude;
    var long = longitude;


    var uri = 'https://developers.zomato.com/api/v2.1/geocode?lat=' + lat + '&lon=' + long;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('user-key', '4809504e186237acac721723ad21ed05');

    xhr.onload = function () {
        responseJSON = JSON.parse(xhr.responseText);
        console.log(responseJSON);
        setInfo();
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
    xhr2.setRequestHeader('user-key', '4809504e186237acac721723ad21ed05');
    xhr2.onload = function () {
        menuJSON = JSON.parse(xhr2.responseText);
    }
    xhr2.send(null);
    return menuJSON;
}

var counter = 0
var latitude;
var longitude;
function nextRest(){
    console.log("click");
    document.getElementById('name').innerHTML = responseJSON.nearby_restaurants[counter].restaurant.name;
    document.getElementById('address').innerHTML = responseJSON.nearby_restaurants[counter].restaurant.location.address;
    document.getElementById('ratings').innerHTML = 'rating ' + responseJSON.nearby_restaurants[counter].restaurant.user_rating.aggregate_rating;
    document.getElementById('cuisine').innerHTML = responseJSON.nearby_restaurants[counter].restaurant.cuisines;
    document.getElementById('averagecost').innerHTML = '$' + responseJSON.nearby_restaurants[counter].restaurant.average_cost_for_two;
    document.getElementById('featureImage').src = responseJSON.nearby_restaurants[counter].restaurant.featured_image;
    latitude = responseJSON.nearby_restaurants[counter].restaurant.location.latitude;
    longitude = responseJSON.nearby_restaurants[counter].restaurant.location.longitude;
    
    counter += 1;
}
function openMap(){
    window.open('map.html', '_blank');
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
}
