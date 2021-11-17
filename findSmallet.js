function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2); // FindSmallest was writen wrong, so the function was not defined, so it never ran

//I used the google call stack method.
