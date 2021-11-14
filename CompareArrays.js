const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function compareArray(food, food2) {
  let arr = [];
  for (let i = 0; i < food.length; i++) {
    for (let j = 0; j < food2.length; j++) {
      if (food[i] == food2[j]) arr.push(food[i]);
    }
  }
  console.log(arr);
}
