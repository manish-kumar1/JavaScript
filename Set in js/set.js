
// Sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique item only(no duplicates allowed)
// const items = ['item1',.....];

const numbers = new Set();;
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);

// numbers.add(['item1', 'item2']);
// numbers.add(['item1', 'item2']);
console.log(numbers);


if(numbers.has(1)){
    console.log("1 is present");
}
else{
    console.log("1 not present");
}

// accessing data using for loop

// for(let number of numbers){
//     console.log(number);
// }

const nums = [1,2,4,4,5,6,6];
const uniqeElements = new Set(nums);
console.log(uniqeElements);

// length of uniueElements
let length = 0;
for(let i of uniqeElements){
    length++;
}
console.log(length);