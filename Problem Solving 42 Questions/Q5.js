function isEligibleToVote(age) {
    if (typeof age === 'number' && age >= 18) {
        return "You are eligible to vote.";
    } else if (typeof age === 'number' && age < 18) {
        return "You are not eligible to vote.";
    } else {
        return "Please enter a valid age.";
    }
}


console.log(isEligibleToVote(20)); 
console.log(isEligibleToVote(16)); 
console.log(isEligibleToVote('18')); 
console.log(isEligibleToVote(-5)); 
