// declare object box
var box = {};

// declare variable for rectangle size
box.width = 50;
box.height = 50;

// declare rectangle positon variable.
box.pos_x = width/2;
box.pos_y = height/2;

function setup() {
    createCanvas( windowWidth, windowHeight);
    background("gray");
}

function draw() {

    // draw rect
    noStroke();
    rectMode(CENTER);
    fill('blue');
    rect( box.pos_x, box.pos_y, box.width, box.height);

    // the position of the rect will be randomly generated within the values, then rounded
    box.pos_x = random( 0, width);
    box.pos_y = random( 0, height);

    // the size of the rect will be randomly generated within the values, then rounded
    box.width = round(random( 10, 100));
    box.height = round(random( 10, 100));
}
