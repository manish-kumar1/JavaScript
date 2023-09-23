
// some method
// if any one statement is true than it return true.

const userCart = [
    {productId: 1, productName: "hp laptop", price: 44000},
    {productId: 2, productName: "lenvo laptop", price: 30000},
    {productId: 3, productName: "redmi mobile", price: 12000},
    {productId: 4, productName: "mac laptop", price: 120000},
    {productId: 5, productName: "dell laptop", price: 40000},
];
const ans = userCart.some((cartItem) => cartItem.productId ===  4 );
console.log(ans);   // true

const result = userCart.some((cartItem) => cartItem.price > 50000);
console.log(result);  // true

const uttar = userCart.some((cartItem) => cartItem.productName === "black berry");
console.log(uttar);  // false