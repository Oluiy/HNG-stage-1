# Number Classification API

This project is a Node.js (TypeScript) based web service that classifies numbers based on various mathematical properties. It checks if a number is prime, a perfect square, or an Armstrong number; determines its parity; calculates the sum of its digits; and retrieves a fun fact about the number from the Numbers API.

## Features

- **Prime Check:** Determines if the number is prime.
- **Perfect Square Check:** Returns `true` if the number is a perfect square.
- **Armstrong Number Check:** Determines if the number is an Armstrong number.
- **Properties Classification:** Returns a `properties` array that includes:
  - `["armstrong", "odd"]` if the number is both an Armstrong number and odd.
  - `["armstrong", "even"]` if the number is both an Armstrong number and even.
  - `["odd"]` if the number is not an Armstrong number but is odd.
  - `["even"]` if the number is not an Armstrong number but is even.
- **Digit Sum:** Calculates the sum of the digits of the number.
- **Fun Fact:** Retrieves a fun fact from the Numbers API (math category).

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Oluiy/HNG-stage-1.git
   cd HNG-stage-1
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Compile the TypeScript code**:
    ```bash
    npm run build
    ```
4. **Run the application**:
    ```bash
    npm run dev
    ```

### API Usage
``` bash 
http://localhost:3000/api/classify-number?number=<your_number>
```

### Example Request:
```bash
http://localhost:3000/api/classify-number?number=371
```

### Example Success Response (200 OK)
```bash
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```

### Example Error Response (400 Bad Request)
```bash
{
  "number": "alphabet",
  "error": true
}
```

### Deployment
```bash
https://hng-stage-1-production-507c.up.railway.app/api/classify-number?number=<your_number>
```






