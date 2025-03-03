let humanScore = 0
let compScore = 0

const rockBtn = document.querySelector('#R')
const paperBtn = document.querySelector('#P')
const scissorsBtn = document.querySelector('#S')

const scoreDispaly = document.querySelector("#scoreDis")

const currentRound = document.querySelector("#currentRound")

rockBtn.addEventListener("click", rockSelected)
function rockSelected(){
    let temp = getCompChoice()
    playRound("rock", temp)
}

paperBtn.addEventListener("click", paperSelected)
function paperSelected(){
    let temp = getCompChoice()
    playRound("paper", temp)
}

scissorsBtn.addEventListener("click", scissorsSelected)
function scissorsSelected(){
    let temp = getCompChoice()
    playRound("scissors", temp)
}

function playRound(humanChoice,compChoice){

    if(humanChoice == compChoice){
        console.log("it is tie")
        currentRound.innerText = "It Is Tie"
    }else if(humanChoice == "rock" && compChoice == "scissors"){
        console.log("human won")
        humanScore++
        scoreDispaly.innerText = `Human : ${humanScore} - ${compScore} : Computer`
        currentRound.innerText = "You Win"
    }else if(humanChoice == "paper" && compChoice == "rock"){
        console.log("human won")
        humanScore++
        scoreDispaly.innerText = `Human : ${humanScore} - ${compScore} : Computer`
        currentRound.innerText = "You Win"
    }else if(humanChoice == "scissors" && compChoice == "paper"){
        console.log("human won")
        humanScore++
        scoreDispaly.innerText = `Human : ${humanScore} - ${compScore} : Computer`
        currentRound.innerText = "You Win"
    }else{
        console.log("human lose")
        compScore++
        scoreDispaly.innerText = `Human : ${humanScore} - ${compScore} : Computer`
        currentRound.innerText = "You lose"
    }
    console.log("human score:" + humanScore)
    console.log("comp score:" + compScore)
}

function getCompChoice(){
    let compChoice = getRandomInt(3)
    switch(compChoice){
        case 0:
            compChoice = "rock"
            break;
        case 1:
            compChoice = "paper"
            break;
        case 2:
            compChoice = "scissors"
            break;
    }
    return compChoice
}

function getRandomInt (max){
    return Math.floor(Math.random()*max)
}