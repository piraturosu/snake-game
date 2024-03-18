const BOARD = [];
let BOARD_WIDTH;
let BOARD_HEIGHT;

const SNAKE_ID = 0;
let SNAKE_LENGTH;

let difficultyMenu;

// 🐛 🐞 🦋 🐁 🐀 🐿 🍄 🐓 🐇 🐤 🐣
// 👟 🥾 🧦 🌵 🦔 🦂
const FOOD_GOOD = [
  "🐛",
  "🐞",
  "🦋",
  "🐁",
  "🐀",
  "🐿",
  "🍄",
  "🐓",
  "🐇",
  "🐤",
  "🐣",
];

function generateFood() {
  const index = generateRandomInRange(FOOD_GOOD.length);
  let width = generateRandomInRange(BOARD_WIDTH);
  const height = generateRandomInRange(BOARD_HEIGHT);

  while (BOARD[height][width] === SNAKE_ID) {
    width = generateRandomInRange(BOARD_WIDTH);
  }
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

  for (let i = 0; i !== length; ++i) {
    BOARD[y][x + i] = SNAKE_ID;
  }
}

generateBoard(20, 10);
createSnake(5, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));

// setInterval(generateFood, 1000);
// generateFood();
