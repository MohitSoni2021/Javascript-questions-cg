function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return "Array is empty. Cannot calculate average.";
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return average;
}


console.log(calculateAverage([1, 2, 3, 4, 5]));
console.log(calculateAverage([])); 
console.log(calculateAverage([10, 20, 30])); 
