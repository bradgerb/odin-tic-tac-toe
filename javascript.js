const createBoard = (function () {
    const rows = 3;
    const columns = 3;
    const board = [];
    
    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push(0);
        }
    }

    return {rows, columns, board};
})();

const updateBoard = (function () {

    function changeCell(row, column, player){
        createBoard.board[row][column] = player
    }

    function resetBoard(){
        for (let i = 0; i < createBoard.rows; i++){
            createBoard.board[i] = [];
            for (let j = 0; j < createBoard.columns; j++){
                createBoard.board[i][j] = 0;
            }
        }
    }

    return {changeCell, resetBoard};
})();

console.log(createBoard.board);
updateBoard.changeCell(1, 2, 1);
console.log(createBoard.board);
updateBoard.resetBoard();
console.log(createBoard.board);