const BOARD = [];
let BOARD_WIDTH;
let BOARD_HEIGHT;

const SNAKE_ARRAY = [];
const SNAKE_BODY = 0;
let SNAKE_SPEED;
const SLOW = 200;
const NORMAL = 150;
const FAST = 100;
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
