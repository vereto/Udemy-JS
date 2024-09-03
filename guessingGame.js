let maximum = parseInt(prompt("Enter the maximum number"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess!(Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);
  attempts++;

  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
  } else if (guess < targetNum) {
    guess = prompt("Too low! Enter a new guess:");
  } else {
    guess = prompt(
      'Invalid guess. Please enter a number or "q" to quit the game'
    );
  }
}
if (guess === "q") {
  console.log("Ok! You quit!");
} else {
  console.log("Well done!");
}
console.log(`It took you ${attempts} attempts`);
