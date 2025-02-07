
import axios from "axios";

//to verify if the num is a prime number or not
const prime = (num: number): boolean => {
  if (num < 2 || num % 2 === 0) {
    return false;
  }

  for (let i = 3; i < Math.sqrt(num); i++)
    if (num % i === 0) {
      return false;
    }
  return true;
};

//to verify if the parsed-in number is a perfect number.
function isPerfect(n: number): boolean {
    if (n < 0) return false; // Negative numbers cannot be perfect squares
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt);
  }
  


// //to verify if the parsed-in number is an Armstrong number.
function isArmstrong(num: number): boolean {
      const digits = num.toString().split('');
      const numDigits = digits.length;
      const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), numDigits), 0);
      const armstrong = sum === num;
      return armstrong;
  }


//to calculate the sum of the digits of the parsed-in number.
const digitSum = (num: number): number => {
  const decDigit = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
  return decDigit;
};

//it fetches a random fact about the parsed-in number from the Numbers API.
const humorousFact = async (num: number): Promise<string> => {
  try {
    const reply = await axios.get(`http://numbersapi.com/${num}`);
    return reply.data;
  } catch (error) {
    return "No fun fact yet";
  }
};

export { prime, isPerfect, isArmstrong, digitSum, humorousFact };

