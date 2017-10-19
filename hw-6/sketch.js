

// declare variable for rectangle size
var rect_width = 50;
var rect_height = 50;

// declare rectangle positon variable.
var rect_pos_x = width/2;
var rect_pos_y = height/2;

function setup() {
    createCanvas( windowWidth, windowHeight);
    background("gray");
}

function draw() {

    // draw rect
    noStroke();
    rectMode(CENTER);
    fill('blue');
    rect( rect_pos_x, rect_pos_y, rect_width, rect_height);

    // the position of the rect will be randomly generated within the values, then rounded
    rect_pos_x = random( 0, width);
    rect_pos_y = random( 0, height);

    // the size of the rect will be randomly generated within the values, then rounded
    rect_width = round(random( 10, 100));
    rect_height = round(random( 10, 100));
}
