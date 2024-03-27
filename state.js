function generateFood() {
  const index = generateRandomInRange(FOOD_GOOD.length);
  let width = generateRandomInRange(BOARD_WIDTH);
  const height = generateRandomInRange(BOARD_HEIGHT);
  // Detect snake body
  while (BOARD[height][width] === SNAKE_BODY) {
    width = generateRandomInRange(BOARD_WIDTH);
  }
  // Spawn food at random position
  FOOD_POSITION = [height, width];
  BOARD[height][width] = FOOD_GOOD[index];
}

function deleteFood() {
  let y = FOOD_POSITION[0];
  let x = FOOD_POSITION[1];
  BOARD[y][x] = 0;

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

function createSnake(length, x, y) {
  SNAKE_LENGTH = length;

  for (let i = 0; i !== SNAKE_LENGTH; ++i) {
    BOARD[y][x + i] = SNAKE_BODY;
    SNAKE_ARRAY.push([y, x + i]);
  }
}

function setDirection(keyString) {
  if (!frameReady) return;

  if (keyString === "ArrowUp") {
    if (DIRECTION === DIRECTIONS.DOWN) return;
    DIRECTION = DIRECTIONS.UP;
  } else if (keyString === "ArrowRight") {
    if (DIRECTION === DIRECTIONS.LEFT) return;
    DIRECTION = DIRECTIONS.RIGHT;
  } else if (keyString === "ArrowDown") {
    if (DIRECTION === DIRECTIONS.UP) return;
    DIRECTION = DIRECTIONS.DOWN;
  } else if (keyString === "ArrowLeft") {
    if (DIRECTION === DIRECTIONS.RIGHT) return;
    DIRECTION = DIRECTIONS.LEFT;
  }

  frameReady = false;
}
let frameReady = false;
let ateFood = false;
let snakeMoved;
function updateSnake() {
  const SNAKE_TAIL = SNAKE_ARRAY.pop();
  const SNAKE_HEAD = [...SNAKE_ARRAY[0]];
  if (DIRECTION === DIRECTIONS.LEFT) {
    SNAKE_HEAD[1] -= 1;
  } else if (DIRECTION === DIRECTIONS.UP) {
    SNAKE_HEAD[0] -= 1;
  } else if (DIRECTION === DIRECTIONS.RIGHT) {
    SNAKE_HEAD[1] += 1;
  } else if (DIRECTION === DIRECTIONS.DOWN) {
    SNAKE_HEAD[0] += 1;
  }
  SNAKE_ARRAY.unshift(SNAKE_HEAD);

  if (SNAKE_HEAD[1] === -1) {
    alert("Died la stanga");
  } else if (SNAKE_HEAD[0] === -1) {
    alert("Died in sus");
  } else if (SNAKE_HEAD[0] === BOARD_HEIGHT) {
    alert("Died in jos");
  } else if (SNAKE_HEAD[1] === BOARD_WIDTH) {
    alert("Died la dreapta");
  }

  for (let i = 1; i !== SNAKE_ARRAY.length; ++i) {
    if (
      SNAKE_HEAD[0] === SNAKE_ARRAY[i][0] &&
      SNAKE_HEAD[1] === SNAKE_ARRAY[i][1]
    ) {
      alert("Died in el");
    }
  }

  if (
    SNAKE_HEAD[0] === FOOD_POSITION[0] &&
    SNAKE_HEAD[1] === FOOD_POSITION[1]
  ) {
    SNAKE_ARRAY.push(SNAKE_TAIL);
    BOARD[SNAKE_HEAD[0]][SNAKE_HEAD[1]] = SNAKE_BODY;
    deleteFood();
    generateFood();
  } else {
    BOARD[SNAKE_TAIL[0]][SNAKE_TAIL[1]] = null;
    BOARD[SNAKE_HEAD[0]][SNAKE_HEAD[1]] = SNAKE_BODY;
  }

  frameReady = true;
}

generateBoard(20, 10);
createSnake(5, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));
generateFood();
setInterval(updateSnake, SNAKE_SPEED);
