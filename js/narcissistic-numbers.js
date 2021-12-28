"use strict";
/*
Narcissistic Numbers
A narcissistic number is a non-negative integer (n) with m digits where the sum of all the individual digits raised to the power m is equal to n.

For example:

If n is 153, then m (the number of digits) is 3 and:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
So, 153 is a narcissistic number.
Objective: Write a script to generate and output the first 25 narcissistic integers.*/

// Pseudo:
// Convert the number to a string, then get the length. This is m
// num is the number itself
// set up a loop (do - while?) with an if-statement that counts the number of times the condition is passed (25)
// if (1+5+3)^m == m -->> narcNum ++

// User inputs a number (num); returns true if it is a narcissistic number
function narc(num) {
    if (typeof num !== 'number') {
        return "Enter a number without quotes"
    }
    // Store length of num
    let m = num.toString().length;
    // Put each digit of the number into an array. The Array.from utility creates a new array from an array-like value or iterable object. It accepts as the second argument a mapping function to call on every element of the array. String(num) is used to convert num to an array-like value (e.g. a string)
    let numArr = Array.from(String(num), String);
    // Create another array to store the results of n^m
    let tempArr = [];
    for (let i = 0; i < numArr.length; i++) {
        tempArr[i] = numArr[i] ** m;
    }
    // Test log
    // console.log(tempArr);

    // Add the n^m values together
    let sum = 0;
    for (let i = 0; i < tempArr.length; i++) {
        sum += tempArr[i];
    }
    // Test logs
    // console.log(sum);
    // console.log(typeof sum);

    // Returns true if the sum equals the original number
    return sum === num;
}

console.log(narc(153));
