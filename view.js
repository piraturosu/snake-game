const boardUIElement = document.getElementById("board");
console.log(boardUIElement);
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  setDirection(event.key);
}

function createBoardView() {
  boardUIElement.style.gridTemplateColumns = `repeat(${BOARD_WIDTH}, 1fr)`
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

function updateBoardView() {
  let i = -1;
  const cellElements = boardUIElement.children;
  for (let row of BOARD) {
    for (let cell of row) {
      const cellElement = cellElements[++i];
      cellElement.innerHTML = "";
      // Remove all classes
      while (cellElement.classList.length > 0) {
        cellElement.classList.remove(cellElement.classList.item(0));
      }
      if (cell === null) {
        cellElement.classList.add("cell");
      } else if (cell === SNAKE_BODY) {
        cellElement.classList.add("snake");
      } else {
        cellElement.classList.add("food");
        cellElement.innerHTML = FOOD_GOOD[indexOfFood];
      }
    }
  }
}

createBoardView();
const viewInterval = setInterval(updateBoardView, SNAKE_SPEED);
