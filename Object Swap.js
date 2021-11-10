// Instructions
// 1. Create a function that receives 1 argument, an object and returns a new
// object with the properties and values swapped.

function objectSwap(obj) {
    const newObj = {};
    for(let i in obj) {
        newObj[obj[i]] = i;
    }
    return newObj;
}