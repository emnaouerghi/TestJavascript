'use strict'
/* # Exercice: Fizz Buzz
 *
 * ## Explanation:
 * You must code a function that given an integer n will output an array of length n such that:
 * - On indexes multiple of 3 it contains 'fizz'
 * - On indexes multiple of 5 it contains 'buzz'
 * - On indexes multiple of 3 and 5 it contains 'fizzbuzz'
 * - On every other index it contains ''
 *
 * ## Example:
 * ```
 * fizzBuzz(6) === ['fizzbuzz', '', '', 'fizz', '', 'buzz']
 * ```
 *
 * ## Expected Time
 * You should spend around 5 minutes on this exercice
 *
 * ## Further Notice
 * You have more examples in <root>/validations/1-fizzBuzz.validation.js
 */
var arr = [];
function fizzBuzz(n) {
  // Write your code here
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        arr.push("fizzbuzz");
    } else if (i % 3 === 0) {
        arr.push("fizz");
    } else if (i % 5 === 0) {
        arr.push("buzz");
    } else {
        arr.push("");
    }
}
return arr;
}




module.exports = fizzBuzz
