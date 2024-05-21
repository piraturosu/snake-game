const gameTextElement = document.getElementById("titleText");
const boardUIElement = document.getElementById("board");
const startMenu = document.getElementById("startMenu");
const bottomInfoText = document.getElementById("bottomMenu");
const scoreSpan = document.getElementById("scoreSpan");
const recordSpan = document.getElementById("recordSpan");
const leaderboardContainer = document.getElementById("leaderboard");
const closeButton = document.getElementById("closeButton");

gameTextElement.addEventListener("click", showLeaderboard);

bottomInfoText.style.width = `${BOARD_WIDTH * 4}vh`;

function handleKeyDown(event) {
  setDirection(event.key);
}

function createBoardView() {
  boardUIElement.style.gridTemplateColumns = `repeat(${BOARD_WIDTH}, 1fr)`;
  boardUIElement.style.gridTemplateRows = `repeat(${BOARD_HEIGHT}, 1fr)`;
  for (let row of BOARD) {
    for (let cell of row) {
      let cellElement = document.createElement("div");
      if (cell === null) {
        cellElement.classList.add("cell");
      }
      boardUIElement.appendChild(cellElement);
    }
  }
}

function updateScoreView() {
  scoreSpan.innerText = currentScore;
  recordSpan.innerText = currentScore;
  if (currentScore < storedRecord) recordSpan.innerText = storedRecord;
}

function updateBoardView() {
  let i = -1;
  const cellElements = boardUIElement.children;
  for (let row of BOARD) {
    for (let cell of row) {
      const cellElement = cellElements[++i];
      cellElement.innerHTML = "";
      // Remove all classes
      while (cellElement.classList.length > 0) {
        const className = cellElement.classList.item(0);
        if (className === "food") cellElement.children.length = 0;
        cellElement.classList.remove(className);
      }
      if (cell === null) {
        cellElement.classList.add("cell");
      } else if (cell === SNAKE_BODY) {
        cellElement.classList.add("snake");
      } else {
        cellElement.classList.add("food");
        const p = document.createElement("p");
        p.innerText = FOOD_GOOD[indexOfFood];
        cellElement.appendChild(p);
      }
    }
  }

  if (justAteState) {
    updateScoreView();
  }
}

function createLeaderboardItem(name, score) {
  const playerName = document.createElement("p");
  const playerScore = document.createElement("p");
  const listItem = document.createElement("div");

  listItem.classList.add("leaderboardItem");

  playerName.innerHTML = `${name}`;
  playerScore.innerHTML = `${score}`;

  listItem.appendChild(playerName);
  listItem.appendChild(playerScore);

  return listItem;
}

function showLeaderboard() {
  boardUIElement.style.animationName = "fadeOut";
  boardUIElement.style.opacity = 0;
  startMenu.style.animationName = "fadeOut";
  startMenu.style.opacity = 0;
  bottomInfoText.style.animationName = "fadeOut";
  bottomInfoText.style.opacity = 0;

  const keyValueArray = Object.entries(LEADERBOARD);
  keyValueArray.sort((a, b) => b[1] - a[1]);

  for (const [key, value] of keyValueArray) {
    const item = createLeaderboardItem(key, value);
    leaderboardContainer.appendChild(item);
  }

  closeButton.addEventListener("click", hideLeaderboard);
}

function hideLeaderboard() {
  boardUIElement.style.animationName = "fadeIn";
  boardUIElement.style.opacity = 1;
  startMenu.style.animationName = "fadeIn";
  startMenu.style.opacity = 1;
  bottomInfoText.style.animationName = "fadeIn";
  bottomInfoText.style.opacity = 1;

  while (leaderboardContainer.firstChild) {
    leaderboardContainer.removeChild(leaderboardContainer.firstChild);
  }

  closeButton.removeEventListener("click", hideLeaderboard);
  gameTextElement.addEventListener("click", showLeaderboard);
}

createBoardView();
updateScoreView();
