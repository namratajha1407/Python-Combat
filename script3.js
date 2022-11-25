var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var villain_img = document.getElementById('villain1');

var cHeight = canvas.height;
var cWidth = canvas.width;

var grass = document.getElementById('grass');
var water = document.getElementById('water');

var xTiles = 4;
var yTiles = 4;

function tile(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.allowed = true;
    this.enemy = false;
    this.friend = false;

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

    this.is_enemy = function(){
        return this.enemy;
    }

    this.is_friend = function(){
        return this.friend; 
    }
}

var Width = cWidth/xTiles;
var Height = cHeight/yTiles;

a = Math.floor(Math.random()*(2))+1; // 1 or 2
b = Math.floor(Math.random()*(4));

p=1;
q=b;

var tiles = new Array(xTiles);
for (let i = 0; i < xTiles; i++) {
    tiles[i] = new Array(yTiles);
    for (let j = 0; j < yTiles; j++) {
        tiles[i][j] = new tile(i, j, Width, Height, grass);
        tiles[i][j].draw();
    }
}

function villain(x, y, tile_width, tile_height){
    this.x = x;
    this.y = y;
    this.height = tile_height/2;
    this.width = tile_width/2;

    this.draw = function(){
        context.beginPath()
        context.drawImage(villain_img, this.x*tile_width + tile_width/4, this.y*tile_height + tile_height/4, this.width, this.height);
        context.closePath()
    }
}

var n = 3;
let k = 0;
var n_villain = 0;

createArena = function(Tile_Height, Tile_Width){
    for(let k=0; k<n; k++){
        var j = k+1;
        var i = Math.floor(Math.random()*(3))+1;
        if(i!=xTiles-1 || j!=yTiles-1){   
            v = new villain(i,j,Tile_Width, Tile_Height);
            v.draw();
            tiles[i][j].allowed = false;
            if((i+j) % 2==0){
                // tiles[i][j].enemy = true;
                tiles[i][j].friend = true;
                n_villain++;
            }
            else{
                tiles[i][j].friend = true;
                // tiles[i][j].enemy = true;
            }
        }
        else{
            k--;
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
    location.href = "index4.html"
};

document.getElementById("sretry").onclick = function(){
    location.reload()
};

document.getElementById("fretry").onclick = function(){
    location.reload()
};