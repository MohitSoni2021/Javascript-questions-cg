function sortArrayAscending(nums) {
    return nums.sort((a, b) => a - b);
}


const nums = [4, 2, 8, 5, 1];
const sortedNums = sortArrayAscending(nums);
console.log(sortedNums); 
