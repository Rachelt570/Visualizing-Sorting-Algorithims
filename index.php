<!DOCTYPE html>
<html>
<head>
	<title>Visualizing Sorting Algorithms</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<header>
	<nav> 
		<input type = "button" value = "Generate Array" id = "generateArray">
		<span> 
			Number of Elements
			<input type = "range" min = "2" value="25"  max = "50" id = "elementCount">
			<button id = "elementCounter" value = "25" > 25 </button>
		</span> 
		<span> 
			Sorting Speed
			<input type = "range" min = "1" value = "50" max = "100" id = "sortingSpeed">
			<button id = "sortingSpeedCounter" value = "50"> 50 </button>
		</span>

		<select id ="algorithms">
				<option value = "Bubble Sort"> Bubble Sort </option>
				<option value = "Insertion Sort"> Insertion Sort </option>
				<option value = "Selection Sort"> Selection Sort </option>
				<option value = "Quick Sort"> Quick Sort </option>
			 	<option value="Merge Sort">Merge Sort</option>
  			  	<option value="Heap Sort">Heap Sort</option>
 				<option value="Counting Sort">Counting Sort</option>
    			<option value="Radix Sort">Radix Sort</option>
    	</select>
    	<input type = "button" value = "Sort" id = "sortButton">
	</nav>
</header>
	
	<div id = "area">
		<script src = "assets/js/sketch.js"> </script>
	</div>


 	<section id = "description">
 		<p>
 			<h2 id = "title"> </h2>
 			<div id = "body">
	 			
	 			Quicksort is a divide and conquer sorting algorithm which works by dividing the array into sub-arrays with elements less than a selected partition to the left of the partition, and elements greater than the selected partition to the right of the partition. 
	 			<br> 
	 			<br>
	 			<h4> Space Complexity:</h4> O(1) <br>
	 			<h4> Worst Case Time Complexity: </h4> O(n<sup>2</sup>)<br>
	 			<h4> Average Case Time Complexity: </h4> O(n<sup>2</sup>) <br>
	 			<h4> Best Case Time Complexity: </h4> O(n<sup>2 </sup>) <br>
	 			<h4> Stable: </h4> No <br>
	 			<br>
 			</div>
 		</p>
 	</section>

 	<script src = "assets/js/jquery.js"></script>
 	<script src = "assets/js/main.js"> </script>
 	<script src = "assets/js/p5.js"> </script>
 	<script src = "assets/js/p5.sound.js"> </script>

</body>
</html>
<?php>

