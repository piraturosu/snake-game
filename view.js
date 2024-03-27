const boardUIElement = document.getElementById("board");
const bottomInfoText = document.getElementById("bottomMenu");
const scoreSpan = document.getElementById("scoreSpan");
const recordSpan = document.getElementById("recordSpan");

bottomInfoText.style.width = `${BOARD_WIDTH * 4}vh`;

document.addEventListener("keydown", handleKeyDown);

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
  recordSpan.innerText = recordScore;
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

updateScoreView();
createBoardView();
const viewInterval = setInterval(updateBoardView, SNAKE_SPEED);
