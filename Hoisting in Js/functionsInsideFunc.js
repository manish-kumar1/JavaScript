
// functions inside function

function app(){
    const myFunc = () => {
        console.log("Hello from myFunc");
    }
    const addTwo = (a, b) => {
        return a + b;
    }
    const mul = (num1, num2) => num1 * num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(3,4));
    console.log(mul(4,3));
}
app();