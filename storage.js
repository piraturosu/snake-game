function savePlayerName() {
  sessionStorage.setItem("PLAYER_NAME", PLAYER_NAME);
}

function restorePlayerName() {
  return sessionStorage.getItem("PLAYER_NAME") || "";
}

function restoreLeaderboard() {
  return JSON.parse(localStorage.getItem("leaderboard")) || {};
}

function saveLeaderboard(leaderboard) {
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}
