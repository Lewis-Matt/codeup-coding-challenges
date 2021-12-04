"use strict";
// Create a function that will:

// Accept any number as input.
// Validate that input and convert it to an integer as necessary.
// Return the sum of the individual digits of that integer.

// For example:
// Input:  12345
// Output: 15


// Number converts the type whereas parseInt() parses the value of the input
// If parseInt() encounters a character while parsing that does not conform to the specified radix, it will ignore
// the character and all succeeding characters. It then returns the value parsed up to that point as an integer.
// Spaces that are leading or trailing are allowed.
// NUmber will try to convert the entire input, otherwise returns NaN
// typeof handles true, false, NaN better than using isNaN
console.log('---My Method---')

function sumUpThoseDigits(num) {
    // Attempt to convert input to integer
    num = Number(num.toFixed(0));
    // TEST LOG
    // console.log(num)
    // Validate that the input is a number
    if (typeof num === 'number') {
        // Array.from() creates an array from array-like objects (which a number is not).
        // Convert our number to a string (num.string()) since a string is an array-like object
        // .map(Number) calls a callback function, in this case the Number constructor, for each element in
        // the array and constructs a new array from the results. So I am creating a new array out of the from() Array
        // See notes at the bottom about how from() can have a mapfn as a parameter
        num = Array.from(num.toString()).map(Number);
        // TEST LOG
        // console.log(num)
        let sum = 0;
        num.forEach(function (digit) {
            sum += digit;
        });
        return sum;
    }
    return ('The value you entered is not a number')
}

console.log(sumUpThoseDigits('523'));

//  Array.from() has an optional parameter mapFn, which allows you to execute a map()
//  function on each element of the array being created.
// More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg),
// except that it does not create an intermediate array, and mapFn only receives two arguments (element, index).

console.log('---Method with math---')
// Another way, doesn't check type (does work with '5'), or convert to integer
var value = 532,
    sum1 = 0;

while (value) {
    sum1 += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum1);

console.log('---Method with strings---')
// Another way, doesn't check type (does work with '5'), or convert to integer
var value2 = '532',
    sum2 = value2
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

console.log(sum2);