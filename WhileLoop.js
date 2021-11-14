const populations = [2855, 142, 541, 6225];
let i = 0;
function populationPercentages(arr) {
  const percentages = [];
  while (i < populations.length) {
    percentages.push(percentagesOfWorld(i));
    i++;
  }
  return percentages;
}

function percentagesOfWorld(population) {
  return (population / 7900) * 100;
}
