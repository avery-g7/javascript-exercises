const palindromes = function (str) {
const reverseStr = str.toLowerCase().replace(/[^A-Za-z0–9]/g, '');
return reverseStr.split('').reverse().join('') == reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
