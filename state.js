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

const KEYS = [false, false, false, false];

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
    // console.log(BOARD[y - 1]);
  }
}

function setKeysFalse(indexes) {
  indexes.forEach((index) => {
    KEYS[index] = false;
  });
}

function listenToKeyPress() {
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowUp":
        KEYS[1] = true;
        setKeysFalse([0, 2, 3]);
        console.log("Arrow Up key pressed.");
        console.log(KEYS);
        break;
      case "ArrowDown":
        KEYS[3] = true;
        setKeysFalse([0, 1, 2]);
        console.log("Arrow Down key pressed.");
        console.log(KEYS);
        break;
      case "ArrowLeft":
        KEYS[0] = true;
        setKeysFalse([1, 2, 3]);
        console.log("Arrow Left key pressed.");
        console.log(KEYS);
        break;
      case "ArrowRight":
        KEYS[2] = true;
        setKeysFalse([0, 1, 3]);
        console.log("Arrow Right key pressed.");
        console.log(KEYS);
        break;
      default:
        // Not an arrow key, ignore
        break;
    }
  });
}

const DIRECTIONS = {
  W: 0,
  N: 1,
  E: 2,
  S: 3
}


listenToKeyPress();
generateBoard(20, 10);
createSnake(5, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));
generateFood();

// BOARD[5][10 + 3] = null;
// BOARD[5][10 + 4] = null;
BOARD[5 - 1][10] = SNAKE_ID;
BOARD[5][10 + 4] = null;
BOARD[5 - 2][10] = SNAKE_ID;
BOARD[5][10 + 3] = null;


// setInterval(generateFood, 1000);
// generateFood();
