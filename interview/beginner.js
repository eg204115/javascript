function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join it back into a string
  return str.split("").reverse().join("");
}

// reverse string
function reverseString(str) {
  return str.split("").reverse.join("");
}

function checkNumber(num) {
  if (num % 2 == 0) {
    return "Even";
  }
  return "Odd";
}
console.log(checkNumber(4));
function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([2, 32, 44, 2, 9, 89, 200]));

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str == reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("nethmi"));

function fibonacci(num) {
  let a = 0,
    b = 1;

  for (let i = 0; i < num; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
}
fibonacci(10);

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}



console.log(countVowels("Hello World"));

// Anagram check

function isAnagram(a,b){
	return a.split('').sort().join('') === b.split('').sort().join('');
}
console.log(isAnagram("listen", "silent"));
// Flatten an array

function flattenArray(arr){
  return arr.flat(Infinity);
}

console.log(flattenArray([1,[2,[3,4],5]]));