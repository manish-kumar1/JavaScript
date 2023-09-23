
// function experession

const HappyBirthday = function(){
    console.log("Happy Birthday to you....");
}
HappyBirthday();

const TwoSumNumbers = function(num1, num2){
    return num1 + num2;
}
console.log(TwoSumNumbers(3,4));

const isEven = function(num){
    return num % 2 === 0;
}
console.log(isEven(4));

// check given number is prime or not

const checkPrime = function(num){

    let i = 2;
    let isPrime = true;

    while( i < num){
        if(num % i === 0){
            console.log("Not prime number");
            isPrime = false;
            break;
        }
        i++;
    }
    if(isPrime === true){
        console.log("Prime Number");
    }
}
checkPrime(5);