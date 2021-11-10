// Instructions
// Create array with numbers :
// const arr = [1,7,3,0,-5,7,3,9];
// 1. Print with for loop all the number.
// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
// 3. Create function “arraySum” , the function return the sum of all elements in array.
// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array. 

const numArr = [1,7,3,0,-5,7,3,9];

for(let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}

function arrayLength(arr) {
    let length = 0;
    for (let i of arr) {
        length++;
    }
    return length;
}

function arraySum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

function arrayMulti(arr) {
    let multi = 1;
    for (let i of arr) {
        multi *= i;
    }
    return multi;
}