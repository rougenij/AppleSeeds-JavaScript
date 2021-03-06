// const getIDs = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([532, 543, 753, 1, 5]);
//     }, 1500);
//   });

// const getRecipe = (recipeID) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (ID) => {
//         const recipe = {
//           title: "Fresh tomato pasta",
//           publisher: "Pinchas Hodadad",
//         };
//         resolve(`${ID}: ${recipe.title}`);
//       },
//       1500,
//       recipeID
//     );
//   });
// };

// await getIDs()
//await getRecipe(IDs[2]);
//
//   .catch((error) => {
//     console.log("It is an error!");
//   });

const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

const func1 = async () => {
  try {
    const ids = await getIDs();
    const recipe1 = await getRecipe(ids[2]);
    console.log(recipe1);
  } catch (error) {
    console.log(`It is an error!,something went wrong`);
  }
};
func1();

//! to check the error 1st
//! const getIDs = () =>
//! new Promise((resolve, reject) => {
//! if(true){
//! reject("Code:404")
//! }else{
//!  setTimeout(() => {
//!       resolve([532, 543, 753, 1, 5]);
//!     }, 1500);
//!   }
//! });

//!  their solution
//!  .then((IDs) => {
//!  console.log(IDs);
//!  return getRecipe(IDs[2]);
//!  })
//!  .then((recipe) => {
//!  console.log(recipe);
//!  })
//!  .catch((error) => {
//!  console.log("It is an error!");
