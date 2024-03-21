const boardDivSelector = document.getElementById("board");

function createBoardView() {
  let a = 0;
  for (let row of BOARD) {
    let b = 0;

    for (let cell of row) {
      let cellElement = document.createElement("div");
      if (cell === null) {
        cellElement.classList.add("cell");
      }
      boardDivSelector.appendChild(cellElement);
      b += 1;
    }
    a += 1;
  }
}
createBoardView();

const indexOfFood = generateRandomInRange(FOOD_GOOD.length);

function updateBoardView() {
  let i = -1;
  const cellElements = boardDivSelector.children;
  for (let row of BOARD) {
    for (let cell of row) {
      const cellElement = cellElements[++i];
      // Remove all classes
      while (cellElement.classList.length > 0) {
        cellElement.classList.remove(cellElement.classList.item(0));
      }
      if (cell === null) {
        cellElement.classList.add("cell");
      } else if (cell === SNAKE_ID) {
        cellElement.classList.add("snake");
      } else {
        cellElement.classList.add("food");
        cellElement.innerHTML = FOOD_GOOD[indexOfFood];
      }
    }
  }
  console.log(DIRECTION);
}

setInterval(updateBoardView, 1000);
// updateBoardView();
