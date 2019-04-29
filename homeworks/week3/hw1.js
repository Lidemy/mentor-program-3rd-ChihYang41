function stars(n) {
  const result = [];
  let str = '';
  for (let i = 1; i <= n; i += 1) {
    str += '*';
    result.push(str);
  }
  return result;
}

module.exports = stars;
