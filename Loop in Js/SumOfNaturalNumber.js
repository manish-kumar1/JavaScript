
// sum of natural number 1+2+3+4+5+.....

// let n = 1;
// let sum = 0;
// while (n <= 100){
//     sum = sum + n;
//     n++;
// }
// console.log(sum);

// sum of natural number using formula 
let number = 100;
let sum = 0;

sum = number*(number + 1)/2;
console.log(sum);


// sum of only even number

let num = 1;
let sum1 = 0;

while(num <= 10){
    if(num % 2 == 0){
        sum1 = sum1 + num;
    }
    num++;
}
console.log(sum1);