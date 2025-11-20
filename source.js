/*
Implement a Range-Based LCM Calculator
In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

User Stories

1 You should have a `smallestCommons` function that accepts an array of two numbers as an argument.
2 The `smallestCommons` function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
3 The function should handle input where the two numbers are not in numerical order.
*/

// Function for calculating the LCM between 2 numbers
const getLCM = (num1, num2) => {
  let largerOfThe2 = Math.max(num1, num2);
  while (true) {
    if (largerOfThe2 % num1 == 0 && largerOfThe2 % num2 == 0)
      return largerOfThe2;
    largerOfThe2++;
  }
};


