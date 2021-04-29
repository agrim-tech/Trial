var color ="#1a1a1a";
var width ="2";
var currentx,currenty;
var lastx,lasty;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var screenwidth = screen.width;
var newwidth = screenwidth-70;
var newheight = screen.height-300;
var mode1 =  "light";

if(screenwidth < 993){
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = hidden;
}

canvas.addEventListener("touchstart",touch);

function touch(e){
color = document.getElementById("input").value;
width = document.getElementById("input2").value;
console.log("Touch Has Been Declared");
currentx = e.touches[0].clientX-canvas.offsetLeft;
currenty = e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",touch2);

function touch2(e){
currentx = e.touches[0].clientX-canvas.offsetLeft;
currenty = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
    console.log(currentx,currenty);
    console.log(lastx,lasty);
lastx = currentx;
lasty = currenty;
}
function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}
function changeforachange(){
    mode1 = document.getElementById("mode").value;

if (mode1 == "light") {
    document.getElementById("myCanvas").style.backgroundColor ="white";
    color = "black";
    document.getElementById('input').value ='black';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
if (mode1 == "dark") {
    document.getElementById("myCanvas").style.backgroundColor ="black";
    color = "white";
    document.getElementById('input').value ='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
}