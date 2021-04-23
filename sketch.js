var canvas;
var music;
var box1,box2,box3,box4,box5;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(30,500,100,10)
    box1.shapeColor="green";
    box2=createSprite(140,500,100,10)
    box2.shapeColor="blue";
    box3=createSprite(250,500,100,10)
    box3.shapeColor="black";
    box4=createSprite(360,500,100,10)
    box4.shapeColor="pink";
    ball=createSprite(150,180,20,20);
    




    //create box sprite and give velocity
    ball.velocityY=2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    //add condition to check if box touching surface and make it box
   
   if (box1.isTouching(ball) && ball.bounceOff(box1)){
       ball.shapeColor=box1.shapeColor;
   }
   if (box2.isTouching(ball) && ball.bounceOff(box2)){
    ball.shapeColor=box2.shapeColor;
    }
    if (box3.isTouching(ball) && ball.bounceOff(box3)){
    ball.shapeColor=box3.shapeColor;
    }
    if (box4.isTouching(ball) && ball.bounceOff(box4)){
    ball.shapeColor=box4.shapeColor;
    }
    if(keyDown("left")){
        ball.velocityX=-2;
        ball.velocityY=0;
      }
      if(keyDown("right")){
        ball.velocityX=2;
        ball.velocityY=0;
      }
      if(keyDown("up")){
        ball.velocityX=0;
        ball.velocityY=-2;
      }
      if(keyDown("down")){
        ball.velocityX=0;
        ball.velocityY=2;
      }
      
    
    drawSprites();
}
