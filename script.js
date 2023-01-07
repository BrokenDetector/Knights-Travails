const knightTravails = require("./KnightsTravails");

knightTravails([0, 0], [1, 2]);
// You made it in 1 moves!
// Here's your path:
// 0, 0
// 1, 2

knightTravails([0, 0], [3, 3]);
// You made it in 2 moves!
// Here's your path:
// 0,0
// 1,2
// 3,3

knightTravails([3, 3], [0, 0]);
// You made it in 2 moves!
// Here's your path:
// 3,3
// 2,1
// 0,0