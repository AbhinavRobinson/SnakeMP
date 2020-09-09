const gameScreen = document.getElementById('gameScreen');

let canvas,ctx;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 600;
}