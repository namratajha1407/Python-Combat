var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var coin_img = document.getElementById('coin');

var cHeight = canvas.height;
var cWidth = canvas.width;

var grass = document.getElementById('grass');
var water = document.getElementById('water');

var xTiles = Math.floor(Math.random()*(3))*5 + 10; //can be 10,15 or 20
var yTiles = xTiles;

function tile(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.allowed = true;

    this.draw = function(){
        context.beginPath();
        context.drawImage(this.color, this.x*this.width, this.y*this.height, this.width, this.height);
        context.closePath();
    }

    this.not_allowed = function(){
        if(this.allowed){
            return false;
        }
        return true;
    }
}

var Width = cWidth/xTiles;
var Height = cHeight/yTiles;

b = Math.floor(Math.random()*(yTiles));

p=1;
q=b;

var tiles = new Array(xTiles);
for (let i = 0; i < xTiles; i++) {
    tiles[i] = new Array(yTiles);
    for (let j = 0; j < yTiles; j++) {
        if(i!=p){
            tiles[i][j] = new tile(i, j, Width, Height, grass);
        }
        else{
            tiles[i][j] = new tile(i, j, Width, Height, water);
            if(j!=q){
                tiles[i][j].allowed = false;
            }
        }
        tiles[i][j].draw();
    }
}

document.getElementById("output").innerText = "This is a " + xTiles + "*" + yTiles + " maze"

success = function(){
    var game = document.getElementById("game_area");
    game.style.opacity = 0.5;
    //show "Well done! Next Level" button, which loads the next page
    var success = document.getElementById("Success");
    success.style.display = "block";
    success.style.opacity = 1;
}

fail = function(){
    var game = document.getElementById("game_area");
    game.style.opacity = 0.5;
    //show "Try Again!" button, which reloads the page
    var fail = document.getElementById("Fail");
    fail.style.display = "block";
    fail.style.opacity = 1;
}

document.getElementById("next").onclick = function(){
    location.href = "index5.html"
};

document.getElementById("sretry").onclick = function(){
    location.reload()
};

document.getElementById("fretry").onclick = function(){
    location.reload()
};