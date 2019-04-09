(function($, document, window){
	
	$(document).ready(function(){
		var apiKey = '45f3a0a4a23f9b1083eb7dc9e8f5673b'; // PLEASE SIGN UP FOR YOUR OWN API KEY

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		function myDate(a) {
	        console.log(a);
	        var a = new Date(a + " GMT");
	        var days = new Array(7);
	        days[0] = "Sunday";
	        days[1] = "Monday";
	        days[2] = "Tuesday";
	        days[3] = "Wednesday";
	        days[4] = "Thursday";
	        days[5] = "Friday";
	        days[6] = "Saturday";
	        var r = days[a.getDay()];
	        return r;
	    }

		function weather() {

		  var location = document.getElementById("location");
		  var url = 'http://api.openweathermap.org/data/2.5/weather?id=1850147&APPID='; // https://openweathermap.org/forecast5

		  navigator.geolocation.getCurrentPosition(success, error);

		  function success(position) {
		    $.getJSON(url + apiKey, function(data) {
		      latitude = data.coord.lat;
		      longitude = data.coord.lon;
		      location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';
		    });
		  }

		  function error() {
		    location.innerHTML = "Unable to retrieve your location";
		  }

		  location.innerHTML = "Locating...";
		}

		function forecast(){
			/*var url = 'http://api.openweathermap.org/data/2.5/forecast?id=1850147&APPID='; // https://openweathermap.org/forecast5
		    $.getJSON(url + apiKey, function(data) {
			    $.each(data.list, (index, item) => {
				    var S = item.dt_text;
				    console.log(item.dt_text);
					var T = S.includes("09:00");
					if(T){	
		      			html = '<div class="forecast"><div class="forecast-header"><div class="day">'+myDate(item.dt_text)+'</div></div><div class="forecast-content"><div class="forecast-icon"> <img src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/04d.png" alt="" width=48></div><div> <i class="fa fa-sun-o"></i></div><div class="degree">23<sup>o</sup>C</div> <small>18<sup>o</sup></small><div> <i class="fa fa-moon-o"></i><div class="degree">14<sup>o</sup>C</div> <small>11<sup>o</sup></small></div></div></div>';
		      		}
		      		$('.forecast-container').append(html);
				});
		    });*/

		}

		weather();
		forecast();


	});

	$(window).load(function(){

	});

})(jQuery, document, window);