let johnAvg = (89 + 120 + 103) / 3;
let mikeAvg = (116 + 94 + 123) / 3;

if (johnAvg == mikeAvg) {
    console.log("Its a Draw!");
} else if(johnAvg > mikeAvg) {
    console.log("John " + johnAvg);
} else if (mikeAvg > johnAvg) {
    console.log("Mike " + mikeAvg);
}



// With the bonus
let johnAvg = (89 + 120 + 103) / 3;
let mikeAvg = (116 + 94 + 123) / 3;
let maryAvg = (97 + 134 + 105) / 3;

if (johnAvg == mikeAvg == maryAvg) {
    console.log("Its a Draw!");
} else if(johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log("John " + johnAvg);
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log("Mike " + mikeAvg);
} else {
    console.log("Mary " + maryAvg);
}