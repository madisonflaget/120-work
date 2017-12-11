let drops = [];
let dropSize = 50;
let dropWeight = 5;
let miniDropSize = 20;
let miniDropWeight = 2;

function setup() {
    createCanvas(windowWidth-20,windowHeight-20);
    dropTimer();
}

function draw() {
    background(0);

    // draw pipes from which the drops seem to appear
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

    for (let i=0; i< drops.length; i++) {
        drops[i].dropCheck(drops, i);
        drops[i].display();
        drops[i].drift();
    }
}

function dropTimer() {
    let d1 = new Drop(width/2, 100, '#0199CB', '#02A8DB', dropSize, dropWeight);
    let d2 = new Drop(width/2, height-100, '#0199CB', '#02A8DB', dropSize, dropWeight);
    let d3 = new Drop(100, height/2, '#0199CB', '#02A8DB', dropSize, dropWeight);
    let d4 = new Drop(width-100, height/2, '#0199CB', '#02A8DB', dropSize, dropWeight);
    drops.push(d1);
    drops.push(d2);
    drops.push(d3);
    drops.push(d4);
    setTimeout(dropTimer, 2000);
}

// each time the mouse is pressed, create 5 new instances of Drop
// function mousePressed() {
//     // for (let i=0; i<3; i++) {
//     //     let d = new Drop(width/2, 100, '#0199CB', '#02A8DB');
//     //     drops.push(d);
//     // }
//     let d1 = new Drop(width/2, 100, '#0199CB', '#02A8DB');
//     let d2 = new Drop(width/2, height-100, '#0199CB', '#02A8DB');
//     let d3 = new Drop(100, height/2, '#0199CB', '#02A8DB');
//     let d4 = new Drop(width-100, height/2, '#0199CB', '#02A8DB');
//     drops.push(d1);
//     drops.push(d2);
//     drops.push(d3);
//     drops.push(d4);
// }

function mousePressed() {
    // make the drops check themselves
    // to see if the mouse is within them.
    for (let i = drops.length - 1; i >= 0; i--) {
        let destroyMe = drops[i].mouseCheck();
        if (destroyMe) {
            drops.splice(i, 1);
            let d = new Drop(mouseX, mouseY, '#0199CB', '#02A8DB', miniDropSize, miniDropWeight);
            drops.push(d);
        }
    }
}

//*** DEFINE DROP CLASS ***********************************
class Drop {
    // basic info we will need for each drop
    constructor(tempX, tempY, tempColor, tempStroke, tempSize, tempStrokeWeight) {
        this.posX = tempX;
        this.posY = tempY;
        this.size = tempSize;
        this.rad = this.size / 2;
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
        ellipse( this.posX, this.posY, this.size)

    }

    //describes drifting movement of the dropss
    drift() {
        this.posX = this.posX + this.deltaX;
        this.posY = this.posY + this.deltaY;
    }

    dropCheck(otherDrops, myId) {
        // for loop touches each of the drops in the array
        for (let n = 0; n < otherDrops.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherDrops[n].posX, otherDrops[n].posY);
                let combinedR = this.rad + otherDrops[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;
                    // drops.splice( i, 1 );
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
