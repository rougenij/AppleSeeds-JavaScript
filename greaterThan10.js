function ten(number) {
  return new Promise((resolve, reject) => {
    if (number >= 10) {
      resolve("Greater than 10, Yayyyyy");
    } else {
      reject("Opsss, wrong number pal");
    }
  })
    .then((data) => {
      console.log(data);
    })
    .catch((data) => {
      console.log(data);
    });
}

ten(10);
ten(9);
