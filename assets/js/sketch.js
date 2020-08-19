let sortMethod;
let bubblesortText = "haha";
let quicksortText = "afas";
let values = [];
let states = []; 
let elementCount;
let sorting_speed;
let baseSpeed = 150;
$(document).ready(function() {
		sortMethod = "Bubblesort";
		
	});




function setup() 
{ 	
	createCanvas(displayWidth, displayHeight/2);           

} 
$("#elementCount").on('input', function() {
	if($("#sortButton").val() == "Sort") {
		element_count = $(this).val(); 
		$("#elementCounter").text($(this).val());
		}
});

$("#sortingSpeed").on('input', function() {
	if ($("#sortButton").val() == "Sort") {
		sorting_speed = $(this).val();
		$("#sortingSpeedCounter").text($(this).val());
	}
});	

$("#sortButton").click(function() {
		if( $("#generateArray").val() != "Regenerate") 		
		{
			alert("You must generate an array first");
			return;
		}
		if( $("#sortButton").val() == "Sort") 
		{
			$("#sortButton").prop("value", "Stop");
				if (sortMethod == "Bubblesort")
				 {
					bubblesort(values, 0, values.length);
				}
				else if (sortMethod == "Quicksort") 
				{
					quicksort(values, 0, values.length);
				}
		}
		else 	{
			$("#sortButton").prop("value", "Sort");
		}
	});


$("#generateArray").click(function(){
	if( $("#generateArray").val() == "Generate Array") 	
	{
		$("#generateArray").prop("value", "Regenerate");

	}
	if( $ ("#sortButton")[0].hasAttribute("disabled") )
	{
	    	$("#sortButton").removeAttr('disabled');
	}

	elementCount = $("#elementCounter").text();
	elementWidth = (displayWidth / elementCount);
	values = new Array(floor(width/elementWidth));
		for(let i = 0; i < values.length; i++)
			{
				values[i] = float(random(height));
				states[i] -1;
			}
	loop();
});

$("#algorithms").change(function()
{
		var title = $("#algorithms").val();
		$("#title").text(title);
		if(title == "Bubble Sort") 
		{
			sortMethod = "Bubblesort";
			$("#body").html(bubbleSortText);
		}
		if (title == "Insertion Sort")
		{
			$("#body").html(insertionSortText);
		}
		if (title == "Selection Sort")
		{
			$("#body").html(selectionSortText);
		}
		if (title == "Quick Sort")
		{
			sortMethod = "Quicksort";
		}
	} 
);


async function quicksort(arr, start, end) 
{
  if (start >= end) 
  {
    return;
  }
  let index = await partition(arr, start, end);
  states[index] = -1;

  await Promise.all ([
    quicksort(arr, index + 1, end),
    quicksort(arr, start, index - 1)

  ]);
}
async function partition(arr, start, end) 
{
  for (let i = start; i < end; i++) 
  {
    states[i] = 1;
  }
  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) 
  {
    if (arr[i] < pivotValue) 
    {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);

  for (let i = start; i < end; i++)
  {
    if (i != pivotIndex) 
    {
      states[i] = -1;
    }
  }

  return pivotIndex;	
}
async function bubblesort(arr, start, end) 
{ 
	if(start >= end) 
	{ 
    	return; 	
    } 
    for(var i = 0; i < end-1; i++)
    { 
    	for(var n = 0; n < end-i-1; n++) 
    	{ 
            if(arr[n] >= arr[n+1]) 
            { 
                states[n] = 1; 
                await swap(arr, n, n+1); 
                states[n+1] = 0; 
            } 
            states[n] = 2; 
        } 
    }
	return arr; 
} 

function draw() 
{ 
    if(isSorted(values) &&  $("#generateArray").val() == "Regenerate") 
    {
    	$("#sortButton").prop("value", "Sort");
    	$("#sortButton").attr('disabled', 'disabled');
    	stroke(0);
    	for(let i = 0; i < states.length; i++)
    	{
    		states[i] = -1;
    	}
        fill("#00ff00");
        noLoop();
        background(100);
        for(let i = 0; i < values.length; i++) 
        {
        	rect(i*elementWidth, height - values[i], elementWidth, values[i]);
        }
    }
    else 
    {
		background(100); 
		for(let i = 0; i < values.length; i++) 
		{ 
	    	stroke(0); 
			fill(255); 
			if(states[i] == 0) 
			{ 
				fill(255, 0, 0); 
			} 
			else if (states[i] == 1) 
			{ 
				// Element being sorted
				fill("#ff0000"); 
			} 
			else 
			{ 
				fill(255); 
			} 
			rect(i*elementWidth, height - values[i], elementWidth, values[i]); 
		} 
	
	}
} 

async function swap(arr, a, b) 
{ 
	await sleep(baseSpeed-sorting_speed); 
	let tmp = arr[a]; 
	arr[a] = arr[b]; 
	arr[b] = tmp; 
}

function isSorted(arr) 
{
	for(let i = 0; i < arr.length-1; i++) 
	{
		if(arr[i] > arr[i+1]) 
		{
			return false;
		}
	}
	return true;
}

function sleep(ms) 
{ 
	return new Promise(resolve => setTimeout(resolve, ms)); 
} 
