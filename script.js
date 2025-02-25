let humanScore = 0
let compScore = 0

playRound()

function playRound(humanChoice,compChoice){
    humanChoice = getHumanChoice()
    compChoice = getCompChoice()

    if(humanChoice == compChoice){
        console.log("it is tie")
    }else if(humanChoice == "rock" && compChoice == "scissors"){
        console.log("human won")
        humanScore++
    }else if(humanChoice == "paper" && compChoice == "rock"){
        console.log("human won")
        humanScore++
    }else if(humanChoice == "scissors" && compChoice == "paper"){
        console.log("human won")
        humanScore++
    }else{
        console.log("human lose : comp won")
        compScore++
    }
    console.log("human score:" + humanScore)
    console.log("comp score:" + compScore)
}


function getHumanChoice(){
    let humanChoice = prompt("input your choice : rock, paper, scissors")
    return humanChoice.toLocaleLowerCase()
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