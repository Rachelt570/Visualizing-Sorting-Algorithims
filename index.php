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
		<form> 
			<label for = "elementCount"> Element Count </label>
			<input id = "elementCount" type = "range" min = "2" max = "100" value = "50" oninput = "elementCountUpdate(this.value)">
			<label for = "sortSpeed"> Sorting Speed </label> 
			<input id = "sortSpeed" type = "range" min = "1" max = "60" value = "10" oninput = "frameRateUpdate(this.value)"> 
			<select id = "sortType" onchange="sortTypeUpdate(this.value)"> 
				<option value = "BubbleSort"> Bubble Sort </option>
				<option value = "QuickSort"> Quick Sort </option>
				<option value = "SelectionSort"> Selection Sort </option>
			</select>

			<input type = "button" value ="submit" onClick = "executeSort()"> </button>
		</form>
	</header>
	<main id = "main"> 
		
	</main>
	<footer>
		Created 2021, 09 26
	</footer>
		<script type="text/javascript" src="scripts/js/main.js"> </script>

</body>
</html>