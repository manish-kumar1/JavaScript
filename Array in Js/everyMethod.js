
// every method
// check all condition at all element is true than it will be true otherwise false

const userCart = [
    {productId: 1, productName: "mobile", price: 10000},
    {productId: 2, productName: "laptop", price: 50000},
    {productId: 3, productName: "smart tv", price: 40000},
    {productId: 4, productName: "iphone", price: 55000},
];
const ans = userCart.every((cartItem) => cartItem.price >= 10000);
console.log(ans);   // true;

const answer = userCart.every((cartItem) => cartItem.price > 10000);
console.log(answer);  // false