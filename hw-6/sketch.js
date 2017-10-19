// declare object box
var box = {};

// declare box size, position, and color qualities and random quality for color
box.width = 50;
box.height = 50;
box.pos_x = width/2;
box.pos_y = height/2;
box.col_g = 255;
box.col_b = 255;
box.col_ran;

function setup() {
    createCanvas( windowWidth, windowHeight);
    background("gray");
}

function draw() {

    // draw rect
    noStroke();
    rectMode(CENTER);
    fill(0, box.col_g, box.col_b );
    rect( box.pos_x, box.pos_y, box.width, box.height);


    // the position of the rect will be randomly generated within the values, then rounded
    box.pos_x = random( 0, width);
    box.pos_y = random( 0, height);

    // the size of the rect will be randomly generated within the values, then rounded
    box.width = round(random( 10, 100));
    box.height = round(random( 10, 100));

    //the green and blue values will be randomly generated and contrained
    // box.col_ran =
    box.col_g = floor(random(256));
    box.col_b = floor(random(256));
}
