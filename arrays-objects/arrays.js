const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);


const person = {
    name: "Alice",
    age: 30,
    skills: ["JavaScript", "React", "Node.js"]
};

console.log(person.name,"who is ", person.age, "years old knows", person.skills[0]);