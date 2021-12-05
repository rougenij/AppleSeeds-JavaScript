function square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

square.prototype.isSquare = function () {
  if (this.a === this.b && this.a === this.c && this.a === this.d) {
    return true;
  } else return false;
};
let square1 = new square(2, 2, 2, 1);
console.log(square1.isSquare());
