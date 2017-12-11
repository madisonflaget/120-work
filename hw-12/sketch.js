let drops = [];

function setup() {
    createCanvas(windowWidth,windowHeight);

}

// each time the mouse is pressed, create 5 new instances of Drop
function mousePressed() {
    for (let i=0; i<5; i++) {
        let d = new Drop(width/2, 100, '#0199CB', '#02A8DB');
        drops.push(d);
    }
}

function draw() {
    background(0);

    // draw pipe from which the drops seem to appear
    noStroke();
    fill(200);
    rect((width/2)-50, 0, 100, 40);
    fill(150);
    rect((width/2)-50, 40, 100, 20);

    for (let i=0; i< drops.length; i++) {
        drops[i].dropCheck(drops, i);
        drops[i].display();
        drops[i].drift();
    }
}

//*** DEFINE DROP CLASS ***********************************
class Drop {
    // basic info we will need for each drop
    constructor(tempX, tempY, tempColor, tempStroke) {
        this.posX = tempX;
        this.posY = tempY;
        // this.size = tempSize;
        // this.width = random(40,60);
        // this.height = random(40,60);
        this.size = 50;
        this.rad = this.size / 2;
        this.deltaX = random(-1, 1);
        this.deltaY = random(-1, 1);
        this.color = color(tempColor);
        this.stroke = color(tempStroke);
    }

    // describes what the drops will look like
    display() {
        stroke(this.stroke);
        strokeWeight(5);
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
                }
            }
        }
    }
}
//******************** END DROP CLASS
