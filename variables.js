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
  LEFT: 0,
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
};
let DIRECTION = DIRECTIONS.LEFT;

let FOOD_POSITION;

const SNAKE_HEAD = { x: 0, y: 0 };
const SNAKE_TAIL = { x: 0, y: 0 };
