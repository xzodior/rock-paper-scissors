const userScore_span = document.getElementById('userscore-span')
const computerScore_span = document.getElementById('computerscore-span')
const results_div = document.querySelector('#results > p')
const rock_btn = document.getElementById('rock')
const paper_btn = document.getElementById('paper')
const scissors_btn = document.getElementById('scissors')

rock_btn.addEventListener('click', function(){
        console.log('You clicked rock');
        if (playerScore === 5 || computerScore === 5){
                return alert('GAME OVER!')
        } else{
                playRound('rock');  
        }
        
})

paper_btn.addEventListener('click', function(){
        console.log('You clicked paper');
        if (playerScore === 5 || computerScore === 5){
                return alert('GAME OVER!')
        } else{
                playRound('paper');  
        }
})

scissors_btn.addEventListener('click', function(){
        console.log('You clicked scissors');
        if (playerScore === 5 || computerScore === 5){
                return alert('GAME OVER!')
        } else{
                playRound('scissors');  
        }
})


let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let choice = ['rock', 'paper', 'scissors']
    let randChoice = choice[Math.floor(Math.random()*choice.length)];
    return randChoice;
};

function playRound (userChoice){
    let selection = userChoice;
    let computerSelection = computerPlay();
    let result;
    if (selection == 'rock' && computerSelection === 'scissors' || selection === 'paper' && computerSelection === 'rock' || selection === 'scissors' && computerSelection ==='paper'){
            result = 'You Win! ' + selection + ' beats ' + computerSelection;
            'Player score: ' + playerScore + ' Computer score: ' + computerScore;
            win(userChoice, computerSelection);
    } else if (selection === 'rock' && computerSelection === 'paper' || selection === 'paper' && computerSelection ==='scissors' || selection === 'scissors' && computerSelection === 'rock'){
            result = 'You Lose! ' + computerSelection + ' beats ' + selection;
            'Player score: ' + playerScore + ' Computer score: ' + computerScore;
            lose(userChoice, computerSelection);
    } else {
            result = 'Draw';
            draw();
    }
    
};

function win(userChoice, computerSelection) { 
        playerScore++;
        userScore_span.innerHTML = playerScore;
        results_div.innerHTML = `${userChoice} beats ${computerSelection}. You Win!`;
        if (playerScore === 5) {
                results_div.innerHTML = 'Player Wins!'; 
        }
}

function lose(userChoice, computerSelection) {
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        results_div.innerHTML = `${computerSelection} beats ${userChoice}. You Lose!`; 
        if (computerScore === 5) {
                results_div.innerHTML = 'Computer Wins!';
        }
}

function draw() {
        playerScore += 0;
        computerScore += 0;
        results_div.innerHTML = 'Draw';
}