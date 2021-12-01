const allEl = document.querySelector("div");
const form = document.querySelector("form[data-form]");
const nameEl = document.querySelector("input[data-name]");
const ageEl = document.querySelector("input[data-age]");
const emailEl = document.querySelector("input[data-email]");
const submitBtn = document.querySelector("input[data-submitBtn]");

const textWindow = document.createElement("div");
const infoText = document.createElement("p");
const confirmBtn = document.createElement("button");
const changeInfoBtn = document.createElement("button");
confirmBtn.textContent = "Confirm your information";
changeInfoBtn.textContent = "Ohh, You want to change your Info click me?";
submitBtn.addEventListener("click", (e) => {
  if (nameEl.value.length === 0) {
    alert("Please fill in your name");
  } else if (ageEl.value.length == 0) {
    alert("Please fill in your age");
  } else if ((emailEl.value.length = 0)) {
    alert("Please fill in your email address");
  } else {
    alert("Yay, you successfully filled out form! How great is that.");
    form.appendChild(textWindow);
    infoText.textContent = `Hello there ${nameEl.value}, We can see that your age is ${ageEl.value}, and your email address that you signed up with is ${emailEl.value}, Please click Confirm to move on, Or change if you wrote something wrong`;
    textWindow.appendChild(infoText);
    infoText.appendChild(confirmBtn);
    infoText.appendChild(changeInfoBtn);
  }
  e.preventDefault();
});
confirmBtn.addEventListener("click", () => {
  alert("Ohh cool, everything is alright! lets move on to the next step!");
  allEl.style.display = "none";
});
changeInfoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  allEl.style.display = "none";
  const newAll = document.createElement("div");
  const newForm = document.createElement("form");
  const newName = document.createElement("input");
  const newAge = document.createElement("input");
  const newEmail = document.createElement("input");
  newForm.appendChild(newName);
  newForm.appendChild(newAge);
  newForm.appendChild(newEmail);
  newForm.appendChild(confirmBtn);
  newAll.appendChild(newForm);
  document.body.appendChild(newAll);
  newName.value = nameEl.value;
  newAge.value = ageEl.value;
  newEmail.value = emailEl.value;
});
