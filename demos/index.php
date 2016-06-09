<!DOCTYPE HTML>
<html>
	
<head>
	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="../css/title-bar.css">
	<link rel="stylesheet" href="../css/main.css">

 	<script type="text/javascript" src="../js/jquery-2.1.3.min.js"></script>
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<script type="text/javascript" src="../js/getQueryParams.js"></script>
	<script type="text/javascript" src="NW.js"></script>
	<script type="text/javascript">
    	$.get('data.txt', function(data){
		    var allTextLines = data.split(/\r\n|\n/);
		    var headers = allTextLines[0].split(',');
		    var lines = [];

		    for (var i=1; i<allTextLines.length; i++) {
		        var data = allTextLines[i].split(',');
		        if (data.length == headers.length) {

		            var tarr = [];
		            for (var j=0; j<headers.length; j++) {
		                tarr.push(headers[j]+":"+data[j]);
		            }
		            lines.push(tarr);
		        }
		    }
		    // alert(lines);
		    //console.log(lines);
    	});
	</script>
</head>

<?php include '../header.php'; ?>

<body>
	
	<div class="content">
		<div class="container">
			<h1>Demos</h1>
			<p>Implementations of various methods and stuff.</p>

			<div id="NW" align="center">

				<form method="GET">
					Bandwidth: <input type="text" name="bandwidth"> <input type="submit" value="Update">
				</form>

				<!--php script here probably-->

				<div id="chart_div" style="width: 900px; height: 500px"></div>

			</div>


		</div>
	</div>

</body>

</html>