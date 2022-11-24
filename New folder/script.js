var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var cHeight = canvas.height;
var cWidth = canvas.width;

var xTiles = 5;
var yTiles = 5;

// console.log(xTiles);

function tile(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;

    this.draw = function(){
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x*this.width, this.y*this.height, this.width, this.height);
        context.fill();
        context.closePath();
    }
}


var Width = cWidth/xTiles;
var Height = cHeight/yTiles;

var tiles = new Array(xTiles);
for (let i = 0; i < xTiles; i++) {
    tiles[i] = new Array(yTiles);
    for (let j = 0; j < yTiles; j++) {
        if ((i+j)%2){
            tiles[i][j] = new tile(i, j, Width, Height, "red");
        }
        else{
            tiles[i][j] = new tile(i, j, Width, Height, "blue");
        }
        tiles[i][j].draw();
    }
}