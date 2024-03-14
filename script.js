const gridContainer = document.getElementById("board");
console.log(gridContainer);

function createBoard() {
  for (let y = 0; y !== BOARD_HEIGHT; ++y) {
    for (let x = 0; x !== BOARD_WIDTH; ++x) {
      // console.log(y, x);
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("yAxis", `${y}`);
      cell.setAttribute("xAxis", `${x}`);
      // cell.textContent = `Item ${x + 1}`;
      let xAxisValue = cell.getAttribute("xAxis");
      // console.log(xAxisValue)
      gridContainer.appendChild(cell);
    }
  }
}

// createBoard();

function protoBoard(insertArrayHere) {
  insertArrayHere.forEach((e) => {
    e.forEach((el) => {
      // console.log(el)
      let cell = document.createElement("div");
      if (el === null) {
        cell.classList.add("astaesefu");
      }
      cell.classList.add("cell");
      gridContainer.appendChild(cell);
    });
  });
}
protoBoard(BOARD);

// let test = document.querySelector('[coordinates="9"]');

// function toYourLeft(addDivHere) {
//   addDivHere.classList.add("snake");
// }

// function toYourRight(addDivHere) {
//   addDivHere.classList.remove("snake");
// }

// for (let i = 20; i > -1; --i) {
//   let delay = (20 - i) * 400; // Calculate delay based on the current iteration
//   let who = document.querySelector(`[coordinates="${i}"]`);
//   let whoWas = document.querySelector(`[coordinates="${i + 1}"]`);
//   setTimeout(() => {
//     toYourLeft(who);
//     // console.log(who, "i = ", i);
//     toYourRight(whoWas);
//   }, delay);
// }
