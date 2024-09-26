function categorizeAge(age) {
    if (age < 13) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else if (age >= 20 && age <= 59) {
        return "Adult";
    } else if (age >= 60) {
        return "Senior";
    } else {
        return "Invalid age"; 
    }
}


const age1 = 10;
const age2 = 15;
const age3 = 30;
const age4 = 65;

console.log(`Age ${age1}: ${categorizeAge(age1)}`); 
console.log(`Age ${age2}: ${categorizeAge(age2)}`); 
console.log(`Age ${age3}: ${categorizeAge(age3)}`); 
console.log(`Age ${age4}: ${categorizeAge(age4)}`); 
