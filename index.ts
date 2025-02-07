import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import {
  getNumber,
  isPrime,
  isPerfect,
  properties,
  digitSum
} from './lib';

const app = express();

app.use(cors());


async function getFunFact(n: number): Promise<string> {
  const url = `http://numbersapi.com/${n}/math`;
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    }
    return "No fun fact available";
  } catch (error) {
    return "No fun fact available";
  }
}


app.get('/api/classify-number', async (req: Request, res: Response): Promise<void> => {
  const numberParam = req.query.number;

  if (!numberParam || typeof numberParam !== 'string') {
    res.status(400).json({ error: true, message: "Please provide a number" });
    return;
  }

  let n: number;
  try {
    n = parseInt(numberParam, 10);
    if (isNaN(n)) {
      throw new Error("Invalid number");
    }
  } catch (err) {
    res.json({
      number: numberParam,
      error: true
    });
    return;
  }

  const funFact = await getFunFact(n);

  res.status(200).json({
    number: getNumber(n),
    is_prime: isPrime(n),
    is_perfect: isPerfect(n),
    properties: properties(n),
    digit_sum: digitSum(n),
    fun_fact: funFact
  });
});

app.use((req: Request, res: Response): void => {
    res.status(404).json({ detail: "Not Found" });
  });


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
