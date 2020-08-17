

var bubbleSortText = "Bubble Sort is one of the simpliest in-place sorting algorithims. It works by comparing and swapping neighbor elements if they are in the wrong order. This is often the first sorting algorithim one learns due to how simplistic it is. However, due to the exceedingly high average time complexity of O(n<sup>2</sup>) the algorithim is generally avoided, except in instances where both space complexity matters, and the arrays are nearly sorted. The algorithim's best case scenario is when the array is already sorted, where it will run  in O(n) time, making this a valid option for problems where the arrays are sorted or almost sorted. As such, it is often used in computer graphics to detect very small errors (out of place elements)<br> <br><h4> Space Complexity:</h4> O(1) <br><h4> Worst Case Time Complexity: </h4> O(n<sup>2</sup>) <br><h4> Average Case Time Complexity: </h4> O(n<sup>2</sup>) <br><h4> Best Case Time Complexity: </h4> O(n) <br><h4> Stable: </h4> Yes <br><br>"
var insertionSortText = "Insertion Sort is a simple sorting algorithim which builds a sorted array one element at a time. Insertion sort compares an element to its immediate, left neighbor. In the event that the element is less than its left neighbor, it then repeats this process across all sorted elements, working leftward, until it finds the correct position for the element. This, of course, sorts the array in-place. The worst case for this algorithim is O(n<sup>2</sup>), which occurs when the array is sorted in reverse order. The average case is also O(n<sup>2</sup>). The best case, which occurs on a sorted array is O(n). Due to the high time complexity this algorithim is rarely used for large arrays, unless the array is mostly sorted. Like bubblesort the space complexity is O(1) which makes it acceptable for similiar use-cases of bubble-sort. Another use of insertion sort is maintaining a sorted list, as the list need not be complete for a sort as such adding additional elements to the end of the list mid-sort will not break the algorithim. Additionally, if one can guarantee that all elements prior to the new element are already sorted the algorithim will run in O(n) time. However, in this instance binary insertion sort will be significantly faster running in O(log<sub>n</sub>) time.<br> <br><h4> Space Complexity:</h4> O(1) <br><h4> Worst Case Time Complexity: </h4> O(n<sup>2</sup>) <br><h4> Average Case Time Complexity: </h4> O(n<sup>2</sup>) <br><h4> Best Case Time Complexity: </h4> O(n) <br><h4> Stable: </h4> Yes <br><br>"
var selectionSortText = "Selection sort is an in-place sorting algorithim. In divides the array into an already sorted, and yet to be sorted section. It finds the minimum element in the yet to be sorted section, and it places that element in the left-most location in the yet to be sorted section. This algorithim, while easy to understand and implement, should generally be avoided as it runs significantly less effectively than similiar sorting algorithims such as insertion sort. The algorithim always runs in O(n<sup>2</sup>) time. <br> <br><h4> Space Complexity:</h4> O(1) <br><h4> Worst Case Time Complexity: </h4> O(n<sup>2</sup>)<br><h4> Average Case Time Complexity: </h4> O(n<sup>2</sup>) <br><h4> Best Case Time Complexity: </h4> O(n<sup>2</sup>) <br><h4> Stable: </h4> No <br><br>"
var algorithim_value;
var element_count;
var sorting_speed;
// Update element Count
$("#elementCount").on('input', function() {
	if ($(this).val())
	{
		element_count = $(this).val();
		$("#elementCounter").text($(this).val());
			}
});

// Update Sorting Speed
$("#sortingSpeed").on('input', function() {
	if ($(this).val()) {
		sorting_speed = $(this).val();
		$("#sortingSpeedCounter").text($(this).val());
	}
});	



$(document).ready(function() {
	element_count = 26;
	sorting_speed = 50;
	$("#algorithms").change(function(){
		var title = $("#algorithms").val();
		$("#title").text(title);
		if(title == "Bubble Sort") {
			$("#body").html(bubbleSortText);
		}
		if (title == "Insertion Sort") {
			$("#body").html(insertionSortText);
		}
		if (title == "Selection Sort"){
			$("#body").html(selectionSortText);
		}	
		//

		//
		
	});

	$("#sortButton").click(function() {
		algorithim_value = $("#algorithms").val();
		$(algorithim_value).text(title);
		if (algorithim_value == "Bubble Sort")
		{
			alert("Test");
		}
		else 
		{
			
		}

		console.log($("#algorithms").val());
	
		
	});

	$("#generateArray").click(function(){
		for(var i = 0; i < 26; i++)
		{
			console.log(i);
		}
	});
});