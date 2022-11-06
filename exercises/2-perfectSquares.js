'use strict'
/* # Exercice: Perfect Squares
 *
 * ## Explanation:
 * You must code a function that given a lower bound and upper bound returns an array containing all
 * the perfect squares (see Further Notice) between the lower bound and the upper bound included.
 * The array must be sorted from lower to upper.
 *
 * ## Example:
 * ```
 * perfectSquares(3, 15) === [4, 9]
 * ```
 *
 * ## Expected Time
 * You should spend around 10 minutes on this exercice
 *
 * ## Further Notice
 * - You have more examples in <root>/validations/2-perfectSquares.validation.js
 * - An integer n is said to be a perfect squares if there exists an integer i such that `i * i = n`
 * For example 4 = 2 * 2 is a perfect squares but 5 isn't.
 */
function sortArray(array) {
  return array.sort(function (a, b) {
    return a - b
  })
}
function perfectSquares(lower, upper) {
  var arr = [];
  for (var i = lower; i <= upper; i++) {
      if (Math.sqrt(i) % 1 === 0) {
          arr.push(i);
      }
  }
  sortArray(arr);
  return arr;
}


module.exports = perfectSquares
