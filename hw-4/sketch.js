function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 600, 600 );
}

function draw() {
    // set the background color
    background( 'grey' );

    // *****************************************************
    // create a sandbox for the entire character
    push();

        // move the entire grid for this character to the center of the canvas
        translate( 300, 300 );


        // ** BODY **********************************
        push();
        // body code goes here
        pop();
        // **END BODY**


        // ** ARMS **********************************
        push();
        // arms code goes here
        pop();
        // **END ARMS**

        // ** LEGS **********************************
        push();
        // legs code goes here
        pop();
        // **END LEGS**


        // ** HEAD **********************************
        push();

        // **SKULL**
        fill('white')
        noStroke()
        ellipse(0,-90,150)
        // **END SKULL**


            // **MOUTH**
            push();
                rectMode(CENTER)
                fill('white')
                rect(0,-30,60,60)
            pop();
            // **END MOUTH**

            // **TEETH**
            push();
                stroke('black')
                strokeWeight(4)
                line(0,-20,0,0)
                line(-15,-20,-15,0)
                line(15,-20,15,0)
            pop();
            // **END TEETH**

            // **EYES**
            push();
            
            pop();
            // **END EYES**

            // **NOSE**
            push();
            // nose code goes here
            pop();
            // **END NOSE**


        pop();
        // **END HEAD**

        // ** HAT **********************************
        push();
        // hat code goes here
        pop();
        // **END HAT**


    // ** END CHARACTER SANDBOX *******************
    pop();

}
