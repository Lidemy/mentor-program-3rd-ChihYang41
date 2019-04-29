function isPalindromes(str) {
  return str.split('').reverse().join('') === str;
}

module.exports = isPalindromes;
