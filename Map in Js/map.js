
// Maps
// map is an iterable
// store data in ordered fashion
// store key value pair(like object)
// duplicate keys are not allowed like objects

// different between maps and objects
// objects can only have string or symbol
// as key

// in maps you can use anythis as key
// like array, number, string

// object literal
// key -> string
// key -> symbol
// const person = {
//     firstName: "Manish",
//     age: 23,
//     1: "one",
// };
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person['1']);

// for(let key in person){
//     console.log(typeof key);
// }



// key value pair input empty parameter

// const user = new Map();
// user.set('firstName', 'Manish');
// user.set('age', 45);
// user.set('address', 'Bihar');
// user.set('marks', 90);
// user.set([1,2,3], 'onetowthree');
// user.set({1: 'one'}, 'fourfirve');
// console.log(user);


// get data with the help of key 
// console.log(user.get('address'));  // Bihar
// print all key in map
// console.log(user.keys());

// console.log("keys in map user");
// for(let key of user.keys()){
//     console.log(key, typeof key);
// }


// iterable key value pair

// for(let [key, value] of user){
//     console.log(key, value);
// }


// map using parameter
const student = new Map([['Name', 'Manish'], ['rollNo', 1234], ['brach', 'cse'], ['percentage', 80]]);
console.log(student);


const person1 = {
    firstName: 'manish',
    age: 23,
    height: 6,
};
const person2 = {
    firstName: "sanju",
    age: 22,
    height: 5.5,
};
const extraInfo = new Map();
extraInfo.set(person1, {rollNo: 100, gender: 'male'});
extraInfo.set(person2, {address: "Bihar", gender: 'female'});

console.log("age from person1 -> "+person1.age);
console.log(extraInfo.get(person1).rollNo);
console.log(extraInfo.get(person2).gender);



// clone using object.assing
// memory

const obj1 ={
    key1: "value1",
    key2: "value2",
};

// clone using spread operator 
// const obj2 = {...obj1};
// another way
const obj2 = Object.assign({}, obj1);

obj1.key3 = "value3";
console.log(obj1);
console.log(obj2);


// optional chaingin

const user = {
    firstName: "manish",
    address: {houseNumber: '1234'}
}
console.log(user?.firstName);
console.log(user?.address?.houseNumber);