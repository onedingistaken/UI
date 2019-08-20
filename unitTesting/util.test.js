const { generateText, createOutput } = require('./util');

describe("Test generateText()", () => {
    it("Should output name and age text", () => {
        const result = generateText("Max", 29);
        expect(result).toBe("Max (29 years old)");
    });
});

describe("Test createOutput()", () => {
    it("Should output text", () => {
        const result = createOutput("testt");
        expect(result.textContent).toBe("testt");
    });
});