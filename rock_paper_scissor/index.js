let userCount = 0;
let compCount = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const getCompChoice = () => {
    const choose = ["rock", "paper", "scissior"];
    const idx = Math.floor(Math.random() * 3);
    return choose[idx];
}
const drawGame = () => {
    msg.innerText = `Game Was Drawn`
    msg.style.backgroundColor = "#192a56"
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win! You ${userChoice} beat ${compChoice}`
        msg.style.backgroundColor = "green"
        userCount++;
        userScore.innerText = userCount;
    }
    else {
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
        compCount++;
        compScore.innerText = compCount;
    }
}
const playGame = (userChoice) => {
    let compChoice = getCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        // rock
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
            // paper
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissior" ? false : true;
            // scissior
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})