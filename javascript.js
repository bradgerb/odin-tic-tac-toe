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

    return {update, reset, currentBoard, board};
})();

const gameController = (function () {
    
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

    let currentPlayer = players[0];

    const displayCurrentPlayerName = ()=> console.log(currentPlayer.name);
    const displayCurrentPlayerMarker = ()=> console.log(currentPlayer.marker);

    const switchPlayer = ()=> {if(currentPlayer === players[0]){
        currentPlayer = players[1];
        } else{
            currentPlayer = players[0];
        };
    };

    const playTurn = (a, b)=>{
        gameBoard.update(a, b, currentPlayer.marker);
        console.log(JSON.stringify(gameBoard.currentBoard()));
        checkWin();
        switchPlayer();
    };

    const checkWin = ()=>{
        //check horizontal
        for (let i = 0; i < 3; i++){
            if (gameBoard.board[i][0] === gameBoard.board[i][1] && gameBoard.board[i][0] === gameBoard.board[i][2] && gameBoard.board[i][0] != 0){
                return console.log("Winner")
            };
        };

        // check vertical
        for (let j = 0; j < 3; j++){
            if (gameBoard.board[0][j] === gameBoard.board[1][j] && gameBoard.board[0][j] === gameBoard.board[2][j] && gameBoard.board[0][j] != 0){
                return console.log("Winner")
            };
        };

        // check diagonal
        if (gameBoard.board[0][0] === gameBoard.board[1][1] && gameBoard.board[0][0] === gameBoard.board[2][2] && gameBoard.board[0][0] != 0){
            return console.log("Winner")
        };
        if (gameBoard.board[0][2] === gameBoard.board[1][1] && gameBoard.board[0][2] === gameBoard.board[2][0] && gameBoard.board[0][2] != 0){
            return console.log("Winner")
        };
    };

    return {playTurn};

})();

console.log(JSON.stringify(gameBoard.currentBoard()));
gameController.playTurn(0, 0);
gameController.playTurn(1, 1);
gameController.playTurn(0, 1);
gameController.playTurn(2, 2);
gameController.playTurn(0, 2);
