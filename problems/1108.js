/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => address.replace(/[.]/g, "[.]");

console.log(defangIPaddr("255.100.50.0"));
