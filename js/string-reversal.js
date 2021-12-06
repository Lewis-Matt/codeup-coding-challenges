"use strict";
// String Reversal
//
// Write a function that takes in a string variable and returns that string reversed. While most languages provide their own
// built-in functions to do this, the point of this challenge is to write your own.

// Plan on converting to array, reversing the array, converting back to string
// Not sure if it is supposed to handle separate strings, but it implies a single string

function stringReversal (str) {
    let arr = str.split('').reverse().join('');
    console.log(arr)
}
stringReversal('Matt')

// TODO:
// It says the point is to write my own function, and I don't know if that means without using JS methods, so I will
// try to write something from scratch without any built in methods..