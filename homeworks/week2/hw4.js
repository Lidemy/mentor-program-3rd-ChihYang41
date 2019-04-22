function printFactor(n) {
  for (let i = 0; i <= n; i += 1) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

printFactor(10);
