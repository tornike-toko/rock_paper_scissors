console.log(getHumanChoice())

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