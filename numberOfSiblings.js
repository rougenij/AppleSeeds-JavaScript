numSibling = window.prompt("How many siblings do you have?");


if (parseInt(numSiblings) === 0) {
  console.log("No Siblings");
} else if (parseInt(numSiblings) >= 1) {
  console.log("More than 1 sibling");
} else {
    console.log("You have one sibling");
}
