function startGame(SNAKE_SPEED) {
  isDead = false;
  DIRECTION = DIRECTIONS.LEFT;
  currentScore = 0;
  SNAKE_ARRAY.length = 0;
  startMenu.style.visibility = "hidden";

  resetBoard();
  countdown().then(() => {
    console.log("Countdown completed! Running another function...");
    createSnake(5, Math.floor(BOARD_WIDTH / 2), Math.floor(BOARD_HEIGHT / 2));
    generateFood();
    updateScoreView();

    toggleMouseListeners("remove");
    document.removeEventListener("keydown", handleMenuElementKeyDown);
    document.addEventListener("keydown", handleKeyDown);

    stateInterval = setInterval(() => {
      updateBoardState();
    }, SNAKE_SPEED);
    viewInterval = setInterval(() => {
      updateBoardView();
    }, SNAKE_SPEED);
    deadInterval = setInterval(() => {
      resetGame();
    }, SNAKE_SPEED);
    // Run another function after countdown completes
  });
}

function resetGame() {
  if (isDead) {
    clearIntervals();
    resetBoard();
    updateBoardView();
    startMenu.style.visibility = "visible";
    document.removeEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleMenuElementKeyDown);
    toggleMouseListeners("add");
  }
}

function clearIntervals() {
  clearInterval(stateInterval);
  clearInterval(viewInterval);
  clearInterval(deadInterval);
}

slowSelector.addEventListener("click", () => startGame(GAME_SPEED.SLOW));
normalSelector.addEventListener("click", () => startGame(GAME_SPEED.NORMAL));
fastSelector.addEventListener("click", () => startGame(GAME_SPEED.FAST));

toggleMouseListeners("add");

// function countdown() {
//   numberThree();
//   updateBoardView();
//   setTimeout(resetBoard, 1000);
//   numberTwo();
//   updateBoardView();
//   setTimeout(resetBoard, 1000);
//   numberOne();
//   setTimeout(resetBoard, 1000);
// }

function countdown() {
  return new Promise((resolve) => {
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
          resolve(); // Resolve the promise when countdown completes
        }, 1000);
      }, 1000);
    }, 1000);
  });
}

// Usage:
