const lib = require('./index');

test('function exists', () => {
    expect(lib).toBeDefined();
});

test('count minimul increase', () => {
    expect(lib([1, 2, 2])).toBe(1);
});

test('count minimul increase', () => {
    expect(lib([3, 2, 1, 2, 1, 7])).toBe(6);
});