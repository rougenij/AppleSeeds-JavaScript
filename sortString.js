const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const ascSort = foods.sort();
console.log(ascSort);
const descSort = foods.sort().reverse();
console.log(descSort);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const foodSort = foodsWithUpperCase.slice().sort(function (a, b) {
  a.toLowerCase;
  b.toLowerCase;
});
console.log(foodSort);
const foodSort2 = foodsWithUpperCase
  .slice()
  .sort(function (a, b) {
    a.toLowerCase;
    b.toLowerCase;
  })
  .reverse();
console.log(foodSort2);
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const longestWordSort = words.sort((a, b) => b.length - a.length);
console.log(longestWordSort);
