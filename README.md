# 📐 Range-Based LCM Calculator

A JavaScript project that computes the **Least Common Multiple (LCM)** of two numbers **and all integers between them**.  
This challenge strengthens understanding of algorithms, looping logic, divisibility, and functional decomposition.

---

# 📚 Table of Contents
- [📌 Overview](#-overview)
- [🧩 User Stories](#-user-stories)
- [🛠️ Implementation](#️-implementation)
  - [🔧 Helper Function – LCM of Two Numbers](#-helper-function--lcm-of-two-numbers)
  - [⚙️ Main Function – LCM of a Range](#️-main-function--lcm-of-a-range)
- [🧪 Example Usage](#-example-usage)
- [🧮 Example Explanation](#-example-explanation)
- [📂 Project Structure](#-project-structure)
- [📄 License](#-license)

---

## 📌 Overview

What is implemented?:

`smallestCommons([num1, num2])`

This function:

- ✨ Accepts an array of two numbers  
- 🔢 Sorts them to ensure the correct numeric order  
- 📊 Builds a range of all sequential integers between them  
- 🔁 Iteratively computes the **LCM across the full range**  
- 🎯 Returns the final LCM  

---

## 🧩 User Stories

1. You should have a **`smallestCommons`** function that accepts an array of two numbers.  
2. The function should return the **smallest common multiple** for:
   - both input numbers  
   - and **every integer between them**  
3. The function must correctly handle reversed input (e.g., `[5, 1]`).

---

## 🛠️ Implementation

### 🔧 Helper Function – LCM of Two Numbers
```js
const getLCM = (num1, num2) => {
  let largerOfThe2 = Math.max(num1, num2);
  while (true) {
    if (largerOfThe2 % num1 == 0 && largerOfThe2 % num2 == 0)
      return largerOfThe2;
    largerOfThe2++;
  }
};
```

---

### ⚙️ Main Function – LCM of a Range
```js
const smallestCommons = (myArray) => {
  myArray.sort((num1, num2) => num1 - num2);
  let rangeValues = [];
  let lcm = 1;

  for (let i = myArray[0]; i <= myArray[1]; i++)
    rangeValues.push(i);

  for (let i = 1; i < rangeValues.length; i++) {
    if (i == 1) {
      lcm = getLCM(rangeValues[i-1], rangeValues[i]);
    } else {
      lcm = getLCM(lcm, rangeValues[i]);
    }
  }
  return lcm;
};
```

---

## 🧪 Example Usage
```js
const myArray = [5, 1];
console.log(smallestCommons(myArray));
```

### 🟢 Output:
```
60
```

---

## 🧮 Example Explanation

Input: `[5, 1]`

The sequential range is:

> **1, 2, 3, 4, 5**

The LCM progression becomes:

- LCM(1, 2) = 2  
- LCM(2, 3) = 6  
- LCM(6, 4) = 12  
- LCM(12, 5) = 60  

🎉 **Final result → 60**

---

## 📂 Project Structure
```
├── LICENSE
├── README.md
├── source.js
└── .gitignore
```

---

## 📄 License

This project is licensed under the **MIT License**.

```
