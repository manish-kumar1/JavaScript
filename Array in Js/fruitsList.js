
const fruitList = ["Apple", "Banana", "Mango", "Tomato"];
fruitList.push("Grapes");
console.log(fruitList);

let i = 0;
while(i < fruitList.length){
    console.log(fruitList[i].toUpperCase());
    i++;
}
console.log("after loop is ended is executed");

// for of loop
for(let fruits of fruitList){
    console.log(fruits);
}