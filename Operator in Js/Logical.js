
// logical Operator &&, ||, !

let Name = "Manish";
let age = 30;

if(Name[0] == "M" && age == 30){
    console.log("You are Manish Kumar");
}
else{
    console.log("Don't kwon about your self");
}

if(Name[Name.length-1] == "h" || age <= 29){
    console.log("All is good");
}
else{
    console.log("else part is execute something is wrong");
}

console.log(!(age == 30));