function add(a, b) {
  // 讓字串補 0 用的 function
  function addZero(num1, num2) {
    if (num1.length < num2.length) {
      return Array(num2.length - num1.length + 1).join('0') + num1;
    }
    return num1;
  }

  // 判斷兩數長度，短者補 0
  let aString = a;
  let bString = b;
  if (a.length < b.length) {
    aString = addZero(a, b);
  } else if (a.length > b.length) {
    bString = addZero(b, a);
  }

  // 讓兩數變為陣列，用倒數迴圈相加，進位就把 decimal +1 沒有就歸 0
  let decimal = 0;
  const result = [];
  const numOne = aString.split('');
  const numTwo = bString.split('');
  for (let i = numOne.length - 1; i >= 0; i -= 1) {
    const sum = parseInt(numOne[i], 10) + parseInt(numTwo[i], 10) + decimal;
    if (sum > 9) {
      result.push(sum % 10);
      decimal = 1;
    } else {
      result.push(sum);
      decimal = 0;
    }
  }
  // 最後把陣列 reverse 回原樣，並且用 join 組回字串
  return result.reverse().join('');
}

module.exports = add;
