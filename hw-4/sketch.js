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

        // head code goes here
        // make skull first


            // **MOUTH**
            push();
            // mouth code goes here
            pop();
            // **END MOUTH**

            // **TEETH**
            push();
            // teeth code goes here
            pop();
            // **END TEETH**

            // **EYES**
            push();
            // eye code goes here
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
