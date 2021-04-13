var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(87.5,580,175,30);
    block1.shapeColor = "blue";
    
    block2 = createSprite(287.5,580,175,30);
    block2.shapeColor = "red";

    block3 = createSprite(487.5,580,175,30);
    block3.shapeColor = "green";

    block4 = createSprite(687.5,580,175,30);
    block4.shapeColor = "yellow";
    // create block2,block3 and block4 using createSprite

   
    // created ball sprite with random x axis   
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    
    ball.bounceOff(edges);
    //  write bounceoff statement to bounce the ball from the edges
   

    //if condition to play the music and change the colour of the ball according to the box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        music.play();
    }

    // write the if condition same as above for block2 and ball

    // write the if condition same as above for block3 and ball



    // Stopped the ball and music if it is touching the block4 
    if(ball.isTouching(block4)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    drawSprites();
}