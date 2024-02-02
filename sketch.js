let tileSize = 50;
let position;
let currentTileX = 0;
let currentTileY = 0;
let Tiles = [];

function setup() {
  createCanvas(400, 400);
  position = createVector(0,0);
  Tiles[0] = new Tile(0,0,0);
}

function draw() {
  background(220);
  currentTileX = floor(position.x/tileSize);
  currentTileY = floor(position.y/tileSize);
  let center = Tiles.find(t => (t.posx == currentTileX)&&(t.posy == currentTileY));
  if(center == undefined){
    Tiles[Tiles.length] = new Tile(currentTileX, currentTileY, Tiles.length);
    center = Tiles[Tiles.length-1]
    print(Tiles.length)
  }
  center.draw(position.x,position.y);
}

function mouseDragged(){
  position.x += pmouseX - mouseX;
  position.y += pmouseY - mouseY;
  return false;
}

class Tile{
  constructor(posx,posy,value){
    this.posy = posy;
    this.posx = posx;
    this.value = value;
  }
  
  draw(x,y){
    rect((this.posx*tileSize+width/2)-x,(this.posy*tileSize+height/2)-y,tileSize,tileSize)
    text(this.value,)
  }
}