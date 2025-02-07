import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import axios from 'axios';
import {
  isPrime,
  isPerfect,
  isArmstrong,
  digitSum,
  classifyProperties
} from './lib';

const app = express();


app.use(cors());


async function getFunFact(n: number): Promise<string> {
  const url = `http://numbersapi.com/${n}/math?json`;
  try {
    const response = await axios.get(url);
    if (response.status === 200 && response.data && response.data.text) {
      return response.data.text;
    }
    return "No fun fact available";
  } catch (error) {
    return "No fun fact available";
  }
}



app.get('/api/classify-number', async (req: Request, res: Response): Promise<void> => {
  const numberParam = req.query.number;


  if (typeof numberParam !== 'string' || !/^-?\d+$/.test(numberParam.trim())) {
    res.status(400).json({ number: "alphabet", error: true });
    return;
  }

  const n = parseInt(numberParam, 10);


  const funFact = await getFunFact(n);


  res.status(200).json({
    number: n,
    is_prime: isPrime(n),
    is_perfect: isPerfect(n),
    properties: classifyProperties(n),
    digit_sum: digitSum(n),
    fun_fact: funFact
  });
});

// 404 handler for unmatched routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ detail: "Not Found" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

