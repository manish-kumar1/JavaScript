
// falsy values

// false
// ""
// null
// undefined
// 0

let n = false;
if(n){
    console.log("if statement");
}
else{
    console.log("else statement");
}

// truthy values

// "abc"
// 1
// -1
// 3.4

let a = -1;
if(a){
    console.log("if statement");
}
else{
    console.log("else statement");
}

// ternary operator 

let age = 3;

let drink = age >= 5 ? "Coffee" : "Milk";
console.log(drink);