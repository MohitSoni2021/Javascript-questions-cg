// The "Max Consecutive Ones" problem is a common algorithmic challenge that involves finding the maximum number of consecutive 1s in a binary array.

function maxConsecutiveOnes(arr) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

console.log(maxConsecutiveOnes([1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]))