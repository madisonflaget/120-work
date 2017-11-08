

var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
ball.mainColor = 'rgba( 100, 200, 100, 0.3)';
ball.color = ball.mainColor;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

//** X AXIS **************************************
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
        ball.color = 'rgba( 255, 0, 0, 1 )';

    } else {
        ball.color = ball.mainColor;
    }
//** END **************************************

//** Y AXIS ************************************
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
        ball.color = 'rgba( 255, 0, 0, 1 )';

    } else {
        // ball.color = 'rgba( 100, 200, 100, 0.3 )';
    }
//** END ****************************************

    // if (mouseIsPressed){
        // ball.color = 'rgba( random(255), random(255), random(255), 0.5)';
        // ball.color = color( random(255), random(255), random(255) );
    // }

    fill(ball.color);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
    ball.mainColor = color( random(255), random(255), random(255), 100 );
    // background(random(255), random(255), random(255));
}
