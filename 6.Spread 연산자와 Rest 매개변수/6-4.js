function sum(...numbers) {
  // array.reduce((누적값, 현재값) => { 연산 }, 초기값);
  return numbers.reduce((acc,cur) => acc*cur, 1)
}

// console.log(sum(1,2,3,4,5,6,7,8,9))

function multiply(num,...args) {

    return args.map(arg =>arg*num)
}

console.log(multiply(3,1,2,3))