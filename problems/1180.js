const countLetters = function(S) {
  if (S.length === 1) return 1;
  let prev = S[0];
  let summ = 1,
    counter = 1;
  for (let index = 1; index < S.length; index++) {
    const element = S[index];
    counter = element === prev ? counter + 1 : 1;
    summ += counter;
    prev = element;
  }
  return summ;
};

console.log(countLetters("aaaba"));
