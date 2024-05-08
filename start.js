function startGame(SNAKE_SPEED) {
  document.removeEventListener("keydown", handleMenuElementKeyDown);
  document.addEventListener("keydown", handleKeyDown);
  currentScore = 0;
  resetBoard();
  updateScoreView();
  SNAKE_ARRAY.length = 0;
  DIRECTION = DIRECTIONS.LEFT;
  startMenu.style.visibility = "hidden";
  createSnake(5, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));
  generateFood();
  stateInterval = setInterval(() => {
    updateBoardState();
  }, SNAKE_SPEED);
  viewInterval = setInterval(() => {
    updateBoardView();
  }, SNAKE_SPEED);
}
slowSelector.addEventListener("click", () => startGame(GAME_SPEED.SLOW));
normalSelector.addEventListener("click", () => startGame(GAME_SPEED.NORMAL));
fastSelector.addEventListener("click", () => startGame(GAME_SPEED.FAST));
