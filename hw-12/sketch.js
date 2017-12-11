let drops = [];

function setup() {
    createCanvas(windowWidth,windowHeight);

}

// each time the mouse is pressed, create 5 new instances of Drop
function mousePressed() {
    for (let i=0; i<5; i++) {
        let d = new Drop(width/2, 100, '#0199CB');
        drops.push(d);
    }
}

function draw() {
    background(0);

    // draw pipe from which the drops seem to appear
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
    // basic info we will need for each drop
    constructor(tempX, tempY, tempColor) {
        this.posX = tempX;
        this.posY = tempY;
        // this.size = tempSize;
        this.width = random(40,60);
        this.height = random(40,60);
        this.deltaX = random(-1, 1);
        this.deltaY = random(-1, 1);
        this.color = color(tempColor);
    }

    // describes what the drops will look like
    display() {
        noStroke();
        fill(this.color);
        ellipse( this.posX, this.posY, this.width, this.height)
    }

    //describes drifting movement of the dropss
    drift() {
        this.posX = this.posX + this.deltaX;
        this.posY = this.posY + this.deltaY;
    }
}
//******************** END DROP CLASS
