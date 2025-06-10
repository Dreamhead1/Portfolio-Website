var x =400;
var y =570;
var diameter = 50;
var diameterA = 25;
var lLX =390;
var lLY =450;
var rLX =400;
var rLY =450;
var cX =30;
var cY =30;
var rX =30;
var rY =400;
var mousex =0;
var mousey =0;

var xXs= [];
var xYs= [];
var xDiameters = [];
var red = [];
var blue = [];
var green = [];
var xMVMT = [];
var yMVMT = [];

//array var

    function setup() 

    {
      createCanvas(800, 600);
      //loop
      for(var i =0; i < 5; i++){
        xMVMT[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        yMVMT[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        xXs [i] = getRandomNumber(800);
        xYs [i] = getRandomNumber(600);
        xDiameters [i] = getRandomNumber(100);
        red [i] = getRandomNumber(250);
        blue [i] = getRandomNumber(250);
        green [i] = getRandomNumber(250);
    
      }
    }

    function draw() 
    {
      background(100,0,150);
      
      for(var i = 0; i < xXs.length; i++)
        {
          fill(red[1], green [i], blue [i]);
          circle(xXs[i], xYs[i], xDiameters[i]);
          xMVMT[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
          yMVMT[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
  
  
  
        
          xXs[i] += xMVMT[i];
          xYs[i] += yMVMT[i];
         
          if (xXs[i] > width) {
              xXs[i] = 0;
          }
          if (xXs[i] < 0) {
              xXs[i] = width;
          }
          if (xYs[i] > height) {
              xYs[i] = 0;
          }
          if (xYs[i] < 0) {
              xYs[i] = height;
          }
        }

createPlayer();
createObstacles();
createBorders(0,800,600);
 /*walls
      A = 0
      B =800
      C =600
      */
createSummon();
createExit();
createYouwin();
getRandomNumber(i);

    }
 
function createPlayer(){
    /*
player model
w =87
a=65
s=83
d=68
space=32
*/
fill(250,0,0);
circle(x,y,diameter);

fill(0);
circle(x,y,diameterA);
if(keyIsDown(87)){
    y-=10;
}
if(keyIsDown(83)){
    y+=10;
}
if(keyIsDown(65)){
    x-=10;
}
if(keyIsDown(68)){
    x+=10;
}
}

function createSummon(){
    //summon circle
    fill(150,50,0);
    circle(mousex, mousey, 50);
    circle(mousex, mousey, 20);
}

function createObstacles(){
     //obstacles
     fill(100,90,200);
     circle(cX,cY,50);
     if (cX > 400) {
         cX = 30;
     }
     else if (cX > 300) {
         cX += 20;
     }
     else if (cX <= 400) {
         cX += 10;
     } 
     
     if (cY > 300) {
         cY = 30;
     }
     else if (cY > 200) {
         cY += 20;
     } 
     else if (cY <= 300) {
         cY += 15;
     }

     fill(100,150,0);
     rect(rX,rY,20,20);
     if (rX>800){
         rX=0;
     }
     else if (rX<=800){
         rX+=20;
     }

     if (rY<1){
         rY =400;
     }
     else if (rY>1){
         rY-=5;
     }
}

function createBorders(A,B,C){
      /*walls
      A = 0
      B =800
      C =600
      */
      fill(A);
      rect(A,450,300,20);
      rect(800,450,-300,20);
      strokeWeight(20);
      line(A,A,B,A);
      line(A,A,A,C);
      line(B,A,B,C);
      line(A,C,B,C);
      //doors
      strokeWeight(12);
      //left door
      line(300,450,lLX,lLY);
      //right door
      line(rLX,rLY,500,450);
      if (rLX>500 && rLY<350 && lLX<290 && lLY<350){
          rLX =400;
          rLY =450;
          lLX =390;
          lLY =450;
      }
}

function createExit(){

        //exit
        fill(250);
        rect(5,10,50,10);

}

function createYouwin(){
           //youwin
           fill(150,50,0);
           textSize(20);
           text('EXIT',10,20);
   
           if(x<0 && y<0){
               fill(250,250,0);
               textSize(50);
               text('YOU win',300,300);
           }
   
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
        
function mousePressed()
        {
        mousex = mouseX;
        mousey = mouseY;
        
        }   
function keyPressed(){
        if (key == 'w')
        {
            lLY-=100;
            lLX-=100;
            rLX+=100;
            rLY-=100;
        }
    }