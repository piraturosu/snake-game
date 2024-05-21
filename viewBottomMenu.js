const playerNameInput = document.querySelector("input");
const playerNameText = document.getElementById("nameSpan");
const errorText = document.getElementById("errorMessage");
const regex = /^[A-Za-z0-9]+$/;

let errorTextTimerId = null;

function showPlayerName() {
  playerNameText.innerHTML = PLAYER_NAME;
}

function hideErrorText() {
  errorText.style.fontSize = "0vh";
}

function showErrorText(text) {
  errorText.innerHTML = text;
  errorText.style.fontSize = "2vh";

  clearTimeout(errorTextTimerId);
  errorTextTimerId = setTimeout(hideErrorText, 3000);
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
  hidePlayerNameInput();
  showPlayerName();
  updateScoreView();
  document.addEventListener("keydown", handleMenuElementKeyDown);

  event.stopPropagation();
}

function hidePlayerNameInput() {
  playerNameInput.classList.add("hidden");
  playerNameText.classList.remove("hidden");
}

function showPlayerNameInput() {
  playerNameText.classList.add("hidden");
  playerNameInput.classList.remove("hidden");
}

playerNameInput.addEventListener("keydown", handlePlayerNameKeyDown);
playerNameText.addEventListener("click", showPlayerNameInput);

showPlayerName();
