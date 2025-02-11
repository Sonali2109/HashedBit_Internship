const person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};
function greetPerson(personObj) {
    console.log(`Hello, my name is ${personObj.name}, I am ${personObj.age} years old and work as a ${personObj.occupation}.`);
}
greetPerson(person);