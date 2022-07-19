/**
 * Dom content to load. 
 * Hide the Game page and load Landing page 
 * until submit has been entered or clicked
 */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("gamePage").style.display = 'none';
    document.getElementById("landingPage").style.display = 'block';
    document.getElementById("name").focus();
});

function loadGame() {
    let username = document.getElementById("name").value;
    document.getElementById("playerName").innerHTML = username;
    document.getElementById("landingPage").style.display = 'none';
    document.getElementById("gamePage").style.display = 'block';
};

    document.getElementById("name").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        loadGame (); 
    }
});

    document.getElementById("submit").onclick = function loadGame() {
        username = document.getElementById("name").value;
        document.getElementById("playerName").innerHTML = username;
        document.getElementById("landingPage").style.display = 'none';
        document.getElementById("gamePage").style.display = 'block';
};

/**
 * Cached the DOM
 */
let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const result_p = document.querySelector(".result > p");
const rock_span = document.getElementById("rock");
const paper_span = document.getElementById("paper");
const scissors_span = document.getElementById("scissors");
const lizard_span = document.getElementById("lizard");
const spock_span = document.getElementById("spock");
const love_span = document.getElementById("love");
const devil_span = document.getElementById("devil");

/**
 * Generate random easy computer choice
 */

function getComputerChoiceEasy() {
    const controls = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return controls[randomNumber];
};

/**
 * Functions for win, lose and draw and 
 * their results
 */

function win(playerChoiceEasy, computerChoiceEasy) {
    ++playerScore;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You win 🎉! ${changeWord(playerChoiceEasy)} beats ${changeWord(computerChoiceEasy)}`;
    playerScore_span.classList.add('win-green');
    setTimeout(function() {playerScore_span.classList.remove('win-green')}, 250);
};

function lose(playerChoiceEasy, computerChoiceEasy) {
    ++computerScore;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You lose 👎! ${changeWord(playerChoiceEasy)} loses to ${changeWord(computerChoiceEasy)}`;
    computerScore_span.classList.add('lose-red');
    setTimeout(function() {computerScore_span.classList.remove('lose-red')}, 250);
};

function draw(playerChoiceEasy, computerChoiceEasy) {
    result_p.innerHTML = `It's a draw 😐! ${changeWord(playerChoiceEasy)} is ${changeWord(computerChoiceEasy)}`;
};

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
 * Define the game results between
 * player choice and computer choice
 */

function game(playerChoiceEasy) {
    const computerChoiceEasy = getComputerChoiceEasy();
    switch (playerChoiceEasy + computerChoiceEasy) {
        case "rockscissors":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorspaper":
        case "scissorslizard":
        case "lizardspock":
        case "lizardpaper":
            win(playerChoiceEasy, computerChoiceEasy);
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
            lose(playerChoiceEasy, computerChoiceEasy);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw(playerChoiceEasy, computerChoiceEasy);
            break;
    }
};

/**
 * Add event listeners for
 * player choices
 */

function main() {
rock_span.addEventListener('click', function() {
    game("rock");
});

paper_span.addEventListener('click', function() {
    game("paper");
});

scissors_span.addEventListener('click', function() {
    game("scissors");
});

lizard_span.addEventListener('click', function() {
    game("lizard");
});

spock_span.addEventListener('click', function() {
    game("spock");
});

love_span.addEventListener('click', function() {
    game("love");
})

devil_span.addEventListener('click', function() {
    game("devil");
})

};

main();

/**
 * Love and Devil level - Game page
 */

/**
 * Generate random computer choice
 */

 function getComputerChoiceHard() {
    const controls = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'love', 'devil'];
    const randomNumber = Math.floor(Math.random() * 7);
    return controls[randomNumber];
};

/**
 * Functions for win, lose and draw and 
 * their results
 */

 function win(playerChoiceHard, computerChoiceHard) {
    ++playerScore;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You win 🎉! ${changeWord(playerChoiceHard)} beats ${changeWord(computerChoiceHard)}`;
    playerScore_span.classList.add('win-green');
    setTimeout(function() {playerScore_span.classList.remove('win-green')}, 250);
};

function lose(playerChoiceHard, computerChoiceHard) {
    ++computerScore;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You lose 👎! ${changeWord(playerChoiceHard)} loses to ${changeWord(computerChoiceHard)}`;
    computerScore_span.classList.add('lose-red');
    setTimeout(function() {computerScore_span.classList.remove('lose-red')}, 250);
};

function draw(playerChoiceHard, computerChoiceHard) {
    result_p.innerHTML = `It's a draw 😐! ${changeWord(playerChoiceHard)} is ${changeWord(computerChoiceHard)}`;
};

/**
 * Define the game results between
 * player choice and computer choice
 */

 function game(playerChoiceHard) {
    const computerChoiceHard = getComputerChoiceHard();
    switch (playerChoiceHard + computerChoiceHard) {
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
            win(playerChoiceHard, computerChoiceHard);
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
            lose(playerChoiceHard, computerChoiceHard);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
        case "lovelove":
        case "devildevil":
            draw(playerChoiceHard, computerChoiceHard);
            break;
    }
};


