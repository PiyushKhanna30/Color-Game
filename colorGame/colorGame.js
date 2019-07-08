var num=6;
var colors = generateRandomColors(num);
//Selecting default color
var defaultColor=pickColor();
//Adding default in heading
var head=document.getElementById("rgb");
head.innerHTML=defaultColor;
var heading = document.getElementsByTagName("h1");
var messageShow=document.getElementById("message");
var squares=document.getElementsByClassName("square");
for (var i =0;i<squares.length;i++)
{
	//Assinging color to squares
	squares[i].style.background=colors[i];
	//Adding event listener to squares
	squares[i].addEventListener("click",getColor);
}
//Functions---------------------------------
function buttonClick(){
	heading[0].style.background = "steelblue";
	messageShow.innerHTML="";
	btn.innerHTML="Change Colors?";
	colors =generateRandomColors(num);
	defaultColor=pickColor();
	head.innerHTML=defaultColor;
	for (var i =0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
		squares[i].addEventListener("click",getColor);
	}
};
function easyButtonClick(){
	num = 3;
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	easybtn.disabled = true;
	hardbtn.disabled = false;
	heading[0].style.background = "steelblue";
	messageShow.innerHTML="";
	btn.innerHTML="Change Colors?";
	colors =generateRandomColors(num);
	defaultColor=pickColor();
	head.innerHTML=defaultColor;
	for (var i =0;i<squares.length;i++)
	{
		if (colors[i])
		{
			squares[i].style.background=colors[i];
			squares[i].addEventListener("click",getColor);	
		}
		else
		{
			squares[i].style.background = "#232323"
			squares[i].style.display = "none";
		}
	}
};
function generateRandomColors(num){
	//Generate array
	var randomColor=[];
	//Generating random colors logic
	for (var i=0;i<num;i++)
	{
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);		
		var col = "rgb("+r+", "+g+", "+b+")";
		randomColor.push(col);
	}
	//Return array
	return randomColor;
};
//Get color function Check function sets to all or erase to background
function getColor(){
	//console.log(this.style.background,defaultColor)
	if (this.style.background===defaultColor)
	{
		messageShow.innerHTML="Correct !";
		heading[0].style.background = defaultColor;
		setColorForAll();
		var button = document.getElementById("btn");
		btn.innerHTML="Play Again?";
	}
	else{
		this.style.background="#232323";
		messageShow.innerHTML="Try Again !";
	}	
};
function hardButtonClick(){
	num = 6;
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	hardbtn.disabled = true;
	easybtn.disabled = false;
	heading[0].style.background = "steelblue";
	messageShow.innerHTML="";
	for(var i =0;i<squares.length;i++)
	{
		squares[i].style.display = "block";
	}
	btn.innerHTML="Change Colors?";
	colors =generateRandomColors(num);
	defaultColor=pickColor();
	head.innerHTML=defaultColor;
	for (var i =0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
		squares[i].addEventListener("click",getColor);
	}
};
function pickColor(){
	//To select a nuber between 0 and length of array-1
	//Math.random()=[0,1),Math.floor(0.2)=0,Math.ceil(0.2)=1
	var random = Math.floor(Math.random() * colors.length);
	//Return a selected color from array
	return colors[random]; 
};
function setColorForAll(){
	for (var i =0;i<squares.length;i++)
	{
		squares[i].style.background=defaultColor;
	}
};