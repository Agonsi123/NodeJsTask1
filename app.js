// Question 1
let js = 'JavaScript'; 
let reversedJs = js.split('').reverse().join('');
console.log(reversedJs); // Output: tpircSavaJ

// Question 2
/**
 * 2a) String data type is categorized as a primitive data type in JavaScript.
 *  It represents a sequence of characters and is used to store and manipulate text,
 *  they are usually in single or double quotes or back tick. They are immutable, 
 *  meaning they cannot be changed once they are defined.
 * Examples of methods that can be used with Strings
 */
console.log(js.length); // Output: 10
console.log(js.substring(0, 4)); // Output: Java
console.log(js.includes('Script')); // Output: true

/** 
 * 2b) Number data type is also a primitive data type in JavaScript. It represents both integer and floating-point numbers.
 *  It is used to perform mathematical operations and can be manipulated using various methods.
 * Examples of methods that can be used with Numbers    
*/
const num = Math.floor(Math.random()* 6) + 1; // Generates a random number between 1 and 6
console.log(num);
console.log(Math.min(10, 5, 8)); // Output: 5
console.log(Math.sqrt(num)); // Output: The square root of the number

// Question 3
let score = 100;
if (score >= 70) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Very good");
} else if (score >= 50) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Poor");
} else if (score >= 0) {
    console.log("Very poor");
} else {
    console.log("Invalid score");
}