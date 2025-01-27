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

    const update = (row, column, player)=>{
        board[row][column] = player;
    };

    const reset = ()=>{
        for (let i = 0; i < rows; i++){
            board[i] = [];
            for (let j = 0; j < columns; j++){
                board[i][j] = 0;
            };
        };
        displayController.resetCells();
        gameController.setCurrentPlayer(0);
        gameController.winFlagReset();
    };

    const currentBoard = ()=> board;

    const boardLocation = (a, b)=> board[a][b];
    
    const getRows = ()=>rows
    const getColumns = ()=>columns

    return {update, reset, currentBoard, boardLocation, getRows, getColumns};
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
            if (gameBoard.boardLocation(a, b) === 0){
                return
            }else{
                return gameBoard.boardLocation(a, b);
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
        if(gameBoard.boardLocation(a, b) === 0){
            return 1
        };
    };
    
    let winFlag = 0;

    const winFlagReset = ()=>{
        gameController.winFlag = 0;
    };

    const checkWin = ()=>{

        let winMessage = `${currentPlayer.name} is the winner!`;

        for (let i = 0; i < 3; i++){
            if (//check horizontal
                gameBoard.boardLocation(i, 0) === gameBoard.boardLocation(i, 1) && gameBoard.boardLocation(i, 0) === gameBoard.boardLocation(i, 2) && gameBoard.boardLocation(i, 0) != 0 ||
                //check vertical
                gameBoard.boardLocation(0, i) === gameBoard.boardLocation(1, i) && gameBoard.boardLocation(0, i) === gameBoard.boardLocation(2, i) && gameBoard.boardLocation(0, i) != 0 ||
                // check diagonal
                gameBoard.boardLocation(0, 0) === gameBoard.boardLocation(1, 1) && gameBoard.boardLocation(0, 0) === gameBoard.boardLocation(2, 2) && gameBoard.boardLocation(0, 0) != 0 ||
                gameBoard.boardLocation(0, 2) === gameBoard.boardLocation(1, 1) && gameBoard.boardLocation(0, 2) === gameBoard.boardLocation(2, 0) && gameBoard.boardLocation(0, 2) != 0){
                console.log(winMessage);
                gameController.winFlag = 1;
                return
            };
        };
    };

    const checkDraw = ()=>{

        let drawMessage = "The game is a draw";

        //check if board is full
        for (let i = 0; i < gameBoard.getRows(); i++){
            for (let j = 0; j < gameBoard.getColumns(); j++){
                if (gameBoard.boardLocation(i, j) === 0){
                    return
                };                
            };
        };
        
        //check if player has won
        if (gameController.winFlag != 1){
            return console.log(drawMessage);
        };
    };

    return {playTurn, winFlagReset, setCurrentPlayer, getCurrentPlayerMarker};

})();

const displayController = (function () {

    const allCells = document.querySelectorAll(".cell")
    const resetButton = document.querySelector(".reset");
   
    resetButton.addEventListener("click", gameBoard.reset);

    const resetCells = ()=>{
        for (let i = 0; i < allCells.length; i++){
            allCells[i].textContent = "";
        };
    };

    const calcRow = (n)=> Math.floor(n / gameBoard.getColumns());
    const calcColumn = (n)=> n % gameBoard.getRows();

    for (let i = 0; i < allCells.length; i++){
        allCells[i].addEventListener("click", ()=> {
            allCells[i].textContent = gameController.getCurrentPlayerMarker(calcRow(i), calcColumn(i));
            gameController.playTurn(calcRow(i), calcColumn(i));
        });
    };

    return {resetCells}
})();

gameController.winFlagReset();
