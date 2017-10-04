function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 600, 900 );
}

function draw() {
    // set the background color
    background( 'rgb(78, 249, 135)' );

    // *****************************************************
    // create a sandbox for the entire character
    push();

    // move the entire grid for this character to the center of the canvas
    translate( 300, 450 );


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


    // ** HEAD **********************************
    push();

    // head code goes here
    // make skull first


    // **MOUTH**
    push();
    // mouth code goes here

    pop();
    // **END MOUTH**

    // **EYES**
    push();
    // eye code goes here

    pop();
    // **END EYES**

    pop();
    // **END HEAD**


    // ** END CHARACTER SANDBOX *******************
    pop();

}
