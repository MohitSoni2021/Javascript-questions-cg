function isCenturyYear(year) {
    if (year % 100 === 0) {
        return true; 
    } else {
        return false; 
    }
}


const year1 = 1900;
const year2 = 2021;
const year3 = 2000;

console.log(`${year1} is a century year: ${isCenturyYear(year1)}`); 
console.log(`${year2} is a century year: ${isCenturyYear(year2)}`); 
console.log(`${year3} is a century year: ${isCenturyYear(year3)}`); 
