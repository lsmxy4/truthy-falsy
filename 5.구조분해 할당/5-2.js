const person = {
  name: "Alice",
  age: 25,
  city: "Seoul"
};

const {name,age,city} = person

console.log(name,age,city)

const user = { username: "john_doe", password: "12345" };

const{
    username:userId,
    password:userPass
} = user

console.log(userId)

const settings = { theme: "dark" };

const{theme,fontSize =16} = settings

console.log(fontSize)