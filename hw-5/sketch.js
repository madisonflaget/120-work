// initial variable. Define face size.
var face_size = 100;

// all other variables are determined in
// relation to the face_size variable.
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

var meter_y = 400;

function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 1000, 600 );
}

function draw() {
    background('gray');

    // FIXME: am I defining these right?
    // define local variables, the ones we want to update each frame
    // var fr = frameRate();
    // var target_fr = mousey * .01;
    // fr( target_fr );

    //---------------------------------------------------
    //*** ANGRY FACE ***
    // --------------------------------------------------
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


    // -----------------------------------------------------------
    //*** FRUSTRATION METER ***
    //------------------------------------------------------------
    push();
        // set 0,0 for meter to bottom left corner
        // translate(0,600);
        // rotate(radians(180));

        // make meter outline
        rectMode(CORNERS);
        stroke(10);
        noFill();
        rect(150, 100, 200, 500);

        //make ball @ bottom of meter
        fill('red');
        ellipse(175, 520, 80);

        // meter fill level
        rectMode(CORNERS);
        noStroke();
        fill("red");
        rect(150, meter_y, 200, 500);

    pop();


    // -----------------------------------------------------------
    //*** TEXT ELEMENTS ***
    //------------------------------------------------------------

    push();

        // TODO: fix frameRate adjustment
        var fr = frameRate();

        textSize(32);
        fill('black');
        text("Frustration Meter", 50, 50);
        text("Anger from Stupidity =", 400, 50);
        text("rate of frustraiton increase: " + fr, 400, 100);

    pop();

    // set meter to fill over time
    meter_y = meter_y - 2;

    //TODO: fix size variation of face
    // var face_size = mousey + 100;
}
