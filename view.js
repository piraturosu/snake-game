const boardUIElement = document.getElementById("board");
const bottomInfoText = document.getElementById("bottomMenu");
const scoreSpan = document.getElementById("scoreSpan");
const recordSpan = document.getElementById("recordSpan");
const slowSelector = document.getElementById("slow");
const normalSelector = document.getElementById("normal");
const fastSelector = document.getElementById("fast");
const startMenu = document.getElementById("startMenu");
const startMenuElements = document.getElementsByClassName("speed-selector");
const menuElements = [...startMenuElements];
bottomInfoText.style.width = `${BOARD_WIDTH * 4}vh`;
startMenuElements[1].classList.add("selected");

function handleKeyDown(event) {
  setDirection(event.key);
}

function createBoardView() {
  boardUIElement.style.gridTemplateColumns = `repeat(${BOARD_WIDTH}, 1fr)`;
  boardUIElement.style.gridTemplateRows = `repeat(${BOARD_HEIGHT}, 1fr)`;
  for (let row of BOARD) {
    for (let cell of row) {
      let cellElement = document.createElement("div");
      if (cell === null) {
        cellElement.classList.add("cell");
      }
      boardUIElement.appendChild(cellElement);
    }
  }
}

function updateScoreView() {
  scoreSpan.innerText = currentScore;
  recordSpan.innerText = storedRecord;
}

function updateBoardView() {
  let i = -1;
  const cellElements = boardUIElement.children;
  for (let row of BOARD) {
    for (let cell of row) {
      const cellElement = cellElements[++i];
      cellElement.innerHTML = "";
      // Remove all classes
      while (cellElement.classList.length > 0) {
        const className = cellElement.classList.item(0);
        if (className === "food") cellElement.children.length = 0;
        cellElement.classList.remove(className);
      }
      if (cell === null) {
        cellElement.classList.add("cell");
      } else if (cell === SNAKE_BODY) {
        cellElement.classList.add("snake");
      } else {
        cellElement.classList.add("food");
        const p = document.createElement("p");
        p.innerText = FOOD_GOOD[indexOfFood];
        cellElement.appendChild(p);
      }
    }
  }

  if (justAteState) {
    updateScoreView();
  }
}

createBoardView();
updateScoreView();

function handleMenuElementEnter(event) {
  const element = event.target;
  element.classList.add("selected");
}
function handleMenuElementLeave(event) {
  const element = event.target;
  element.classList.remove("selected");
}

function handleMenuElementKeyDown(event) {
  for (let i = 0; i < menuElements.length; ++i) {
    if (event.key === "ArrowUp") {
      if (menuElements[i].classList.contains("selected")) {
        startMenuElements[i].classList.remove("selected");
        if (i === 0) {
          i = menuElements.length;
        }
        startMenuElements[i - 1].classList.add("selected");
      }
    }
    if (event.key === "ArrowDown") {
      if (menuElements[i].classList.contains("selected")) {
        startMenuElements[i].classList.remove("selected");
        if (i === 2) {
          i = -1;
        }
        startMenuElements[i + 1].classList.add("selected");
        return;
      }
    }
    if (event.key === "Enter") {
      if (menuElements[i].classList.contains("selected") && i === 0) {
        startGame(GAME_SPEED.SLOW);
        console.log(i);
        return;
      }
      if (menuElements[i].classList.contains("selected") && i === 1) {
        startGame(GAME_SPEED.NORMAL);
        console.log(i);
        return;
      }
      if (menuElements[i].classList.contains("selected") && i === 2) {
        startGame(GAME_SPEED.FAST);
        console.log(i);
        return;
      }
    }
  }
}

for (let i = 0; i < startMenuElements.length; ++i) {
  startMenuElements[i].addEventListener("mouseenter", handleMenuElementEnter);
  startMenuElements[i].addEventListener("mouseleave", handleMenuElementLeave);
  // startMenuElements[i].addEventListener("keydown", handleMenuElementKeyDown);
}
document.addEventListener("keydown", handleMenuElementKeyDown);
