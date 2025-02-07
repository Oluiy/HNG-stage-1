# HNG-stage-1
This project is a nodejs(typeScript)-based web service that classifies numbers when parsed-in based on various properties such as whether they are prime, perfect, Armstrong numbers, and more. It also provides fun facts about numbers using the Numbers API.

## Features
* Check if a number is prime
* Check if a number is perfect
* Check if a number is an Armstrong number
* Determine if a number is even or odd
* Calculate the sum of the digits of a number
* Get fun facts about numbers

## Installation
1. Initialize git repository:
```bash
git init
```

2. Add to my already created repository:
```bash
git remote add origin  https://github.com Oluiy/HNG-stage-1.git
```

3. Install dependencies, node_modules and typescript config:
```bash
npm install 
npm i express
npm i axios
npm i cors
npm i --save-dev @types/express
npm install typescript ts-node --save-dev
npx tsc --init  
```
4. Compile Typescript to JavaScript:
```bash
npm run build
```

5. Run application:
```bash
npm run dev
```

6. Open your browser and navigate to:
```bash
http://localhost:3000/api/classify-number?number=<your_number>
```

## Endpoints URL
```bash
https://hng-stage-1-production-507c.up.railway.app/api/classify-number?number=<your_number>
```

### GET/api/classify-number
* The API classifies number based on their various properties

#### Query

* ```number``` : The input number

#### Response
* ```is_prime```: Boolean indicating if the number is prime.

* ```is_perfect```: Boolean indicating if the number is perfect.

* ```is_armstrong```: Boolean indicating if the number is an Armstrong number

* ```properties```: List of properties the number satisfies

* ```digit_sum```: Sum of the digits of the number.

* ```even_or_odd```: Indicates if the number is even or odd

* ```fun_fact```: A fun fact about the number.


#### Example Request:
```bash
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```
