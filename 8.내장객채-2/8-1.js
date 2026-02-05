let now = new Date();
console.log(now);          // 현재 날짜 및 시간
console.log(now.getFullYear()); // 연도
console.log(now.getMonth()+1)
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

let myDate = new Date('2025-12-25')
console.log(myDate.toDateString())

let futureDate = new Date()

futureDate.setDate(futureDate.getDate()+7)

console.log(futureDate)