function largestNumber(x: number, y: number, z: number): void {
  const largest: number = Math.max(x, y, z);
  console.log(`The largest number is ${largest}.`);
}

largestNumber(-3, -5, -22.5);
