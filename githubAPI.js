// Github API, Just add username you want after /users/ --->  https://api.github.com/users/
// Basically what i want is to have an input bar with search button that has an event listener on it
// The input bar value gets inserted to the API after users/
// and then
//TODO 1) Inset the value image
//TODO 2) Insert the value itself under the image
//TODO 3) Insert the public repo of the value under everything
//* Create the input and search button dynamical everytime i open the live server / webpage

window.addEventListener("load", () => {
  const inputEl = document.createElement("input"); // Search bar
  const searchBtn = document.createElement("button"); // Search Button
  searchBtn.textContent = "Search";
  document.body.appendChild(inputEl);
  document.body.appendChild(searchBtn);

  searchBtn.addEventListener("click", () => {
    if (inputEl.value.length === 0) {
      alert("Excuse me, Insert a name, you cannot leave the input empty");
    } else {
      fetchingData(inputEl.value);
    }
  });
  const fetchingData = async (name) => {
    const fetchingData = await fetch("https://api.github.com/users/" + name);
    const data = await fetchingData.json();
    if (data.login === undefined) {
      throw Error("Request 404");
    } else {
      const holder = document.createElement("div");
      const profileImgEl = document.createElement("img");
      const nameEl = document.createElement("h3");
      const publicRepo = document.createElement("h5");
      profileImgEl.src = data.avatar_url;
      nameEl.textContent = data.login;
      publicRepo.textContent = data.public_repos;
      holder.innerHTML = `Link to ${name}'s :<a href="https://github.com/${name}"> GitHub </a> <br>`;
      holder.appendChild(profileImgEl);
      holder.appendChild(nameEl);
      holder.appendChild(publicRepo);
      document.body.appendChild(holder);
      console.log(data);
      inputEl.value = "";
      holder.addEventListener("click", () => {
        window.open(`https://github.com/${name}`);
      });
    }
  };
});

// const inputEl = document.createElement("input");
// const searchBtn = document.createElement("button");
// inputEl.setAttribute("data", "data-searchBar");
// searchBtn.setAttribute("data", "data-searchButton");
// searchBtn.textContent = "Search";
// document.body.appendChild(inputEl);
// document.body.appendChild(searchBtn);
