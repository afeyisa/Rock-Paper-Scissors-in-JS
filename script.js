


const computerChoices = ["rock","scissors","paper"];

let humanScore      = 0;
let computerScore   = 0;
let round           = 0;



const body = document.getElementById("body");
// where human score get displayed
const human = document.createElement("div");
const humanScoreNode = document.createTextNode("you score "+humanScore);
human.appendChild(humanScoreNode);
human.setAttribute("style", " padding:10px; border-radius: 4px; margin-bottom:10px; height: 40px; width: 80%;  background: green;");


// where computer score get displayed
const computer = document.createElement("div");
const computerScoreNode = document.createTextNode(`computer score `+computerScore);
computer.appendChild(computerScoreNode);
computer.setAttribute("style","padding:10px; border-radius: 4px; margin-bottom:10px; height: 40px; width: 80%;  background: green;");

//where message get displayed
const message = document.createElement("div");
const messageNode = document.createTextNode(`message`);
message.appendChild(messageNode);
message.setAttribute("style","padding:10px; border-radius: 4px; margin-bottom:100px; height: 40px; width: 80%;  background: green;");



const bodys_child = document.getElementById("buttons");
body.insertBefore(human,bodys_child);
body.insertBefore(computer,bodys_child);
body.insertBefore(message,bodys_child);


function getComputerChoice (){
    let index = parseInt(Math.random()*3);
    return computerChoices[index];

}


function playRound(humanChoice,computerChoice){

            if(humanChoice){
                humanChoice = humanChoice.toLowerCase();

            }

        // between rock and paper
            if(humanChoice == "paper" && computerChoice == "rock")
            {
                humanScore ++;
                humanScoreNode.nodeValue = "your score "+humanScore;

                messageNode.nodeValue =" you win paper beats rock";
            }



            else if(humanChoice == "rock" && computerChoice == "paper")
            {
                    computerScore ++;
                    computerScoreNode.nodeValue = `computer score `+computerScore;
                    messageNode.nodeValue = " you lose paper beats rock";
            }


        // between rock and scissors
            else if(humanChoice == "rock" && computerChoice == "scissors")
            {
                humanScore ++;
                humanScoreNode.nodeValue = "your score "+humanScore;
                messageNode.nodeValue = " you win rock beats scissors";

            }


            else if(humanChoice == "scissors" && computerChoice == "rock")
            {
                computerScore ++;
                computerScoreNode.nodeValue = `computer score `+computerScore;
                messageNode.nodeValue = " you lose rock beats scissors";
            
            }


        // between  paper and scissors
            else if(humanChoice == "paper" && computerChoice == "scissors")
            {
                computerScore++;
                computerScoreNode.nodeValue = `computer score `+computerScore;

                 messageNode.nodeValue= "you lose  scissors beats paper";

            }

            else if(humanChoice == "scissors" && computerChoice == "paper")
                {
                    humanScore++;
                    messageNode.nodeValue = "you win  scissors beats paper";
                    humanScoreNode.nodeValue = "your score "+humanScore;

                }


        // similar choice or un known human input
        else if(humanChoice == computerChoice){
            messageNode.nodeValue="similar choices";
        }
        // if user entered wrong word
        else{
            messageNode.nodeValue="human choice "+humanChoice;
            messageNode.nodeValue='computer choice '+computerChoice;
            messageNode.nodeValue="comparison failure"
        }
         
}


const buttons = document.querySelectorAll(".humanSelection");
buttons.forEach((button) => { 
    button.addEventListener('click',(e)=>{
        
        playRound(e.target.value, getComputerChoice());
        round++;

        if (round===5){
            if(humanScore > computerScore){
                messageNode.nodeValue = `YOU ARE THE WINNER! `
            }
            else if(humanScore == computerScore){
                messageNode.nodeValue = `NO WINNER!`
            }
            else{
                messageNode.nodeValue = `YOU LOSE! `
            }

            // create replay button 
            const btn = document.getElementById("buttons");
            const replayButton = document.createElement('button');
            replayButton.className = 'humanSelection'

            replayButton.addEventListener('click',()=>{
                window.location.reload();
            });

            const btnText = document.createTextNode(`replay`);
            replayButton.appendChild(btnText);
            btn.replaceChildren(replayButton)
        }

        
    });

});




   

