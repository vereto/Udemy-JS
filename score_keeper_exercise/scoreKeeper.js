const player1Btn = document.getElementById("p1Btn");
const player2Btn = document.getElementById("p2Btn");
const p1Display = document.getElementById("p1Display");
const p2Display = document.getElementById("p2Display");
const resetBtn = document.getElementById("resetBtn");
const winningScoreSelect = document.getElementById("playUpTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

player1Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-success')
      p2Display.classList.add('has-text-danger')
      player1Btn.disabled = true;
      player2Btn.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

player2Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add('has-text-success')
      p1Display.classList.add('has-text-danger')
      player1Btn.disabled = true;
      player2Btn.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
   resetFn();
});

resetBtn.addEventListener("click", resetFn);

function resetFn() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('has-text-success', 'has-text-danger')
  p2Display.classList.remove('has-text-success', 'has-text-danger')
  player1Btn.disabled = false;
  player2Btn.disabled = false;

}
