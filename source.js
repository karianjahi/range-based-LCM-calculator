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

// A function that returns the smallest common multiple for the range
const smallestCommons = (myArray) => {
  myArray.sort((num1, num2) => num1 - num2);
  let rangeValues = [];
  let lcm = 1;
  for (let i = myArray[0]; i <= myArray[1]; i++) rangeValues.push(i);
//   console.log(`Range of values: ${rangeValues}`);
  for (let i = 1; i < rangeValues.length; i++) {
    if (i == 1) {
        lcm = getLCM(rangeValues[i-1], rangeValues[i]);
        // console.log(`lcm between ${rangeValues[i-1]} and ${rangeValues[i]} is ${lcm}`);
    } else {
        // oldLcm = lcm
        lcm = getLCM(lcm, rangeValues[i])
        //  console.log(`lcm between ${oldLcm} and ${rangeValues[i]} is ${lcm}`);
    }
  }
  return lcm;
};

const myArray = [5, 1];
console.log(smallestCommons(myArray));
