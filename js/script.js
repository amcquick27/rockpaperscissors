$(".play").click(function(){
  let userInput = $(".input").val();
  $(".userChoice").text(userInput)
  
  let compChoiceWord = getCompChoice();
  if ((userInput.toLowerCase() === 'rock' && compChoiceWord === 'scissors') || (userInput.toLowerCase() === 'paper' && compChoiceWord==='rock') ||  (userInput.toLowerCase() === 'scissors' && compChoiceWord==='paper')){
    $(".result").text("You Win");
  }else if ((userInput.toLowerCase() === 'rock' && compChoiceWord==='rock') || (userInput.toLowerCase === 'paper' && compChoiceWord==='paper') || (userInput.toLowerCase === 'scissors' && compChoiceWord==='scissors')) {
    $(".result").text("Tie!")
  }else if ((userInput.toLowerCase() === 'rock' && compChoiceWord==='paper') || (userInput.toLowerCase === 'paper' && compChoiceWord==='scissors') || (userInput.toLowerCase === 'scissors' && compChoiceWord==='rock')) {
    $(".result").text("Computer Wins!")
  } else if ((userInput.toLowerCase !== 'rock')||(userInput.toLowerCase !=='paper')||(userInput.toLowerCase !== 'scissors')){
    $(".result").text("Please enter a valid choice")
  }
});

function getCompChoice(){
  let compChoice =Math.ceil(Math.random()*3);
  if( compChoice === 1){
    $(".computerChoice").text(`rock`)
   return 'rock';
  }else if (compChoice ===2){
    $(".computerChoice").text(`paper`)
    return 'paper'
  } else if (compChoice ===3){
    $(".computerChoice").text(`scissors`)
    return 'scissors'
  } 
}