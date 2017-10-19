// declare object box
var box = {};

// declare box size, position, and color qualities and random quality for color
box.width = 50;
box.height = 50;
box.pos_x = width / 2;
box.pos_y = height*0.5;
box.col_g = 255;

function setup() {
    createCanvas( windowWidth - 10, windowHeight - 10);
    background(230);
    // frameRate(30);
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

    var eraser = {}

    eraser.ran_x = random(0, width)
    eraser.ran_y = random(0, height)
    // bind eraser to smaller box within canvas
    eraser.x = map( eraser.ran_x, 0, width, width*0.25, width*0.75);
    eraser.y = map( eraser.ran_y, 0, height, height*0.25, height*0.75);
    // modulo overrides randomization to keep eraser.size between 0-49;
    eraser.size = (random(0,100)) % 50;
    eraser.col_b = round(random(255));

    //scrapped because I decide that I didn't like it
    // // draw edge of windsheild
    // rectMode(CENTER);
    // noFill();
    // stroke(50);
    // rect( width/2, height/2, width*0.5, height*0.5);

    // draw my box and call it's qualities. This draws the art over time.
    noStroke();
    fill(0, box.col_g, 0, 100);
    rect( box.pos_x, box.pos_y, box.width, box.height);

    // draw my eraser which is randomly draw over time
    fill( 0, 0, eraser.col_b, 150 );
    ellipse(eraser.x, eraser.y, eraser.size);

    // the position of the rect will be randomly generated within the values, then rounded  to the nearest integer
    box.pos_x = round(random( 0, width - 100));
    box.pos_y = round(random( 0, height - 100));

    // the size of the rect will be randomly generated within the values, then rounded
    box.width = round(random( 10, 100));
    box.height = round(random( 10, 100));

    //the green and blue values will be randomly generated and contrained via floor or round
    // box.col_ran =
    box.col_g = floor(random(256));

}
