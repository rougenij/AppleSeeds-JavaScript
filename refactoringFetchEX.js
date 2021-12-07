const btn1 = document.querySelector(".btn");

const holder1 = document.createElement("div");
holder1.classList.add("data-holder");
//can't be chained
document.body.append(holder1); // it's value has been added to the body element

const fetch1 = async () => {
  try {
    const res1 = await fetch(`https://api.jokes.one/jod`);
    const data = await res1.json();

    //instead of assigning the div directly in html file
    const jokeTitle = data.contents.jokes[0].joke.title;
    holder1.textContent = jokeTitle;

    const jokeText = data.contents.jokes[0].joke.text;
    holder1.textContent += jokeText;
    //like concatenation
  } catch (error) {
    console.log(`something went wrong about ${error}`);
    //we can just add a charcter to the url, so it couldn't reach it's destination
  }
};

btn1.addEventListener("click", fetch1);
