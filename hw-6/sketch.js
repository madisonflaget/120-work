//declare variables for square
var rect_width;
var rect_height;

// declare the contraints to be used with the positon of the rectangle
var rect_pos_x_con = width - 20;
var rect_pos_y_con = height - 20;

function setup() {
    createCanvas( windowWidth, 600);
    background("gray");
}

function draw() {

    // declare that the position of the rect will be randomly generated within the contraint then rounded
    var rect_pos_x = round(random( 0, rect_pos_x_con));
    var rect_pos_y = round(random( 0, rect_pos_y_con));

    // draw rect
    noStroke();
    rectMode(CENTER);
    rect();

}
