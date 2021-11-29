const mainEl = document.querySelector("h3");
const textEl = document.querySelector("textarea");
const btnEl = document.querySelector("button");
const msgEl = document.querySelector("p");

btnEl.addEventListener("click", () => {
  console.log(textEl.value.length);
  if (textEl.value.length < 100) {
    msgEl.textContent =
      "Hey! You gotta use atleast 100 characters before Clicking me!";
  }
});
