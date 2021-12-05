// Instructions
// Answer the following questions:
//! Question 1:
//! In your own words what will this point to and why?(Note
//! this is the global scope)
console.log(this);
//* Console.log(this) --> Returns in the console the reference of the window in the global scrope.
//! Question 2:
//! a. In your own words what will this point to and why.
// At the first, it returns Hello undefined, because greet is an arrow function, So the this does not go to myObj, it goes to greet window.
//! b. How can you fix this code.
// We fix it by making the arrow function a normal function, and that way it'll work
const myObj = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
//! Question 3:
//! In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this); //* because its a decleration function, this will reference to the window
};
//! Question 4:
//! In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this); //* Because its an arrow function, this will reference to myFunArrow window
};
myFuncArrow();
//! Question 5:
//! a. In your own words what will this point to and why.
//!0 b. How can you fix this code.
//* To fix this code, the addEventListener must take 2 arguments and not one. and then, randomly i put in click, soo This references to the window */
document.querySelector(".element").addEventListener("click", () => {
  console.log(this);
});
