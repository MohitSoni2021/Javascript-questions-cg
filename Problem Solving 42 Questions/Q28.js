function printLargestNumber(num1, num2) {
    if (num1 > num2) {
        console.log(num1); 
    } else if (num2 > num1) {
        console.log(num2);
    } else {
        console.log("Both numbers are equal."); 
    }
}

printLargestNumber(10, 20); 
printLargestNumber(30, 15); 
printLargestNumber(25, 25); 