export function getNumber(n: number): number {
  return n;
}
export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export function isPerfect(n: number): boolean {
  if (n < 0) return false;
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
}


export function isArmstrong(n: number): string {
  if (n < 0) return "";
  const str = n.toString();
  const len = str.length;
  let sum = 0;
  for (const char of str) {
    sum += Math.pow(parseInt(char, 10), len);
  }
  return sum === n ? "Armstrong number" : "";
}


export function isEvenOrOdd(n: number): string {
  return n % 2 === 0 ? "Even" : "Odd";
}


export function properties(n: number): string[] {
  const armstrongResult = isArmstrong(n);
  if (armstrongResult === "Armstrong number") {
    return [armstrongResult, isEvenOrOdd(n)];
  }
  return [isEvenOrOdd(n)];
}

export function digitSum(n: number): number {
  let sum = 0;
  const str = Math.abs(n).toString();
  for (const char of str) {
    sum += parseInt(char, 10);
  }
  return sum;
}
