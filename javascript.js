const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    let board = [];

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

    return {update, reset, currentBoard};
})();

const player = (function () {
    
    const players = [
        {
            name: "Bob",
            marker: "X"
        },
        {
            name: "Not Bob",
            marker: "O"
        }
    ];

    const displayPlayer = (number)=> console.log(players[number].name);

    return {displayPlayer};

})();

console.log(JSON.stringify(gameBoard.currentBoard()));
gameBoard.update(1, 2, 1);
console.log(JSON.stringify(gameBoard.currentBoard()));
gameBoard.reset();
console.log(JSON.stringify(gameBoard.currentBoard()));

player.displayPlayer(1);
