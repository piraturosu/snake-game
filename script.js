const elBoardView = document.getElementById("board");

function createBoardView() {
  for (let row of BOARD) {
    for (let cell of row) {
      let cellElement = document.createElement("div");
      if (cell === null) {
        cellElement.classList.add("cell");
      }
      elBoardView.appendChild(cellElement);
    }
  }
}
createBoardView();

function updateBoardView() {
  let i = 0;
  const elCells = elBoardView.children;

  for (let row of BOARD) {
    for (let cell of row) {
      const elCell = elCells[i];
      // Remove all classes
      while (elCell.classList.length > 0) {
        elCell.classList.remove(elCell.classList.item(0));
      }
      if (cell === null) {
        elCell.classList.add("cell");
      } else if (cell === SNAKE_ID) {
        elCell.classList.add("snake");
      }
      i += 1;
    }
  }
}

updateBoardView();
