// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
const numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

function doubleValues(arr) {
  return arr.map((val) => val * 2);
}

function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach((val) => {
    val % 2 === 0 && newArr.push(val);
  });
  return newArr;
}

function showFirstAndLast(arr) {
  return [arr[0], arr.at(-1)].map((val) => val.toString());
}

function vowelCount(str) {
  const vowelObj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  str
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (letter in vowelObj) {
        vowelObj[letter] += 1;
      }
    });
  return vowelObj;
}

function capitalize(str) {
  return str
    .split("")
    .map((letter) => letter.toUpperCase())
    .join("");
}

function shiftLetters(str) {
  const charCodes = str
    .split(" ")
    .map((word) => word.split("").map((char) => char.charCodeAt()));
  let encoded = "";
  charCodes.forEach((word) => {
    word.forEach((code) => {
      if (code === 90 || code === 122) {
        code -= 26;
      }
      encoded += String.fromCharCode(code + 1);
    });
    encoded += " ";
  });
  return encoded;
}

function swapCase(str) {
  return str
    .split(" ")
    .map((val, i) => (i % 2 === 0 ? val.toUpperCase() : val.toLowerCase()))
    .join(" ");
}
