let obj = { name: "Alice", age: 25 };
let jsonStr = JSON.stringify(obj);
console.log(jsonStr);  // '{"name":"Alice","age":25}'

JSON.parse(jsonStr)
console.log(jsonStr);  // '{"name":"Alice","age":25}'