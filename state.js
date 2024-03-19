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

const DIRECTIONS = {
  W: 0,
  N: 1,
  E: 2,
  S: 3,
};

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

function reduce(n) {
  --n;
}

function createSnake(length) {
  SNAKE_LENGTH = length;

  // for (let i = 0; i !== length; ++i) {
    // }
    BOARD[y][x] = SNAKE_ID;
    // reduce(x);
    --x;
    BOARD[y][x+2] = null;
    console.log(x);
}

function setKeysFalse(indexes) {
  indexes.forEach((index) => {
    KEYS[index] = false;
  });
}

const KEYS = [true, false, false, false];

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
        if (KEYS[0] === true) {
          break;
        }
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

let x = 10;
let y = 5;

listenToKeyPress();
generateBoard(20, 10);
function asd() {
  createSnake(1)
};

// createSnake(5, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));
// const t = west('1233')
// setInterval(asd, 200);
// generateFood();

// BOARD[5][10 + 3] = null;
// BOARD[5][10 + 4] = null;
// BOARD[5 - 1][10] = SNAKE_ID;
// BOARD[5][10 + 4] = null;
// BOARD[5 - 2][10] = SNAKE_ID;
// BOARD[5][10 + 3] = null;

// setInterval(generateFood, 1000);
// generateFood();
