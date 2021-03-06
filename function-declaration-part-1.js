/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }
const welcome = () => {
console.log("Welcome to AppleSeedsBootcamp!");
}
// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }
const power = x => Math.pow(x)

// function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
// }
const add = (x,y) => {
    return x + y;
}

// From function expressions to function declarations
// const hello = () => "Hello!";
function hello() {
    let hello = 'Welcome to Appleseeds Bootcamp!';
    return hello;
}

// const squareRoot = a => Math.sqrt(a);
function squareRoot(a){
    let number = Math.sqrt(a)
    return number;
}

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNumbers(a,b){
    let number = (Math.random() * ( a - b) + b)
    return number;
}
