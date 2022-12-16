function getComputerChoice() {
    let choice=Math.floor(Math.random()*3);
    let options=["Rock","Paper","Scissor"];
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection==="rock"&&computerSelection==="scissor")||(playerSelection==="paper"&&computerSelection==="rock")||(playerSelection=="scissor"&&computerSelection==="paper")) {
        console.log("You Win! "+playerSelection+" beats "+computerSelection);
        return "Win";
    } else if (playerSelection===computerSelection) {
        console.log("Draw! both selected "+playerSelection);
        return "Draw";
    } else {
        console.log("You Lose! "+computerSelection+" beats "+playerSelection);
        return "Lose";
    }
}

function game() {
    let results=[];
    for (let i = 0; i < 5; i++) {
        let computerSelection=getComputerChoice().toLowerCase();
        let playerSelection=prompt("Choose between rock,paper or scissors").toLowerCase();
        console.log("For round"+(i+1));
        results.push(playRound(playerSelection,computerSelection));       
    }
    let player=0,cpu=0;
    for (let index = 0; index < 5; index++) {
        if (results[index]==="Win") {
            player++;
        } else if (results[index]==="Lose"){
            cpu++;
        }
    }
    if (player>cpu) {
        console.log("You won.......player score:"+player+" computer score:"+cpu);
    } else if (cpu>player) {
        console.log("You lost.......player score:"+player+" computer score:"+cpu);
    } else {
        console.log("You drew.......player score:"+player+" computer score:"+cpu);
    }
}



console.log(game());