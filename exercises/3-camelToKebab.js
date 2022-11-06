'use strict'
/* # Exercice: Camel To Kebab
 *
 * ## Explanation:
 * You must code a function that transforms a string from camelCase (see Further Notice) to
 * kebab-case (see Further Notice). This function must not break abreviations.
 *
 * ## Example:
 * ```
 * camelToKebab('CamelCaseString') === 'camel-case-string'
 * camelToKebab('CamelCaseStringWithABREV') === 'camel-case-string-with-abrev'
 * camelToKebab('CamelCaseStringWithABREVInCenter') === 'camel-case-string-with-abrev-in-center'
 * ```
 *
 * ## Expected Time
 * You should spend around 15 minutes on this exercice
 *
 * ## Further Notice
 * - You have more examples in <root>/validations/3-camelToKebab.validation.js
 * - See [camelCase](https://en.wikipedia.org/wiki/Camel_case)
 * - See [kebabCase](http://wiki.c2.com/?KebabCase)
 */

function camelToKebab(str) {
  return str.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
}

module.exports = camelToKebab
