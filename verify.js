const textBoxes = document.querySelectorAll("input");
let verify = [];
textBoxes.forEach((input, i) => {
  input.addEventListener("input", () => {
    const nextBox = document.getElementById(
      parseInt(input.getAttribute("id")) + 1
    );
    nextBox.focus();
  });
  input.addEventListener("paste", (elment) => {
    elment.clipboardData
      .getData("text")
      .slice(0, 6 - i)
      .split("")
      .forEach((letter, j) => {
        textBoxes[i + j].value = letter;
      });
  });
});
