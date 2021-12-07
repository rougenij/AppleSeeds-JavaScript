// A promise is an object represting the eventfual completion or failure of an asynchronous operation
// basically its like promising a value that you dont have atm
// a promise is a returned object to which you attach callbacks, instead of passing callbacks into a fuction

//TODO The way to create a new promise in JS is the following:
const random = new Promise((resolve, reject) => {
  //! When we create a promise, we pass in a new function,
  //!and this function always has 2 paremeters, and they are resolve and reject, and they are function,
  //!and at any point in the function we call Resolve, the function will be resolved, if we call Reject, the function will be rejected
  //? if we type in console random, we'll get >Promise {<pending>}
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else reject();
});
random.then(() => {
  console.log("YAY WE RESOLVED IT");
}); //* This .then methond will run if our promise is resolved.
random.catch(() => {
  console.log("we got rejected");
  //* This .catch methond will run if our promise is rejected
});

//! We can chain the .then and .catch
