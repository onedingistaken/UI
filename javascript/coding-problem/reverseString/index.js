// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.

// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function (s) { // reverse
//     return [...s.reverse().join('')];
// };

var reverseString = function (s) { // reduce
    return [...s.reduce((acc, cur) => cur + acc, '')];
};

// var reverseString = function (s) { // for of
//     let res = '';
//     for (let e of s) {
//         res = e + res;
//     }
//     return [...res];
// };

// console.log(reverseString(["h", "e", "l", "l", "o"]));

try {
    module.exports = reverseString;
} catch {
    console.log('problem exporting');
}