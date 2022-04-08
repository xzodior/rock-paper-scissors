let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let choice = ['rock', 'paper', 'scissors']
    let randChoice = choice[Math.floor(Math.random()*choice.length)];
    return randChoice;
};

function playRound (playerSelection){
    let selection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    let result;
    if (selection == 'rock' && computerSelection === 'scissors' || selection === 'paper' && computerSelection === 'rock' || selection === 'scissors' && computerSelection ==='paper'){
            alert(result = 'You Win! ' + selection + ' beats ' + computerSelection);
            playerScore +=1;
            alert('Player score: ' + playerScore + ' Computer score: ' + computerScore);
    } else if (selection === 'rock' && computerSelection === 'paper' || selection === 'paper' && computerSelection ==='scissors' || selection === 'scissors' && computerSelection === 'rock'){
            alert(result = 'You Lose! ' + computerSelection + ' beats ' + selection);
            computerScore +=1;
            alert('Player score: ' + playerScore + ' Computer score: ' + computerScore);
    } else {
            alert(result = 'Draw');
    }
};

let playerSelection = prompt('rock, paper or scissors?', '');
playRound(playerSelection);

/*
function isGameOver(){
        if(playerScore > computerScore){
                return alert(`Player Wins! Player score: ${playerScore} | Computer score: ${computerScore}`);
        } else if (computerScore > playerScore){
                return alert(`Computer Wins! Player score: ${playerScore} | Computer score: ${computerScore}`);
        } else{
                return alert(`Game ends in a tie!`)
        }
}; 
*/