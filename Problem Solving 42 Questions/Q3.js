function classifyTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        return "Not a valid triangle";
    }

    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}


console.log(classifyTriangle(5, 5, 5)); 
console.log(classifyTriangle(5, 5, 3)); 
console.log(classifyTriangle(5, 4, 3)); 
console.log(classifyTriangle(1, 2, 3)); 
