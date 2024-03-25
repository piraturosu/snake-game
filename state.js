function generateFood() {
  const index = generateRandomInRange(FOOD_GOOD.length);
  let width = generateRandomInRange(BOARD_WIDTH);
  const height = generateRandomInRange(BOARD_HEIGHT);
  // Detect snake body
  while (BOARD[height][width] === SNAKE_ID) {
    width = generateRandomInRange(BOARD_WIDTH);
  }
  // Spawn food at random position
  FOOD_POSITION = [height, width];
  BOARD[height][width] = FOOD_GOOD[index];
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

function createSnake(length, x, y) {
  SNAKE_LENGTH = length;

  for (let i = 0; i !== SNAKE_LENGTH; ++i) {
    BOARD[y][x] = SNAKE_ID;
    SNAKE_ARRAY.push([y, x + i]);
  }
  SNAKE_HEAD = SNAKE_ARRAY[0];
  SNAKE_TAIL = SNAKE_ARRAY[SNAKE_ARRAY.length - 1];
  // SNAKE_HEAD.x = x;
  // SNAKE_HEAD.y = y;
}

function handleKeyDown(event) {
  if (event.key === "ArrowUp") {
    if (DIRECTION === DIRECTIONS.DOWN) return;
    DIRECTION = DIRECTIONS.UP;
  } else if (event.key === "ArrowRight") {
    if (DIRECTION === DIRECTIONS.LEFT) return;
    DIRECTION = DIRECTIONS.RIGHT;
  } else if (event.key === "ArrowDown") {
    if (DIRECTION === DIRECTIONS.UP) return;
    DIRECTION = DIRECTIONS.DOWN;
  } else if (event.key === "ArrowLeft") {
    if (DIRECTION === DIRECTIONS.RIGHT) return;
    DIRECTION = DIRECTIONS.LEFT;
  }
  DIRECTIONAL_CHANGES.push({
    direction: DIRECTION,
  });
}
function updateBoard() {
  BOARD[SNAKE_TAIL[0]][SNAKE_TAIL[1]] = null;
  SNAKE_TAIL = SNAKE_ARRAY[SNAKE_ARRAY.length - 1];
  BOARD[SNAKE_TAIL[0]][SNAKE_TAIL[1]] = SNAKE_ID;
  if (DIRECTION === DIRECTIONS.LEFT) {
    SNAKE_HEAD[1] -= 1;
    console.log("snake array = ", SNAKE_ARRAY, "tail = ", SNAKE_TAIL);
  } else if (DIRECTION === DIRECTIONS.UP) {
    SNAKE_HEAD[0] -= 1;
  } else if (DIRECTION === DIRECTIONS.RIGHT) {
    SNAKE_HEAD[1] += 1;
  } else if (DIRECTION === DIRECTIONS.DOWN) {
    SNAKE_HEAD[0] += 1;
  }
  BOARD[SNAKE_HEAD[0]][SNAKE_HEAD[1]] = SNAKE_ID;
}

generateBoard(20, 10);
createSnake(2, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));
generateFood();
document.addEventListener("keydown", handleKeyDown);
// updateBoard();
setInterval(updateBoard, 1000);
