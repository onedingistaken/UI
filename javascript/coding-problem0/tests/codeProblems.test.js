const lib = require('../scripts/codeProblems');

describe("codeProblem", () => {
    it("triangle()", () => {
        const ex1 = lib.triangle(N = 3);
        expect(ex1).toBe(
            `..1..
            .2.2.
            3...3`
        );
    });
});



const EnhancedComponent = higherOrderComponent(WrappedComponent);

