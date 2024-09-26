const RemoveDuplicate = (arr)=>{
    return [... new Set(arr)];
}

console.log(RemoveDuplicate([1,1,2,5,5,5,6,3,3,2,2,4,8,9,2,9]))