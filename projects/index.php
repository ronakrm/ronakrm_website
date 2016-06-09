<!DOCTYPE HTML>
<html>
	
<head>
	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="../css/title-bar.css">
	<link rel="stylesheet" href="../css/main.css">
	<link rel="stylesheet" href="../css/twocolumn.css">
</head>

<?php include '../header.php'; ?>

<body>

	<div class="content">
		<div class="container">
			<table id="projects">
				<colgroup>
					<col id="sidebar">
					<col id="meat">
				</colgroup>
				<tr id="firstrow">
					<td>
						<div id="project-heading">
							<h1>Projects</h1>
						</div>
					</td>
					<td>
						<div id="project-title">
							<div class="container">
								<div id="t-default">
									<h2></h2>
								</div>
								<div id="t-aladdin" style="display:none">
									<h2>Active Learning in Adversarial Distributed Domains Involving Networks (ALADDIN)</h2>
								</div>
								<div id="t-uavs" style="display:none">
									<h2>UAVs in Agriculture: Perceptions, Prospects, and "Probably Not"</h2>
								</div>
								<div id="t-website" style="display:none">
									<h2>Website Design and Development</h2>
								</div>
								<div id="t-design-mfg" style="display:none">
									<h2>Mechanical Design and Manufacturing Robot Competition</h2>
								</div>
								<div id="t-balancing-robot" style="display:none">
									<h2>Self-Balancing Robot: Embedded Microprocessor Systems and Design Project</h2>
								</div>
								<div id="t-autonomous" style="display:none">
									<h2>Autonomous Maze Traversal Robot</h2>
								</div>
								<div id="t-robogoalie" style="display:none">
									<h2>RoboGoalie: Object Tracking and Path Prediction</h2>
								</div>
							</div>
						</div>
					</td>
				</tr id="secondrow">
				<tr>
					<td>
						<div id="project-list">
							<div class="container">
								<h3>Graduate</h3>
									<p id="-aladdin">Adversarial Active Learning</p>
									<p id="-uavs">UAVs in Agriculture</p>
								<h3>Personal</h3>
									<p id="-website">This Website!</p>
								<h3>Undergraduate</h3>									
									<p id="-design-mfg">Design and Manufacturing</p>
									<p id="-balancing-robot">Self-Balancing Robot</p>
									<p id="-autonomous">Autonomous Maze Traversing Robot</p>
									<p id="-robogoalie">RoboGoalie</p>
							</div>
						</div>
					</td>
					<td>
						<div id="selected-project">
							<div class="container">
								<div id="default">
									<p>Select a project to the left to find out more about a specific project I've worked on!</p>
								</div>
								<div id="aladdin" style="display:none">
									<h3>Collaborators: Chris Magnano</h3>
									<h3>Abstract</h3>
									<p>Active learning allows models to choose training instances in an online setting. One unexplored domain where this comes into practice is in adversarial learning. As well as a number of new theoretical considerations, using active learning in adversarial domains may give valuable insight into how to design security systems to deter malicious users. Applying active learning in an adversarial setting results in a number of new considerations when designing a query method. We evaluate a number of query methods that may have value in the adversarial problem domain of network intrusion detection, and present a new method, k-Safe Axes. K-Safe Axes simulates a malicious user by attempting to find network attacks which could bypass a network intrusion detector. Our results are inconclusive, but show the need for further exploration of k-Safe Axes and other active learning query methods in this domain.</p>
									<p>Check out the full paper here: <a href="ALADDIN.pdf">Paper</a></p>
								</div>
								<div id="uavs" style="display:none">
									<div class="text">
										<h3>Collaborators: Ganesh Kumar, Margaret Pearce<a href="CS770_Final_Poster.jpg"><img width="25%" height="25%" src="CS770_Final_Poster-thumb.jpg" style="float:right;margin:25px"></a>
											
										</h3>
										<h3>Abstract</h3>
										<p>
										Unmanned Aerial Vehicles (UAVs) are changing workflows in a variety of different fields ranging from security to cinematography. In particular, agriculture is a field that is poised to strongly benefit from this technology. In this paper, we use an ethnographic field study to gauge the current perception of UAVs in the farming community. A Grounded Theory analysis of interviews with stakeholders was used to identify UAV trends, impressions, and interest. Our findings revealed relatively low familiarity with UAV technology among farmers but significant interest in future possibilities. Key concerns included the applicability of UAVs and the potential return on investment. Furthermore, government regulation of UAVs is a critical factor that is slowing adoption as legislative decisions wait to be made. Despite these concerns, stakeholders are curious to see the future value of utilizing this technology. These results contribute to our understanding of the role of UAVs in agricultural settings and inform future design implications.</p>
										<p>View our presentation poster here: <a href="CS770_Final_Poster.pdf">Poster</a>
										<br>Check out the full paper here: <a href="UAVsInAgriculture_HCIF14_Group5.pdf">Paper</a></p>
									</div>
									<div class="sidepic" >
										
									</div>
								</div>
								<div id="website" style="display:none">
									<p>I've worked at jobs doing some web work before, but have never gotten a chance to completely go through the entire process and get the basics down. I've finally gotten around to it, and plan on using this as a learning process!</p>
									<p>All of the code for the website is being written from scratch. I've been using the examples and tutorials from <a href="http://www.codecademy.com/">Codecademy</a> as guides. The courses for website building are pretty great, at least for getting off of the ground!</p>
									<p>Currently using mostly HTML and CSS concepts, along with some basic Javascript. Hoping to get some more interactivity as I go through a few more Codecademy courses!</p>
									<p>Feel free to poke around, but as it is a work in progress please don't judge me too much for the code :).</p>
									<!-- Link to Github maybe? -->									
								</div>
								<div id="design-mfg" style="display:none">
									<h3>Collaborators: Max Brodsky, Henrietta Cho, Samuel Shrago</h3>
									<p>This project was a semester-long survey of a complete mechanical design and manufacturing product cycle. The end machine was designed to compete in a ball-collecting competition.</p>
									<p>Milestones included initial design sketches, strategy development, and mechanical considerations. After a full design review, engineering drawings and fabrication instructions were developed, and finally the parts were manufactured using machining equipment including laser cutters, lathes, and mills.</p>
									<!--TODO youtube link maybe? -->
									<p>Check out our final report here: <a href="ME250_Final_Report.pdf">Paper</a></p>
								</div>
								<div id="balancing-robot" style="display:none">
									<h3>Collaborators: Samuel Parrotte, Frank Tan, Ryan Wooster</h3>
									<p>Using computer engineering concepts discussed in lecture and practiced through laboratory exercises, we designed and fabricated a self-balancing robot.</p>
									<p>Hardware programming was done in Verilog. Interfaces were created from an Actel Smartfusion embedded SoC to Xbee wireless communicators, continuous rotation servos, an accelerometer, a GameCube controller, and an LCD.</p>
									<p>Software programming was done in C. Programs were written to take input from both the accelerometer and GameCube controller, and generate correct output to the servos. The Xbees were used to wirelessly communicate from a base station to the robot, and the LCD was used as a diagnostic and feedback display.</p>
									<p>To effectively implement feedback control, the Ziegler-Nichols tuning method was used to determine PID parameters for the self-balancing mechanism.</p>
									<!--TODO youtube link maybe? and also poster -->
									<p>Check out our presentation poster here: <a href="EECS373_F13_Segway.pdf">Poster</a></p>
								</div>
								<div id="autonomous" style="display:none">
									<h3>Collaborators: Garrett Dewald, Jim Rasche, Ryan Wooster</h3>
									<p>This project's goal was to implement the full pipeline required to autonomously navigate through a maze. The hardware used was a <a href="http://april.eecs.umich.edu/maebot/">MAEbot</a>, provided by the <a href="http://april.eecs.umich.edu/">APRIL lab</a> at Michigan. Computer vision techniques were used to process input from a forward-facing camera. Barrel distortion was automatically corrected for using a calibration image, and a mapping from our imaging plane to real world coordinates was created using perspective projection homography methods. Kalman filtering was used to update the robot's state estimate integrating both odometry information from wheel encoders and an inertial measurement unit. Once a map of the observable world was created, path planning was used to explore and navigate.</p>
									<p>You can find more information about our automatic barrel distortion correction here: <a href="https://www.youtube.com/watch?v=xL8AaGi8LPs">YouTube</a></p>
								</div>
								<div id="robogoalie" style="display:none">
									<h3>Collaborators: Aaron Ridenour, Joe Scherping, Ryan Wooster</h3>
									<p>The purpose of the project was to create a proof of concept demonstration which would incorporate complex ideas from the EECS 467: Autonomous Robotics, and from the field, while also being approachable to a lay audience.
										Using dynamic object tracking and position prediction, the system can accurately move the robotic arm to intercept the ball's trajectory.
										Camera image processing was used to track the ball, and robotic kinematics was used to move the arm to the correct position.</p>
									<p>Check out our technical video overview here: <a href="https://www.youtube.com/watch?v=X_PQeLn894c">YouTube</a></p>
								</div>
							</div>
						</div>	
					</td>
				</tr>
			</table>
		</div>
	</div>

	<script src="../js/jquery-2.1.3.min.js"></script>
	<script src="../js/utils.js"></script>
	<script src="../js/projectselector.js"></script>

</body>

</html>