
// how to clone array
// how to concatenate two arrays

let array1 = ["item1", "item2"];

// cloning array
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);

// new way
// spread operator

// let array2 = [...array1].concat(["item3", "item4"]);
let array2 = [...array1, "item3", "item4"];
array1.push("item3");

let oneMoreArr = ["item6", "item7"];

console.log(array1 === array2);
console.log(array1);
console.log(array2);