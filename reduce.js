const nums = [1, 2, 3, 5, 5, 9];

const avg = nums.reduce((a, b) => a + b) / nums.length;
console.log(avg);

const max = nums.reduce((max, currentVal) => {
  if (currentVal > max) return currentVal;
  return max;
});
console.log(max);

const evenSum = nums.reduce((num, currentVal) =>
  currentVal % 2 === 0 ? (num += currentVal) : num
);
console.log(evenSum);
