
// function createUser(firstName, lastName, email, age, address, branch){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.branch = branch;

//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`;
//     };
//     user.isAge = function(){
//         return this.age >= 18;
//     }
//     return user;
// }
// const user1 = createUser('Harshit', 'Kumar', 'harshit@gmail.com', 20, 'Bhopal', 'cse');
// console.log(user1);
// console.log(user1.age > 18);


// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     isAge: function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName, lastName, email, age, address, branch){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.branch = branch;
//     user.about = userMethods.about;
//     user.isAge = userMethods.branch
//     return user;
// }

// const user1 = createUser('manish', 'kumar', 'mks@gmail.com', 43, 'bhopal', 'cse');
// console.log(user1);
// const user2 = createUser('mukesh', 'shah', 'mukesh@gmail.com', 33, 'bihar', 'civil');
// console.log(user2);





// proto

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value4",
// };
// const obj2 = Object.create(obj1);
//there is one more may to create empty object

// obj2.key3 = "value3";

// console.log(obj2.key3);  // value4

// console.log(obj2);     // {} [[Prototype]]

//this is happening
// console.log(obj2.__proto__);




// function prototype

function hello(){
    console.log("Hello world");
}

// javaScript function ===> function + object
// console.log(hello.name);    // return function name

// you can add your own properties
// hello.myOwnProperties = "very unique value";
// console.log(hello.myOwnProperties);

// name properties more usefull properties

// console.log(hello.prototype);   // {}

// only functions proviede prototype properties

// if(hello.prototype){
//     console.log("prototype is present");
// }
// else{
//     console.log("prototype is not present");
// }


hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";

hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());