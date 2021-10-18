var balloon, balloon2, balloon3;
var balloonImg, balloon2Img, balloon3Img;
var bgi, bgiImg;
var bird, birdImg;
var lPost, lPostImg;
var obstacleGroup;
var obstaclesBottomGroup;
var ObstaclesBottom;

function preload(){
bgiImg = loadImage("pics/bgi.jpg");
balloonImg = loadImage("pics/hotairballoon1.png");
birdImg= loadImage("pics/birds.png");
lPostImg = loadImage("pics/lamp-posts.png");

}

function setup(){
createCanvas(1500, 700);
//bgi = createSprite(750,350);
//bgi.addImage("bgi", bgiImg);
//bgi.scale = 2;

balloon = createSprite(250,350,150,150);
balloon.addImage("hotairBalloon",balloonImg);
balloon.scale = 0.5;
obstaclesBottomGroup = new Group()
obstacleGroup = new Group()
}

function draw(){
    background(0);
    image(bgiImg, - displayWidth, 0, displayWidth*5, displayHeight)
balloon.x = camera.x;

// balloon should go up when "space" key is pressed
    if(keyDown("space")){
        balloon.velocityY = -6;
    }
// moving the balloon towards the right
if(keyDown("right")){
    //balloon.x = balloon.x + 5;
    camera.x = camera.x + 10;
}
// adding gravity
balloon.velocityY = balloon.velocityY + 2;

ObstaclesTop()
ObstacleBottom()

drawSprites();
}



function ObstaclesTop(){
    
        obstacleTop = createSprite(1500,50,40,50);
        obstacleTop.addImage(birdImg);
        obstacleTop.y = Math.round(random(20, 200))
        obstacleTop.x += 200;
        //obstacleTop.velocityX = -3;
        obstacleTop.scale = 0.3;
        //obstacleTop.lifetime = 500;
        obstacleGroup.add(obstacleTop);
    

}

function ObstacleBottom(){
    if(World.frameCount % 230 === 0) {
        ObstaclesBottom = createSprite(1500,650,40,50);
        ObstaclesBottom.addImage(lPostImg);
        //ObstaclesBottom.y = Math.round(random(20, 200))
        //ObstaclesBottom.velocityX = -3;
        ObstaclesBottom.scale = 0.2;
        ObstaclesBottom.lifetime = 500;
        obstaclesBottomGroup.add(ObstaclesBottom);
    }

}