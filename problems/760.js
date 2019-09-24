const anagramMappings = (A, B) => {
  const map = B.reduce((accumulator, currentValue, currentIndex) => {
    accumulator[currentValue] = currentIndex;
    return accumulator;
  }, {});
  return A.map(el => map[el]);
};

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));
