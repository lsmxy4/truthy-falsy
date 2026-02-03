const users = [
    { name: "John", age: 30 }, 
    { name: "Jane", age: 25 }
];

const[
    {name:firstUserName},
    {name:secondUserName}
] = users

const [
    {age:age1},
    {age:age2}
] = users

console.log(firstUserName)
console.log(secondUserName)
console.log(age1)
console.log(age2)

const student = {
  name: "Tom",
  grades: {
    math: 90,
    science: 85
  }
};

const{
    name,
    grades:{
        math,science
    }
}= student

console.log(math)