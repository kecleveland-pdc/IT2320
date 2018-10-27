
let gameTiles = []
let matches = [];
let shuffledTiles = [];
let curTiles = [];
let turns = 1;
const images = [    
                    {"id":"0", "value":"resources/images/cap.jpg"},
                    {"id":"1", "value":"resources/images/check.png"},
                    {"id":"2", "value":"resources/images/galaxy.jpg"},
                    {"id":"3", "value":"resources/images/letters.jpg"},
                    {"id":"4", "value":"resources/images/lion.png"},
                    {"id":"5", "value":"resources/images/present.png"},
                    {"id":"6", "value":"resources/images/rocket.png"},
                    {"id":"7", "value":"resources/images/squirrel.png"},
                ]
//ON WINDOW LOAD
window.onload = function(){
    //set game board and shuffle tiles
    setGameBoard(images);
    shuffleTiles();

    document.querySelectorAll('#board td')
    .forEach(e => e.addEventListener("click", function() {

        //get id 
        let id = this.id;
        console.log("Clicked " + id);

        //if element has not been clicked
        if(matches.includes(id)){
            console.log(`Already clicked ${id}`)
            return false;
        }   

        //add class
        document.getElementById(id).classList.add("cover");
        //ADD MATCH
        matches.push(id);
        document.getElementById(id).children[0].classList.remove("hidden");

        //get curTile
        let curTile = document.getElementById(id).children[0].src;
        curTile = curTile.substring(curTile.indexOf("resources"), curTile.length);
        curTiles.push(curTile);
        console.log(curTiles);

        //CHECK FOR WIN
        checkSuccess(curTiles);
    }));

    //button reset logic
    document.querySelectorAll('#button')
    .forEach(e => e.addEventListener("click", function() {
        resetBoard();
    }));
}

//RUN GAME
function run(id){
    console.log(id);
    let card = document.getElementById(`${id}`).children[0].src;
    console.log(card);
    curCards.push(card);
    //console.log(`Added ${card}`);
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
}

//SHUFFLE ON RELOAD / GAME START
function shuffleTiles(){
    //SHUFFLE
    console.log("Shuffling...");
    const board = document.querySelector("td");
    shuffledTiles = shuffle(gameTiles);
    //runCheck(shuffledTiles;
    //UPDATE BOARD
    for (let i = 0; i <= shuffledTiles.length - 1; i++){
        let curTile = document.getElementById(`${i}`)
        let imgElement = document.createElement("img")
        imgElement.src = `${shuffledTiles[i].value}`;
        imgElement.classList.add("hidden", "image");
       curTile.appendChild(imgElement);
    };
}

//DURSTENFELD FOR ES6
//source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
//------> https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); //round down --> get cur position in array + 1 (next position)
        [array[i], array[j]] = [array[j], array[i]]; //swap those positions 
    }
    return array;
}

function checkSuccess(array){
    if(turns % 2 != 0) {
        turns++;
        console.log("One more turn");
        return false;
    }

    console.log("checking win...");
    console.log(`Checking array: ${array[0]}\n${array[1]}`);
    if(array[0].includes(array[1])){
        console.log(`Checking array: ${array[0]}\n${array[1]}`);
        console.log("Match. Win.");
        setTimeout(function(){
            document.getElementById("overlay").innerHTML = ("You win! Reloading...");
        }, 500)
        

        setTimeout(function(){ 
            resetBoard(); 
        }, 3000);

        return true;
    }else{
        console.log("No match. Lose.\nResetting.");
        setTimeout(function(){ 
            alert("No match. Try again...Resetting..."); 
        }, 1000);

        setTimeout(function(){ 
            reset();
        }, 1000);
    }

    return false;
}

function reset(){

    console.log(matches);
    for(i=0; i <= matches.length - 1; i++){
        console.log(matches[i]);
        document.getElementById(matches[i]).children[0].classList.add("hidden");
    }
    matches = [];
    curTiles = [];
    turns = 1;
}