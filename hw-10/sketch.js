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
    // draw upper teeth by looping an array
    for( let idx=0; idx < teeth_pos_array.length; idx++) {
        upperTeeth(teeth_pos_array[idx], yDown);
    }
    //*********************************************************

    //*** DRAW LOWER JAW
    lowerGums(yUp);
    // draw upper teeth by looping an array
    for( let idx=0; idx < teeth_pos_array.length; idx++) {
        lowerTeeth(teeth_pos_array[idx], yUp);
    }
    //******************************************************

    // triggers and contrains movement
    yDown = (yDown + 1) % (height/3);
    yUp = (yUp - 1) % (height/3);
}
