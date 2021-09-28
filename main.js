var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var img_width = 300;
var img_height = 100;

var img_image;

var img_x = 250;
var img_y = 250;

var img_imgTag
function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed a alphabet key";
		console.log("Alphabet key");
	} else if (keyPressed >=48 && keyPressed<=57) {
		numberkey();
		document.getElementById("d1").innerHTML="You pressed a number key";
		console.log("Number key");
	} else if (keyPressed >=37 && keyPressed<=40) {
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed a arrow key";
		console.log("Arrow key");
	} else if ((keyPressed == 17) || (keyPressed == 18) || (keyPressed == 27)) {
		specialkey();
		document.getElementById("d1").innerHTML="You pressed a special key (ctrl/alt/esc)";
		console.log("Special key (ctrl/alt/esc)");
	} else {
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("Other key");
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add();
	uploadimg(); 

}
function numberkey()
{
	img_image="numkey.png";
	add();
	uploadimg();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
	uploadimg();
}
function specialkey()
{
	img_image="spkey.png";
	add();
	uploadimg();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
	uploadimg();
}
	
