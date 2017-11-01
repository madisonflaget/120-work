// Code inspired by example on Coding Train: 4.2 by Daniel Shiffman
// https://youtu.be/1c1_TMdf8b8?t=3m42s
// https://youtu.be/1c1_TMdf8b8?t=7m14s

var move = 0;
function setup(){
    // subtracted 5 so that the scroll bars don't appear on the edges of the screen
    createCanvas ( windowWidth-5, windowHeight-5);
}

function draw(){
    background(0);
    strokeWeight(1);
    stroke(100);

    //** Background grid
    for ( grid_x=0; grid_x < width; grid_x+=50 ){
        for ( grid_y=25; grid_y < height; grid_y+=50 ){
            // for function for vertical lines
            line ( grid_x, grid_y, grid_x, height );
            // for function for horizontal lines
            line ( grid_x, grid_y, width, grid_y );
        }
    }

    stroke(255);
    strokeWeight(4);

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

    // moves dots in increments of 1px per frame
    move += 1;
}
