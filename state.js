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
    BOARD[y][x + i] = SNAKE_ID;
  }
  SNAKE_HEAD.x = x;
  SNAKE_HEAD.y = y;
  SNAKE_TAIL.x = x + SNAKE_LENGTH;
  SNAKE_TAIL.y = y;
  // snakeArray = [BOARD[x][y], BOARD[x][y]];
  // BOARD[y][x] = SNAKE_ID;
  // --x;
  // BOARD[y][x + 2] = null;
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
}

function updateBoard() {
  BOARD[SNAKE_TAIL.y][SNAKE_TAIL.x] = null;

  SNAKE_TAIL.x = SNAKE_HEAD.x;
  SNAKE_TAIL.y = SNAKE_HEAD.y;

  if(DIRECTION === DIRECTIONS.LEFT) SNAKE_HEAD.x -= 1;
  else if(DIRECTION === DIRECTIONS.RIGHT) SNAKE_HEAD.x += 1;
  else if(DIRECTION === DIRECTIONS.DOWN) SNAKE_HEAD.y += 1;
  else if(DIRECTION === DIRECTIONS.UP) SNAKE_HEAD.y -= 1;

  BOARD[SNAKE_HEAD.y][SNAKE_HEAD.x] = SNAKE_ID;

}

generateBoard(20, 10);
createSnake(5, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));
generateFood();
document.addEventListener("keydown", handleKeyDown);
setInterval(updateBoard, 1000);
