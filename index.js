/*
 * @design Color Styles
 */
const BG_COLOR = '#231f20';
const SNAKE_COLOR = "#c2c2c2";
const FOOD_COLOR = "#e66916";

/*
 * @variable Get gameScreen Element from HTML
 */
 const gameScreen = document.getElementById('gameScreen');


/* 
 * @function Initialization: creates canvas 600x600
 */
let canvas,ctx;
function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 600;
    
    // Fills Canvas BG with Black-ish color
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Activates when key pressed down, calls keydown function
    document.addEventListener('keydown', keydown);
}
/* @EOF : Init() */


/* 
 * @function Keydown Event: Returns keyCode of pressed key in log
 */
function keydown(e) {
    console.log(e.keyCode);
}
/* EOF : keydown() */

/*
 * @call Initializing Canvas
 */
init()