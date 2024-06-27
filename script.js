


const computerChoices = ["rock","scissors","paper"];

let humanScore      = 0 ;
let computerScore   = 0 ;


function getComputerChoice (){
    let index = parseInt(Math.random()*3);
    return computerChoices[index];

}


function getHumanChoice (){
   return (prompt('enter value'));
}




function playRound(humanChoice,computerChoice){
    if(humanChoice){
        humanChoice = humanChoice.toLowerCase();

    }

// between rock and paper
    if(humanChoice == "paper" && computerChoice == "rock")
    {
        humanScore ++;
        console.log(" you win paper beats rock");
    }



    else if(humanChoice == "rock" && computerChoice == "paper")
    {
            computerScore ++;
            console.log(" you lose paper beats rock");
    }


// between rock and scissors
    else if(humanChoice == "rock" && computerChoice == "scissors")
    {
        humanScore ++;
        console.log(" you win rock beats scissors");

    }


    else if(humanChoice == "scissors" && computerChoice == "scissors")
    {
        computerScore ++;
        console.log(" you lose rock beats scissors");
    
    }


// between  paper and scissors
    else if(humanChoice == "paper" && computerChoice == "scissors")
    {
        computerScore++;
        console.log("you lose  scissors beats paper");

    }

    else if(humanChoice == "scissors" && computerChoice == "paper")
        {
            humanScore++;
            console.log("you lose  scissors beats paper");
    
        }


// similar choice or un known human input
   else if(humanChoice == computerChoice){
    console.log("similar choices")
   }
   else{
    console.log("comparison failure")
   }



    
}

// 5 round game
function playGame(){

    for(i = 0; i < 5; i++){
        let humanSelection    = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    
    }
    console.log("computer score "+computerScore,"human score "+humanScore)


}

playGame();

