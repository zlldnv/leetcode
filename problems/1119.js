/**
 * @param {string} S
 * @return {string}
 */
const removeVowels = S => S.replace(/[aeiou]/g, "");

console.log(removeVowels("leetcodeisacommunityforcoders"));
