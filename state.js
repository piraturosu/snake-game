function generateFood() {
  indexOfFood = generateRandomInRange(FOOD_GOOD.length);
  let width = generateRandomInRange(BOARD_WIDTH);
  let height = generateRandomInRange(BOARD_HEIGHT);
  // Detect snake body
  while (BOARD[height][width] === SNAKE_BODY) {
    width = generateRandomInRange(BOARD_WIDTH);
  }
  // Spawn food at random position
  FOOD_POSITION = [height, width];
  BOARD[height][width] = FOOD_GOOD[indexOfFood];
}

function deleteFood() {
  let y = FOOD_POSITION[0];
  let x = FOOD_POSITION[1];
  BOARD[y][x] = SNAKE_BODY;
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

function resetBoard() {
  for (let i = 0; i < BOARD_HEIGHT; ++i) {
    for (let j = 0; j < BOARD_WIDTH; ++j) {
      BOARD[i][j] = null;
    }
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

function updateScoreState() {
  currentScore += 5;
  storedRecord = getNumberFromLocalStorage(key);
  if (currentScore >= storedRecord) {
    storeRecordScore(key, currentScore);
    storedRecord = getNumberFromLocalStorage(key);
  }
  justAteState = true;
}

let justAteState = false;

function updateBoardState() {
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

  if (
    SNAKE_HEAD[1] === -1 ||
    SNAKE_HEAD[0] === -1 ||
    SNAKE_HEAD[0] === BOARD_HEIGHT ||
    SNAKE_HEAD[1] === BOARD_WIDTH
  ) {
    isDead = true;
    return;
  }

  for (let i = 1; i !== SNAKE_ARRAY.length; ++i) {
    if (
      SNAKE_HEAD[0] === SNAKE_ARRAY[i][0] &&
      SNAKE_HEAD[1] === SNAKE_ARRAY[i][1]
    ) {
      isDead = true;
      return;
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
    updateScoreState();
  } else {
    BOARD[SNAKE_TAIL[0]][SNAKE_TAIL[1]] = null;
    BOARD[SNAKE_HEAD[0]][SNAKE_HEAD[1]] = SNAKE_BODY;
    justAteState = false;
  }

  frameReady = true;
}

generateBoard(30, 15);

function numberThree() {
  BOARD[4][14] = 0;
  BOARD[4][15] = 0;
  BOARD[5][13] = 0;
  BOARD[5][16] = 0;
  BOARD[6][16] = 0;
  BOARD[7][15] = 0;
  BOARD[8][16] = 0;
  BOARD[9][13] = 0;
  BOARD[9][16] = 0;
  BOARD[10][14] = 0;
  BOARD[10][15] = 0;
}

function numberTwo() {
  BOARD[4][14] = 0;
  BOARD[4][15] = 0;
  BOARD[5][13] = 0;
  BOARD[5][16] = 0;
  BOARD[6][16] = 0;
  BOARD[7][15] = 0;
  BOARD[8][14] = 0;
  BOARD[9][13] = 0;
  BOARD[10][13] = 0;
  BOARD[10][14] = 0;
  BOARD[10][15] = 0;
  BOARD[10][16] = 0;
}

function numberOne() {
  BOARD[4][15] = 0;
  BOARD[5][14] = 0;
  BOARD[5][15] = 0;
  BOARD[6][15] = 0;
  BOARD[7][15] = 0;
  BOARD[8][15] = 0;
  BOARD[9][15] = 0;
  BOARD[10][14] = 0;
  BOARD[10][15] = 0;
  BOARD[10][16] = 0;
}
