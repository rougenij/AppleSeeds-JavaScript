//Block 1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2); // Result = 5 everytime

// Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2(); //---> Returns nothing cuz return is not set to anything
console.log(a); // Returns 1 --->

// Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100); // When the i leaves the for, Its value is 3, so when it goes to setTimeout, the log[i] = log[3], so it prints 3 three times cuz the for is for 3.
}



const secureBooking = function () {
  let passengerCount = 0;
​
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}
//booker function is in the global scope
const booker = secureBooking();
booker();
booker();
booker();
​