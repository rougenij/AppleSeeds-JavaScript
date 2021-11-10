const grade = (gradescore) => {
    if (gradescore <= 64) {
        return "F";
    } else if (gradescore <= 69 && gradescore >=65 ) {
        return "D";
    } else if (gradescore <= 79 && gradescore >= 66) {
        return "C";
    } else if (gradescore <= 89 && gradescore >= 80) {
        return "B";
    } else {
        return "A";
    }
}