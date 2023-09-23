
// find method

const petsAnimal = ["Elephant", "lion", "Cow", "Dog", "Goat"];

function isLength(string){
    for(let i = 0; i < petsAnimal.length; i++){
        if(petsAnimal[i].length === 4){
            return petsAnimal[i];
        }
    }
    return -1;
}
let ans = isLength();
console.log(ans);


const petsAnimals = ["cat", "camel", "horse", "elephant"];
function isAvailable(string){
    return string.length === 5;
}
console.log(petsAnimals.find(isAvailable));
// arrow function
console.log(petsAnimals.find((string)=> string.length == 5));


const users = [
    {userId: 1, userName: "manish"},
    {userId: 2, userName: "mohit"},
    {userId: 3, userName: "cutigarima"},
    {userId: 4, userName: "mantosh"},
    {userId: 5, userName: "abhishek"},
    {userId: 6, userName: "deepika"},
];
// const myUser = users.find((user) => user.userId === 3);
// console.log(myUser);

// or
const myUser = users.find((user) => {
    return user.userId === 4;
});
console.log(myUser);