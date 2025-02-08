import express, { Application, Request, Response } from "express";
import cors from "cors";
import { prime, humorousFact, isPerfect, isArmstrong, digitSum } from "./lib";

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "3000", 10);

app.use(cors());

interface ResponseData {
  number: number;
  is_prime: boolean;
  is_perfect: boolean;
  properties: string[];
  digit_sum: number;
  fun_fact: string;
}

interface ErrorResponse {
  number: string;
  error: boolean;
}

app.get("/api/classify-number", async (req: Request, res: Response) => {
  const numberStr = req.query.number as string;

  if (!numberStr) {
    res.status(400).json({ number: "alphabet", error: true } as ErrorResponse);
    return;
  }

  const trimmedNumberStr = numberStr.trim();

  if (!/^-?\d+$/.test(trimmedNumberStr)) {
    res.status(400).json({ number: "alphabet", error: true } as ErrorResponse);
    return;
  }

  const num = parseInt(trimmedNumberStr, 10);

  const properties: string[] = [];
  if (isArmstrong(num)) {
    properties.push("armstrong");
  }
  properties.push(num % 2 === 0 ? "even" : "odd");

  const response: ResponseData = {
    number: num,
    is_prime: prime(num),
    is_perfect: isPerfect(num),
    properties,
    digit_sum: digitSum(num),
    fun_fact: await humorousFact(num),
  };

  res.status(200).json(response);
});

app.use((req: Request, res: Response): void => {
  res.status(404).json({ detail: "Not Found" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
