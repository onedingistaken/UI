// ---------------------------------------------------------------------------------
/**
 * @param {number} n
 * @return {number}
 */

// recursive
var fib = function (n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

// ---------------------------------------------------------------------------------
/**
 * @param {number} n
 * @return {number[]}
 */

// iterate
var fibArray = function (n) {
    let res = [];
    let a = 0, b = 1, tmp;
    while (n > 0) {
        res.push(a);
        tmp = b;
        b += a;
        a = tmp;
        n--;
    }
    return res;
}


// ---------------------------------------------------------------------------------
module.exports = { fib, fibArray };