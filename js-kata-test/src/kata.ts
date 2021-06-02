function Add(numbers: string) {
    if (numbers == "") return 0;
    let delim = ',';

    //  Check if a different delimiters is used
    let newDelim: number = numbers.indexOf("//")
    if (newDelim != -1) {
        delim = numbers[newDelim + 2];
        numbers = numbers.substring(numbers.indexOf("\n") + 1);
    }
    let regexString = delim + '|\n';
    const regex = new RegExp(regexString);

    let nums: string[] = numbers.split(regex);
    let parsedNums = nums.map(str => parseInt(str));

    //  Check for negative numbers
    let negs: number[] = [];
    parsedNums.map((num) => {
        if (num < 0) negs.push(num);
    });

    if (negs.length > 0) {
        let msg: string = negs.join(",");
        throw new Error("Negatives not allowed: " + msg);
    }

    let sum = parsedNums.reduce((a, b) => a + b);
    return sum;
}

module.exports = Add;