const Obj = {
  name: "Rouge",
  printName: function () {
    console.log(this.name);
  },
  printName2: function () {
    setTimeout(this.printName.bind(this), 1000);
  },
};
Obj.printName2();
