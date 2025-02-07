export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}


export function isPerfect(n: number): boolean {
  if (n < 0) return false; // Negative numbers cannot be perfect squares
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
}


export function isArmstrong(n: number): boolean {
  if (n < 0) return false;
  const digits = n.toString();
  const power = digits.length;
  let sum = 0;
  for (const digit of digits) {
    sum += Math.pow(parseInt(digit, 10), power);
  }
  return sum === n;
}


export function classifyProperties(n: number): string[] {
  const props: string[] = [];
  if (isArmstrong(n)) {
    props.push("armstrong");
  }
  props.push(n % 2 === 0 ? "even" : "odd");
  return props;
}


export function digitSum(n: number): number {
  return n
    .toString()
    .replace('-', '')
    .split('')
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
}
