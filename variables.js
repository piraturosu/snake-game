const BOARD = [];
let BOARD_WIDTH;
let BOARD_HEIGHT;

const SNAKE_ARRAY = [];
const SNAKE_BODY = 0;
const GAME_SPEED = { SLOW: 200, NORMAL: 150, FAST: 100 };
let SNAKE_LENGTH;

// 🐛 🐞 🦋 🐁 🐀 🐿 🍄 🐓 🐇 🐤 🐣
// 👟 🥾 🧦 🌵 🦔 🦂 🧦 🌵 🦔 🦂
// 🐍
const FOOD_GOOD = ["🐛", "🐞", "🐁", "🐀", "🍄", "🐓", "🐇", "🐤", "🐣"];

const DIRECTIONS = {
  LEFT: 0,
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
};
let DIRECTION = DIRECTIONS.LEFT;

let FOOD_POSITION;
let indexOfFood;

let currentScore = 0;
let localRecord = 0;
