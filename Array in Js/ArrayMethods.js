
// important array method

// const numbers = [4,2,6,7,1];

// function multiplyBy2(number, index){
//     console.log("index ", index);
//     console.log(`${number}*2 => ${number*2}`);
// }
// for(let i = 0; i < numbers.length; i++){
//     multiplyBy2(numbers[i], i);        
// }


// forEach method

// const user = [
//     {firstName: "manish", age: 23},
//     {firstName: "rahul", age: 25},
//     {firstName: "noman", age: 22}
// ];
// user.forEach(function(user){
//     console.log(user.firstName, user.age);
// })
// console.log("end loop from here");

// user.forEach((user, index) => {
//     console.log(user.firstName, index);
// })

// map method
const number = [3,6,2,7,4];

const square = function(number, index){
    
    return (`${index} => ${number*number}`);
}

// const squareNumber = number.map(square);
// console.log(squareNumber);
 
let index = 0;
console.log(number.map(square, index));

// filter method

const numbers = [1, 3, 4, 5, 2, 7,6];

const evenNumber = numbers.filter((number) => {
    return number % 2 === 0;
})
console.log(evenNumber);


// reduce method
const nums = [1,2,3,4,5];
const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 42000},
    {productId: 3, productName: "smart tv", price: 14000},
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0)
console.log(totalAmount);


// sort() method

const n = [5, 9, 1200, 410, 3000];
// ["5", "9", "1200", "410", "3000"]  stored in memory as string
// [53, 57, 49, 52, 51]  ASCII value respective element 
// [49, 51, 52, 53, 57]  sorting ASCII value
// [1200, 3000, 410, 5, 9]  output according to ASCII

console.log(n.sort());

n.sort((a, b) => {
    return a - b;   // sorting in accendign order
    // return b - a;   // sorting in deccending order
});
console.log(n);

const str = ["apple", "grapes", "orange", "banana"];
console.log(str.sort());