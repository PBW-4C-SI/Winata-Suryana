const calculator = (operator, num1, num2) => {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return "Operator tidak valid!";
    }

    return result;
};

// **Contoh penggunaan**
console.log(calculator('+', 5, 3));   // Output: 8
console.log(calculator('-', 10, 4));  // Output: 6
console.log(calculator('*', 2, 5));   // Output: 10
console.log(calculator('/', 0, 20));  // Output: 5
console.log(calculator('%', 10, 3));  // Output: 1
