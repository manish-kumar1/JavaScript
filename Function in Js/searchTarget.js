
// function
// input -> integer array, target
// output -> index of target if target present in array


// function decleration

function findTarget1(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

let array2 = [3, 5, 2, 6, 9];
let ans = findTarget1(array2, 5);
console.log(ans);

// function experession
const findTarget = function(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}
let array = [2,3,4,5,1];
console.log(findTarget(array, 1));