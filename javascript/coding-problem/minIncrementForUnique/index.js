// 945. Minimum Increment to Make Array Unique
// Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.
// Return the least number of moves to make every value in A unique.

// Example 1:
// Input: [1,2,2]
// Output: 1
// Explanation:  After 1 move, the array could be [1, 2, 3].

// Example 2:
// Input: [3,2,1,2,1,7]
// Output: 6
// Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
// It can be shown with 5 or less moves that it is impossible for the array to have all unique values.

// Note:
// 0 <= A.length <= 40000
// 0 <= A[i] < 40000

// ---------------------------------------------------------------------

/**
 * @param {number[]} A
 * @return {number}
 */

var minIncrementForUnique = function (A) {
    let map = {};
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (!map.hasOwnProperty(A[i])) {
            map[A[i]] = 1;
        } else {
            let temp = A[i];
            while (map.hasOwnProperty(temp)) {
                temp++;
                count++;
            }
            map[temp] = 1;
        }
    }
    return count;
};

// ---------------------------------------------------------------------

/**
 * @param {number[]} A
 * @return {number[]}
 */

// var minIncrementForUnique = function (A) {
//     let map = {};
//     let sum = 0;
//     for (let i = 0; i < A.length; i++) {
//         if (!map.hasOwnProperty(A[i])) {
//             map[A[i]] = 1;
//             sum += A[i];
//         } else {
//             let temp = A[i];
//             while (map.hasOwnProperty(temp)) {
//                 temp++;
//             }
//             map[temp] = 1;
//             sum += temp;
//         }
//     }
//     return sum;
// };

// console.log(minIncrementForUnique([1, 2, 2]));
// console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));

try {
    module.exports = minIncrementForUnique;
} catch {
    console.log('problem exporting');
}