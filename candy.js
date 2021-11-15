const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  return candyStore.candies.find((item) => item.id == id);
}

function getPrice(candyStore, id) {
  const candy = candyStore.candies.find((item) => item.id == id);
  return candy.price;
}

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}

function buy(candyStore, id) {
  let candy = getCandy(candyStore, id);
  let candyIndex = candyStore.candies.indexOf(candy);
  candyStore.cashRegister += getPrice(candyStore, id);
  candyStore.candies[candyIndex].amount--;
  if (!candyStore.candies[candyIndex].amount) {
    candyStore.candies.splice(candyIndex, 1);
  }
}
