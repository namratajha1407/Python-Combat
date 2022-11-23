document.getElementById('code').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);

        // put caret at right position again
        this.selectionStart =
        this.selectionEnd = start + 1;
    }
    if (e.key == 'F5') {
        e.preventDefault();
        document.getElementById('run_button').click();
    }
});

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var img = document.getElementById("hero");

cHeight = canvas.height;
cWidth = canvas.width;


function tile(x, y, width, height, walls, color){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.walls = walls;
    this.color = color;

    this.drawwalls = function(){
        if(walls[0]){
            context.beginPath();
            context.moveTo(this.x*this.width, this.y*this.height);
            context.closePath();
        }
    }

    this.draw = function(){
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x*this.width, this.y*this.height, this.width, this.height);
        context.fill();
        context.closePath();
    }
}

var xTiles = 10;
var yTiles = 5;

Width = cWidth/xTiles;
Height = cHeight/yTiles;

imgWidth = Width/2
imgHeight = Height/1.5
centerX = Width/2
centerY = Height/2

var tiles = new Array(xTiles);
for (let i = 0; i < xTiles; i++) {
    tiles[i] = new Array(yTiles);
    for (let j = 0; j < yTiles; j++) {
        if ((i+j)%2){
            tiles[i][j] = new tile(i, j, Width, Height, [0, 0, 0, 0], "red");
        }
        else{
            tiles[i][j] = new tile(i, j, Width, Height, [0, 0, 0, 0], "blue");
        }
        tiles[i][j].draw();
    }
}

$(function() {
    $("#code").autocomplete({
        source: ["moveRight()", "moveLeft()", "moveDown()", "moveUp()"]
    });
});