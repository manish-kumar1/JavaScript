
// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = {name:"Manish", age:22};
const key = "email";
const person = {
    name: "manish",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
// console.log(person);

// how to access data from objects
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies)

// how to add key value pair to objects
// person.gender = "male";
// console.log(person);

// person[key] = "manish@gmail.com";
// console.log(person);

// how to iterate object
for(let key in person){
    // console.log(key);
    // console.log(person[key]);  
    console.log(`${key} : ${person[key]}`);
}