
var canvasHeight;
var canvasWidth;
var elementCount;
var values = [];
var states = []; 
var minimum;
var maximum;
var sortSpeed;
var barSpred;

var sortMethod;


Array.prototype.swap = function(a, b) {
	let input = this;
	let tmp = input[a];
	input[a] = input[b];
	input[b] = tmp;

}

function setup() {
	frameRate(2);
	noStroke();

	sortSpeed = 2;
	minimum = 50;
	maximum = 300;
	elementCount = 50;
	barSpred = (3);
	canvasWidth = windowWidth;
	canvasHeight = windowHeight/2;
	for (let i = 0; i < elementCount; i++)
	{
		values.push(new int);
		values[i] = random(maximum-minimum) + minimum;
	}


	createCanvas(canvasWidth, canvasHeight);
}

async function swap(array, a, b)
{
		await sleep(30);	
		let temp = 	array[a];
		array[a] = array[b];
		array[b] = temp; 
}


function sleep(milliseconds) { 
        return new Promise(resolve => setTimeout(resolve, milliseconds)); 
} 
function draw() {

	values = sort(values, values.length);
	background(0);
	stroke(255);		
	var barWidth = (canvasWidth / (elementCount) - 1);
	var x = 0;
	barSpred = 1;          
	for (let i = 0; i < values.length; i++)
	{
		rect(x, canvasHeight, barWidth - barSpred, values[i] - canvasHeight);	
		x+=(barSpred + barWidth);
	}

}