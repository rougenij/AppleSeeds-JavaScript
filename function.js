let answerone = describeCountry("Finland", "5.531 million", "Helsinki");
let answertwo = describeCountry("Japan", "125.8 million", "Tokyo");
let answerthree = describeCountry("United States of America", "329.5 million" , "Washington, D.C.");

console.log(answerone);
console.log(answertwo);
console.log(answerthree);

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}