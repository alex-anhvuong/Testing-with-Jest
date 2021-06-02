function Add(numbers: string) {
    if (numbers == "") return 0;
    let nums: string[] = numbers.split(" ");
    let parsedNums = nums.map(str => parseInt(str));
    let sum = parsedNums.reduce((a, b) => a + b);
    return sum
}

module.exports = Add;