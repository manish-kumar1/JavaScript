// lexical scope

// const myVar = "value";
// function myApp(){
//     const myVar = "value1";
    
//     function myFunc(){
//         console.log("inside myFunc", myVar);
//     }

//     console.log(myVar);
//     myFunc();
// }
// myApp();


// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//     const firstName = "Manish";
//     console.log(firstName);
// }


// {
//     const firstName = "Mohit";
//     console.log(firstName);
// }

// const firstName = "garima";
// console.log(firstName);

// {
//     var namae = "manish";
// }
// console.log(namae);


// defualt parametere

// function addTwo (a, b=0){
//     return a+b;
// }
// const ans = addTwo(4, 8);
// console.log(ans);

// rest parameter

// function myFunction(a, b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunction(1,3,4,5,6);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }

// const ans = addAll(4,5,6,3,7);
// console.log(ans);               

// program destructuring

// object
// react

const person = {
    firstName : "manish",
    gender : "male",
}
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// printDetails(person);

function printDetails({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}
printDetails(person);