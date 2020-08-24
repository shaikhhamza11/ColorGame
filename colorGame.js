var numSquares=6;

var colors= generateColor(numSquares);
var squares= document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var pickedColor=pickColor();
var displayMessage=document.querySelector("#displayMessage");
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset")
colorDisplay.textContent=pickedColor;
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");

easyButton.addEventListener("click",function ()
{
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares=3
	colors=generateColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none"; 
		}
	}

});
hardButton.addEventListener("click",function ()
{
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares=6
    colors=generateColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor=colors[i];
		
			squares[i].style.display="block"; 
		
	}	
});






resetButton.addEventListener("click", function()
{    
	colors=generateColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	this.textContent="new color";
	for(i=0 ;i<squares.length; i++) 
{
	squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor ="steelblue";
displayMessage.textContent="";
});


for(i=0 ;i<squares.length; i++) 
{
	squares[i].style.backgroundColor=colors[i];


	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			displayMessage.textContent="Correct";
			resetButton.textContent="Play Again";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else
		{
			
			this.style.backgroundColor="#232323";
			displayMessage.textContent="Try Again";
		}	
	});
}	

function changeColors(color){
	for(i=0; i<squares.length; i++ )
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor ()
 {
	var random=Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generateColor(number)
{
	var arr=[];
	for(var i=0;i<number;i++)
	{
		arr.push( randomColor());
	}
	return arr; 
}
function randomColor()
{
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb("+r +", "+g + ", "+b + ")" ;
}  
