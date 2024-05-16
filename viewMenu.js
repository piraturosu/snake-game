const slowSelector = document.getElementById("slow");
const normalSelector = document.getElementById("normal");
const fastSelector = document.getElementById("fast");
const startMenu = document.getElementById("startMenu");
const startMenuElements = document.getElementsByClassName("speed-selector");

startMenuElements[1].classList.add("selected");

function handleMouseEnter(event) {
  const element = event.target;
  for (let i = 0; i !== startMenuElements.length; ++i) {
    if (element === startMenuElements[i]) {
      startMenuElements[i].classList.add("selected");
    } else {
      startMenuElements[i].classList.remove("selected");
    }
  }
}

function handleMenuElementKeyDown(event) {
  for (let i = 0; i !== startMenuElements.length; ++i) {
    if (event.key === "ArrowUp") {
      if (startMenuElements[i].classList.contains("selected")) {
        startMenuElements[i].classList.remove("selected");
        if (i === 0) {
          i = startMenuElements.length;
        }
        startMenuElements[i - 1].classList.add("selected");
        return;
      }
    } else if (event.key === "ArrowDown") {
      if (startMenuElements[i].classList.contains("selected")) {
        startMenuElements[i].classList.remove("selected");
        if (i === 2) {
          i = -1;
        }
        startMenuElements[i + 1].classList.add("selected");
        return;
      }
    } else if (event.key === "Enter") {
      if (startMenuElements[i].classList.contains("selected") && i === 0) {
        startGame(GAME_SPEED.SLOW);
      } else if (
        startMenuElements[i].classList.contains("selected") &&
        i === 1
      ) {
        startGame(GAME_SPEED.NORMAL);
      } else if (
        startMenuElements[i].classList.contains("selected") &&
        i === 2
      ) {
        startGame(GAME_SPEED.FAST);
      }
    }
  }
}

function toggleMouseListeners(switchListener) {
  if (switchListener === "add") {
    for (let i = 0; i < startMenuElements.length; ++i) {
      startMenuElements[i].addEventListener("mouseenter", handleMouseEnter);
    }
  } else if (switchListener === "remove") {
    for (let i = 0; i < startMenuElements.length; ++i) {
      startMenuElements[i].removeEventListener("mouseenter", handleMouseEnter);
    }
  }
}

document.addEventListener("keydown", handleMenuElementKeyDown);
