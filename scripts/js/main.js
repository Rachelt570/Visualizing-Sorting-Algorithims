let canvas;
let elementCount = 50;
let FPS = 60;
let sortType = "BubbleSort";

let elements = [];

let lineThickness;
let sortedIndex = 0; 

let leftPadding;
let width; 
let height;

let savedIndex = 0;
var bubbleIndex = 0;
let savedMinimumValue = 10000;
let savedMinimumIndex = 0;
let backgroundColor = 100;
let preparedSwap = false;

let sortExecution = false;
let framesPerUpdate = 10;

function sortTypeUpdate(newSortType)
{
	sortType = newSortType;
	console.log(sortType);
}
function elementCountUpdate(newElementCount)
{
	elementCount = newElementCount;
	elements = [];
	sortExecution = false;	
	resetState();
	for(let i = 0; i < elementCount; i++)
	{
		elements[i] = max(getRandomInt(height), 5);
	}
		driver();
}
function frameRateUpdate(newFrameRate)
{
	framesPerUpdate = floor(60-newFrameRate) + 1;
}

function executeSort() 
{
	sortExecution = true;
}

function resetState() 
{
	savedIndex = 0;
	savedMinimumValue = 10000;
	savedMinimumIndex = 0;
	fill(255);
	sortedIndex = 0;

}
function getRandomInt(max) 
{
  return Math.floor(Math.random() * max);
}

function windowResized() 
{
	height = $("#main").height();
	width = $("#main").width();
	resizeCanvas(width, height);
	background(100);		
	savedMinimumValue = elements[savedIndex];

	//Reset sort algo
}

function setup()
{
	frameRate(60);
	height = $("#main").height();
	width = $("#main").width();
	
	canvas = createCanvas(width, height);
	canvas.parent("main");
	canvas.style('z-index', -1);
	background(backgroundColor);
	for(let i = 0; i < elementCount; i++)
	{
		elements[i] = max(getRandomInt(height), 5);
	}
	driver();
}
function swap(array, x, y)
{
	let tmp = array[x];
	array[x] = array[y];
	array[y] = tmp;
}
function bubbleSort()
{
	if(!isSorted(elements))
	{
		background(backgroundColor);
		drawElements(0, elementCount);
		savedIndex = bubbleSortVisualization(savedIndex);
		if(preparedSwap)
		{
			drawElements(0, elementCount);
			drawElement(savedIndex-1, color(255,0,0), color(255));
			drawElement(savedIndex, color(255,0,0), color(255));
			swap(elements,savedIndex-1, savedIndex);
			savedIndex++;
		}
	}
	else
	{
		background(backgroundColor);
		drawElements(0, elementCount, color(0,255,0));
	}
}


function bubbleSortVisualization(index)
{
	preparedSwap = false;
	if(index < elementCount-1)
	{
		for(let i = index; i < elementCount-1; i++)
		{
			if(elements[i] > elements[i+1])
			{
				background(backgroundColor);
				drawElements(0, elements);
				drawElement(i, color(255,0,0), color(255));
				drawElement(i + 1,color(255,0,0), color(255));
				preparedSwap = true;
				return i+1;
			}
			else
			{
				background(backgroundColor);
				drawElements(0, elementCount);
				drawElement(i, color(0,0,255), color(255));
				return i+1;
			}
		}
	}
	return 0;
}
function insertionSort()
{
}
function resetDraw() 
{
	background(backgroundColor);
	lineThickness = floor(width/elementCount); //Set thickness based on elementCount
	stroke(1); //Arbitary
	leftPadding =  (width - (elementCount * lineThickness)) * 0.5;
}
function drawElement(index, color, oldColor)
{
	fill(color);
	rect(leftPadding + lineThickness * index, height-elements[index], lineThickness, elements[index]);
	fill(oldColor);
}

function drawElements(start, end, c = color(255), oc = color(255))
{
	for(let i = start; i < end; i++) 
		{ 
			 drawElement(i, c, oc);
		}
}
function selectionSort()
{
	if(!isSorted(elements))
		{
			background(backgroundColor);
			selectionSortVisualization(savedIndex);
			savedIndex++;
		}
		else 
		{	
			background(backgroundColor)
			drawElements(0, elementCount, color(0, 255, 0));
		}
}
function selectionSortVisualization(index)
{
	if(index < elementCount)
	{
		let minValue = elements[sortedIndex];
		let minIndex = sortedIndex;
		for(index; index < elementCount; index++)
		{
			if(elements[index] < savedMinimumValue)
			{
				savedMinimumValue = elements[index];
				savedMinimumIndex = index;
				background(backgroundColor);
				drawElements(0, elementCount);
				drawElement(index, color(0, 255, 0), color(255));
				return index;
			}
			else
			{
				background(backgroundColor);
				drawElements(0, elementCount);
				drawElement(savedMinimumIndex, color(0, 255, 0), color(255))
				drawElement(index, color(0, 0, 255), color(255));
				return index;
			}
		}
	}
	else
	{
		drawElements(0, elementCount);
		drawElement(savedMinimumIndex, color(255, 0, 0), color(255));
		drawElement(sortedIndex, color(255, 0, 0), color(255));
		swap(elements, sortedIndex, savedMinimumIndex);
		sortedIndex++;
		savedMinimumIndex = sortedIndex;
		savedMinimumValue = elements[sortedIndex];
		savedIndex = sortedIndex;
	}
}
function driver()
{
	resetDraw();
	drawElements(0, elementCount);
//	sortElements();
}
function isSorted(array) 
{
	for (let i = 0; i < array.length - 1; i++) 
	{
   	 	if (array[i] > array[i+1])
       	{
       	 	return false;
   		}
	}
	return true;
}
function draw() 
{
	//resetDraw();
	//drawElements(0, elementCount-1);
	if(sortExecution) 
	{
		if(frameCount % framesPerUpdate == 0) 
		{
			if(sortType == "SelectionSort")
			{
				selectionSort();
			}
			if(sortType == "BubbleSort")
			{
				bubbleSort();
			}
			if(sortType == "InsertionSort")
			{
				insertionSort();
			}
			
		}
	}
}

