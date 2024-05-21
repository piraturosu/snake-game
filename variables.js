const BOARD = [];
let BOARD_WIDTH;
let BOARD_HEIGHT;

const SNAKE_ARRAY = [];
const SNAKE_BODY = 0;
const GAME_SPEED = { SLOW: 200, NORMAL: 150, FAST: 100 };
let SNAKE_LENGTH;

let stateInterval;
let viewIntervalId;
let deadIntervalId;
let isDead = false;

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
let PLAYER_NAME = restorePlayerName();
const LEADERBOARD = restoreLeaderboard();
let storedRecord = LEADERBOARD[PLAYER_NAME] ?? 0;

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

function gameOver() {
  //G
  BOARD[1][4] = 0;
  BOARD[1][5] = 0;
  BOARD[1][6] = 0;
  BOARD[1][7] = 0;
  BOARD[2][3] = 0;
  BOARD[3][3] = 0;
  BOARD[3][6] = 0;
  BOARD[3][7] = 0;
  BOARD[4][3] = 0;
  BOARD[4][7] = 0;
  BOARD[5][3] = 0;
  BOARD[5][7] = 0;
  BOARD[6][4] = 0;
  BOARD[6][5] = 0;
  BOARD[6][6] = 0;
  //A
  BOARD[1][10] = 0;
  BOARD[1][11] = 0;
  BOARD[1][12] = 0;
  BOARD[2][9] = 0;
  BOARD[2][13] = 0;
  BOARD[3][9] = 0;
  BOARD[3][10] = 0;
  BOARD[3][11] = 0;
  BOARD[3][12] = 0;
  BOARD[3][13] = 0;
  BOARD[4][9] = 0;
  BOARD[4][13] = 0;
  BOARD[5][9] = 0;
  BOARD[5][13] = 0;
  BOARD[6][9] = 0;
  BOARD[6][13] = 0;
  //M
  BOARD[1][15] = 0;
  BOARD[1][19] = 0;
  BOARD[2][15] = 0;
  BOARD[2][16] = 0;
  BOARD[2][18] = 0;
  BOARD[2][19] = 0;
  BOARD[3][15] = 0;
  BOARD[3][17] = 0;
  BOARD[3][19] = 0;
  BOARD[4][15] = 0;
  BOARD[4][19] = 0;
  BOARD[5][15] = 0;
  BOARD[5][19] = 0;
  BOARD[6][15] = 0;
  BOARD[6][19] = 0;
  //E
  BOARD[1][21] = 0;
  BOARD[1][22] = 0;
  BOARD[1][23] = 0;
  BOARD[1][24] = 0;
  BOARD[1][25] = 0;
  BOARD[2][21] = 0;
  BOARD[3][21] = 0;
  BOARD[3][22] = 0;
  BOARD[4][21] = 0;
  BOARD[5][21] = 0;
  BOARD[6][21] = 0;
  BOARD[6][22] = 0;
  BOARD[6][23] = 0;
  BOARD[6][24] = 0;
  BOARD[6][25] = 0;
  //O
  BOARD[8][5] = 0;
  BOARD[8][6] = 0;
  BOARD[8][7] = 0;
  BOARD[9][4] = 0;
  BOARD[9][8] = 0;
  BOARD[10][4] = 0;
  BOARD[10][8] = 0;
  BOARD[11][4] = 0;
  BOARD[11][8] = 0;
  BOARD[12][4] = 0;
  BOARD[12][8] = 0;
  BOARD[13][5] = 0;
  BOARD[13][6] = 0;
  BOARD[13][7] = 0;
  //V
  BOARD[8][10] = 0;
  BOARD[8][14] = 0;
  BOARD[9][10] = 0;
  BOARD[9][14] = 0;
  BOARD[10][10] = 0;
  BOARD[10][14] = 0;
  BOARD[11][11] = 0;
  BOARD[11][13] = 0;
  BOARD[12][11] = 0;
  BOARD[12][13] = 0;
  BOARD[13][12] = 0;
  //E
  BOARD[8][16] = 0;
  BOARD[8][17] = 0;
  BOARD[8][18] = 0;
  BOARD[8][19] = 0;
  BOARD[8][20] = 0;
  BOARD[9][16] = 0;
  BOARD[10][16] = 0;
  BOARD[10][17] = 0;
  BOARD[11][16] = 0;
  BOARD[12][16] = 0;
  BOARD[13][16] = 0;
  BOARD[13][17] = 0;
  BOARD[13][18] = 0;
  BOARD[13][19] = 0;
  BOARD[13][20] = 0;
  //R
  BOARD[8][22] = 0;
  BOARD[8][23] = 0;
  BOARD[8][24] = 0;
  BOARD[8][25] = 0;
  BOARD[9][22] = 0;
  BOARD[9][26] = 0;
  BOARD[10][22] = 0;
  BOARD[10][23] = 0;
  BOARD[10][24] = 0;
  BOARD[10][25] = 0;
  BOARD[11][22] = 0;
  BOARD[11][24] = 0;
  BOARD[12][22] = 0;
  BOARD[12][25] = 0;
  BOARD[13][22] = 0;
  BOARD[13][26] = 0;
}
