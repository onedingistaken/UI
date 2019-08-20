// --- Directions
// Print out the n-th entry in the Fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the Fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}

module.exports = fib;

function fib(n) {
    let seq = [0, 1];
    for(let i = 2; i <= n; i++){
        seq.push(seq[i-2] + seq[i-1]);
    }
    // return seq[n];
    return seq;
}
