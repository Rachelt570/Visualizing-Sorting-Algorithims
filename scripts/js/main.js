
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
	for(let i = start; i <= end; i++) 
		{ 
			 drawElement(i, c, oc);
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




const Visuals =
{

	drawComplete: function (i, n)	
	{
		if(typeof n !== "undefined")
		{
			drawElements(i, n, color(0,255,0), color(255));
		}
		else
		{
			drawElement(i, color(0, 255, 0), color(255));
		}
		return;
	},
	drawHit: function (i, n)
	{
		if(typeof n !== "undefined")
		{
			drawElements(i, n, color(255, 255, 0), color(255));
		}
		else
		{
			drawElement(i, color(255, 255, 0), color(255));
		}
		return;
	},

	drawSwap: function (i, n)
	{
		drawElement(i, color(255,0,0), color(255));
		drawElement(n, color(255,0,0), color(255));
		return;
	},
	drawScan: function (i, n)
	{
		if(typeof n !== "undefined")
		{
			drawElements(i, n, color(0,0,255), color(255));
		}
		else
		{
				drawElement(i, color(0,0,255), color(255));
		}
		return;
	}

}

class QuickSort
{
	constructor()
	{
		this.PartitionScheme = "lomuto";
		this.stack = []; 
		this.top = -100;
		this.pivot = 0;
		this.partition = 0;

		this.isParting = false;
		this.i = 0;
		this.n = 0;
	}
	hoarePartition(array, start, end)
	{
	
	}

	iterativeQuicksort(array,start,end)
	{
		
		//If this is the first time ran
		if (this.top == -100)
		{
			this.top = -1;
			this.stack[++this.top] = start;	
			this.stack[++this.top] = end;
			this.n = start;
			this.i = start-1;
		}
		
		if (this.top >= 0) 
		{

			end = this.stack[this.top--];
			start = this.stack[this.top--];
			if(this.pivot == -1)
			{
				start = this.n;
			}
			this.pivot = this.lomutoPartition(array, start, end);
			if(this.pivot == -1)
			{
				this.stack[++this.top] = start;
				this.stack[++this.top] = end;
				return;
			}
			if (this.pivot - 1 > start) 
			{
				this.stack[++this.top] = start;
				this.stack[++this.top] = this.pivot - 1;
			}

			if (this.pivot + 1 < end) 
			{
				this.stack[++this.top] = this.pivot + 1;
				this.stack[++this.top] = end;
			}


		}

	}
		
	
	lomutoQuicksort(array, start, end)
	{
		let partition;
		if(start >= 0 && end >= 0 && start < end)
		{
			partition = this.lomutoPartition(array, start, end);
			this.lomutoQuicksort(array, start, partition-1);
			this.lomutoQuicksort(array, partition+1, end);
		}
	}
	lomutoPartition(array, start, end)
	{
		console.log("start " + start);
		console.log("end" + end);
		console.log("I " + this.i);
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount);
		if (!this.isParting)
		{
			this.pivot = array[end];
			this.i = start-1;
			this.n = start;
			this.isParting = true;
		}
		
		if(this.n <= end-1)
		{
			if(array[this.n] <= this.pivot)
			{
				this.i++;
				background(Settings.backgroundColor);
				drawElements(0, Settings.elementCount);
				Visuals.drawSwap(this.i, this.n);
				swap(array, this.i, this.n);
			}
			this.n++;
			return -1;
		}
		swap(array[this.i+1], array[end]);
		this.isParting = false;
		this.n = 0;
		return this.i+1;

	}
	// Get partition
	sort()
	{
		
		
		if(this.PartitionScheme =="lomuto")
		{
			this.iterativeQuicksort(elements, 0, Settings.elementCount-1);
		}
		if(isSorted(elements))
		{
			background(Settings.backgroundColor);
			Visuals.drawComplete(0, Settings.elementCount);
		}
	
		
	}

}
class BubbleSort
{
	
	constructor()
	{
		this.hasSwapped = true;
		this.index = 0;
	}

	drawComplete()
	{
		background(Settings.backgroundColor);
		Visuals.drawComplete(0, Settings.elementCount-1);
	}

	drawSwap()
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount-1);
		Visuals.drawSwap(this.index, this.index+1);
	}

	drawScan()
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount-1);
		Visuals.drawScan(this.index);
	}

	sort() 
	{
		if(this.index >= Settings.elementCount)
		{	
			if(this.hasSwapped === true)
			{
				this.index = 0;
				this.hasSwapped = false;
			}
			else
			{
				this.drawComplete();
				return;
			}
		}

		if(elements[this.index] > elements[this.index+1])
		{
			this.drawSwap();
			swap(elements, this.index, this.index+1);
			this.hasSwapped = true;
			this.index++;
			return;
		}

		else
		{
			this.drawScan();
			this.index++;
			return;
				
		}
	
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
		drawElements(0, Settings.elementCount-1);
		Visuals.drawComplete(0, this.outsideIndex);
		Visuals.drawSwap(this.outsideIndex, this.minimumIndex);
	}

	drawHit() 
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount-1);
		Visuals.drawComplete(0, this.outsideIndex-1);
		Visuals.drawHit(this.insideIndex);
		Visuals.drawComplete(this.outsideIndex);
	}	

	drawScan() 
	{
		background(Settings.backgroundColor);
		drawElements(0, Settings.elementCount-1);
		Visuals.drawComplete(0, this.outsideIndex-1);
		Visuals.drawHit(this.minimumIndex);
		Visuals.drawScan(this.insideIndex);
		Visuals.drawComplete(this.outsideIndex);
	}

	drawComplete()
	{
		background(Settings.backgroundColor);
		Visuals.drawComplete(0, Settings.elementCount=1);
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

class InsertionSort {

	constructor()
	{
		this.marker = 1;
		this.unsortedIndex = 1;
	}
	drawComplete() 
	{
		background(Settings.backgroundColor);
		Visuals.drawComplete(0, Settings.elementCount-1);
	}
	drawHit()
	{

	}
	drawSwap()
	{
		Visuals.drawSwap(this.marker, this.marker-1);
	}
	sort()
	{	
		
		if(elements[this.marker] <=	elements[this.marker-1])
		{
			background(Settings.backgroundColor);
			drawElements(0, Settings.elementCount);
			this.drawSwap();
			swap(elements, this.marker, this.marker-1);
			this.marker--;
		}
		else
		{
			if(this.unsortedIndex < Settings.elementCount-1) 
			{
				this.unsortedIndex++;
				this.marker = this.unsortedIndex;
			}
			else
			{
				this.drawComplete();
			}
		}
	}		
}

let SelectionSorter = new SelectionSort();
let BubbleSorter = new BubbleSort();
let InsertionSorter = new InsertionSort();
let QuickSorter = new QuickSort();
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
				BubbleSorter.sort();
			}
			if(Settings.sortType == "InsertionSort")
			{
				InsertionSorter.sort();
			}
			if(Settings.sortType == "QuickSort")
			{
				QuickSorter.sort();
			}
			
		}
	}
}

