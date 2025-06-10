/**
 game;
 wizard trying to become human

 opening title, "So you wish to be Human?"-> fades
 1 level tower game
 spirits come out and if you touch them "You Lose pops up"
 You must get to the golden face orb to become human
 player is also a spirit
 Create spirits (obstacles)
 Create walls
 Create goldenfaceorb
 Use Arrays
 Move the obstacles randomly around the screen. If they leave the screen, have them come back on the other side.

 */

//variables
var x =100;
var y =570;
var diameter = 50;
var diameterA = 25;
//
var A = Math.floor(Math.random()* 200);
var B = Math.floor(Math.random()* 200);
var C = Math.floor(Math.random()* 200);
var MovePrologue = 320;
//
var mousex =1000;
var mousey =1000;
var qX =100000;
var qY=100000;
var zX=0;

//
var lLX =390;
var lLY =450;
var rLX =400;
var rLY =450;
//
var lLX1 =390;
var lLY1 =450;
var rLX1 =400;
var rLY1 =450;
//
var G = 400;
var H = 0;
var I =40;
var myG = [];
var myH = [];
var myI = [];
var cX = 530;
var cY =280;
var dX = 170;
var dY = 350;
//left eye
var eX = 75;
var eY = 275;
var fX = 130;
var fY =100;
//right eye
var gX =500
var gY =150
var hX =100
var hY =150
var xMVMT = [];
var yMVMT = [];
var xXs= [];
var xYs= [];
var xDiameters = []
var r = 100;
var g = 0;
var b = 50;
var DiameterB = 1;
function setup(){
      createCanvas(800, 600);
      
       
    
}

function draw() {

background(r,g,b);

CreatePrologue();
createBorders(0,800,600);
createPlayer();
createFace();
Hi();
createSpirits();
    for(var i = 0; i < xXs.length; i++)
        {

          circle(xXs[i], xYs[i], xDiameters[i]);
          xMVMT[i] = Math.floor(Math.random()) 
          yMVMT[i] = Math.floor(Math.random())
  
  
  
  
        
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



//createYouLose();


}
function createSpirits(){
    for(var i = 0; i <200; i++){
fill(A,B,C, 200);
circle(G,H,I);
circle(myG,myH,myI);

if(H<=500){
    G=(Math.floor(Math.random() * 800));
        };
if (H > 100) {
    H = 30;
}
else if (H > 200) {
    H ++;
} 
else if (H <= 300) {
    H ++;
}
    }}
function createPlayer(){
/* 
player model
w =87
a=65
s=83
d=68
space=32
*/
fill(0,0,250);
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
//border
if(x>=800 || y>= 600 || x<=0 || y<=0){
    x = 400
    y = 570
}

}

function CreatePrologue(){
// "So you wish to be human"
fill(A,B,C);
textSize(20);
textStyle(BOLDITALIC);
text('So... You Wish to be HUMAN?!',MovePrologue,300,20);

}

function Hi(){
    fill(A,B,C);
    text('Actuaaaally... I think Im okay being an amorphous rainbow sphere. Being human would be crazy, now who would choose that...', mousex,mousey,300)
    push();
    fill(r,g,b,100);
    circle(qX,qY,zX);
    if(r>=200 || g>=200 || b>= 200){
        I++;
        zX+=20;
    }
    if(I>= 50){
        I=0;
    }
    
    if (zX >= 1000){
        zX = 1;
        qX = Math.floor(Math.random()* 800) +10;
        qY = Math.floor(Math.random()* 800) +10;
    }
    pop();
   


}
function createFace(){
    //A
    line(400,375,400,150);
    //B
    line(400,150,150,150);
    //C
    line(300,450,300,225);
    //D
    line(300,225,75,225);
    //E
    line(75,225,75,375);
    //F
    line(75,375,200,375);
    //G
    line(200,375,200,300);
    //H
    line(75,225,75,75);
    //I
    line(75,75,700,75);
    //J
    line(700,75,700,375);
    //K
    line(700,375,500,375);
    //r eye
    
    fill(A,B,C);
    rect(gX,gY,hX,hY);
    circle(cX,cY,40);
    circle(cX,cY,5);

    //l eye
    fill(A,B,C);
    rect(eX,eY,fX,fY);
    circle(dX,dY,40);
    circle(dX,dY,5);

/*
    var cX = 530;
var cY =280;
var dX = 170;
var dY = 350;
//left eye
var eX = 75;
var eY = 275;
var fX = 130;
var fY =100;
*/
//right eye
    //bottom of nose
    line(470,375,375,375);
    line(470,375,470,300);
    //L**
    line(500,375,500,150);
    //r Jaw
    line(690,375,690,450);
    line(690,450,550,600);
    
    if(x >=400 && y>= 390){
        dX+=15;
        dY+=7;
        cX-=7;
        cY+=10;
    }
    if(dX >= 400 && dY >= 390){
        dX=400;
        dY=450;
    }
    if(cX <=400 && cY >=390){
        cX=400;
        cY=450;
    }
    if (cX=== dX && cY === dY){
        diameter+=20
        diameterA+=10
    }
    if (diameter >= 300){
        fill(r,g,b);
        textStyle(ITALIC);
        text('To be human... To be human.. Is to believe you are more your reflection in the moving waters than the tangible being you are', 25,300,300);
        text('Click to say youre first words...',20,450,300);
        eX+=5;
        eY-=10;
        fX+=5;
        fY-=10;
        gX+=5;
        gY-=10;
        hX+=5;
        hY-=10;
        r++;
        g++;
        b++;
        A++;
        B++;
        C++;
       
       

        }
            if (r>=250 ||A>=250){
                r=0;
                A=0;
                
            }
            if (g>=250 || B>=250){
                g=0;
                B=0;
            }
            if(b>=250||C>=250){
                b=0;
                C=0;
            }
        
   }
  
function createBorders(D,E,F){
    
    fill(D);
    strokeWeight(20);
    line(D,D,E,D);
    line(D,D,D,F);
    line(E,D,E,F);
    line(D,F,E,F);
    //doors
    strokeWeight(12);
    //left mouth
    line(300,450,lLX,lLY);
    //right mouth
    line(rLX,rLY,500,450);
    if (rLX>500 && rLY<350 && lLX<290 && lLY<350){
        rLX =400;
        rLY =450;
        lLX =390;
        lLY =450;
    }
     //left mouth 2
     line(300,450,lLX1,lLY1);
     //right mouth 2
     line(rLX1,rLY1,500,450);
     if(key == 'w' || key == 'a' || key == 's' || key == 'd'){
        fill(150,50,100);
        quad(300, 450, 400, 400, 500, 450, 400, 525);
        text('Within me is what you seek, enter if you dare',220,300,20);
        
    }
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 50;
}
       
function mousePressed()
        {
        mousex = mouseX;
        mousey = mouseY;
        qX = mouseX;
        qY = mouseY;
        zX = mouseX;
        zY = mouseY;
        
        }   
        
function keyPressed(){
        if (key == 'w' || key == 'a' || key == 's' || key == 'd' && MovePrologue >=299)
        {
            lLY=400;
            lLX=400;
            rLX=400;
            rLY=400;
            /*
var lLX1 =390;
var lLY1 =450;
var rLX1 =400;
var rLY1 =450;
 //left door
     line(300,450,lLX1,lLY1);
     //right door
     line(rLX1,rLY1,500,450);
*/

            lLY1=525;
            lLX1=400;
            rLX1=400;
            rLY1=525;
            MovePrologue = 1000;
        }
        
        

    
    }
