function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;

    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    });

    return { evenCount, oddCount };
}


const nums = [4, 2, 8, 5, 1, 7];
const result = countEvenOdd(nums);
console.log(`Even numbers: ${result.evenCount}, Odd numbers: ${result.oddCount}`);
