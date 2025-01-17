const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    let board = [];

    let test = 0;

    function testInc() {
        test++;
    }
    
    function currentTest() {
        return test;
    }

    function resetTest() {
        test = 0;
    }

    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push(0);
        }
    }

    function update(row, column, player){
        board[row][column] = player
    }

    function reset(){
        for (let i = 0; i < rows; i++){
            board[i] = [];
            for (let j = 0; j < columns; j++){
                board[i][j] = 0;
            }
        }
    }

    function display(){
        return board;
    }

    return {update, reset, display, testInc, currentTest, resetTest};
})();

console.log(gameBoard.display());
gameBoard.update(1, 2, 1);
console.log(gameBoard.display());
gameBoard.reset();
console.log(gameBoard.display());

console.log(gameBoard.currentTest());
gameBoard.testInc();
console.log(gameBoard.currentTest());
gameBoard.testInc();
console.log(gameBoard.currentTest());
gameBoard.testInc();
console.log(gameBoard.currentTest());
gameBoard.resetTest();
console.log(gameBoard.currentTest());
gameBoard.testInc();
console.log(gameBoard.currentTest());