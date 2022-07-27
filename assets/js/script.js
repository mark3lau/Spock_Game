/**
 * Dom content to load. 
 * Hide the Game page and load Landing page 
 * until submit has been entered or clicked
 */

const controlsEasy = ["rock", "paper", "scissors", "lizard", "spock"];
const controlsHard = ["rock", "paper", "scissors", "lizard", "spock", "love", "devil"];
let controls = [];
let inputName = document.getElementById("inputName").addEventListener("keydown", loadLevels);
let levels = document.getElementById("levels");
let easySubmit = document.getElementById("easySubmit").addEventListener("click", loadEasyGame);
let hardSubmit = document.getElementById("hardSubmit").addEventListener("click", loadHardGame);
let buttons = document.getElementsByTagName("button");
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
let beepWin = new Audio ("assets/sounds/win_retro-arcade-audio.wav");
let beepLose = new Audio ("assets/sounds/lose_retro-arcade-audio.wav");

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("gamePage").style.display = "none";
    levels.style.display = "none";
    document.getElementById("landingPage").style.display = "block";
    document.getElementById("inputName").focus();
    main();
});

function loadLevels() {
        levels.style.display = "block";
}

for (let button of buttons) {
if (easySubmit === true) {
        loadEasyGame();
    } else {
        loadHardGame();
    }
}

function loadEasyGame() {
    let username = document.getElementById("inputName").value;
    controls = controlsEasy;
    document.getElementById("playerName").innerHTML = username;
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
    document.getElementById("love").style.display = "none";
    document.getElementById("devil").style.display = "none";
}

function loadHardGame() {
    let username = document.getElementById("inputName").value;
    controls = controlsHard;
    document.getElementById("playerName").innerHTML = username;
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
    document.getElementById("love").style.display = "inline";
    document.getElementById("devil").style.display = "inline";
}

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
    });
    
    devil_span.addEventListener("click", function() {
        game("devil");
    });
}

/**
 * Change the choice word of the 
 * result display message
 */

function changeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Generate random computer choice
 */

function getComputerChoice() {
    return controls[Math.floor(Math.random() * controls.length)];
}

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
    setTimeout(function() {playerScore_span.classList.remove("win-green");}, 250);
    beepWin.play();
}

function lose(playerChoice, computerChoice) {
    ++computerScore;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You lose 👎! ${changeWord(playerChoice)} loses to ${changeWord(computerChoice)}`;
    computerScore_span.classList.add("lose-red");
    setTimeout(function() {computerScore_span.classList.remove("lose-red");}, 250);
    beepLose.play();
}

function draw(playerChoice, computerChoice) {
    result_p.innerHTML = `It's a draw 😐! ${changeWord(playerChoice)} is ${changeWord(computerChoice)}`;
}
    
/**
 * Define the game results between
 * player choice and computer choice
 */

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        return draw(playerChoice, computerChoice);
    } else if (playerChoice === "rock" && (
            computerChoice === "scissors"||
            computerChoice === "lizard"||
            computerChoice === "devil")) {
        return win(playerChoice, computerChoice);
    } else if (playerChoice === "paper" && (
            computerChoice === "spock"||
            computerChoice === "love"||
            computerChoice === "rock")) {
        return win(playerChoice, computerChoice);
    } else if (playerChoice === "scissors" && (
            computerChoice === "love"||
            computerChoice === "paper"||
            computerChoice === "lizard")) {
        return win(playerChoice, computerChoice);
    } else if (playerChoice === "lizard" && (
            computerChoice === "love"||
            computerChoice === "paper"||
            computerChoice === "spock")) {
        return win(playerChoice, computerChoice);
    } else if (playerChoice === "spock" && (
            computerChoice === "rock"||
            computerChoice === "scissors"||
            computerChoice === "devil")) {
        return win(playerChoice, computerChoice);
    } else if (playerChoice === "love" && (
            computerChoice === "spock"||
            computerChoice === "rock"||
            computerChoice === "devil")) {
        return win(playerChoice, computerChoice);
    } else if (playerChoice === "devil" && (
            computerChoice === "paper"||
            computerChoice === "scissors"||
            computerChoice === "lizard")) {
        return win(playerChoice, computerChoice);
    } else {
        return lose(playerChoice, computerChoice);
    }
}