let clickCounter = 0;

let starter = document.querySelector("#starter");
let typeScene = document.querySelector("#typer");
let startButton = document.querySelector("#startButton");
let typedText = document.querySelector("#typedtext");
let typeSound = document.querySelector("#typing");
let rainSound = document.querySelector("#rain");
let movieDiv = document.querySelector("#movie");
let movieOne = document.querySelector("#movieOne");
let mainScene = document.querySelector("#main");
let openDoor = document.querySelector("#open-door");
let marlow = document.querySelector("#marlow");
let carmen = document.querySelector("#carmen");
let wonderful = document.querySelector("#wonderful");
let eddie = document.querySelector("#eddie");

typeSound.volume = 0.8;
rainSound.volume = 0.2;

startButton.addEventListener('click', startAnimation);

function startAnimation(){
	clickCounter = clickCounter + 1;

	if(clickCounter ==1){
		console.log("this is working");
		typeScene.style.display ="block";
		starter.style.display ="none";
		typewriter();
		typeSound.play();
	}
}



// set up text to print, each item in array is new line
var aText = new Array(
"Los Angeles, 1945",
" ",
"Mr. Sternwood summoned me to his mansion.",
"He pretended it was about his daughter’s gambling.",
"I knew it wasn’t.",
"Mrs. Vivian Rutledge made it pretty clear.",
"It all started with Sean Regan missing..."
);
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter(){
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
  else{
  	typedText.classList.add('enable');
  	typeSound.pause();
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
};

typedText.addEventListener('animationend', startMovie);

function startMovie(){
	console.log("hey you");
	typeScene.style.display = "none";
	movieDiv.style.display = "block";
	rainSound.pause();
	movieOne.play();
	movieOne.addEventListener('ended', movieEnded);
}

function movieEnded(){
	console.log("the movie ended");
	movieDiv.style.display = "none";
	mainScene.style.display = "block";
	openDoor.style.display = "block";
	marlow.style.display = "block";
	eddie.style.display = "block";
	wonderful.style.display = "block";
	carmen.style.display = "block";
}




