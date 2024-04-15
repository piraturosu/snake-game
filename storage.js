function storeRecordScore(numberKey, numberValue) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(numberKey, numberValue.toString());
    console.log("Number stored successfully.");
  } else {
    console.log("Sorry, your browser does not support Web Storage.");
  }
}

var key = "Record Score";

function getNumberFromLocalStorage(numberKey) {
  if (typeof Storage !== "undefined") {
    var storedNumber = localStorage.getItem(numberKey);
    if (storedNumber !== null) {
      return parseInt(storedNumber);
    } else {
      console.log("No number found for the provided key.");
      return null;
    }
  } else {
    console.log("Sorry, your browser does not support Web Storage.");
    return null;
  }
}

let storedRecord = getNumberFromLocalStorage(key);
if (storedRecord !== null) {
  console.log("Number retrieved from local storage:", storedRecord);
} else {
  console.log("Failed to retrieve number from local storage.");
}
