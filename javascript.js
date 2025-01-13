const cells = (function () {

    let value = 0

    return {value};
})();

const gameboard = (function () {
    const rows = 3;
    const columns = 3;
    const board = [];
    
    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push(cells.value);
        }
    }


    const example = (a, b) => a + b;
    const anotherOne = (a) => 2 * a;
    return {example, anotherOne, board};
})();

console.log(gameboard.example(5, 6));
console.log(gameboard.board);