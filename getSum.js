function getSum(arr1, arr2) {
  let sum = 0; // sum was const, and const cannot be changed
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  console.log(sum);
}
getSum([1, 2, 3], [5, 66, 23]);

//Sum returns 100
