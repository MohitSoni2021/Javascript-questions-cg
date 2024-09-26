const arr = [1, 2, 3, 4, 5];

const isSorted = arr.every((num, index) => index === 0 || num >= arr[index - 1]);

console.log(isSorted); 
