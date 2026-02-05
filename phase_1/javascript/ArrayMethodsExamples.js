// ========== ARRAY METHODS EXAMPLES ==========

// 1. MAP - Transform each element and return new array
console.log("--- MAP ---");
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("Original:", numbers);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// With arrow function
let squared = numbers.map(num => num ** 2);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]

// ========================================

// 2. FILTER - Return new array with elements that pass test
console.log("\n--- FILTER ---");
let ages = [15, 22, 18, 25, 30, 16, 28];
let adults = ages.filter(function(age) {
    return age >= 18;
});
console.log("All ages:", ages);
console.log("Adults (18+):", adults); // [22, 18, 25, 30, 28]

// With arrow function
let teenagers = ages.filter(age => age < 18);
console.log("Teenagers (<18):", teenagers); // [15, 16]

// ========================================

// 3. REDUCE - Combine all elements into single value
console.log("\n--- REDUCE ---");
let nums = [10, 20, 30, 40, 50];
let sum = nums.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log("Numbers:", nums);
console.log("Sum:", sum); // 150

// With arrow function
let product = nums.reduce((acc, num) => acc * num);
console.log("Product:", product); // 12000000

// ========================================

// 4. FOREACH - Execute function for each element (no return)
console.log("\n--- FOREACH ---");
let students = ["halima", "hafsa", "abdi", "fatxi"];
console.log("Students:");
students.forEach(function(student) {
    console.log("- " + student);
});

// With arrow function
console.log("\nWith index:");
students.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});

// ========================================

// 5. FIND - Return first element that passes test
console.log("\n--- FIND ---");
let scores = [45, 72, 88, 55, 91];
let highScore = scores.find(function(score) {
    return score > 80;
});
console.log("Scores:", scores);
console.log("First score > 80:", highScore); // 88

// ========================================

// 6. FINDINDEX - Return index of first element that passes test
console.log("\n--- FINDINDEX ---");
let index = scores.findIndex(score => score > 80);
console.log("Index of first score > 80:", index); // 2

// ========================================

// 7. SOME - Check if any element passes test (true/false)
console.log("\n--- SOME ---");
let hasHighScore = scores.some(score => score > 90);
console.log("Are there any scores > 90?", hasHighScore); // true

// ========================================

// 8. EVERY - Check if all elements pass test (true/false)
console.log("\n--- EVERY ---");
let allPositive = scores.every(score => score > 0);
console.log("Are all scores positive?", allPositive); // true

let allAbove90 = scores.every(score => score > 90);
console.log("Are all scores > 90?", allAbove90); // false

// ========================================

// 9. INCLUDES - Check if array contains value (true/false)
console.log("\n--- INCLUDES ---");
let fruits = ["apple", "banana", "orange", "mango"];
console.log("Fruits:", fruits);
console.log("Contains 'banana'?", fruits.includes("banana")); // true
console.log("Contains 'grape'?", fruits.includes("grape")); // false

// ========================================

// 10. SLICE - Get copy of part of array (no modification)
console.log("\n--- SLICE ---");
let colors = ["red", "blue", "green", "yellow", "purple"];
let sliced = colors.slice(1, 4);
console.log("Original:", colors);
console.log("Sliced (1,4):", sliced); // ["blue", "green", "yellow"]

// ========================================

// 11. CONCAT - Combine arrays
console.log("\n--- CONCAT ---");
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Combined:", combined); // [1, 2, 3, 4]

// ========================================

// 12. JOIN - Convert array to string
console.log("\n--- JOIN ---");
let items = ["CSS", "HTML", "JavaScript"];
let joined = items.join(" - ");
console.log("Array:", items);
console.log("Joined:", joined); // CSS - HTML - JavaScript

// ========================================

// 13. REVERSE - Reverse array order
console.log("\n--- REVERSE ---");
let letters = ["a", "b", "c", "d"];
console.log("Original:", letters);
letters.reverse();
console.log("Reversed:", letters); // ["d", "c", "b", "a"]

// ========================================

// 14. SORT - Sort array
console.log("\n--- SORT ---");
let unsorted = [30, 10, 50, 20, 40];
console.log("Unsorted:", unsorted);
unsorted.sort((a, b) => a - b);
console.log("Sorted ascending:", unsorted); // [10, 20, 30, 40, 50]

let names = ["charlie", "alice", "bob"];
names.sort();
console.log("Names sorted:", names); // ["alice", "bob", "charlie"]
