function checkCharacter(char) {
    
    const lowerChar = char.toLowerCase();
    
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    
    if (lowerChar.length === 1 && /^[a-z]$/.test(lowerChar)) {
        if (vowels.includes(lowerChar)) {
            return `${char} is a vowel.`;
        } else {
            return `${char} is a consonant.`;
        }
    } else {
        return 'Please enter a single alphabetic character.';
    }
}


console.log(checkCharacter('A'));
console.log(checkCharacter('b'));
console.log(checkCharacter('1'));
console.log(checkCharacter(''));
