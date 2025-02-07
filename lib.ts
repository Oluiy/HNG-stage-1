import axios from "axios";


const prime = (num: number): boolean => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};



function isPerfect(n: number): boolean {
  if (n < 0) return false; // Negative numbers cannot be perfect squares.
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
}



function isArmstrong(num: number): boolean {
  if (num < 0) return false; // Armstrong numbers are defined for non-negative integers.
  const digits = num.toString().split('');
  const numDigits = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), numDigits), 0);
  return sum === num;
}


const digitSum = (num: number): number => {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
};


const humorousFact = async (num: number): Promise<string> => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
    if (response.status === 200 && response.data && response.data.text) {
      return response.data.text;
    }
    return "No fun fact yet";
  } catch (error) {
    return "No fun fact yet";
  }
};

export { prime, isPerfect, isArmstrong, digitSum, humorousFact };
