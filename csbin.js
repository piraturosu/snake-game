function createSnake(length, x, y) {
  SNAKE_LENGTH = length;

  for (let i = 0; i !== length; ++i) {
    BOARD[y][x + i] = SNAKE_ID;
  }
}
frame1:
BOARD[5][10]
BOARD[5][10 + length-1]
apas sus =>
frame2:
BOARD[5--][10] => cap
BOARD[5][13--]
frame3:
BOARD[4--][10]
BOARD[5][12--]
frame4:
BOARD[3--][10]
BOARD[5][11--]
