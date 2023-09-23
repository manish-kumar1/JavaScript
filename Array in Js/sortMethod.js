
const products = [
    {productId: 1, ProductName: "Mob-1", price: 23000},
    {productId: 2, ProductName: "Mob-2", price: 3000},
    {productId: 3, ProductName: "Mob-3", price: 13000},
    {productId: 4, ProductName: "Mob-4", price: 5000},
    {productId: 5, ProductName: "Mob-5", price: 2000},
];
// lowToHigh

const lowToHigh = products.sort((a, b) => {
    return a.price - b.price;
});
console.log(lowToHigh);

const highToLow = products.sort((a, b) => {
    return b.price - a.price;
});
console.log(highToLow);