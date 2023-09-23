
// spread operator 

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2, 8, 9];
// const newArray = [..."12345"];
console.log(newArray);

const obj1 = {
    key1 : "value1",
    key2 : "value2"
};
console.log(obj1);

const obj2 = {
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4",
};

// const newObject = {...obj2, ...obj1}; // kye : value
const newObject = {..."abcd"};
console.log(newObject);