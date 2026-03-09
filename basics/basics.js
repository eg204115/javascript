let name = "John";
let age = 30;
let isStudent = true;
const address = "123 Main St";

console.log("Name:", name);
if (age > 18) {
    console.log("Adult");
}

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// Swap 2 numbers
let a = 5;
let b = 10;
console.log("Before swapping: a =", a, "b =", b);
let temp = a;
a = b;
b = temp;
console.log("After swapping: a =", a, "b =", b);

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

// Check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is 7 prime?", isPrime(7));
console.log("Is 10 prime?", isPrime(10));

// check if number is even or odd
function isEven(num) {
    return num % 2 === 0;
}
console.log("Is 6 even?", isEven(6));
console.log("Is 7 even?", isEven(7));

// Find largest of three numbers
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}
console.log("Largest of 3, 5, 2:", findLargest(3, 5, 2));

let k = 5;
let l = 10;
let m = 15;
let largest;
if (k > l && k > m) {
    largest = k;
} else if (l > k && l > m) {
    largest = l;
} else {    largest = m;
}   
console.log("Largest of k, l, m:", largest);