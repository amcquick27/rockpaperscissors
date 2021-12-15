$(".play").click(function(){
  let userInput = $(".input").val();
  $(".userChoice").text(userInput)

  let compChoice =Math.ceil(Math.random()*3);
  let compChoiceWord;
  if( compChoice === 1){
    $(".computerChoice").text(`Rock`)
    compChoiceWord = 'rock';
  }else if (compChoice ===2){
    $(".computerChoice").text(`Paper`)
    compChoiceWord = 'paper'
  } else if (compChoice ===3){
    $(".computerChoice").text(`Scissors`)
    compChoiceWord ='scissors'
  } 
  
  if (userInput.toLowerCase() === compChoiceWord) {
    $(".result").text("Tie!");
  }
  
  if ((userInput.toLowerCase() === 'rock' && compChoiceWord==='rock') || (userInput.toUpperCase === 'Paper' && compChoiceWord==='Paper') || (userInput.toUpperCase === 'Scissors' && compChoiceWord==='Scissors')) {
    $(".result").text("Tie!")
  }
});
