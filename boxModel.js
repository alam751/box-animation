let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let blue = document.querySelector(".blue");
let megenta = document.querySelector(".megenta");
let purple = document.querySelector(".purple");
let pink = document.querySelector(".pink");
let yellow = document.querySelector(".yellow");

const colorArr = [blue, megenta, purple, pink, yellow];

// addEvent listners

start.addEventListener("click", () => {
  start.style.border = "2px solid blue";
  stop.style.border = "none";
  let interval = setInterval(() => randomHeight(), 1000);

  stop.addEventListener("click", () => {
    stop.style.border = "2px solid blue";
    start.style.border = "none";
    clearInterval(interval);
  });
});

// color height change

function randomHeight() {
  colorArr.map((color) => {
    let hght = Math.floor(Math.random() * 224);
    color.style.height = hght + "px";
  });
}
