var apiKey = '7eef78754aaa2ca60da79139ada4f6f4';
var cityName = 'Chicago';

var queryURL_getCoords = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=7eef78754aaa2ca60da79139ada4f6f4&q=' + cityName;


// Gets coordinates by city name so we can make the onecall ajax call 
function getWeather() {
    var lat;
    var lon;
    $.ajax({
        url: queryURL_getCoords,
        method: 'GET'
    }).then(function(response) {
        lat = response.coord.lat;
        lon = response.coord.lon;
        var queryURL = 'https://api.openweathermap.org/data/2.5/onecall?appid=7eef78754aaa2ca60da79139ada4f6f4&lat=' + lat + '&lon=' + lon;
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response){
            console.log(response)
        })
    }); 
}

getWeather();


