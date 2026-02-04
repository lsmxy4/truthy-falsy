const person = { name: 'John', age: 25 };

const updatePerson = {
    city:'seoul',
    ...person
}

console.log(updatePerson)