"use strict";
/*
The Fibonacci Sequence is the series of numbers:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

The next number is found by adding up the two numbers before it:

the 2 is found by adding the two numbers before it (1+1),
the 3 is found by adding the two numbers before it (1+2),
the 5 is (2+3),
Xn = Xn−1 + Xn−2
*/

// User chooses number of times (n)
function fibonacci(n) {
    let fibNum = [0, 1];
    for (let i = 2; i < n; i++) {
        fibNum.push(fibNum[i - 2] + fibNum[i - 1]);
        console.log(fibNum[i]);
    }
}
fibonacci(15);