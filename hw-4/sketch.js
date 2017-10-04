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


        // ** RIBS **********************************
        push();
            rectMode(CENTER);
            fill('white');
            noStroke();
            rect(0,40,150,15);
            rect(0,80,150,15);
            rect(0,120,150,15);
            rect(0,80,15,90);
        pop();
        // **END RIBS**

        // ** JOINTS **********************************
        push();
            fill('white');
            noStroke();
            ellipse(0,15,20);
            ellipse(0,140,20);
        pop();
        // **END JOINTS**

        // ** PELVIS **********************************
        push();
            noStroke();
            fill('white');
            triangle(-75,160,75,160,0,200);
        pop();
        // **END PELVIS**

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
        fill('white');
        noStroke();
        ellipse(0,-90,150);
        // **END SKULL**


            // **MOUTH**
            push();
                rectMode(CENTER);
                fill('white');
                rect(0,-30,60,60);
            pop();
            // **END MOUTH**

            // **TEETH**
            push();
                stroke('black');
                strokeWeight(4);
                line(0,-20,0,0);
                line(-15,-20,-15,0);
                line(15,-20,15,0);
            pop();
            // **END TEETH**

            // **EYES**
            push();
            fill('black');
            ellipse(-30,-80,50,70);
            ellipse(30,-80,50,70);
            pop();
            // **END EYES**

            // **NOSE**
            push();
            fill('black');
            noStroke();
            triangle(-10,-30,10,-30,0,-50);
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
