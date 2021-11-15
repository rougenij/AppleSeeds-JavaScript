const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

function nameInArray(arr) {
  return arr.map(function (nameArr) {
    return { Name: nameArr.name };
  });
}
console.log(nameInArray(data));
function beforeDate(arr) {
  let arrTwo = [];
  arr.ForEach((beforeYear) => {
    let year = beforeYear.birthday.split("-")[2];
    if (year < 1990) {
      arrTwo.push(beforeYear);
    }
  });
}
console.log(beforeDate(data));

const getFood = (arr) => {
  const obj = {};
  arr.ForEach((user) => {
    user.favoriteFoods.meats.ForEach((meatsFood) => {
      if (obj[meatsFood]) {
        obj[meatsFood] += 1;
      } else obj[meatsFood] = 1;
    });
  });
  user.favoriteFoods.fish.ForEach((fishFoods) => {
    if (obj[fishFoods]) {
      obj[fishFoods] += 1;
    } else {
      obj[fishFoods] = 1;
    }
  });
};
console.log(getFood(data));
