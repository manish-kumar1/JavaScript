
// iterable 
// jispe hum for of loop laga sakein 
// string and array are itearable

// iterable at string
const firstName = "manish";
for(let i = 0; i < firstName.length; i++){
    console.log(firstName[i]);
}

// iterable at array
const items = ['item1', 'item2', 'item3', 'item4'];
for(let item of items){
    console.log(item);
}

// array like object
// jinke pas length properties hoti hai
// aur jiska hum index se access kar sakte hai
// exmple -> string

const Name = "Harshit";
console.log(Name);
console.log(Name.length);
console.log(Name[2]);