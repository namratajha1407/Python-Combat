var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var coin_img = document.getElementById('coin');

var cHeight = canvas.height;
var cWidth = canvas.width;

var r = Math.floor(Math.random()*(2))*5 + 10;

var xTiles = r;
var yTiles = r;

function tile(x, y, width, height, color, is_coin){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.is_coin = false;

    this.draw = function(){
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x*this.width, this.y*this.height, this.width, this.height, false);
        context.fill();
        context.closePath();
    }

    this.give_color = function(){
        return this.color;
    }
}


var Width = cWidth/xTiles;
var Height = cHeight/yTiles;

var tiles = new Array(xTiles);
for (let i = 0; i < xTiles; i++) {
    tiles[i] = new Array(yTiles);
    for (let j = 0; j < yTiles; j++) {
        if (i==j){
            tiles[i][j] = new tile(i, j, Width, Height, "blue");
        }
        else if ((i-j) == 1){
            tiles[i][j] = new tile(i, j, Width, Height, "red");
        }
        else{
            tiles[i][j] = new tile(i, j, Width, Height, "black");
        }
        tiles[i][j].draw();
    }
}

success = function(){
    var game = document.getElementById("game_area");
    game.style.opacity = 0.5;
    //show "Well done! Next Level" button, which loads the next page
    var success_button = document.getElementById("success");
    success_button.style.display = "block";
}

fail = function(){
    var game = document.getElementById("game_area");
    game.style.opacity = 0.5;
    //show "Try Again!" button, which reloads the page
    var fail_button = document.getElementById("fail");
    fail_button.style.display = "block";
}

document.getElementById("success").onclick = function(){
    location.href = "index3.html"
};

document.getElementById("fail").onclick = function(){
    location.reload()
};

