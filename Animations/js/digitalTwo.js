var reyeX=400;
var leyeX=200;
var movement;
var movementA;
var mouthlineY =320;
var chin1Y =320;
var chin2Y =380;
var rbrowX =350;
var rbrowY =120;
var rbrowXB =450;
var rbrowYB =100;
var movementC =1;
var nameSize =10;
var movementB;
var A = Math.floor(Math.random()* 200);
var B = Math.floor(Math.random()* 200);
var C = Math.floor(Math.random()* 200);

function setup(){
    createCanvas(600,600);
    movement = floor(random() * 5) + 1;
    movementA = floor(random() * 10) + 1;
    movementB = floor(random() * 1) + 1;
}

function draw(){
    background(76,0,153);

   

    
    //eye r
    strokeWeight(6);
    fill(A,B,C);
    ellipse(400,150,100,30);
    

    //eye l
    ellipse(200,200,100,10);

    //l arm
    quad(190,280,100,400,100,600,200,600);
    //r shoulder
    quad(380,300,330,380,450,415,450,350)
    

    push();
    strokeWeight(8);
    //nose
    line(265,140,265,275);

    //nose underline
    line(265,275,305,275);

    //side lines above lips
    line(280,275,280,300);
    line(290,275,290,300);

    // mind lip point
    point(285,320);

    //lip sides point
    point(320,320);
    point(260,320);

    // v shape of the lips
    line(280,300,285,320);
    line(290,300,285,320);

    //down tilt upperlips
    line(260,320,280,300);
    line(320,320,290,300);

push();
    /*mouth line
    var mouthlineY =320
*/
    line(320,mouthlineY,260,mouthlineY);
    if(mouthlineY >= 350 || mouthlineY <= 315){
        movementA*=-1;
    }
    mouthlineY +=movementA;


pop();

    // bottom lip points
    point(280,345);
    point(290,345);

    // mid bottom lip lines
    //line(280,345,285,320);
    //line(290,345,285,320);

    /*chin
    chin1Y =320
    chin2Y =380
    */
    fill(102,0,51);
    triangle(285,chin1Y,265,chin2Y,320,chin2Y);
    if(chin1Y >=400|| chin1Y<=300){
        movementA*=-1
    }

    chin1Y+=movementA;

    //cheekbones r then l
    triangle(350,180,450,180,333,370);
    triangle(150,220,250,220,256,370);

    //head l point
    point(150,200);

    //head mid point 1
    point(180,90);

    //head mid point 2
    point(250,30);

    //head mid point 3
    point(350,30);

    //head mid point 4
    point(450,100);

    //head r point
   point(450,150);

    //line rp - 4
    line(450,150,450,100);

    //line 4-3
    line(450,100,350,30);

    //line 3-2
    line(350,30,250,30);

    //line 2-1
    line(250,30,180,90);

    //line 1-left
    line(180,90,150,200)

    //r ear point top
    point(475,150);

    //r ear point bottom
    point(475,250);

    //r ear bottom left
    point(415,250);

    //r ear triangle
    triangle(415,250,475,250,475,150);

    //eye to ear closure
    line(450,180,440,164);

    //l ear point top
    point(150,200);

    //l ear point botom
    point(120,200);

    //l ear point bottom right
    point(150,270);

    //l ear triangle
    triangle(150,270,120,200,150,200);

    //r shoulder point 1
    point(380,300);

    //r shoulder point 2
    point(550,400);

    //r shoulder line
    line(380,300,550,400);

    //l shoulder p1
    point(190,280);

    //l shoulder p2
    point(100,400);

    //l shoulder line
    line(100,400,190,280);

    //l arm l line
    line(100,400,100,600);

    //r arm r line
    line(550,400,470,600);

    //l arm r point
    point(200,420);

    //l arm r line
    line(200,420,200,600);

    //r arm l point
    point(450,420);

    //r arm l line
    line(450,420,450,600);

    //hair
    line(150,200,200,0);
    line(210,60,250,0);
    line(250,30,300,0);
    line(300,30,350,0);
    line(350,30,400,0);
    line(400,60,450,0);
    line(450,100,500,0);
    line(450,150,600,0);
    line(475,200,650,0);
    
    pop();

    push();

    //forehead
    strokeWeight(0);
    quad(180,90,250,30,350,30,450,100);
    triangle(160,160,180,90,430,98);
    quad(270,130,350,110,300,270,265,270);
    pop();
// 102
    push();
    fill(102,0,51);
    strokeWeight(0);
    quad(305,130,350,120,305,265,305,140); 
    //triangle(285,320,275,360,310,360);
    quad(550,400,470,600,450,600,450,340);

    // l shoulder
    triangle(190,280,255,380,190,420);

    //neck
    triangle(265,385,320,385,290,600);
    pop();

    push();

    //eyebrow
    fill(102,51,0);
    strokeWeight(12);

    /*rbrow
     var rbrowX =350;
    var rbrowY =120;
    var rbrowXB =450;
    var rbrowYB =100;
    */

    line(rbrowX,rbrowY,rbrowXB,rbrowYB);
    if(rbrowX >= 400||rbrowX<=325||rbrowY>=130||rbrowY<=70||rbrowXB>=500||rbrowXB<=425||rbrowYB>=110||rbrowYB<=50){
        movementC*=-1
    }
    rbrowX += movementC;
    rbrowY += movementC;
    rbrowXB +=movementC;
    rbrowYB +=movementC;
       

    //l
    line(260,140,160,160,);

    pop();

    push();
//iris r var reyeX=400;
//var leyeX=200;
    fill(250,0,250);
    circle(reyeX,150,50);
    circle(reyeX,150,25);
    circle(reyeX,150,5);
    
    if(reyeX >= 450|| reyeX <=350)
    {
    movement*=-1;
    }

    reyeX += movement;
    
    //iris l
    fill(250,0,250);
    circle(leyeX,200,20);
    circle(leyeX,200,10);

    if(leyeX >= 300|| leyeX <= 100)
    {
    movement*=-1;
    }
   
    leyeX += movement;
    pop();

    push();
    textSize(nameSize);
    if(nameSize >=50||nameSize<=2){
        movementB*=-1
    }
    nameSize +=movementB;

    fill(200,0,100);
    // title/name
    text('Dyami Clemente',0,590);
    pop();

}
