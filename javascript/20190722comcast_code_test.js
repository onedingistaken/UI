const lib = require('./index');

describe('twoSum', () => {
    it('function is defined', () => {
        expect(typeof lib).toEqual('function');
    });
    it('example 1', () => {
        const ex1 = lib(nums = [2, 7, 11, 15], target = 9);
        expect(ex1).toEqual([0, 1]);
    });
});