const textEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const smileys = document.querySelector("p");

btnEl.addEventListener("click", () => {
  smileys.textContent = "";
  if (/^\d+$/.test(textEl.value)) {
    for (let i = 0; i < textEl.value; i++) {
      smileys.textContent += "☺";
    }
  } else {
    smileys.textContent = "Hello? I only said numbersssss! LISTEN TO ME";
  }
});
