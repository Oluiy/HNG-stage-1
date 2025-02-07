import express, { Application, Request, Response } from "express";
import cors from "cors";
import { prime, humorousFact, isPerfect, isArmstrong, digitSum } from "./lib";

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "3000", 10);

app.use(cors());

//Creating an Interface for the response
interface Responsedata {
    number: number;
    is_prime: boolean;
    is_perfect: boolean;
    properties: string[];
    digit_sum: number;
    fun_fact: string;
}

interface errr {
    number: string;
    error: boolean;
}

interface Query {
    number: string;
}


app.get("/api/classify-number", async (req: Request, reply: Response) => {
    const num = parseInt(req.query.number as string, 10);
    if (isNaN(num)) {
        reply.status(400).json({ number: "alphabet", error: true });
        return;
    }

    const properties: string[] = [];
    //check if the number is odd
    if (num % 2 !== 0) {
        properties.push("odd");
    }
    //check if the number is even
    if (num % 2 === 0) {
        properties.push("even");
    }
    //check if the number is an armstrong number
    if (isArmstrong(num)) {
        properties.push("armstrong");
    }

    const response: Responsedata = {
        number: num,
        is_prime: prime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: digitSum(num),
        fun_fact: await humorousFact(num),
    };

    reply.status(200).json(response);
});


app.use((req: Request, reply: Response): void =>{
  reply.status(404).json({detail: "Not Found"});
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

