let drops = [];

function setup() {
    createCanvas(windowWidth,windowHeight);

}

function mousePressed() {
    let d = new Drop(width/2, 100, 50, 'teal')
    drops.push(d);
}

function draw() {
    background(0);

    // draw pip from which the drops seem to appear
    fill(200);
    rect((width/2)-50, 0, 100, 40);
    fill(150);
    rect((width/2)-50, 40, 100, 20);

    for (let i=0; i< drops.length; i++) {
        drops[i].display();
        drops[i].drift();
    }
}

//*** DEFINE DROP CLASS ***********************************
class Drop {
    constructor(tempX, tempY, tempSize, tempColor) {
        this.posX = tempX;
        this.posY = tempY;
        this.size = tempSize;
        this.deltaX = random(-1, 1);
        this.deltaY = random(-1, 1);
        this.color = tempColor;
    }

    // describes what the drops will look like
    display() {
        noStroke();
        fill(this.color);
        ellipse( this.posX, this.posY, this.size)
    }

    //describes drifting movement of the dropss
    drift() {
        this.posX = this.posX + this.deltaX;
        this.posY = this.posY + this.deltaY;
    }
}
//******************** END DROP CLASS
