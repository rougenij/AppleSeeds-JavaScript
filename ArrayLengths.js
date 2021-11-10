// Write a function that will receive an array of strings and will return a new
// array containing all the lengths of all the strings in the array it got as a
// parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

function arrStringLength(arr) {
    let sArr = [];
    for (let i of arr) {
        sArr.push(i.length);
    }
    return sArr;
}


// Console Answer
//  arrStringLength(["boo", "doooo", "hoo","ro"])
// [3, 5, 3, 2]