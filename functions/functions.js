// Arrow functions are a more concise syntax for writing function expressions in JavaScript. They are often used for short, simple functions and do not have their own 'this' context.

// Example of a regular function expression
const add = function(a, b) {
    return a + b;
};

// Difference between regular function and arrow function
const addArrow = (a, b) => {
    return a + b;
};

// For single expression functions, you can omit the braces and the 'return' keyword
const addArrowShort = (a, b) => a + b;

// Fibonacci sequence using an arrow function
const fibonacci = n => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("Fibonacci of 10:", fibonacci(10));

// Palindrome check using an arrow function
const isPalindrome = str => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
};
