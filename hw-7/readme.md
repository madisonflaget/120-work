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

3: Instantiate the variable "ball" as an object
4: create new parameter "ball.width" that stores a value of 40. These will be used to define the qualities/properties of the object
5: create new parameter "ball.x" that stores a value of 10
6: create new parameter "ball.y" that stores a value of 10. The first ball will be drawn at (10, 10)
7: create new parameter "ball.delta_x" that stores a value of 1
8: create new parameter "ball.delta_y" that stores a value of 1
9: create new parameter "ball.scale_x" that stores a value of 1. Later on, this will affect the increments that pos_x changes. It will initially change in increments of 1px per frame.
10: create new parameter "ball.scale_y" that stores a value of 1. Later on, this will affect the increments that pos_y changes. It will initially change in increments of 1px per frame.

12: defines a function called "setup"
13: creates a canvas 400px tall and width of the window
14: sets the background color to white

19: defines a function called "draw"

21: assigns the value of variable ball.x as equal to the result of "ball.x + (ball.delta_x * ball.scale_x)".
22: assigns the value of variable ball.y as equal to the result of "ball.y + (ball.delta_x * ball.scale_y)".

25: call the function "if" and set the parameter to "ball.x >= width || ball.x <= 0". This means if variable ball.x is greater than or equal to the width OR ball.x is less than or equal to 0, then the following line of code is executed. In real terms, if the ball hits the left or right edges of the canvas, the following code executes.
26: assigns the value of ball.delta_x to be itself multiplied by -1. This flips from a positive number to a negative number. Or a negative number to a postive. This change in the delta value sends the ball flying in the opposite direction. Who said that we would never use middle school algebra?

28: Does just the same as line 25, except on the y-axis. If the ball hits the top or bottom edges of the canvas, the following code executes
29: Same as line 25 but flips the value of ball.delta_y.

32: Sets the fill as of the following shape to white.
33: creates and ellipse in a position defined by the variables ball.x and ball.y. The width of the ball is defined by variable ball.width



## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->

Ideas
- speed up ball as it hits edge
- change color on click
- cycle color if held
