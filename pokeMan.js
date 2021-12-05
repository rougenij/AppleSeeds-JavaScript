function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let pikachu = new Pokemon("Pika", "Electric", "Lighthing Bolt");
let charmander = new Pokemon("Char", "Fire", "Ember");
let Smurf = new Pokemon("Baba", "Smurf", "Good at Warzone");

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you ${this.name}`);
};

Pokemon.prototype.attack = function () {
  console.log(`${this.name} used ${this.attackList}`);
};

console.log(pikachu.callPokemon());
