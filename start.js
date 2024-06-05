function startGame(SNAKE_SPEED) {
  if (!PLAYER_NAME) {
    showErrorText("Choose player name!");
    return;
  }
  isDead = false;
  DIRECTION = DIRECTIONS.LEFT;
  resetScoreAndUpdateRecord();
  SNAKE_ARRAY.length = 0;
  startMenu.style.visibility = "hidden";

  resetBoard();
  countdown().then(() => {
    createSnake(5, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));
    generateFood();
    updateScoreView();

    toggleMouseListeners("remove");
    document.addEventListener("keydown", handleKeyDown);

    stateInterval = setInterval(() => {
      updateBoardState();
    }, SNAKE_SPEED);
    viewIntervalId = setInterval(() => {
      updateBoardView();
    }, SNAKE_SPEED);
    deadIntervalId = setInterval(() => {
      resetGame();
    }, SNAKE_SPEED);
  });
}

function resetGame() {
  if (isDead) {
    resetScoreAndUpdateRecord();
    updateScoreView();
    clearIntervals();
    resetBoard();
    updateBoardView();
    gameOver();
    updateBoardView();
    setTimeout(() => {
      resetBoard();
      updateBoardView();
      startMenu.style.visibility = "visible";
      document.removeEventListener("keydown", handleKeyDown);
      document.addEventListener("keydown", handleMenuElementKeyDown);
      gameTextElement.addEventListener("click", showLeaderboard);
      toggleMouseListeners("add");
      if (PLAYER_NAME) {
        hidePlayerNameMenu();
      }
    }, 2000);
  }
}

function clearIntervals() {
  clearInterval(stateInterval);
  clearInterval(viewIntervalId);
  clearInterval(deadIntervalId);
}

slowSelector.addEventListener("click", () => startGame(GAME_SPEED.SLOW));
normalSelector.addEventListener("click", () => startGame(GAME_SPEED.NORMAL));
fastSelector.addEventListener("click", () => startGame(GAME_SPEED.FAST));

toggleMouseListeners("add");

function countdown() {
  return new Promise((resolve) => {
    document.removeEventListener("keydown", handleMenuElementKeyDown);
    gameTextElement.removeEventListener("click", showLeaderboard);

    numberThree();
    updateBoardView();
    setTimeout(() => {
      resetBoard();
      numberTwo();
      updateBoardView();
      setTimeout(() => {
        resetBoard();
        numberOne();
        updateBoardView();
        setTimeout(() => {
          resetBoard();
          updateBoardView();
          resolve();
        }, 1000);
      }, 1000);
    }, 1000);
  });
}
