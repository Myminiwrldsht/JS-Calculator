# JavaScript Calculator

A simple calculator built with JavaScript. It performs basic arithmetic and keeps a history of every calculation.

## Features

- **Arithmetic functions:** add, subtract, multiply, divide
- **History tracking:** every calculation is stored in an array and can be viewed in the console
- **Divide-by-zero handling:** returns a message instead of an error

## How it works

1. Four functions (`add`, `subtract`, `multiply`, `divide`) each take two numbers and return a result.
2. `calculate(operation, a, b)` checks which operation was requested and calls the matching function.
3. `recordHistory` saves each calculation as a readable string in the `history` array.
4. `console.log(history)` prints the full history.

## Example usage

```js
calculate("add", 5, 10);       // 15
calculate("divide", 12, 4);    // 3
console.log(history);
// ["5 add 10 15", "12 divide 4 3"]
```

## Author

Maya
