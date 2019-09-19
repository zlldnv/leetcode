/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
const calculateTime = (keyboard, word) => {
  const keyBoardMap = {};
  for (let index = 0; index < keyboard.length; index++) {
    const element = keyboard[index];
    keyBoardMap[element] = index;
  }
  let pointer = 0;
  let summ = 0;
  for (let i = 0; i < word.length; i++) {
    const symbol = word[i];
    summ += Math.abs(keyBoardMap[symbol] - pointer);
    pointer = keyBoardMap[symbol];
  }
  return summ;
};

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba"));
