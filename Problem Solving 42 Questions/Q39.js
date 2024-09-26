// Given a string, check if all brackets are closed properly. Example:Input: "{[()]}" Output: true

const str = "{[()]}";

// function isValidBrackets(str) {
//     const stack = [];
//     const openingBrackets = ['(', '{', '['];
//     const closingBrackets = [')', '}', ']'];

//     for (let char of str) {
//         if (openingBrackets.includes(char)) {
//             stack.push(char);
//         } else if (closingBrackets.includes(char)) {
//             if (stack.length === 0 || openingBrackets.indexOf(stack.pop()) !== closingBrackets.indexOf(char)) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// }

// console.log(isValidBrackets(str)); 




const isValidBrackets = (str) => {

    const validator = {
        '(':')',
        '{':'}',
        '[':']'
    }

    let splited = str.split("")
    for(let i=0; i<(str.length-1)/2; i++){
        if(!(validator[splited.shift()]==splited.pop())){
            return false
        }
    }

    return true

}

console.log(isValidBrackets(str));  