let BOARD = [];
// for (let y = 0; y !== BOARD_HEIGHT; ++y) {
//   let yCell = [];
//   let xCell = [];
//   yCell.push(y);
//   for (let x = 0; x !== BOARD_WIDTH; ++x) {
//     xCell.push(x);
//   }
//   yCell.push(xCell);
//   BOARD.push(yCell);
// }
for (let y = 0; y !== BOARD_HEIGHT; ++y) {
    // let yCell = [];
    let xCell = [];
    yCell.push(xCelly);
    for (let x = 0; x !== BOARD_WIDTH; ++x) {
        xCell.push(x);
    }
    // yCell.push(xCell);
    // BOARD.push(yCell);
}
// console.log(BOARD);

// x max 2
// y max 3
// [1, 2]

// [
//     [a1 a2]
//     [b1 b2]
//     [c1 c2] array[2][0]
// ]

// [a1 a2 b1 b2 c1 c2] array[4]

function add(i) {
    i++
}

console.log(add(0))
