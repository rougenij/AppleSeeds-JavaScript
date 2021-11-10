// Create a function that takes one argument, an array.
// Use this array:
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive


const Arr = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function count(arr) {
    const letters = {};
    for (let word of arr) {
        word = word.replace(/\s+/g, '');
        for (let letter of word.toLowerCase()) {
            if (letters[letter] == undefined) {
                letters[letter] = 0;
            }
            letters[letter]++;
        }
    }
    return letters;
}

console.log(count(Arr));