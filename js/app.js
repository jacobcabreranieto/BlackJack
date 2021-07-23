let cards = [];
let sum = 0;
let hasBlackJack = true;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumTotal = document.getElementById("sum");
let cardsEl = document.querySelector("#cards");

function startGame() {
  isAlive = true;
  let fistCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [fistCard, secondCard];
  sum = fistCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = cards;
  sumTotal.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "quiere otra joven";
  } else if (sum === 21) {
    message = "Black Jack!!";
    hasBlackJack = true;
  } else {
    message = "perdiste tu varo";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let cardNew = getRandomCard();
  cards.push(cardNew);
  sum += cardNew;
  renderGame();
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber >= 11) {
    return 10;
  } else {
    return randomNumber;
  }
}
