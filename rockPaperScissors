console.log('hi');
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Sorry, you picked an invalid choice!');
  }
};

const getComputerChoice = () =>{
  switch (Math.floor(Math.random()*3)){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
};
const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === 'bomb'){
    return console.log('You win!');
  }
  if(userChoice === computerChoice){
    return console.log("It's a tie!");
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return console.log('You lost!');
    }else if(computerChoice === 'scissors'){
      return console.log("Congrats!! you won!!");
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return console.log('You lost!');
    }else if(computerChoice === 'rock'){
      return console.log("Congrats!! you won!!");
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return console.log('You lost!');
    }else if(computerChoice === 'paper'){
      return console.log("Congrats!! you won!!");
    }
  }
};

function playGame(){
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You picked ${userChoice} and the Computer picked ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));

};

playGame();

