let userScore = 0;
let compScore = 0;



//user choice
let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        userChoice = choice.getAttribute("id");
        // console.log("user choice",userChoice);  
        playgame(userChoice); 
    });
});

//computer choice

let gencompchoice = () => {
    let option = ["rock","paper", "scissor"];
    let randomidx = Math.floor(Math.random()*3);
    return option[randomidx];
}

//play game user choice and computer choice and winner condition

let playgame = (userChoice) => {
console.log("user choice :",userChoice);
let compChoice = gencompchoice();
console.log("computer choice :",compChoice);
if(userChoice===compChoice){
    gameDraw();
}
else{
    userWin = true;
    if(userChoice === "rock"){
        // paper scissor
        userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper"){
        // rock scissor
        userWin = compChoice === "scissor" ? false : true;
    }
    else if (userChoice === "scissor"){
        // rock paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
}

//show winner
let mgs = document.querySelector(".mgs"); 
let userScorepara = document.querySelector(".user-score");
let compScorepara = document.querySelector(".comp-score");
let showWinner = () => {
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        mgs.style.backgroundColor="green";
        mgs.innerText=`You Won!`; 
        console.log("You Won !");
    }
    else{
        console.log("You Lose");
        compScore++;
        compScorepara.innerText=compScore;
        mgs.style.backgroundColor="red";
        mgs.innerText=`You Lose!`;
    }
}

// game draw
let gameDraw = () => {
    console.log("Game Was Draw");
    mgs.style.backgroundColor="black";
        mgs.innerText=`Game Was Draw ! Again Play`;
}