
let gameBoard = [
    { "id":"0","question":"What does the F stand for in FBI?", "correct":"1", "answers":[ "Fun", "Federal", "Financial" ]},
    { "id":"1","question":"What Great Lake is in Cleveland, OH?","correct":"0","answers":[ "Cleveland", "Michigan", "Ontario"]},
    { "id":"2","question":"Where is the Statue of Liberty?", "correct":"2","answers":[ "Toronto", "Los Angeles", "New York City"]},
]

let answered = [];
let score = 0;
let answers = 0;
let right = "";

window.onload = function(){
    gameBoard.forEach(function(question) {
        createTest(question);
      });

    document.querySelectorAll('.td-answers')
    .forEach(e => e.addEventListener("click", function() {
        let id = this.id;
        if(answered.includes(id))
        {
            console.log("already clicked");
            return false;
        }else{
            console.log("Clicked " + id);
            checkAnswer(id)
            checkGameState();
        }
    }));
}

function createTest(question) {
    let element = document.getElementById("questions");
    let th = document.createElement('th');
    let tr = document.createElement('tr');
    th.setAttribute("id", question.id)
    th.innerHTML = question.question;
    
    td1 = document.createElement('td');
    td1.innerHTML = question.answers[0]
    td1.setAttribute("class", "td-answers")
    td1.setAttribute("id", question.id + "-" + question.answers[0])
    th.appendChild(td1); 

    td2 = document.createElement('td');
    td2.innerHTML = question.answers[1];
    td2.setAttribute("class", "td-answers")
    td2.setAttribute("id", question.id + "-" + question.answers[1])
    th.appendChild(td2);

    td3 = document.createElement('td');
    td3.innerHTML = question.answers[2];
    td3.setAttribute("class", "td-answers")
    td3.setAttribute("id", question.id + "-" + question.answers[2])
    th.appendChild(td3);

    tr.appendChild(th);
    element.appendChild(tr);
  }

function checkAnswer(id){
    const correctAnswers = ["0-Federal", "1-Cleveland", "2-New York City"];
    answered.push(id);
    let right = "";

    for(i=0; i <= correctAnswers.length-1; i++){
        if(answered.includes(id.substring(0,1))){
            console.log("cannot continue");
        }
        else{
            if (id === correctAnswers[i]){
                right = "right";
            }
        }
    }

    if(right === "right"){
        score++;
        let rightStyle = document.getElementById(id.substring(0,1));
        rightStyle.classList.add("right");
    }else{
       let wrongStyle = document.getElementById(id.substring(0,1));
       wrongStyle.classList.add("wrong");
    }

    answers++;
    console.log("right: " + score + " answered: " + answers);
}

function checkGameState(){
    if(answers === 3) { 
        var test = document.getElementById("test");
        test.innerHTML = "YOU GOT " + score + " CORRECT!"
    }
}
