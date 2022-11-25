var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var coin_img = document.getElementById('coin');

var cHeight = canvas.height;
var cWidth = canvas.width;

var xTiles = 3;
var yTiles = 3;

var grass = document.getElementById('grass');
var water = document.getElementById('water');

function tile(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.is_coin = false;

    this.draw = function(){
        context.beginPath();
        context.drawImage(this.color, this.x*this.width, this.y*this.height, this.width, this.height);
        context.closePath();
    }

    this.coin_f_to_t = function(){
        if(this.is_coin==false){
            this.is_coin = true;
            return true;
        }
        return false;
    }
    
    this.coin = function(){
        return this.is_coin;
    }

    this.coin_t_to_f = function(){
        this.is_coin = false;
    }
}


var Width = cWidth/xTiles;
var Height = cHeight/yTiles;

var tiles = new Array(xTiles);
for (let i = 0; i < xTiles; i++) {
    tiles[i] = new Array(yTiles);
    for (let j = 0; j < yTiles; j++) {
        tiles[i][j] = new tile(i, j, Width, Height, grass);
        tiles[i][j].draw();
    }
}

function coin(x, y, tile_width, tile_height){
    this.x = x;
    this.y = y;
    this.height = tile_height/3;
    this.width = tile_width/3;

    this.draw = function(){
        context.beginPath()
        context.drawImage(coin_img, this.x*tile_width + tile_width/3, this.y*tile_height + tile_height/3, this.width, this.height);
        context.closePath()
    }
}

var n_coins = 3;
let k = 0;

createArena = function(Tile_Height, Tile_Width){
    while(k<n_coins){
        var p = Math.floor(Math.random()*(xTiles*yTiles));
        var i = Math.floor(p/xTiles);
        var j = p%yTiles;
        if(i!=0 && j!=0){
            updated = tiles[i][j].coin_f_to_t();
            if(updated){
                c = new coin(i,j,Tile_Width, Tile_Height);
                c.draw();
                k++;
            }
        }
    }
}

createArena(Height, Width);


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
    location.href = "index2.html"
};

document.getElementById("sretry").onclick = function(){
    location.reload()
};

document.getElementById("fretry").onclick = function(){
    location.reload()
};


