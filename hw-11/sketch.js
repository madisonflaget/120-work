let drop;

function setup() {
    createCanvas(windowWidth,windowHeight);
    drop = new Drop(width/2, height/2, 50, 'teal')
}

function draw() {
    background(0);

    drop.display();
    drop.drift();
}

//***DEFINE BUBBLES CLASS
class Drop {
    constructor(tempX, tempY, tempSize, tempColor) {
        this.posX = tempX;
        this.posY = tempY;
        this.size = tempSize;
        this.deltaX = random(-2, 2);
        this.deltaY = random(-2, 2);
        this.color = tempColor;
    }

    // describes what the drop will look like
    display() {
        noStroke();
        fill(this.color);
        ellipse( this.posX, this.posY, this.size)
    }

    //describes drifting movement of the drops
    drift() {
        this.posX = this.posX + this.deltaX;
        this.posY = this.posY + this.deltaY;
    }
}
