//Creating the four arithmetic functions.
function add(a , b) {
    return a + b;
}

function subtract(a , b) {
    return a - b;
}

function multiply(a , b) {
    return a * b;
}

function divide(a , b) {

      if(b === 0){ //Statement for when the user inputs a number divided by 0.

        return "Cannot divide a number by zero";
    }
    return a / b;
}

console.log(add(5, 10)); //Outputs the answer from the addition function
console.log(divide(10, 0)); //Outputs the answer from the division function.

//Calculator History Tracking.

let history = []; //Array where each calculation will be stored.

function recordHistory(operation, a, b, result) { 
    const entry = `${a} ${operation} ${b} ${result}` ; //Function to record history calculation history and store them in the history array.

    history.push(entry); //Adds calculation entries to the end of the history array

}

//Combining history tracking and the arithmetic functions

function calculate(operation, a, b) {
    let result; //Empty variable...colects data from the if/else atatement blocks

    if(operation === "add") {
        result = add(a , b);
    }
    else if(operation === "subtract") {
        result = subtract(a , b);
    }
    else if(operation === "multiply") {
        result = multiply(a , b );
    }
    else if(operation === "divide") {
        result = divide(a , b);
    }

    recordHistory(operation, a, b, result); //Logs the calculation then sends the result back
    
    return result;
}

console.log(calculate("add", 5, 10));
console.log(calculate("subtract", 10, 8));
console.log(calculate("multiply", 2, 8));
console.log(calculate("divide", 12, 4));

console.log(history); 
