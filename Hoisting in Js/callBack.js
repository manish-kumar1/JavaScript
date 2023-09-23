
// callback()
function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}
function myFunc(callback){
    console.log("hello there i am a func ans i can..");
    callback("manish");
}
myFunc(myFunc2);