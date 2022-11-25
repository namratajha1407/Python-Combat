var canvas = document.getElementById('myCanvas'); ///fetches canvas
var context = canvas.getContext('2d');

var cHeight = canvas.height; ///height of canvas
var cWidth = canvas.width; ///width of canvas

var grass = document.getElementById('grass');
var water = document.getElementById('water');

var xTiles = 3; ///initialising the number of tiles in x direction
var yTiles = 3; ///initialising the number of tiles in y direction

// console.log(xTiles);
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
    /**
     * draws tile on the canvas
     */
    this.draw = function(){
        context.beginPath();
        context.drawImage(this.color, this.x*this.width, this.y*this.height, this.width, this.height);
        context.closePath();
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
 * Logger for displaying SUCCESS
 */
success = function(){
    var game = document.getElementById("game_area");
    game.style.opacity = 0.5;
    //show "Well done! Next Level" button, which loads the next page
    var success = document.getElementById("Success");
    success.style.display = "block";
    success.style.opacity = 1;
}

/**
 * Logger for displaying FAILURE
 */
fail = function(){
    var game = document.getElementById("game_area");
    game.style.opacity = 0.5;
    //show "Try Again!" button, which reloads the page
    var fail = document.getElementById("Fail");
    fail.style.display = "block";
    fail.style.opacity = 1;
}

///moves to next level
document.getElementById("next").onclick = function(){
    location.href = "index1.html";
};

///reloads the level on succes
document.getElementById("sretry").onclick = function(){
    location.reload();
};

///reloads the level on failure
document.getElementById("fretry").onclick = function(){
    location.reload();
};
