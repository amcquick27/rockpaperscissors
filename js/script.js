$(".play").click(function(){
  let userInput = $(".input").val();
 $(".userChoice").text(userInput)
});

$(".play").click(function(){
  let compChoice =Math.ceil(Math.random()*3);
  
  if( compChoice === 1){
    $(".computerChoice").text(`Rock`)
  }else if (compChoice ===2){
    $(".computerChoice").text(`Paper`)
  } else if (compChoice ===3){
    $(".computerChoice").text(`Scissors`)
  }  
});