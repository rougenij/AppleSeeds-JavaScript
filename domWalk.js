const start = document.querySelector("ul .start-here");
start.innerText = "main title";

const secondList = document.getElementsByTagName("ul")[1];
const li = document.createElement("li");
li.appendChild(document.createTextNode("sub title 4"));
secondList.appendChild(li);

const remove = document.getElementsByTagName("li")[7];
// const remove = document.getElementsByTagName("li").lastElementChild;
remove.remove();

document.title = "Master Of The Dom";

const change = document.querySelector("p");
change.innerHTML = "Changing this to whatever i want cuz why not";
