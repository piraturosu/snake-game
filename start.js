function startGame(SNAKE_SPEED) {
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
