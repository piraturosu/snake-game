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

const KEYS = [true, false, false, false];

let CURRENT_DIRECTION;

let currentFoodCoordinates;
