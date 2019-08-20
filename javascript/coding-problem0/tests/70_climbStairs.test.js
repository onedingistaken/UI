const lib = require('../scripts/70_climbStairs');

describe("DFS", () => {
    it("", () => {
        
    });
    it("should return number of islands in the 2d grid map", () => {
        const ex1 = lib.numIslands([["11110"],["11010"],["11000"],["00000"]]);
        expect(ex1).toBe(1);
        const ex2 = lib.numIslands([["11000"],["11000"],["00100"],["00011"]]);
        expect(ex2).toBe(3);
    });
});