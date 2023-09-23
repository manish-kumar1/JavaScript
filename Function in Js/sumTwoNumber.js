
function sumTwoNumber() {
    let num1 = 34;
    let num2 = 21;

    let sum = num1 + num2;
    console.log(sum);
}
sumTwoNumber();

function sumThreeNumbers(num1, num2, num3){
    return num1 + num2 + num3;
}
const returnValue = sumThreeNumbers(34, 2, 5);
console.log(returnValue);

// isEven number

function isEvenOrOdd(num){
    
    // return num % 2 === 0;
    if(num % 2 === 0){
        return true;
    }
    return false;
}
console.log(isEvenOrOdd(5));