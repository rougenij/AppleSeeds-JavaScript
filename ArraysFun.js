// Instructions
// 1. Fill an array with 100 of a same object using array fill
// method.
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
// 3. Convert only values of an object into one array.
// 4. Convert an array into one object.
// 5. Find out if an array is an array.
// 6. Copy an array.
// • Create a copy of an array that won’t effect the original
// array if modified.
// • Create a copy of an array that will effect the original
// array if modified.

let funArr = Array(100).fill(1, 0);

let funArr2 = Array.from({length: 100}, (_,index) => index + 1)

let obj = {
    a: "School",
    b: "Boy",
    c: "Love",
};
let funArr3 = Object.values(obj);

Array.isArray(funArr); 
// Like why is this needed? xD

const funArr4 = [1, 2];
const funArr5 = [funArr4];

const funArr6 = [1, 2, 3];
const funArr7 = funArr6;