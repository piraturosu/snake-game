const elBoardView = document.getElementById("board");

function createBoardView() {
  //TODO modifica in for
  BOARD.forEach((e) => {
    e.forEach((el) => {
      let cell = document.createElement("div");
      if (el === null) {
        cell.classList.add("cell");
      } else if (el === SNAKE_ID) {
        cell.classList.add("snake");
      }
      //else{cell.classList.add("food");}

      elBoardView.appendChild(cell);
    });
  });
}
createBoardView();

function updateBoardView() {
  let i = 0;
  const elCells = elBoardView.children;

  for (let row of BOARD) {
    // console.log(row);
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

setInterval(updateBoardView, 1000);
// function createBoard() {
//   for (let y = 0; y !== BOARD_HEIGHT; ++y) {
//     for (let x = 0; x !== BOARD_WIDTH; ++x) {
//       // console.log(y, x);
//       let cell = document.createElement("div");
//       cell.classList.add("cell");
//       cell.setAttribute("yAxis", `${y}`);
//       cell.setAttribute("xAxis", `${x}`);
//       // cell.textContent = `Item ${x + 1}`;
//       let xAxisValue = cell.getAttribute("xAxis");
//       // console.log(xAxisValue)
//       gridContainer.appendChild(cell);
//     }
//   }
// }

// createBoard();
