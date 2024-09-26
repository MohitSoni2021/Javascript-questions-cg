const arr = [1, -2, 3, -4, 5, -6];

let positiveCount = 0;
let negativeCount = 0;

arr.forEach(num => {
    if (num > 0) {
        positiveCount++;
    } else if (num < 0) {
        negativeCount++;
    }
});


console.log(`Positive numbers: ${positiveCount}, Negative numbers: ${negativeCount}`);
