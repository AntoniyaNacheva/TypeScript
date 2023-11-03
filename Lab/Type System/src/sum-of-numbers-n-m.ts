function sumOfNumbers(n: string, m: string): void {
  const nToNum = Number(n);
  const mToNum = Number(m);

  let sum = 0;

  for (let i = nToNum; i <= mToNum; i++) {
    sum += i;
  }
  console.log(sum);
}

sumOfNumbers('-8', '20');
