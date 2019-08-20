const lib = require("../scripts/001_twoSum");

describe("hash table", () => {
    it("should return index pair", () => {
        const ex1 = lib.twoSum(nums = [2, 7, 11, 15], target = 9);
        expect(ex1).toEqual([0, 1]);
    });
    it("should return sum of values", () => {
        const ex1 = lib.numJewelsInStones(J = "aA", S = "aAAbbbb");
        expect(ex1).toBe(3);
        const ex2 = lib.numJewelsInStones(J = "z", S = "ZZ");
        expect(ex2).toBe(0);
    });
    it("should return count map", () => {
        const ex1 = lib.letterMap(text = "hello");
        expect(ex1).toMatchObject({ h: 1, e: 1, l: 2, o: 1 });
    });
    it("should return file arrays", () => {
        const ex1 = lib.findDuplicate(paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]);
        expect(ex1).toEqual(expect.arrayContaining([["root/a/2.txt", "root/c/d/4.txt", "root/4.txt"], ["root/a/1.txt", "root/c/3.txt"]]));
    });
    it("should return array", () => {
        let methods = ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"];
        let params = [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]];
        for (let i = 0; i < methods.length; i++) {
            let ex = lib.MyHashMap[methods[0]]();
            expect(ex[methods[i]](values[params[i]]));
        }
    })
});