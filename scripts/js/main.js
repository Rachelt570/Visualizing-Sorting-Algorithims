let canvas;


function resetDraw() 
{
	background(Settings.backgroundColor);
	Settings.lineThickness = floor(Settings.width/Settings.elementCount); //Set thickness based on elementCount
	stroke(1); //Arbitary
	Settings.leftPadding =  (Settings.width - (Settings.elementCount * Settings.lineThickness)) * 0.5;
}

function sortTypeUpdate(newSortType)
{
	Settings.sortType = newSortType;
	updateSortInfo(newSortType);
}

function updateSortInfo(newSortType)
{
	updateTitle(newSortType);
	updatePerformanceInfo(newSortType);
	updateExampleCode(newSortType);

}
function updateTitle(newSortType)
{
	$("#sortTitle").text($("#sortType option:selected").text());
}

function updatePerformanceInfo(newSortType)
{
	$("#sortPerformanceInfo").empty();
	if(newSortType === "BubbleSort")
	{	
		$("#sortPerformanceInfo").append("<li> Worst Case Time: O(n<sup>2</sup>) </li>");
		$("#sortPerformanceInfo").append("<li> Average Case Time: O(n<sup>2</sup>) </li>");
		$("#sortPerformanceInfo").append("<li> Best Case Time: O(n) </li>");
		$("#sortPerformanceInfo").append("<li> Worst Case Space: O(1) </li>");
		$("#sortPerformanceInfo").append("<li> Stable: Yes </li>");
		$("#sortPerformanceInfo").append("<li> In Place: Yes </li>");
	}
	if(newSortType === "QuickSort")
	{
		$("#sortPerformanceInfo").append("<li> Worst Case Time: O(n<sup>2</sup>) </li>");
		$("#sortPerformanceInfo").append("<li> Average Case Time: O(n log(n)) </li>");
		$("#sortPerformanceInfo").append("<li> Best Case Time: O(n log(n)) </li>");
		$("#sortPerformanceInfo").append("<li> Worst Case Space: O(n) </li>");
		$("#sortPerformanceInfo").append("<li> Stable: No </li>");
		$("#sortPerformanceInfo").append("<li> In Place: Yes </li>");
	}
	if(newSortType === "SelectionSort")
	{
		$("#sortPerformanceInfo").append("<li> Worst Case Time: O(n<sup>2</sup>) </li>");
		$("#sortPerformanceInfo").append("<li> Average Case Time: O(n<sup>2</sup>) </li>");
		$("#sortPerformanceInfo").append("<li> Best Case Time: O(n<sup>2</sup>) </li>");
		$("#sortPerformanceInfo").append("<li> Worst Case Space: O(1) </li>");
		$("#sortPerformanceInfo").append("<li> Stable: No </li>");
		$("#sortPerformanceInfo").append("<li> In Place: Yes </li>");
	}
	if(newSortType === "InsertionSort")
	{
		$("#sortPerformanceInfo").append("<li> Worst Case Time: O(n<sup>2</sup>) </li>");
		$("#sortPerformanceInfo").append("<li> Average Case Time: O(n<sup>2</sup>) </li>");
		$("#sortPerformanceInfo").append("<li> Best Case Time: O(n)</li>");
		$("#sortPerformanceInfo").append("<li> Worst Case Space: O(1) </li>");
		$("#sortPerformanceInfo").append("<li> Stable: Yes </li>");
		$("#sortPerformanceInfo").append("<li> In Place: Yes </li>");
	}
}

function updateExampleCode(newSortType)
{

		$("#CodeExample").empty()

	if(newSortType === "BubbleSort")
	{

		$("#CodeExample").append("<pre> \n <code> \nFunction BubbleSort(array, start, end)\n{\n\tif(start > end || (start < 0 || end < 0))\n\t//Return if out of bounds or if the start and end indexes are in the wrong order\n\t{\n\t\treturn;\n\n\t}\n\tfor(let i = start; i < end-1; i++)\n\t{\n\t\tfor(let n = start; n < end-i-1; n++)\n\t\t{\t\n\t\t\tif(array[n] > array[n+1]\n\t\t\t{\n\t\t\t\tswap(array[n], array[n+1]);\n\t\t\t}\n\t\t}\n\t}\n\n}\n\n </code> </pre>");
	}
    if(newSortType === "QuickSort") 
    {
    	$("#CodeExample").append("<pre> \n <code> \nFunction QuickSort(array, start, end)\n{\n\tif(start >= end)\n\t{\n\t\treturn;\n\t}\n\tvar.partition = Partition(array, start, end);\n\tQuickSort(array, start, partition-1);\n\tQuickSort(array, partition+1, end);\n\n}\t\n\nFunction Partition(array, start, end)\n{\n\tvar pivotIndex = start;\n\tvar pivot = array[end];\n\tfor(var i = start; i < end; i++0\n\t{\n\t\tif(array[i] <  pivot)\n\t\t{\n\t\t\tif(i !pivotIndex)\n\t\t\t{\n\t\t\t\tswap(array[i], array[pivotIndex]);\n\t\t\t}\n\t\t\tpivotIndex++;\n\t\t}\n\t}\n\tif(pivotIndex != end)\n\t{\t\n\t\tswap(array[pivotIndex], array[end]);\n\t}\n\treturn pivotIndex;\n\n}	</code> </pre>");

    }
    if(newSortType === "SelectionSort")
    {
    	$("#CodeExample").append("<pre> \n <code> \nFunction SelectionSort(array, start, end)\n{\n\tif(start > end || (start < 0 || end < 0))\n\t//Return if out of bounds or if the start and end indexes are in wrong order\n\t{\n\t\treturn;\n\t}\n\tvar minimumIndex;\n\tfor(var i = start; i < end; i++)\n\t{\t\n\t\tvar minimumIndex;\n\t\tfor(var n = i+1; n < end; n++)\n\t\t{\t\t\n\t\t\tif(array[n] < array[minimumIndex])\n\t\t\t{\n\t\t\t\tminimumIndex = n;\n\t\t\t}\n\t\t}\n\t\tswap(array[i], array[minimumIndex]);\n\t}\n}\n\n </code> </pre>");
    }
    if(newSortType === "InsertionSort")
    {
    	$("#CodeExample").append("<pre> \n <code>Function InsertionSort(array, start, end)\n{\n\tif(start > end || (start < 0 || end < 0))\n\t//Return if out of bounds or if the start and end indexes are in wrong order\n\t{\n\t\treturn;\n\t}\n\tvar n;\n\tfor(var i = start + 1; start < end; i++)\n\t{\n\t\tvar value = array[i];\n\t\tn = i - 1;\n\t\twhile(n >= 0 && array[n] > value)\n\t\t{\n\t\t\tswap(array, n+1, n);\n\t\t\tn = n - 1;\n\t\t}\n\t\tarray[n+1] = value;\n\t}\n}\n\n </code> </pre>");
    }
}
function elementCountUpdate(newElementCount)
{
	Settings.elementCount = newElementCount;
	Data.elements = [];
	Data.states = [];
	for(let i = 0; i < Settings.elementCount; i++)
	{
		Data.elements.push(Utilities.getRandomInt(Settings.height, 5));
		Data.states.push(0);

	}
		Visuals.drawElements(0, Settings.elementCount);
		resetDraw();
}

function frameRateUpdate(newFrameRate)
{
	Settings.framesPerUpdate = floor(60-newFrameRate) + 1;
}

async function executeSort() 
{
	if(Settings.sortType === "NULL")
	{
		return;
	}
	Settings.sortExecution = true;
	if(Settings.sortType == "BubbleSort") 
	{
		await Sorting.BubbleSort(Data.elements, 0, Data.elements.length);
	}
	if(Settings.sortType == "SelectionSort")
	{
		await Sorting.SelectionSort(Data.elements, 0, Data.elements.length);
	}
	if(Settings.sortType == "QuickSort")
	{
		await Sorting.QuickSort(Data.elements, 0, Data.elements.length-1);
	}
	if(Settings.sortType == "InsertionSort")
	{
		await Sorting.InsertionSort(Data.elements, 0, Data.elements.length);
	}
	for(let i = 0; i < Data.states.length; i++)
	{
		Data.states[i] = Visuals.completeValue;
	}
}		

let Data = 
{
 	states: [],
 	elements: [],
};

let Settings = 
{
	_elementCount: 50, 
	_FPS: 60, 
	_sortType: "BubbleSort",
	_lineThickness: 0,
	_leftPadding: 0,
	_backgroundColor: 100,
	_framesPerUpdate: 10,

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


};
let Utilities = 
{
	getRandomInt(max, min) 
	{
		return Math.floor(Math.random() * max) + min;
	},
	async aSwap(array, firstIndex, secondIndex)
	{
		tmp = array[firstIndex];
		array[firstIndex] = array[secondIndex];
		array[secondIndex] = tmp;
		return;
	},

	timeout(ms) {
  	  return new Promise(resolve => setTimeout(resolve, ms));
	}

}

let Visuals = 
{
	_defaultValue: 0,
	_accessValue: 1,
	_swapValue: 2,
	_saveValue: 3, 
	_completeValue: 4,

	get defaultValue()
	{
		return this._defaultValue;
	},
	get accessValue()
	{
		return this._accessValue;
	},
	get swapValue()
	{
		return this._swapValue;
	},
	get saveValue()
	{
		return this._saveValue;
	},
	get completeValue()
	{
		return this._completeValue;
	},
	drawElement(array, index, color, oldColor)
	{
		fill(color);
		rect(Settings.leftPadding + Settings.lineThickness * index, Settings.height-array[index], Settings.lineThickness, array[index]);
		fill(oldColor);
	},
	drawElements(array, startIndex, endIndex, color, oldColor)
	{
		for(let i = startIndex; i < endIndex; i++)
		{
			Visuals.drawElement(array, i, color, oldColor);
		}
	},
	drawDefault(array, index)
	{
		Visuals.drawElement(array, index, color(255), color(255));
	},
	drawComplete(array, index)
	{
		Visuals.drawElement(array, index, color(0, 255, 0), color(255));
	},
	drawSwap(array, index)
	{
		Visuals.drawElement(array, index, color(255, 0, 0), color(255));
	},
	drawAccess(array, index)
	{
		Visuals.drawElement(array, index, color(0, 0, 255), color(255));
	},
	drawSave(array, index)
	{
		Visuals.drawElement(array, index, color(255, 255, 0), color(255));
	},
	refreshBackground()
	{
		background(Settings.backgroundColor);
	},
	async vSwap(array, firstIndex, secondIndex)
	{
		tmp = Data.states[firstIndex];
		tmpTwo = Data.states[secondIndex];
		Data.states[firstIndex] = Visuals.swapValue;
		Data.states[secondIndex] = Visuals.swapValue;
		await Utilities.timeout(40);
		Utilities.aSwap(array, firstIndex, secondIndex);
		Data.states[firstIndex] = tmp;
		Data.states[secondIndex] = tmpTwo;
		return;
	}
}

let Sorting = 
{
	async BubbleSort(array, start, end)
	{
		if(start > end || (start < 0 || end < 0))
		{
			return 1;
		}
		for(let i = start; i < end-1; i++)
		{
			for(let n = start; n < end-i-1; n++)
			{
				Data.states[n] = Visuals.accessValue;
				Data.states[n+1] = Visuals.accessValue;
				await Utilities.timeout(40);

				if(array[n] > array[n+1])
				{
					await Visuals.vSwap(array, n, n+1);
				}				
				Data.states[n] = Visuals.defaultValue;
				Data.states[n+1] = Visuals.defaultValue;
			}
			Data.states[end-1-i] = Visuals.completeValue;
		}
		return 0;
	},
	async SelectionSort(array, start, end)
	{
		let minimumIndex;
 		for(let i = start; i < end; i++)
 		{
 			minimumIndex = i;
 			for(let n = i+1; n < end; n++)
 			{
 				Data.states[n] = Visuals.accessValue;
 				Data.states[minimumIndex] = Visuals.saveValue;
 				await Utilities.timeout(40);
 				if(array[n] < array[minimumIndex])
 				{
 					Data.states[minimumIndex] = Visuals.defaultValue;
 					Data.states[n] = Visuals.saveValue;
 					minimumIndex = n;
 				}
 				else
 				{
 					Data.states[n] = Visuals.defaultValue;
 				}
 				await Utilities.timeout(40);
 			}

 			await Visuals.vSwap(array, i, minimumIndex);
 			Data.states[minimumIndex] = Visuals.defaultValue;
 			Data.states[i] = Visuals.completeValue;
 		}
	}, 
	async QuickSort(array, start, end)
	{
		if (start >= end) 
		{
			return;
		}
		let part = await Sorting.LomutoPartition(array, start, end);

		await Promise.all([
				Sorting.QuickSort(array, start, part -1),
				Sorting.QuickSort(array, part + 1, end)
			]);

	},
	async LomutoPartition(array, start, end)
	{
		let pivotIndex = start;
		let pivot = array[end];
		Data.states[start] = Visuals.saveValue;
		Data.states[end] = Visuals.saveValue;
		Data.states[pivotIndex] = Visuals.accessValue;
		for(let i = start; i < end; i++) 
		{
			Data.states[i] = Visuals.accessValue;
			await Utilities.timeout(100);
			if(array[i] < pivot)
			{
				Data.states[i] = Visuals.swapValue;
				Data.states[pivotIndex] = Visuals.swapValue;
				if(i != pivotIndex)
				{
					await Visuals.vSwap(array, i, pivotIndex);
					Data.states[pivotIndex] = Visuals.defaultValue;
				}
				Data.states[pivotIndex] = Visuals.defaultValue;
				pivotIndex++;
				Data.states[pivotIndex] = Visuals.accessValue;
			}
			Data.states[i] = Visuals.defaultValue;
		}

		Data.states[pivotIndex] = Visuals.swapValue;
		Data.states[end] = Visuals.swapValue;
		if(pivotIndex != end)
		{
			await Utilities.timeout(200);
			await Utilities.aSwap(array, pivotIndex, end);
		}
		Data.states[pivotIndex] = Visuals.defaultValue;
		Data.states[start] = Visuals.defaultValue;
		Data.states[end] = Visuals.defaultValue;
		return pivotIndex;
	},
	async InsertionSort(array, start, end)
	{
		let n;
		for(let i = start+1; i < end; i++)
		{

			let value = array[i];
			Data.states[i] = Visuals.saveValue;
			n = i -1;
			await Utilities.timeout(40);
			while(n >= 0 && array[n] > value)
			{
				await Visuals.vSwap(array, n+1, n);
				Data.states[i] = Visuals.saveValue;
				await Utilities.timeout(40);
				Data.states[n+1] = Visuals.defaultValue;
				Data.states[n] = Visuals.defaultValue;
				n = n-1;

			}
			array[n+1] = value;
			Data.states[n+1] = Visuals.defaultValue;
			Data.states[i] = Visuals.defaultValue;

		}
	}
}
function windowResized() 
{
	height = $("#main").height();
	width = $("#main").width();
	resizeCanvas(width, height);
	Visuals.refreshBackground();		

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
		Data.elements.push(Utilities.getRandomInt(Settings.height, 5));
		Data.states.push(0);
	}
	elementCountUpdate(50);
	sortTypeUpdate("NULL");
}


function draw() 
{
	Visuals.refreshBackground();
	for(let i = 0; i < Data.elements.length; i++)
	{
		if(Data.states[i] == 0)
		{
			Visuals.drawDefault(Data.elements, i);
		}
		if(Data.states[i] == 1)
		{
			Visuals.drawAccess(Data.elements, i);
		}
		if(Data.states[i] == 2)
		{
			Visuals.drawSwap(Data.elements, i);
		}
		if(Data.states[i] == 3)
		{
			Visuals.drawSave(Data.elements, i);
		}
		if(Data.states[i] == 4)
		{
			Visuals.drawComplete(Data.elements, i);
		}

	}
}

