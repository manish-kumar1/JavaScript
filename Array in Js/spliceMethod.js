
// splice method 
// start, delete, insert

const myArray = ['item1', 'item2', 'item3'];
// delete
const deletedItem = myArray.splice(1, 2);
console.log(deletedItem);

// insert
myArray.splice(1, 0 ,'inserted item');
console.log(myArray);

// insert and delete
const deletedItem2 = myArray.splice(1, 2, "inserted item3");
console.log(deletedItem2)
console.log(myArray);