var canvas = document.getElementById('myCanvas'); ///fetches canvas
var context = canvas.getContext('2d');
var coin_img = document.getElementById('coin'); ///fetches coin image object

var cHeight = canvas.height; ///height of canvas
var cWidth = canvas.width; ///width of canvas

var xTiles = 3; ///number of tiles in x direction 
var yTiles = 3; ///number of tiles in y direction

var grass = document.getElementById('grass'); ///fetches grass image object
var water = document.getElementById('water'); ///fetches water image object

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
    this.is_coin = false;

    this.draw = function(){ ///draws tiles on canvas
        context.beginPath();
        context.drawImage(this.color, this.x*this.width, this.y*this.height, this.width, this.height);
        context.closePath();
    }

    this.coin_f_to_t = function(){ ///checks if coin is already present on the tile or not
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
 * @param {Number} x x coordinate of the position of the coin
 * @param {Number} y y coordinate of the position of the coin
 * @param {Number} tile_width width of the tile
 * @param {Number} tile_height height of the tile
 */
function coin(x, y, tile_width, tile_height){
    this.x = x;
    this.y = y;
    this.height = tile_height/3;
    this.width = tile_width/3;

    this.draw = function(){ ///draws coin on the tile
        context.beginPath()
        context.drawImage(coin_img, this.x*tile_width + tile_width/3, this.y*tile_height + tile_height/3, this.width, this.height);
        context.closePath()
    }
}

var n_coins = 3;
let k = 0;

/**
 * creates arena and coins at random positions
 */
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
    location.href = "index2.html"
};

///re loads the same level on success of current level
document.getElementById("sretry").onclick = function(){
    location.reload()
};

///reloads the same level on failure of current level
document.getElementById("fretry").onclick = function(){
    location.reload()
};


