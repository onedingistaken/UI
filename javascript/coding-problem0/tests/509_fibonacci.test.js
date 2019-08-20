const lib = require('../scripts/509_fibonacci');

describe("Fibonacci", () => {
    it("should return the nth Fibonacci number", () => {
        const ex1 = lib.fib(N = 2);
        expect(ex1).toBe(1);
        const ex2 = lib.fib(N = 3);
        expect(ex2).toBe(2);
        const ex3 = lib.fib(N = 4);
        expect(ex3).toBe(3);
    });
    it("should return a Fibonacci array of required number", () => {
        const ex1 = lib.fibArray(N = 10);
        expect(ex1).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});