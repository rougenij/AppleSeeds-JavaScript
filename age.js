const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const msgEl = document.querySelector("p");

btnEl.addEventListener("click", () => {
  if (inputEl.value > 18) {
    msgEl.textContent = "you can drink appear";
  } else msgEl.textContent = "You are too young";
});
