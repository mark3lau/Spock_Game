/**
 * Dom content to load. 
 * Hide the Game page and load Landing page 
 * until submit has been entered or clicked
 */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("landingPage").style.display = "block";
    document.getElementById("inputName").focus();
});

let easySubmit = document.getElementById("easySubmit").addEventListener("click", loadEasyGame);
let hardSubmit = document.getElementById("hardSubmit").addEventListener("click", loadHardGame);
let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
if (easySubmit = true) {
        loadEasyGame();
    } else {
        loadHardGame();
    }
};

function loadEasyGame() {
    let username = document.getElementById("inputName").value;
    document.getElementById("playerName").innerHTML = username;
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
    document.getElementById("love").style.display = "none";
    document.getElementById("devil").style.display = "none";
};

function loadHardGame() {
    let username = document.getElementById("inputName").value;
    document.getElementById("playerName").innerHTML = username;
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
    document.getElementById("love").style.display = "block";
    document.getElementById("devil").style.display = "block";
};

let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("playerScore");
let computerScore_span = document.getElementById("computerScore");
let result_p = document.querySelector(".result > p");
let rock_span = document.getElementById("rock");
let paper_span = document.getElementById("paper");
let scissors_span = document.getElementById("scissors");
let lizard_span = document.getElementById("lizard");
let spock_span = document.getElementById("spock");
let love_span = document.getElementById("love");
let devil_span = document.getElementById("devil");
let beepWin = new Audio ("assets/sounds/win_mixkit-retro-game-notification-212.wav");
let beepLose = new Audio ("assets/sounds/lose_mixkit-retro-arcade-game-over-470.wav");

let controlsEasy = ["rock", "paper", "scissors", "lizard", "spock"];
let controlsHard = ["rock", "paper", "scissors", "lizard", "spock", "love", "devil"];

/**
 * Add event listeners for
 * player choices
 */

function main() {
    rock_span.addEventListener("click", function() {
        game("rock");
    });
    
    paper_span.addEventListener("click", function() {
        game("paper");
    });
    
    scissors_span.addEventListener("click", function() {
        game("scissors");
    });
    
    lizard_span.addEventListener("click", function() {
        game("lizard");
    });
    
    spock_span.addEventListener("click", function() {
        game("spock");
    });
    
    love_span.addEventListener("click", function() {
        game("love");
    })
    
    devil_span.addEventListener("click", function() {
        game("devil");
    })
};

main();

/**
 * Change the choice word of the 
 * result display message
 */

function changeWord(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
    if (word === "lizard") return "Lizard";
    if (word === "spock") return "Spock";
    if (word === "love") return "Love";
    return "Devil";
};

/**
 * Generate random computer choice
 */

let 

function getComputerChoice(loadEasyGame, loadHardGame) {
    if (loadEasyGame) {
        const randomNumber = Math.floor(Math.random() * controlsEasy.length);
        return controlsEasy[randomNumber];
    } else (loadHardGame);
        const randomNumber = Math.floor(Math.random() * controlsHard.length);
        return controlsHard[randomNumber];
};

/**
 * Functions for win, lose and draw and 
 * their results
 */

function win(playerChoice, computerChoice) {
    ++playerScore;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You win 🎉! ${changeWord(playerChoice)} beats ${changeWord(computerChoice)}`;
    playerScore_span.classList.add("win-green");
    setTimeout(function() {playerScore_span.classList.remove("win-green")}, 250);
    beepWin.play();
};

function lose(playerChoice, computerChoice) {
    ++computerScore;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You lose 👎! ${changeWord(playerChoice)} loses to ${changeWord(computerChoice)}`;
    computerScore_span.classList.add("lose-red");
    setTimeout(function() {computerScore_span.classList.remove("lose-red")}, 250);
    beepLose.play();
};

function draw(playerChoice, computerChoice) {
    result_p.innerHTML = `It's a draw 😐! ${changeWord(playerChoice)} is ${changeWord(computerChoice)}`;
};
    
/**
 * Define the game results between
 * player choice and computer choice
 */

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "rocklizard":
    case "rockdevil":
    case "paperrock":
    case "paperspock":
    case "paperlove":
    case "scissorspaper":
    case "scissorslizard":
    case "scissorslove":
    case "lizardspock":
    case "lizardpaper":
    case "lizardlove":
    case "lovespock":
    case "loverock":
    case "lovedevil":
    case "devilpaper":
    case "devilscissors":
    case "devillizard":
        win(playerChoice, computerChoice);
        break;
    case "rockpaper":
    case "rockspock":
    case "rocklove":
    case "paperscissors":
    case "paperlizard":
    case "paperdevil":
    case "scissorsspock":
    case "scissorsrock":
    case "scissorsdevil":
    case "lizardrock":
    case "lizardscissors":
    case "lizarddevil":
    case "spockpaper":
    case "spocklizard":
    case "spocklove":
    case "lovepaper":
    case "lovescissors":
    case "lovelizard":
    case "devillove":
    case "devilspock":
    case "devilrock":
        lose(playerChoice, computerChoice);
        break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
    case "lovelove":
    case "devildevil":
        draw(playerChoice, computerChoice);
        break;
    }
}; 
