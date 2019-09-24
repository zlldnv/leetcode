const isArmstrong = N =>
  N ===
  N.toString()
    .split("")
    .reduce((acc, current, currentIndex, array) => acc + Math.pow(Number(current), array.length), 0);

console.log(isArmstrong(153));
