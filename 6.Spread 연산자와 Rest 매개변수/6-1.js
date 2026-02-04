let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = [4,5,...arr1];

const combineArr = [...arr1,...arr2]

console.log(newArr)
console.log(combineArr)