


let canvas;

const Settings = {

	_elementCount: 50, 
	_FPS: 60, 
	_sortType: "BubbleSort",
	_lineThickness: 0,
	_leftPadding: 0,
	_backgroundColor: 100,
	_framesPerUpdate: 10,
	_sortExecution: false,

	set _sortExecution(isSortExecution)
	{
		this._sortExecution = isSortExecution; 
	},
	get _sortExecution() 
	{
		return this._sortExecution;
	},
	set framesPerUpdate(newFPU)
	{
		this._framesPerUpdate = newFPU;
	},
	get framesPerUpdate()
	{
		return this._framesPerUpdate;
	},
	set backgroundColor(newBackgroundColor)
	{
		this._backgroundColor = newBackgroundColor;
	},
	get backgroundColor() {
		return this._backgroundColor;
	},
	get height()
	{
		return $("#main").height();
	},
	get width()
	{
		return $("#main").width();
	},
	set leftPadding(newLeftPadding)
	{
		this._leftPadding = newLeftPadding;
	},
	get leftPadding() 
	{
		return this._leftPadding;
	},
	set lineThickness(newLineThickness)
	{
		this._lineThickness = newLineThickness;
	},
	get lineThickness()
	{
		return this._lineThickness;
	},
	set sortType(newSortType)
	{
		this._sortType = newSortType;
	},
	get sortType() 
	{
		return this._sortType;
	},
	set FPS(newFPS)
	{
		this._FPS = newFPS;
	},
	get FPS() 
	{
		return this._FPS;
	},
	set elementCount(newCount) {
		this._elementCount = Number(newCount);
	},
	get elementCount() {
		return this._elementCount;
	}

}

let elements = [];
 
let sortedIndex = 0; 

let savedIndex = 0;
var bubbleIndex = 0;
let savedMinimumValue = 10000;
let savedMinimumIndex = 0;
let preparedSwap = false;



function sortTypeUpdate(newSortType)
{
	Settings.sortType = newSortType;
}
function elementCountUpdate(newElementCount)
{
	Settings.elementCount = newElementCount;
	elements = [];
	resetState();
	for(let i = 0; i < Settings.elementCount; i++)
	{
		elements[i] = max(getRandomInt(height), 5);
	}
		resetDraw();
		drawElements(0, Settings.elementCount);
}

function frameRateUpdate(newFrameRate)
{
	Settings.framesPerUpdate = floor(60-newFrameRate) + 1;
}

function executeSort() 
{
	Settings.sortExecution = true;
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
	background(Settings.backgroundColor);		
	savedMinimumValue = elements[savedIndex];

	//Reset sort algo
}

function setup()
{
	frameRate(60);
	height = $("#main").height();
	width = $("#main").width();
	
	canvas = createCanvas(Settings.width, Settings.height);
	canvas.parent("main");
	canvas.style('z-index', -1);
	background(Settings.backgroundColor);
	for(let i = 0; i < Settings.elementCount; i++)
	{
		elements[i] = max(getRandomInt(Settings.Height), 5);
	}
	resetDraw(); 	
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
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount);
		savedIndex = bubbleSortVisualization(savedIndex);
		if(preparedSwap)
		{
			drawElements(0, Settings.elementCount);
			drawElement(savedIndex-1, color(255,0,0), color(255));
			drawElement(savedIndex, color(255,0,0), color(255));
			swap(elements,savedIndex-1, savedIndex);
			savedIndex++;
		}
	}
	else
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount, color(0,255,0));
	}
}

function bubbleSortVisualization(index)
{
	preparedSwap = false;
	if(index < Settings.elementCount-1)
	{
		for(let i = index; i < Settings.elementCount-1; i++)
		{
			if(elements[i] > elements[i+1])
			{
				background(Settings.backgroundColor);
				drawElements(0, elements);
				drawElement(i, color(255,0,0), color(255));
				drawElement(i + 1,color(255,0,0), color(255));
				preparedSwap = true;
				return i+1;
			}
			else
			{
				background(Settings.backgroundColor);
				drawElements(0, Settings.elementCount);
				drawElement(i, color(0,0,255), color(255));
				return i+1;
			}
		}
	}
	return 0;
}

function insertionSort()
{

	if(!isSorted(elements))
	{
		if(sortedIndex === 0 && savedIndex === 0)
	{
		savedIndex = 1;
		index = 1;
	}
		insertionSortVisualization();
	}
	else
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount, color(0,255,0), color(255));
	}


}


// DELETE THIS SHIT AND FIX THE GLOBAL ISSUE, THIS IS RIDICLOUS AND OF COURSE IT DOESNT WORK
function insertionSortVisualization()
{

	if(savedIndex <= 0)
	{
		sortedIndex++;
		savedIndex = sortedIndex;
		return;

	}
	if(elements[savedIndex-1] > elements[savedIndex])
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount);
		drawElement(savedIndex-1, color(255, 0, 0), color(255));
		drawElement(savedIndex, color(255, 0, 0), color(255));
		swap(elements, savedIndex-1, savedIndex);
		savedIndex++;
		return;
	}
	else 
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount);
		drawElement(savedIndex, color(0,0,255), color(255));
		sortedIndex++;
		savedIndex = index;
		return;

	}
}

function resetDraw() 
{
	background(Settings.backgroundColor);
	Settings.lineThickness = floor(Settings.width/Settings.elementCount); //Set thickness based on elementCount
	stroke(1); //Arbitary
	Settings.leftPadding =  (Settings.width - (Settings.elementCount * Settings.lineThickness)) * 0.5;
}

function drawElement(index, color, oldColor)
{
	fill(color);
	rect(Settings.leftPadding + Settings.lineThickness * index, Settings.height-elements[index], Settings.lineThickness, elements[index]);
	fill(oldColor);
}

function drawElements(start, end, c = color(255), oc = color(255))
{
	for(let i = start; i < end; i++) 
		{ 
			 drawElement(i, c, oc);
		}
}

class SelectionSort {

	constructor()
	{
		this._outsideIndex = 0;
		this._insideIndex = 0;
		this._minimumIndex = 0;

	}

	set outsideIndex(newOutsideIndex) { this._outsideIndex = newOutsideIndex;}
	get outsideIndex(){return this._outsideIndex;}
	set insideIndex(newInsideIndex){this._insideIndex = newInsideIndex;}
	get insideIndex() {return this._insideIndex;}
	set minimumIndex(newMinimumIndex) { this._minimumIndex = newMinimumIndex }
	get minimumIndex() { return this._minimumIndex; }
	

	drawSwap()
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount);
		drawElements(0, this.outsideIndex, color(0, 255,0), color(255));
		drawElement(this.outsideIndex, color(255,0,0), color(255));
		drawElement(this.minimumIndex, color(255,0,0), color(255));
	}

	drawHit() 
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount);
		drawElements(0, this.outsideIndex, color(0, 255,0), color(255));
		drawElement(this.insideIndex, color(255,255,0), color(255))
		drawElement(this.outsideIndex, color(0, 255, 0), color(255));
	}

	drawScan() 
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount);
		drawElements(0, this.outsideIndex, color(0, 255,0), color(255));
		drawElement(this.minimumIndex, color(255, 255, 0), color(255));
		drawElement(this.insideIndex, color(0,0,255), color(255));
		drawElement(this.outsideIndex, color(0, 255, 0), color(255));
	}

	drawComplete()
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount, color(0,255,0), color(255));
	}
	
	sort()
	{

		if(this.outsideIndex > this.elementCount)
		{
			this.drawComplete();
			return;
		}
		
		if(this.insideIndex > Settings.elementCount)
		{
			this.drawSwap();
			swap(elements, this.outsideIndex, this.minimumIndex);
			this.outsideIndex++;
			this.insideIndex = this.outsideIndex;
			this.minimumIndex = this.outsideIndex;
			return;
		}
		else
		{
			if(elements[this.insideIndex] <= elements[this.minimumIndex])
			{
				this.drawHit();
				this.minimumIndex = this.insideIndex;
				this.insideIndex++;
				return;
			}
			else
			{
				this.drawScan();
				this.insideIndex++;
				return;
			}
		}
	}
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


let SelectionSorter = new SelectionSort();

function draw() 
{
	//resetDraw();
	//drawElements(0, elementCount-1);
	if(Settings.sortExecution) 
	{
		if(frameCount % Settings.framesPerUpdate == 0) 
		{
			if(Settings.sortType == "SelectionSort")
			{
			 	SelectionSorter.sort();
			}
			if(Settings.sortType == "BubbleSort")
			{
				bubbleSort();
			}
			if(Settings.sortType == "InsertionSort")
			{
				insertionSort();
			}
			
		}
	}
}

