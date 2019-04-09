function weather() {

  var location = document.getElementById("location");
  //var apiKey = 'f536d4c3330c0a1391370d1443cee848'; // PLEASE SIGN UP FOR YOUR OWN API KEY
  //var url = 'https://api.forecast.io/forecast/';
  var apiKey = 'ee3bc623fbfceba1bf102fd6fd1dc41e'; // PLEASE SIGN UP FOR YOUR OWN API KEY
  var url = 'http://api.openweathermap.org/data/2.5/weather?id=1850147&APPID=';
  //var url = 'https://openweathermap.org/forecast5';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {


    /* $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html(data.currently.temperature + '° F');
      $('#minutely').html(data.minutely.summary);
    });*/
    $.getJSON(url + apiKey, function(data) {
      latitude = data.coord.lat;
      longitude = data.coord.lon;
      location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';
      $('#temp').html(data.currently.temperature + '° F');
      $('#minutely').html(data.minutely.summary);
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();