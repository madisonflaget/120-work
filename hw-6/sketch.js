

// declare variable for rectangle size
var rect_width = 50;
var rect_height = 50;

// declare rectangle positon variable.
var rect_pos_x;
var rect_pos_y;

function setup() {
    createCanvas( windowWidth, windowHeight);
    background("gray");
}

function draw() {

    // declare that the position of the rect will be randomly generated within the values, then rounded
    // rect_pos_x = round(random( 0, rect_pos_x_con));
    // rect_pos_y = round(random( 0, rect_pos_y_con));

    // declare the the size of the rect will be randomly generated within the values, then rounded
    // rect_width = round(random( 10, 100));
    // rect_height = round(random( 10, 100));

    // draw rect
    noStroke();
    rectMode(CENTER);
    fill('blue');
    rect( width/2, height/2, 100, 100);
}
