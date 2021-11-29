const plusEl = document.querySelector("button");
const minusEl = document.querySelectorAll("button")[1];
const pEl = document.querySelector("p");
const pStyle = getComputedStyle(pEl);
plusEl.addEventListener("click", () => {
  if (parseInt(pStyle.fontSize) < 100) {
    pEl.style.fontSize = (parseInt(pStyle.fontSize) + 1).toString() + "px";
  }
});

minusEl.addEventListener("click", () => {
  if (parseInt(pStyle.fontSize) > 6) {
    pEl.style.fontSize = (parseInt(pStyle.fontSize) - 1).toString() + "px";
  }
});
