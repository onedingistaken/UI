import { ModuleMap } from "jest-haste-map";

const countNumber = function (nums) {
    let map = {};
    nums.forEach(e => {
        if (!map.hasOwnProperty(e)) {
            map[e] = 1;
        } else {
            map[e]++;
        }
    });

    // Object.keys().forEach -------------------------------------------------------------------
    let max = 0;
    let maxKey;
    Object.keys(map).forEach(k => {
        if (map[k] > max) {
            max = map[k];
            maxKey = k;
        }
    });

    // for in ----------------------------------------------------------------------------------
    // for (e in map) {
    //     if (map[e] > max) {
    //         max = map[e];
    //         maxKey = e;
    //     }
    // }

    return maxKey;
}

// const reverseArray = function (arr) {
//     let length = arr.length;
//     let res = [];
//     for (let i = length - 1; i >= 0; i--) {
//         res.push(arr[i]);
//     }
//     return res;
// }

const reverseArray = function (arr) {
    for (let i = 0; i + i < arr.length; i++) {

    }
}

console.log(countNumber([2, 2, 2, 3, 4, 5]));



const fibonacciSequence = function () {

}

function fib(n) {

    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}


function fibonacci(num) {
    var a = 1, b = 0, temp;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}

// ---------------------------------------------------------------------------------
/**
 * @param {number} N
 * @return {string}
 */

// "*".repeat
function diamond(N) {
    if (N == 1) {
        return "A";
    }
    // generic
    let shape = "";
    shape += ".".repeat(N - 1) + "A" + ".".repeat(N - 1) + "\n";
    for (let i = 1; i < 2 * N - 2; i++) {
        let l = i < N ? i : N - (i - N) - 2;
        let letter = String.fromCharCode(65 + l);
        let left = N - l - 1;
        let middle = 2 * l - 1;
        shape += ".".repeat(left) + letter + ".".repeat(middle) + letter + ".".repeat(left) + "\n";
    }
    shape += ".".repeat(N - 1) + "A" + ".".repeat(N - 1) + "\n";
    return shape;
}

// Array(n).join(".")
function diamond(N) {
    if (N == 1) {
        return "1";
    }
    // generic
    let shape = "";
    shape += Array(N).join(".") + 1 + Array(N).join(".") + "\n"; // 3
    for (let i = 2; i < 2 * N - 1; i++) { // 234
        let k = i < N ? i : N - (i - N); // 232
        let left = N - k + 1; // 101 212
        let middle = 2 * k - 2; // 131 242
        shape += Array(left).join(".") + k + Array(middle).join(".") + k + Array(left).join(".") + "\n";
    }
    shape += Array(N).join(".") + 1 + Array(N).join(".") + "\n";
    return shape;
}

// ---------------------------------------------------------------------------------
/**
 * @param {number} N
 * @return {string}
 */
module.exports.triangle = (N) => {
    if (N == 1) {
        return "1";
    }
    //generic
    let shape = "";
    shape += ".".repeat(N - 1) + "1" + ".".repeat(N - 1) + "\n";
    for (let i = 2; i < N + 1; i++) { // 4
        let left = N - i; // 2
        let middle = 2 * i - 3; // 1
        shape += ".".repeat(left) + i + ".".repeat(middle) + i + ".".repeat(left) + "\n";
    }
    return shape;
}


// ---------------------------------------------------------------------------------

// ...A...
// ..B.B..
// .C...C.
// D.....D
// .C...C.
// ..B.B..
// ...A...
// N = 4
// h = 7

module.exports.diamond = (N) => {
    if (N === 1) {
        return "1";
    }

    // generic
    let shape = "";
    shape += ".".repeat(N - 1) + "1" + ".".repeat(N - 1) + "\n";
    for (let i = 2; i < 2 * N - 1; i++) {
        let left = i < N ? N - i : i - N;
        let middle = i < N ? (i - 1) * 2 - 1 : (N - (i - N) - 1) * 2 - 1;
        let k = i < N ? i : N - (i - N);
        shape += ".".repeat(left) + k + ".".repeat(middle) + k + ".".repeat(left) + "\n";
    }
    shape += ".".repeat(N - 1) + "1" + ".".repeat(N - 1) + "\n";
    return shape;
}
