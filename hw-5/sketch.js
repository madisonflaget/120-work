// initial variable. Define face size.
var face_size = 400;

// all other variables are determined in
// relation to the smileySize variable.
var eye_pos_x = face_size * 0.2;
var eye_pos_y = face_size * -0.07;
var eye_size = face_size * 0.2;
var brow_pos_x = face_size * 0.2;
var brow_pos_y = face_size * 0.1;
var brow_width = eye_size * 1.2;
var brow_thick = eye_size * 0.2;
var face_pos_y = face_size * 0.35;
var mouth_width = face_size * 0.50;
var mouth_height = face_size * 0.50;

function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 1000, 600 );
}

function draw() {
    background('gray');

    //*** ANGRY FACE ***
    push();
        translate(650,300);

        //*** OUTLINE OF HEAD ***
        noStroke();
        fill('rgb(255,100,0)');
        ellipse( 0, 0, face_size );

        //*** EYES ***
        noStroke();
        fill('black');
        ellipse(-eye_pos_x, eye_pos_y, eye_size);
        ellipse( eye_pos_x, eye_pos_y, eye_size);

        //*** LEFT EYE BROW ***
        push();
            rectMode(CENTER);
            translate(0, face_size*-0.25);
            rotate(radians(20));
            // translate(brow_width*0.25, brow_width*-0.25);
            noStroke();
            fill('black');
            rect(-brow_pos_x, brow_pos_y, brow_width, brow_thick);
        pop();

        //*** RIGHT EYE BROW ***
        push();
            rectMode(CENTER);
            translate(0, face_size*-0.25);
            rotate(radians(-20));
            // translate(brow_width*0.25, brow_width*-0.25);
            noStroke();
            fill('black');
            rect(brow_pos_x, brow_pos_y, brow_width, brow_thick);
        pop();

        //*** MOUTH ***
        noStroke();
        fill('black');
        arc( 0, face_pos_y, mouth_width, mouth_height, PI, TWO_PI );

    pop();

    //*** FRUSTRATION METER ***
    push();

    pop();
}
