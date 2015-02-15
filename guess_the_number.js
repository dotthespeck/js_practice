var randomNumber = Math.ceil(Math.random() * 100);

do {
  var guessNumber = prompt("Guess a number between 1 and 100");
  while (guessNumber !== randomNumber);
}

  if (guessNumber > randomNumber)
    alert("Try a smaller number");
  else if (guessNumber < randomNumber)
    alert("Try a bigger number");
  else
    alert("You guessed it!");
