
// string array

let fruits = ["apple", "banana", "grapes"];
console.log(fruits);

fruits[2] = "mango";
console.log(fruits);

// length of array
console.log("Length of array "+fruits.length);

// reverse array
console.log(fruits.reverse());

// sort array
console.log(fruits.sort());

// array slice(start, end)
console.log(fruits.slice(1,2));

// isArray
console.log(Array.isArray(fruits));

// typeof fruits
console.log(typeof fruits);

// push()
fruits.push("kela");
console.log(fruits);

// pop()
let popedData = fruits.pop();
console.log("Poped fruit -> "+popedData);
console.log(fruits);

// shift()
let removeFirstData = fruits.shift();
console.log("poped first data -> "+removeFirstData);
console.log(fruits);

// unshift()
fruits.unshift("bigKele");
console.log(fruits);
