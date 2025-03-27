const symbols = ["🍎", "🍌", "🍒", "🍇", "🍓", "🍍"];
let cards = [...symbols, ...symbols];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
const gameBoard = document.querySelector(".memory-board");
const resetBtn = document.querySelector(".reset-game");
const winAlert = document.querySelector(".win-alert");

function init() {
  cards = [...symbols, ...symbols];
  cards.sort(() => Math.random() - 0.5);
  firstCard = null;
  secondCard = null;
  lockBoard = false;

  gameBoard.innerHTML = "";
  winAlert.style.display = "none";

  cards.forEach((symbol) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.innerHTML = "?";
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });

  setTimeout(() => {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      card.innerHTML = card.dataset.symbol;
    });

    setTimeout(() => {
      allCards.forEach((card) => {
        card.innerHTML = "?";
        card.style.pointerEvents = "all";
      });
    }, 2000);
  }, 1000);
}

function flipCard() {
  if (lockBoard || this.classList.contains("flipped")) return;

  this.classList.add("flipped");
  this.innerHTML = this.dataset.symbol;

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;
    checkMatch();
  }
}

function checkMatch() {
  lockBoard = true;

  if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    checkWin();
    resetCards();
  } else {
    setTimeout(() => {
      firstCard.innerHTML = "?";
      secondCard.innerHTML = "?";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetCards();
    }, 1000);
  }
}

function resetCards() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function checkWin() {
  const matchedCards = document.querySelectorAll(".matched");
  if (matchedCards.length === cards.length) {
    winAlert.style.display = "block";
  }
}

resetBtn.addEventListener("click", init);

init();
