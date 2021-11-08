function boom(n) {
    let hasSevenInIt = false;
    for (let i = 1; i <= n; i++) {
        for (let j of i.toString()) {
            if (hasSevenInIt == false && j % 7 == 0) {
                hasSevenInIt = true;
            }
        }
        if (i % 7 == 0 && hasSevenInIt) {
            console.log("BOOM-BOOM");
        } else if (i % 7 == 0) {
            console.log("BOOM");
        } else {
            console.log(i);
        }
        hasSevenInIt = false;
    }

}