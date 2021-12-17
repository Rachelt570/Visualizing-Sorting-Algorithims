<!DOCTYPE html>
<html>
<head>
	<title> Visualizing Sorting Algorithms </title>
	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
	<script type="text/javascript" src="scripts/js/p5.min.js"></script>
	<script type = "text/javascript" src="scripts/js/jquery.js"> </script>

</head>
<body>
	<header>
		<h1> Sorting Algorithim Visualization Tool </h1>
		<form name = "settings" action ="" method = "post"> 
			<label for = "elementCount"> Element Count </label>
			<input id = "elementCount" type = "range" min = "2" max = "100" value = "50" oninput = "elementCountUpdate(this.value)">
			
			<select name = "sortType" id = "sortType" onchange="sortTypeUpdate(this.value)">
				<option disabled selected value = "NULL"> Select an option </option> 
				<option value = "BubbleSort"> Bubble Sort </option>
				<option value = "QuickSort"> Quick Sort </option>
				<option value = "SelectionSort"> Selection Sort </option>
				<option value = "InsertionSort"> Insertion Sort </option>
			</select>

			<input type = "button" value ="submit" onClick = "executeSort()"> </button>
		</form>

		<ul id = "visualizerLegend" aria-label = "Legend">
			<li> White: Default </li>
			<li> Blue: Access </li>
			<li> Yellow: Save </li>
			<li> Red: Swap </li>
			<li> Green: Sorted </li>
		</ul>
	</header>
	<main id = "main"> 
	

	</main>
	<article>
		<h3 id = "sortTitle">  </h3> 
		<ul id = "sortPerformanceInfo"> 

	

		</ul>
		<section id = "CodeExample"> 
	
		</section>
	</article>

	<footer>
		Created 2021, 09 26
	</footer>
		<script type = "text/javascript" src="scripts/js/foo.js"> </script>
		<script type="text/javascript" src="scripts/js/main.js"> </script>

</body>
</html>