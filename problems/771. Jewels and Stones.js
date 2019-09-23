/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => (S.match(new RegExp(J.split("").join("|"), "g")) || []).length;

console.log(numJewelsInStones("aA", "aAAbbbb"));
