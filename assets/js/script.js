/**
 * Dom content to load. 
 * Hide the Game page and load Landing page 
 */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("gamePage").style.display = 'none';
    document.getElementById("landingPage").style.display = 'block';
    document.getElementById("name").focus();
})

function loadGame() {
    username = document.getElementById("name").value;
    document.getElementById("playerName").innerHTML = username;
    document.getElementById("landingPage").style.display = 'none';
    document.getElementById("gamePage").style.display = 'block';
}

    document.getElementById("name").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        loadGame () 
    }
})

    document.getElementById("submit").onclick = function loadGame() {
        username = document.getElementById("name").value;
        document.getElementById("playerName").innerHTML = username;
        document.getElementById("landingPage").style.display = 'none';
        document.getElementById("gamePage").style.display = 'block';
}

let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

function getComputerChoice() {
    const controls = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return controls[randomNumber];
}

function win(playerChoice, computerChoice) {
    ++playerScore;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You win 🎉! ${convertWord(playerChoice)} beats ${convertWord(computerChoice)}`;
    playerScore_span.classList.add('win-green');
    setTimeout(function() {playerScore_span.classList.remove('win-green')}, 250);
}

function lose(playerChoice, computerChoice) {
    ++computerScore;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You lose 👎! ${convertWord(playerChoice)} loses to ${convertWord(computerChoice)}`;
    computerScore_span.classList.add('lose-red');
    setTimeout(function() {computerScore_span.classList.remove('lose-red')}, 250);
}

function draw(playerChoice, computerChoice) {
    result_p.innerHTML = `It's a draw 😐! ${convertWord(playerChoice)} is ${convertWord(computerChoice)}`;
}

function convertWord(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
    if (word === "lizard") return "Lizard";
    return "Spock";
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorspaper":
        case "scissorslizard":
        case "lizardspock":
        case "lizardpaper":
            win(playerChoice, computerChoice);
            break;
        case "rockpaper":
        case "rockspock":
        case "paperscissors":
        case "paperlizard":
        case "scissorsspock":
        case "scissorsrock":
        case "lizardrock":
        case "lizardscissors":
        case "spockpaper":
        case "spocklizard":
            lose(playerChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw(playerChoice, computerChoice);
            break;
    }
}

function main() {
rock_div.addEventListener('click', function() {
    game("rock");
})

paper_div.addEventListener('click', function() {
    game("paper");
})

scissors_div.addEventListener('click', function() {
    game("scissors");
})

lizard_div.addEventListener('click', function() {
    game("lizard");
})

spock_div.addEventListener('click', function() {
    game("spock");
})
}

main();