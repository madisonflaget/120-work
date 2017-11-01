Madison Flaget, 51

[Live Sketch Link](https://madisonflaget.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing


<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

-->

3: Instantiate the variable "ball" as an object <br />
4: create new parameter "ball.width" that stores a value of 40  These will be used to define the qualities/properties of the object <br />
5: create new parameter "ball.x" that stores a value of 10 <br />
6: create new parameter "ball.y" that stores a value of 10. The first ball will be drawn at (10, 10) <br />
7: create new parameter "ball.delta_x" that stores a value of 1 <br />
8: create new parameter "ball.delta_y" that stores a value of 1 <br />
9: create new parameter "ball.scale_x" that stores a value of 1. Later on, this will affect the increments that pos_x changes. It will initially change in increments of 1px per frame. <br />
10: create new parameter "ball.scale_y" that stores a value of 1. Later on, this will affect the increments that pos_y changes. It will initially change in increments of 1px per frame. <br />

12: defines a function called "setup" <br />
13: creates a canvas 400px tall and width of the window <br />
14: sets the background color to white <br />

19: defines a function called "draw" <br />

21: assigns the value of variable ball.x as equal to the result of "ball.x + (ball.delta_x * ball.scale_x)". <br />
22: assigns the value of variable ball.y as equal to the result of "ball.y + (ball.delta_x * ball.scale_y)". <br />

25: call the function "if" and set the parameter to "ball.x >= width || ball.x <= 0". This means if variable ball.x is greater than or equal to the width OR ball.x is less than or equal to 0, then the following line of code is executed. In real terms, if the ball hits the left or right edges of the canvas, the following code executes. <br />
26: assigns the value of ball.delta_x to be itself multiplied by -1. This flips from a positive number to a negative number. Or a negative number to a postive. This change in the delta value sends the ball flying in the opposite direction. Who said that we would never use middle school algebra? <br />

28: Does just the same as line 25, except on the y-axis. If the ball hits the top or bottom edges of the canvas, the following code executes <br />
29: Same as line 25 but flips the value of ball.delta_y. <br />

32: Sets the fill as of the following shape to white. <br />
33: creates and ellipse in a position defined by the variables ball.x and ball.y. The width of the ball is defined by variable ball.width <br />

36: call the function mousePressed, which executes each time that the mouse is pressed <br />
37: assigns ball.scale_x to be a map of the value mouseX. The expected range is 0-width, the values that it maps to are 0.5-10. This causes a change in the increments and angle by which the ball moves horizontally. <br />
38: assigns ball.scale_y to be a map of the value mouseY. The expected range is 0-height, the values that it maps to are 0.5-10. This causes a change in the increments and angle by which the ball moves vertically. <br />

## How did you alter the sketch?

I had a lot of grand ideas for this sketch, but ended up getting caught up on the color changing aspects of my idea. To start off, I wanted to set the ball so that it would change to a certain color, otherwise it would be a another set color. That second color woould not be constant. It would change every time that you clocked the mouse. The first color I was able change with reasonable success via the else function. It was the second color that messed me up. I spent 4 hours trying to get it to work. I tried using the console, the course website, the p5.js reference page, and regular old Google. I tried so many variatons of things it was ridiculous. I was not able resolve the issue but was able to get the background to change when clicked. Not what I wanted but at least something. I plan on going to office hours when Michael is back in town. Hopefully he will be able to help explain why it doesn't work.
