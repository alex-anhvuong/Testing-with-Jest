const { expect } = require("@jest/globals");

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

/**
 * toBeTruthy matches what the if statement treats as True
 * value == true => Truthy
 */

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();  // if(0) is false
    const con = false;
    expect(con).toBe(false);
    expect(con).toBeFalsy();
});