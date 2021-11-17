//Block 1
function funcA() {
  console.log(a); // Returns undefined
  console.log(foo()); // returns 2
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

//Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); // Aurelio De Rosa
var test = obj.prop.getFullName;
console.log(test()); // undefined

//Block 3
function funcB() {
  let a = (b = 0); // a = b = 0
  a++; // a= 1
  return a; // This returns 1
}
funcB();
console.log(typeof a); // undefined <----- returns undefined because B is in global, and A is related to it, so it returns undefined cuz we dont have its value outside the function FuncB
console.log(typeof b); // number

//Block 4

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2"); // returns 2
}
funcC(); // returns 2

//Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d); // d = 1
function funcD2() {
  var e = 1;
}
funcD2(); // e = 1
console.log(e); // E is not defined outside funcD1

//Block 6
function funcE() {
  console.log("Value of f in local scope: ", f); // f is defined before funcE so it returns 1 as f
}
console.log("Value of f in global scope: ", f); // f is undefined
var f = 1;
funcE();
