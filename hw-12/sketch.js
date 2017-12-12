let drops = [];
let starX = [];
let starY = [];
let starSize = [];
let dropSize = 50;
let dropWeight = 5;
let dropletSize = 20;
let dropletWeight = 2;
let dropColor = '#0199CB';
let dropStrokeColor = '#02A8DB';

function setup() {
    createCanvas(windowWidth-20,windowHeight-20);
    dropTimer();

    // create an array to generate random x, y, and size values
    for( let num=0; num<200; num++ ){
        // create and push in a new random number
        starX.push( random( 0, width ) );
        starY.push( random( 0, height ) );
        starSize.push( random(1,4));
    }
}

function draw() {
    background(0);

    // use the star array to draw a stary background
    for( let idx=0; idx<starX.length; idx++ ){
        push();
        fill(255);
        noStroke();
        ellipse( starX[idx], starY[idx], starSize[idx]);
        pop();
    }

    //*** DRAW PIPES FOR DROPS **************
    // TOP PIPE
    noStroke();
    fill(200);
    rect((width/2)-50, 0, 100, 40);
    fill(150);
    rect((width/2)-50, 40, 100, 20);

    // BOTTOM PIPE
    noStroke();
    fill(200);
    rect((width/2)-50, height-40, 100, 40);
    fill(150);
    rect((width/2)-50, height-60, 100, 20);

    // LEFT PIPE
    noStroke();
    fill(200);
    rect(0, (height/2)-50, 40, 100);
    fill(150);
    rect(40, (height/2)-50, 20, 100);

    // RIGHT PIPE
    noStroke();
    fill(200);
    rect(width-40, (height/2)-50, 40, 100);
    fill(150);
    rect(width-60, (height/2)-50, 20, 100);
    //*** END PIPES**************************

    for (let i=drops.length-1; i >= 0; i--) {
        if(drops[i]){
            drops[i].display();
            drops[i].drift();
            drops[i].dropCheck(drops, i);            
        }
    }
}

function dropTimer() {

    // check the creation point near every pipe to see if clear of drops
    // if clear, create 3 drops every 2 seconds, each from a different pipe
    pipeCheck(width/2, 100);
    pipeCheck(width/2, height-100);
    pipeCheck(100, height/2);
    pipeCheck(width-100, height/2);
    setTimeout(dropTimer, 2000);
}

function pipeCheck(createX, createY){
    let create = true;
    for( let i = 0; i < drops.length; i++){
        let d = dist(createX, createY, drops[i].posX, drops[i].posY);
        let thresh = 110;
        if( d < thresh ) {
            create = false;
        }
    }
    if(create){
        let d1 = new Drop(createX, createY, dropColor, dropStrokeColor, dropSize, dropWeight);
        drops.push(d1);
    }
}

function mousePressed() {
    // make the drops check themselves
    // to see if the mouse is within them.
    for (let i = drops.length - 1; i >= 0; i--) {
        let destroyMe = drops[i].mouseCheck();
        if (destroyMe) {
            // remove larger drop
            drops.splice(i, 1);
            // create three droplets when clicked by mouse
            let dl1 = new Drop(mouseX, mouseY, dropColor, dropStrokeColor, dropletSize, dropletWeight);
            let dl2 = new Drop(mouseX-(dropletSize+5), mouseY+(dropletSize+5), dropColor, dropStrokeColor, dropletSize, dropletWeight);
            let dl3 = new Drop(mouseX+(dropletSize+5), mouseY+(dropletSize+5), dropColor, dropStrokeColor, dropletSize, dropletWeight);
            drops.push(dl1);
            drops.push(dl2);
            drops.push(dl3);
        }
    }
}

//*** DEFINE DROP CLASS ***********************************
class Drop {
    // basic info we will need for each drop
    constructor(tempX, tempY, tempColor, tempStroke, tempSize, tempStrokeWeight) {
        this.posX = tempX;
        this.posY = tempY;
        this.rad = tempSize / 2;
        this.deltaX = random(-2, 2);
        this.deltaY = random(-2, 2);
        this.color = color(tempColor);
        this.stroke = color(tempStroke);
        this.strokeWeight = tempStrokeWeight;
    }

    // describes what the drops will look like
    display() {
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        fill(this.color);
        ellipse( this.posX, this.posY, this.rad * 2);
    }

    //describes drifting movement of the dropss
    drift() {
        this.posX = this.posX + this.deltaX;
        this.posY = this.posY + this.deltaY;
    }

    // checks if drops touch eachother. Sets them to bounce off of one another
    dropCheck(otherDrops, myId) {
        // for loop touches each of the drops in the array
        for (let n = 0; n < otherDrops.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherDrops[n].posX, otherDrops[n].posY);
                let combinedR = this.rad + otherDrops[n].rad;

                if (d <= combinedR) {
                    // this.deltaX *= -1;
                    // this.deltaY *= -1;
                    this.rad += otherDrops[n].rad
                    otherDrops.splice( n, 1 );
                }
            }
        }
    }
    mouseCheck() {
        // get the distance between the mouse and the center of the drop
        let d = dist(this.posX, this.posY, mouseX, mouseY);
        // check if that distance is less than the drop radius
        // if it is, then the mouse if within
        if (d < this.rad) {
            return true;
        } else {
            return false;
        }
    }
}
//******************** END DROP CLASS
