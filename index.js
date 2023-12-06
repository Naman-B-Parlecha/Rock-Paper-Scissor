let rock = document.querySelector(".Rock");
let paper = document.querySelector(".Paper");
let scissor = document.querySelector(".Scissor");
let currentScore = document.querySelector(".score");
let gameresult = document.querySelector(".result");
let compMove = document.querySelector(".computermove");
let reset = document.querySelector(".reset");
let score = JSON.parse(localStorage.getItem("data")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

currentScore.innerHTML = `${score.win}:${score.lose}`;
reset.addEventListener("click", () => {
  localStorage.removeItem('data');
  score = {
    win:0,lose:0,tie:0
  }
  localStorage.setItem('data',JSON.stringify(score));
  currentScore.innerHTML = `${score.win}:${score.lose}`;
  compMove.innerHTML = ``;
  gameresult.innerHTML = "";

});
function computer() {
  let computerMove = "";
  let random = Math.random();
  if (random > 0 && random <= 0.33) {
    computerMove = "Rock";
  } else if (random > 0.33 && random <= 0.66) {
    computerMove = "Paper";
  } else if (random > 0.66 && random <= 1) {
    computerMove = "Scissor";
  }
  return computerMove;
}
function playGame(PlayerMove) {
  let computerMove = computer();
  if (PlayerMove === "Rock") {
    if (computerMove === "Rock") {
      score.tie++;
      gameresult.innerHTML = "TIE";
    } else if (computerMove === "Paper") {
      score.lose++;
      gameresult.innerHTML = "LOST";
    } else if (computerMove === "Scissor") {
      score.win++;
      gameresult.innerHTML = "WON";
    }
  } else if (PlayerMove === "Paper") {
    if (computerMove === "Rock") {
      score.win++;
      gameresult.innerHTML = "WON";
    } else if (computerMove === "Paper") {
      score.tie++;
      gameresult.innerHTML = "TIE";
    } else if (computerMove === "Scissor") {
      score.lose++;
      gameresult.innerHTML = "LOST";
    }
  } else if (PlayerMove === "Scissor") {
    if (computerMove === "Rock") {
      score.lose++;
      gameresult.innerHTML = "LOST";
    } else if (computerMove === "Paper") {
      score.win++;
      gameresult.innerHTML = "WON";
    } else if (computerMove === "Scissor") {
      score.tie++;
      gameresult.innerHTML = "TIE";
    }
  }
  localStorage.setItem("data", JSON.stringify(score));
  currentScore.innerHTML = `${score.win}:${score.lose}`;
  compMove.innerHTML = `computer played ${computerMove}`;
}
rock.addEventListener("click", () => {
  playGame("Rock");
});
paper.addEventListener("click", () => {
  playGame("Paper");
});
scissor.addEventListener("click", () => {
  playGame("Scissor");
});
