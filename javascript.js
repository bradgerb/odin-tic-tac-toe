const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    let board = [];

    let test = 0;
    let testArray = [1, 2, 3, 4, 5];
    let testNestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    function testInc() {
        test++;
    }

    function testSet(a) {
        test = a;
    }
    
    function currentTest() {
        return test;
    }

    function resetTest() {
        test = 0;
    }

    function setTestArray(a) {
        testArray[3] = a;
    }

    function currentTestArray() {
        return testArray;
    }

    function currentTestNestedArray() {
        return testNestedArray;
    }

    function setTestNestedArray() {
        testNestedArray[1][1] = 20;
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

    function currentBoard(){
        return board;
    }

    return {update, reset, currentBoard, testInc, currentTest, resetTest, testSet, setTestArray, currentTestArray, currentTestNestedArray, setTestNestedArray};
})();

console.log("Actual Project");
console.log(gameBoard.currentBoard());
gameBoard.update(1, 2, 1);
console.log(gameBoard.currentBoard());
gameBoard.reset();
console.log(gameBoard.currentBoard());

console.log("Single variable test");
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
gameBoard.testSet(5);
console.log(gameBoard.currentTest());

console.log("Single array test");
console.log(gameBoard.currentTestArray());
gameBoard.setTestArray(9);
console.log(gameBoard.currentTestArray());

console.log("Nested array test");
console.log(gameBoard.currentTestNestedArray());
gameBoard.setTestNestedArray();
console.log(gameBoard.currentTestNestedArray());
