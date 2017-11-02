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
let sound = document.querySelector("#backgroundsound");
let missingPoster = document.querySelector("#missing-poster");
let poster = document.querySelector("#poster");
let movieTwo = document.querySelector("#movieTwo");
let lastScene = document.querySelector("#lastScene");
let endSceneDiv = document.querySelector("#endScene");
let creditPage = document.querySelector("#credits");
let netflixButton = document.querySelector("#netflix");
let replatyButton = document.querySelector("#replay");
let imdbButton = document.querySelector("#imdb");


/*
let eddieShadow = document.querySelector("#eddieShadow");
let carmenShadow = document.querySelector("#carmenShadow");
let wonderfulShadow = document.querySelector("#wonderfulShadow");
let marlowShadow = document.querySelector("#marlowShadow");
*/

let marlowSound = document.querySelector("#marlowSound");
let wonderfulSound = document.querySelector("#wonderfulSound");
let carmenSound = document.querySelector("#carmenSound");
let eddieSound = document.querySelector("#eddieSound");



typeSound.volume = 0.8;
rainSound.volume = 0.2;
sound.volume = 0.1;


startButton.addEventListener('click', startAnimation);

function startAnimation(){
	clickCounter = clickCounter + 1;

	if(clickCounter ==1){
		console.log("this is working");
		typeScene.style.display ="block";
		starter.style.display ="none";
		startButton.style.display = "none";
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
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + " ";
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
	eddie.style.display ="block";
	wonderful.style.display = "block";
	carmen.style.display = "block";
	poster.style.display = "block";
	sound.play();
}

marlow.onmouseover = function(){mouseOver()};
marlow.onmouseout = function(){mouseOut()};

function mouseOver(){
	//if (marlowSound.paused) {
		marlowSound.currentTime=0;
  		marlowSound.play()
	//}
}

function mouseOut(){
	marlowSound.pause();
}


eddie.onmouseover = function(){mouseOverEddíe()};
eddie.onmouseout = function(){mouseOutEddie()};

function mouseOverEddíe(){
	eddieSound.currentTime=0;
	eddieSound.play();
}

function mouseOutEddie(){
	eddieSound.pause();
}

wonderful.onmouseover = function(){mouseOverWonderful()};
wonderful.onmouseout = function(){mouseOutWonderful()};

function mouseOverWonderful(){
	wonderfulSound.currentTime=0;
	wonderfulSound.play();
}

function mouseOutWonderful(){
	wonderfulSound.pause();
}

carmen.onmouseover = function(){mouseOverCarmen()};
carmen.onmouseout = function(){mouseOutCarmen()};

function mouseOverCarmen(){
	carmenSound.currentTime=0;
	carmenSound.play();
}

function mouseOutCarmen(){
	carmenSound.pause();

}

poster.addEventListener('click', getMissingPoster);

function getMissingPoster(){
	poster.classList.toggle('enable')
}

openDoor.addEventListener('click', startSecoundMovie);

function startSecoundMovie(){
	movieTwo.play();
	lastScene.style.display="none";
	endSceneDiv.style.display="block";
	sound.pause();
	movieTwo.addEventListener('ended', movieTwoEnded);
}

function movieTwoEnded(){
	endSceneDiv.style.display="none";
	credits.style.display="block";
	sound.currentTime=0;
	sound.play();
	imdbButton.style.display="block";
	netflixButton.style.display="block";
	replatyButton.style.display="block";
}

netflixButton.addEventListener('click', openNetflix);

function openNetflix(){
	window.open("https://www.netflix.com/watch/305718?trackId=14170045&tctx=0%2C0%2C7726ebd8-9053-46e7-ab84-de2383f6d046-44674569");
}

imdbButton.addEventListener('click', openImdb);

function openImdb(){
	window.open("http://www.imdb.com/title/tt0038355/?ref_=nv_sr_1");
}

replatyButton.addEventListener('click', refreshPage);

function refreshPage(){
	window.location.reload();
}
