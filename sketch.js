//Create variables here
var dogImage, dog ;
var dogHappy, database , food, foodStock ;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.15; 
  food = createSprite(50,50,20,20);
  foodStock= database.ref("Food");
  foodStock.on("value", readStock);
  
}


function draw() {  
background(46,139,87);
fill ("yellow");
text("Note: Press UP_ARROW Key To Feed Drago Milk", 100, 100);
fill ("red");
text("Food Stock remaining : " +food, 180 , 200)
if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(dogHappy)
}  
drawSprites();
  //add styles here

}

function readStock(data){
food = data.val();


}
function writeStock(x){
 if (x<= 0){
   x = 0 ; 

 }
 else {
   x = x-1
 }
 database.ref('/').update({
   Food:x
 })
}


