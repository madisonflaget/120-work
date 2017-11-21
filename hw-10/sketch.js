function setup(){
    createCanvas( windowWidth, 600);
}

let yDown = 0;
let yUp = 0;
//Introduces the variable for the width of the teeth and the offset for the lower jaw
let teethSpace = 0;

//*** FUNCTIONS FOR UPPER JAW ***
function upperGums(dir) {
    fill(229,152,194)
    rect( 0, dir, width, 50 )
}

function upperTeeth(x, dir){
    fill(254,222,138)
    rect( x, 50 + dir, teethSpace, teethSpace)
}
//**********************************

//*** FUNCTIONS FOR LOWER JAW ***
function lowerGums(dir) {
    fill(229,152,194);
    rect( 0, height + dir, width, 50 )
}

function lowerTeeth(x, dir) {
    fill(254,222,138);
    rect( teethSpace+ x, (height-teethSpace) + dir, teethSpace, teethSpace)
}
//*******************************

function draw () {

    //sets the width of the teeth and the offset for the lower jaw
    teethSpace = width*0.1;

    //using an array to store the values of 5 points equally spread across the width
    let teeth_pos_array = [ 0, width*0.2, width*0.4, width*0.6, width*0.8];
    background(0);
    noStroke();

    //*** DRAW UPPER JAW
    upperGums(yDown);
    upperTeeth(teeth_pos_array[0], yDown);
    upperTeeth(teeth_pos_array[1], yDown);
    upperTeeth(teeth_pos_array[2], yDown);
    upperTeeth(teeth_pos_array[3], yDown);
    upperTeeth(teeth_pos_array[4], yDown);
    //***********************************

    //*** DRAW LOWER JAW
    lowerGums(yUp);
    lowerTeeth(teeth_pos_array[0], yUp);
    lowerTeeth(teeth_pos_array[1], yUp);
    lowerTeeth(teeth_pos_array[2], yUp);
    lowerTeeth(teeth_pos_array[3], yUp);
    lowerTeeth(teeth_pos_array[4], yUp);
    //***************************************


    // I WAS ORIGINALLLY GOING TO USE JUST THE ARRAY TO DRAW THE TEETH, BUT THEN REALIZED THAT
    // I WAS MISSING THE REQUIRED FUNCTIONS
    // for( let idx=0; idx < teeth_pos_array.length; idx++) {
    //     // GUMS
    //     fill('pink')
    //     rect( 0, yDown, width, 50 )
    //
    //     // UPPER TEETH
    //     fill('gray')
    //     rect( teeth_pos_array[idx], 50 + yDown, 50, 50)
    //     // teeth();
    // }

    // triggers and contrains movement
    yDown = (yDown + 1) % (height/3);
    yUp = (yUp - 1) % (height/3);
}
