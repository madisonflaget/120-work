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

// introduce variables that chance in relation to
var meter_y = 475;


function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 1000, 600 );
}

function draw() {
    background(200);
    var green_value = 200 -mouseY/3;

    //---------------------------------------------------
    //*** ANGRY FACE ***
    // --------------------------------------------------
    push();
        translate(650,300);
        // set up to scale size in relation to mouseY and canvas height
        scale( mouseY/height * 4);

        //*** OUTLINE OF HEAD ***
        noStroke();
        fill(color(255, green_value, 0));
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

        // make meter outline
        rectMode(CORNERS);
        stroke(10);
        noFill();
        rect(150, 100, 200, 500);

        //make ball @ bottom of meter
        fill(color(255, green_value, 0));
        ellipse(175, 520, 80);

        // meter fill level
        rectMode(CORNERS);
        noStroke();
        fill(color(255, green_value, 0));
        rect(150, meter_y, 200, 500);

    pop();


    // -----------------------------------------------------------
    //*** TEXT ELEMENTS ***
    //------------------------------------------------------------

    push();

        // TODO: fix frameRate adjustment
        frameRate(mouseY/20 + 1);
        var fr = frameRate();

        textSize(32);
        fill('black');
        text("Frustration Meter", 50, 50);
        text("Anger due to the Stupidity of Humanity", 400, 575);
        textSize(40);
        text("Life of a Customer Service Worker", 350, 50);
        // removed for now. Not sure if I like how it looks
        // text("rate of frustraiton increase: " + fr, 400, 100);

    pop();

    // set meter to fill over time
    meter_y = meter_y - 1;


}
