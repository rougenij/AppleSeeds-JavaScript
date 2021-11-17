function calcAverage(arr) {
  var sum = 0; // Sum is undefined, so if we add numbers to it, it'll become NaN
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length; // Returns Nan, we have to give sum a value at the beginning so it returns a value and not a NaN
}
calcAverage([85, 90, 92]);
