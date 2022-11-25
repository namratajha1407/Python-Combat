var canvas = document.getElementById('myCanvas'); ///fetches canvas
var context = canvas.getContext('2d');
var friend_img = document.getElementById('friend');///fetches friend image object

var cHeight = canvas.height;
var cWidth = canvas.width;

var grass = document.getElementById('grass'); ///fetches grass image object
var water = document.getElementById('water'); ///fetches water image object

var xTiles = 4; ///initialises number of tiles in x direction
var yTiles = 4; ///initialises number of files in y direction

/**
 * class for creating tiles
 * @param {Number} x row of the tile
 * @param {Number} y column of the tile
 * @param {Number} width width of the tile
 * @param {Number} height height of the tile
 * @param {Number} color color of the tile
 */
function tile(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.allowed = true;
    this.friend = false;
    this.name = "";

    this.draw = function(){ ///draws canvas
        context.beginPath();
        context.drawImage(this.color, this.x*this.width, this.y*this.height, this.width, this.height);
        context.closePath();
    }

    this.not_allowed = function(){ ///differentiates the area in which player can move from forbidden area
        if(this.allowed){
            return false;
        }
        return true;
    }

    this.is_friend = function(){ ///player's friend
        return this.friend; 
    }
}

var Width = cWidth/xTiles; ///width of one tile
var Height = cHeight/yTiles; ///height of one tile

var tiles = new Array(xTiles);
for (let i = 0; i < xTiles; i++) {
    tiles[i] = new Array(yTiles);
    for (let j = 0; j < yTiles; j++) {
        tiles[i][j] = new tile(i, j, Width, Height, grass);
        tiles[i][j].draw();
    }
}

/**
 * 
 * @param {Number} x row of friend on arena
 * @param {Number} y column of friend on arena
 * @param {Number} tile_width width of tile
 * @param {Number} tile_height height of tile
 */
function friend(x, y, tile_width, tile_height){
    this.x = x;
    this.y = y;
    this.height = tile_height/2;
    this.width = tile_width/2;

    this.draw = function(){ ///draws friend image on canvas
        context.beginPath()
        context.drawImage(friend_img, this.x*tile_width + tile_width/4, this.y*tile_height + tile_height/4, this.width, this.height);
        context.closePath()
    }
}

var n = 3;
let k = 0;

/**
 * function to create arena, positions of the friends are randomised 
 */
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

///logger for displaying SUCCESS message
success = function(){
    var game = document.getElementById("game_area");
    game.style.opacity = 0.5;
    //show "Well done! Next Level" button, which loads the next page
    var success = document.getElementById("Success");
    success.style.display = "block";
    success.style.opacity = 1;
}

///Logger for displaying FAILURE message
fail = function(){
    var game = document.getElementById("game_area");
    game.style.opacity = 0.5;
    //show "Try Again!" button, which reloads the page
    var fail = document.getElementById("Fail");
    fail.style.display = "block";
    fail.style.opacity = 1;
}

///loads next level on screen
document.getElementById("next").onclick = function(){
    location.href = "index3.html"
};

///re loads the same level on success of current level
document.getElementById("sretry").onclick = function(){
    location.reload()
};

///reloads the same level on failure of current level
document.getElementById("fretry").onclick = function(){
    location.reload()
};
