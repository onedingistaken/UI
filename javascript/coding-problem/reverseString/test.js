const lib = require('./index');

test('function exists', () => {
    expect(lib).toBeDefined();
});

test('reverse a string', () => {
    expect(lib(["h", "e", "l", "l", "o"])).toEqual(["o", "l", "l", "e", "h"]);
});

test('reverse a string', () => {
    expect(lib(["H", "a", "n", "n", "a", "h"])).toEqual(["h", "a", "n", "n", "a", "H"]);
});
