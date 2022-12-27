function getComputerChoice() {
    let choice=Math.floor(Math.random()*3);
    let options=["Rock","Paper","Scissor"];
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection==="rock"&&computerSelection==="scissor")||(playerSelection==="paper"&&computerSelection==="rock")||(playerSelection=="scissor"&&computerSelection==="paper")) {
        round.innerText="You Win! "+playerSelection+" beats "+computerSelection;
        return "Win";
    } else if (playerSelection===computerSelection) {
        round.innerText="Draw! both selected "+playerSelection;
        //console.log("Draw! both selected "+playerSelection);
        return "Draw";
    } else {
        round.innerText="You Lose! "+computerSelection+" beats "+playerSelection;
        return "Lose";
    }
}

//scores[0]==player and scores[1]==cpu
function getScore(results) {
    var scores=[0,0];
    for (let index=0;index < results.length; index++) {
        if (results[index]==="Win") {
            scores[0]++;
        } else if (results[index]==="Lose"){
            scores[1]++;
        }
    }
    return scores;
}

function displayPendingScore(scores) {
    if (scores[0]>scores[1]) {
        score.innerText="player score:"+scores[0]+" computer score:"+scores[1];     
    } else if (scores[1]>scores[0]) {
        score.innerText="player score:"+scores[0]+" computer score:"+scores[1];
    } else {
        score.innerText="player score:"+scores[0]+" computer score:"+scores[1];
    }
}

function displayFinalScore(scores) { 
    if (scores[0]>scores[1]) {
        score.innerText="You won.......player score:"+scores[0]+" computer score:"+scores[1];
    } else if (scores[1]>scores[0]) {
        score.innerText="You lost.......player score:"+scores[0]+" computer score:"+scores[1];
    } else {
        score.innerText="You drew.......player score:"+scores[0]+" computer score:"+scores[1];
    }
}

//DOM INITIALIZATION
//styling
const container2=document.createElement('div');
const scoreContainer=document.createElement('div');
const tryContainer=document.createElement('div');

const container=document.createElement('div');
container.setAttribute('id','container');
const rock=document.createElement('button');
rock.setAttribute('class','button');
const paper=document.createElement('button');
paper.setAttribute('class','button');
const scissors=document.createElement('button');
scissors.setAttribute('class','button');
container.addEventListener('click',game);

const body=document.getElementsByTagName('body');
container2.appendChild(rock);
container2.appendChild(paper);
container2.appendChild(scissors);
container.appendChild(container2);
document.body.appendChild(container);

const round=document.createElement('div');
scoreContainer.appendChild(round);
const score=document.createElement('div');
scoreContainer.appendChild(score);
container.appendChild(scoreContainer);

const tryAgain=document.createElement('button');
tryAgain.innerText="TRY AGAIN";
tryContainer.appendChild(tryAgain);
container.appendChild(tryContainer);
tryAgain.style.display="none";

//styling

function styling(){
    //background and rock,paper,scissor
    container2.style.display="flex";
    container2.style.alignItems="center";
    container2.style.justifyContent="center";
    container2.style.marginTop="130px";
    rock.innerHTML='<img id="rock" class="image" height="150px" width="150px" src="images/My Rock.jpg">';
    paper.innerHTML='<img id="paper" class="image" height="150px" width="150px" src="images/My Paper.jpg">';
    scissors.innerHTML='<img id="scissor" class="image" height="150px" width="150px" src="images/My Scissor.jpg">';
    var buttons=document.querySelectorAll(".button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.padding="0px";
        buttons[i].style.margin="10px 40px";
        buttons[i].addEventListener('mouseover',()=>buttons[i].style.transform="scale(1.5)");
        buttons[i].addEventListener('mouseout',()=>buttons[i].style.transform="scale(1)");
    }
    document.body.style.backgroundImage="url('images/pexels-photo-247671.jpeg')";
    document.body.style.backgroundSize="cover";

    //score state and final result
    scoreContainer.style.display="flex";
    scoreContainer.style.flexDirection="column";
    scoreContainer.style.alignItems="center";
    container2.style.justifyContent="center";
    scoreContainer.style.margin="40px 350px";
    scoreContainer.style.backgroundColor="silver";

    tryContainer.style.display="flex";
    tryContainer.style.alignItems="center";
    tryContainer.style.justifyContent="center";
}

function tryAgainToggle() {
    if (tryAgain.style.display=="none") {
        tryAgain.style.display="block";
        tryAgain.addEventListener('click',activate);
    } else {
        tryAgain.style.display="none";
    }
}

function deactivate() {
    container.removeEventListener('click',game);
}

function activate() {
    tryAgain.style.display="none";
    container.addEventListener('click',game);
}

var results=[];
var reseter=[];

function game(e) {
    var scores=[0,0];
    const playerSelection=e.target.id.toString();
    console.log(e.target.id);
    if (!playerSelection) return;
    let computerSelection=getComputerChoice().toLowerCase();
    results.push(playRound(playerSelection,computerSelection));
    scores=getScore(results);
    if (scores[0] < 5 && scores[1] < 5) {
        displayPendingScore(scores);
    } else {
        displayFinalScore(scores);
        results=[];
        scores=[0,0];
        tryAgainToggle();
        deactivate();
    }
}

styling();
container.addEventListener('click',game);
