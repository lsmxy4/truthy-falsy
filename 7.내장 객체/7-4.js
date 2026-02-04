let arr = [1, 2, 3, 4, 5];

// arr.push(6)
// arr.pop()
// arr.unshift(0)
// arr.shift()

console.log(arr.map(x => x*2))
console.log(arr.filter(x => x>2))
console.log(arr.reduce((sum,x) => sum+x,0   ))