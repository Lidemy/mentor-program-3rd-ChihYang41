function join(str, concatStr) {
  let output = str[0];
  for (let i = 1; i < str.length; i += 1) {
    output += concatStr + str[i];
  }
  return output;
}

function repeat(str, times) {
  let output = '';
  for (let i = 0; i < times; i += 1) {
    output += str;
  }
  return output;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));
