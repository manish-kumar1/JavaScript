
let Animal = ["lion", "tiger", "elephant", "dog", "cat"];

// for(let i = 0; i < Animal.length; i++){

//     // console.log(Animal[i]);
//     // console.log(Animal[i].toUpperCase());

//     // console.log(Animal[i].toLowerCase());
// }

// let newAnimal = [];
// for(let i = 0; i < Animal.length; i++){
//     newAnimal.push(Animal[i].toUpperCase());
// }
// console.log(newAnimal);
// console.log(newAnimal.sort());
// console.log(newAnimal.reverse());

for(let idx = 0; idx < Animal.length; idx++){
    if(Animal[idx] == "elephant"){
        continue;
    }
    console.log(Animal[idx]);
}