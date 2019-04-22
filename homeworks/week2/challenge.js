function search(arr, n) {
  let low = 0;
  let high = arr.length;
  let mid;
  let element;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = arr[mid];
    if (element < n) {
      low = mid + 1;
    } else if (element > n) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(search([1, 3, 10, 14, 39], 14));
