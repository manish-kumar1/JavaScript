
function createUsers(firstName, lastName, email, age, address){
    const user = Object.create(createUsers.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
};
createUsers.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUsers.prototype.isAge18 = function(){
    return this.age >= 18;
};
createUsers.prototype.sing = function(){
    return "la la la";
};
const user1 = createUsers('harshit', 'kumar', 'harshit@gmail.com', 19, 'bhopal');
const user2 = createUsers('manish', 'mehta', 'mani@gmail.com', 23, 'bihar');
console.log(user1);
console.log(user1.isAge18());
console.log(user2.about());