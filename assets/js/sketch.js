var sortMethod;
let values = [];
let states = []; 
let elementCount = 500; 

function setup() 
{ 
	elementWidth = (displayWidth / elementCount);
	createCanvas(displayWidth, displayHeight/2);           
    values = new Array(floor(width/elementWidth)); 
    for(let i = 0; i < values.length; i++) 
    { 
    	values[i] = float(random(height)); 
        states[i] = -1;  
    }   
   // bubblesort(values, 0, values.length);
   quicksort(values, 0, values.length);       
} 

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
    if(isSorted(values)) 
    {
    	stroke(0);
        fill("#00ff00");
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
	await sleep(25); 
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
