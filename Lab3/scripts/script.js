
let gameBoard = [];
let currentPlayer = null;
const player1 = {name: "Player1", piece: "X"};
const computer = {name: "Computer", piece: "O"};
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
    if(currentPlayer == null || currentPlayer.name == "Computer"){
        currentPlayer = player1;
    }else{
        currentPlayer = computer
    }
    console.log(currentPlayer);
    selectBox(id, currentPlayer);
    checkGameState();
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


