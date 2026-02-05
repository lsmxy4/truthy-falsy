let set = new Set([1, 2, 3, 3, 4, 5]);
console.log(set.has(6));
set.delete(3)
set.add(6)

console.log(set);
console.log(set.size);


const numbers = [1, 2, 2, 3, 4, 4, 5]
const uniqueNumbers = [...new Set(numbers)]

console.log(uniqueNumbers)