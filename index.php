<?php
	$cities = json_decode(file_get_contents('city.list.json'));
	$cityid = 1850147;
	if(isset($_REQUEST['city'])){
		$cityid = $_REQUEST['city'];
	}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1">
		
		<title>Open Weather App</title>

		<!-- Loading third party fonts -->
		<link href="http://fonts.googleapis.com/css?family=Roboto:300,400,700|" rel="stylesheet" type="text/css">
		<link href="fonts/font-awesome.min.css" rel="stylesheet" type="text/css">

		<!-- Loading main css file -->
		<link rel="stylesheet" href="style.css">
		
		<!--[if lt IE 9]>
		<script src="js/ie-support/html5.js"></script>
		<script src="js/ie-support/respond.js"></script>
		<![endif]-->

	</head>


	<body>
		
		<div class="site-content">
			<div class="site-header">
				<div class="container">
					<a href="index.php" class="branding">
						<img src="images/logo.png" alt="" class="logo">
						<div class="logo-type">
							<h1 class="site-title">PHP Exercise: Weather App</h1>
						</div>
					</a>

					<!-- Default snippet for navigation -->
					<div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<!-- <li class="menu-item current-menu-item"><a href="index.html">Home</a></li> -->
						</ul> <!-- .menu -->
					</div> <!-- .main-navigation -->

					<div class="mobile-navigation"></div>

				</div>
			</div> <!-- .site-header -->

			<div class="hero" data-bg-image="images/banner.png">
				<div class="container">
					<form action="" method="post" class="find-location">
						<select name="city" type="text" placeholder="Find your location...">
							<option></option>
							<?php
								foreach ($cities as $city) {
									echo '<option value="'.$city->id.'">'.$city->name.'</option>';
								}
							?>
						</select>
						<input type="submit" value="Find">
					</form>

				</div>
			</div>
			<div class="forecast-table">
				<div class="container">
					<div class="forecast-container">
						<div class="today forecast">
							<div class="forecast-header">
								<div class="day">Today</div>
								<div class="date"><?php echo date('d F Y'); ?></div>
							</div> <!-- .forecast-header -->
							<div class="forecast-content">														
						      <div id="openweathermap-widget-15"></div>
						      <script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 15,cityid: '<?=$cityid?>',appid: '45f3a0a4a23f9b1083eb7dc9e8f5673b',units: 'metric',containerid: 'openweathermap-widget-15',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>
						      <div id="location"></div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<main class="main-content">

				<div class="fullwidth-block" data-bg-color="#262936">

				</div>

			</main> <!-- .main-content -->

			<footer class="site-footer">
				<div class="container">
					<p class="colophon">Copyright 2019 Elizabeth Charmaine Torio. All rights reserved</p>
				</div>
			</footer> <!-- .site-footer -->
		</div>
		
		<script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/app.js"></script>
		
	</body>

</html>