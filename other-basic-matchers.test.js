const { expect, test } = require("@jest/globals");

test("checking equality of real numbers", () => {
    const x = 0.1111 + 0.1889
    console.log(x)
    // expect(x).toBe(0.3) this will fail
    // expect(x).toBeCloseTo(0.34) this will fail
    // expect(x).toBeCloseTo(0.306) this will fail 
    expect(x).toBeCloseTo(0.300006) //success
});

test('check if there is a "he" in here', () => {
    expect('he').toMatch(/he/);
});

const shopppingList = [
    'rau mui',
    'rau tia to',
    'rau can',
    'rau bac thao',
];

test('the shopping list has rau mui', () => {
    expect(shopppingList).toContain('rau mui');
});