const Add = require('../src/kata');

test("Check result of Add numbers", () => {
    expect(Add("")).toBe(0);
    expect(Add("1")).toBe(1);
    expect(Add("1,2")).toBe(3);
    expect(Add("1,2,3,1000")).toBe(1006);
});

test("Check Add numbers with 10 numbers", () => {
    expect(Add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
});

test("Check Add numbers with new lines between numbers", () => {
    expect(Add("1\n2")).toBe(3);
    expect(Add("1,2,3\n4,5,6,7\n8,9,10")).toBe(55);
});