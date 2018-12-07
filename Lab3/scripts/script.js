
let gameBoard = [];
const player1 = {name: "Player1", piece: "X"};
const computer = {name: "Computer", piece: "O"};
let currentPlayer = player1
var winningState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

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
    console.log("CurrentPlayer " + currentPlayer.name);
    selectBox(id, currentPlayer);
    console.log("Current Player: " + currentPlayer.name);
    if (currentPlayer.Name == 'Computer'){
        Console.log("Computer playing");
        computerTurn()
        currentPlayer = player1;
    }
}

function selectBox(id, currentPlayer) {
    if (currentPlayer == player1){
        gameBoard.push(id);
        let element = document.getElementById(id);
        element.classList.add("td-background");
        element.innerHTML = currentPlayer.piece;
        checkGameState();
    }

    console.log("Handing control to computer");
    currentPlayer = computer;
    console.log("Current id is: " + id)
    console.log("Gameboard contains: " + gameBoard);
}

function computerTurn(){
    for(let i=0; i < 9; i++){
        if(!(gameBoard[i] != 'undefined')){
            gameBoard.push(i);
            let element = document.getElementById(i);
            element.classList.add("td-background");
            element.innerHTML = currentPlayer.piece;
        
            //check 
           // console.log("Current id is: " + i)
           // console.log("Gameboard contains: " + gameBoard);
            checkGameState();
        }else{
            console.log("Gamboard already contains piece " + i)
        }
    }
}

function ResetBoard(){
    window.location.reload(true);
}

function checkGameState(){
    if(currentPlayer.name == "Computer"){
        console.log("Computer turn");
        computerTurn();
        currentPlayer = player1
        return true
    }else{
        
    }
    for(let state in winningState)
    {
        for(let i=0; i < state.length; i++)
        console.log(state[i]);
        // if(state[0].innerHTML.TextContext == "X" && state[1].innerHTML.TextContext == "X" && state[2].innerHTML.TextContext == "X"){
        //     innerHTML.getElementById("reset").InnerHTML = "Player1 wins!";
        // }else if(state[0].innerHTML.TextContext  == "O" && state[1].TextContext  == "O" && state[2].TextContext  == "O"){
        //         innerHTML.getElementById("reset").InnerHTML = "Computer!";
        // }
    }
}


