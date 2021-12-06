const wonderWoman = {
  name: "Diana Prince",
};
const batman = {
  name: "Bruce Wayne",
};
const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}
//! Normal For Loop
function printHeroes(heroes, printFunc) {
  for (let i = 0; i < heroes.length; i++) {
    printFunc.call(heroes[i]);
  }
}
printHeroes(superHeroes, printName);

//! For of Loop
function printHeroes(heroes, printFunc) {
  for (let hero of heroes) {
    printFunc.call(hero);
  }
}

printHeroes(superHeroes, printName);

//! ForEach loop
function printHeroes(heroes, printFunc) {
  heroes.forEach((hero) => {
    printFunc.call(hero);
  });
}
printHeroes(superHeroes, printName);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
