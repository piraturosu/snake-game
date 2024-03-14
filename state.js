const BOARD = [];
let BOARD_WIDTH = 20;
let BOARD_HEIGHT = 10;

function generateBoard() {
  for (let y = 0; y !== BOARD_HEIGHT; ++y) {
    let xCell = [];
    for (let x = 0; x !== BOARD_WIDTH; ++x) {
      xCell.push(x);
    }
    BOARD.push(xCell);
  }
}
generateBoard();
console.log(BOARD[6][10]);
