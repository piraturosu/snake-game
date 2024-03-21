
function generateFood() {
  const index = generateRandomInRange(FOOD_GOOD.length);
  let width = generateRandomInRange(BOARD_WIDTH);
  const height = generateRandomInRange(BOARD_HEIGHT);
  // Detect snake body
  while (BOARD[height][width] === SNAKE_ID) {
    width = generateRandomInRange(BOARD_WIDTH);
  }
  // Spawn food at random position
  currentFoodCoordinates = [height, width];
  BOARD[height][width] = FOOD_GOOD[index];
  console.log(currentFoodCoordinates);
}

function generateMenu() {
  difficultyMenu = document.createElement("div");
}

function generateBoard(width, height) {
  BOARD_WIDTH = width;
  BOARD_HEIGHT = height;

  for (let y = 0; y !== height; ++y) {
    let row = [];
    for (let x = 0; x !== width; ++x) {
      row.push(null);
    }
    BOARD.push(row);
  }
}

function createSnake(length) {
  SNAKE_LENGTH = length;
  snakeArray = [BOARD[x][y], BOARD[x][y]];
  // for (let i = 0; i !== length; ++i) {
  // }
  BOARD[y][x] = SNAKE_ID;
  // reduce(x);
  --x;
  BOARD[y][x + 2] = null;
  // console.log(x);
}

function listenToKeyPress() {
  document.addEventListener("keydown", function (event) {
    if(event.key === "ArrowUp") {
      if(CURRENT_DIRECTION === DIRECTIONS.S) return;
      CURRENT_DIRECTION = DIRECTIONS.N;
      console.log(CURRENT_DIRECTION);
    }
    else if (event.key === "ArrowRight") {
      if (CURRENT_DIRECTION === DIRECTIONS.W) return;
      CURRENT_DIRECTION = DIRECTIONS.E;
      console.log(CURRENT_DIRECTION);
    }
    else if (event.key === "ArrowDown") {
      if (CURRENT_DIRECTION === DIRECTIONS.N) return;
      CURRENT_DIRECTION = DIRECTIONS.S;
      console.log(CURRENT_DIRECTION);
    }
    else if (event.key === "ArrowLeft") {
      if (CURRENT_DIRECTION === DIRECTIONS.E) return;
      CURRENT_DIRECTION = DIRECTIONS.W;
      console.log(CURRENT_DIRECTION);
    }
  });
}


listenToKeyPress();
generateBoard(20, 10);
generateFood();
// console.log(BOARD)
// createSnake(5, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));
