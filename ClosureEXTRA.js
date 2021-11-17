//Block 1
(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged? a = 0
  })(1);
})(0);

// Block 2
let count = 0;
(function immediate() {
  if (count === 0) {
    // True
    let count = 1;
    console.log(count); // What is logged? count = 1
  }
  console.log(count); // What is logged? count = 0
})();

//Block 3
var module = (function () {
  var foo = "foo";
  function addToFoo(bam) {
    foo = bam;
    return foo; // Returns foo = bam
  }
  var publicInterface = {
    bar: function () {
      return "bar"; // Returns string bar
    },
    bam: function () {
      return addToFoo("bam");
    },
  };
  return publicInterface;
})();
console.log(module.bar()); // "bar"
console.log(module.bam()); // "bam"

// Block 4
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message); // Returns count is 0
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
