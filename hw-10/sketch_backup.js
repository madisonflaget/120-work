function setup(){
    createCanvas( windowWidth, 600);
}


let yPos = 0;

function draw () {

    let teeth_pos_array = [ 0, width*0.2, width*0.4, width*0.6, width*0.8];

    background(255);
    noStroke();

    for( let idx=0; idx < teeth_pos_array.length; idx++) {
        // GUMS
        fill('pink')
        rect( 0, yPos, width, 50 )

        // UPPER TEETH
        fill('gray')
        rect( teeth_pos_array[idx], 50 + yPos, 50, 50)
    }

    // triggers and contrains movement
    yPos = (yPos + 1) % (windowHeight/2);
}
