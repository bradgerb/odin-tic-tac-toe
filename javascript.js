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
        // console.log(checkWin());
        switchPlayer();
    };

    const checkWin = ()=>{
        //check horizontal
        for (let i = 0; i < 3; i++){
            if (gameBoard.currentBoard[i][0] === gameBoard.currentBoard[i][1] && gameBoard.currentBoard[i][0] === gameBoard.currentBoard[i][2] && gameBoard.currentBoard[i][0] != 0){
                return "Winner"
            };
        }

        //check vertical
        for (let i = 0; i < 3; i++){
            if (gameBoard.currentBoard[0][i] === gameBoard.currentBoard[1][i] && gameBoard.currentBoard[0][i] === gameBoard.currentBoard[2][i] && gameBoard.currentBoard[0][i] != 0){
                return "Winner"
            };
        }

        //check diagonal
        if (gameBoard.currentBoard[0][0] === gameBoard.currentBoard[1][1] && gameBoard.currentBoard[0][0] === gameBoard.currentBoard[2][2] && gameBoard.currentBoard[0][0] != 0){
            return "Winner"
        };
        if (gameBoard.currentBoard[0][2] === gameBoard.currentBoard[1][1] && gameBoard.currentBoard[0][2] === gameBoard.currentBoard[2][0] && gameBoard.currentBoard[0][2] != 0){
            return "Winner"
        };
    };

    return {displayCurrentPlayerName, displayCurrentPlayerMarker, switchPlayer, playTurn};

})();

const displayController = (function(){

})();

console.log(JSON.stringify(gameBoard.currentBoard()));
gameController.playTurn(0, 0);
gameController.playTurn(1, 1);
