const p1 = {
  score: 0,
  button: document.getElementById("p1Btn"),
  display: document.getElementById("p1Display"),
};
const p2 = {
  score: 0,
  button: document.getElementById("p2Btn"),
  display: document.getElementById("p2Display"),
};

const resetBtn = document.getElementById("resetBtn");
const winningScoreSelect = document.getElementById("playUpTo");

let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}
p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetFn();
});

resetBtn.addEventListener("click", resetFn);

function resetFn() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
