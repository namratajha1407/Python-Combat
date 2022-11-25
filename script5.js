var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var friend_img = document.getElementById('friend');

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
    this.friend = false;
    this.name = "";

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

    this.is_friend = function(){
        return this.friend; 
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

function friend(x, y, tile_width, tile_height){
    this.x = x;
    this.y = y;
    this.height = tile_height/2;
    this.width = tile_width/2;

    this.draw = function(){
        context.beginPath()
        context.drawImage(friend_img, this.x*tile_width + tile_width/4, this.y*tile_height + tile_height/4, this.width, this.height);
        context.closePath()
    }
}

var n = 3;
let k = 0;

createArena = function(Tile_Height, Tile_Width){
    for(let k=0; k<n; k++){
        var j = k+1;
        var i = Math.floor(Math.random()*(3))+1;
        v = new friend(i,j,Tile_Width, Tile_Height);
        v.draw();
        tiles[i][j].allowed = false;
        tiles[i][j].friend = true;
        if(i==0) tiles[i][j].name = "Aditya Raj"
        if(i==1) tiles[i][j].name = "Anshika Raman"
        if(i==2) tiles[i][j].name = "Namrata Jha"
    }
}
createArena(Height, Width);

document.getElementById("output").innerText = "Your friends are: "

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
    location.href = "index3.html"
};

document.getElementById("sretry").onclick = function(){
    location.reload()
};

document.getElementById("fretry").onclick = function(){
    location.reload()
};