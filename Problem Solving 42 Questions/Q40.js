// Given two numbers, generate an array containing all numbers between them (inclusive). Example: Input: 1,5 Output: [1, 2, 3, 4, 5]

const generateArray = (start, end) => {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(generateArray(1, 5))