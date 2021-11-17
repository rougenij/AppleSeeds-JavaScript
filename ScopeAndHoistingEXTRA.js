//Block 1
var x = 10;
console.log(x); // returns 10
if (true) {
  var x = 20;
  console.log(x); // returns 20
}
console.log(x); // returns 20

//Block 2
var x = 10;
console.log(x); // returns 10
if (true) {
  (function () {
    var x = 20;
    console.log(x); // 200
  })();
}
console.log(x); // returns 10

//Block 3
var x = 10;
console.log(x); // Returns 10
function test() {
  var x = 20;
  console.log(x); // Returns 20
  if (x > 10) {
    // True
    let x = 30;
    console.log(x); // Returns 30
  }
  console.log(x); // returns 20
}
test();
console.log(x); // returns 10

//Block 4
var x; // X = 10
x = 10;
function test() {
  var x;
  if (x > 20) {
    // undefined
    x = 50;
  }
  console.log(x);
}
test();

//Block 5
function test() {
  var x, y;
  if (false) {
    x = 50;
  }
  console.log(x); // undefined
  console.log(y); // undefined
  y = 100;
  console.log(y); // returns y = 100
}
test();

//Block 6

function test() {
  foo();
  bar();
  // Function defiened
  // using function declaration
  function foo() {
    console.log("foo");
  }
  // Function defined
  // using function expression
  var bar = function () {
    console.log("bar");
  };
}
test(); // foo will print foo, bar() is not a function
