
let gameTiles = []
let gameBoard = []
let matches = [];
const images = [    
                    "resources/images/cap.jpg",
                    "resources/images/check.png",
                    "resources/images/galaxy.jpg",
                    "resources/images/letters.jpg",
                    "resources/images/lion.png",
                    "resources/images/present.png",
                    "resources/images/rocket.png",
                    "resources/images/sqirrel.png",
                ]
//ON WINDOW LOAD
window.onload = function(){
    document.querySelectorAll('#board td')
    .forEach(e => e.addEventListener("click", function() {

        let id = this.id;
        //check 
        console.log("Clicked " + id);
        
        //if element has not been clicked
        if(!matches.includes(id)){
            //Run
            run(id);
        } else{
            console.log(`Already added ${id}\nMatches contains: ${matches}`);
            return false;
        }
    }));

    //button reset logic
    document.querySelectorAll('#button')
    .forEach(e => e.addEventListener("click", function() {
        resetBoard();
    }));

    setGameBoard(images);
    shuffleTiles();
}

//RUN GAME
function run(id){
    matches.push(id);
    console.log(`Added ${id}`);
}

//RESET
function resetBoard(){
    window.location.reload(true);
}

//SET THE BOARD
function setGameBoard(images){
    for (let i = 0; i <= images.length - 1; i++){
        for(let j = 0; j < 2; j++){
            gameTiles.push(images[i])
        }
    }
    console.log("Before shuffle");
    runCheck(gameTiles);
}

//SHUFFLE ON RELOAD / GAME START
function shuffleTiles(){
    //appending to board
    console.log("Shuffling...");
    const board = document.querySelector("td");
    let shuffledCards = shuffle(gameTiles);
    runCheck(shuffledCards);
    for (let i = 0; i <= shuffledCards.length - 1; i++){
        let curTile = document.getElementById(`${i}`)
        console.log(curTile);
        curTile.innerHTML = shuffledCards[i];
    };
}

//DURSTENFELD FOR ES6
//source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
//-->   https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); //round down, whole number
        [array[i], array[j]] = [array[j], array[i]]; //swap values
        
    }
    //swapped values
    console.log(`After shuffle\n${array}`);
    return array;
}

//CHECK WHAT'S ADDED
function runCheck(array){
    console.log(array.length);
    for(let i = 0; i < array.length - 1; i++){
        console.log(array[i])
    }
}