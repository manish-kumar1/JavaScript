"use strict";

function personInfo(){
    console.log(`person name ${this.firstName} and age ${this.age}`);
}

const person1 = {
    firstName: "manish",
    age: 21,
    about: personInfo,
};
const person2 = {
    firstName: "noman",
    age: 20,
    about: personInfo,
};
const person3 = {
    firstName: "deepak",
    age: 24,
    about: personInfo,
};
const person4 = {
    firstName: "harshit",
    age: 21,
    about: personInfo,
};

// person1.about();
// person2.about();
// person3.about();
// person4.about();

// window object
// console.log(window);
// console.log(this === window);

// after use strict it will not work
// function myFunc(){
//     console.log(this);
// }
// myFunc();


// call() method

function Hello(){
    console.log("Hello world");
}
Hello.call();


// const user1 = {
//     firstName: "harshit",
//     age: 23,
//     branch: "cse",
//     about: function(){
//         console.log(this.firstName, this.age, this.branch);
//     }
// }
// const user2 = {
//     firstName: "mohit",
//     age: 9,
//     branch: "civil",
//     about: function(){
//         console.log(this.firstName, this.age, this.branch);
//     }
// }
// const user3 = {
//     firstName: "chandan",
//     age: 53,
//     branch: "me",
// }
// user1.about.call(user1);
// user1.about.call(user2);
// user1.about.call(user3);


// function about(hobby, favSong){
//     console.log(this.firstName, this.age, this.branch, hobby, favSong);
// }
// const user1 = {
//     firstName: "harshit",
//     age: 23,
//     branch: "cse",
//     // about: function(hobby, favSong){
//     //     console.log(this.firstName, this.age, this.branch);
//     // }
// }
// const user2 = {
//     firstName: "mohit",
//     age: 25,
//     branch: "civil",
//     // about: function(){
//     //     console.log(this.firstName, this.age, this.branch);
//     // }
// }
// call()
// about.call(user1, "cricket", "english");
// about.call(user2, "cricket", "english");

// apply
// about.apply(user1, ['cricket', 'hindi']);

// bind()
// const func = about.bind(user2, 'guitar', 'english');
// func();




// const user1 = {
//     firstName: "harshit",
//     age: 23,
//     branch: "cse",
//     about: function(hobby, favSong){
//         console.log(this.firstName, this.age, this.branch);
//     }
// }
// const user2 = {
//     firstName: "mohit",
//     age: 25,
//     branch: "civil",
//     // about: function(){
//     //     console.log(this.firstName, this.age, this.branch);
//     // }
// }

// const myFunc = user1.about.bind(user2);
// myFunc();




// arrow function
// arrow function don't use 'this'

// const user1 = {
//     firstName: "harshit",
//     age: 34,
//     address: "Bhopal",
//     about: () =>{
//         console.log(this.firstName, this.age, this.address);
//     }
// }
// user1.about();



const user1 = {
    firstName: "manish",
    age: 34,
    rollNo: 494,
    about(){
        console.log(this.firstName, this.age, this.rollNo);
    }
}
user1.about();



