<!DOCTYPE HTML>
<html>
	
<head>
	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="../css/title-bar.css">
	<link rel="stylesheet" href="../css/main.css">
	
	<!-- <script type="text/javascript" src="../js/pdfobject.js"></script>
	<script type='text/javascript'>

	  function embedPDF(){
	
	    var myPDF = new PDFObject({url: 'Ronak_Mehta_Resume.pdf',
	      							pdfOpenParams: { scrollbars: '0' }
	      							}).embed('resume'); 
	    // Be sure your document contains an element with the ID 'resume' 
	  }
	
	  window.onload = embedPDF; //Feel free to replace window.onload if needed.
	
	</script> -->
	
</head>

<?php include '../header.php'; ?>

<body>

	<div class="content">
		<div class="container" align="center">
			<h1>R&eacute;sum&eacute;</h1>
			<!-- <div id="resume" width="80%" height="1500">
				
			</div> -->
			<object data="Ronak_Mehta_Resume.pdf" type="application/pdf" width="80%" height="1100">
  					<p>Ronak Mehta's Resume <a href="Ronak_Mehta_Resume.pdf">My Resume</a></p>
			</object>
		</div>
	</div>

</body>

</html>