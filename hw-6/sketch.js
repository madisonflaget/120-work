// declare object box
var box = {};

// declare box size, position, and color qualities and random quality for color
box.width = 50;
box.height = 50;
box.pos_x = width / 2;
box.pos_y = height*0.5;
box.col_g = 255;
box.col_b = 255;

function setup() {
    createCanvas( windowWidth - 10, windowHeight - 10);
    background("gray");
}

function draw() {

    //*** scrapped this idea because I couldn't fully understand what it was doing.
    // //*** code for this section borrowed and adjusted from code at https://p5js.org/reference/#/p5/applyMatrix
    //     rectMode(CENTER);
    //     // modulo sets step to increase by 1 every 120 frames
    //     var step = frameCount % 120;
    //     // maps step to expect values between 0-120 and sets max range from 0-TWO_PI
    //     var angle = map(step, 0, 120, 0, TWO_PI);
    //     var cos_a = cos(angle);
    //     var sin_a = sin(angle);
    //     translate(50, 50);
    //     // applies a matrix, which can translate, scale, shear, and rotate all at once
    //     applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
    // //*** END

    var eraser_x = map( mouseX, 0, width, width*0.25, width*0.75);
    var eraser_y = map( mouseY, 0, height, height*0.25, height*0.75);

    // draw my box and call it's qualities
    noStroke();
    // rectMode(CENTER);
    fill(0, box.col_g, box.col_b );
    rect( box.pos_x, box.pos_y, box.width, box.height);
    fill("white");
    ellipse(eraser_x, eraser_y, 100);



    // the position of the rect will be randomly generated within the values, then rounded
    box.pos_x = random( 0, width - 100);
    box.pos_y = random( 0, height - 100);

    // the size of the rect will be randomly generated within the values, then rounded
    box.width = round(random( 10, 100));
    box.height = round(random( 10, 100));

    //the green and blue values will be randomly generated and contrained
    // box.col_ran =
    box.col_g = floor(random(256));
    box.col_b = round(random(255));
}
