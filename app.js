console.log('javascript is running!');

let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
let scoreBoard_div = document.querySelector('.scoreBoard');
let result_div = document.querySelector('.result > p');

let rock_div = document.getElementById('rock');
let paper_div = document.getElementById('paper');
let scissor_div = document.getElementById('scissor');

function correct(word){
    switch(word){
        case 'rock': return 'Rock'; 
        case 'paper': return'Paper'; 
        case 'scissor': return'Scissor';
    }
}

function win(userChoice, computerChoice){
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
let smallWord = 'user'.fontsize(3).sub();
let smallWord2 = 'comp'.fontsize(3).sub();
result_div.innerHTML = ` ${correct(userChoice)}${smallWord}  beats  ${correct(computerChoice)}${smallWord2}.  You win!`;
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(function () {document.getElementById(userChoice).classList.remove('green-glow')}, 300);

}

function loose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    let smallWord = 'user'.fontsize(3).sub();
    let smallWord2 = 'comp'.fontsize(3).sub();
    result_div.innerHTML = ` ${correct(userChoice)}${smallWord}  looses to  ${correct(computerChoice)}${smallWord2}.  You loose...Try again? `;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

function Draw(userChoice, computerChoice){
    let smallWord = 'user'.fontsize(3).sub();
    let smallWord2 = 'comp'.fontsize(3).sub();
    result_div.innerHTML = ` ${correct(userChoice)}${smallWord}  is the same as  ${correct(computerChoice)}${smallWord2}.  You draw!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')}, 300);
}

function game(userChoice){
    let computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){

        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
        win(userChoice, computerChoice); 
        break; 
        
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
        loose(userChoice, computerChoice); 
        break; 

        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
        Draw(userChoice, computerChoice);
        break; 
    }
}

function getComputerChoice(){
    let choices = ['rock', 'paper','scissor']
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function choiceMade(){

    rock_div.addEventListener('click',() => game('rock'));

    paper_div.addEventListener('click',() => game('paper'));

    scissor_div.addEventListener('click',() => game('scissor'));

}

choiceMade();

