const my_array = [10, 5, 6, 7];
const my_array_size = my_array.length;

// This constant my_array_size will give me the real size of the array, which in this case is 4
// because it contains 4 values ​​inside it, but if I need to perform some operation with the
// array I will need to deal with index,and if I use 4 as my size I will fall in an 'out of bounds' problem
// wich is I will fall out of my array

// console.log("The length of the array is = ", my_array_size);

// For
// Problem: Calculate the sum of the first 5 positive integers.
// Explanation: The for loop is suitable here because we know the exact
// number of iterations needed (5 iterations to sum the first 5 positive integers).
// The loop iterates from 1 to 5, adding each value to the sum variable.
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log("The sum of the first 5 positive integers is: " + sum);

// While
// Problem: Find the smallest positive integer n such that the sum of integers from 1 to n exceeds 100.
// let sum = 0;
// let n = 1;
// while (sum <= 100) {
//   console.log("sum = ", sum);
//   console.log("n = ", n);
//   sum = sum + n;
//   n = n + 1;
// }
// console.log(
//   "The smallest positive integer n such that the sum of integers from 1 to n exceeds 100 is: " +
//     (n - 1)
// );

// Do While
// Problem: Generate random numbers until a number greater than 0.9 is generated.
// Explanation: In this scenario, we want to ensure that at least one random number
// greater than 0.9 is generated. Therefore, the do-while loop is appropriate because
// it guarantees that the code block will execute at least once before checking the condition.
let randomNumber;
let howManyTimesIdidUntilFindTheNumber = 1;
do {
  randomNumber = Math.random();
  console.log("Random number generated: " + randomNumber);
  howManyTimesIdidUntilFindTheNumber++;
} while (randomNumber <= 0.9);
console.log(howManyTimesIdidUntilFindTheNumber);

console.log("A random number greater than 0.9 has been generated.");
