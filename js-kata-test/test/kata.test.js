const Add = require('../src/kata');

test("Check result of Add numbers", () => {
    expect(Add("")).toBe(0);
    expect(Add("1")).toBe(1);
    expect(Add("1 2")).toBe(3);
    expect(Add("1 2 3 1000")).toBe(1006);
});