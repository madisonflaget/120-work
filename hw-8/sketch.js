// Code inspired by example on Coding Train: 4.2 by Daniel Shiffman
// https://youtu.be/1c1_TMdf8b8?t=3m42s
// https://youtu.be/1c1_TMdf8b8?t=7m14s

var move = 0;
function setup(){
    createCanvas ( windowWidth, windowHeight );
}

function draw(){
    background(0);
    strokeWeight(4);
    stroke(255);

    //** MAGENTA dots that move right
    for (var y=50; y <= height; y += 100) {
            for(var x=0; x <= width; x += 50) {
                fill('magenta');
                ellipse( x + move, y, 25, 25);
            }
    }

    //** TEAL dots that move left
    for (var y=100; y <= height; y += 100) {
            for(var x=0; x <= width; x += 50) {
                fill('teal');
                ellipse( x - move, y, 25, 25);
            }
    }

    move += 1;
}
