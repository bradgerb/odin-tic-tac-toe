const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    let board = [];

    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push(0);
        };
    };

    function update(row, column, player){
        board[row][column] = player
    };

    function reset(){
        for (let i = 0; i < rows; i++){
            board[i] = [];
            for (let j = 0; j < columns; j++){
                board[i][j] = 0;
            };
        };
        for (let i = 0; i < displayController.allCells.length; i++){
            displayController.allCells[i].textContent = "";
        };
        gameController.setCurrentPlayer(0);
        gameController.winFlag = 0;
    };

    function currentBoard(){
        return board;
    };

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

    const setCurrentPlayer = (n)=> {
        let currentPlayerNumber = n;
        currentPlayer = players[currentPlayerNumber];
        return currentPlayer
    };

    const switchPlayer = ()=> {if(currentPlayer === players[0]){
        currentPlayer = players[1];
        } else{
            currentPlayer = players[0];
        };
    };

    const getCurrentPlayerMarker = (a, b)=>{
        if(checkOccupied(a, b) === 1 && gameController.winFlag === 0){
            return currentPlayer.marker
        }else {
            if (gameBoard.board[a][b] === 0){
                return
            }else{
                return gameBoard.board[a][b];
            };
        };
    };

    const playTurn = (a, b)=>{
        if(checkOccupied(a, b) === 1 && gameController.winFlag === 0){
        gameBoard.update(a, b, currentPlayer.marker);
        console.log(JSON.stringify(gameBoard.currentBoard()));
        checkWin();
        checkDraw();
        switchPlayer();
        };
    };

    const checkOccupied = (a, b)=> {
        if(gameBoard.board[a][b] === 0){
            return 1
        };
    };
    
    let winFlag = 0;

    const checkWin = ()=>{

        let winMessage = `${currentPlayer.name} is the winner!`;

        for (let i = 0; i < 3; i++){
            if (//check horizontal
                gameBoard.board[i][0] === gameBoard.board[i][1] && gameBoard.board[i][0] === gameBoard.board[i][2] && gameBoard.board[i][0] != 0 ||
                //check vertical
                gameBoard.board[0][i] === gameBoard.board[1][i] && gameBoard.board[0][i] === gameBoard.board[2][i] && gameBoard.board[0][i] != 0 ||
                // check diagonal
                gameBoard.board[0][0] === gameBoard.board[1][1] && gameBoard.board[0][0] === gameBoard.board[2][2] && gameBoard.board[0][0] != 0 ||
                gameBoard.board[0][2] === gameBoard.board[1][1] && gameBoard.board[0][2] === gameBoard.board[2][0] && gameBoard.board[0][2] != 0){
                console.log(winMessage);
                gameController.winFlag = 1;
                return
            };
        };
    };

    const checkDraw = ()=>{

        let drawMessage = "The game is a draw";

        //check if board is full
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (gameBoard.board[i][j] === 0){
                    return
                };                
            };
        };
        
        //check if player has won
        if (gameController.winFlag != 1){
            return console.log(drawMessage);
        };
    };

    return {playTurn, winFlag, setCurrentPlayer, getCurrentPlayerMarker, currentPlayer};

})();

const displayController = (function () {
    const cellOne = document.querySelector(".one");
    const cellTwo = document.querySelector(".two");
    const cellThree = document.querySelector(".three");
    const cellFour = document.querySelector(".four");
    const cellFive = document.querySelector(".five");
    const cellSix = document.querySelector(".six");
    const cellSeven = document.querySelector(".seven");
    const cellEight = document.querySelector(".eight");
    const cellNine = document.querySelector(".nine");
    const allCells = document.querySelectorAll(".cell")
    const resetButton = document.querySelector(".reset");

    cellOne.addEventListener("click", ()=> {
        cellOne.textContent = gameController.getCurrentPlayerMarker(0, 0);
        gameController.playTurn(0, 0);
    });
    cellTwo.addEventListener("click", ()=> {
        cellTwo.textContent = gameController.getCurrentPlayerMarker(0, 1);
        gameController.playTurn(0, 1);
    });
    cellThree.addEventListener("click", ()=> {
        cellThree.textContent = gameController.getCurrentPlayerMarker(0, 2);
        gameController.playTurn(0, 2);
    });
    cellFour.addEventListener("click", ()=> {
        cellFour.textContent = gameController.getCurrentPlayerMarker(1, 0);
        gameController.playTurn(1, 0);
    });
    cellFive.addEventListener("click", ()=> {
        cellFive.textContent = gameController.getCurrentPlayerMarker(1, 1);
        gameController.playTurn(1, 1);
    });
    cellSix.addEventListener("click", ()=> {
        cellSix.textContent = gameController.getCurrentPlayerMarker(1, 2);
        gameController.playTurn(1, 2);
    });
    cellSeven.addEventListener("click", ()=> {
        cellSeven.textContent = gameController.getCurrentPlayerMarker(2, 0);
        gameController.playTurn(2, 0);
    });
    cellEight.addEventListener("click", ()=> {
        cellEight.textContent = gameController.getCurrentPlayerMarker(2, 1);
        gameController.playTurn(2, 1);
    });
    cellNine.addEventListener("click", ()=> {
        cellNine.textContent = gameController.getCurrentPlayerMarker(2, 2);
        gameController.playTurn(2, 2);
    });
    resetButton.addEventListener("click", gameBoard.reset);

    return {allCells}
})();
