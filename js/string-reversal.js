"use strict";
// String Reversal
//
// Write a function that takes in a string variable and returns that string reversed. While most languages provide their own
// built-in functions to do this, the point of this challenge is to write your own.

// Plan on converting to array, reversing the array, converting back to string
// Not sure if it is supposed to handle separate strings, but it implies a single string

function stringReversal(str) {
    let arr = str.split('').reverse().join('');
    console.log(arr)
}

stringReversal('Matt Is The Best')

console.log('------------------------------')
// TODO:
// It says the point is to write my own function, and I don't know if that means without using JS methods (specifically reverse),
// so I will try to write something from scratch.

// Custom join function (not using built-in join() method), called in strRev()
let join = (arr) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
};

function strRev(str) {
    // Pretty much have to use a method to get the str into an array
    // Could also spread: arr = [...str]
    let arr = Array.from(str);
    // TEST LOG
    // console.log(arr)
    // Reverse array w/o using reverse() method
    let newArr =[];
    for(let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
        // TEST LOG
        console.log(newArr);
    }
    // console.log(join(newArr));
}
strRev('Matt Is The Best')


