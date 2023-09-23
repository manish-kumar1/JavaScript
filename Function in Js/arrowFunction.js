
// arrow function

const HappyBirthday = () => {
    console.log("Happy Birthday to you...");
}
HappyBirthday();


const TwoSum = (num1, num2) => {
    return num1 + num2;
}
const ans = TwoSum(12, 3);
console.log(ans);


const isEven = (num) => {
    return num % 2 === 0;
}
console.log(isEven(8));


const firstChar = (anyString) => {
    return anyString[0];
}
console.log(firstChar("Manish"));


// function
// input -> integer array, nums[] and target value (number)
// find target element in array and return it index

const findTarget = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}
let nums = [3, 4, 2, 5, 6];
console.log(findTarget(nums, 5));