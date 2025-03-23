let boxes = document.querySelectorAll(".boxes");
let body = document.querySelector("body");
boxes.forEach((box) => {
  box.addEventListener("click", byclicking);
});
let h1 = document.querySelector("h1");
let winning = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
currentmark = "x";
function byclicking() {
  if (currentmark === "x") {
    this.style.color = "#FF4C4C";
  } else {
    this.style.color = "#32CD32";
  }
  this.innerText = `${currentmark}`;
  this.disabled = true;
  change();
  checkWinner();
}
function change() {
  if (currentmark == "x") {
    currentmark = "o";
  } else {
    currentmark = "x";
  }
}
function checkWinner() {
  for (pattern of winning) {
    pos1 = boxes[pattern[0] - 1].innerText;
    pos2 = boxes[pattern[1] - 1].innerText;
    pos3 = boxes[pattern[2] - 1].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("Winner");
        if (pos1 == "x") {
          h1.style.color = "red";
          h1.innerText = `Player-1 is winner`;
        } else {
          h1.style.color = "green";
          h1.innerText = `Player-2 is winner`;
        }
      }
    }
  }
}
let reset = document.querySelector(".reset");
reset.addEventListener("click", resetting);
function resetting() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    currentmark = "x";
    h1.innerText = "";
  });
}
