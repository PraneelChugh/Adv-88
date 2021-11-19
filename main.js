canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

background_image="Grass.jpg";
ball_image="ball.png";
hole_image="golf-h.png";



ball_width=10;
ball_height=10;

ball_x=0;
ball_y=0;

hole_x=800;
hole_y=400;

block_image_width = 5;
block_image_height = 5;

var ball_object="";
var hole_object="";

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
        hole_object= Img;

        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
        hole_object.set({
        top:hole_y,
        left:hole_x
        });
        canvas.add(hole_object);
    });
	new_image();
}
		


function new_image(){
	fabric.Image.fromURL("ball.png", function(Img){
        ball_object= Img;

        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
        top:ball_y,
        left:ball_x
        });
        canvas.add(ball_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
if((ball_x==hole_x)&&(ball_y==hole_y)){
    canvas.remove(ball_object);
}

keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
}

function up()
{
if(ball_y >=0)
{
ball_y = ball_y + block_image_height;
console.log("block_image_height=" + block_image_height);
console.log("When up arrow is pressed,  x = " + ball_x + " | y = " +ball_y);
new_image();
}
}
function down()
{
if(ball_y <=500)
{
ball_y =ball_y+ block_image_height;
console.log("block_image_height=" + block_image_height);
console.log("When down arrow is pressed,  x = " + ball_x + " | y = " +ball_y);
new_image();
}
}
function left()
{
if(ball_x >= 0)
{
ball_x =ball_x + block_image_width;
console.log("block_image_width=" + block_image_width);
console.log("When left arrow is pressed,  x = " + ball_x + " | y = " +ball_y);
new_image();
}
}
function right()
{
if(ball_x <= 700)
{
ball_x =ball_x + block_image_width;
console.log("block_image_width=" + block_image_width);
console.log("When right arrow is pressed,  x = " + ball_x + " | y = " +ball_y);
new_image();
   }
}
