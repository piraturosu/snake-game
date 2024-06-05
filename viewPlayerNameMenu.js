const playerNameMenu = document.getElementById("playerNameMenu");
const difficultyMenu = document.getElementById("difficultyMenu");
const playerNameText = document.getElementById("playerNameText");
const playerNameInput = document.getElementById("playerNameInput");
const infoMessage = document.getElementById("infoMessage");
const regex = /^[A-Za-z0-9]+$/;

let infoMessageTimerId = null;

if (PLAYER_NAME) {
  hidePlayerNameMenu();
}

function showPlayerName() {
  playerNameText.innerHTML = PLAYER_NAME;
}

function showErrorText(text) {
  infoMessage.innerHTML = text;
  infoMessage.style.fontSize = "2vh";

  clearTimeout(infoMessageTimerId);
  infoMessageTimerId = setTimeout(hideErrorText, 3000);
}

function hideErrorText() {
  infoMessage.style.fontSize = "0vh";
}

function validatePlayerName(value) {
  if (value.length < 3) {
    showErrorText("Name must have minimum 3 characters");
    return false;
  }
  if (!regex.test(value)) {
    showErrorText("Only letters and numbers accepted");
    return false;
  }
  if (value.length > 8) {
    showErrorText("Name must have maximum 8 characters");
    return false;
  }
  return true;
}

function handlePlayerNameKeyDown(event) {
  const name = event.target.value;

  if (event.key !== "Enter") return;
  if (!validatePlayerName(name)) return;

  PLAYER_NAME = name;
  savePlayerName();
  hidePlayerNameMenu();
  showPlayerName();
  resetScoreAndUpdateRecord();
  updateScoreView();
  document.addEventListener("keydown", handleMenuElementKeyDown);

  event.stopPropagation();
}

function hidePlayerNameMenu() {
  playerNameMenu.classList.add("hidden");
  difficultyMenu.classList.remove("hidden");
  document.addEventListener("keydown", handleMenuElementKeyDown);
}

function showPlayerNameMenu() {
  document.removeEventListener("keydown", handleMenuElementKeyDown);
  difficultyMenu.classList.add("hidden");
  playerNameMenu.classList.remove("hidden");
  playerNameInput.focus();
}

playerNameInput.addEventListener("keydown", handlePlayerNameKeyDown);
playerNameText.addEventListener("click", showPlayerNameMenu);

showPlayerName();
