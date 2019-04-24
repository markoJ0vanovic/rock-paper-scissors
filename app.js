let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function  getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissors";
    if (letter === "p") return "Paper";
}

function win(userChoice, computerChoice) {
    const smallTextU = "user".fontsize(4).sup();
    const smallTextC = "comp".fontsize(4).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallTextU} beats ${convertToWord(computerChoice)}${smallTextC}. You WIN!🔥`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() =>  userChoice_div.classList.remove('green-glow') , 350);
}

function lose(userChoice, computerChoice) {
    const smallTextU = "user".fontsize(4).sup();
    const smallTextC = "comp".fontsize(4).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallTextU} loses to ${convertToWord(computerChoice)}${smallTextC}. You LOSE!`;
    userChoice_div.classList.add("red-glow");
    setTimeout( () => userChoice_div.classList.remove('red-glow') , 350);
}

function draw(userChoice, computerChoice) {
    const smallTextU = "user".fontsize(4).sup();
    const smallTextC = "comp".fontsize(4).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallTextU} equals ${convertToWord(computerChoice)}${smallTextC}. its a DRAW!`;
    userChoice_div.classList.add("orange-glow");
    setTimeout(() =>  userChoice_div.classList.remove('orange-glow') , 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs" :
        case "pr" :
        case "sp" :
            win(userChoice, computerChoice);
            break;
        case "rp" :
        case "ps" :
        case "sr" :
            lose(userChoice, computerChoice);
            break;
        case "rr" :
        case "ss" :
        case "pp" :
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
rock_div.addEventListener("click", () => {
    game("r");
});

paper_div.addEventListener("click",  () => {
    game("p")
});

scissors_div.addEventListener("click",  () => {
    game("s")
})
}

main();