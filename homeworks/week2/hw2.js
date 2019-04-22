function capitalize(str) {
  if (str[0].toUpperCase() !== str[0]) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return str;
}

console.log(capitalize('hello'));
