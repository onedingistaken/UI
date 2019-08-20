const lib = require("../scripts/003_lengthOfLongestSubstring");

describe("sliding window", () => {
    it("should return number of the longest unique substring", () => {
        const ex1 = lib.lengthOfLongestSubstring(s = "abcabcbb");
        expect(ex1).toBe(3);
        const ex2 = lib.lengthOfLongestSubstring(s = "bbbbb");
        expect(ex2).toBe(1);
        const ex3 = lib.lengthOfLongestSubstring(s = "pwwkew");
        expect(ex3).toBe(3);
    });
});