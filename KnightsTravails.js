const squareRegistry = new Map();

function chessSquare(x, y) {
    const xPos = x;
    const yPos = y;
    let predecessor;

    // Posible moves
    const directions = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ];

    function getPredecessor() {
        return predecessor;
    };
    function setPredecessor(newPredecessor) {
        predecessor = predecessor || newPredecessor;
    };

    function name() {
        return `${x}, ${y}`
    };

    function possibleKnightMoves() {
        return directions
            .map((offset) => newSquareFrom(offset[0], offset[1]))
            .filter((square) => square !== undefined);
    };

    function newSquareFrom(xOffset, yOffset) {
        const [newX, newY] = [xPos + xOffset, yPos + yOffset];
        if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
            return chessSquare(newX, newY);
        };
    };

    if (squareRegistry.has(name())) {
        return squareRegistry.get(name());
    }
    else {
        const newSquare = { name, getPredecessor, setPredecessor, possibleKnightMoves };
        squareRegistry.set(name(), newSquare);
        return newSquare;
    };
};

function knightTravails(start, finish) {
    squareRegistry.clear();

    const origin = chessSquare(...start);
    const target = chessSquare(...finish);

    const queue = [origin];
    while (!queue.includes(target)) {
        const currentSquare = queue.shift();

        const equeueList = currentSquare.possibleKnightMoves();
        equeueList.forEach(square => {
            square.setPredecessor(currentSquare);
        });
        queue.push(...equeueList);
    };
    const path = [target];
    while (!path.includes(origin)) {
        const prevSquare = path[0].getPredecessor();
        path.unshift(prevSquare);
    };

    console.log(`You made it in ${path.length - 1} moves!`);
    console.log("Here's your path:");
    let squareCoord = [];
    path.forEach((square) => {
        console.log(square.name());
        squareCoord.push(square.name());
    });
};

module.exports = knightTravails;