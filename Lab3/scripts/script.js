
let gameBoard = [];
let currentPlayer = null;
const player1 = {name: "Player1", piece: "X"};
const computer = {name: "Computer", piece: "O"};

window.onload = function(){
    document.querySelectorAll('#board td')
    .forEach(e => e.addEventListener("click", function() {

        let id = this.id;
        //check 
        console.log("Clicked " + id);
        
        //if element has not been clicked
        if(!gameBoard.includes(id)){
            //Run
            runGame(id);
        } else{
            console.log("already taken");
            console.log("Gameboard contains: " + gameBoard);
            return false;
        }
    }));

    //button reset logic
    document.querySelectorAll('#button')
    .forEach(e => e.addEventListener("click", function() {
        ResetBoard();
    }));
}

function runGame(id){
    if(currentPlayer == null || currentPlayer.name == "Computer"){
        currentPlayer = player1;
    }else{
        currentPlayer = computer
    }
    console.log(currentPlayer);
    selectBox(id, currentPlayer);
}

function selectBox(id, currentPlayer) {
    gameBoard.push(id);
    let element = document.getElementById(id);
    element.classList.add("td-background");
    element.innerHTML = currentPlayer.piece;

    //check 
    console.log("Current id is: " + id)
    console.log("Gameboard contains: " + gameBoard);
}

function ResetBoard(){
    window.location.reload(true);
}

function checkGameState(){
    var winningState = {
        state1: [0, 1, 2],
        state2: [3, 4, 5],
        state3: [6, 7, 8],
        state4: [0, 3, 6],
        state5: [1, 4, 7],
        state6: [2, 5, 8],
        state7: [0, 4, 8],
        state8: [2, 4, 6]
    }

    if (gameBoard.length <= 4){
        runGame();
    }else{

        for(let state in winningState)
        {
            
        }
    }
}

