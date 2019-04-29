function alphaSwap(str) {
  let output = '';
  for (let i = 0; i < str.length; i += 1) {
    output += (str[i].toUpperCase() !== str[i]) ? str[i].toUpperCase() : str[i].toLowerCase();
  }
  return output;
}

module.exports = alphaSwap;
