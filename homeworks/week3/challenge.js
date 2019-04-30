const mutiply = (a, b) => {
  // 先處理字串跟長度，同時用 map 把字串轉為數字
  const result = [];
  const aArray = a.split('').map(value => parseInt(value, 10)).reverse();
  const bArray = b.split('').map(value => parseInt(value, 10)).reverse();
  const aLen = aArray.length;
  const bLen = bArray.length;

  // 先把 result 都歸 0，不然累加的時候會出現 NaN
  for (let i = 0; i < aLen; i += 1) {
    for (let j = 0; j < bLen; j += 1) {
      result[i + j] = 0;
    }
  }
  // 處理乘法，先不處理進位，i + j 結果相同的都放到同樣的 result index 中
  for (let i = 0; i < aLen; i += 1) {
    for (let j = 0; j < bLen; j += 1) {
      result[i + j] += aArray[i] * bArray[j];
    }
  }

  // 處理相加與進位問題
  const newLen = result.length;
  for (let i = 0; i < newLen; i += 1) {
    const decimal = result[i];
    // 避免因為少進行一次迴圈出現 NaN 所寫的判斷式
    if (newLen === 1) {
      break;
    } else if (result[newLen - 1].toString().length === 2) {
      break;
    }
    if (decimal > 9) {
      result[i] = decimal % 10;
      result[i + 1] += Math.floor(decimal / 10);
    }
  }
  // 把陣列 reverse 並且組成字串回傳
  return result.reverse().join('');
};

console.log(mutiply('9', '9'));
