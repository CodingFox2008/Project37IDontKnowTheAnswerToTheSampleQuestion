var canvas;
var gameState = 0;
var contestantCount, database;
var quiz, question, contestant;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");

  drawSprites();
}
