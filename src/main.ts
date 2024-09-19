// Step 1 Double Task
const numbers: number[] = [1,2,3,4,5];
// const doubleNumbers = numbers.map(num => num * 2);
// console.log('Doubled Numbers:', doubleNumbers);
function doubleNumbers(numbers: number[]):number[] {
    return numbers.map(num => num * 2)
}
console.log("Doubled Numbers:", doubleNumbers(numbers));


// Step 2 Words longer than 5 letters
const words = ["apple", "banana", "cherry", "data", "elderberry"];
const longWords = words.filter(word => word.length > 5);
console.log('Words longer than 5 letters:', longWords);

// Step 3 reduce function
const nums = [10,20,30,40];
const sum = nums.reduce((total, current) => total + current, 0);
console.log('Sum of numbers:', sum);

// Step 4
const numberArray = [5,8,12,4];
const hasNumberGreaterThan10 = numberArray.some(num => num > 10);
console.log('At least one number greater than 10:', hasNumberGreaterThan10);

// Bonus
// Step 1
const list = [15,6,3213,9,0,12,8464,1,1264,481,186,1031,194];

const sortedList = [...list].sort((a,b)=> b-a);
console.log("Sorted List (Descending):", sortedList);

// Step 2
const squaredList = sortedList.map(num => num ** 2);
console.log("Squared Numbers", squaredList);

// Step 3
const reducedList = sortedList.slice(4 ,-2);
console.log("After Removing Lowest 2 and Highest 4:", reducedList);

// Step 4
const filteredList = reducedList.filter(num => num % 4 !== 0);
console.log("After removing Numbers Devisible by 4:", filteredList);

// Step 5
const sumBonus = filteredList.reduce((total, num)=> total + num, 0);
console.log("Sum of the Remaning Numbers: ", sumBonus);